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
      aria-label="Alumni Testimonials"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-[#FAFCFF] via-[#F4F7FF] via-40% via-[#FAF5FF] to-[#FFF8F6] overflow-hidden"
    >
      {/* 1. Dynamic Ambient Pastel Glow Canvases */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-blue-200/30 to-purple-200/30 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[650px] h-[550px] bg-gradient-to-bl from-purple-200/40 via-pink-200/30 to-indigo-200/30 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-tl from-pink-200/35 via-rose-100/30 to-amber-100/25 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 2. Floating 3D and Pastel Vector Shapes (Squiggles, Spheres, Sparkles) */}
      {/* Left Wavy Squiggle Ribbon */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 sm:left-14 bottom-32 pointer-events-none select-none z-0 hidden md:block"
      >
        <svg className="w-24 h-16 drop-shadow-sm" viewBox="0 0 120 70" fill="none">
          <path
            d="M10 50 C 30 15, 55 65, 80 25 C 95 5, 105 35, 115 20"
            stroke="url(#squiggleLeft)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="squiggleLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Right Wavy Squiggle Ribbon */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-8 sm:right-16 top-28 pointer-events-none select-none z-0 hidden md:block"
      >
        <svg className="w-24 h-16 drop-shadow-sm" viewBox="0 0 120 70" fill="none">
          <path
            d="M10 25 C 25 55, 50 10, 75 45 C 90 65, 105 30, 115 45"
            stroke="url(#squiggleRight)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="squiggleRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="60%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Left Pastel Floating Spheres */}
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 sm:left-20 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-purple-300 via-indigo-300 to-purple-500 shadow-[0_8px_20px_rgba(168,85,247,0.32)] pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-20 sm:left-28 top-28 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 opacity-70 shadow-xs pointer-events-none hidden sm:block"
      />

      {/* Right Pastel Spheres & Sparkles */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-12 sm:right-20 top-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-amber-300 shadow-[0_10px_25px_rgba(244,114,182,0.35)] pointer-events-none hidden sm:block"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-16 sm:right-24 top-20 text-amber-300 pointer-events-none hidden sm:block"
      >
        <svg className="w-6 h-6 fill-amber-300 drop-shadow-xs" viewBox="0 0 24 24">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute right-20 sm:right-28 bottom-24 text-purple-400 pointer-events-none hidden sm:block"
      >
        <svg className="w-7 h-7 fill-purple-400/80 drop-shadow-xs" viewBox="0 0 24 24">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </motion.div>
      <div className="absolute right-36 top-36 w-3 h-3 rounded-full bg-pink-400/60 pointer-events-none hidden sm:block" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Showcase Layout (Matching exact ReactBits / Figma pastel design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12">
          
          {/* LEFT COLUMN: Frosted Glass Shell with 3D Lanyard & Identity (5 cols) */}
          <div className="lg:col-span-5 max-w-md mx-auto w-full">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={handleMouseLeave}
              className="[perspective:1200px]"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative rounded-[2.5rem] bg-white/85 backdrop-blur-2xl p-6 sm:p-7 border border-white shadow-[0_25px_70px_-15px_rgba(147,112,219,0.18)] flex flex-col justify-between overflow-hidden"
              >
                {/* 3D Interactive Lanyard Physical Hanging ID Badge (React Bits) */}
                <div className="relative w-full h-[280px] sm:h-[300px] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50/60 via-slate-50/40 to-white/80 border border-slate-150/70 shadow-inner group">
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

                  {/* Top Hanging Rivet */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-slate-800 rounded-b-md shadow-sm pointer-events-none z-10" />

                  {/* Subtle Interactive Instruction Pill */}
                  <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center pointer-events-none z-10">
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-white/95 backdrop-blur-md px-3.5 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
                      + Drag, Toss or Click to Flip 3D Badge
                    </span>
                  </div>
                </div>

                {/* Alumnus Identity & Verified Credentials */}
                <div className="pt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar Thumbnail */}
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-2 ring-indigo-200 border border-white shadow-sm bg-slate-900">
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        className="object-cover object-top"
                        sizes="48px"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 bg-blue-600 text-white rounded-full p-0.5 border border-white shadow-2xs">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug truncate">
                          {current.name}
                        </h3>
                        <svg className="w-5 h-5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                        {current.designation}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                        <span>{current.company}</span>
                        {current.companyTag === "DELOITTE" ? (
                          <span className="inline-flex items-center justify-center px-1.5 py-0.2 bg-black text-white text-[10px] font-bold rounded">
                            D.
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-1.5 py-0.2 bg-slate-800 text-white text-[10px] font-mono font-bold rounded">
                            {current.companyTag}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Batch Degree Pill */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      {current.degreeBadge}
                    </span>
                  </div>

                  {/* Divider & Metadata */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{current.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="truncate">{current.careerHighlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Typography, Rating & Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:py-6 lg:py-8 space-y-6 sm:space-y-8">
            
            {/* Top Row: Star Rating Badge */}
            <div className="flex items-center justify-between">
              <div className="hidden sm:block" />
              <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-semibold bg-amber-50/90 px-3.5 py-1 rounded-full border border-amber-200/70 shadow-2xs">
                <span className="tracking-widest">★★★★★</span>
                <span className="text-slate-800 font-medium ml-1">TRCT Benchmark Legacy</span>
              </div>
            </div>

            {/* Quotation Body */}
            <div className="space-y-2">
              <div className="text-indigo-200/90 font-serif text-7xl sm:text-8xl select-none leading-none -mb-6">
                “
              </div>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={current.id}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="font-serif italic text-2xl sm:text-3xl lg:text-[2.15rem] text-slate-800 leading-snug sm:leading-relaxed font-normal tracking-tight"
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Bottom Row: Progress Capsule & Arrows */}
            <div className="flex items-center justify-between gap-4 pt-4">
              {/* Capsule Progress Indicator */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Alumni testimonials">
                {testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to testimonial ${idx + 1}: ${item.name}`}
                      className="relative py-2 cursor-pointer"
                    >
                      <motion.div
                        layout
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-sm shadow-blue-500/30"
                            : "w-2.5 bg-indigo-200/70 hover:bg-indigo-300"
                        }`}
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Previous / Next Circular Buttons */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-sm hover:shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer"
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
                  className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-sm hover:shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
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
