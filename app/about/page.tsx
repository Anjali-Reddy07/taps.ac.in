"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimelineYear, setSelectedTimelineYear] = useState<string>("1991");

  const accreditations = [
    {
      title: "Utkal Univ Affiliated",
      desc: "Affiliated to Utkal University with approval of Govt. of Odisha since 2000.",
      badge: "ACADEMIC AFFILIATION",
      stat: "2000",
    },
    {
      title: "100% Ph.D / NET Faculty",
      desc: "Scholars from premier universities providing 1:15 mentorship.",
      badge: "FACULTY BENCHMARK",
      stat: "100%",
    },
    {
      title: "AICTE & Govt. Approved",
      desc: "Permanently recognized by Dept. of Higher Education, Govt. of Odisha.",
      badge: "STATUTORY RECOGNITION",
      stat: "AICTE",
    },
    {
      title: "Tier-1 Industry MoUs",
      desc: "Direct hiring linkages with CGI, TCS, Infosys, Wipro, and Capgemini.",
      badge: "CORPORATE TIE-UPS",
      stat: "138+",
    },
  ];

  const milestones = [
    {
      year: "1991",
      title: "Foundation of TSPL & Corporate Finishing School",
      tag: "ERA 01 • INCEPTION",
      desc: "Founded by visionary technocrats as Trident Softech Private Limited (TSPL), establishing Eastern India's first elite corporate software finishing school in Oracle, Sybase, and PowerBuilder.",
      highlight: "Over 500+ corporate engineers trained in enterprise RDBMS systems.",
    },
    {
      year: "1995",
      title: "Corporate Finishing School & Software Placements",
      tag: "ERA 02 • SPECIALIZED IT TRAINING",
      desc: "Through Trident's Advanced Computer Training (TACT), fresh engineering graduates were trained in enterprise packages including SYBASE, POWERBUILDER, ORACLE, DB-2, and JCL, securing coveted careers in competitive corporate markets.",
      highlight: "Pioneered specialized software education in Eastern India.",
    },
    {
      year: "2000",
      title: "Formal Launch of TAPS under TACT Trust",
      tag: "ERA 03 • TAPS INAUGURATION",
      desc: "Formal launch of Trident Academy of Professional Studies (TAPS) under TACT Trust, offering BCA and BBA affiliated to Utkal University with Govt. of Odisha approval.",
      highlight: "Permanent AICTE and Higher Education Department recognition.",
    },
    {
      year: "2005",
      title: "11-Acre Technoplex Campus at Infocity",
      tag: "ERA 04 • INFRASTRUCTURE SCALE",
      desc: "Expanded into an 11-acre flagship Technoplex in the heart of Infocity, Bhubaneswar, flanked by Infosys, TCS, and Wipro development centers.",
      highlight: "High-density cloud computing labs and central research library established.",
    },
    {
      year: "2026",
      title: "Sustained Undergraduate Leadership",
      tag: "ERA 05 • CONTEMPORARY BENCHMARK",
      desc: "Recognized as the benchmark undergraduate institute under Utkal University for BCA and BBA with sustained placement records and corporate tie-ups.",
      highlight: "Odisha's premier academic benchmark for BCA & BBA scholars.",
    },
  ];

  const pillars = [
    {
      id: "vision",
      number: "PILLAR 0 1",
      title: "Academic Vision",
      subtitle: "Excellence in Teaching, Research & Mentorship",
      gradient: "from-blue-600 via-indigo-600 to-cyan-500",
      accentBg: "bg-blue-50 text-blue-700 border-blue-200",
      desc: "To achieve and sustain a reputation for excellence in teaching, learning, applied research, and industry mentorship while upholding enduring human and ethical values.",
      points: [
        "Undisputed undergraduate institute of choice for Computer Applications & Business Administration.",
        "Holistic personality development and corporate finishing school culture integrated into CBCS.",
        "Recognized center of academic distinction and faculty scholarship across Eastern India.",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "mission",
      number: "PILLAR 0 2",
      title: "Pedagogical Mission",
      subtitle: "Bridging Academic Rigor with Industry Readiness",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      accentBg: "bg-purple-50 text-purple-700 border-purple-200",
      desc: "To provide the highest caliber of technical acumen, business ethics, and practical experience to undergraduate scholars through structured experiential learning.",
      points: [
        "Maintain premier computing virtualization clusters and continuous data science labs.",
        "Motivate students toward top-tier competitive campus selections from 1st Year onwards.",
        "Sustain vibrant industry-academia tie-ups with global consulting and Fortune 500 IT firms.",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "values",
      number: "PILLAR 0 3",
      title: "Core Institutional Values",
      subtitle: "Students are Our First, Second & Third Priority",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: "At Trident, collaborative learning, administrative integrity, and student career transformation govern every policy and pedagogical decision.",
      points: [
        "ISO 9001:2008 certified academic quality framework and transparent institutional governance.",
        "Equality of opportunity, comprehensive merit scholarships, and inclusive mentorship.",
        "Respect for research inquiry, intellectual curiosity, and lasting corporate ethics.",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const progressivePractices = [
    {
      title: "Teacher-Guardian Mentorship (TGM)",
      desc: "Every cohort of 15 students is assigned a designated faculty mentor who tracks continuous academic progress, attendance, psychological wellbeing, and semester preparation.",
      tag: "1:15 RATIO",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Aptitude & Soft-Skill Finishing School",
      desc: "Integrated training from 1st Year onwards in quantitative aptitude, logical reasoning, corporate business communication, and mock GD-PI simulations.",
      tag: "YEAR 1 ONWARDS",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Industry Colloquium & Masterclasses",
      desc: "Bi-weekly technical sessions, hackathons, and executive symposiums featuring seasoned industry leads from Microsoft, CGI, Amazon, and Big-4 consulting firms.",
      tag: "FORTNIGHTLY",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Continuous Evaluation & Feedback Loop",
      desc: "Weekly surprise tests, mid-term examinations, and open-house parent meetings ensure that students remain ahead of Utkal University's CBCS grading benchmarks.",
      tag: "CONTINUOUS",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        
        {/* HERO BANNER: DARK VARIANT WITH AMBIENT LIGHTING & STAGGER REVEAL */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Infrastructure Background Image from Drive */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_fourth/campus_exterior_1.jpg"
              alt="Trident Academy of Professional Studies Infocity Campus"
              fill
              priority
              className="object-cover object-center filter contrast-105 opacity-85 scale-100"
              sizes="100vw"
            />
            {/* Smooth one-sided scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/95 via-[#070D21]/60 via-35% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/50 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* High-Tech Animated Pill Badge */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900/90 border border-zinc-700/80 px-4 py-1.5 rounded-full shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span>TACT Trust • Estd. 2000 • Utkal University</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                Legacy of Academic Excellence Since 2000
              </h1>
              
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Operating under the aegis of the renowned <strong className="text-white font-medium">TACT Trust</strong>, 
                TAPS is a premier benchmark institution under Utkal University for BCA and BBA degrees. 
                Permanently recognized by the Higher Education Department, Govt. of Odisha, and AICTE approved.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                >
                  Admission Enquiry 2026 →
                </button>
                <Link
                  href="/programmes"
                  className="px-6 py-3 rounded-lg bg-zinc-900/90 text-zinc-200 border border-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Explore BCA &amp; BBA Degrees
                </Link>
              </div>

              {/* Coordinates & Charter Metadata Strip */}
              <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  CHARTER // AFF-UTKAL-BCA-BBA
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  COORD // 20.354° N • 85.817° E
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  CAMPUS // 11-ACRE INFOCITY TECHNOPLEX
                </span>
              </div>
            </motion.div>
          </section>
        </AnimatedBackground>

        {/* 2X2 ACCREDITATIONS & INSTITUTIONAL PROFILE: LIGHT VARIANT WITH STAGGER VIEWPORT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Story & 2x2 Accreditations */}
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                    STATUTORY COMPLIANCE // BPUT &amp; UTKAL
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight mt-1">
                    Shaping Technology &amp; Business Leaders at Infocity
                  </h2>
                </div>

                <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The Bachelor of Computer Applications (BCA) and Bachelor of Business Administration (BBA) 
                    programmes of TACT are conducted under <strong className="text-zinc-950 font-medium">Trident Academy of Professional Studies</strong> at 
                    our modern four-storeyed Technoplex at F2D, Chandaka Industrial Estate, Bhubaneswar.
                  </p>
                  <p>
                    Strategically located across an 11-acre campus in close proximity to global tech titans including 
                    Infosys, TCS, Wipro, and Mindtree, our students train in an ecosystem immersed in enterprise 
                    computing, financial analytics, and corporate management.
                  </p>
                </div>

                {/* 2x2 Accreditation Grid with Hover Spring Physics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {accreditations.map((item, idx) => (
                    <motion.div 
                      key={item.title}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-indigo-400 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/60">
                          {item.badge}
                        </span>
                        <span className="text-lg font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                          {item.stat}
                        </span>
                      </div>
                      <div className="font-semibold text-base text-zinc-950 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* 2 Authentic Academic Photos in Left Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group"
                  >
                    <Image
                      src="/images/drive_third/ClassRooms__MG_2339.JPG"
                      alt="Tiered Lecture Theatres"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Academic Theatres
                      </span>
                      <span className="text-xs font-semibold">
                        Faculty Mentored Pedagogy
                      </span>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group"
                  >
                    <Image
                      src="/images/drive_third/Library_Library.JPG"
                      alt="Central Research Library"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Knowledge Vault
                      </span>
                      <span className="text-xs font-semibold">
                        Central DELNET Library
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column: Campus Showcase Photo Card + Institutional Credo */}
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 flex flex-col gap-6"
              >
                {/* Real Campus Showcase Photo Card */}
                <div className="relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
                  <Image
                    src="/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg"
                    alt="Trident Technoplex Campus Infocity"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                      11-Acre Technoplex
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      Infocity IT Corridor, Patia
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      Flanked by Infosys, TCS &amp; Wipro Campus
                    </div>
                    <p className="text-xs text-slate-200 font-light mt-1">
                      Odisha's premier technology and undergraduate education hub.
                    </p>
                  </div>
                </div>

                {/* Institutional Charter Summary Box */}
                <div className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-150 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    ACADEMIC CHARTER COMMITMENT
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    Nurturing Next-Gen Technocrats &amp; Business Leaders
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    TAPS combines the rigorous curriculum of Utkal University's Choice-Based Credit System (CBCS) 
                    with real-world software development sprints, live corporate internships, and executive leadership coaching.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-indigo-100">
                    <div className="p-3 rounded-xl bg-white border border-indigo-100/80 shadow-2xs">
                      <div className="text-xl font-mono font-bold text-blue-700">26+ Yrs</div>
                      <div className="text-[11px] text-slate-500 font-medium">Educational Legacy</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-indigo-100/80 shadow-2xs">
                      <div className="text-xl font-mono font-bold text-purple-700">138+</div>
                      <div className="text-[11px] text-slate-500 font-medium">Visiting Recruiters</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </section>
        </AnimatedBackground>

        {/* 3 PILLARS OF DISTINCTION: VISION, MISSION & VALUES (HIGH IMPACT MODERN SHOWCASE) */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Ambient Decorative Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="about-vm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-vm-grid)" />
          </svg>

          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                Vision, Mission &amp; Values
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                What We Stand For, and How We Lead
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                The institutional pillars underpinning 26+ years of academic dominance and ethical leadership in Eastern India.
              </p>
            </div>

            {/* 3 Luxury Pillar Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="bg-white rounded-3xl border border-indigo-150/90 shadow-[0_16px_40px_rgba(79,70,229,0.06)] hover:shadow-[0_24px_50px_rgba(79,70,229,0.12)] hover:border-indigo-300 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between relative group overflow-hidden"
                >
                  {/* Top Glowing Gradient Beam Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`} />

                  <div>
                    {/* Header Strip with Pillar Pill */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${pillar.accentBg}`}>
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                        {pillar.icon}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 pt-4 border-t border-slate-100">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>TRIDENT CHARTER</span>
                    <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">Core Commitment →</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>
        </AnimatedBackground>

        {/* PROGRESSIVE ACADEMIC PRACTICES: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Pedagogical Framework
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Progressive Academic Practices
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Leading universities globally emphasize holistic student development. 
                At TAPS, structured mentorship and corporate finishing school culture are built into the daily curriculum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {progressivePractices.map((practice, idx) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                        {practice.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {practice.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-950 mb-2 group-hover:text-blue-700 transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {practice.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* CAMPUS ENVIRONMENT & ACADEMIC CULTURE VISUAL SHOWCASE */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Campus Atmosphere
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Where Academic Rigor Meets Corporate Readiness
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Take a glimpse into our modern amphitheatre lecture halls, central reference libraries, and executive seminar environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Tiered Lecture Theatres",
                  subtitle: "Faculty-Mentored Pedagogy",
                  desc: "Acoustically engineered amphitheatre rooms hosting interactive BCA & BBA lectures and code reviews.",
                  img: "/images/drive_third/ClassRooms__MG_2339.JPG",
                  tag: "Lecture Theatres",
                },
                {
                  title: "Central Research Library",
                  subtitle: "50,000+ Volume Archives",
                  desc: "Spacious reading halls with full DELNET access, research journals, and air-conditioned individual study pods.",
                  img: "/images/drive_third/Library_Library.JPG",
                  tag: "Knowledge Hub",
                },
                {
                  title: "Executive Seminar Halls",
                  subtitle: "Industry Colloquium & Case Studies",
                  desc: "Smart presentation suites where corporate leaders, visiting faculty, and scholars debate real-world market cases.",
                  img: "/images/drive_third/MBA_seminar_1.jpeg",
                  tag: "Seminar Suites",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-2xs hover:border-zinc-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-black backdrop-blur-xs shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* EYE-CATCHING STICKY HISTORICAL TIMELINE: DARK VARIANT (INSPIRED BY TACT ARCHIVE) */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Dark Scrim */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/1746352355680.jpg"
              alt="Trident Campus Heritage"
              fill
              className="object-cover object-center filter contrast-105 opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070D21] via-[#051c33]/95 to-[#070D21]" />
            
            {/* Ambient Radial Mesh Lighting */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px]" />
            <div className="absolute top-2/3 -right-32 w-[480px] h-[480px] bg-sky-500/10 rounded-full blur-[130px]" />
            <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
          </div>

          <section id="history" className="relative z-10 py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Sticky Left Sidebar: Section Intro & Interactive Year Selector */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-amber-400 mb-4 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/25 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    ESTABLISHED: 1991 • TRIDENT ARCHIVE
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                    From a Pioneering Finishing School to Eastern India's Benchmark
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-300 mt-4 font-light leading-relaxed">
                    Tracing over three decades of academic dominance, technological breakthroughs, and sustained corporate campus placements under the TACT Trust.
                  </p>
                </div>

                {/* Interactive Year Quick-Jumper Pill Buttons */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
                    Interactive Era Navigator:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {milestones.map((m) => {
                      const isSelected = selectedTimelineYear === m.year;
                      return (
                        <button
                          key={m.year}
                          onClick={() => {
                            setSelectedTimelineYear(m.year);
                            const el = document.getElementById(`milestone-${m.year}`);
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-amber-400 text-slate-950 shadow-md scale-105"
                              : "bg-zinc-900/90 text-zinc-300 border border-zinc-700 hover:border-amber-400 hover:text-white"
                          }`}
                        >
                          {m.year}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Legacy Photo Card */}
                <div className="relative h-56 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl group">
                  <Image
                    src="/images/drive_second/alumni3.jpg"
                    alt="Annual Alumni Homecoming TRANSCEND"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600 text-white">
                      ANNUAL ALUMNI MEET • TRANSCEND
                    </span>
                    <h4 className="text-base font-bold mt-1 text-white">
                      Alumni Brand Ambassadors of TAPS
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">
                      Graduates leading successful careers across premier IT corporations, banking, and public administration.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Animated Vertical Timeline Spine & Milestone Cards */}
              <div className="lg:col-span-7 relative pl-6 sm:pl-10 space-y-10">
                
                {/* Vertical Glowing Spine Light Beam */}
                <div 
                  className="absolute left-2 sm:left-3.5 top-3 bottom-6 w-[2.5px] bg-gradient-to-b from-amber-400 via-sky-400 via-indigo-500 to-purple-500 opacity-60 pointer-events-none" 
                  aria-hidden="true"
                />

                {milestones.map((m, idx) => {
                  const isSelected = selectedTimelineYear === m.year;
                  return (
                    <motion.div
                      id={`milestone-${m.year}`}
                      key={m.year}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onMouseEnter={() => setSelectedTimelineYear(m.year)}
                      className="relative group"
                    >
                      {/* Pulsing Glowing Timeline Node */}
                      <div className="absolute -left-[30px] sm:-left-[46px] top-4 z-10 flex items-center justify-center">
                        <span className="relative flex h-5 w-5">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isSelected ? "bg-amber-400" : "bg-sky-400"
                          }`} />
                          <span className={`relative inline-flex rounded-full h-5 w-5 border-2 border-white shadow-sm transition-colors duration-300 ${
                            isSelected ? "bg-amber-400" : "bg-zinc-900 group-hover:bg-amber-400"
                          }`} />
                        </span>
                      </div>

                      {/* Milestone Glassmorphic Card */}
                      <div className={`p-6 sm:p-8 rounded-3xl backdrop-blur-md transition-all duration-300 relative border ${
                        isSelected
                          ? "bg-zinc-900/90 border-amber-400/60 shadow-[0_12px_40px_rgba(251,191,36,0.1)] scale-[1.01]"
                          : "bg-zinc-950/70 border-zinc-800/90 hover:border-zinc-600 hover:bg-zinc-900/80 shadow-md"
                      }`}>
                        
                        {/* Top Year & Tag Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                            {m.year}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
                            {m.tag}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                          {m.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-4">
                          {m.desc}
                        </p>

                        {/* Key Achievement Pill */}
                        <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-cyan-300">
                          <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{m.highlight}</span>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}

              </div>

            </div>

          </section>
        </AnimatedBackground>

      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
