"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface AlumnusTestimonial {
  id: string;
  name: string;
  degreeBadge: string;
  designation: string;
  company: string;
  location: string;
  quote: string;
  companyTag: string;
}

export default function TactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: AlumnusTestimonial[] = [
    {
      id: "jiban-samal",
      name: "Jiban Samal",
      degreeBadge: "Class of 2012 • BCA",
      designation: "SAP Lead Consultant",
      company: "CGI Info Systems",
      location: "London, United Kingdom",
      companyTag: "CGI",
      quote:
        "Nothing can suffice our golden days spent at Trident. Be it Ratha sir's serious practical classes or Manas sir's evergreen lectures, the faculties' inspiration and computing labs laid the foundation for every large-scale enterprise deployment I lead across Europe today.",
    },
    {
      id: "smruti-mishra",
      name: "Smruti Ranjan Mishra",
      degreeBadge: "Class of 2014 • BBA",
      designation: "Administrative Officer",
      company: "Revenue & Disaster Management Dept, Govt. of Odisha",
      location: "Bhubaneswar, India",
      companyTag: "GOVT",
      quote:
        "For me, Trident is more than an institution; it has been my favorite station next to my home. All I can say about TRIDENT is just 'Outstanding' from all aspects — administrative mentorship, public service ethics, and leadership readiness under pressure.",
    },
    {
      id: "piali-mazumdar",
      name: "Piali Mazumdar",
      degreeBadge: "Class of 2016 • BCA",
      designation: "Staff Software Engineer",
      company: "Capgemini Engineering",
      location: "Dallas, Texas, USA",
      companyTag: "CAPGEMINI",
      quote:
        "TAPS paved my entire career pathway in software systems and analytics. Extremely honored to be an alumna of an institution that gives each undergraduate individual faculty attention, high-performance computing access, and unwavering corporate confidence.",
    },
    {
      id: "dambarudhara-behera",
      name: "DambaruDhara Behera",
      degreeBadge: "Class of 2011 • BCA",
      designation: "Principal Cloud Solutions Architect",
      company: "DXC Technology (CSC)",
      location: "New York City, USA",
      companyTag: "DXC",
      quote:
        "Life at Trident was transformative. The foundation in computational science, database architecture, and collaborative hackathons continues to serve me at every stage of designing high-availability global cloud architectures on Wall Street.",
    },
    {
      id: "ananya-senapati",
      name: "Ananya Senapati",
      degreeBadge: "Class of 2019 • BBA",
      designation: "Product Marketing Lead",
      company: "Deloitte Digital",
      location: "Bengaluru, India",
      companyTag: "DELOITTE",
      quote:
        "The rigorous case study pedagogy and business innovation incubators at TAPS shaped my strategic intuition. We graduated not just with academic honors, but with an executive acumen and presentation polish ready for Fortune 500 boardroom engagements.",
    },
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay with hover pause
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const current = testimonials[currentIndex];

  const recruiterPartners = [
    { label: "TCS" },
    { label: "Infosys" },
    { label: "CGI" },
    { label: "Wipro" },
    { label: "Accenture" },
    { label: "Capgemini" },
    { label: "Deloitte." },
    { label: "AWS" },
    { label: "Cognizant" },
    { label: "Tech Mahindra" },
    { label: "HCLTech" },
  ];

  // Animation variants for smooth spring slide transitions
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 32 : -32,
      opacity: 0,
      scale: 0.985,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.35, ease: "easeOut" },
        scale: { duration: 0.35, ease: "easeOut" },
        filter: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -32 : 32,
      opacity: 0,
      scale: 0.985,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.25, ease: "easeIn" },
        scale: { duration: 0.25 },
        filter: { duration: 0.2 },
      },
    }),
  };

  return (
    <section 
      aria-label="Alumni Speak"
      className="relative py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
    >
      {/* Background Kinetic Ambient Radial Blur Orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/15 to-purple-400/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-drift-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-gradient-to-br from-purple-300/15 via-sky-300/10 to-indigo-300/15 blur-[100px] rounded-full pointer-events-none -z-10 animate-drift-reverse"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header with Refined Typography Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50/90 border border-blue-200/90 px-3.5 py-1 rounded-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Alumni Speak
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Voices from the Trident Legacy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Our graduates lead computational transformations, corporate strategy, and public governance across London, New York, and India.
          </p>
        </div>

        {/* ALUMNI HOMECOMING SPOTLIGHT BANNER */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-10 rounded-3xl overflow-hidden border border-indigo-150 shadow-xl bg-slate-950 group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/drive_second/alumni3.jpg"
              alt="Trident Annual Alumni Meet TRANSCEND"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                Alumni Meet • TRANSCEND
              </span>
              <span className="bg-blue-600/90 text-white font-medium text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm hidden sm:inline-block">
                Annual Homecoming
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  Trident Alumni Association • 10,000+ Strong Global Network
                </h3>
                <p className="text-xs text-slate-200 mt-1 font-light max-w-xl leading-relaxed">
                  Graduates leading computational transformations, enterprise management, and public administration reuniting at the Infocity campus.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-300 self-start sm:self-auto shrink-0 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                10,000+ Alumni Worldwide
              </span>
            </div>
          </div>
        </motion.div>

        {/* INTERACTIVE ALUMNI COMPANY QUICK-SELECTOR PILLS */}
        <div className="max-w-4xl mx-auto mb-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {testimonials.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 bg-white/80 border border-indigo-100 hover:border-indigo-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeAlumniCompanyPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider">{item.companyTag}</span>
                  <span className="hidden sm:inline text-[11px] opacity-90">• {item.name.split(" ")[0]}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ELEGANT ANIMATED TESTIMONIAL CARD */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Glowing Backlight Aura */}
          <div 
            className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-r from-blue-500/15 via-indigo-500/20 to-purple-500/15 blur-2xl opacity-75 pointer-events-none -z-10 animate-pulseGlow" 
            aria-hidden="true" 
          />

          {/* Main Card Surface with Polished Border & Micro-Interactions */}
          <div className="relative bg-white/95 backdrop-blur-md border border-indigo-150 hover:border-indigo-300 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(79,70,229,0.08)] transition-all duration-500 overflow-hidden">
            
            {/* Real-Time Auto-Play Countdown Indicator Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-indigo-50 overflow-hidden z-20" aria-hidden="true">
              <motion.div
                key={`${current.id}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              />
            </div>

            {/* Stylized Oversized Animated Quotation Accent */}
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-8 sm:right-12 text-indigo-100 select-none pointer-events-none font-serif text-[120px] sm:text-[150px] leading-none"
              aria-hidden="true"
            >
              “
            </motion.div>

            {/* Animated Slide Content with Spring Physics */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 space-y-8"
              >
                
                {/* Header Badge: Company Monogram Pill & Location Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {/* Clean Company Monogram Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xs">
                      {current.companyTag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {current.location}
                    </span>
                  </div>

                  {/* Slide Counter */}
                  <div className="text-xs font-mono font-bold tracking-widest text-indigo-400">
                    <span className="text-blue-700 font-bold">0{currentIndex + 1}</span> / 0{testimonials.length}
                  </div>
                </div>

                {/* Quotation Body: Refined Editorial Serif with Balanced Line-Height */}
                <blockquote className="text-xl sm:text-2xl lg:text-[26px] font-serif italic text-slate-900 leading-relaxed font-normal tracking-tight">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Alumnus Identity & Credentials (Text-First Layout) */}
                <div className="pt-6 border-t border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">
                        {current.name}
                      </h3>
                      
                      {/* Degree & Batch Pill Badge (e.g., "Class of 2018 • BCA") */}
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200 tracking-wide">
                        {current.degreeBadge}
                      </span>
                    </div>

                    {/* Clean Designation & Company Text */}
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {current.designation}, <span className="text-blue-700 font-semibold">{current.company}</span>
                    </p>
                  </div>

                  {/* Verified Alumni Stamp with Animated Pulse Radar Dot */}
                  <div className="inline-flex items-center gap-2 text-xs text-indigo-700 font-medium self-start sm:self-center bg-indigo-50/90 px-3.5 py-1.5 rounded-full border border-indigo-200/90 shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Verified Trident Alumnus</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Carousel Controls: Previous / Next & Active Page Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Active Indicator Dots with Smooth Spring Expansion */}
            <div className="flex items-center gap-2 order-2 sm:order-1" role="tablist" aria-label="Alumni testimonials">
              {testimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to testimonial ${idx + 1}: ${item.name}`}
                    className="relative py-1 cursor-pointer"
                  >
                    <motion.div
                      layout
                      className={`h-2 rounded-full transition-colors duration-300 ${
                        isActive 
                          ? "w-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xs" 
                          : "w-2 bg-indigo-200 hover:bg-indigo-400"
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Tactile Previous / Next Buttons with Spring Physics */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-indigo-200 hover:border-blue-600 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-indigo-200 hover:border-blue-600 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

          </div>

        </div>

        {/* RECRUITER / NETWORK TRUST BADGE BANNER UNDERNEATH */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-indigo-100 relative">
          
          <div className="text-center text-xs uppercase tracking-widest text-indigo-700 mb-6 font-semibold flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Proud Alumni Leading at Global Enterprise Employers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </div>

          {/* Marquee Track with Gradient Edge Fades */}
          <div className="relative overflow-hidden w-full py-2">
            
            {/* Left & Right Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FBFBFF] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FBFBFF] to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee with Interactive Hover */}
            <div className="flex animate-marquee gap-8 sm:gap-12 items-center shrink-0">
              {[...recruiterPartners, ...recruiterPartners].map((partner, index) => (
                <div
                  key={`${partner.label}-${index}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-indigo-100 text-slate-800 hover:border-blue-400 hover:text-blue-700 transition-all duration-300 cursor-default shrink-0 shadow-2xs group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                  <span className="font-serif font-bold text-sm sm:text-[15px] tracking-wide whitespace-nowrap">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
