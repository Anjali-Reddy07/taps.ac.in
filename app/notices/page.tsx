"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

interface Notice {
  id: string;
  referenceNo: string;
  date: string;
  day: string;
  monthYear: string;
  category: "Examinations" | "Academics" | "Placements" | "Events";
  status: "Urgent" | "Active" | "Upcoming" | "Notice";
  title: string;
  authority: string;
  desc: string;
  fileSize: string;
  deadline?: string;
  highlightAction?: string;
}

export default function NoticesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const notices: Notice[] = [
    {
      id: "notice-01",
      referenceNo: "TAPS/COE/2026/11-04",
      date: "04 Nov 2026",
      day: "04",
      monthYear: "NOV 2026",
      category: "Examinations",
      status: "Urgent",
      title: "Utkal University Even Semester (2nd, 4th & 6th) Examination Form Fill-up 2026",
      authority: "Office of the Controller of Examinations",
      desc: "Eligible BCA and BBA students are advised to complete online examination enrollment and fee payment through the university portal on or before the notified deadline.",
      fileSize: "245 KB PDF",
      deadline: "Portal Closes: 18 Nov 2026",
      highlightAction: "Portal Link Active",
    },
    {
      id: "notice-02",
      referenceNo: "TAPS/TPO/2026/11-01",
      date: "01 Nov 2026",
      day: "01",
      monthYear: "NOV 2026",
      category: "Placements",
      status: "Active",
      title: "CGI Info Systems Campus Recruitment Drive for 2026 Graduating Batch (BCA)",
      authority: "Training & Placement Cell, TAPS",
      desc: "Shortlisted candidates are required to report to the Executive GD-PI Amphitheatre at 9:00 AM sharp with formal corporate dress code and updated resumes.",
      fileSize: "180 KB PDF",
      deadline: "Reporting: 09:00 AM Sharp",
      highlightAction: "Executive GD Hall",
    },
    {
      id: "notice-03",
      referenceNo: "TAPS/SCH/2026/10-28",
      date: "28 Oct 2026",
      day: "28",
      monthYear: "OCT 2026",
      category: "Academics",
      status: "Active",
      title: "State Medhabruti & Post-Matric Scholarship Portal Opening for Session 2026-27",
      authority: "Scholarship & Student Welfare Desk",
      desc: "Eligible undergraduate students of 1st, 2nd, and 3rd year are instructed to submit their scholarship applications along with certified bank passbook and income certificates.",
      fileSize: "320 KB PDF",
      deadline: "Verification: 30 Nov 2026",
      highlightAction: "State Portal",
    },
    {
      id: "notice-04",
      referenceNo: "TAPS/SAC/2026/10-24",
      date: "24 Oct 2026",
      day: "24",
      monthYear: "OCT 2026",
      category: "Events",
      status: "Upcoming",
      title: "PARAKRAM & AKASHYAAN Annual Student Innovation Hackathon 2026",
      authority: "Student Activity Council (SAC)",
      desc: "Registration is open for the 36-hour inter-college coding and business incubation sprint. Cash prizes and seed incubation funding worth ₹1.5 Lakhs to be awarded.",
      fileSize: "410 KB PDF",
      deadline: "Registration Closes: 15 Nov",
      highlightAction: "₹1.5L Prize Pool",
    },
    {
      id: "notice-05",
      referenceNo: "TAPS/ACAD/2026/10-18",
      date: "18 Oct 2026",
      day: "18",
      monthYear: "OCT 2026",
      category: "Examinations",
      status: "Notice",
      title: "Mid-Term Internal Assessment Schedule for 1st & 3rd Semester Students",
      authority: "Academic Steering Committee",
      desc: "The continuous evaluation internal tests for BCA and BBA will commence as per the published department timetable. Attendance is strictly mandatory.",
      fileSize: "195 KB PDF",
      deadline: "Commencement: 25 Nov",
      highlightAction: "Internal Rubric",
    },
    {
      id: "notice-06",
      referenceNo: "TAPS/PRIN/2026/10-12",
      date: "12 Oct 2026",
      day: "12",
      monthYear: "OCT 2026",
      category: "Academics",
      status: "Notice",
      title: "Utkal University CBCS Guidelines & Evaluation Ordinance Update",
      authority: "Office of the Principal, TAPS",
      desc: "Notification regarding revised credit weightage and external evaluation rubric under Choice Based Credit System regulations for undergraduate degree courses.",
      fileSize: "560 KB PDF",
      deadline: "Academic Ordinance 2026",
      highlightAction: "Official Gazetted",
    },
    {
      id: "notice-07",
      referenceNo: "TAPS/TPO/2026/10-05",
      date: "05 Oct 2026",
      day: "05",
      monthYear: "OCT 2026",
      category: "Placements",
      status: "Active",
      title: "Phase-1 Soft Skills & Quantitative Aptitude Training Roster",
      authority: "Corporate Finishing School Wing",
      desc: "Weekly training calendar for 2nd Year BCA & BBA scholars focusing on TCS National Qualifier Test (NQT) and Infosys test pattern problem sets.",
      fileSize: "210 KB PDF",
      deadline: "Bi-Weekly Evaluation",
      highlightAction: "TCS / Infosys Track",
    },
    {
      id: "notice-08",
      referenceNo: "TAPS/CULT/2026/09-28",
      date: "28 Sep 2026",
      day: "28",
      monthYear: "SEP 2026",
      category: "Events",
      status: "Upcoming",
      title: "Trifest 2026 Annual Cultural & Sports Conclave Auditions",
      authority: "Trident Cultural Society",
      desc: "Auditions for inter-college musical bands, dramatic presentations, debate forums, and athletic contingents are scheduled across next week.",
      fileSize: "175 KB PDF",
      deadline: "Auditions: Amphitheatre",
      highlightAction: "Auditions Open",
    },
  ];

  const categories = ["All", "Examinations", "Placements", "Academics", "Events"];

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = selectedCategory === "All" || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.referenceNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyRef = (ref: string) => {
    navigator.clipboard.writeText(ref);
    setCopyStatus(ref);
    setTimeout(() => setCopyStatus(null), 2500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* LIVE DISPATCH TICKER (HIGH-TECH ANIMATED BROADCAST MARQUEE) */}
        {/* ========================================================================= */}
        <div className="bg-[#050A1A] border-b border-cyan-900/40 py-2.5 px-4 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <div className="shrink-0 flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>LIVE DISPATCH</span>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="animate-marquee whitespace-nowrap text-xs font-mono text-zinc-300 flex items-center gap-8">
                <span className="flex items-center gap-2">
                  <strong className="text-amber-400 font-bold">⚡ EXAMINATIONS:</strong>
                  Utkal University Even Semester (2nd, 4th &amp; 6th) form fill-up window active until 18 Nov 2026.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-emerald-400 font-bold">💼 PLACEMENTS:</strong>
                  CGI Info Systems recruitment drive: Reporting 9:00 AM sharp at GD-PI Amphitheatre.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-blue-400 font-bold">🎓 SCHOLARSHIPS:</strong>
                  State Medhabruti Portal open for eligible BCA &amp; BBA scholars.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-purple-400 font-bold">🚀 INNOVATION:</strong>
                  PARAKRAM 36-Hour Hackathon registration is now open with ₹1.5 Lakh prize pool.
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SERVER: SYNCHRONIZED</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO BANNER: ADVANCED ANIMATED COMMAND DECK */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Deep Gradient Scrim */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg"
              alt="Trident Campus Notice Board"
              fill
              priority
              quality={92}
              className="object-cover object-center filter contrast-105 opacity-60 scale-100"
              sizes="100vw"
            />
            {/* Smooth dual-directional scrim for absolute text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#060D24]/90 to-[#050B1E]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent" />
            
            {/* Cybernetic High-Tech Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "36px 36px"
              }}
            />
          </div>

          <section className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Headlines, Telemetry & Interactive Search */}
              <div className="lg:col-span-8 space-y-6 animate-fadeInUp">
                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Official Institutional Circulars</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-700/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    Academic Year 2026–27
                  </span>
                </div>

                {/* Primary Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
                  University Dispatches &amp;{" "}
                  <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    Official Notice Board
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                  Real-time centralized repository for Utkal University semester ordinances, campus placement schedules, merit scholarship portals, and student notifications at Trident Academy of Professional Studies.
                </p>

                {/* Interactive Glass Search Bar */}
                <div className="relative max-w-2xl pt-2">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search circulars by keyword, company, exam, or Ref. No..."
                      className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-700/80 text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-md transition-all shadow-xl"
                    />
                    <svg
                      className="w-5 h-5 text-cyan-400 absolute left-4 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    {searchQuery ? (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-800 px-2.5 py-1 rounded-lg cursor-pointer"
                      >
                        Clear ✕
                      </button>
                    ) : (
                      <span className="absolute right-4 hidden sm:inline-block text-[10px] font-mono font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                        PRESS /
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Statistics Cards (Partially Dissolved Glass Aesthetic) */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3.5">
                {/* Metric 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 mb-1 flex items-center justify-between">
                    <span>ACTIVE CIRCULARS</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    08 Published
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-light">
                    4 new updates issued this week
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 mb-1 flex items-center justify-between">
                    <span>VERIFICATION SLA</span>
                    <span className="text-emerald-400">✓ 100% SIGNED</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                    Digitally Sealed
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-light">
                    Authorized by Controller of Exams &amp; TPO
                  </div>
                </div>
              </div>

            </div>
          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* MAIN BODY: 2-COLUMN STRUCTURED DISPATCH BOARD */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-14 sm:py-18 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* Top Toolbar: Category Selector Filter Pills with Animated Motion Spring */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-zinc-200/90">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mr-1 hidden sm:inline">
                  Filter Category:
                </span>
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? "text-white shadow-sm"
                          : "text-zinc-600 hover:text-black bg-white/70 hover:bg-white border border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeNoticeFilterPill"
                          className="absolute inset-0 bg-zinc-950 rounded-xl shadow-xs"
                          transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {cat === "All" && <span>📋</span>}
                        {cat === "Examinations" && <span>🎓</span>}
                        {cat === "Placements" && <span>💼</span>}
                        {cat === "Academics" && <span>📚</span>}
                        {cat === "Events" && <span>🏆</span>}
                        <span>{cat}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feed Count */}
              <div className="text-xs font-mono text-zinc-500 flex items-center gap-2 self-start md:self-auto shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>Showing <strong>{filteredNotices.length}</strong> of <strong>{notices.length}</strong> published circulars</span>
              </div>
            </div>

            {/* 2-Column Grid: Left Column = Notice Cards Feed, Right Column = Executive Information Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* ===================================================================== */}
              {/* LEFT COLUMN: DISPATCH FEED (8 COLS) */}
              {/* ===================================================================== */}
              <div className="lg:col-span-8 space-y-4">
                {filteredNotices.length === 0 ? (
                  <div className="p-12 text-center rounded-3xl bg-white/80 border border-zinc-200 backdrop-blur-md shadow-xs">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 text-xl">
                      🔍
                    </div>
                    <h3 className="text-base font-bold text-zinc-900">No circulars matched your search</h3>
                    <p className="text-zinc-500 text-xs mt-1 max-w-sm mx-auto">
                      Try searching with a broader keyword such as &ldquo;exam&rdquo;, &ldquo;BCA&rdquo;, &ldquo;CGI&rdquo;, or reset the category filter.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSearchQuery("");
                      }}
                      className="mt-4 px-4 py-2 rounded-full bg-zinc-950 text-white text-xs font-mono font-bold hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      Clear All Filters ↺
                    </button>
                  </div>
                ) : (
                  filteredNotices.map((n, idx) => {
                    const isUrgent = n.status === "Urgent";
                    const isActive = n.status === "Active";
                    const isUpcoming = n.status === "Upcoming";

                    return (
                      <motion.div
                        key={n.id}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.03 }}
                        style={{
                          WebkitMaskImage: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 75%, rgba(0,0,0,0.85) 100%)",
                          maskImage: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 75%, rgba(0,0,0,0.85) 100%)",
                        }}
                        className="group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/60 via-white/30 to-white/10 hover:from-white/80 hover:via-white/45 hover:to-white/20 border-white/70 hover:border-blue-400/50 shadow-xs hover:shadow-lg"
                        onClick={() => setActiveNoticeModal(n)}
                      >
                        {/* Hover Left Accent Indicator */}
                        <div 
                          className={`absolute top-0 bottom-0 left-0 w-1.5 transition-all duration-300 ${
                            isUrgent
                              ? "bg-rose-500"
                              : isActive
                              ? "bg-emerald-500"
                              : isUpcoming
                              ? "bg-purple-500"
                              : "bg-blue-600"
                          }`} 
                        />

                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                          {/* Left Date Calendar Block */}
                          <div className="shrink-0 flex sm:flex-col items-center justify-center w-auto sm:w-16 h-auto sm:h-16 px-3 sm:px-0 py-1.5 sm:py-0 rounded-xl bg-white/90 border border-zinc-200/90 shadow-2xs text-center">
                            <span className="text-xl sm:text-2xl font-mono font-black text-zinc-950 tracking-tight leading-none">
                              {n.day}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest sm:mt-1">
                              {n.monthYear.split(" ")[0]}
                            </span>
                          </div>

                          {/* Middle Content */}
                          <div className="flex-1 space-y-2">
                            {/* Meta Badges */}
                            <div className="flex flex-wrap items-center gap-2">
                              {/* Status Badge */}
                              <span
                                className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                                  isUrgent
                                    ? "bg-rose-100 text-rose-800 border border-rose-300"
                                    : isActive
                                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                    : isUpcoming
                                    ? "bg-purple-100 text-purple-800 border border-purple-300"
                                    : "bg-blue-100 text-blue-800 border border-blue-300"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    isUrgent
                                      ? "bg-rose-600 animate-ping"
                                      : isActive
                                      ? "bg-emerald-600"
                                      : "bg-blue-600"
                                  }`}
                                />
                                {n.status}
                              </span>

                              {/* Category Badge */}
                              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100/90 px-2 py-0.5 rounded-md border border-zinc-200/80">
                                {n.category}
                              </span>

                              {/* Reference No */}
                              <span className="text-[10px] font-mono text-zinc-400 hidden md:inline">
                                REF: {n.referenceNo}
                              </span>

                              {/* Issuing Authority */}
                              <span className="text-xs text-zinc-500 ml-auto hidden sm:flex items-center gap-1">
                                <span className="text-blue-600">✓</span> {n.authority}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                              {n.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal line-clamp-2">
                              {n.desc}
                            </p>

                            {/* Bottom Metadata & Action Row */}
                            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
                              <div className="flex flex-wrap items-center gap-3">
                                {n.deadline && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-zinc-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-md">
                                    <span>⏳</span>
                                    <span>{n.deadline}</span>
                                  </span>
                                )}
                                <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                                  <span>📄</span>
                                  <span>{n.fileSize}</span>
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                  <span>View Official Notice</span>
                                  <span>→</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* ===================================================================== */}
              {/* RIGHT COLUMN: EXECUTIVE INSTITUTIONAL SIDEBAR (4 COLS) */}
              {/* ===================================================================== */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* WIDGET 1: UPCOMING ACADEMIC & PLACEMENT CALENDAR DEADLINES */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/70 via-white/40 to-white/15 border border-white/80 shadow-xs backdrop-blur-md">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 mb-4">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>Critical Deadlines</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">NOV 2026</span>
                  </div>

                  <div className="space-y-3.5">
                    <div className="p-3 rounded-xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-rose-600">CLOSING SOON</span>
                        <span>18 Nov 2026</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        Utkal University Even Sem Form Fill-up
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Online verification via COE desk.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-emerald-600">CAMPUS DRIVE</span>
                        <span>09:00 AM Sharp</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        CGI Info Systems Selection Process
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Formal corporate dress code mandatory.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-blue-600">GOVT PORTAL</span>
                        <span>30 Nov 2026</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        State Medhabruti Scholarship Applications
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Submit certified passbooks to Admin Block.</div>
                    </div>
                  </div>
                </div>

                {/* WIDGET 2: OFFICIAL UNIVERSITY & EXAMINATION CELL CONTACT */}
                <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 text-white shadow-xl border border-zinc-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-cyan-300">
                      OFFICIAL DISPATCH HELPDESK
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    Office of the Controller of Examinations
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed font-light">
                    For inquiries concerning university admit cards, internal evaluation grievance, or degree transcript verification.
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-800 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500">Exam Cell Room:</span>
                      <strong className="text-white">Admin Block 1, Ground Floor</strong>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500">Helpdesk Phone:</span>
                      <strong className="text-cyan-300">+91 94370 12345</strong>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-500">Official Email:</span>
                      <strong className="text-zinc-200">coe@taps.ac.in</strong>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-colors cursor-pointer text-center"
                    >
                      Submit Student Grievance / Inquiry →
                    </button>
                  </div>
                </div>

                {/* WIDGET 3: INSTITUTIONAL REGULATIONS & ARCHIVE DOWNLOADS */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/70 via-white/40 to-white/15 border border-white/80 shadow-xs backdrop-blur-md">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 pb-3 border-b border-zinc-200/80 mb-3">
                    Institutional Publications &amp; Ordinances
                  </div>

                  <div className="space-y-2">
                    <a
                      href="#download-calendar"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Utkal University Academic Calendar 2026–27 (PDF) download initiated.");
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 hover:bg-white border border-zinc-200/70 hover:border-blue-400 text-xs font-medium text-zinc-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">📄</span>
                        <span>Academic Calendar 2026–27</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-blue-600">PDF ↓</span>
                    </a>

                    <a
                      href="#download-cbcs"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Utkal CBCS Evaluation Ordinance Manual (PDF) download initiated.");
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 hover:bg-white border border-zinc-200/70 hover:border-blue-400 text-xs font-medium text-zinc-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">📜</span>
                        <span>CBCS Evaluation Ordinance</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-blue-600">PDF ↓</span>
                    </a>

                    <a
                      href="#download-ragging"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Anti-Ragging Regulations & Student Code of Conduct (PDF) download initiated.");
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 hover:bg-white border border-zinc-200/70 hover:border-blue-400 text-xs font-medium text-zinc-800 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">🛡️</span>
                        <span>Anti-Ragging Discipline Charter</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-blue-600">PDF ↓</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </section>
        </AnimatedBackground>
      </main>

      {/* ========================================================================= */}
      {/* VERIFIED DIGITAL CIRCULAR DETAIL MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeNoticeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveNoticeModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveNoticeModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
                aria-label="Close Notice Modal"
              >
                ✕
              </button>

              {/* Digital Watermark / Seal */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-mono font-black shadow-md">
                  TAPS
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold">
                    OFFICIAL DISPATCH ARCHIVE
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    Affiliated to Utkal University, Bhubaneswar
                  </div>
                </div>
              </div>

              {/* Notice Metadata */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-950 text-white">
                  {activeNoticeModal.category}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  {activeNoticeModal.status}
                </span>
                <span className="text-xs font-mono text-zinc-500 ml-auto">
                  Published: {activeNoticeModal.date}
                </span>
              </div>

              {/* Reference ID Bar with Copy Action */}
              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-700 mb-4">
                <span>Dispatch Ref: <strong>{activeNoticeModal.referenceNo}</strong></span>
                <button
                  type="button"
                  onClick={() => handleCopyRef(activeNoticeModal.referenceNo)}
                  className="text-[11px] text-blue-600 hover:text-blue-800 cursor-pointer font-bold"
                >
                  {copyStatus === activeNoticeModal.referenceNo ? "✓ Copied!" : "Copy Ref ID"}
                </button>
              </div>

              {/* Headline */}
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight leading-snug">
                {activeNoticeModal.title}
              </h3>

              {/* Issuing Authority */}
              <p className="text-xs text-zinc-500 mb-4 pb-3 border-b border-zinc-100">
                Issuing Wing: <strong className="text-zinc-800">{activeNoticeModal.authority}</strong>
              </p>

              {/* Body Text */}
              <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/90 text-xs sm:text-sm text-zinc-700 leading-relaxed mb-6 font-normal">
                {activeNoticeModal.desc}
              </div>

              {/* Digital Seal & Download Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Verified by TAPS Administration Desk</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Official Circular PDF for "${activeNoticeModal.title}" (${activeNoticeModal.fileSize}) is verified and saved.`);
                      setActiveNoticeModal(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white text-xs font-mono font-bold transition-colors cursor-pointer shadow-md"
                  >
                    Download Verified PDF ({activeNoticeModal.fileSize}) ↓
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
