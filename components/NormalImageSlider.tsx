'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface SlideItem {
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  description?: string;
}

interface NormalImageSliderProps {
  slides: SlideItem[];
  interval?: number; // default 5000ms (5 sec)
  className?: string;
}

export default function NormalImageSlider({
  slides,
  interval = 5000,
  className = '',
}: NormalImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance each slide after interval (default 5000ms / 5 sec)
  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides, interval]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl ${className}`}>
      {/* Aspect Ratio Container for Responsive Height */}
      <div className="relative w-full aspect-[16/9] min-h-[440px] sm:min-h-[540px] lg:min-h-[620px] overflow-hidden">
        
        {/* Animated Slide Image */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.title}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center filter contrast-105"
              sizes="100vw"
            />

            {/* Gradient Overlays for Readability & Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/50" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top Header Bar on Slide */}
        <div className="absolute top-0 inset-x-0 z-20 px-6 sm:px-10 py-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-cyan-300 border border-white/20 shadow-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{currentSlide.tag}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Auto slide 5s countdown indicator badge */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Auto-slide (5s)</span>
            </div>

            {/* Slide Index Counter */}
            <div className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15">
              <span className="text-cyan-400">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-slate-400"> / {String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Center Bottom Caption */}
        <div className="absolute bottom-0 inset-x-0 z-20 px-6 sm:px-12 pb-10 sm:pb-12 max-w-4xl">
          <motion.div
            key={`caption-${currentIndex}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold uppercase tracking-widest block mb-2">
              {currentSlide.subtitle}
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-3">
              {currentSlide.title}
            </h3>
            {currentSlide.description && (
              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                {currentSlide.description}
              </p>
            )}
          </motion.div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 shadow-xl"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 shadow-xl"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Slide Indicators (Dots with active fill) */}
        <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-10 z-30 flex items-center gap-2">
          {slides.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

