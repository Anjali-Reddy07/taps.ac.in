"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ReelGallery from "@/components/ReelGallery";

interface TactHeroProps {
  onOpenQuery?: () => void;
}

export default function TactHero({ onOpenQuery }: TactHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showReel, setShowReel] = useState(true);

  // Curated High-Definition Drive Photographs
  const slides = [
    {
      eyebrow: "TACT(U) • ESTD. 2000",
      headline: "Trident Academy of Professional Studies",
      subheadline:
        "Where Ambition Finds Its Direction • Premier BBA & BCA Programs under Utkal University",
      image: "/images/drive_fourth/campus_exterior_1.jpg",
      tag: "CAMPUS PROMENADE",
      location: "Infocity, Bhubaneswar",
    },
    {
      eyebrow: "UTKAL UNIVERSITY AFFILIATED",
      headline: "Where Academic Rigor Meets Leadership",
      subheadline:
        "AICTE Approved & Permanently Recognized by Higher Education Dept, Govt. of Odisha • 25+ Years of Educational Excellence",
      image: "/images/drive_new/_DSC1826.JPG",
      tag: "CENTRAL PROMENADE & ARCHITECTURE",
      location: "Infocity Campus",
    },
    {
      eyebrow: "SCHOOL OF COMPUTING (BCA)",
      headline: "Cutting-Edge Computer Applications",
      subheadline:
        "High-Performance Cloud Labs, Full-Stack Software Engineering, AI Foundational Tracks & 24/7 Gigabit Fiber Network",
      image: "/images/drive_new/1721020760290.jpg",
      tag: "BLOCK-4 COMPUTING WING",
      location: "Technology Cluster",
    },
    {
      eyebrow: "INFOCITY CAMPUS LIFE",
      headline: "Holistic Student Growth & Athletics",
      subheadline:
        "Floodlit Basketball Arena, Multi-Sport Grounds, Open-Air Yoga Pavilions & High-Energy Cultural Fests",
      image: "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg",
      tag: "SPORTS ARENA & ATRIUM",
      location: "Twilight Campus View",
    },
    {
      eyebrow: "CORPORATE SYNERGY & PLACEMENTS",
      headline: "138+ Annual Corporate Recruiters",
      subheadline:
        "Active MoUs with TCS, Infosys, Wipro, Capgemini, Deloitte & 138+ Annual Corporate Recruitment Partners",
      image: "/images/drive_new/_DSC1852.JPG",
      tag: "TRAINING & PLACEMENTS (BLOCK-5)",
      location: "Academic Enclave",
    },
  ];

  // 1. Initial 5-second showcase for ReelGallery animation, then switch to sequential image slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReel(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Sequential slide rotation (cycles every 5 seconds once image slides are active)
  useEffect(() => {
    if (isPaused || showReel) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, showReel, slides.length]);

  const nextSlide = () => {
    setShowReel(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setShowReel(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Campus highlights"
      className="relative w-full h-[82vh] min-h-[580px] max-h-[800px] overflow-hidden bg-[#070D21] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. TILTED REEL GALLERY BACKGROUND: GLIDING GOOGLE DRIVE IMAGES (Shown initially for ~5 sec) */}
      <div
        className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
          showReel ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ReelGallery
          images={[
            "/images/drive_fourth/campus_exterior_1.jpg",
            "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg",
            "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg",
            "/images/drive_new/1721020760290.jpg",
            "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg",
            "/images/drive_new/_DSC1852.JPG",
            "/images/drive_new/418523663_877202237525747_6377361483820920683_n.jpg",
            "/images/drive_new/487841832_17914511076094364_1416184591585353408_n.jpg",
            "/images/drive_new/_DSC1826.JPG",
            "/images/drive_new/320067572_1333023554121378_8020995869077112586_n.jpg",
            "/images/drive_second/alumni3.jpg",
            "/images/drive_second/Activities.jpg",
            "/images/drive_third/ClassRooms_Academic.JPG",
          ]}
          rows={5}
          rowHeight={105}
          rowGap={18}
          itemGap={16}
          tilt={6.5}
          arch={36}
          autoScroll={22}
          speed={1.0}
          speedVariance={0.45}
          alternate={true}
          radius={12}
          grayscale={0.05}
          dim={0.10}
          fade={0.12}
          className="w-full h-full opacity-100"
        />
      </div>

      {/* 2. FULL-BLEED SEQUENTIAL IMAGE SLIDES: Fade in smoothly after 5s and change one by one */}
      <div
        className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
          !showReel ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={`bg-img-${slide.tag}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-[2]" : "opacity-0 pointer-events-none z-[1]"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={index === 0 || index === 1}
                className={`object-cover object-center filter contrast-105 brightness-90 transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* 3. One-Sided Left-to-Right Shaded Scrim: Deep dark on left for text legibility, clear and vibrant on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/95 via-[#070D21]/70 via-35% to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/60 via-transparent to-transparent z-10 pointer-events-none" />

      {/* 4. Slide Content Layer with Cross-Fade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.tag}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-20 pointer-events-auto" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            {/* Top Right Floating Campus Location Tag + View Mode Toggle */}
            <div className="absolute top-6 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setShowReel((prev) => !prev)}
                className="flex items-center gap-1.5 bg-[#070D21]/80 hover:bg-[#070D21] backdrop-blur-md border border-indigo-500/30 px-3 py-1.5 rounded-full text-[11px] text-indigo-200 hover:text-white transition-all cursor-pointer shadow-xs active:scale-95"
                title={showReel ? "Switch to single photo slides" : "Switch to multi-photo grid reel"}
              >
                <span className={`w-2 h-2 rounded-full ${showReel ? "bg-amber-400 animate-pulse" : "bg-cyan-400"}`} />
                <span className="font-semibold uppercase tracking-wider">
                  {showReel ? "Reel View" : "Photo Slides"}
                </span>
              </button>

              <div className="flex items-center gap-2 bg-[#070D21]/80 backdrop-blur-md border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-[11px] text-indigo-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="font-bold text-white uppercase tracking-wider">{slide.tag}</span>
                <span className="text-indigo-400">•</span>
                <span>{slide.location}</span>
              </div>
            </div>

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center">
              <div className="max-w-4xl animate-fadeInUp">
                
                {/* 1. Eyebrow Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-900/60 text-blue-200 border border-blue-400/40 px-3.5 py-1 text-xs tracking-widest uppercase rounded-full mb-4 sm:mb-6 backdrop-blur-md shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulseGlow" />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* 2. Main Headline */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-serif max-w-4xl leading-tight sm:leading-none mb-2">
                  {slide.headline}
                </h1>

                {/* 3. Subheadline */}
                <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl font-light mt-4 sm:mt-5 leading-relaxed">
                  {slide.subheadline}
                </p>

                {/* 4. CTA Row: White Blue Lavender Palette */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                  <button
                    onClick={onOpenQuery}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-xl shadow-blue-600/30 hover-lift cursor-pointer active:scale-95"
                  >
                    Apply for 2026 Batch →
                  </button>

                  <Link
                    href="/programmes"
                    className="border border-indigo-300/50 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-xs active:scale-95"
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

      {/* Pagination Indicators with Animated Progress Line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.tag}
            onClick={() => {
              setShowReel(false);
              setCurrentSlide(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative py-2 cursor-pointer"
          >
            <div className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
              i === currentSlide ? "w-10 sm:w-14 bg-white/20" : "w-3 sm:w-4 bg-white/30 hover:bg-white/50"
            }`}>
              {i === currentSlide && (
                <div 
                  key={`progress-${currentSlide}-${showReel}`}
                  className={`h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full ${
                    !isPaused ? "animate-[progress_5s_linear_forwards]" : "w-full"
                  }`} 
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
