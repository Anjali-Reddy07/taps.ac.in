"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface AlumnusTestimonial {
  id: string;
  name: string;
  initials: string;
  image: string;
  degreeBadge: string;
  designation: string;
  company: string;
  location: string;
  quote: string;
  companyTag: string;
  avatarGradient: string;
  accentColor: string;
  careerHighlight: string;
}

export default function TactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: AlumnusTestimonial[] = [
    {
      id: "jiban-samal",
      name: "Jiban Samal",
      initials: "JS",
      image: "/images/drive_second/Picture8.jpg",
      degreeBadge: "Class of 2012 • BCA",
      designation: "SAP Lead Consultant",
      company: "CGI Info Systems",
      location: "Bengaluru, India",
      companyTag: "CGI",
      avatarGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      accentColor: "text-blue-600",
      careerHighlight: "Enterprise SAP & Cloud Solutions",
      quote:
        "Nothing can suffice our golden days spent at Trident. Be it Ratha sir's serious practical classes or Manas sir's evergreen lectures, the faculties' inspiration and computing labs laid the foundation for the enterprise systems I architect today.",
    },
    {
      id: "smruti-mishra",
      name: "Smruti Ranjan Mishra",
      initials: "SM",
      image: "/images/drive_second/Picture6.jpg",
      degreeBadge: "Class of 2014 • BBA",
      designation: "Administrative Officer",
      company: "Revenue & Disaster Management Dept, Govt. of Odisha",
      location: "Bhubaneswar, Odisha",
      companyTag: "ODISHA GOVT",
      avatarGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      accentColor: "text-emerald-600",
      careerHighlight: "Civil Governance & Public Service Administration",
      quote:
        "For me, Trident is more than an institution; it has been my favorite station next to my home. All I can say about TRIDENT is just 'Outstanding' from all aspects — administrative mentorship, public service ethics, and leadership readiness under pressure.",
    },
    {
      id: "piali-mazumdar",
      name: "Piali Mazumdar",
      initials: "PM",
      image: "/images/drive_second/Picture4.jpg",
      degreeBadge: "Class of 2016 • BCA",
      designation: "Technical Specialist / Software Engineer",
      company: "Aricent / Capgemini",
      location: "Hyderabad, India",
      companyTag: "CAPGEMINI",
      avatarGradient: "from-purple-600 via-indigo-600 to-blue-600",
      accentColor: "text-purple-600",
      careerHighlight: "Enterprise Software Systems & Analytics",
      quote:
        "TAPS paved my entire career pathway in software systems and analytics. Extremely honored to be an alumna of an institution that gives each undergraduate individual faculty attention, high-performance computing access, and unwavering corporate confidence.",
    },
    {
      id: "dambarudhara-behera",
      name: "DambaruDhara Behera",
      initials: "DB",
      image: "/images/drive_second/Picture7.jpg",
      degreeBadge: "Class of 2011 • BCA",
      designation: "Principal Cloud Solutions Architect",
      company: "DXC Technology (CSC)",
      location: "Noida / NCR, India",
      companyTag: "DXC TECH",
      avatarGradient: "from-amber-600 via-orange-600 to-indigo-600",
      accentColor: "text-amber-600",
      careerHighlight: "High-Availability Cloud Systems Architecture",
      quote:
        "Life at Trident was transformative. The foundation in computational science, database architecture, and collaborative hackathons continues to serve me at every stage of designing high-availability enterprise cloud architectures.",
    },
    {
      id: "ananya-senapati",
      name: "Ananya Senapati",
      initials: "AS",
      image: "/images/drive_second/Picture3.jpg",
      degreeBadge: "Class of 2019 • BBA",
      designation: "Business & Marketing Strategist",
      company: "Deloitte",
      location: "Bengaluru, India",
      companyTag: "DELOITTE",
      avatarGradient: "from-pink-600 via-rose-600 to-purple-600",
      accentColor: "text-pink-600",
      careerHighlight: "Business Analytics & Corporate Strategy",
      quote:
        "The rigorous case study pedagogy and business innovation incubators at TAPS shaped my strategic intuition. We graduated not just with academic honors, but with an executive acumen and presentation polish ready for modern corporate engagements.",
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
    }, 7500);
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

  // Motion variants for content switching
  const contentVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 350, damping: 32 },
        opacity: { duration: 0.35, ease: "easeOut" },
        filter: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: "blur(6px)",
      transition: {
        x: { type: "spring", stiffness: 350, damping: 32 },
        opacity: { duration: 0.2, ease: "easeIn" },
        filter: { duration: 0.15 },
      },
    }),
  };

  const avatarVariants: Variants = {
    enter: { scale: 0.8, opacity: 0, rotate: -5 },
    center: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
    exit: { scale: 0.8, opacity: 0, rotate: 5, transition: { duration: 0.2 } },
  };

  return (
    <section 
      aria-label="Alumni Speak"
      className="relative py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
    >
      {/* Dynamic Animated Ambient Glow Canvas */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/15 to-purple-500/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-drift-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 right-10 w-[550px] h-[350px] bg-gradient-to-br from-purple-400/15 via-sky-400/10 to-indigo-400/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-drift-reverse"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header with Refined Typography Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50/90 border border-blue-200/90 px-3.5 py-1 rounded-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Alumni Speak
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Voices from the Trident Legacy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Our graduates lead enterprise software systems, corporate business management, and public administration across premier organizations.
          </p>
        </div>

        {/* ALUMNI HOMECOMING SPOTLIGHT BANNER */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden border border-indigo-150 shadow-xl bg-slate-950 group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/drive_second/alumni3.jpg"
              alt="Trident Annual Alumni Meet TRANSCEND"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1200px) 100vw, 1024px"
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
                  Trident Alumni Association • TRANSCEND Annual Homecoming
                </h3>
                <p className="text-xs text-slate-200 mt-1 font-light max-w-xl leading-relaxed">
                  Graduates leading computational transformations, enterprise management, and public administration reuniting at the Infocity campus.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-300 self-start sm:self-auto shrink-0 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                Alumni Network
              </span>
            </div>
          </div>
        </motion.div>

        {/* ELEGANT MASTERPIECE TESTIMONIAL SHOWCASE */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Glowing Halo */}
          <div 
            className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-r from-blue-500/20 via-indigo-500/25 to-purple-500/20 blur-2xl opacity-80 pointer-events-none -z-10 animate-pulseGlow" 
            aria-hidden="true" 
          />

          {/* Master Glassmorphic Card Container */}
          <div className="relative bg-white/95 backdrop-blur-xl border border-indigo-150/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(79,70,229,0.12)] overflow-hidden">
            
            {/* Top Auto-Play Progress Countdown Beam */}
            <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-indigo-50/80 overflow-hidden z-30" aria-hidden="true">
              <motion.div
                key={`${current.id}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{ duration: 7.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              />
            </div>

            {/* Split Layout: Left Profile Column + Right Testimonial Column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              
              {/* LEFT COLUMN: ALUMNUS IDENTITY & PROFILE HERO */}
              <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/80 via-slate-50/60 to-purple-50/50 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-indigo-100 flex flex-col justify-between relative overflow-hidden">
                
                {/* Subtle Geometric Background Dot Matrix */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.08)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top Header Strip: Company Monogram & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-900 text-white shadow-2xs">
                      {current.companyTag}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>Verified Trident Alumnus</span>
                    </div>
                  </div>

                  {/* Alumnus Avatar & Credentials */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      variants={avatarVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-4"
                    >
                      {/* Authentic Alumnus Photo from Drive with Verified Badge */}
                      <div className="relative inline-block">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xl shadow-indigo-500/20 ring-4 ring-white border border-indigo-150 bg-slate-900 group">
                          <Image
                            src={current.image}
                            alt={current.name}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            sizes="120px"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md border border-slate-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                          {current.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                          {current.designation}
                        </p>
                        <p className="text-xs text-slate-600 font-medium">
                          {current.company}
                        </p>
                      </div>

                      {/* Batch Degree Pill */}
                      <div className="pt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100/80 text-purple-800 border border-purple-200/80 shadow-2xs">
                          {current.degreeBadge}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Details: Location & Career Milestone */}
                <div className="relative z-10 pt-6 mt-6 border-t border-indigo-100/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{current.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-indigo-900/80 font-medium">
                    <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="truncate">{current.careerHighlight}</span>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: QUOTATION BODY & INTERACTIVE CONTROLS */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative bg-white">
                
                {/* Floating Stylized Oversized Quotation Mark */}
                <motion.div 
                  animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 right-8 sm:right-12 text-indigo-100/70 select-none pointer-events-none font-serif text-[130px] sm:text-[170px] leading-none"
                  aria-hidden="true"
                >
                  “
                </motion.div>

                {/* Top Meta Strip: Star Rating & Slide Index */}
                <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-semibold bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
                    <span className="tracking-widest">★★★★★</span>
                    <span className="text-slate-700 font-medium ml-1">TACT Benchmark Legacy</span>
                  </div>

                  <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
                    <span className="text-blue-700 font-bold">0{currentIndex + 1}</span> / 0{testimonials.length}
                  </div>
                </div>

                {/* Animated Quotation Body with Framer Motion */}
                <div className="relative z-10 my-auto py-4">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.blockquote
                      key={current.id}
                      custom={direction}
                      variants={contentVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="text-xl sm:text-2xl lg:text-[25px] font-serif italic text-slate-900 leading-relaxed font-normal tracking-tight"
                    >
                      &ldquo;{current.quote}&rdquo;
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                {/* Bottom Navigation & Controls */}
                <div className="relative z-10 pt-8 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
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
                            className={`h-2.5 rounded-full transition-colors duration-300 ${
                              isActive 
                                ? "w-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xs" 
                                : "w-2.5 bg-indigo-150 hover:bg-indigo-300"
                            }`}
                            transition={{ type: "spring", stiffness: 450, damping: 30 }}
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Previous / Next Tactile Arrow Buttons */}
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

            </div>

          </div>

          {/* INTERACTIVE ALUMNI AVATAR THUMBNAIL SELECTOR BAR */}
          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-md border-2 border-indigo-500 scale-105"
                      : "bg-white/70 hover:bg-white border border-indigo-100 hover:border-indigo-300 shadow-2xs hover:scale-102"
                  }`}
                >
                  <div className="relative w-8 h-8 rounded-xl overflow-hidden shrink-0 shadow-xs border border-indigo-200 bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                      sizes="32px"
                    />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {item.name.split(" ")[0]}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">
                      {item.companyTag}
                    </div>
                  </div>
                </button>
              );
            })}
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
