"use client";

import { useState } from "react";
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

  // 4 Facilities
  const facilityHighlights = [
    {
      badge: "TECH LAB 01",
      title: "Computer Applications Lab",
      subtitle: "Cloud & AI Computing Nodes",
      spec: "High-performance virtualization clusters, dedicated GPU rigs & 24/7 gigabit fiber network.",
      image: "/images/drive/computer-lab.jpg",
    },
    {
      badge: "ACADEMICS 02",
      title: "Smart Lecture Amphitheatres",
      subtitle: "Interactive Computing Theatres",
      spec: "Multimedia smart theatres, acoustic lecture halls & interactive presentation consoles.",
      image: "/images/drive_third/ClassRooms_Academic.JPG",
    },
    {
      badge: "RESEARCH 03",
      title: "Central Research Library",
      subtitle: "Digital & Physical Archives",
      spec: "Over 70,000 reference volumes, IEEE / ScienceDirect subscriptions & air-conditioned study pods.",
      image: "/images/drive_third/Library_Library.JPG",
    },
    {
      badge: "ATHLETICS 04",
      title: "Athletic Meet Grounds & Arena",
      subtitle: "Full-Track Sports Complex",
      spec: "Multi-sport athletic grounds, sprint tracks, basketball courts & recreational greens.",
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* ASYMMETRIC BENTO GRID: Story & 2x2 Accreditations (Left) | Campus Showcase + Vision/Mission/Values (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20 sm:mb-24">
          
          {/* LEFT BENTO CELL: Institutional Overview & 2x2 Feature Chips with 3D Tilt */}
          <TiltCard className="lg:col-span-7 flex">
            <motion.div 
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full flex flex-col justify-between p-7 sm:p-9 lg:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-indigo-150 shadow-[0_20px_50px_rgba(79,70,229,0.08)] hover:shadow-[0_25px_60px_rgba(79,70,229,0.14)] transition-all duration-500 overflow-hidden group/bento"
            >
              {/* Animated atmospheric breathing gradient orb in corner */}
              <motion.div
                animate={{
                  scale: [1, 1.18, 1],
                  opacity: [0.35, 0.6, 0.35],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -right-12 w-96 h-96 bg-gradient-to-bl from-blue-200/50 via-indigo-100/40 to-transparent rounded-full blur-3xl pointer-events-none"
              />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                
                <div className="space-y-4">
                  {/* Monospace Eyebrow Badge with Pulse Glow */}
                  <div className="flex flex-wrap items-center gap-2">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50/90 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span>UNDER TACT TRUST • ESTD. 2000</span>
                    </motion.div>

                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      Utkal University Affiliated
                    </span>
                  </div>

                  {/* Editorial Heading */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 leading-tight tracking-tight">
                    Trident Academy of Professional Studies
                  </h2>

                  <p className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800">
                    Premier BCA &amp; BBA Institution • No. 1 Private College under Utkal University
                  </p>

                  {/* Introductory Narrative (Matched 100% with taps.ac.in) */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    Functioning under the aegis of the renowned <strong className="text-slate-950 font-semibold">Trident Group (TACT Trust)</strong>, TAPS is permanently recognized by the Higher Education Department, Govt. of Odisha, and approved by AICTE. The BBA and BCA courses are conducted in the new four-storeyed building at the <strong className="text-slate-950 font-semibold">11-acre Technoplex</strong> in Chandaka Industrial Estate, Infocity, Bhubaneswar.
                  </p>

                  {/* Corporate Neighbors Strip from taps.ac.in */}
                  <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-wrap items-center gap-2 text-xs text-slate-700">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-700 font-bold shrink-0">
                      INFOCITY CLUSTER:
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 font-medium text-slate-800 shadow-2xs">
                      🏢 Infosys
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 font-medium text-slate-800 shadow-2xs">
                      🏢 TCS
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 font-medium text-slate-800 shadow-2xs">
                      🏢 Wipro
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 font-medium text-slate-800 shadow-2xs">
                      🏢 MindTree
                    </span>
                  </div>
                </div>

                {/* 2x2 SLEEK ACCREDITATION PILLS / FEATURE CHIPS WITH ANIMATED SPEEDOMETER COUNTERS & HOVER LIFT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {accreditations.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.15 + idx * 0.08 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.985 }}
                      className="p-4 rounded-2xl bg-white border border-indigo-100 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 shadow-xs group cursor-default relative overflow-hidden"
                    >
                      {/* Subtle Top Gradient Shimmer on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <motion.span 
                            whileHover={{ rotate: 8, scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="w-7 h-7 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs"
                          >
                            {item.icon}
                          </motion.span>
                          <h3 className="text-sm font-bold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        
                        {/* Bold Speedometer Motion-Blur Counter Badge */}
                        <span className="text-lg sm:text-xl font-extrabold text-blue-700 font-serif leading-none tracking-tight shrink-0 bg-blue-50/80 border border-blue-200/60 px-2.5 py-1 rounded-lg shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <SpeedometerCounter value={item.metric} duration={1.6} delay={idx * 0.12} />
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 pl-9 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* 2 Authentic Academic Atmosphere Previews with Smooth Zoom & Sheen */}
                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-indigo-100 shadow-xs group cursor-pointer"
                  >
                    <Image
                      src="/images/drive_third/ClassRooms__MG_2339.JPG"
                      alt="Tiered Lecture Amphitheatres"
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2 text-white">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Pedagogy
                      </span>
                      <span className="text-[11px] font-bold line-clamp-1 group-hover:text-cyan-200 transition-colors">
                        Tiered Smart Amphitheatres
                      </span>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-indigo-100 shadow-xs group cursor-pointer"
                  >
                    <Image
                      src="/images/drive_third/MBA_seminar_1.jpeg"
                      alt="Corporate Business Seminars"
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2 text-white">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Case Studies
                      </span>
                      <span className="text-[11px] font-bold line-clamp-1 group-hover:text-cyan-200 transition-colors">
                        Executive Seminar Suites
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Action Bar with Arrow Motion */}
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
                    className="px-6 py-3 rounded-full bg-white border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-indigo-950 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    Download Institutional Prospectus
                  </motion.button>
                </div>
              </div>

            </motion.div>
          </TiltCard>

          {/* RIGHT COLUMN: Campus Architectural Showcase (Top) + Interactive Executive Card (Bottom) with 3D Tilt */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* 1. DEDICATED CAMPUS ARCHITECTURE SHOWCASE CARD WITH HOVER ZOOM & LIVE BEACON */}
            <TiltCard>
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="group relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden border border-indigo-150 shadow-xl bg-slate-950"
              >
                <Image
                  src="/images/drive_fourth/campus_exterior_1.jpg"
                  alt="Trident Academy 11-Acre Technoplex Campus"
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-800 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                
                {/* Refined Ambient Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-transparent pointer-events-none" />

                {/* Top Floating Badge with Pulsing Live Beacon */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-white/40 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>11-Acre Technoplex</span>
                  </span>
                  <span className="bg-blue-600/90 backdrop-blur-md text-white font-medium text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Infocity, Bhubaneswar
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-white flex flex-col justify-end">
                  <div className="text-[11px] uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                    Trident Heritage Since 1991
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                    State-of-the-Art Technoplex Campus
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 font-light leading-relaxed line-clamp-2">
                    Four-storeyed academic facility on an 11-acre technoplex with ₹20 Crore project outlay, in close proximity to Infosys, TCS, and Wipro.
                  </p>
                </div>
              </motion.div>
            </TiltCard>

            {/* 2. INTERACTIVE EXECUTIVE CARD: Strategic Vision, Mission & Values with 3-Way Spring Switcher */}
            <TiltCard className="flex-1 flex">
              <div className="relative w-full bg-[#0B132E] text-white rounded-3xl p-6 sm:p-7 border border-indigo-900/60 shadow-xl flex flex-col justify-between overflow-hidden">
                
                {/* Ambient Inner Glow with Subtle Floating Animation */}
                <motion.div 
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.38, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-3xl pointer-events-none"
                />

                <div className="relative z-10">
                  {/* 3-Way Active Pill Toggle with Framer Motion Spring Indicator */}
                  <div 
                    role="tablist"
                    aria-label="Vision, Mission and Values Selector"
                    className="relative inline-flex p-1 rounded-xl bg-[#070D21] border border-indigo-900/80 mb-5"
                  >
                    <button
                      role="tab"
                      aria-selected={activeTab === "vision"}
                      onClick={() => setActiveTab("vision")}
                      className="relative z-10 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer active:scale-95"
                    >
                      {activeTab === "vision" && (
                        <motion.span
                          layoutId="activeVisionMissionTab"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/35"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className={`relative z-10 ${activeTab === "vision" ? "text-white font-bold" : "text-indigo-200/75 hover:text-white"}`}>
                        Our Vision
                      </span>
                    </button>

                    <button
                      role="tab"
                      aria-selected={activeTab === "mission"}
                      onClick={() => setActiveTab("mission")}
                      className="relative z-10 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer active:scale-95"
                    >
                      {activeTab === "mission" && (
                        <motion.span
                          layoutId="activeVisionMissionTab"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/35"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className={`relative z-10 ${activeTab === "mission" ? "text-white font-bold" : "text-indigo-200/75 hover:text-white"}`}>
                        Our Mission
                      </span>
                    </button>

                    <button
                      role="tab"
                      aria-selected={activeTab === "values"}
                      onClick={() => setActiveTab("values")}
                      className="relative z-10 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer active:scale-95"
                    >
                      {activeTab === "values" && (
                        <motion.span
                          layoutId="activeVisionMissionTab"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/35"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className={`relative z-10 ${activeTab === "values" ? "text-white font-bold" : "text-indigo-200/75 hover:text-white"}`}>
                        Our Values
                      </span>
                    </button>
                  </div>

                  {/* Tab Header Banner */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                      <span>
                        {activeTab === "vision" && "Our Institutional Vision"}
                        {activeTab === "mission" && "Our Core Mission"}
                        {activeTab === "values" && "Our Values & Quality"}
                      </span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                      </span>
                    </h3>
                    <p className="text-xs text-indigo-200/80 mt-0.5 font-light">
                      {activeTab === "vision" && "Official vision benchmarked for Eastern India human resource development."}
                      {activeTab === "mission" && "Institutions of excellence instilling out-of-the-box ideation and professional maturity."}
                      {activeTab === "values" && "Students are our 1st, 2nd & 3rd priority — ISO 9001:2008 certified quality."}
                    </p>
                  </div>

                  {/* Structured Value Points with Smooth AnimatePresence Transition & Stagger */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="space-y-3"
                    >
                      {(activeTab === "vision" ? visionPoints : activeTab === "mission" ? missionPoints : valuesPoints).map((point, i) => (
                        <motion.div 
                          key={point.label}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07, duration: 0.3 }}
                          whileHover={{ x: 4, transition: { duration: 0.15 } }}
                          className="p-3.5 rounded-2xl bg-[#0E183E]/90 border border-indigo-900/60 hover:border-indigo-400/70 hover:bg-[#121E4C] transition-colors group cursor-default"
                        >
                          <div className="flex items-start gap-3">
                            <motion.span 
                              whileHover={{ scale: 1.1, rotate: 6 }}
                              className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-600/35 to-purple-600/35 border border-indigo-500/40 flex items-center justify-center shrink-0 text-blue-200 mt-0.5 group-hover:text-cyan-300 transition-colors"
                            >
                              {point.icon}
                            </motion.span>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                                  {point.label}
                                </h4>
                                <span className="text-[10px] font-mono text-indigo-300 group-hover:text-cyan-300 transition-colors">
                                  0{i + 1}
                                </span>
                              </div>
                              <p className="text-[11px] sm:text-xs text-indigo-100/85 mt-0.5 leading-relaxed font-normal">
                                {point.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Card Micro-Badge */}
                <div className="relative z-10 pt-4 mt-4 border-t border-indigo-900/70 flex items-center justify-between text-[11px] text-indigo-300/80">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Trident Trust • Excellence Since 2000</span>
                  </span>
                  <span className="font-mono text-indigo-200">Patia, Bhubaneswar</span>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

        {/* SALIENT FEATURES & OFFICIAL MOTTO BANNER WITH STAGGER REVEAL */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 sm:mb-24 p-8 sm:p-10 rounded-3xl bg-white border border-indigo-100 shadow-[0_16px_40px_rgba(79,70,229,0.06)] relative overflow-hidden"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
              OFFICIAL BENCHMARKS
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-slate-950 mt-3 tracking-tight">
              Salient Features of TAPS
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Recognized under Utkal University for foundational rigor, doctoral faculty mentorship, and corporate excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all group cursor-default"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {f.num}
                  </span>
                  <h4 className="text-sm font-bold text-slate-950 group-hover:text-blue-700 transition-colors">
                    {f.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Institutional Motto Card with Subtle Shimmer */}
          <motion.div 
            whileHover={{ scale: 1.005 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#070D21] via-blue-950 to-indigo-950 text-white text-center shadow-lg relative overflow-hidden"
          >
            <p className="italic text-xs sm:text-sm font-light text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              &ldquo;Destiny is not a matter of chance, It is a matter of choice; It is not a thing to be waited for, It is a thing to be achieved. Let us repeat endlessly to our self, &lsquo;We will achieve extraordinary success in life. It all depends on us.&rsquo;&rdquo;
            </p>
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold mt-2.5 block">
              — Official TAPS Motto • taps.ac.in
            </span>
          </motion.div>
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

          {/* 4-Column Sleek Facility Image Cards with Aspect-Ratio, Smooth Scale-Up & Refined Bottom Scrim */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityHighlights.map((facility, idx) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-950 shadow-md hover:shadow-2xl hover:border-black transition-all duration-500"
              >
                {/* Background Image with Smooth Scale-up on Hover */}
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter grayscale-[15%] group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle Hover Darkening Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500 pointer-events-none" />

                {/* Top Ambient Scrim for Floating Badge */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/95 backdrop-blur-md text-zinc-950 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-white/20">
                    {facility.badge}
                  </span>
                </div>

                {/* Refined Gradient Bottom Scrim for High-Contrast Legible Captions */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/70 via-50% to-transparent pointer-events-none" />

                {/* Caption Content Directly on the Bottom Scrim */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end text-white">
                  <div className="text-[11px] uppercase tracking-widest text-zinc-300 font-semibold mb-1">
                    {facility.subtitle}
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                    {facility.title}
                  </h4>

                  <p className="text-xs text-zinc-300 mt-1.5 font-light leading-relaxed line-clamp-2">
                    {facility.spec}
                  </p>

                  {/* Micro-interaction arrow reveal */}
                  <div className="pt-3 flex items-center justify-between border-t border-white/15 mt-3">
                    <span className="text-[11px] font-semibold text-zinc-200 uppercase tracking-wider">
                      Infocity Campus
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shrink-0 active:scale-95">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
