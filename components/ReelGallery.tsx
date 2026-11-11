"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export interface ReelGalleryProps {
  /** Array of image URLs distributed across the gliding tilted reels */
  images?: string[];
  /** Number of stacked reels (default: 6) */
  rows?: number;
  /** Height of each plate in pixels (default: 92) */
  rowHeight?: number;
  /** Vertical space between reels in pixels (default: 20) */
  rowGap?: number;
  /** Horizontal space between plates in pixels (default: 16) */
  itemGap?: number;
  /** Widest a plate can stretch as multiple of its height (default: 2.0) */
  maxAspect?: number;
  /** Narrowest a plate can get as multiple of its height (default: 0.6) */
  minAspect?: number;
  /** Max rendering frame rate (default: 60) */
  maxFps?: number;
  /** Angle in degrees that the entire stack leans by (default: 7.0) */
  tilt?: number;
  /** Distance in pixels each reel arches across the frame (default: 48) */
  arch?: number;
  /** Master input speed multiplier (default: 1.0) */
  speed?: number;
  /** Degree to which individual reels vary in speed: 0 to 1 (default: 0.55) */
  speedVariance?: number;
  /** Sends every alternate reel scrolling in opposite direction (default: true) */
  alternate?: boolean;
  /** Pixels per second reels drift automatically (default: 26) */
  autoScroll?: number;
  /** Momentum glide retention after interaction (default: 0.92) */
  inertia?: number;
  /** Damping factor (default: 0.10) */
  damping?: number;
  /** Drag interaction sensitivity (default: 1.6) */
  dragSensitivity?: number;
  /** Wheel / scroll interaction sensitivity (default: 1.0) */
  wheelSensitivity?: number;
  /** Border radius of plate images in pixels (default: 10) */
  radius?: number;
  /** Grayscale intensity from 0 to 1 (default: 0.55) */
  grayscale?: number;
  /** Radius in pixels for interactive item focus (default: 210) */
  focusRadius?: number;
  /** Strength of the focus highlight (default: 0.85) */
  focusStrength?: number;
  /** Image brightness multiplier (default: 1.0) */
  brightness?: number;
  /** Device Pixel Ratio multiplier for sharpness (default: 1.25) */
  dpr?: number;
  /** Edge fade intensity (default: 0.12) */
  fade?: number;
  /** Inactive plate dim factor (default: 0.35) */
  dim?: number;
  /** Taper layout multiplier (default: 0.12) */
  taper?: number;
  /** Extra container classes */
  className?: string;
}

const defaultImages: string[] = [
  "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg",
  "/images/drive_new/1746352355680.jpg",
  "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg",
  "/images/drive_new/1721020760290.jpg",
  "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg",
  "/images/drive_fourth/hack_day.png",
  "/images/drive_new/418523663_877202237525747_6377361483820920683_n.jpg",
  "/images/drive_new/487841832_17914511076094364_1416184591585353408_n.jpg",
  "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
  "/images/drive_third/Library_Library.JPG",
  "/images/drive_second/alumni3.jpg",
  "/images/drive_second/Activities.jpg",
  "/images/drive_third/ClassRooms_Academic.JPG",
];

interface LoadedPlate {
  img: HTMLImageElement;
  aspect: number;
  width: number;
}

/**
 * ReelGallery
 * React Bits Pro specification: Tilted reels of images that glide as you scroll.
 * High-performance HTML5 Canvas implementation with arched rows, smooth momentum,
 * dynamic auto-scroll, parallax speed variance, and interactive focus.
 */
export default function ReelGallery({
  images = defaultImages,
  rows = 5,
  rowHeight = 115,
  rowGap = 20,
  itemGap = 16,
  maxAspect = 2.0,
  minAspect = 0.6,
  maxFps = 60,
  tilt = 6.5,
  arch = 36,
  speed = 1.0,
  speedVariance = 0.50,
  alternate = true,
  autoScroll = 26,
  inertia = 0.92,
  damping = 0.10,
  dragSensitivity = 1.6,
  wheelSensitivity = 1.0,
  radius = 12,
  grayscale = 0.15,
  focusRadius = 240,
  focusStrength = 0.85,
  brightness = 1.05,
  dpr: userDpr = 1.25,
  fade = 0.12,
  dim = 0.20,
  taper = 0.12,
  className = "",
}: ReelGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isVisibleRef = useRef<boolean>(true);
  const loadedPlatesRef = useRef<LoadedPlate[]>([]);
  const rowOffsetsRef = useRef<number[]>([]);
  const velocityRef = useRef<number>(0);
  const targetVelocityRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);

  // Load and cache all images as HTMLImageElements
  useEffect(() => {
    let isCancelled = false;

    images.forEach((src) => {
      const img = new Image();
      // Only set crossOrigin if loading from external http/https domain, never for relative local paths
      if (src.startsWith("http://") || src.startsWith("https://")) {
        img.crossOrigin = "anonymous";
      }

      const handleLoad = () => {
        if (isCancelled) return;
        const naturalAspect = (img.naturalWidth || 1) / (img.naturalHeight || 1);
        const clampedAspect = Math.max(minAspect, Math.min(maxAspect, naturalAspect));
        loadedPlatesRef.current.push({
          img,
          aspect: clampedAspect,
          width: rowHeight * clampedAspect,
        });
      };

      img.onload = handleLoad;
      img.onerror = () => {
        // gracefully skip
      };

      img.src = src;

      // If browser already cached the image, process immediately without waiting for async event
      if (img.complete && img.naturalWidth > 0) {
        handleLoad();
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [images, minAspect, maxAspect, rowHeight]);

  // Initialize row offsets
  useEffect(() => {
    rowOffsetsRef.current = Array.from({ length: rows }, (_, idx) => idx * 180);
  }, [rows]);

  // Main Canvas Animation Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const frameInterval = 1000 / maxFps;

    // Viewport Visibility Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Scroll listener for inertia momentum
    const handleScroll = () => {
      if (!isVisibleRef.current) return;
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;
      targetVelocityRef.current += delta * wheelSensitivity * 0.45;
    };
    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Drag interaction handlers
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartOffsetRef.current = 0;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      if (isDraggingRef.current) {
        const deltaX = e.clientX - dragStartXRef.current;
        dragStartXRef.current = e.clientX;
        targetVelocityRef.current -= deltaX * dragSensitivity * 0.6;
      }
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    const handlePointerLeave = () => {
      isDraggingRef.current = false;
      mousePosRef.current = null;
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointerleave", handlePointerLeave);

    // Resize Handler
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width || container.clientWidth || window.innerWidth;
      const h = rect.height || container.clientHeight || 600;
      const actualDpr = Math.min(window.devicePixelRatio || 1, userDpr);
      canvas.width = Math.round(w * actualDpr);
      canvas.height = Math.round(h * actualDpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Render loop
    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisibleRef.current) return;

      const elapsed = time - lastTime;
      if (elapsed < frameInterval) return;
      lastTime = time - (elapsed % frameInterval);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const plates = loadedPlatesRef.current;
      const actualDpr = Math.min(window.devicePixelRatio || 1, userDpr);
      const width = canvas.width / actualDpr;
      const height = canvas.height / actualDpr;

      if (plates.length === 0) {
        // Immediate visual rendering: draw glowing tinted photo frames so there is never a blank frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(actualDpr, actualDpr);
        const centerX = width / 2;
        const centerY = height / 2;
        const radTilt = (tilt * Math.PI) / 180;
        ctx.translate(centerX, centerY);
        ctx.rotate(-radTilt);
        ctx.translate(-centerX, -centerY);

        const totalStackHeight = rows * rowHeight + (rows - 1) * rowGap;
        const startY = (height - totalStackHeight) / 2;
        for (let r = 0; r < rows; r++) {
          const rowBaseY = startY + r * (rowHeight + rowGap);
          for (let x = -200; x < width + 200; x += 190) {
            const archY = -arch * Math.sin(Math.max(0, Math.min(1, (x + 80) / width)) * Math.PI);
            const y = rowBaseY + archY;
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(x, y, 160, rowHeight, radius);
            ctx.closePath();
            ctx.fillStyle = "rgba(15, 23, 42, 0.6)";
            ctx.fill();
            ctx.strokeStyle = "rgba(96, 165, 250, 0.25)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
        }
        ctx.restore();
        return;
      }

      // Smooth velocity interpolation with inertia & damping
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * damping;
      targetVelocityRef.current *= inertia;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(actualDpr, actualDpr);

      // Apply tilted rotation around center
      const centerX = width / 2;
      const centerY = height / 2;
      const radTilt = (tilt * Math.PI) / 180;

      ctx.translate(centerX, centerY);
      ctx.rotate(-radTilt);
      ctx.translate(-centerX, -centerY);

      // Compute total stack dimensions
      const totalStackHeight = rows * rowHeight + (rows - 1) * rowGap;
      const startY = (height - totalStackHeight) / 2;

      // Draw each reel row
      for (let r = 0; r < rows; r++) {
        // Individual row speed variance
        const rowNorm = (r - (rows - 1) / 2) / Math.max((rows - 1) / 2, 1);
        const rowSpeedFactor = 1 + rowNorm * speedVariance;
        const direction = alternate && r % 2 === 1 ? -1 : 1;

        // Advance row position with auto-scroll + scroll/drag velocity
        const deltaMove = (autoScroll * (elapsed / 1000) * direction + velocityRef.current * 0.1) * rowSpeedFactor * speed;
        rowOffsetsRef.current[r] = (rowOffsetsRef.current[r] || 0) + deltaMove;

        const currentOffset = rowOffsetsRef.current[r];
        const rowBaseY = startY + r * (rowHeight + rowGap);

        // Pre-calculate total row length for seamless modular wrap
        let totalRowLength = 0;
        for (let i = 0; i < plates.length; i++) {
          totalRowLength += plates[i].width + itemGap;
        }

        // Expanded margin for tilted perspective coverage
        const renderMargin = 450;
        const normalizedOffset = ((currentOffset % totalRowLength) + totalRowLength) % totalRowLength;

        let accumulatedX = -normalizedOffset - renderMargin;
        while (accumulatedX < width + renderMargin) {
          for (let pIdx = 0; pIdx < plates.length; pIdx++) {
            const plate = plates[(pIdx + r * 2) % plates.length];
            const plateW = plate.width;
            const x = accumulatedX;

            // Render if inside screen coverage
            if (x + plateW >= -renderMargin && x <= width + renderMargin) {
              // Calculate arched trajectory across the frame: arch * sin(pi * x / width)
              const progressX = Math.max(0, Math.min(1, (x + plateW / 2) / width));
              const archY = -arch * Math.sin(progressX * Math.PI);
              const y = rowBaseY + archY;

              // Interactive hover focus calculation
              let isFocused = false;
              if (mousePosRef.current) {
                const distToMouse = Math.hypot(
                  mousePosRef.current.x - (x + plateW / 2),
                  mousePosRef.current.y - (y + rowHeight / 2)
                );
                if (distToMouse < focusRadius) {
                  isFocused = true;
                }
              }

              ctx.save();

              // Draw rounded plate path
              ctx.beginPath();
              ctx.roundRect(x, y, plateW, rowHeight, radius);
              ctx.closePath();
              ctx.clip();

              // Apply grayscale & brightness filters
              const effectiveGrayscale = isFocused ? 0 : grayscale;
              const effectiveBrightness = isFocused ? 1.15 : brightness;
              ctx.filter = `grayscale(${effectiveGrayscale}) brightness(${effectiveBrightness})`;

              ctx.drawImage(plate.img, x, y, plateW, rowHeight);

              // Dim overlay for non-focused background elements
              if (!isFocused && dim > 0) {
                ctx.fillStyle = `rgba(7, 13, 33, ${dim})`;
                ctx.fillRect(x, y, plateW, rowHeight);
              }

              // Subtle specular border highlight
              ctx.strokeStyle = isFocused
                ? "rgba(147, 197, 253, 0.85)"
                : "rgba(255, 255, 255, 0.15)";
              ctx.lineWidth = isFocused ? 2 : 1;
              ctx.stroke();

              ctx.restore();
            }

            accumulatedX += plateW + itemGap;
            if (accumulatedX >= width + renderMargin) break;
          }
        }
      }

      ctx.restore();
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [
    rows,
    rowHeight,
    rowGap,
    itemGap,
    maxFps,
    tilt,
    arch,
    speed,
    speedVariance,
    alternate,
    autoScroll,
    inertia,
    damping,
    dragSensitivity,
    wheelSensitivity,
    radius,
    grayscale,
    focusRadius,
    focusStrength,
    brightness,
    userDpr,
    fade,
    dim,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ touchAction: "none" }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

