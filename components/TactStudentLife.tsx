"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TactStudentLife() {
  const [activeItem, setActiveItem] = useState(0);
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "mgmt" | "culture">("all");
  const [isPaused, setIsPaused] = useState(false);

  // Curated Club & Co-Curricular Chapters from taps.ac.in
  const activities = [
    {
      id: "apper-coding",
      category: "tech",
      title: "APPER Coding Club & Hackathons",
      badge: "Flagship Programming Club",
      shortTag: "CODING & ALGORITHMS",
      desc: "TAPS' official programming club providing a cooperative environment where students interact and solve algorithmic challenges, 24-hour hackathons, and creative software problems beyond the syllabus.",
      coordinator: "Guided by Faculty & Student Governing Body",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      iconGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      image: "/images/drive_fourth/hack_day.png",
    },
    {
      id: "analytics-club",
      category: "mgmt",
      title: "Analytics Club",
      badge: "Data-Driven Decision Making",
      shortTag: "BUSINESS INTELLIGENCE",
      desc: "Empowers students to master data-driven business decisions, predictive modeling, statistical visualization, and enterprise intelligence pipelines under faculty mentorship.",
      coordinator: "Seed Funded by TAPS • Industry Masterclasses",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconGradient: "from-indigo-600 via-purple-600 to-blue-500",
      image: "/images/drive_fourth/brain_logic_club.png",
    },
    {
      id: "strategy-club",
      category: "mgmt",
      title: "Strategy & Advisory Club",
      badge: "Corporate Leadership",
      shortTag: "MANAGERIAL ADVISORY",
      desc: "Prepares undergraduate scholars to act as strategic advisors and business consultants for corporate industries through live boardroom case studies and executive simulations.",
      coordinator: "Corporate Mentor Network • TSPL Legacy",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconGradient: "from-purple-600 via-pink-600 to-indigo-600",
      image: "/images/drive_fourth/manan_club.png",
    },
    {
      id: "cloud-cyber",
      category: "tech",
      title: "Cloud & Cyber Security Hub",
      badge: "Enterprise Virtualization",
      shortTag: "CLOUD INFRASTRUCTURE",
      desc: "Dedicated to hosted cloud services, virtualization clusters, network vulnerability testing, and ethical hacking workshops led by senior student mentors and faculty leads.",
      coordinator: "Cloud Virtualization Nodes • 24/7 Gigabit Lab",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      iconGradient: "from-cyan-600 via-blue-600 to-indigo-600",
      image: "/images/drive_fourth/cloud_club.png",
    },
    {
      id: "fintech-sustainability",
      category: "mgmt",
      title: "Fintech & Sustainability Club",
      badge: "Emerging Markets Specialization",
      shortTag: "FINTECH & ESG PRACTICES",
      desc: "Prepares students for successful careers in fintech, digital banking ecosystems, and algorithmic trade while equipping them to implement sustainable ESG business practices.",
      coordinator: "Cross-Disciplinary BCA & BBA Initiative",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      image: "/images/drive_fourth/innovation_mela.png",
    },
    {
      id: "trifest-culture",
      category: "culture",
      title: "Trifest & Cultural Extravaganza",
      badge: "Annual Flagship Festival",
      shortTag: "ARTS, DANCE & CELEBRATIONS",
      desc: "The premier multi-day annual spring festival uniting sports tournaments, coding hackathons, literary debates, fine arts, musical nights, and inter-collegiate performances.",
      coordinator: "100% Student Organized • Eastern India Showcase",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      iconGradient: "from-amber-500 via-rose-500 to-purple-600",
      image: "/images/drive_second/Activities.jpg",
    },
    {
      id: "kartavya-social",
      category: "culture",
      title: "Kartavya Social Outreach Society",
      badge: "Community & Humanitarian Cell",
      shortTag: "SOCIAL SERVICE & NSS",
      desc: "Active student volunteer society committed to community welfare, disaster relief drives, blood donation camps, digital literacy missions, and environmental plantation across Odisha.",
      coordinator: "NSS Affiliated • Community Leadership",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconGradient: "from-rose-500 via-red-600 to-amber-500",
      image: "/images/drive_fourth/kartavya_club.png",
    },
    {
      id: "sports-athletics",
      category: "culture",
      title: "Sports & Athletics Arena",
      badge: "Physical Wellness & Tournaments",
      shortTag: "FULL-TRACK COMPLEX",
      desc: "Floodlit full-scale basketball court, cricket pitch, athletic turf, sprint tracks, volleyball courts, modern gymnasium, and outdoor recreation greens at the 11-acre Technoplex.",
      coordinator: "Inter-University Tournaments • Utkal Univ Meets",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconGradient: "from-orange-500 via-amber-600 to-emerald-600",
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
    },
  ];

  // Filter activities based on selected category tab
  const filteredActivities = activeCategory === "all"
    ? activities
    : activities.filter((a) => a.category === activeCategory);

  // Auto-advance showcase every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % filteredActivities.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, filteredActivities.length]);

  // Ensure activeItem stays in bounds when category changes
  const handleCategoryChange = (cat: "all" | "tech" | "mgmt" | "culture") => {
    setActiveCategory(cat);
    setActiveItem(0);
  };

  const currentActivity = filteredActivities[activeItem] || filteredActivities[0] || activities[0];

  return (
    <section 
      id="student-life" 
      className="relative py-20 sm:py-24 lg:py-32 bg-transparent overflow-hidden scroll-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header Strip with High-Tech Micro-Pill & Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50/90 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>STUDENT LIFE &amp; SOCIETIES • TAPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Life Beyond the Classroom
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              10 active student clubs seed-funded by TAPS. Where foundational computing and managerial education turns into leadership, teamwork, and competitive achievements.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-indigo-100 shadow-sm backdrop-blur-md shrink-0">
            {[
              { id: "all", label: "All Clubs (10)" },
              { id: "tech", label: "Tech & Coding" },
              { id: "mgmt", label: "Management" },
              { id: "culture", label: "Culture & Sports" },
            ].map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id as any)}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer select-none active:scale-95 ${
                    isSelected ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeStudentLifeCategory"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/25"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Sticky Cinema Showcase (Left) + Interactive High-Tech Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: STICKY CINEMA SHOWCASE CARD (Stays smoothly pinned in viewport) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              layout
              className="relative w-full rounded-3xl overflow-hidden border border-indigo-150 shadow-[0_20px_50px_rgba(79,70,229,0.12)] bg-[#070D21] group flex flex-col"
            >
              {/* Photo Showcase Window (Aspect-16/10) - Ensures Full Photo Visibility without Cropping */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-slate-950 shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentActivity.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentActivity.image}
                      alt={currentActivity.title}
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-[1200ms] ease-out"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle scrim for the top beacon tags */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Top Floating Chapter Strip */}
                <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between pointer-events-none">
                  <span className="bg-white/95 backdrop-blur-md text-slate-900 font-mono font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-white/40 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>ACTIVE CHAPTER</span>
                  </span>

                  <span className="bg-[#070D21]/85 backdrop-blur-md text-cyan-300 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30">
                    Infocity Campus • Patia
                  </span>
                </div>
              </div>

              {/* Bottom Integrated Details Panel - Dedicated Content Region, Never Overlays Photo */}
              <div className="p-5 sm:p-6 bg-[#070D21] text-white flex-1 flex flex-col justify-between border-t border-white/10">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
                      {currentActivity.shortTag}
                    </span>
                    <span className="text-[11px] font-mono text-indigo-300/80">
                      {activeItem + 1} / {filteredActivities.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {currentActivity.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 mt-2 font-normal leading-relaxed">
                    {currentActivity.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] text-indigo-200 mb-3">
                    <span className="truncate">{currentActivity.coordinator}</span>
                    <span className="text-cyan-400 font-semibold shrink-0 ml-2">Seed Funded</span>
                  </div>

                  {/* Auto-cycle progress bar */}
                  <div className="w-full bg-white/15 h-1 rounded-full overflow-hidden">
                    <motion.div
                      key={`bar-${currentActivity.id}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: isPaused ? 0 : 5.5,
                        ease: "linear",
                      }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: INTERACTIVE HIGH-TECH CARDS (Click or Hover to preview) */}
          <div className="lg:col-span-7 space-y-3.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredActivities.map((act, index) => {
                  const isSelected = index === activeItem;
                  return (
                    <motion.div
                      key={act.id}
                      onClick={() => setActiveItem(index)}
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group ${
                        isSelected
                          ? "bg-white border-blue-600 shadow-[0_12px_30px_rgba(37,99,235,0.12)] ring-2 ring-blue-500/30"
                          : "bg-white/95 border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      {/* Left Gradient Edge Pill Indicator on Active */}
                      {isSelected && (
                        <motion.div
                          layoutId="activeStudentLifeBorder"
                          className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 rounded-r-md"
                        />
                      )}

                      <div className="flex items-start gap-3.5 sm:gap-4 pl-1">
                        {/* High-Tech Gradient SVG Icon Container */}
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm transition-transform duration-300 group-hover:scale-108 bg-gradient-to-tr ${act.iconGradient}`}
                        >
                          {act.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                            <h4 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors">
                              {act.title}
                            </h4>
                            <span
                              className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xs"
                                  : "bg-blue-50 text-blue-700 border border-blue-200/70"
                              }`}
                            >
                              {act.badge}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                            {act.desc}
                          </p>

                          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                            <span className="font-mono text-slate-600 truncate">{act.coordinator}</span>
                            <span className="inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                              <span>Preview</span>
                              <span>→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Official TAPS Co-Curricular Feature Strip */}
            <div className="pt-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white border border-indigo-900/60 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold block">
                  SEED FUNDED ECOSYSTEM • taps.ac.in
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-light">
                  10 student-managed clubs guided by senior faculty &amp; pre-final student bodies.
                </p>
              </div>

              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0"
              >
                <span>Visit Technoplex Campus</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
