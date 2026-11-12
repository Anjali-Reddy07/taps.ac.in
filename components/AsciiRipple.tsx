'use client';

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface AsciiRippleHandle {
  drop: (x: number, y: number, strength?: number, radius?: number) => void;
  calm: () => void;
}

export interface AsciiRippleProps {
  text?: string;
  chars?: string;
  fontSize?: number;
  color?: string;
  glowColor?: string;
  backgroundColor?: string;
  textOpacity?: number;
  resolution?: number;
  speed?: number;
  damping?: number;
  viscosity?: number;
  edges?: 'reflect' | 'absorb';
  dropStrength?: number;
  dropRadius?: number;
  dragStrength?: number;
  dragRadius?: number;
  rain?: number;
  rainStrength?: number;
  sensitivity?: number;
  refraction?: number;
  scramble?: number;
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_TEXT =
  'TAPS ACADEMY OF PROFESSIONAL STUDIES • PREMIER UNDERGRADUATE PEDAGOGY • BCA SOFTWARE COMPUTING • BBA EXECUTIVE BUSINESS ADMINISTRATION • UTKAL UNIVERSITY CBCS • CORPORATE FINISHING SCHOOL • ALUMNI LEADERSHIP • ';

const AsciiRipple = forwardRef<AsciiRippleHandle, AsciiRippleProps>(
  (
    {
      text = DEFAULT_TEXT,
      chars = '·.,:;-~=+*%#@',
      fontSize = 14,
      color = '#6366F1',
      glowColor = '#2563EB',
      backgroundColor = 'transparent',
      textOpacity = 0.35,
      resolution = 2,
      speed = 0.55,
      damping = 0.038,
      viscosity = 0.3,
      edges = 'absorb',
      dropStrength = 1.4,
      dropRadius = 32,
      dragStrength = 0.5,
      dragRadius = 18,
      rain = 1.2,
      rainStrength = 0.6,
      sensitivity = 2.6,
      refraction = 4.2,
      scramble = 0.85,
      interactive = true,
      className = '',
      style = {},
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Wave simulation state
    const simRef = useRef<{
      width: number;
      height: number;
      cols: number;
      rows: number;
      cellW: number;
      cellH: number;
      buffer1: Float32Array;
      buffer2: Float32Array;
      lastRain: number;
      lastPointerX: number;
      lastPointerY: number;
    }>({
      width: 0,
      height: 0,
      cols: 0,
      rows: 0,
      cellW: 10,
      cellH: 16,
      buffer1: new Float32Array(0),
      buffer2: new Float32Array(0),
      lastRain: 0,
      lastPointerX: -1,
      lastPointerY: -1,
    });

    const triggerDrop = (px: number, py: number, strength: number, radiusPx: number) => {
      const sim = simRef.current;
      if (sim.cols <= 0 || sim.rows <= 0) return;

      const col = Math.floor(px / sim.cellW);
      const row = Math.floor(py / sim.cellH);
      const r = Math.max(1, Math.floor(radiusPx / sim.cellW));

      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const c = col + dx;
          const rIdx = row + dy;
          if (c >= 0 && c < sim.cols && rIdx >= 0 && rIdx < sim.rows) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= r) {
              const falloff = Math.cos((dist / r) * (Math.PI / 2));
              sim.buffer1[rIdx * sim.cols + c] += strength * falloff;
            }
          }
        }
      }
    };

    useImperativeHandle(ref, () => ({
      drop: (x: number, y: number, s = dropStrength, r = dropRadius) => {
        triggerDrop(x, y, s, r);
      },
      calm: () => {
        const sim = simRef.current;
        sim.buffer1.fill(0);
        sim.buffer2.fill(0);
      },
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      let animationFrameId: number;

      // Handle Resize and Grid Initialization
      const resize = () => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = rect.width;
        const h = rect.height;
        if (w === 0 || h === 0) return;

        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);

        ctx.font = `${fontSize * dpr}px "Geist Mono", "JetBrains Mono", monospace`;
        ctx.textBaseline = 'top';

        // Measure monospace character metrics
        const metrics = ctx.measureText('M');
        const charW = metrics.width || fontSize * 0.6 * dpr;
        const charH = fontSize * 1.35 * dpr;

        // Grid resolution
        const cols = Math.ceil(canvas.width / charW);
        const rows = Math.ceil(canvas.height / charH);
        const total = cols * rows;

        simRef.current = {
          width: canvas.width,
          height: canvas.height,
          cols,
          rows,
          cellW: charW,
          cellH: charH,
          buffer1: new Float32Array(total),
          buffer2: new Float32Array(total),
          lastRain: performance.now(),
          lastPointerX: -1,
          lastPointerY: -1,
        };

        // Trigger initial ripples on mount so the effect is immediately alive
        setTimeout(() => {
          triggerDrop(canvas.width * 0.35, canvas.height * 0.45, 1.8, 50 * dpr);
          triggerDrop(canvas.width * 0.65, canvas.height * 0.55, 1.6, 45 * dpr);
        }, 150);
      };

      window.addEventListener('resize', resize);
      resize();

      // Window-level mouse tracking so ripples trigger even when hovering over child cards
      const handlePointerMove = (e: MouseEvent) => {
        if (!interactive || !canvas) return;
        const rect = canvas.getBoundingClientRect();

        // Check if mouse is within vertical and horizontal bounds of the section
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          simRef.current.lastPointerX = -1;
          simRef.current.lastPointerY = -1;
          return;
        }

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const x = (e.clientX - rect.left) * dpr;
        const y = (e.clientY - rect.top) * dpr;

        const sim = simRef.current;
        if (sim.lastPointerX >= 0) {
          const dx = x - sim.lastPointerX;
          const dy = y - sim.lastPointerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 3) {
            triggerDrop(x, y, dragStrength, dragRadius * dpr);
          }
        }
        sim.lastPointerX = x;
        sim.lastPointerY = y;
      };

      const handleClick = (e: MouseEvent) => {
        if (!interactive || !canvas) return;
        const rect = canvas.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const x = (e.clientX - rect.left) * dpr;
          const y = (e.clientY - rect.top) * dpr;
          triggerDrop(x, y, dropStrength * 1.6, dropRadius * dpr * 1.5);
        }
      };

      if (interactive) {
        window.addEventListener('mousemove', handlePointerMove, { passive: true });
        window.addEventListener('click', handleClick);
      }

      // Physics and Render Loop
      let lastTime = performance.now();
      const charsLen = chars.length;
      const cleanText = text.length > 0 ? text : DEFAULT_TEXT;
      const textLen = cleanText.length;

      const render = (time: number) => {
        const sim = simRef.current;
        if (sim.cols <= 0 || sim.rows <= 0) {
          animationFrameId = requestAnimationFrame(render);
          return;
        }

        const dt = (time - lastTime) * 0.001;
        lastTime = time;

        // Autonomous Gentle Raindrops when idle
        if (rain > 0 && time - sim.lastRain > 1000 / rain) {
          sim.lastRain = time;
          const rx = (0.15 + Math.random() * 0.7) * sim.width;
          const ry = (0.15 + Math.random() * 0.7) * sim.height;
          triggerDrop(rx, ry, rainStrength, (dropRadius * 0.8) * (sim.width / 900));
        }

        const cols = sim.cols;
        const rows = sim.rows;
        const b1 = sim.buffer1;
        const b2 = sim.buffer2;
        const damp = 1.0 - damping;
        const visc = viscosity * 0.25;

        // 2D Wave propagation step
        for (let r = 1; r < rows - 1; r++) {
          const rowOffset = r * cols;
          for (let c = 1; c < cols - 1; c++) {
            const idx = rowOffset + c;

            // Neighbor heights
            const top = b1[idx - cols];
            const bottom = b1[idx + cols];
            const left = b1[idx - 1];
            const right = b1[idx + 1];

            // Wave height with viscosity smoothing
            let val = (top + bottom + left + right) * 0.5 - b2[idx];
            val += (top + bottom + left + right - 4 * b1[idx]) * visc;
            val *= damp;

            b2[idx] = val;
          }
        }

        // Edge conditions
        if (edges === 'absorb') {
          for (let c = 0; c < cols; c++) {
            b2[c] = 0;
            b2[(rows - 1) * cols + c] = 0;
          }
          for (let r = 0; r < rows; r++) {
            b2[r * cols] = 0;
            b2[r * cols + (cols - 1)] = 0;
          }
        }

        // Swap height buffers
        sim.buffer1 = b2;
        sim.buffer2 = b1;

        // Clear Canvas
        if (backgroundColor === 'transparent') {
          ctx.clearRect(0, 0, sim.width, sim.height);
        } else {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, sim.width, sim.height);
        }

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const baseFont = `${fontSize * dpr}px "Geist Mono", "JetBrains Mono", monospace`;
        const boldFont = `bold ${fontSize * dpr}px "Geist Mono", "JetBrains Mono", monospace`;
        ctx.font = baseFont;
        ctx.textBaseline = 'top';

        // Render Monospace ASCII Characters Refracted by Waves
        let charIndex = 0;
        const currentBuffer = sim.buffer1;

        for (let r = 0; r < rows; r++) {
          const y = r * sim.cellH;
          const rOffset = r * cols;

          for (let c = 0; c < cols; c++) {
            const x = c * sim.cellW;
            const idx = rOffset + c;
            const heightVal = currentBuffer[idx];
            const absH = Math.abs(heightVal);

            // Base character from input text sequence
            let glyph = cleanText[charIndex % textLen];
            charIndex++;

            if (absH > 0.035) {
              // Calculate surface slope (refraction gradient)
              const nx = (c < cols - 1 ? currentBuffer[idx + 1] : 0) - (c > 0 ? currentBuffer[idx - 1] : 0);
              const ny = (r < rows - 1 ? currentBuffer[idx + cols] : 0) - (r > 0 ? currentBuffer[idx - cols] : 0);
              const slope = Math.sqrt(nx * nx + ny * ny);

              // Wave intensity
              const intensity = Math.min(1.0, absH * sensitivity + slope * refraction);

              // Scramble to fluid glyph palette based on height
              if (scramble > 0 && Math.random() < scramble * intensity) {
                const paletteIdx = Math.min(
                  charsLen - 1,
                  Math.floor(intensity * charsLen)
                );
                glyph = chars[paletteIdx];
              }

              // Color tinting towards wave glow color
              ctx.font = boldFont;
              ctx.fillStyle = glowColor;
              ctx.globalAlpha = Math.min(1.0, 0.45 + intensity * 0.55);
            } else {
              // Resting baseline state
              ctx.font = baseFont;
              ctx.fillStyle = color;
              ctx.globalAlpha = textOpacity;
            }

            ctx.fillText(glyph, x, y);
          }
        }

        ctx.globalAlpha = 1.0;
        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);

      return () => {
        window.removeEventListener('resize', resize);
        if (interactive) {
          window.removeEventListener('mousemove', handlePointerMove);
          window.removeEventListener('click', handleClick);
        }
        cancelAnimationFrame(animationFrameId);
      };
    }, [
      text,
      chars,
      fontSize,
      color,
      glowColor,
      backgroundColor,
      textOpacity,
      resolution,
      speed,
      damping,
      viscosity,
      edges,
      dropStrength,
      dropRadius,
      dragStrength,
      dragRadius,
      rain,
      rainStrength,
      sensitivity,
      refraction,
      scramble,
      interactive,
    ]);

    return (
      <canvas
        ref={canvasRef}
        className={`w-full h-full block ${className}`}
        style={{
          pointerEvents: 'none',
          ...style,
        }}
      />
    );
  }
);

AsciiRipple.displayName = 'AsciiRipple';

export default AsciiRipple;
