"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface Hero7Slide {
  id: string;
  title: string;
  subtitle?: string;
  desc: string;
  img: string;
  tag: string;
  metric?: string;
  statLabel?: string;
  glow?: string;
}

export interface Hero7Props {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  slides: Hero7Slide[];
  autoPlayInterval?: number;
  className?: string;
  theme?: "light" | "dark";
}

export function Hero7({
  badge = "LIVE DRIVE INFRASTRUCTURE • HERO 7",
  title = "Dedicated Campus Placement",
  highlightText = "Suites & Recruiter Hub",
  description = "Explore our acoustically optimized GD suites, 600-terminal concurrent examination halls, and corporate interview lounges in a dynamic 3D rotating stage.",
  slides,
  autoPlayInterval = 3600,
  className = "",
  theme = "light",
}: Hero7Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;
  const isDark = theme === "dark";

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automated Continuous Loop: smoothly advances every autoPlayInterval without pausing on hover
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [total, autoPlayInterval, activeIndex]);

  // Calculate circular offset around a 3D cylindrical carousel
  const getOffset = (idx: number) => {
    let diff = (idx - activeIndex + total) % total;
    if (diff > total / 2) {
      diff -= total;
    }
    return diff;
  };

  return (
    <div className={`relative py-8 sm:py-12 select-none ${className}`}>
      
      {/* Header Block */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4 animate-fadeInUp">
        {badge && (
          <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold mb-3.5 px-4 py-1.5 rounded-full shadow-2xs ${
            isDark
              ? "bg-zinc-900 border border-zinc-700 text-cyan-300"
              : "bg-blue-50 border border-blue-200/80 text-blue-700"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? "bg-cyan-400" : "bg-blue-600"}`} />
            <span>{badge}</span>
          </div>
        )}

        <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight ${
          isDark ? "text-white" : "text-zinc-950"
        }`}>
          {title}{" "}
          <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {highlightText}
          </span>
        </h2>

        {description && (
          <p className={`text-sm sm:text-base mt-3.5 font-normal leading-relaxed max-w-2xl mx-auto ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}>
            {description}
          </p>
        )}
      </div>

      {/* 3D Rotating Carousel Stage with Perspective (Automated Infinite Loop) */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="relative h-80 sm:h-96 lg:h-[460px] w-full flex items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
          {slides.map((slide, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 2;

            return (
              <motion.div
                key={slide.id || slide.title}
                onClick={() => {
                  if (!isActive) setActiveIndex(idx);
                }}
                initial={false}
                animate={{
                  x:
                    offset === 0
                      ? "0%"
                      : offset === 1
                      ? "48%"
                      : offset === -1
                      ? "-48%"
                      : offset === 2
                      ? "78%"
                      : offset === -2
                      ? "-78%"
                      : "0%",
                  scale: offset === 0 ? 1 : absOffset === 1 ? 0.84 : 0.68,
                  rotateY: offset === 0 ? 0 : offset > 0 ? -22 : 22,
                  z: offset === 0 ? 50 : absOffset === 1 ? -50 : -140,
                  opacity: offset === 0 ? 1 : absOffset === 1 ? 0.72 : isVisible ? 0.28 : 0,
                  zIndex: offset === 0 ? 30 : 20 - absOffset * 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 26,
                }}
                className={`absolute inset-0 m-auto w-[84%] sm:w-[78%] lg:w-[70%] h-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 cursor-pointer origin-center transition-shadow duration-300 ${
                  isActive
                    ? "ring-2 ring-white/30 shadow-[0_25px_60px_-15px_rgba(59,130,246,0.35)]"
                    : "hover:opacity-90"
                }`}
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 55vw"
                  priority={isActive}
                  quality={92}
                />

                {/* Shading Vignette */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive 
                      ? "bg-gradient-to-t from-black/90 via-black/25 to-black/25" 
                      : "bg-black/55"
                  }`} 
                />

                {/* Tag & Monospace Index on Top */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-black/75 backdrop-blur-md text-cyan-300 border border-white/20 shadow-md">
                    {slide.tag}
                  </span>
                  {slide.metric && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                      {slide.metric}
                    </span>
                  )}
                </div>

                {/* Active Slide Bottom Floating Glass Caption */}
                {isActive && (
                  <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                    <div className="p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span>{slide.title}</span>
                        </div>
                        <div className="text-xs text-zinc-300 font-light mt-0.5 line-clamp-2">
                          {slide.desc}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800">
                          0{activeIndex + 1} / 0{total}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Floating Arrow Controls */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 shadow-2xl"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 shadow-2xl"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* ========================================================================= */}
        {/* REACT BITS PRO SIGNATURE GLOW BAR (CONTINUOUS AUTOMATED LOOP) */}
        {/* ========================================================================= */}
        <div className="relative mt-8 sm:mt-10 max-w-3xl mx-auto px-4">
          {/* Outer Diffused Glow Layer */}
          <div className="absolute inset-0 -top-2 h-6 bg-gradient-to-r from-blue-500/50 via-cyan-400/70 via-indigo-500/60 to-purple-600/50 rounded-full blur-xl opacity-80 pointer-events-none animate-pulse" />

          {/* Primary High-Intensity Laser Glow Bar */}
          <div className={`relative h-2 w-full rounded-full ${isDark ? "bg-zinc-800" : "bg-zinc-200"} overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.7)]`}>
            {/* Animated Laser Track: Re-triggers on activeIndex to fill linearly across autoPlayInterval */}
            <motion.div
              key={`glow-fill-${activeIndex}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 via-indigo-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(34,211,238,1)]"
            />
          </div>

          {/* Glowing Center Spot Reflex */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-3 bg-cyan-300 rounded-full blur-md opacity-90 pointer-events-none" />
        </div>

        {/* Interactive Segment Badges Directly Under Glow Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {slides.map((s, sIdx) => {
            const isSelected = activeIndex === sIdx;
            return (
              <button
                key={s.id || sIdx}
                type="button"
                onClick={() => setActiveIndex(sIdx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? isDark
                      ? "bg-white text-black shadow-lg scale-105 ring-2 ring-cyan-400"
                      : "bg-zinc-950 text-white shadow-lg scale-105 ring-2 ring-blue-500"
                    : isDark
                    ? "text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
                    : "text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200"
                }`}
              >
                <span className={isSelected ? (isDark ? "text-cyan-600" : "text-cyan-400") : "text-zinc-500"}>
                  0{sIdx + 1}
                </span>
                <span>{s.tag}</span>
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
}
