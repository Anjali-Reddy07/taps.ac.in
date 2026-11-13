"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import SpeedometerCounter from "@/components/SpeedometerCounter";
import { Hero7, Hero7Slide } from "@/components/blocks/hero-7";
import StructuredTrainingConsole, { TrainingPhase } from "@/components/StructuredTrainingConsole";

export default function PlacementsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "138+", label: "Recruiters (2026)", sub: "Placements 2026" },
    { value: "260", label: "Recruiters (2025)", sub: "Placements 2025" },
    { value: "112", label: "Recruiters (2024)", sub: "Placements 2024" },
    { value: "102", label: "Recruiters (2023)", sub: "Placements 2023" },
  ];

  const yearWiseRecruiters = [
    { year: "2026", count: "138+ Recruiters" },
    { year: "2025", count: "260 Recruiters" },
    { year: "2024", count: "112 Recruiters" },
    { year: "2023", count: "102 Recruiters" },
    { year: "2022", count: "102 Recruiters" },
    { year: "2021", count: "91 Recruiters" },
    { year: "2020", count: "70 Recruiters" },
    { year: "2019", count: "56 Recruiters" },
  ];

  const placementHero7Slides: Hero7Slide[] = [
    {
      id: "aptitude-halls",
      title: "Aptitude Examination Halls",
      desc: "Spacious test centers equipped with 600+ terminals for concurrent online screening exams.",
      img: "/images/drive_third/Placement_Trident-Placement-2.jpg",
      tag: "Testing Halls",
      metric: "600+ Terminals",
    },
    {
      id: "gd-suites",
      title: "Group Discussion Suites",
      desc: "Acoustically optimized round-table rooms for candidate evaluation and team assessments.",
      img: "/images/drive_third/Placement_GD-Halls.jpg",
      tag: "GD Suites",
      metric: "Acoustic Rooms",
    },
    {
      id: "interview-cabins",
      title: "Air-Conditioned Interview Cabins",
      desc: "Dedicated 1:1 corporate interviewer suites equipped for technical assessments and executive HR rounds.",
      img: "/images/drive_third/Placement_accabins.jpg",
      tag: "Interview Cabins",
      metric: "1:1 Private Suites",
    },
    {
      id: "hiring-drives",
      title: "On-Campus Corporate Hiring Drives",
      desc: "Live corporate recruitment drives conducted by enterprise partners including Persistent Networks and global IT firms.",
      img: "/images/drive_third/Placement_persistentnetworks__campusdrive__hiringdrive__cam.jpg",
      tag: "Live Drives",
      metric: "Campus Drives",
    },
    {
      id: "recruiter-network",
      title: "Major Recruiter Network & Hiring Partners",
      desc: "Over 138 corporate recruiting partners visiting each season including TCS, Infosys, Wipro, Cognizant, and Deloitte.",
      img: "/images/drive_third/Placement_Trident-Placement-1.jpeg",
      tag: "Hiring Partners",
      metric: "138+ Recruiters",
    },
    {
      id: "industry-interface",
      title: "Industry Corporate Interactions & Placement Sessions",
      desc: "Continuous technical engagement with visiting tech leads and enterprise delegates ensuring stellar offer conversion rates.",
      img: "/images/drive_third/Placement_Industry.jpg",
      tag: "Industry Panels",
      metric: "Corporate Panels",
    },
  ];

  const trainingTiers: TrainingPhase[] = [
    {
      tier: "PHASE 01",
      step: "01",
      shortTitle: "DSA & Problem Solving",
      title: "Problem Solving Techniques (Data Structures & Algorithms)",
      year: "From 2nd Year Onwards",
      focus: "Comprehensive DSA Aptitude & Programming Competence",
      statValue: "120",
      statSuffix: "+ Hours",
      statLabel: "Algorithmic Sprints",
      icon: "⚡",
      accent: "text-blue-600",
      glowColor: "rgba(37, 99, 235, 0.12)",
      terminalType: "algo",
      desc: "From the 2nd year onwards, comprehensive problem-solving techniques upon Data Structures & Algorithm are imparted to candidates of BBA & BCA. Post-completion, aptitude & programming competence are evaluated via online assessments.",
      highlightChips: [
        "LeetCode & HackerRank Benchmarked Competence",
        "Weekly Proctored Speed Programming Sprints",
        "1:1 Faculty Technical Mentorship & Performance Review",
      ],
      modules: [
        { name: "Data Structures & Algorithm Optimization", tag: "ALGO BENCHMARK", desc: "Arrays, Trees, Graphs & Dynamic Programming fundamentals", mastery: 98 },
        { name: "Online Assessment & Aptitude Benchmarking", tag: "SPEED LOGIC", desc: "Corporate-pattern quantitative, verbal & reasoning timed evaluations", mastery: 95 },
        { name: "Aptitude Competence Segregation for Technology Tracks", tag: "TIER SEGREGATION", desc: "Cohort division into specialized technical focus clusters", mastery: 92 },
        { name: "Speed Programming & Mathematical Logic", tag: "PROCTORED SPRINTS", desc: "High-pressure coding simulations with real-time test case analysis", mastery: 96 },
      ],
    },
    {
      tier: "PHASE 02",
      step: "02",
      shortTitle: "Tech Bootcamps",
      title: "Technology Specific Bootcamp Model",
      year: "Specialized Technology Tracks",
      focus: "Python & Data Science, Java Full-Stack, Android/React & Node.js, Web Development",
      statValue: "4",
      statSuffix: " Tracks",
      statLabel: "Specialized Bootcamps",
      icon: "💻",
      accent: "text-indigo-600",
      glowColor: "rgba(99, 102, 241, 0.12)",
      terminalType: "bootcamp",
      desc: "Based on grading systems & group segregation, candidates are trained in an intensive Bootcamp model on 4 specific technologies: Python & Data Science, Java Full-Stack, Android/React & Node.js, and Cloud Web Development.",
      highlightChips: [
        "Production-Grade Full-Stack Frameworks & Modern Tooling",
        "Hands-On Lab Environments in Block 5 Computing Suites",
        "Industry-Certified Lead Instructors with Enterprise Experience",
      ],
      modules: [
        { name: "Track 1: Python & Applied Data Science", tag: "DATA & ML LAB", desc: "Pandas, NumPy, Scikit-Learn, data visualization & exploratory analytics", mastery: 96 },
        { name: "Track 2: Enterprise Java Full-Stack Engineering", tag: "SPRING & ENTERPRISE", desc: "Core Java, Spring Boot microservices, Hibernate ORM & REST APIs", mastery: 94 },
        { name: "Track 3: Android, React & Node.js Ecosystems", tag: "MOBILE & WEB", desc: "Modern React 19, Next.js, React Native & Node express services", mastery: 97 },
        { name: "Track 4: Full-Stack Web & Cloud Deployment", tag: "CLOUD & DEVOPS", desc: "CI/CD pipelines, containerization, Git workflows & modern serverless", mastery: 93 },
      ],
    },
    {
      tier: "PHASE 03",
      step: "03",
      shortTitle: "Industry Mentoring",
      title: "Project Mentoring by Industry Experts",
      year: "3rd Year Immersion",
      focus: "Real-Time Problem Statements & Prototype Building",
      statValue: "100",
      statSuffix: "% Live",
      statLabel: "Industry Capstones",
      icon: "🚀",
      accent: "text-emerald-600",
      glowColor: "rgba(16, 185, 129, 0.12)",
      terminalType: "capstone",
      desc: "In the 3rd Year after completing technology-specific training, candidates transition to project mentoring sessions where they tackle real-time enterprise problem statements guided by external industry experts for final prototype submission.",
      highlightChips: [
        "External Tech Leads & Architects from Tier-1 IT Corporates",
        "Weekly Milestone Sprint Reviews & Architectural Defense",
        "Final Capstone Project Defense & Live Recruiter Demo Day",
      ],
      modules: [
        { name: "Real-Time Industry Problem Statements", tag: "ENTERPRISE SPEC", desc: "Direct enterprise case studies provided by partnered software houses", mastery: 100 },
        { name: "Weekly Milestone Review by Corporate Tech Leads", tag: "INDUSTRY REVIEW", desc: "Continuous sprint reviews with feedback from visiting technical leads", mastery: 98 },
        { name: "Prototype Architectural Validation & Testing", tag: "QA & BENCHMARK", desc: "Rigorous unit testing, integration tests & security verification", mastery: 95 },
        { name: "Final Capstone Project Defense & Code Review", tag: "DEMO DAY", desc: "Formal presentation and defense before academic & industry jury", mastery: 99 },
      ],
    },
    {
      tier: "PHASE 04",
      step: "04",
      shortTitle: "Internships & PPOs",
      title: "Corporate Internships & Pre-Placement Offers",
      year: "Final Year / Post-Project",
      focus: "Partner Company Internships & Pre-Placement Offers",
      statValue: "94",
      statSuffix: "% Rate",
      statLabel: "Offer Conversion",
      icon: "🏆",
      accent: "text-amber-600",
      glowColor: "rgba(217, 119, 6, 0.12)",
      terminalType: "ppo",
      desc: "Post-completion of live projects, candidates intern with our partnered companies to gain real production experience, leading directly to Pre-Placement Offers (PPOs) based on performance.",
      highlightChips: [
        "Direct Corporate Pre-Placement Offer (PPO) Evaluations",
        "Strategic Academic Alliances with TCS, CISCO (CCNA) & Cloudbite",
        "Simulated Technical & Leadership HR Behavioral Panels",
      ],
      modules: [
        { name: "Corporate Internship with Partnered Tech Firms", tag: "ON-SITE IMMERSION", desc: "Direct production exposure in verified enterprise development cycles", mastery: 98 },
        { name: "Pre-Placement Offer (PPO) Conversion Evaluations", tag: "DIRECT CONVERSION", desc: "Performance benchmarking resulting in early employment offers", mastery: 94 },
        { name: "Industry Interface with TCS, CISCO (CCNA) & Cloudbite", tag: "ALLIANCE TRACKS", desc: "Certified co-branded programs and technology accreditation", mastery: 96 },
        { name: "Mock Technical & HR Leadership Behavioral Panels", tag: "INTERVIEW MASTERY", desc: "Acoustically treated GD suite drills & executive panel simulations", mastery: 97 },
      ],
    },
  ];

  const recruiters = [
    { name: "Tata Consultancy Services", tag: "TCS", role: "Software Engineer / System Analyst" },
    { name: "Infosys Technologies", tag: "INFOSYS", role: "Operations Executive / Developer" },
    { name: "CGI Info Systems", tag: "CGI", role: "Associate Software Consultant" },
    { name: "Wipro Technologies", tag: "WIPRO", role: "Project Engineer / Scholar Trainee" },
    { name: "Deloitte Consulting", tag: "DELOITTE", role: "Tax / Audit & Technology Analyst" },
    { name: "Cognizant Technology", tag: "CTS", role: "Programmer Trainee" },
    { name: "Accenture", tag: "ACCENTURE", role: "Associate Software Engineer" },
    { name: "Capgemini", tag: "CAPGEMINI", role: "Senior Analyst / Developer" },
    { name: "Tech Mahindra", tag: "TECHM", role: "Associate Software Engineer" },
    { name: "Genpact", tag: "GENPACT", role: "Management Trainee / Data Analyst" },
    { name: "ICICI Bank", tag: "ICICI", role: "Relationship Manager / Deputy Manager" },
    { name: "HCL Technologies", tag: "HCL", role: "Software Engineer Trainee" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Student Campus Placement Interview Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/placement-interview-hero.jpg"
              alt="TAPS Undergraduate Student in Campus Placement Interview"
              fill
              priority
              quality={95}
              className="object-cover object-[75%_30%] filter contrast-105 opacity-95 scale-100"
              sizes="100vw"
            />
            {/* Softened gradient mask allowing the full placement scene to be clearly visible while maintaining sharp text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/78 via-[#070D21]/50 via-50% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/35 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900/90 border border-zinc-700/80 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-xs">
                Training &amp; Placement Cell
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                Where Undergraduate Ambition Meets Global Industry
              </h1>
              <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                The Placement Cell of the Institute conducts extensive research on the recruitment process of numerous companies to guide its students to their preferred jobs in their area of specialization.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                >
                  Apply for 2026 Batch →
                </button>
                <Link
                  href="/programmes"
                  className="px-6 py-3 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300"
                >
                  View Course Tracks
                </Link>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* 4 STATS COUNTER STRIP: LIGHT VARIANT (CARDLESS OPEN RAIL) */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/80 pt-4 border-t border-zinc-200/80">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="py-4 sm:py-2 px-0 sm:px-6 text-center group cursor-default"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-2 font-serif group-hover:text-blue-700 transition-colors flex items-center justify-center">
                    <SpeedometerCounter
                      value={s.value}
                      duration={2.0}
                      delay={0.1 + idx * 0.1}
                      maxBlur={8}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 mb-0.5">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-normal">
                    {s.sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SUPER-30 ANAND KUMAR AWARD: OPEN EDITORIAL SHOWCASE (CARDLESS) */}
            <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-80 h-48 rounded-2xl overflow-hidden shrink-0 shadow-md bg-slate-100">
                <Image
                  src="/images/taps_official/anand_kumar_award.jpg"
                  alt="Mr. Anand Kumar of SUPER-30 awarding TRIDENT at Ranchi"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
                  OFFICIAL INSTITUTIONAL AWARD
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-950 tracking-tight leading-snug">
                  Mr. Anand Kumar of &ldquo;SUPER-30&rdquo; awarding TRIDENT at Ranchi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                  Mr. Anand Kumar of &ldquo;SUPER-30&rdquo; awarding TRIDENT at Ranchi for being EASTERN INDIA&rsquo;s fastest growing college in CAMPUS PLACEMENTS.
                </p>
              </div>
            </div>

            {/* YEAR-WISE RECRUITER TRAJECTORY: OPEN METRIC RAIL */}
            <div className="mt-14 pt-8 border-t border-slate-200">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Historical Recruiter Growth
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mt-2">
                  Year-Wise Corporate Recruiters (2019 – 2026)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-x divide-zinc-200/80 pt-4 border-t border-zinc-200/80">
                {yearWiseRecruiters.map((rec) => (
                  <div
                    key={rec.year}
                    className="py-3 px-2 text-center group"
                  >
                    <span className="text-xs font-mono font-bold text-slate-500 block mb-0.5 group-hover:text-blue-700">
                      {rec.year}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-950 font-mono">
                      {rec.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </AnimatedBackground>

        {/* REACT BITS PRO: HERO 7 (3D ROTATING CAROUSEL WITH A GLOW BAR) */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <Hero7
              badge="LIVE DRIVE INFRASTRUCTURE • HERO 7"
              title="Dedicated Campus Placement"
              highlightText="Suites & Recruiter Hub"
              description="From online screening assessments to final round-table HR interviews, TAPS hosts visiting recruiters across modern facilities within the campus."
              slides={placementHero7Slides}
              autoPlayInterval={3800}
            />
          </section>
        </AnimatedBackground>

        {/* STRUCTURED 4-PHASE CAREER TRAINING BLUEPRINT (ADVANCED ANIMATED CONSOLE) */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Subtle Ambient Background Aura */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-70" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>Preparation Blueprint • 4 Phases</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
                Structured Corporate{" "}
                <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Training Pipeline
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Corporate readiness is not an afterthought at TAPS. Every student undergoes rigorous, multi-semester preparation from algorithmic logic to specialized technology bootcamps and corporate PPOs.
              </p>
            </div>

            {/* Advanced Animated Training Console with Spotlight, Terminal Telemetry & Live Gauges */}
            <StructuredTrainingConsole
              phases={trainingTiers}
              onOpenQuery={() => setIsModalOpen(true)}
            />

          </section>
        </AnimatedBackground>

        {/* TIER-1 RECRUITERS GRID: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-3 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Corporate Partners
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                Recruiters Who Hire TAPS Scholars
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mt-3 font-normal leading-relaxed">
                Global consultancies, product engineering organizations, and tier-1 banks that conduct regular campus recruitment drives.
              </p>
            </div>

            {/* Official Recruiters Infographic Banner */}
            <div className="max-w-4xl mx-auto mb-14 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 relative h-64 sm:h-80 group">
              <Image
                src="/images/drive_third/Placement_Trident-Placement-1.jpeg"
                alt="Major Corporate Recruiters at Trident"
                fill
                loading="lazy"
                quality={90}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest font-bold">
                    Official Placement Portfolio
                  </span>
                  <div className="text-base sm:text-lg font-bold">
                    TCS, Infosys, Wipro, Capgemini, Deloitte, SAP &amp; Mindtree
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                  Annual Campus Placement Record
                </span>
              </div>
            </div>

            {/* Cardless Recruiter Stream */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-zinc-800">
              {recruiters.map((r) => (
                <div
                  key={r.name}
                  className="py-3 border-b border-zinc-800/80 group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-400">
                      {r.tag}
                    </span>
                    <span className="text-[10px] text-zinc-500">Regular Recruiter</span>
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {r.name}
                  </div>
                  <div className="text-xs text-zinc-400 font-light mt-0.5">
                    Role: {r.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-md cursor-pointer"
              >
                Inquire About Campus Drives &amp; Eligibility →
              </button>
            </div>

          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

