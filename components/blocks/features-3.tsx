"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface FeatureMarqueeItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  image: string;
  metric?: string;
  metricLabel?: string;
  tag?: string;
  glow?: string;
}

export interface Features3Props {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  track1: FeatureMarqueeItem[];
  track2: FeatureMarqueeItem[];
  track3?: FeatureMarqueeItem[];
  activeId?: string;
  onItemSelect?: (item: FeatureMarqueeItem) => void;
  className?: string;
}

export function Features3({
  badge = "CAMPUS INFRASTRUCTURE",
  title = "Explore the Technoplex Ecosystem",
  highlightText = "Opposite-Scrolling Marquees",
  description = "A bi-directional dynamic visual showcase featuring multi-angle perspectives, world-class labs, and living amenities.",
  track1,
  track2,
  track3,
  activeId,
  onItemSelect,
  className = "",
}: Features3Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`relative py-16 sm:py-24 overflow-hidden ${className}`}>
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-12 sm:mb-16">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          {badge && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3.5 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{badge}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
            {title}{" "}
            {highlightText && (
              <span className="font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {highlightText}
              </span>
            )}
          </h2>

          {description && (
            <p className="text-sm sm:text-base text-zinc-600 mt-4 font-normal leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Opposite-Scrolling Marquees Container with Gradient Edge Masks */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full space-y-4 sm:space-y-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] select-none"
      >
        {/* Track 1: Scrolling Left */}
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee-left hover:[animation-play-state:paused]">
          {[...track1, ...track1].map((item, idx) => {
            const isSelected = activeId === item.id;
            return (
              <button
                key={`${item.id}-t1-${idx}`}
                type="button"
                onClick={() => onItemSelect?.(item)}
                className={`relative shrink-0 w-72 sm:w-88 h-44 sm:h-52 rounded-2xl overflow-hidden text-left transition-all duration-300 cursor-pointer group ${
                  isSelected
                    ? "ring-2 ring-blue-600 shadow-xl scale-[1.02]"
                    : "hover:scale-[1.02] shadow-md hover:shadow-xl"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 288px, 352px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-colors" />

                {/* Badge on Top */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-white/20">
                    {item.category}
                  </span>
                  {item.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Metric on Top Right */}
                {item.metric && (
                  <div className="absolute top-3 right-3 z-10 text-right">
                    <span className="text-xs font-mono font-black text-white drop-shadow-md">
                      {item.metric}
                    </span>
                  </div>
                )}

                {/* Title & Subtitle at Bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                  <div className="text-sm sm:text-base font-bold leading-snug line-clamp-1 drop-shadow-sm group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-[11px] font-mono text-zinc-300 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Track 2: Scrolling Right (Opposite Direction) */}
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee-right hover:[animation-play-state:paused]">
          {[...track2, ...track2].map((item, idx) => {
            const isSelected = activeId === item.id;
            return (
              <button
                key={`${item.id}-t2-${idx}`}
                type="button"
                onClick={() => onItemSelect?.(item)}
                className={`relative shrink-0 w-72 sm:w-88 h-44 sm:h-52 rounded-2xl overflow-hidden text-left transition-all duration-300 cursor-pointer group ${
                  isSelected
                    ? "ring-2 ring-indigo-600 shadow-xl scale-[1.02]"
                    : "hover:scale-[1.02] shadow-md hover:shadow-xl"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 288px, 352px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-colors" />

                {/* Badge on Top */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-emerald-300 border border-white/20">
                    {item.category}
                  </span>
                  {item.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Metric on Top Right */}
                {item.metric && (
                  <div className="absolute top-3 right-3 z-10 text-right">
                    <span className="text-xs font-mono font-black text-white drop-shadow-md">
                      {item.metric}
                    </span>
                  </div>
                )}

                {/* Title & Subtitle at Bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                  <div className="text-sm sm:text-base font-bold leading-snug line-clamp-1 drop-shadow-sm group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="text-[11px] font-mono text-zinc-300 line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Optional Track 3: Scrolling Left */}
        {track3 && track3.length > 0 && (
          <div className="flex w-max gap-4 sm:gap-6 animate-marquee-left hover:[animation-play-state:paused]">
            {[...track3, ...track3].map((item, idx) => {
              const isSelected = activeId === item.id;
              return (
                <button
                  key={`${item.id}-t3-${idx}`}
                  type="button"
                  onClick={() => onItemSelect?.(item)}
                  className={`relative shrink-0 w-72 sm:w-88 h-44 sm:h-52 rounded-2xl overflow-hidden text-left transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? "ring-2 ring-purple-600 shadow-xl scale-[1.02]"
                      : "hover:scale-[1.02] shadow-md hover:shadow-xl"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 288px, 352px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-colors" />

                  {/* Badge on Top */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-purple-300 border border-white/20">
                      {item.category}
                    </span>
                    {item.tag && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Metric on Top Right */}
                  {item.metric && (
                    <div className="absolute top-3 right-3 z-10 text-right">
                      <span className="text-xs font-mono font-black text-white drop-shadow-md">
                        {item.metric}
                      </span>
                    </div>
                  )}

                  {/* Title & Subtitle at Bottom */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                    <div className="text-sm sm:text-base font-bold leading-snug line-clamp-1 drop-shadow-sm group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div className="text-[11px] font-mono text-zinc-300 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Indicator Pill */}
      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-500 bg-zinc-100 px-3.5 py-1 rounded-full border border-zinc-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Opposite-Scrolling Tracks • Hover to Pause • Click Any Item to Inspect</span>
        </span>
      </div>
    </section>
  );
}
