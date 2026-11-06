"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

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
              className="object-cover object-[75%_30%] filter contrast-105 opacity-55 scale-100"
              sizes="100vw"
            />
            {/* Balanced scrim: deep dark on left for text legibility, subtle atmospheric visibility on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/95 via-[#070D21]/75 to-[#070D21]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/70 via-transparent to-[#070D21]/40" />
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

        {/* 4 STATS COUNTER STRIP: LIGHT VARIANT WITH HOVER LIFT & ANIMATED GLOW */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-indigo-400 shadow-2xs hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden group card-sheen"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-2 font-serif group-hover:text-blue-700 transition-colors">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 mb-1">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-normal">
                    {s.sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SUPER-30 ANAND KUMAR AWARD: DIRECT PHOTO & CAPTION FROM TAPS.AC.IN */}
            <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-indigo-100 shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-80 h-48 rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-md bg-slate-100">
                <Image
                  src="/images/taps_official/anand_kumar_award.jpg"
                  alt="Mr. Anand Kumar of SUPER-30 awarding TRIDENT at Ranchi"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
                  OFFICIAL INSTITUTIONAL AWARD
                </span>
                <h3 className="text-base sm:text-xl font-bold text-slate-950 tracking-tight leading-snug">
                  Mr. Anand Kumar of &ldquo;SUPER-30&rdquo; awarding TRIDENT at Ranchi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                  Mr. Anand Kumar of &ldquo;SUPER-30&rdquo; awarding TRIDENT at Ranchi for being EASTERN INDIA&rsquo;s fastest growing college in CAMPUS PLACEMENTS.
                </p>
              </div>
            </div>

            {/* YEAR-WISE RECRUITER TRAJECTORY: TAPS.AC.IN */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Historical Recruiter Growth
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mt-2">
                  Year-Wise Corporate Recruiters (2019 – 2026)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {yearWiseRecruiters.map((rec) => (
                  <div
                    key={rec.year}
                    className="p-3.5 rounded-2xl bg-white border border-indigo-100 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all text-center group"
                  >
                    <span className="text-xs font-mono font-bold text-slate-500 block mb-1 group-hover:text-blue-700">
                      {rec.year}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-950 font-mono">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  title: "Corporate Interview Desks",
                  desc: "Executive interview booths for technical and managerial rounds.",
                  img: "/images/drive_third/Placement_DSC_2425.JPG",
                  tag: "Interview Cabins",
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
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xs hover:border-indigo-400 hover:shadow-xl transition-all duration-300 group card-sheen"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                        {c.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-950 mb-1 group-hover:text-blue-700 transition-colors">
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

            <div className="space-y-8 max-w-5xl mx-auto">
              {trainingTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="bg-white border border-zinc-200 hover:border-zinc-400 rounded-3xl p-8 sm:p-10 shadow-2xs transition-all duration-300 hover-lift"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mr-3">
                        {tier.tier}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700">
                        {tier.year}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-500 font-medium">
                      {tier.focus}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-light text-zinc-950 tracking-tight mb-3">
                    {tier.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                    {tier.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-100">
                    {tier.modules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {recruiters.map((r) => (
                <div
                  key={r.name}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black">
                      {r.tag}
                    </span>
                    <span className="text-[10px] text-zinc-400">Regular Recruiter</span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {r.name}
                  </div>
                  <div className="text-xs text-zinc-400 font-light">
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

