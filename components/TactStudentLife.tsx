"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TactStudentLife() {
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "mgmt" | "culture">("all");

  // Curated Club & Co-Curricular Chapters from taps.ac.in & Google Drive
  const activities = [
    {
      id: "apper-coding",
      category: "tech",
      title: "APPER Coding Club & Hackathons",
      badge: "Flagship Programming Club",
      shortTag: "CODING & ALGORITHMS",
      desc: "TAPS' official programming club providing a cooperative environment where students interact and solve algorithmic challenges, 24-hour hackathons, and creative software problems beyond the syllabus.",
      coordinator: "Faculty & Student Governing Body",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      iconGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      image: "/images/drive_fourth/hack_day.png",
      tagColor: "bg-blue-600/90 text-white",
    },
    {
      id: "analytics-club",
      category: "mgmt",
      title: "Analytics Club",
      badge: "Data-Driven Decision Making",
      shortTag: "BUSINESS INTELLIGENCE",
      desc: "Empowers students to master data-driven business decisions, predictive modeling, statistical visualization, and enterprise intelligence pipelines under faculty mentorship.",
      coordinator: "Seed Funded by TAPS",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconGradient: "from-indigo-600 via-purple-600 to-blue-500",
      image: "/images/drive_fourth/brain_logic_club.png",
      tagColor: "bg-indigo-600/90 text-white",
    },
    {
      id: "strategy-club",
      category: "mgmt",
      title: "Strategy & Advisory Club",
      badge: "Corporate Leadership",
      shortTag: "MANAGERIAL ADVISORY",
      desc: "Prepares undergraduate scholars to act as strategic advisors and business consultants for corporate industries through live boardroom case studies and executive simulations.",
      coordinator: "Corporate Mentor Network • TSPL",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconGradient: "from-purple-600 via-pink-600 to-indigo-600",
      image: "/images/drive_fourth/manan_club.png",
      tagColor: "bg-purple-600/90 text-white",
    },
    {
      id: "cloud-cyber",
      category: "tech",
      title: "Cloud & Cyber Security Hub",
      badge: "Enterprise Virtualization",
      shortTag: "CLOUD INFRASTRUCTURE",
      desc: "Dedicated to hosted cloud services, virtualization clusters, network vulnerability testing, and ethical hacking workshops led by senior student mentors and faculty leads.",
      coordinator: "Cloud Nodes • 24/7 Gigabit Lab",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      iconGradient: "from-cyan-600 via-blue-600 to-indigo-600",
      image: "/images/drive_fourth/cloud_club.png",
      tagColor: "bg-cyan-600/90 text-white",
    },
    {
      id: "fintech-club",
      category: "mgmt",
      title: "Fintech Club",
      badge: "Digital Banking & Algorithmic Trade",
      shortTag: "FINTECH & BANKING",
      desc: "Prepares undergraduate scholars for successful careers in fintech, digital banking ecosystems, algorithmic trade, and financial modeling with industry certifications.",
      coordinator: "Cross-Disciplinary BCA & BBA",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      image: "/images/drive_third/MBA_Seminar_CFX.jpeg",
      tagColor: "bg-emerald-600/90 text-white",
    },
    {
      id: "sustainability-club",
      category: "mgmt",
      title: "Sustainability & ESG Club",
      badge: "Green Innovation & Responsible Enterprise",
      shortTag: "SUSTAINABILITY & ESG",
      desc: "Equips students to understand and implement sustainable business practices, corporate ESG frameworks, green audit compliance, and environmental stewardship.",
      coordinator: "Innovation Mela • Green Campus",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconGradient: "from-teal-600 via-emerald-600 to-green-600",
      image: "/images/drive_fourth/innovation_mela.png",
      tagColor: "bg-teal-600/90 text-white",
    },
    {
      id: "trifest-culture",
      category: "culture",
      title: "Trifest & Cultural Extravaganza",
      badge: "Annual Flagship Festival",
      shortTag: "ARTS & CELEBRATIONS",
      desc: "The premier multi-day annual spring festival uniting sports tournaments, coding hackathons, literary debates, fine arts, musical nights, and inter-collegiate performances.",
      coordinator: "100% Student Organized",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      iconGradient: "from-amber-500 via-rose-500 to-purple-600",
      image: "/images/drive_second/Activities.jpg",
      tagColor: "bg-rose-600/90 text-white",
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
      tagColor: "bg-red-600/90 text-white",
    },
    {
      id: "sports-athletics",
      category: "culture",
      title: "Sports & Athletics Arena",
      badge: "Physical Wellness & Tournaments",
      shortTag: "FULL-TRACK COMPLEX",
      desc: "Floodlit full-scale basketball court, cricket pitch, athletic turf, sprint tracks, volleyball courts, modern gymnasium, and outdoor recreation greens at the 11-acre Technoplex.",
      coordinator: "Inter-University Tournaments",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconGradient: "from-orange-500 via-amber-600 to-emerald-600",
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
      tagColor: "bg-amber-600/90 text-white",
    },
  ];

  // Filter activities based on selected category tab
  const filteredActivities = activeCategory === "all"
    ? activities
    : activities.filter((a) => a.category === activeCategory);

  return (
    <section 
      id="student-life" 
      className="relative py-14 sm:py-16 lg:py-20 bg-transparent scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Strip with High-Tech Micro-Pill & Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-2.5 bg-blue-50/90 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>STUDENT LIFE &amp; SOCIETIES • TAPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Life Beyond the Classroom
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
              Active student societies seed-funded by TAPS. Where foundational computing and managerial education turns into leadership, teamwork, and competitive achievements.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-indigo-100 shadow-sm backdrop-blur-md shrink-0">
            {[
              { id: "all", label: "All Clubs (9)" },
              { id: "tech", label: "Tech & Coding (2)" },
              { id: "mgmt", label: "Management (4)" },
              { id: "culture", label: "Culture & Sports (3)" },
            ].map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer select-none active:scale-95 ${
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

        {/* Balanced Responsive Card Grid (3 Columns) - Zero Dead Space */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredActivities.map((act) => (
              <motion.div
                key={act.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-[0_20px_45px_rgba(30,58,138,0.12)] hover:border-blue-400/80 transition-all duration-300"
              >
                {/* Widescreen Photo Container (16:10 Aspect Ratio) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Deep Scrim for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/25 pointer-events-none" />
                  
                  {/* Top Floating Badge Strip */}
                  <div className="absolute top-3 inset-x-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-xs ${act.tagColor}`}>
                      {act.shortTag}
                    </span>
                    <span className="text-[10px] font-mono text-white/95 bg-black/45 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      Infocity Campus
                    </span>
                  </div>

                  {/* Title & Badge on Photo Bottom */}
                  <div className="absolute bottom-3 inset-x-4 z-10">
                    <span className="text-[11px] font-semibold text-cyan-300 tracking-wide uppercase font-mono block mb-0.5">
                      {act.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug line-clamp-1 drop-shadow-sm">
                      {act.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {act.desc}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium truncate">{act.coordinator}</span>
                    <span className="text-blue-700 font-semibold shrink-0 ml-2 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Seed Funded
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
