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
  const [showReel, setShowReel] = useState(true);

  // Curated High-Definition Drive Photographs: Balanced mix of Campus Architecture, Students, Culturals & Programs
  const slides = [
    {
      eyebrow: "TACT(U) • ESTD. 2000",
      headline: "Trident Academy of Professional Studies",
      subheadline:
        "Where Ambition Finds Its Direction • Premier BBA & BCA Programs under Utkal University",
      image: "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg",
      tag: "CAMPUS ARCHITECTURE & PROMENADE",
      location: "11-Acre Technoplex, Infocity",
    },
    {
      eyebrow: "ACADEMIC EXCELLENCE & CBCS",
      headline: "Empowering Next-Gen Technocrats & Leaders",
      subheadline:
        "Interactive Tiered Amphitheatres, Case Study Pedagogy & Faculty-Mentored Undergraduate Learning for BCA & BBA",
      image: "/images/drive_third/ClassRooms_Academic.JPG",
      tag: "STUDENTS IN MULTIMEDIA AMPHITHEATRE",
      location: "Academic Lecture Theatres",
    },
    {
      eyebrow: "TECHNICAL PROGRAMS & HACKATHONS",
      headline: "24-Hour Hackathons & Software Sprints",
      subheadline:
        "High-Performance Cloud Labs, Full-Stack Software Engineering, AI Foundational Tracks & Algorithmic Challenges",
      image: "/images/drive_fourth/hack_day.png",
      tag: "APPER CODING CLUB & HACKATHONS",
      location: "Technology Cluster",
    },
    {
      eyebrow: "ANNUAL TRIFEST EXTRAVAGANZA",
      headline: "Vibrant Campus Spirit & Cultural Arts",
      subheadline:
        "Annual Multi-Day Spring Festival Uniting Dance, Music, Theatre, Literary Debates & Inter-Collegiate Celebrations",
      image: "/images/trifest-odissi-dance.webp",
      tag: "TRIFEST CULTURAL FESTIVAL",
      location: "Main Stage Arena",
    },
    {
      eyebrow: "CORPORATE SYNERGY & PLACEMENTS",
      headline: "138+ Annual Corporate Recruiters",
      subheadline:
        "Active MoUs with TCS, Infosys, Wipro, Capgemini, Deloitte & 138+ Annual Corporate Recruitment Partners",
      image: "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
      tag: "CORPORATE PLACEMENT DELEGATES",
      location: "Auditorium Main Stage",
    },
    {
      eyebrow: "INFOCITY CAMPUS LIFE & ATHLETICS",
      headline: "Holistic Student Growth & Sports",
      subheadline:
        "Floodlit Basketball Arena, Multi-Sport Grounds, Open-Air Yoga Pavilions & High-Energy Student Community",
      image: "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg",
      tag: "SPORTS ARENA & ATRIUM",
      location: "Twilight Campus View",
    },
  ];

  // Automatic slide rotation: every slide moves after 5 seconds each
  // The Reel animation plays ONLY ONCE on initial load (for Slide 1 for 5 seconds)
  // At 5 seconds, it moves to Slide 2 and transitions permanently to sequential full-bleed image slides
  useEffect(() => {
    const interval = setInterval(() => {
      setShowReel(false);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
    >
      {/* 1. TILTED REEL GALLERY BACKGROUND: GLIDING GOOGLE DRIVE IMAGES (Shown initially for ~5 sec) */}
      <div
        className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
          showReel ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ReelGallery
          images={[
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
            "/images/trifest-odissi-dance.webp",
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
                quality={92}
                className={`object-cover object-center filter contrast-105 brightness-105 transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* 3. One-Sided Left-to-Right Shaded Scrim: Brighter & lighter mask so background image is significantly more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/80 via-[#070D21]/45 via-42% to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/40 via-transparent to-transparent z-10 pointer-events-none" />

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
            {/* Top Right Floating Campus Location Tag */}
            <div className="absolute top-6 right-6 sm:right-12 z-20 hidden sm:flex items-center gap-2.5">
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
                <div className="inline-flex items-center gap-2 bg-blue-900/70 text-blue-100 border border-blue-400/50 px-3.5 py-1 text-xs tracking-widest uppercase rounded-full mb-4 sm:mb-6 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulseGlow" />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* 2. Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif max-w-4xl leading-tight sm:leading-none mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {slide.headline}
                </h1>

                {/* 3. Subheadline: Enhanced visibility, clear contrast & drop shadow */}
                <p className="text-white sm:text-slate-100 text-base sm:text-lg max-w-2xl font-normal sm:font-medium mt-4 sm:mt-5 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
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
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
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
                  key={`progress-${currentSlide}`}
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full animate-[progress_5s_linear_forwards]" 
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
