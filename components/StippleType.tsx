"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export interface StippleTypeProps {
  /** The headline text to render */
  text: string;
  /** Semantic HTML tag (default: "h1") */
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  /** Additional Tailwind / CSS classes */
  className?: string;
  /** Radius in pixels around cursor that stirs the ink (default: 110) */
  stirRadius?: number;
  /** Swirl rotational momentum factor (default: 1.6) */
  swirlStrength?: number;
  /** Primary ink color (default: "#ffffff") */
  inkColor?: string;
  /** Accent marble tint color (default: "#93c5fd" - soft ice blue) */
  accentColor?: string;
  /** Whether to run a gentle automatic stir sweep periodically when untouched (default: true) */
  autoStir?: boolean;
  /** Seconds between idle auto-stir sweeps (default: 8.5) */
  autoStirInterval?: number;
}

interface StippleDot {
  // Origin / resting position
  ox: number;
  oy: number;
  // Dynamic current position & velocity
  x: number;
  y: number;
  vx: number;
  vy: number;
  // Dot radius & grain characteristics
  radius: number;
  baseRadius: number;
  alpha: number;
  // Marbled ink tint
  color: string;
  // Organic swirl phase offset
  phase: number;
}

/**
 * StippleType (React Bits Pro specification)
 * A marbled-ink headline that swirls and breaks into fine stipple grain as you stir it.
 * Provides accessible semantic typography with zero CLS, layered with an organic
 * 60FPS fluid-vortex stipple particle canvas.
 */
export default function StippleType({
  text,
  as: Component = "h1",
  className = "",
  stirRadius = 110,
  swirlStrength = 1.6,
  inkColor = "#ffffff",
  accentColor = "#93c5fd",
  autoStir = true,
  autoStirInterval = 8.5,
}: StippleTypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dotsRef = useRef<StippleDot[]>([]);
  const isVisibleRef = useRef<boolean>(true);
  const isStirringRef = useRef<boolean>(false);
  const [isActivelyStirred, setIsActivelyStirred] = useState<boolean>(false);

  const mouseRef = useRef<{
    x: number;
    y: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    active: boolean;
  }>({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    active: false,
  });

  const animFrameRef = useRef<number | null>(null);
  const autoStirTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoSweepRef = useRef<{ active: boolean; x: number; y: number; progress: number }>({
    active: false,
    x: 0,
    y: 0,
    progress: 0,
  });

  /**
   * Sample the rendered headline typography and generate stipple ink dots
   */
  const generateStippleMap = useCallback(() => {
    const el = textRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;

    const rect = el.getBoundingClientRect();
    const width = Math.max(Math.ceil(rect.width), 40);
    const height = Math.max(Math.ceil(rect.height), 40);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Offscreen canvas for typography rasterization & pixel sampling
    const off = document.createElement("canvas");
    off.width = Math.round(width * dpr);
    off.height = Math.round(height * dpr);
    const offCtx = off.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    offCtx.scale(dpr, dpr);

    const computed = window.getComputedStyle(el);
    const fontSize = parseFloat(computed.fontSize) || 36;
    const fontFamily = computed.fontFamily || "sans-serif";
    const fontWeight = computed.fontWeight || "bold";
    const lineHeight = parseFloat(computed.lineHeight) || fontSize * 1.15;
    const textAlign = (computed.textAlign as CanvasTextAlign) || "left";

    offCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    offCtx.fillStyle = "#ffffff";
    offCtx.textBaseline = "top";

    // Multi-line word wrap
    const words = text.split(" ");
    let line = "";
    const lines: string[] = [];
    for (let i = 0; i < words.length; i++) {
      const test = line + words[i] + " ";
      if (offCtx.measureText(test).width > width && i > 0) {
        lines.push(line.trim());
        line = words[i] + " ";
      } else {
        line = test;
      }
    }
    lines.push(line.trim());

    const totalH = lines.length * lineHeight;
    const startY = Math.max((height - totalH) / 2, 0);

    lines.forEach((l, idx) => {
      let x = 0;
      if (textAlign === "center") {
        x = width / 2 - offCtx.measureText(l).width / 2;
      } else if (textAlign === "right") {
        x = width - offCtx.measureText(l).width;
      }
      offCtx.fillText(l, x, startY + idx * lineHeight);
    });

    // Sample pixels to extract stipple grain points
    const imgData = offCtx.getImageData(0, 0, off.width, off.height);
    const data = imgData.data;
    const step = Math.max(Math.round(dpr * 3.2), 3);
    const dots: StippleDot[] = [];

    for (let py = 0; py < off.height; py += step) {
      for (let px = 0; px < off.width; px += step) {
        const idx = (py * off.width + px) * 4;
        const alpha = data[idx + 3];

        if (alpha > 45) {
          // Add organic jitter to stipple coordinates
          const jitterX = (Math.random() - 0.5) * (step * 0.85);
          const jitterY = (Math.random() - 0.5) * (step * 0.85);
          const logX = (px + jitterX) / dpr;
          const logY = (py + jitterY) / dpr;

          const normalizedAlpha = alpha / 255;
          const baseRadius = 0.9 + normalizedAlpha * 1.35;
          const isAccent = Math.random() < 0.18;

          dots.push({
            ox: logX,
            oy: logY,
            x: logX,
            y: logY,
            vx: 0,
            vy: 0,
            radius: baseRadius,
            baseRadius,
            alpha: 0.85 + Math.random() * 0.15,
            color: isAccent ? accentColor : inkColor,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    dotsRef.current = dots;
  }, [text, inkColor, accentColor]);

  /**
   * Fluid Marbled-Ink Stir Physics Loop
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    generateStippleMap();

    let lastTime = performance.now();

    const render = (time: number) => {
      animFrameRef.current = requestAnimationFrame(render);

      if (!isVisibleRef.current) return;

      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const dots = dotsRef.current;
      const mouse = mouseRef.current;
      const sweep = autoSweepRef.current;

      // Handle auto-sweep stirring progress
      if (sweep.active) {
        sweep.progress += dt * 0.9;
        const canvasW = canvas.width / dpr;
        const canvasH = canvas.height / dpr;
        sweep.x = sweep.progress * (canvasW + 160) - 80;
        sweep.y = canvasH * 0.5 + Math.sin(sweep.progress * Math.PI * 3) * (canvasH * 0.35);

        if (sweep.progress >= 1.25) {
          sweep.active = false;
        }
      }

      let totalDisplacement = 0;

      // Update and simulate ink stipple physics
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // 1. Interactive Cursor Stirring: Fluid Vortex & Shear
        if (mouse.active) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < stirRadius) {
            const proximity = 1 - dist / stirRadius;
            const force = proximity * proximity;

            // Perpendicular vortex force (marbled ink swirl)
            const swirlX = (-dy / dist) * swirlStrength * 160 * force;
            const swirlY = (dx / dist) * swirlStrength * 160 * force;

            // Direct push from cursor drag velocity
            const dragForceX = mouse.vx * 0.35 * force;
            const dragForceY = mouse.vy * 0.35 * force;

            dot.vx += (swirlX + dragForceX) * dt;
            dot.vy += (swirlY + dragForceY) * dt;

            // Particle expansion under shear
            dot.radius = dot.baseRadius * (1 + proximity * 0.7);
          }
        }

        // 2. Automated Ambient Sweep Stirring
        if (sweep.active) {
          const dx = dot.x - sweep.x;
          const dy = dot.y - sweep.y;
          const dist = Math.hypot(dx, dy) || 1;
          const sweepRadius = stirRadius * 0.85;

          if (dist < sweepRadius) {
            const proximity = 1 - dist / sweepRadius;
            const force = proximity * proximity;
            const swirlX = (-dy / dist) * 110 * force;
            const swirlY = (dx / dist) * 110 * force;

            dot.vx += swirlX * dt;
            dot.vy += swirlY * dt;
          }
        }

        // 3. Elastic Restoring Force (magnetic return to crisp typography)
        const returnDx = dot.ox - dot.x;
        const returnDy = dot.oy - dot.y;
        const returnDist = Math.hypot(returnDx, returnDy);

        totalDisplacement += returnDist;

        // Non-linear spring: snappy return when displaced, gentle settle near origin
        const springK = 32.0;
        dot.vx += returnDx * springK * dt;
        dot.vy += returnDy * springK * dt;

        // 4. Viscous Fluid Damping (ink friction)
        const damping = Math.pow(0.84, dt * 60);
        dot.vx *= damping;
        dot.vy *= damping;

        // 5. Integrate Position
        dot.x += dot.vx * dt;
        dot.y += dot.vy * dt;

        // Revert particle size towards resting grain
        dot.radius += (dot.baseRadius - dot.radius) * 0.1;

        // 6. Draw Stipple Ink Grain
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(dot.radius, 0.4), 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.alpha;
        ctx.fill();
      }

      ctx.restore();

      // Determine whether the headline is actively displaced
      const isDisplaced = totalDisplacement > dots.length * 0.75;
      if (isDisplaced !== isStirringRef.current) {
        isStirringRef.current = isDisplaced;
        setIsActivelyStirred(isDisplaced);
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (autoStirTimerRef.current) clearTimeout(autoStirTimerRef.current);
    };
  }, [generateStippleMap, stirRadius, swirlStrength]);

  /**
   * Idle Auto-Stir Scheduler
   */
  const scheduleAutoStir = useCallback(() => {
    if (autoStirTimerRef.current) clearTimeout(autoStirTimerRef.current);
    if (!autoStir) return;

    autoStirTimerRef.current = setTimeout(() => {
      if (isVisibleRef.current && !mouseRef.current.active) {
        autoSweepRef.current = {
          active: true,
          x: -80,
          y: 0,
          progress: 0,
        };
      }
      scheduleAutoStir();
    }, autoStirInterval * 1000);
  }, [autoStir, autoStirInterval]);

  useEffect(() => {
    scheduleAutoStir();
    return () => {
      if (autoStirTimerRef.current) clearTimeout(autoStirTimerRef.current);
    };
  }, [scheduleAutoStir]);

  /**
   * Viewport Intersection & Resize Handlers
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (document.fonts) {
      document.fonts.ready.then(() => generateStippleMap());
    } else {
      generateStippleMap();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          scheduleAutoStir();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      generateStippleMap();
    });
    resizeObserver.observe(container);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [generateStippleMap, scheduleAutoStir]);

  // Mouse & Touch Stir Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const curX = e.clientX - rect.left;
    const curY = e.clientY - rect.top;

    const mouse = mouseRef.current;
    if (mouse.prevX !== -9999) {
      mouse.vx = (curX - mouse.prevX) * 18;
      mouse.vy = (curY - mouse.prevY) * 18;
    } else {
      mouse.vx = 0;
      mouse.vy = 0;
    }

    mouse.prevX = curX;
    mouse.prevY = curY;
    mouse.x = curX;
    mouse.y = curY;
    mouse.active = true;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const curX = e.clientX - rect.left;
    const curY = e.clientY - rect.top;
    const mouse = mouseRef.current;
    mouse.prevX = curX;
    mouse.prevY = curY;
    mouse.x = curX;
    mouse.y = curY;
    mouse.active = true;
  };

  const handleMouseLeave = () => {
    const mouse = mouseRef.current;
    mouse.active = false;
    mouse.prevX = -9999;
    mouse.prevY = -9999;
    mouse.vx = 0;
    mouse.vy = 0;
  };

  // Click interaction: Stir droplet ripple impulse
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const dots = dotsRef.current;
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      const dx = dot.x - clickX;
      const dy = dot.y - clickY;
      const dist = Math.hypot(dx, dy) || 1;

      if (dist < stirRadius * 1.5) {
        const factor = (1 - dist / (stirRadius * 1.5)) * 160;
        // Radial droplet explosion + swirl twist
        const angle = Math.atan2(dy, dx) + 0.6;
        dot.vx += Math.cos(angle) * factor;
        dot.vy += Math.sin(angle) * factor;
      }
    }
  };

  // When undisturbed, solid DOM text renders for pristine crisp readability & SEO.
  // When stirred, the Canvas stipple particle fluid simulation renders the marbled swirls.
  const isSolid = !isActivelyStirred && !mouseRef.current.active;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative inline-block w-full max-w-full select-none cursor-grab active:cursor-grabbing ${className}`}
      aria-label={text}
      title="Stir through the headline to swirl the marbled ink"
    >
      {/* 
        Semantic HTML Heading: 100% accessible, guaranteed 0 CLS.
      */}
      <Component
        ref={textRef as unknown as React.RefObject<HTMLHeadingElement>}
        className={`transition-opacity duration-300 ${
          isSolid ? "opacity-100" : "opacity-0"
        } ${className}`}
      >
        {text}
      </Component>

      {/* Marbled-Ink Stipple Particle Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-200 ${
          isSolid ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
