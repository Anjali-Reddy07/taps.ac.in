"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import Lanyard from "./Lanyard";

interface AlumnusTestimonial {
  id: string;
  name: string;
  initials: string;
  image: string;
  degreeBadge: string;
  batchYear: string;
  designation: string;
  company: string;
  location: string;
  quote: string;
  companyTag: string;
  avatarGradient: string;
  accentColor: string;
  careerHighlight: string;
  companyLogoBg: string;
}

export default function TactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // 3D Perspective Tilt Motion Values
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 280, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 280, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsPaused(false);
  };

  const testimonials: AlumnusTestimonial[] = [
    {
      id: "jiban-samal",
      name: "Jiban Samal",
      initials: "JS",
      image: "/images/drive_second/Picture8.jpg",
      degreeBadge: "Class of 2012 • BCA",
      batchYear: "Class of '12",
      designation: "SAP Lead Consultant",
      company: "CGI Info Systems",
      location: "Bengaluru, India",
      companyTag: "CGI",
      avatarGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      accentColor: "text-blue-600",
      careerHighlight: "Enterprise SAP & Cloud Solutions",
      companyLogoBg: "bg-red-600 text-white",
      quote:
        "Nothing can suffice our golden days spent at Trident. Be it Ratha sir's serious practical classes or Manas sir's evergreen lectures, the faculties' inspiration and computing labs laid the foundation for the enterprise systems I architect today.",
    },
    {
      id: "smruti-mishra",
      name: "Smruti Ranjan Mishra",
      initials: "SM",
      image: "/images/drive_second/Picture6.jpg",
      degreeBadge: "Class of 2014 • BBA",
      batchYear: "Class of '14",
      designation: "Administrative Officer",
      company: "Revenue & Disaster Management Dept, Govt. of Odisha",
      location: "Bhubaneswar, Odisha",
      companyTag: "ODISHA GOVT",
      avatarGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      accentColor: "text-emerald-600",
      careerHighlight: "Civil Governance & Public Service Administration",
      companyLogoBg: "bg-emerald-700 text-white",
      quote:
        "For me, Trident is more than an institution; it has been my favorite station next to my home. All I can say about TRIDENT is just 'Outstanding' from all aspects — administrative mentorship, public service ethics, and leadership readiness under pressure.",
    },
    {
      id: "piali-mazumdar",
      name: "Piali Mazumdar",
      initials: "PM",
      image: "/images/drive_second/Picture4.jpg",
      degreeBadge: "Class of 2016 • BCA",
      batchYear: "Class of '16",
      designation: "Technical Specialist / Software Engineer",
      company: "Aricent / Capgemini",
      location: "Hyderabad, India",
      companyTag: "CAPGEMINI",
      avatarGradient: "from-purple-600 via-indigo-600 to-blue-600",
      accentColor: "text-purple-600",
      careerHighlight: "Enterprise Software Systems & Analytics",
      companyLogoBg: "bg-blue-700 text-white",
      quote:
        "TAPS paved my entire career pathway in software systems and analytics. Extremely honored to be an alumna of an institution that gives each undergraduate individual faculty attention, high-performance computing access, and unwavering corporate confidence.",
    },
    {
      id: "dambarudhara-behera",
      name: "DambaruDhara Behera",
      initials: "DB",
      image: "/images/drive_second/Picture7.jpg",
      degreeBadge: "Class of 2011 • BCA",
      batchYear: "Class of '11",
      designation: "Principal Cloud Solutions Architect",
      company: "DXC Technology (CSC)",
      location: "Noida / NCR, India",
      companyTag: "DXC TECH",
      avatarGradient: "from-amber-600 via-orange-600 to-indigo-600",
      accentColor: "text-amber-600",
      careerHighlight: "High-Availability Cloud Systems Architecture",
      companyLogoBg: "bg-purple-900 text-white",
      quote:
        "Life at Trident was transformative. The foundation in computational science, database architecture, and collaborative hackathons continues to serve me at every stage of designing high-availability enterprise cloud architectures.",
    },
    {
      id: "ananya-senapati",
      name: "Ananya Senapati",
      initials: "AS",
      image: "/images/drive_second/Picture3.jpg",
      degreeBadge: "Class of 2019 • BBA",
      batchYear: "Class of '19",
      designation: "Business & Marketing Strategist",
      company: "Deloitte",
      location: "Bengaluru, India",
      companyTag: "DELOITTE",
      avatarGradient: "from-pink-600 via-rose-600 to-purple-600",
      accentColor: "text-pink-600",
      careerHighlight: "Business Analytics & Corporate Strategy",
      companyLogoBg: "bg-black text-emerald-400",
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
      y: dir > 0 ? 25 : -25,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        y: { type: "spring", stiffness: 380, damping: 30 },
        opacity: { duration: 0.35, ease: "easeOut" },
        filter: { duration: 0.25 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -25 : 25,
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.98,
      transition: {
        y: { type: "spring", stiffness: 380, damping: 30 },
        opacity: { duration: 0.2, ease: "easeIn" },
        filter: { duration: 0.15 },
      },
    }),
  };

  const avatarVariants: Variants = {
    enter: { scale: 0.85, opacity: 0, rotate: -4 },
    center: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
    exit: { scale: 0.85, opacity: 0, rotate: 4, transition: { duration: 0.2 } },
  };

  return (
    <section 
      aria-label="Alumni Speak"
      className="relative py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
    >
      {/* Dynamic Animated Ambient Glow Canvas */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-blue-500/18 via-indigo-500/20 to-purple-500/18 blur-[140px] rounded-full pointer-events-none -z-10 animate-drift-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 right-10 w-[550px] h-[350px] bg-gradient-to-br from-cyan-400/15 via-indigo-400/15 to-purple-400/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-drift-reverse"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50/90 border border-blue-200/90 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>ALUMNI SPEAK • TACT BENCHMARK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Voices from the Trident Legacy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Our graduates lead enterprise software architectures, corporate business strategy, and public administration across premier global organizations.
          </p>
        </div>

        {/* ALUMNI HOMECOMING SPOTLIGHT BANNER */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-10 rounded-3xl overflow-hidden border border-indigo-150 shadow-xl bg-slate-950 group"
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

        {/* 3D TILT INTERACTIVE TESTIMONIAL SHOWCASE WITH DYNAMIC BORDER BEAM */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto [perspective:1200px]"
        >
          {/* Ambient Glowing Halo Behind */}
          <div 
            className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-r from-blue-500/25 via-indigo-500/30 to-purple-500/25 blur-3xl opacity-80 pointer-events-none -z-10 animate-pulseGlow" 
            aria-hidden="true" 
          />

          {/* 3D Tilt Card Shell */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-[0_30px_90px_-20px_rgba(79,70,229,0.18)]"
          >
            {/* CONTINUOUS CONIC BORDER BEAM (Animated Laser Tracing Around the Card) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_330deg,#8b5cf6_350deg,#06b6d4_360deg)] opacity-75 blur-[1px] pointer-events-none"
            />

            {/* Inner Master Glassmorphic Card Container */}
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/80">
              
              {/* Top Countdown Laser Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-indigo-50/80 overflow-hidden z-30" aria-hidden="true">
                <motion.div
                  key={`${current.id}-${isPaused}`}
                  initial={{ width: "0%" }}
                  animate={{ width: isPaused ? undefined : "100%" }}
                  transition={{ duration: 7.5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
              </div>

              {/* Split Layout: Left Profile Column + Right Testimonial Column */}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                
                {/* LEFT COLUMN: ALUMNUS IDENTITY & PROFILE HERO */}
                <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/90 via-slate-50/70 to-purple-50/60 p-7 sm:p-9 border-b lg:border-b-0 lg:border-r border-indigo-100/90 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle Geometric Background Dot Matrix */}
                  <div 
                    className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.09)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Top Header Strip: Company Monogram & Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-7">
                      <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs ${current.companyLogoBg}`}>
                        {current.companyTag}
                      </span>

                      {/* Live Audio Waveform Voice Indicator */}
                      <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-indigo-150 shadow-2xs">
                        <div className="flex items-end gap-[2px] h-3">
                          {[0.4, 0.9, 0.5, 1, 0.7].map((h, i) => (
                            <motion.span
                              key={i}
                              animate={{ scaleY: [h, 1.2, 0.3, h] }}
                              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                              className="w-[2px] h-3 bg-blue-600 rounded-full origin-bottom"
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-blue-700 ml-0.5">ALUMNI VOICE</span>
                      </div>
                    </div>

                    {/* Alumnus 3D Physics Lanyard Badge & Credentials */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.id}
                        variants={avatarVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="space-y-4"
                      >
                        {/* 3D Interactive Lanyard Physical Hanging ID Badge (React Bits) */}
                        <div className="relative w-full h-[270px] sm:h-[290px] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-100/50 via-slate-100/30 to-white/60 border border-indigo-150/80 shadow-inner group">
                          {/* 3D Lanyard Component */}
                          <Lanyard
                            frontImage={current.image}
                            backImage="/images/tact-logo.png"
                            cardColor="#ffffff"
                            orientation="portrait"
                            finish="holographic"
                            metal="silver"
                            strapColor="#1e3a8a"
                            size={0.72}
                            strapLength={0.42}
                            strapWidth={0.7}
                            interactive={true}
                            breeze={0.45}
                            gravity={1}
                            damping={0.5}
                            elasticity={0.55}
                            className="w-full h-full"
                          />

                          {/* Top Hanging Rivet Fixture (Aesthetic Anchor Accent) */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-slate-800 rounded-b-md shadow-sm pointer-events-none z-10" />

                          {/* Subtle Interactive Instruction Pill */}
                          <div className="absolute bottom-2 inset-x-0 flex items-center justify-center pointer-events-none z-10">
                            <span className="text-[10px] font-mono font-semibold text-slate-500 bg-white/90 backdrop-blur-md px-3 py-0.5 rounded-full border border-indigo-150 shadow-2xs">
                              ✦ Drag, Toss or Click to Flip 3D Badge
                            </span>
                          </div>
                        </div>

                        {/* Name & Title with Verified Thumbnail Avatar */}
                        <div className="flex items-start gap-3 pt-1">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-2 ring-indigo-200 border border-white shadow-sm bg-slate-900 mt-0.5">
                            <Image
                              src={current.image}
                              alt={current.name}
                              fill
                              className="object-cover object-top"
                              sizes="48px"
                            />
                            {/* Verified Badge Check */}
                            <div className="absolute -bottom-0.5 -right-0.5 bg-blue-600 text-white rounded-full p-0.5 border border-white">
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                              {current.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-0.5">
                              {current.designation}
                            </p>
                            <p className="text-xs text-slate-600 font-medium">
                              {current.company}
                            </p>
                          </div>
                        </div>

                        {/* Batch Degree Pill */}
                        <div className="pt-1">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100/90 text-purple-900 border border-purple-200/90 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                            {current.degreeBadge}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom Details: Location & Career Milestone */}
                  <div className="relative z-10 pt-5 mt-6 border-t border-indigo-100/90 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{current.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-indigo-950 font-medium">
                      <svg className="w-4 h-4 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="truncate">{current.careerHighlight}</span>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN: QUOTATION BODY & INTERACTIVE CONTROLS */}
                <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative bg-white">
                  
                  {/* Floating Stylized Oversized Quotation Mark with Floating Animation */}
                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 right-8 sm:right-12 text-indigo-100/60 select-none pointer-events-none font-serif text-[140px] sm:text-[180px] leading-none"
                    aria-hidden="true"
                  >
                    “
                  </motion.div>

                  {/* Top Meta Strip: Star Rating & Slide Index */}
                  <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
                    <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-semibold bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80 shadow-2xs">
                      <span className="tracking-widest">★★★★★</span>
                      <span className="text-slate-800 font-medium ml-1">TACT Benchmark Legacy</span>
                    </div>

                    <div className="text-xs font-mono font-bold tracking-widest text-slate-400">
                      <span className="text-blue-700 font-bold">0{currentIndex + 1}</span> / 0{testimonials.length}
                    </div>
                  </div>

                  {/* Animated Quotation Body with Framer Motion Kinetic Fade */}
                  <div className="relative z-10 my-auto py-3">
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
                  <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    
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
                              className={`h-2.5 rounded-full transition-all duration-300 ${
                                isActive 
                                  ? "w-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-sm shadow-blue-500/30" 
                                  : "w-2.5 bg-indigo-150 hover:bg-indigo-300"
                              }`}
                              transition={{ type: "spring", stiffness: 450, damping: 30 }}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* Previous / Next Tactile Arrow Buttons with Hover Elevation */}
                    <div className="flex items-center gap-3 order-1 sm:order-2">
                      <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="w-11 h-11 rounded-full border border-indigo-200 hover:border-blue-600 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="w-11 h-11 rounded-full border border-indigo-200 hover:border-blue-600 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
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
          </motion.div>

          {/* INTERACTIVE ALUMNI DOCK SELECTOR (Mac-Style Spring Elevation) */}
          <div className="mt-8 flex items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap">
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-lg border-2 border-indigo-500 scale-105 ring-2 ring-indigo-500/20"
                      : "bg-white/80 hover:bg-white border border-indigo-150 hover:border-indigo-300 shadow-2xs"
                  }`}
                >
                  {/* Active Backdrop Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeAlumniDock"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-purple-50/50 -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}

                  <div className="relative w-8 h-8 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-indigo-200 bg-slate-900">
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
                    <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                      <span>{item.companyTag}</span>
                      <span className="text-indigo-400">•</span>
                      <span className="text-slate-400">{item.batchYear}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* RECRUITER / NETWORK TRUST BADGE BANNER UNDERNEATH */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-indigo-100 relative">
          
          <div className="text-center text-xs uppercase tracking-widest text-indigo-700 mb-6 font-semibold flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Proud Alumni Leading at Global Enterprise Employers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
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
