"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export interface ShatterHeadingProps {
  /** The text string to shatter and reassemble */
  text: string;
  /** HTML heading tag to render semantically */
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  /** Tailwind / CSS class names for styling font, size, leading, weight, and color */
  className?: string;
  /** Seconds the text remains solid before fracturing (default: 3.2s) */
  pauseDuration?: number;
  /** Seconds taken for fracture, dispersal, and reassembly cycle (default: 2.4s) */
  cycleDuration?: number;
  /** Glass shard count multiplier (default: 48 shards) */
  shardCount?: number;
  /** Whether hovering over the heading triggers immediate shatter */
  interactive?: boolean;
}

interface Shard {
  // Triangle vertices relative to center (cx, cy)
  v0: { x: number; y: number };
  v1: { x: number; y: number };
  v2: { x: number; y: number };
  // Original resting centroid in canvas coords
  ox: number;
  oy: number;
  // Dispersal scatter target offset
  targetX: number;
  targetY: number;
  // Dispersal target rotation (radians)
  targetRot: number;
  // Dynamic scale factor during flight
  maxScale: number;
  // Delay offset per shard for organic cascade explosion
  delay: number;
  // Glass sheen opacity
  edgeColor: string;
}

/**
 * ShatterHeading
 * High-performance, automatic looping "Shatter Type" headline component.
 * Periodically splits typography into crystalline glass shards that disperse
 * outward in 3D momentum and magnetically reassemble back into crisp solid text.
 */
export default function ShatterHeading({
  text,
  as: Component = "h1",
  className = "",
  pauseDuration = 3.2,
  cycleDuration = 2.4,
  shardCount = 48,
  interactive = true,
}: ShatterHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isShattered, setIsShattered] = useState(false);
  const isVisibleRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const shardsRef = useRef<Shard[]>([]);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animation state tracking
  const animStartTimeRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Easing helpers
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const easeInBack = (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  };

  /**
   * Render text onto offscreen canvas and build crystalline shards
   */
  const buildShards = useCallback(() => {
    if (!textRef.current || !canvasRef.current) return;

    const el = textRef.current;
    const rect = el.getBoundingClientRect();
    const width = Math.max(Math.ceil(rect.width), 10);
    const height = Math.max(Math.ceil(rect.height), 10);
    const dpr = window.devicePixelRatio || 1;

    // Resize main canvas
    const canvas = canvasRef.current;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Create or resize offscreen canvas
    if (!offscreenCanvasRef.current) {
      offscreenCanvasRef.current = document.createElement("canvas");
    }
    const offscreen = offscreenCanvasRef.current;
    offscreen.width = width * dpr;
    offscreen.height = height * dpr;

    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    offCtx.scale(dpr, dpr);

    // Compute text styles
    const computed = window.getComputedStyle(el);
    const fontSize = parseFloat(computed.fontSize) || 32;
    const fontFamily = computed.fontFamily || "sans-serif";
    const fontWeight = computed.fontWeight || "bold";
    const color = computed.color || "#ffffff";
    const lineHeight = parseFloat(computed.lineHeight) || fontSize * 1.2;
    const textAlign = (computed.textAlign as CanvasTextAlign) || "left";

    offCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    offCtx.fillStyle = color;
    offCtx.textBaseline = "top";

    // Word wrap rendering to match DOM layout
    const words = text.split(" ");
    let line = "";
    const lines: string[] = [];
    const maxLineWidth = width;

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = offCtx.measureText(testLine);
      if (metrics.width > maxLineWidth && i > 0) {
        lines.push(line.trim());
        line = words[i] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());

    // Calculate vertical centering
    const totalTextHeight = lines.length * lineHeight;
    const startY = Math.max((height - totalTextHeight) / 2, 0);

    lines.forEach((l, idx) => {
      let x = 0;
      if (textAlign === "center") {
        x = width / 2 - offCtx.measureText(l).width / 2;
      } else if (textAlign === "right") {
        x = width - offCtx.measureText(l).width;
      }
      offCtx.fillText(l, x, startY + idx * lineHeight);
    });

    // Subdivide the text bounds into polygonal crystalline shards
    const cols = Math.max(Math.round(Math.sqrt(shardCount * 1.6)), 6);
    const rows = Math.max(Math.round(shardCount / cols), 4);
    const cellW = width / cols;
    const cellH = height / rows;

    // Build grid points with randomized interior jitter for organic glass fractures
    const gridPoints: { x: number; y: number }[][] = [];
    for (let r = 0; r <= rows; r++) {
      gridPoints[r] = [];
      for (let c = 0; c <= cols; c++) {
        const jitterX = c === 0 || c === cols ? 0 : (Math.random() - 0.5) * cellW * 0.55;
        const jitterY = r === 0 || r === rows ? 0 : (Math.random() - 0.5) * cellH * 0.55;
        gridPoints[r][c] = {
          x: c * cellW + jitterX,
          y: r * cellH + jitterY,
        };
      }
    }

    const shards: Shard[] = [];
    const centerX = width / 2;
    const centerY = height / 2;

    // Create 2 triangular shards per grid cell
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pTL = gridPoints[r][c];
        const pTR = gridPoints[r][c + 1];
        const pBL = gridPoints[r + 1][c];
        const pBR = gridPoints[r + 1][c + 1];

        // Triangle 1: TL, TR, BR
        const c1X = (pTL.x + pTR.x + pBR.x) / 3;
        const c1Y = (pTL.y + pTR.y + pBR.y) / 3;

        // Dispersal vector radiating from center + chaotic angular momentum
        const dx1 = c1X - centerX;
        const dy1 = c1Y - centerY;
        const dist1 = Math.hypot(dx1, dy1) || 1;
        const spread1 = 80 + Math.random() * 140;

        shards.push({
          v0: { x: pTL.x - c1X, y: pTL.y - c1Y },
          v1: { x: pTR.x - c1X, y: pTR.y - c1Y },
          v2: { x: pBR.x - c1X, y: pBR.y - c1Y },
          ox: c1X,
          oy: c1Y,
          targetX: (dx1 / dist1) * spread1 + (Math.random() - 0.5) * 60,
          targetY: (dy1 / dist1) * spread1 + (Math.random() - 0.5) * 60,
          targetRot: (Math.random() - 0.5) * Math.PI * 2.5,
          maxScale: 0.8 + Math.random() * 0.4,
          delay: Math.random() * 0.12,
          edgeColor:
            Math.random() > 0.5
              ? "rgba(255, 255, 255, 0.75)"
              : "rgba(147, 197, 253, 0.65)",
        });

        // Triangle 2: TL, BR, BL
        const c2X = (pTL.x + pBR.x + pBL.x) / 3;
        const c2Y = (pTL.y + pBR.y + pBL.y) / 3;

        const dx2 = c2X - centerX;
        const dy2 = c2Y - centerY;
        const dist2 = Math.hypot(dx2, dy2) || 1;
        const spread2 = 80 + Math.random() * 140;

        shards.push({
          v0: { x: pTL.x - c2X, y: pTL.y - c2Y },
          v1: { x: pBR.x - c2X, y: pBR.y - c2Y },
          v2: { x: pBL.x - c2X, y: pBL.y - c2Y },
          ox: c2X,
          oy: c2Y,
          targetX: (dx2 / dist2) * spread2 + (Math.random() - 0.5) * 60,
          targetY: (dy2 / dist2) * spread2 + (Math.random() - 0.5) * 60,
          targetRot: (Math.random() - 0.5) * Math.PI * 2.5,
          maxScale: 0.8 + Math.random() * 0.4,
          delay: Math.random() * 0.12,
          edgeColor:
            Math.random() > 0.5
              ? "rgba(255, 255, 255, 0.75)"
              : "rgba(196, 181, 253, 0.65)",
        });
      }
    }

    shardsRef.current = shards;
  }, [text, shardCount]);

  /**
   * Main Shatter & Reassemble Animation Frame Loop
   */
  const triggerShatterAnimation = useCallback(() => {
    if (isAnimatingRef.current || !isVisibleRef.current) return;

    buildShards();
    if (shardsRef.current.length === 0) return;

    isAnimatingRef.current = true;
    setIsShattered(true);
    animStartTimeRef.current = performance.now();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const offscreen = offscreenCanvasRef.current;
    if (!offscreen) return;

    const render = (currentTime: number) => {
      const elapsed = (currentTime - animStartTimeRef.current) / 1000;
      const progress = Math.min(elapsed / cycleDuration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      // Phase progress calculation:
      // 0.0 -> 0.45: Dispersal / Explosion Outward
      // 0.45 -> 0.55: Floating Drift at Apex
      // 0.55 -> 0.95: Gravitational Magnetic Reassembly
      // 0.95 -> 1.0: Crystal Flash Snap to Solid Text
      let dispersalFactor = 0;
      let rotFactor = 0;
      let globalAlpha = 1;

      if (progress < 0.45) {
        // Exploding Outward
        const p = progress / 0.45;
        dispersalFactor = easeOutCubic(p);
        rotFactor = easeOutCubic(p);
      } else if (progress < 0.55) {
        // Floating Drift
        dispersalFactor = 1;
        rotFactor = 1;
      } else if (progress < 0.95) {
        // Magnetic Gravitational Return
        const p = (progress - 0.55) / 0.4;
        dispersalFactor = 1 - easeInOutCubic(p);
        rotFactor = 1 - easeInOutCubic(p);
      } else {
        // Settling lock & flash
        dispersalFactor = 0;
        rotFactor = 0;
        const p = (progress - 0.95) / 0.05;
        globalAlpha = 1 - p * 0.4;
      }

      const shards = shardsRef.current;
      for (let i = 0; i < shards.length; i++) {
        const shard = shards[i];

        // Apply slight delay per shard
        const adjustedFactor = Math.max(
          0,
          Math.min(1, dispersalFactor * (1 + shard.delay) - shard.delay * 0.5)
        );

        const currentX = shard.ox + shard.targetX * adjustedFactor;
        const currentY = shard.oy + shard.targetY * adjustedFactor;
        const currentRot = shard.targetRot * rotFactor;
        const currentScale = 1 + (shard.maxScale - 1) * adjustedFactor;

        ctx.save();
        ctx.translate(currentX, currentY);
        ctx.rotate(currentRot);
        ctx.scale(currentScale, currentScale);

        // Clip to shard triangle
        ctx.beginPath();
        ctx.moveTo(shard.v0.x, shard.v0.y);
        ctx.lineTo(shard.v1.x, shard.v1.y);
        ctx.lineTo(shard.v2.x, shard.v2.y);
        ctx.closePath();

        ctx.save();
        ctx.clip();
        // Draw matching slice from offscreen text canvas
        ctx.drawImage(offscreen, -shard.ox * dpr, -shard.oy * dpr);
        ctx.restore();

        // Draw crystalline glass specular edge highlight
        if (adjustedFactor > 0.02) {
          ctx.strokeStyle = shard.edgeColor;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Subtle crystalline interior sheen reflection
          ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.restore();

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(render);
      } else {
        // Cycle finished: cleanly restore solid HTML headline
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setIsShattered(false);
        isAnimatingRef.current = false;

        // Schedule next automatic periodic loop
        if (isVisibleRef.current) {
          timerRef.current = setTimeout(() => {
            triggerShatterAnimation();
          }, pauseDuration * 1000);
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(render);
  }, [buildShards, cycleDuration, pauseDuration]);

  /**
   * Viewport Intersection Observer & Resize Setup
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for web fonts to load to ensure precise pixel measuring
    if (document.fonts) {
      document.fonts.ready.then(() => {
        buildShards();
      });
    } else {
      buildShards();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          // Trigger initial cycle after short pause on entry
          if (!isAnimatingRef.current) {
            timerRef.current = setTimeout(() => {
              triggerShatterAnimation();
            }, 1200);
          }
        } else {
          // Cancel running animations to free up GPU/CPU
          if (timerRef.current) clearTimeout(timerRef.current);
          if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
          isAnimatingRef.current = false;
          setIsShattered(false);
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      if (!isAnimatingRef.current) {
        buildShards();
      }
    });
    resizeObserver.observe(container);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [buildShards, triggerShatterAnimation]);

  // Interactive Hover Handler
  const handleMouseEnter = () => {
    if (interactive && !isAnimatingRef.current && isVisibleRef.current) {
      if (timerRef.current) clearTimeout(timerRef.current);
      triggerShatterAnimation();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className="relative inline-block w-full max-w-full select-none cursor-default group"
      aria-label={text}
    >
      {/* 
        Semantic HTML Heading for Accessibility & SEO.
        Fades cleanly to opacity-0 during shard dispersal so no layout shift (0 CLS) occurs.
      */}
      <Component
        ref={textRef as unknown as React.RefObject<HTMLHeadingElement>}
        className={`transition-opacity duration-300 ${
          isShattered ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${className}`}
      >
        {text}
      </Component>

      {/* Hardware-Accelerated 2D Crystalline Shard Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none z-10 ${
          isShattered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-150`}
        aria-hidden="true"
      />
    </div>
  );
}
