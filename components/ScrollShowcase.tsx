"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ScrollShowcaseProps {
  onOpenQuery?: () => void;
}

export default function ScrollShowcase({ onOpenQuery }: ScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from 0 (enters bottom) to 1 (leaves top)
      const totalDistance = rect.height + windowHeight;
      const currentDistance = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDistance / totalDistance, 0), 1);

      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax offsets based on scroll progress
  // Top-left card drifts down slightly as user scrolls down
  const topLeftY = (scrollYProgress - 0.5) * 90;
  // Bottom-right card drifts up in opposite direction for dynamic depth
  const bottomRightY = (0.5 - scrollYProgress) * 110;
  // Subtle rotation drift
  const topLeftRotate = -3.5 + (scrollYProgress - 0.5) * 3;
  const bottomRightRotate = 3.5 - (scrollYProgress - 0.5) * 3;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white text-[#001D4A] overflow-hidden py-24 sm:py-36 lg:py-44 border-b border-blue-100 select-none"
    >
      {/* AMBIENT BACKGROUND GLOW IN SOFT BLUE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/35 rounded-full blur-[140px] pointer-events-none" />

      {/* FLOATING CARD 1: TOP LEFT (Overlapping the Headline, Coterie Parallax Style) */}
      <div
        className="absolute z-20 top-8 sm:top-12 lg:top-16 left-3 sm:left-10 lg:left-24 transition-transform duration-100 ease-out pointer-events-auto"
        style={{
          transform: `translate3d(0, ${topLeftY}px, 0) rotate(${topLeftRotate}deg)`,
        }}
      >
        <div className="group relative w-48 sm:w-64 md:w-80 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white bg-white shadow-[0_25px_50px_rgba(0,32,214,0.18)] hover:scale-105 hover:rotate-0 transition-all duration-300">
          <Image
            src="/asset/intro-banner.jpg"
            alt="Trident Technoplex Campus Grounds at Infocity"
            fill
            loading="lazy"
            quality={90}
            sizes="(max-width: 768px) 250px, 320px"
            className="object-cover brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/70 via-transparent to-transparent pointer-events-none" />

          {/* Floating Pill Tag */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[10px] sm:text-xs">
            <span className="bg-[#0020D6] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              ICT Technoplex
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-white/90">
              Patia, Infocity
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING CARD 2: BOTTOM RIGHT (Overlapping the Subcopy, Coterie Parallax Style) */}
      <div
        className="absolute z-20 bottom-8 sm:bottom-12 lg:bottom-16 right-3 sm:right-10 lg:right-24 transition-transform duration-100 ease-out pointer-events-auto"
        style={{
          transform: `translate3d(0, ${bottomRightY}px, 0) rotate(${bottomRightRotate}deg)`,
        }}
      >
        <div className="group relative w-48 sm:w-64 md:w-80 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white bg-white shadow-[0_25px_50px_rgba(0,32,214,0.18)] hover:scale-105 hover:rotate-0 transition-all duration-300">
          <Image
            src="/asset/campus-banner.png"
            alt="Trident Academy Academic Charter & Excellence"
            fill
            loading="lazy"
            quality={90}
            sizes="(max-width: 768px) 250px, 320px"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 bg-white"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

          {/* Floating Pill Tag */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#001D4A] text-[10px] sm:text-xs">
            <span className="bg-[#0020D6] text-white font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              Utkal Univ. Affiliated
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#0020D6]">
              Est. 2000
            </span>
          </div>
        </div>
      </div>

      {/* CENTERPIECE: MASSIVE BOLD TYPOGRAPHY & OFFICIAL TAPS DATA */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center justify-center">
        
        {/* Subtle Category Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-[#0020D6] mb-6 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0020D6] animate-pulse" />
          <span>Institutional Standard • TAPS.AC.IN</span>
        </div>

        {/* Massive Bold Headline (Exact composition matching Coterie screenshot) */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[102px] font-bold tracking-tighter text-[#001D4A] leading-[0.98] sm:leading-[0.95]">
          Modern academic <br />
          <span className="text-[#001D4A] tracking-tighter">
            essentials
          </span>
        </h2>

        {/* Centered Subcopy with authentic data from taps.ac.in */}
        <p className="mt-8 sm:mt-12 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
          Trident Academy of Professional Studies exists to give you a premier undergraduate experience across BCA &amp; BBA disciplines. Programs are Utkal University affiliated, air-conditioned ICT smart lab-equipped, 70,000+ volume digital library supported, and 100% corporate placement assisted.
        </p>

        {/* Interactive Highlight Badges with TAPS.ac.in Infrastructure */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-xl">
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0020D6] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-xs">
            ICT Smart Classrooms
          </span>
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0020D6] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-xs">
            70,000+ Volume Library
          </span>
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0020D6] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-xs">
            400-Seat Auditorium
          </span>
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0020D6] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-xs">
            Tier-1 Pre-Placement Training
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#programs"
            className="bg-[#0020D6] hover:bg-[#0018b3] text-white font-semibold text-xs sm:text-sm tracking-wide px-8 sm:px-9 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30"
          >
            Explore Curriculum
          </Link>

          <button
            type="button"
            onClick={onOpenQuery}
            className="bg-white hover:bg-blue-50/70 border border-blue-200 hover:border-blue-300 text-[#0020D6] font-semibold text-xs sm:text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
          >
            Submit Query →
          </button>
        </div>

      </div>
    </section>
  );
}

