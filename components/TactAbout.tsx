"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SpeedometerCounter from "@/components/SpeedometerCounter";

interface TactAboutProps {
  onOpenQuery?: () => void;
}

// Interactive 3D Tilt Card with dynamic cursor-following specular glare
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = isHovered ? (0.5 - mousePos.y) * 6 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 6 : 0;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className={`relative ${className}`}
    >
      {children}
      {/* Dynamic Specular Glare */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-25 transition-opacity duration-300"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.45), transparent 45%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default function TactAbout({ onOpenQuery }: TactAboutProps) {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");
  const [activeFacility, setActiveFacility] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 4 Core Official Benchmark Accreditations (from taps.ac.in)
  const accreditations = [
    {
      metric: "#1",
      title: "Utkal Univ Affiliated",
      desc: "Rank 1 Private BBA and BCA College under Utkal University with Govt. of Odisha approval.",
      badge: "BENCHMARK",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      metric: "100%",
      title: "Doctoral & NET Faculty",
      desc: "All full-time regular faculties are M.Tech/NET qualified, all pursuing Ph.D programs.",
      badge: "FACULTY",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      metric: "128",
      title: "Approved Annual Intake",
      desc: "Maximum sanctioned intake of 128 each for BBA & BCA approved by Govt. of Odisha.",
      badge: "APPROVED",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      metric: "138+",
      title: "Tier-1 Corporate Recruiters",
      desc: "Active MoUs and recruitment linkages with TCS, Infosys, Wipro, Capgemini, Deloitte & CGI.",
      badge: "PLACEMENTS",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Official Vision Points (Verbatim from taps.ac.in/about-taps)
  const visionPoints = [
    {
      label: "Undisputed Leadership",
      text: "Undisputed leadership in sustained development of skilled human resources from Eastern India, implemented through excellence in educational practices.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: "Knowledge Strategy Application",
      text: "Providing cutting-edge knowledge strategy application to promote students' personal transformation and intellectual rigor.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      label: "Perspective & Confidence",
      text: "Induce within the students a confidence to see the world with a better angle of perspective and global outlook.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004.07 9m1.442 7.784A8.04 8.04 0 014 11" />
        </svg>
      ),
    },
  ];

  // Official Mission Points (Verbatim from taps.ac.in/about-taps)
  const missionPoints = [
    {
      label: "Institutions of Excellence",
      text: "Establish Institutions of excellence for the new generation of students and to instill in them the power of aggressive, positive thinking, insatiable desire for information, and out-of-the-box ideation.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      label: "Benchmark for India Inc.",
      text: "Inculcate in learners a professional maturity benchmarked against global practices to face the challenges of corporate India looking beyond tomorrow.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
        </svg>
      ),
    },
    {
      label: "Technological Research Beacon",
      text: "Grow as a premier Technological research institution to become a beacon of research, education, and personal development through global processes.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  // Official Values & Quality Points (Verbatim from taps.ac.in/about-taps)
  const valuesPoints = [
    {
      label: "Students: 1st, 2nd & 3rd Priority",
      text: "At Trident, we value students most — they are our first, second, and third priority through collaborative and innovative teaching processes.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      label: "ISO 9001:2008 Certified Quality",
      text: "Quality is the substantial aspect creating Trident's identity, certified by ISO 9001:2008 for innovative, effective institutional governance.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      label: "Teacher-Guardian Mentorship (TGM)",
      text: "Dedicated 1:15 mentorship pairing each student with faculty for continuous monitoring of attendance, academics, and competitive preparation.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  // 4 Academic Infrastructure Hubs for Kinetic Architectural Horizon
  const facilityHighlights = [
    {
      num: "01",
      badge: "01 • TECH LAB",
      title: "Computer Applications Lab",
      subtitle: "CLOUD & AI COMPUTING NODES",
      desc: "High-performance computing clusters, dedicated GPU rigs, and gigabit fiber connectivity supporting real-world software engineering sprints, enterprise database architectures, and algorithmic hackathons.",
      specs: [
        "NVIDIA GPU Rigs for Machine Learning & Data Science",
        "Dedicated Enterprise Oracle & Sybase RDBMS Instances",
        "24/7 Redundant Gigabit Fiber Backplane Network",
      ],
      location: "Block-1 Computing Cluster, Infocity",
      image: "/images/drive/computer-lab.jpg",
    },
    {
      num: "02",
      badge: "02 • ACADEMICS",
      title: "Smart Lecture Amphitheatres",
      subtitle: "INTERACTIVE COMPUTING THEATRES",
      desc: "Acoustically treated tiered lecture theatres engineered with high-definition digital projection systems, audio conferencing, and interactive instructor consoles for immersive CBCS case study seminars.",
      specs: [
        "Tiered Ergonomic Seating with Optimal Viewing Angles",
        "HD Digital Multimedia Presentation & Recording Hubs",
        "Integrated Wi-Fi 6 for Synchronous Digital Quizzes",
      ],
      location: "Academic Block Central Amphitheatre",
      image: "/images/drive_third/ClassRooms_Academic.JPG",
    },
    {
      num: "03",
      badge: "03 • RESEARCH",
      title: "Central Research Library",
      subtitle: "DIGITAL & PHYSICAL ARCHIVES",
      desc: "Over 70,000 reference volumes, international journal archives, and dedicated digital terminals granting 24/7 access to IEEE, ScienceDirect, and DELNET institutional repositories.",
      specs: [
        "70,000+ Print Volumes & National Journal Subscriptions",
        "DELNET & IEEE Electronic Digital Archive Terminals",
        "Air-Conditioned Collaborative Research & Study Pods",
      ],
      location: "Central Library Wing, Ground & 1st Floor",
      image: "/images/drive_third/Library_Library.JPG",
    },
    {
      num: "04",
      badge: "04 • ATHLETICS",
      title: "Athletic Meet Grounds & Arena",
      subtitle: "FULL-TRACK SPORTS COMPLEX",
      desc: "Expansive multi-discipline sports arena hosting annual athletic meets, inter-collegiate tournaments, standard sprint tracks, full-court basketball, volleyball, and wellness greens.",
      specs: [
        "Multi-Lane Sprint Tracks & Turf Cricket Pitch",
        "Floodlit Basketball & Badminton Tournament Courts",
        "Dedicated Recreational Greens & Annual Sports Pavilions",
      ],
      location: "Technoplex West Athletic Grounds",
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
    },
  ];

  // Auto-advance through facilities every 5.5 seconds unless paused by user interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveFacility((prev) => (prev + 1) % facilityHighlights.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, facilityHighlights.length]);

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* 1. SOFT PASTEL AMBIENT BACKGROUND CANVAS (Matched 100% with Figma/Dribbble UI Mockup) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        {/* Left Organic Pastel-Pink & Rose Aura Blob (Curved shape on left matching mockup) */}
        <div 
          className="absolute -top-12 -left-28 sm:-left-16 w-[560px] sm:w-[650px] h-[780px] pointer-events-none"
          style={{
            borderRadius: "44% 56% 72% 28% / 46% 42% 58% 54%",
            background: "radial-gradient(circle at 36% 46%, rgba(244, 114, 182, 0.50) 0%, rgba(249, 168, 212, 0.36) 38%, rgba(253, 232, 241, 0.18) 65%, transparent 80%)",
            filter: "blur(36px)",
          }}
        />

        {/* Top-Right Rich Indigo & Purple Aura (Behind & above campus photo) */}
        <div 
          className="absolute -top-20 right-[-30px] sm:right-[10px] w-[560px] sm:w-[640px] h-[540px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.46) 0%, rgba(167, 139, 250, 0.34) 38%, rgba(192, 132, 252, 0.18) 65%, transparent 82%)",
            filter: "blur(42px)",
          }}
        />

        {/* Center-Right Vibrant Cyan & Sky-Blue Aurora Glow (Behind campus photo & between columns) */}
        <div 
          className="absolute top-10 right-[-50px] sm:right-[30px] w-[620px] sm:w-[720px] h-[640px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at 55% 45%, rgba(34, 211, 238, 0.50) 0%, rgba(56, 189, 248, 0.40) 32%, rgba(45, 212, 191, 0.26) 58%, transparent 80%)",
            filter: "blur(44px)",
          }}
        />

        {/* Bottom-Right Aqua, Cyan & Lavender Aura Pool (Wraps around frosted vision card) */}
        <div 
          className="absolute top-[360px] right-[-50px] sm:right-[10px] w-[580px] sm:w-[680px] h-[580px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.44) 0%, rgba(56, 189, 248, 0.34) 36%, rgba(167, 139, 250, 0.26) 62%, transparent 82%)",
            filter: "blur(40px)",
          }}
        />

        {/* Far-Right Ambient Sky Wash */}
        <div 
          className="absolute top-0 right-0 w-[460px] h-[1000px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 100% 40%, rgba(56, 189, 248, 0.32) 0%, rgba(192, 132, 252, 0.20) 45%, transparent 75%)",
            filter: "blur(48px)",
          }}
        />

        {/* Delicate Ambient Sparkles from Mockup */}
        <div className="absolute top-20 right-14 text-sky-400 text-xl font-serif select-none pointer-events-none animate-pulse drop-shadow-sm">
          ✦
        </div>
        <div className="absolute top-[460px] right-8 text-purple-400 text-sm font-serif select-none pointer-events-none drop-shadow-sm">
          ✦
        </div>
        <div className="absolute top-[680px] right-1/4 text-cyan-400 text-base font-serif select-none pointer-events-none animate-pulse drop-shadow-sm">
          ✦
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* FLUID HERO SPREAD: Left Typography & 2x2 Grid | Right Campus Photo Card & Light Frosted Vision Console */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-24">
          
          {/* LEFT HERO SECTION: Bold Typography, Descriptive Narrative & 2x2 Accreditations Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6">
            
            {/* Header Block */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-white/80 border border-slate-200/80 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span>UNDER TACT TRUST • ESTD. 2000</span>
                </div>

                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-white/70 border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                  UTKAL UNIVERSITY AFFILIATED
                </span>
              </div>

              {/* Bold Typography Header */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight tracking-tight">
                Trident Academy of Professional Studies
              </h2>

              <p className="text-base sm:text-lg font-semibold text-indigo-900">
                Premier BCA &amp; BBA Institution • No. 1 Private College under Utkal University
              </p>

              {/* Descriptive Narrative */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Functioning under the aegis of the renowned <strong className="text-slate-950 font-semibold">Trident Group (TACT Trust)</strong>, TAPS is permanently recognized by the Higher Education Department, Govt. of Odisha, and approved by AICTE. The BBA and BCA courses are conducted in the new four-storeyed building at the <strong className="text-slate-950 font-semibold">11-acre Technoplex</strong> in Chandaka Industrial Estate, Infocity, Bhubaneswar.
              </p>

              {/* Elongated Infocity Cluster Pill Capsule */}
              <div className="pt-1">
                <div className="inline-flex flex-wrap items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-5 py-2 border border-slate-200/70 shadow-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    INFOCITY CLUSTER:
                  </span>
                  {["Infosys", "TCS", "Wipro", "MindTree"].map((co) => (
                    <span key={co} className="inline-flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>{co}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2x2 ACCREDITATIONS & STATISTICS GRID (With Delicate Cross Hairline Dividers) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-slate-200/80 py-2 my-2 border-t border-b border-slate-200/90">
              
              {/* Row 1, Col 1: Utkal Univ Affiliated */}
              <div className="sm:border-r sm:border-b border-slate-200/90 p-4 sm:pr-6 sm:pb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      Utkal Univ Affiliated
                    </h4>
                  </div>
                  <span className="text-2xl font-bold text-sky-600 font-serif">
                    <SpeedometerCounter value="#1" duration={1.6} delay={0.1} />
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Rank 1 Private BBA and BCA College under Utkal University with Govt. of Odisha approval.
                </p>
              </div>

              {/* Row 1, Col 2: Doctoral & NET Faculty */}
              <div className="sm:border-b border-slate-200/90 p-4 sm:pl-6 sm:pb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      Doctoral &amp; NET Faculty
                    </h4>
                  </div>
                  <span className="text-2xl font-bold text-sky-600 font-serif">
                    <SpeedometerCounter value="100%" duration={1.6} delay={0.2} />
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  All full-time regular faculties are M.Tech/NET qualified, all pursuing Ph.D programs.
                </p>
              </div>

              {/* Row 2, Col 1: Approved Annual Intake */}
              <div className="sm:border-r border-slate-200/90 p-4 sm:pr-6 sm:pt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      Approved Annual Intake
                    </h4>
                  </div>
                  <span className="text-2xl font-bold text-sky-600 font-serif">
                    <SpeedometerCounter value="128" duration={1.6} delay={0.3} />
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Maximum sanctioned intake of 128 each for BBA &amp; BCA approved by Govt. of Odisha.
                </p>
              </div>

              {/* Row 2, Col 2: Tier-1 Corporate Recruiters */}
              <div className="p-4 sm:pl-6 sm:pt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      Tier-1 Corporate Recruiters
                    </h4>
                  </div>
                  <span className="text-2xl font-bold text-sky-600 font-serif">
                    <SpeedometerCounter value="138+" duration={1.6} delay={0.4} />
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Active MoUs and recruitment linkages with TCS, Infosys, Wipro, Capgemini, Deloitte &amp; CGI.
                </p>
              </div>

            </div>

            {/* BOTTOM SECTION: Glimpse of Student Activities & Seminar Suites (Rounded Corner Photos) */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                CAMPUS LIFE &amp; ACADEMIC IMMERSION
              </span>
              <div className="grid grid-cols-2 gap-3.5">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-28 sm:h-32 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs group cursor-pointer"
                >
                  <Image
                    src="/images/drive_third/ClassRooms__MG_2339.JPG"
                    alt="Tiered Lecture Amphitheatres"
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                      Tiered Theatres
                    </span>
                    <span className="text-xs font-bold line-clamp-1 group-hover:text-cyan-200 transition-colors">
                      Smart Interactive Classrooms
                    </span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-28 sm:h-32 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs group cursor-pointer"
                >
                  <Image
                    src="/images/drive_third/MBA_seminar_1.jpeg"
                    alt="Corporate Business Seminars"
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                      Executive Seminars
                    </span>
                    <span className="text-xs font-bold line-clamp-1 group-hover:text-cyan-200 transition-colors">
                      Corporate Colloquium Suites
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-500/25 group"
                >
                  <span>Explore Institutional Legacy</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenQuery}
                className="px-6 py-3 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-indigo-950 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs"
              >
                Download Institutional Prospectus
              </motion.button>
            </div>

          </div>

          {/* RIGHT COLUMN: Campus Visual Card (Top) + White Frosted Glass Vision Console (Bottom) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* TOP RIGHT: Campus Photo Card (Matched with Mockup) */}
            <div className="relative h-72 sm:h-80 md:h-[340px] w-full rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/images/drive_new/1746352355680.jpg"
                alt="Trident Academy 11-Acre Technoplex Campus"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-800 ease-out"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Location Badges on Top */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-sm border border-white/60 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>11-ACRE TECHNOPLEX</span>
                </span>
                <span className="bg-blue-600/95 backdrop-blur-md text-white font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  INFOCITY, BHUBANESWAR
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-4 px-6 text-white z-10 flex flex-col justify-end">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-300 font-mono font-bold mb-1">
                  TRIDENT HERITAGE SINCE 1991
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                  State-of-the-Art Technoplex Campus
                </h3>
                <p className="text-xs text-slate-200 mt-1 font-light leading-relaxed line-clamp-2">
                  Four-storeyed academic facility on an 11-acre technoplex with ₹20 Crore project outlay, in close proximity to Infosys, TCS, and Wipro.
                </p>
              </div>
            </div>

            {/* SLEEK LIGHT GLASSMORPHIC FROSTED-CARD TABBED SECTION ("Our Institutional Vision") */}
            <div className="relative w-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/80 shadow-[0_20px_50px_rgba(37,99,235,0.08)] flex flex-col justify-between overflow-hidden">
              
              {/* Subtle Ambient Inner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-300/30 via-sky-200/20 to-purple-300/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-teal-200/30 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Pill-Shaped Switch Buttons */}
                <div 
                  role="tablist"
                  aria-label="Vision, Mission and Values Selector"
                  className="flex items-center gap-1.5 p-1 bg-slate-100/70 backdrop-blur-md rounded-full border border-slate-200/60 w-fit mb-5"
                >
                  {[
                    { id: "vision", label: "OUR VISION" },
                    { id: "mission", label: "OUR MISSION" },
                    { id: "values", label: "OUR VALUES" },
                  ].map((tab) => {
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className={`px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Tab Header with Glowing Icon Badge */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      {activeTab === "vision" && "Our Institutional Vision"}
                      {activeTab === "mission" && "Our Pedagogical Mission"}
                      {activeTab === "values" && "Our Core Quality Values"}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    {activeTab === "vision" && "Official vision benchmarked for Eastern India human resource development."}
                    {activeTab === "mission" && "Bridging academic rigor with high-impact corporate industry readiness."}
                    {activeTab === "values" && "Students are our first, second, and third priority through certified quality."}
                  </p>
                </div>

                {/* 3 Items: First Item in Glowing Teal/Mint Capsule, Others in Clean Frosted White */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    {(activeTab === "vision" ? visionPoints : activeTab === "mission" ? missionPoints : valuesPoints).map((point, i) => {
                      const isFirst = i === 0;
                      return (
                        <motion.div 
                          key={point.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.25 }}
                          whileHover={{ x: 3 }}
                          className={`p-4 rounded-2xl flex items-start gap-3.5 group cursor-default transition-all ${
                            isFirst 
                              ? "bg-gradient-to-r from-teal-50/90 via-emerald-50/70 to-cyan-50/80 border border-teal-200/60 shadow-xs" 
                              : "bg-white/70 border border-slate-100/90 hover:bg-white/95 shadow-2xs"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs ${
                            i === 0 
                              ? "bg-cyan-100 text-cyan-700" 
                              : i === 1 
                                ? "bg-purple-100 text-purple-700" 
                                : "bg-blue-100 text-blue-700"
                          }`}>
                            {point.icon}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                {point.label}
                              </h4>
                              <span className="text-[10px] font-mono text-slate-400 font-bold">
                                0{i + 1}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal mt-0.5">
                              {point.text}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Card Micro-Badge */}
              <div className="relative z-10 pt-4 mt-5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Trident Trust • Excellence Since 2000</span>
                </span>
                <span className="font-mono text-slate-600 font-semibold">Patia, Bhubaneswar</span>
              </div>

            </div>

          </div>

        </div>

        {/* SALIENT FEATURES & OFFICIAL MOTTO (CARDLESS ARCHITECTURAL SPREAD) */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 sm:mb-24 py-10 border-t border-b border-indigo-100/80 relative"
        >
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
              OFFICIAL BENCHMARKS
            </span>
            <h3 className="text-2xl sm:text-4xl font-light text-slate-950 mt-3 tracking-tight">
              Salient Features of TAPS
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Recognized under Utkal University for foundational rigor, doctoral faculty mentorship, and corporate excellence.
            </p>
          </div>

          {/* Open 3-Column Architectural Ledger (No Enclosed Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {[
              {
                num: "01",
                title: "No. 1 Private College",
                desc: "No. 1 Private BBA and BCA College under Utkal University.",
              },
              {
                num: "02",
                title: "Doctoral & NET Faculty",
                desc: "All of its fulltime regular faculties are M. Tech/NET qualified, all pursuing Ph.D programs.",
              },
              {
                num: "03",
                title: "Leadership & Innovation",
                desc: "Heavy focus on leadership modeling and Business innovation.",
              },
              {
                num: "04",
                title: "Peer-Support Soft Skills",
                desc: "Emphasis on peer-support and peer-analysis for acquisition of soft skills under expert guidance.",
              },
              {
                num: "05",
                title: "Corporate Internships",
                desc: "Excellent network with Companies for internship projects and placements.",
              },
              {
                num: "06",
                title: "Industry-Led Seminars",
                desc: "Regular Industry led Seminars and interaction with corporate Professionals.",
              },
            ].map((f, idx) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ x: 4 }}
                className="pl-5 py-2 border-l-2 border-indigo-200 hover:border-blue-600 transition-colors duration-300 group cursor-default"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {f.num}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {f.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Institutional Motto: Open Typographic Pull-Quote (No Enclosed Gradient Box) */}
          <div className="mt-14 pt-8 border-t border-indigo-100/70 text-center max-w-4xl mx-auto relative">
            <span className="text-4xl sm:text-5xl font-serif text-blue-500/20 block -mb-4 select-none">&ldquo;</span>
            <p className="italic text-sm sm:text-base font-light text-slate-700 leading-relaxed px-4">
              Destiny is not a matter of chance, It is a matter of choice; It is not a thing to be waited for, It is a thing to be achieved. Let us repeat endlessly to our self, &lsquo;We will achieve extraordinary success in life. It all depends on us.&rsquo;
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Official TAPS Motto • taps.ac.in</span>
            </div>
          </div>
        </motion.div>

        {/* 4. ENHANCED FACILITIES / CAMPUS HIGHLIGHTS GRID */}
        <div id="facilities" className="pt-12 sm:pt-16 border-t border-indigo-100 scroll-mt-24">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-blue-700 block mb-2 bg-blue-50 border border-blue-200 w-fit px-3 py-1 rounded-full shadow-2xs">
                INSIDE TAPS CAMPUS
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                World-Class Academic Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-normal leading-relaxed">
                Purpose-built computing centers, amphitheatre classrooms, and comprehensive research repositories at Infocity, Bhubaneswar.
              </p>
            </div>
            
            <Link
              href="/admission"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900 uppercase tracking-wider transition-colors group shrink-0 active:scale-95"
            >
              <span>Schedule Campus Tour</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Interactive Kinetic Selector Tabs (Typography-Driven, Animated Gliding Indicator) */}
          <div className="border-b border-zinc-200/90 mb-8 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 sm:gap-6 min-w-max pb-3">
              {facilityHighlights.map((facility, idx) => {
                const isActive = activeFacility === idx;
                return (
                  <button
                    key={facility.title}
                    onClick={() => {
                      setActiveFacility(idx);
                      setIsAutoPlaying(false);
                    }}
                    onMouseEnter={() => {
                      setActiveFacility(idx);
                      setIsAutoPlaying(false);
                    }}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className={`relative py-2.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 select-none ${
                      isActive ? "text-blue-700 font-bold" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <span className="font-mono text-xs opacity-60">0{idx + 1}</span>
                    <span>{facility.title}</span>

                    {/* Active Gliding Pill Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="facility-active-tab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 shadow-[0_1px_8px_rgba(37,99,235,0.4)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Master Stage (Cardless 2-Column Split: Editorial Narrative Left + High-Def Panoramic Viewport Right) */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Editorial Specs & Narrative (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={facilityHighlights[activeFacility].title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      {facilityHighlights[activeFacility].subtitle}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                    {facilityHighlights[activeFacility].title}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {facilityHighlights[activeFacility].desc}
                  </p>

                  {/* 3 Technical Specs in Clean Hairline Ledger */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    {facilityHighlights[activeFacility].specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Campus Location Tag & CTA */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                      📍 {facilityHighlights[activeFacility].location}
                    </span>

                    <button
                      onClick={onOpenQuery}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors group cursor-pointer"
                    >
                      <span>Inquire About Facility</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Panoramic Cinematic Viewport (7 cols) */}
            <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] md:h-[480px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={facilityHighlights[activeFacility].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm group bg-slate-950"
                >
                  <Image
                    src={facilityHighlights[activeFacility].image}
                    alt={facilityHighlights[activeFacility].title}
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Floating Live Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-slate-900 shadow-sm backdrop-blur-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{facilityHighlights[activeFacility].badge}</span>
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                        {facilityHighlights[activeFacility].subtitle}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                        {facilityHighlights[activeFacility].title}
                      </h4>
                    </div>

                    <div className="text-xs font-mono font-bold text-white/70">
                      0{activeFacility + 1} / 0{facilityHighlights.length}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Live Auto-Progress Line Indicator */}
              <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-zinc-200 rounded-full overflow-hidden">
                <motion.div
                  key={activeFacility}
                  initial={{ width: "0%" }}
                  animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                  transition={{ duration: 5.5, ease: "linear" }}
                  className="h-full bg-blue-600"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
