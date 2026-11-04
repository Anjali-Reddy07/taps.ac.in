"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface TactHeroProps {
  onOpenQuery?: () => void;
}

export default function TactHero({ onOpenQuery }: TactHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      badge: "WELCOME TO TAPS • ESTD 2000",
      title: "Where Ambition Finds Its Direction",
      subtitle:
        "Premier undergraduate institution under Utkal University for Bachelor of Computer Application (BCA), Bachelor of Business Administration (BBA), and B.Sc Honours in Biotechnology & Computer Science.",
      primaryCta: "Explore Programmes",
      primaryHref: "#programmes",
      secondaryCta: "Apply for 2026–27",
      image: "/asset/campus-banner.png",
      tagline: "AFFILIATED TO UTKAL UNIVERSITY • APPROVED BY AICTE & GOVT. OF ODISHA",
    },
    {
      badge: "INDUSTRY CONNECT & IMMERSION",
      title: "Learning That Meets the Industry Halfway",
      subtitle:
        "Corporate conclaves, hands-on internships with Tier-1 tech recruiters, and industry MoUs bringing corporate leaders onto our campus every semester.",
      primaryCta: "Placement Records",
      primaryHref: "#placements",
      secondaryCta: "Corporate Partners",
      image: "/asset/intro-banner.jpg",
      tagline: "100+ CORPORATE RECRUITING PARTNERS ACROSS IT & MANAGEMENT",
    },
    {
      badge: "INNOVATION · RIGOR · IMPACT",
      title: "Curiosity Becomes Real Capability",
      subtitle:
        "From high-performance computing labs, hackathons, and state-of-the-art biotechnology research to business case incubation — our scholars learn by doing.",
      primaryCta: "Research & Labs",
      primaryHref: "#facilities",
      secondaryCta: "Campus Tour",
      image: "/asset/campus-banner.png",
      tagline: "MODERN HIGH-PERFORMANCE COMPUTING & GENETICS LABORATORIES",
    },
    {
      badge: "CAMPUS PLACEMENT EXCELLENCE",
      title: "Careers That Begin Right on Campus",
      subtitle:
        "Over 95% placement track record with leading multinationals including TCS, Infosys, Wipro, Capgemini, Cognizant, and Tech Mahindra.",
      primaryCta: "View Recruiters",
      primaryHref: "#placements",
      secondaryCta: "Download Prospectus",
      image: "/asset/intro-banner.jpg",
      tagline: "2,500+ ALUMNI PLACED WORLDWIDE ACROSS TIER-1 ORGANISATIONS",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Featured Highlights"
      className="relative h-[72vh] sm:h-[70vh] min-h-[500px] sm:min-h-[560px] max-h-[740px] overflow-hidden bg-[#001D4A] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Cross-Fade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.title}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
                sizes="100vw"
              />
            </div>

            {/* Rich Royal Blue / Navy Gradient Overlay matching TACT layout */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A] via-[#001D4A]/80 to-[#001D4A]/40 sm:bg-gradient-to-r sm:from-[#001D4A]/95 sm:via-[#001D4A]/70 sm:to-transparent" />

            {/* Ambient Tech Light Accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0020D6]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center">
              <div className="max-w-2xl sm:max-w-3xl pt-6">
                
                {/* Eyebrow Tag */}
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-300 font-semibold mb-3 sm:mb-4 bg-blue-950/60 px-3 py-1 rounded-full border border-sky-400/30 backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-4 sm:mb-5 text-white">
                  {slide.title}
                </h1>

                {/* Subtitle / Excerpt */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl font-light">
                  {slide.subtitle}
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href={slide.primaryHref}
                    className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-lg bg-[#0020D6] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#0018b3] transition-all shadow-lg shadow-blue-900/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{slide.primaryCta}</span>
                  </Link>

                  <button
                    onClick={onOpenQuery}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-lg border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white transition-all backdrop-blur-xs"
                  >
                    <span>{slide.secondaryCta}</span>
                  </button>
                </div>

                {/* Institutional Bottom Banner */}
                <div className="mt-8 pt-4 border-t border-white/15 text-[11px] sm:text-xs text-slate-300 font-medium tracking-wider uppercase flex items-center gap-2">
                  <span className="text-sky-300">✦</span>
                  <span>{slide.tagline}</span>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls (Matching TACT style) */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-4 bg-[#001D4A]/80 border border-white/15 px-4 py-2 rounded-full backdrop-blur-md">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all rounded-full ${
                i === currentSlide ? "w-7 bg-sky-300" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <span className="text-white/30">|</span>

        {/* Previous / Next Arrow Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
