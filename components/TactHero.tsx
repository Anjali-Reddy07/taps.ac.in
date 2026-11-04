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

  // Real campus facility photographs (No oversized blue logo stage backdrops)
  const slides = [
    {
      eyebrow: "TACT(U) • ESTD. 2000",
      headline: "Trident Academy of Professional Studies",
      subheadline:
        "Where Ambition Finds Its Direction • Premier BBA & BCA Programs under Utkal University",
      image: "/images/drive/campus-building.png",
      tag: "INFOCITY TECHNOPLEX",
    },
    {
      eyebrow: "ACCREDITED EXCELLENCE",
      headline: "Trident Academy of Professional Studies",
      subheadline:
        "Rank #1 Private BBA & BCA Institution under Utkal University • AICTE Approved & Govt. of Odisha Recognized",
      image: "/images/drive/academic-infrastructure.png",
      tag: "ACADEMIC WING",
    },
    {
      eyebrow: "ADVANCED COMPUTING",
      headline: "Trident Academy of Professional Studies",
      subheadline:
        "Hands-on Cloud, Python, Java & AI Clusters with Round-the-Clock Gigabit Fiber Connectivity",
      image: "/images/drive/computer-lab.jpg",
      tag: "COMPUTER APPLICATIONS LAB",
    },
    {
      eyebrow: "RESEARCH VAULT",
      headline: "Trident Academy of Professional Studies",
      subheadline:
        "Central Research Library with 50,000+ Volumes, DELNET Subscriptions & Digital Knowledge Archives",
      image: "/images/drive/central-library.jpg",
      tag: "CENTRAL RESEARCH LIBRARY",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
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
      aria-roledescription="carousel"
      aria-label="Campus highlights"
      className="relative w-full h-[75vh] min-h-[550px] max-h-[750px] overflow-hidden bg-zinc-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Cross-Fade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.tag}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            {/* Contained Real Campus Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt="Trident Academy of Professional Studies Campus"
                fill
                priority={index === 0}
                className="object-cover object-center filter grayscale-[30%]"
                sizes="100vw"
              />
            </div>

            {/* Heavy Dark Gradient Scrim Overlay for Complete Contrast & Monochrome Balance */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40 z-10" />

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center">
              <div className="max-w-4xl animate-fadeInUp">
                
                {/* 1. Eyebrow Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 text-zinc-300 border border-white/20 px-3 py-1 text-xs tracking-widest uppercase rounded-full mb-4 sm:mb-6 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulseGlow" />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* 2. Main Headline */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-serif max-w-4xl leading-tight sm:leading-none">
                  {slide.headline}
                </h1>

                {/* 3. Subheadline */}
                <p className="text-zinc-300 text-base sm:text-lg max-w-2xl font-light mt-4 sm:mt-5 leading-relaxed">
                  {slide.subheadline}
                </p>

                {/* 4. CTA Row */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                  <button
                    onClick={onOpenQuery}
                    className="bg-white text-zinc-950 px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide hover:bg-zinc-200 transition-all duration-200 shadow-xl hover-lift cursor-pointer active:scale-95"
                  >
                    Apply for 2026 Batch →
                  </button>

                  <Link
                    href="/programmes"
                    className="border border-zinc-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-xs active:scale-95"
                  >
                    Explore Programmes (BCA &amp; BBA)
                  </Link>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              i === currentSlide ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
