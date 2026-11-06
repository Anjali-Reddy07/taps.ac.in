"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export interface ShatterTypeProps {
  /** The text string to render */
  text: string;
  /** Semantic HTML tag (default: "h1") */
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  /** Tailwind / CSS class names for typography styling */
  className?: string;
  /** Number of glass shards (default: 48) */
  shardCount?: number;
  /** Whether the text shatters when clicked (default: true) */
  shatterOnClick?: boolean;
  /** Whether hairline cracks form under cursor (default: true) */
  crackOnHover?: boolean;
  /** Radius in pixels around cursor where cracks appear (default: 140) */
  crackRadius?: number;
  /** Time in seconds before shards magnetically reassemble after a shatter (default: 1.8s) */
  reassembleDelay?: number;
  /** Enable automatic periodic showcase cycle if untouched (default: true) */
  autoCycle?: boolean;
  /** Seconds between idle auto-cycles (default: 8s) */
  autoCycleInterval?: number;
}

interface GlassShard {
  // Local vertices relative to centroid
  v0: { x: number; y: number };
  v1: { x: number; y: number };
  v2: { x: number; y: number };
  // Original resting centroid in canvas coords
  ox: number;
  oy: number;
  // Current dynamic state
  x: number;
  y: number;
  rot: number;
  vx: number;
  vy: number;
  vRot: number;
  // Crack stress factor: 0 (smooth) to 1 (fractured)
  stress: number;
  // Scatter target coordinates during explosive dispersal
  scatterX: number;
  scatterY: number;
  scatterRot: number;
  // Glass specular highlight tint
  sheenColor: string;
}

/**
 * ShatterType (React Bits Pro specification)
 * A headline cut into crystalline glass shards that assemble on mount,
 * dynamically crack under the cursor, and violently shatter on click with
 * physical momentum before magnetically reassembling into solid text.
 */
export default function ShatterType({
  text,
  as: Component = "h1",
  className = "",
  shardCount = 48,
  shatterOnClick = true,
  crackOnHover = true,
  crackRadius = 140,
  reassembleDelay = 1.8,
  autoCycle = true,
  autoCycleInterval = 8.0,
}: ShatterTypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // States: "assembled" | "assembling" | "shattering" | "reassembling"
  const [animState, setAnimState] = useState<
    "assembling" | "assembled" | "shattering" | "reassembling"
  >("assembling");
  const [isHovered, setIsHovered] = useState(false);

  const isVisibleRef = useRef<boolean>(true);
  const shardsRef = useRef<GlassShard[]>([]);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  const stateRef = useRef<"assembling" | "assembled" | "shattering" | "reassembling">("assembling");
  stateRef.current = animState;

  const animStartRef = useRef<number>(0);
  const autoCycleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Easing helpers
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  /**
   * Measure DOM headline and construct the glass shard triangulation
   */
  const buildShards = useCallback(() => {
    const el = textRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;

    const rect = el.getBoundingClientRect();
    const width = Math.max(Math.ceil(rect.width), 40);
    const height = Math.max(Math.ceil(rect.height), 40);
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (!offscreenCanvasRef.current) {
      offscreenCanvasRef.current = document.createElement("canvas");
    }
    const offscreen = offscreenCanvasRef.current;
    offscreen.width = Math.round(width * dpr);
    offscreen.height = Math.round(height * dpr);

    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
    offCtx.save();
    offCtx.scale(dpr, dpr);

    // Read computed typography
    const computed = window.getComputedStyle(el);
    const fontSize = parseFloat(computed.fontSize) || 36;
    const fontFamily = computed.fontFamily || "sans-serif";
    const fontWeight = computed.fontWeight || "bold";
    const color = computed.color || "#ffffff";
    const lineHeight = parseFloat(computed.lineHeight) || fontSize * 1.15;
    const textAlign = (computed.textAlign as CanvasTextAlign) || "left";

    offCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    offCtx.fillStyle = color;
    offCtx.textBaseline = "top";

    // Wrap words according to available container width
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

    const totalTextH = lines.length * lineHeight;
    const startY = Math.max((height - totalTextH) / 2, 0);

    lines.forEach((l, idx) => {
      let x = 0;
      if (textAlign === "center") {
        x = width / 2 - offCtx.measureText(l).width / 2;
      } else if (textAlign === "right") {
        x = width - offCtx.measureText(l).width;
      }
      offCtx.fillText(l, x, startY + idx * lineHeight);
    });

    offCtx.restore();

    // Subdivide bounding box into polygonal crystalline shards
    const cols = Math.max(Math.round(Math.sqrt(shardCount * 1.5)), 7);
    const rows = Math.max(Math.round(shardCount / cols), 4);
    const cellW = width / cols;
    const cellH = height / rows;

    const grid: { x: number; y: number }[][] = [];
    for (let r = 0; r <= rows; r++) {
      grid[r] = [];
      for (let c = 0; c <= cols; c++) {
        const jx = c === 0 || c === cols ? 0 : (Math.random() - 0.5) * cellW * 0.6;
        const jy = r === 0 || r === rows ? 0 : (Math.random() - 0.5) * cellH * 0.6;
        grid[r][c] = { x: c * cellW + jx, y: r * cellH + jy };
      }
    }

    const shards: GlassShard[] = [];
    const centerX = width / 2;
    const centerY = height / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pTL = grid[r][c];
        const pTR = grid[r][c + 1];
        const pBL = grid[r + 1][c];
        const pBR = grid[r + 1][c + 1];

        // Triangle A: TL -> TR -> BR
        const c1X = (pTL.x + pTR.x + pBR.x) / 3;
        const c1Y = (pTL.y + pTR.y + pBR.y) / 3;
        const dx1 = c1X - centerX;
        const dy1 = c1Y - centerY;
        const dist1 = Math.hypot(dx1, dy1) || 1;
        const blastDist1 = 120 + Math.random() * 200;

        shards.push({
          v0: { x: pTL.x - c1X, y: pTL.y - c1Y },
          v1: { x: pTR.x - c1X, y: pTR.y - c1Y },
          v2: { x: pBR.x - c1X, y: pBR.y - c1Y },
          ox: c1X,
          oy: c1Y,
          x: c1X,
          y: c1Y,
          rot: 0,
          vx: 0,
          vy: 0,
          vRot: 0,
          stress: 0,
          scatterX: (dx1 / dist1) * blastDist1 + (Math.random() - 0.5) * 80,
          scatterY: (dy1 / dist1) * blastDist1 + (Math.random() - 0.5) * 80,
          scatterRot: (Math.random() - 0.5) * Math.PI * 3,
          sheenColor:
            Math.random() > 0.5
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(147, 197, 253, 0.75)",
        });

        // Triangle B: TL -> BR -> BL
        const c2X = (pTL.x + pBR.x + pBL.x) / 3;
        const c2Y = (pTL.y + pBR.y + pBL.y) / 3;
        const dx2 = c2X - centerX;
        const dy2 = c2Y - centerY;
        const dist2 = Math.hypot(dx2, dy2) || 1;
        const blastDist2 = 120 + Math.random() * 200;

        shards.push({
          v0: { x: pTL.x - c2X, y: pTL.y - c2Y },
          v1: { x: pBR.x - c2X, y: pBR.y - c2Y },
          v2: { x: pBL.x - c2X, y: pBL.y - c2Y },
          ox: c2X,
          oy: c2Y,
          x: c2X,
          y: c2Y,
          rot: 0,
          vx: 0,
          vy: 0,
          vRot: 0,
          stress: 0,
          scatterX: (dx2 / dist2) * blastDist2 + (Math.random() - 0.5) * 80,
          scatterY: (dy2 / dist2) * blastDist2 + (Math.random() - 0.5) * 80,
          scatterRot: (Math.random() - 0.5) * Math.PI * 3,
          sheenColor:
            Math.random() > 0.5
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(196, 181, 253, 0.75)",
        });
      }
    }

    shardsRef.current = shards;
  }, [text, shardCount]);

  /**
   * Trigger Explosive Shatter Sequence
   */
  const shatter = useCallback(
    (originX?: number, originY?: number) => {
      if (stateRef.current === "shattering") return;

      const shards = shardsRef.current;
      if (shards.length === 0) return;

      const canvas = canvasRef.current;
      const width = canvas ? canvas.width / (window.devicePixelRatio || 1) : 600;
      const height = canvas ? canvas.height / (window.devicePixelRatio || 1) : 100;
      const clickX = originX ?? width / 2;
      const clickY = originY ?? height / 2;

      // Assign explosive impulse away from click coordinate
      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];
        const dx = s.ox - clickX;
        const dy = s.oy - clickY;
        const dist = Math.hypot(dx, dy) || 1;
        const impulse = 130 + Math.random() * 220;

        s.scatterX = (dx / dist) * impulse + (Math.random() - 0.5) * 90;
        s.scatterY = (dy / dist) * impulse + (Math.random() - 0.5) * 90;
        s.scatterRot = (Math.random() - 0.5) * Math.PI * 3.5;
      }

      setAnimState("shattering");
      animStartRef.current = performance.now();

      // Schedule magnetic reassembly
      setTimeout(() => {
        setAnimState("reassembling");
        animStartRef.current = performance.now();

        setTimeout(() => {
          setAnimState("assembled");
          // Reset shard resting transforms
          for (let i = 0; i < shards.length; i++) {
            shards[i].x = shards[i].ox;
            shards[i].y = shards[i].oy;
            shards[i].rot = 0;
            shards[i].stress = 0;
          }

          // Restart idle auto-cycle timer
          if (autoCycle && isVisibleRef.current) {
            scheduleAutoCycle();
          }
        }, 1100);
      }, reassembleDelay * 1000);
    },
    [reassembleDelay, autoCycle]
  );

  const scheduleAutoCycle = useCallback(() => {
    if (autoCycleTimerRef.current) clearTimeout(autoCycleTimerRef.current);
    autoCycleTimerRef.current = setTimeout(() => {
      if (stateRef.current === "assembled" && isVisibleRef.current) {
        shatter();
      }
    }, autoCycleInterval * 1000);
  }, [autoCycleInterval, shatter]);

  /**
   * Main Canvas Render Loop
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    buildShards();

    animStartRef.current = performance.now();

    const render = (time: number) => {
      animationFrameRef.current = requestAnimationFrame(render);

      if (!isVisibleRef.current) return;

      const ctx = canvas.getContext("2d");
      const offscreen = offscreenCanvasRef.current;
      if (!ctx || !offscreen) return;

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const currentState = stateRef.current;
      const elapsed = (time - animStartRef.current) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const shards = shardsRef.current;
      const mouse = mousePosRef.current;

      // 1. Initial Assembly Phase (shards fly in to form the text)
      if (currentState === "assembling") {
        const p = Math.min(elapsed / 1.3, 1);
        const factor = 1 - easeOutCubic(p);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          s.x = s.ox + s.scatterX * factor * 0.7;
          s.y = s.oy + s.scatterY * factor * 0.7;
          s.rot = s.scatterRot * factor * 0.7;
          s.stress = factor;
        }

        if (p >= 1) {
          setAnimState("assembled");
          if (autoCycle) scheduleAutoCycle();
        }
      }

      // 2. Shattering Explosion Phase
      else if (currentState === "shattering") {
        const p = Math.min(elapsed / 0.85, 1);
        const factor = easeOutCubic(p);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          s.x = s.ox + s.scatterX * factor;
          s.y = s.oy + s.scatterY * factor;
          s.rot = s.scatterRot * factor;
          s.stress = 1;
        }
      }

      // 3. Magnetic Reassembly Phase
      else if (currentState === "reassembling") {
        const p = Math.min(elapsed / 1.0, 1);
        const factor = 1 - easeInOutCubic(p);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          s.x = s.ox + s.scatterX * factor;
          s.y = s.oy + s.scatterY * factor;
          s.rot = s.scatterRot * factor;
          s.stress = factor;
        }
      }

      // 4. Assembled State: Live Hairline Cracks & Stress Under Cursor
      else if (currentState === "assembled") {
        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];
          if (mouse.active && crackOnHover) {
            const dist = Math.hypot(mouse.x - s.ox, mouse.y - s.oy);
            if (dist < crackRadius) {
              const proximity = 1 - dist / crackRadius;
              s.stress = Math.min(1, proximity * 1.3);
              // Micro jitter / crack dislocation
              s.x = s.ox + (Math.random() - 0.5) * 2.5 * s.stress;
              s.y = s.oy + (Math.random() - 0.5) * 2.5 * s.stress;
              s.rot = (Math.random() - 0.5) * 0.05 * s.stress;
            } else {
              s.stress = Math.max(0, s.stress - 0.1);
              s.x = s.ox;
              s.y = s.oy;
              s.rot = 0;
            }
          } else {
            s.stress = Math.max(0, s.stress - 0.08);
            s.x = s.ox;
            s.y = s.oy;
            s.rot = 0;
          }
        }
      }

      // Draw all glass shards
      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];

        ctx.save();
        ctx.translate(s.x, s.y);
        if (s.rot !== 0) ctx.rotate(s.rot);

        // Clip to shard triangle
        ctx.beginPath();
        ctx.moveTo(s.v0.x, s.v0.y);
        ctx.lineTo(s.v1.x, s.v1.y);
        ctx.lineTo(s.v2.x, s.v2.y);
        ctx.closePath();

        ctx.save();
        ctx.clip();
        // Correct 1:1 scale mapping from offscreen bitmap to logical canvas coordinates
        ctx.drawImage(offscreen, -s.ox, -s.oy, width, height);
        ctx.restore();

        // Draw crystalline glass hairline crack strokes & specular edge gleams
        if (s.stress > 0.05) {
          ctx.strokeStyle = s.sheenColor;
          ctx.lineWidth = Math.max(0.8, s.stress * 1.5);
          ctx.stroke();

          // Glass fracture facet sheen reflection
          ctx.fillStyle = `rgba(255, 255, 255, ${0.12 * s.stress})`;
          ctx.fill();

          // Hairline branching crack fissure lines under cursor
          if (mouse.active && currentState === "assembled" && s.stress > 0.4) {
            ctx.beginPath();
            ctx.moveTo(s.v0.x, s.v0.y);
            ctx.lineTo(
              (s.v0.x + s.v1.x) / 2 + (Math.random() - 0.5) * 4,
              (s.v0.y + s.v1.y) / 2 + (Math.random() - 0.5) * 4
            );
            ctx.lineTo(s.v2.x, s.v2.y);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        ctx.restore();
      }

      ctx.restore();
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (autoCycleTimerRef.current) clearTimeout(autoCycleTimerRef.current);
    };
  }, [buildShards, crackOnHover, crackRadius, autoCycle, scheduleAutoCycle]);

  /**
   * Viewport Intersection & Resize Handling
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (document.fonts) {
      document.fonts.ready.then(() => buildShards());
    } else {
      buildShards();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && stateRef.current === "assembled" && autoCycle) {
          scheduleAutoCycle();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      if (stateRef.current === "assembled") {
        buildShards();
      }
    });
    resizeObserver.observe(container);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      if (autoCycleTimerRef.current) clearTimeout(autoCycleTimerRef.current);
    };
  }, [buildShards, autoCycle, scheduleAutoCycle]);

  // Mouse handlers for hairline crack propagation
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mousePosRef.current.active = false;
    setIsHovered(false);
  };

  // Click handler to trigger full shatter explosion
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shatterOnClick) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    shatter(clickX, clickY);
  };

  // When assembled and not hovered, render the solid DOM text for flawless typography & contrast.
  // During assemble, shatter, reassemble, or hover-crack, the canvas renders the crystalline physics.
  const isSolidDOM = animState === "assembled" && !isHovered;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative inline-block w-full max-w-full select-none cursor-pointer group ${className}`}
      aria-label={text}
      title="Click to shatter glass"
    >
      {/* 
        Semantic HTML Heading for Accessibility & SEO.
        Retains layout perfectly (0 CLS).
      */}
      <Component
        ref={textRef as unknown as React.RefObject<HTMLHeadingElement>}
        className={`transition-opacity duration-200 ${
          isSolidDOM ? "opacity-100" : "opacity-0"
        } ${className}`}
      >
        {text}
      </Component>

      {/* 2D Canvas Glass Shards, Live Cracks & Dynamic Explosion */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none z-10 ${
          isSolidDOM ? "opacity-0" : "opacity-100"
        } transition-opacity duration-150`}
        aria-hidden="true"
      />
    </div>
  );
}
