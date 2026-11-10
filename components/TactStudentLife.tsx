"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type DomainId = "tech" | "mgmt" | "culture";

interface ClubItem {
  id: string;
  domain: DomainId;
  title: string;
  badge: string;
  shortTag: string;
  desc: string;
  coordinator: string;
  stats: string[];
  image: string;
  accentGradient: string;
  iconBg: string;
  icon: React.ReactNode;
}

export default function TactStudentLife() {
  const [activeDomain, setActiveDomain] = useState<DomainId>("tech");
  const [selectedClubId, setSelectedClubId] = useState<string>("apper-coding");

  const clubs: ClubItem[] = [
    // --- TECH & CODING (4 CHAPTERS) ---
    {
      id: "apper-coding",
      domain: "tech",
      title: "APPER Coding Club & Hackathons",
      badge: "Flagship Programming Club",
      shortTag: "CODING & ALGORITHMS",
      desc: "TAPS' official programming club providing a cooperative environment where students interact and solve algorithmic challenges, 24-hour hackathons, and creative software problems beyond the syllabus.",
      coordinator: "Guided by Faculty & Student Governing Body",
      stats: ["24-Hour Hackathons", "Algorithmic Sprints", "Seed Funded"],
      image: "/images/drive_fourth/hack_day.png",
      accentGradient: "from-blue-600 via-indigo-600 to-cyan-500",
      iconBg: "bg-blue-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "web-dev-club",
      domain: "tech",
      title: "Web Development, IoT & Open-Source Hub",
      badge: "Full-Stack & Systems Engineering",
      shortTag: "WEB DEV, IOT & GIT",
      desc: "Hands-on software development chapter focusing on modern responsive web architectures, IoT connected devices, GitHub collaboration, and open-source project deployment.",
      coordinator: "Technology Partners • Student Core Team",
      stats: ["Full-Stack Sprints", "IoT Prototyping", "GitHub Mentorship"],
      image: "/images/drive_fourth/web_dev_seminar.png",
      accentGradient: "from-indigo-600 via-blue-600 to-teal-500",
      iconBg: "bg-indigo-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      id: "cloud-cyber",
      domain: "tech",
      title: "Cloud & Cyber Security Hub",
      badge: "Enterprise Virtualization",
      shortTag: "CLOUD INFRASTRUCTURE",
      desc: "Dedicated to hosted cloud services, virtualization clusters, network vulnerability testing, and ethical hacking workshops led by senior student mentors and faculty leads.",
      coordinator: "Cloud Virtualization Nodes • 24/7 Gigabit Lab",
      stats: ["Virtualization Nodes", "Ethical Hacking", "Gigabit Lab"],
      image: "/images/drive_fourth/cloud_club.png",
      accentGradient: "from-cyan-600 via-blue-600 to-indigo-600",
      iconBg: "bg-cyan-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: "women-tech",
      domain: "tech",
      title: "Women in Tech & Innovation Cell",
      badge: "Diversity & Advanced Tech Sprints",
      shortTag: "WOMEN IN TECH",
      desc: "Promoting excellence and active representation of women in software programming, algorithmic coding hackathons, research publications, and tech startup mentorship.",
      coordinator: "Women in Engineering Cell • TAPS",
      stats: ["Coding Bootcamps", "Tech Symposiums", "Hackathon Laurels"],
      image: "/images/drive_fourth/women_hackathon.png",
      accentGradient: "from-pink-600 via-purple-600 to-indigo-600",
      iconBg: "bg-pink-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },

    // --- MANAGEMENT & ADVISORY (4 CHAPTERS) ---
    {
      id: "strategy-club",
      domain: "mgmt",
      title: "Strategy & Advisory Club",
      badge: "Corporate Leadership",
      shortTag: "MANAGERIAL ADVISORY",
      desc: "Prepares undergraduate scholars to act as strategic advisors and business consultants for corporate industries through live boardroom case studies and executive simulations.",
      coordinator: "Corporate Mentor Network • TSPL Legacy",
      stats: ["Boardroom Case Studies", "Industry Consulting", "TSPL Network"],
      image: "/images/drive_fourth/manan_club.png",
      accentGradient: "from-purple-600 via-pink-600 to-indigo-600",
      iconBg: "bg-purple-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "analytics-club",
      domain: "mgmt",
      title: "Analytics Club",
      badge: "Data-Driven Decision Making",
      shortTag: "BUSINESS INTELLIGENCE",
      desc: "Empowers students to master data-driven business decisions, predictive modeling, statistical visualization, and enterprise intelligence pipelines under faculty mentorship.",
      coordinator: "Seed Funded by TAPS • Industry Masterclasses",
      stats: ["Predictive Analytics", "Power BI & Python", "Masterclasses"],
      image: "/images/drive_fourth/brain_logic_club.png",
      accentGradient: "from-indigo-600 via-purple-600 to-blue-500",
      iconBg: "bg-indigo-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: "fintech-club",
      domain: "mgmt",
      title: "Fintech Club",
      badge: "Digital Banking & Algorithmic Trade",
      shortTag: "FINTECH & ALGORITHMS",
      desc: "Prepares undergraduate scholars for careers in the fintech industry, digital banking platforms, algorithmic trade, and financial modeling with professional certifications.",
      coordinator: "Cross-Disciplinary BCA & BBA Initiative",
      stats: ["CFX Certification", "Digital Banking", "Financial Modeling"],
      image: "/images/drive_third/MBA_Seminar_CFX.jpeg",
      accentGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      iconBg: "bg-emerald-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "sustainability-club",
      domain: "mgmt",
      title: "Sustainability & ESG Club",
      badge: "Green Innovation & Responsible Enterprise",
      shortTag: "SUSTAINABILITY & ESG",
      desc: "Equips students to understand and implement sustainable business practices, corporate ESG frameworks, green audit compliance, and environmental stewardship across industries.",
      coordinator: "Innovation Mela • Green Campus Cell",
      stats: ["ESG Governance", "Green Audits", "Eco Innovation"],
      image: "/images/drive_new/_DSC1852.JPG",
      accentGradient: "from-teal-600 via-emerald-600 to-green-600",
      iconBg: "bg-teal-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },

    // --- CULTURE, NSS & SPORTS (4 CHAPTERS) ---
    {
      id: "trifest-culture",
      domain: "culture",
      title: "Trifest Annual Cultural Extravaganza",
      badge: "Annual Flagship Festival",
      shortTag: "ARTS, DANCE & CELEBRATIONS",
      desc: "The premier multi-day annual spring festival uniting sports tournaments, coding hackathons, literary debates, fine arts, musical nights, and inter-collegiate performances.",
      coordinator: "100% Student Organized • Eastern India Showcase",
      stats: ["Annual Flagship", "Dance & Theatre", "Inter-Collegiate"],
      image: "/images/drive_second/Activities.jpg",
      accentGradient: "from-amber-500 via-rose-500 to-purple-600",
      iconBg: "bg-rose-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      id: "kartavya-social",
      domain: "culture",
      title: "Kartavya Social Outreach Society",
      badge: "Community & Humanitarian Cell",
      shortTag: "SOCIAL SERVICE & NSS",
      desc: "Active student volunteer society committed to community welfare, disaster relief drives, blood donation camps, digital literacy missions, and environmental plantation across Odisha.",
      coordinator: "NSS Affiliated • Community Leadership",
      stats: ["Blood Donation", "Disaster Relief", "Digital Literacy"],
      image: "/images/drive_fourth/kartavya_club.png",
      accentGradient: "from-rose-500 via-red-600 to-amber-500",
      iconBg: "bg-red-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "sports-athletics",
      domain: "culture",
      title: "Sports & Athletics Arena",
      badge: "Physical Wellness & Tournaments",
      shortTag: "FULL-TRACK COMPLEX",
      desc: "Floodlit full-scale basketball court, cricket pitch, athletic turf, sprint tracks, volleyball courts, modern gymnasium, and outdoor recreation greens at the 11-acre Technoplex.",
      coordinator: "Inter-University Tournaments • Utkal Univ Meets",
      stats: ["Cricket & Football", "Basketball Court", "Utkal Meets"],
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
      accentGradient: "from-orange-500 via-amber-600 to-emerald-600",
      iconBg: "bg-orange-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "leadership-debate",
      domain: "culture",
      title: "Youth Leadership & Oratory Society",
      badge: "Debate, Model UN & Public Speaking",
      shortTag: "ORATORY & LEADERSHIP",
      desc: "Cultivates articulative public discourse, parliamentary debating, Model United Nations diplomacy, and competitive speech elocution under faculty mentorship.",
      coordinator: "Student Senate • Literary Cell",
      stats: ["Parliamentary Debate", "Model UN", "Oratory Laurels"],
      image: "/images/drive_fourth/hackathon_club.png",
      accentGradient: "from-amber-600 via-yellow-600 to-orange-500",
      iconBg: "bg-amber-600 text-white",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
    },
  ];

  // Domains (Each exactly 4 clubs!)
  const domains: { id: DomainId; label: string; icon: string; count: number }[] = [
    { id: "tech", label: "Tech & Hackathons", icon: "💻", count: 4 },
    { id: "mgmt", label: "Management & Advisory", icon: "📊", count: 4 },
    { id: "culture", label: "Culture, NSS & Sports", icon: "🎭", count: 4 },
  ];

  const domainClubs = clubs.filter((c) => c.domain === activeDomain);

  // Ensure selected club belongs to the active domain
  const activeClub =
    domainClubs.find((c) => c.id === selectedClubId) || domainClubs[0];

  const handleDomainChange = (dom: DomainId) => {
    setActiveDomain(dom);
    const firstInDom = clubs.find((c) => c.domain === dom);
    if (firstInDom) setSelectedClubId(firstInDom.id);
  };

  return (
    <section 
      id="student-life" 
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#060B1C] via-[#09112A] to-[#060B1C] text-white scroll-mt-20 overflow-hidden"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.18),transparent)] pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-cyan-300 mb-3 bg-cyan-950/70 border border-cyan-500/30 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>STUDENT SOCIETIES • TAPS HUB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Life Beyond the Classroom
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2.5 font-normal leading-relaxed">
              Explore 12 active student-led chapters seed-funded by TAPS. Where foundational computing and managerial education transforms into competitive hackathons, executive simulations, and social leadership.
            </p>
          </div>

          {/* Interactive Domain Switcher (Segmented Futuristic Tabs) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0F1A3A]/90 border border-indigo-500/20 shadow-lg backdrop-blur-md shrink-0">
            {domains.map((dom) => {
              const isSelected = activeDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  onClick={() => handleDomainChange(dom.id)}
                  className={`relative px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer select-none active:scale-95 flex items-center gap-1.5 ${
                    isSelected ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeDomainPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-indigo-500/30"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 text-sm">{dom.icon}</span>
                  <span className="relative z-10 hidden sm:inline">{dom.label}</span>
                  <span className="relative z-10 text-[10px] font-mono opacity-80 bg-white/10 px-1.5 py-0.5 rounded-md ml-0.5">
                    {dom.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Stage: 7-Column Spotlight Console (Left) + 5-Column Chapter Navigator (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* LEFT 7 COLS: SPOTLIGHT CONSOLE (Cinematic Photo + Full Story + Live Chapter Stats) */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              layout
              className="relative flex flex-col rounded-3xl overflow-hidden border border-white/15 bg-[#0B132B]/90 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] group"
            >
              {/* Widescreen Photo Stage */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeClub.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeClub.image}
                      alt={activeClub.title}
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/40 pointer-events-none" />

                {/* Top Chapter Status Bar */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="bg-[#070D21]/90 backdrop-blur-md text-emerald-400 font-mono font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>ACTIVE CHAPTER</span>
                  </span>

                  <span className="bg-white/15 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                    Infocity Campus • Patia
                  </span>
                </div>

                {/* Floating Tag at Bottom Left of Image */}
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-3 py-1 rounded-md backdrop-blur-md">
                    {activeClub.shortTag}
                  </span>
                </div>
              </div>

              {/* Lower Details Box */}
              <div className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold text-indigo-300 font-mono uppercase tracking-wider">
                      {activeClub.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Seed Funded by TAPS
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                    {activeClub.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-3 font-normal leading-relaxed">
                    {activeClub.desc}
                  </p>
                </div>

                {/* Key Metrics / Highlights Strip */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {activeClub.stats.map((stat, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-cyan-200 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
                      >
                        ✓ {stat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-indigo-200/90 pt-1">
                    <span className="flex items-center gap-2 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {activeClub.coordinator}
                    </span>
                    <span className="text-cyan-400 font-semibold shrink-0 ml-3">
                      TACT Legacy
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT 5 COLS: CHAPTER NAVIGATOR (Zero-Gap Connected List) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-0.5 flex items-center justify-between px-1">
              <span>EXPLORE {activeDomain.toUpperCase()} CHAPTERS</span>
              <span className="text-cyan-400 font-semibold">{domainClubs.length} CHAPTERS</span>
            </div>

            {/* Seamless Stacked Cards (Tight Gap, No Hollow Spacing) */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {domainClubs.map((club) => {
                const isSelected = club.id === activeClub.id;
                return (
                  <motion.div
                    key={club.id}
                    onClick={() => setSelectedClubId(club.id)}
                    whileHover={{ x: 4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`relative p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-3.5 ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-900/60 to-indigo-900/50 border-cyan-400 shadow-[0_8px_25px_rgba(6,182,212,0.18)] ring-1 ring-cyan-400/50"
                        : "bg-[#0B132B]/85 border-white/10 hover:border-white/25 hover:bg-[#0B132B]"
                    }`}
                  >
                    {/* Active Edge Indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeClubEdge"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 rounded-r"
                      />
                    )}

                    {/* Thumbnail Image */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/15 bg-slate-900">
                      <Image
                        src={club.image}
                        alt={club.title}
                        fill
                        className="object-cover object-center"
                        sizes="70px"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold truncate">
                          {club.shortTag}
                        </span>
                        {isSelected && (
                          <span className="text-[9px] font-mono bg-cyan-400/25 text-cyan-300 border border-cyan-400/40 px-1.5 py-0.2 rounded shrink-0">
                            VIEWING
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-white tracking-tight leading-snug truncate">
                        {club.title}
                      </h4>

                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-light">
                        {club.desc}
                      </p>
                    </div>

                    {/* Arrow Action */}
                    <div className="shrink-0 text-slate-400">
                      <svg className={`w-4 h-4 transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Informational Footer Strip */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300 mt-1">
              <span className="flex items-center gap-2">
                <span className="text-base">🏛️</span>
                <span>Seed Funded by TAPS Governing Trust</span>
              </span>
              <span className="font-mono text-cyan-400 text-[11px]">
                TACT Estd. 2000
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
