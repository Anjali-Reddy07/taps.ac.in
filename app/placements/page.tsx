"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import SpeedometerCounter from "@/components/SpeedometerCounter";

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

  const trainingTiers = [
    {
      tier: "PART 01",
      title: "Problem Solving Techniques (Data Structures & Algorithms)",
      year: "From 2nd Year Onwards",
      focus: "Comprehensive DSA Aptitude & Programming Competence",
      desc: "From the 2nd year onwards, comprehensive problem-solving techniques upon Data Structures & Algorithm are imparted to candidates of BBA & BCA. Post-completion, aptitude & programming competence are evaluated via online assessments.",
      modules: [
        "Data Structures & Algorithm Optimization",
        "Online Assessment & Aptitude Benchmarking",
        "Aptitude Competence Segregation for Technology Tracks",
        "Speed Programming & Mathematical Logic",
      ],
    },
    {
      tier: "PART 02",
      title: "Technology Specific Bootcamp Model",
      year: "Specialized Technology Tracks",
      focus: "Python & Data Science, Java Full-Stack, Android/React & Node.js, Web Development",
      desc: "Based on grading systems & group segregation, candidates are trained in a Boot camp model on 4 specific technologies: Python & Data Science, Java Full-Stack, Android/React & Node.js, and Web Development.",
      modules: [
        "Track 1: Python & Applied Data Science",
        "Track 2: Enterprise Java Full-Stack Engineering",
        "Track 3: Android, React & Node.js Mobile/Web Development",
        "Track 4: Full-Stack Web Development & Cloud Deployment",
      ],
    },
    {
      tier: "PART 03",
      title: "Project Mentoring by Industry Experts",
      year: "3rd Year Immersion",
      focus: "Real-Time Problem Statements & Prototype Building",
      desc: "In the 3rd Year after completing technology-specific training, candidates transition to project mentoring sessions where they tackle real-time enterprise problem statements guided by external industry experts for final prototype submission.",
      modules: [
        "Real-Time Industry Problem Statements",
        "Weekly Milestone Review by Corporate Tech Leads",
        "Prototype Architectural Validation & Testing",
        "Final Capstone Project Defense & Code Review",
      ],
    },
    {
      tier: "PART 04",
      title: "Internships & Corporate PPO Opportunities",
      year: "Final Year / Post-Project",
      focus: "Partner Company Internships & Pre-Placement Offers",
      desc: "Post-completion of live projects, candidates intern with our partnered companies to gain real production experience, leading directly to Pre-Placement Offers (PPOs) based on performance.",
      modules: [
        "Corporate Internship with Partnered Tech Firms",
        "Pre-Placement Offer (PPO) Evaluations",
        "Industry Interface Programs with TCS, CISCO (CCNA) & Cloud bite",
        "Mock Technical & HR Behavioral Interviews",
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
              quality={92}
              className="object-cover object-[75%_30%] filter contrast-105 opacity-80 scale-100"
              sizes="100vw"
            />
            {/* Smooth one-sided scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/98 via-[#070D21]/80 via-50% to-[#070D21]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/60 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Training &amp; Placement Cell
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                Where Undergraduate Ambition Meets Global Industry
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
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

        {/* ON-CAMPUS RECRUITMENT INFRASTRUCTURE & PROCESS */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Live Drive Infrastructure
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Dedicated Campus Placement Suites
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                From online assessments to final HR interviews, TAPS hosts visiting recruiters across modern facilities within the campus.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Aptitude Examination Halls",
                  desc: "Spacious test centers equipped for concurrent online screening exams.",
                  img: "/images/drive_third/Placement_Trident-Placement-2.jpg",
                  tag: "Testing Halls",
                },
                {
                  title: "Group Discussion Suites",
                  desc: "Acoustically optimized round-table rooms for candidate evaluation.",
                  img: "/images/drive_third/Placement_GD-Halls.jpg",
                  tag: "GD Suites",
                },
                {
                  title: "Corporate Recruitment Delegates",
                  desc: "Senior corporate delegates and HR executives during campus recruitment.",
                  img: "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
                  tag: "Executive Panels",
                },
                {
                  title: "Major Recruiter Network",
                  desc: "Over 100 corporate recruiting partners visiting each season.",
                  img: "/images/drive_third/Placement_Trident-Placement-1.jpeg",
                  tag: "Hiring Partners",
                },
              ].map((c, idx) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group flex flex-col justify-between space-y-3 cursor-default"
                >
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-black shadow-xs">
                        {c.tag}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-950 mb-1 group-hover:text-blue-700 transition-colors">
                      {c.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* 3-TIER TRAINING PIPELINE: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Preparation Blueprint
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Structured 3-Tier Training Pipeline
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Corporate readiness is not an afterthought at TAPS. Every student undergoes rigorous preparation across all three academic years.
              </p>
            </div>

            {/* 3-Tier Training Progression (Cardless Open Flow) */}
            <div className="space-y-12 max-w-5xl mx-auto divide-y divide-zinc-200/80">
              {trainingTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="pt-10 first:pt-0 pl-6 border-l-2 border-indigo-400 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-700">
                        {tier.tier}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                        {tier.year}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                      {tier.focus}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                    {tier.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {tier.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {tier.modules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span className="font-normal leading-snug">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

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

