"use client";

import Link from "next/link";

interface HomeContentProps {
  onOpenQuery?: () => void;
}

export default function HomeContent({ onOpenQuery }: HomeContentProps) {
  const notices = [
    { date: "Oct 28, 2026", text: "Commencement of BCA & BBA 1st Semester Internal Examinations.", tag: "Academic" },
    { date: "Oct 24, 2026", text: "Annual Campus Placement Drive with Top Tier-1 IT Recruiters.", tag: "Placement" },
    { date: "Oct 15, 2026", text: "Pre-registration opens for Utkal University semester examination forms.", tag: "Circular" },
    { date: "Oct 05, 2026", text: "Orientation and Industry Mentorship Sessions for the incoming 2026 batch.", tag: "Event" },
  ];

  const programs = [
    {
      code: "BCA",
      title: "Bachelor in Computer Application",
      duration: "3 Years • Full-Time",
      eyebrow: "School of Computing",
      desc: "An intensive undergraduate degree combining algorithmic thinking, modern full-stack engineering, cloud architecture, and foundational AI systems.",
      eligibility: "10+2 with Mathematics / Stats / CS",
      career: "Software Engineer, Cloud Architect, Systems Analyst",
      badge: "Highest Placements",
    },
    {
      code: "BBA",
      title: "Bachelor in Business Administration",
      duration: "3 Years • Full-Time",
      eyebrow: "School of Management",
      desc: "Designed to cultivate strategic foresight, financial literacy, organizational leadership, and modern digital marketing acumen for aspiring executives.",
      eligibility: "10+2 in Any Academic Stream",
      career: "Business Analyst, Operations Lead, Marketing Strategist",
      badge: "Industry Mentorship",
    },
    {
      code: "B.Sc (Hons)",
      title: "Biotechnology & Computer Science",
      duration: "3 Years • Full-Time",
      eyebrow: "School of Natural Sciences",
      desc: "Laboratory-driven coursework bridging bioinformatics, molecular genetics, biochemistry, and computational analysis for research careers.",
      eligibility: "10+2 with Science Stream (PCB / PCM)",
      career: "Research Associate, Clinical Data Analyst, Biochemist",
      badge: "Advanced Labs",
    },
  ];

  return (
    <div className="w-full bg-white text-[#001D4A] py-16 sm:py-24 space-y-20 sm:space-y-28">
      
      {/* SECTION 1: EDITORIAL WELCOME & SLIM NOTICE BOARD */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Welcome Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/80 text-[11px] font-sans tracking-[0.16em] uppercase font-bold text-[#0020D6]">
              Institutional Profile
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#001D4A] leading-tight">
              An ecosystem built for <br />
              <span className="font-editorial text-4xl sm:text-5xl font-normal text-[#0020D6]">
                intellectual autonomy.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Trident Academy of Professional Studies (TAPS) stands among the most distinguished undergraduate institutions affiliated with Utkal University. Designed to nurture technical aptitude, executive readiness, and scientific discipline, TAPS pairs cutting-edge computational labs with active corporate recruiting channels.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our continuous mentorship framework ensures that students graduate with tangible portfolio experience, strong foundational competencies, and direct industry readiness.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.16em] uppercase text-[#0020D6] font-bold hover:text-[#0018b3] transition-colors"
              >
                <span>Read Institutional Profile</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* Minimalist Notice Board Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-blue-50/50 via-white to-white border border-blue-100 rounded-3xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,32,214,0.05)] space-y-6">
            <div className="flex items-center justify-between border-b border-blue-100 pb-4">
              <div>
                <span className="text-[10px] font-sans tracking-[0.16em] text-[#0052CC] uppercase font-bold block mb-0.5">
                  Live Dispatch
                </span>
                <h3 className="font-bold text-sm tracking-tight text-[#001D4A]">
                  Official Notice Board
                </h3>
              </div>
              <span className="text-[10px] font-sans tracking-wider bg-[#0020D6] text-white px-2.5 py-1 rounded-full font-bold shadow-xs">
                2026 UPDATES
              </span>
            </div>

            <ul className="space-y-4">
              {notices.map((item, idx) => (
                <li
                  key={idx}
                  className="group block border-b border-blue-50 pb-3.5 last:border-none last:pb-0"
                >
                  <div className="flex items-center justify-between text-[11px] font-sans text-slate-500 mb-1">
                    <span className="font-medium">{item.date}</span>
                    <span className="border border-blue-200 bg-blue-50 px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider text-[#0020D6] font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <Link
                    href="/notices"
                    className="text-xs sm:text-[13px] text-[#001D4A] font-semibold leading-snug group-hover:text-[#0020D6] transition-colors block"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-blue-100 pt-4 flex items-center justify-between">
              <Link
                href="/notices"
                className="text-xs font-sans tracking-wider uppercase text-[#0020D6] font-bold hover:underline"
              >
                All Circulars &amp; Archives →
              </Link>
              <span className="text-[11px] text-slate-500 font-sans">Utkal Univ. Circulars</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: PROGRAM CATALOG CARDS IN CRISP WHITE & BLUE */}
      <section id="programs" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-blue-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/80 text-[11px] font-sans tracking-[0.16em] uppercase font-bold text-[#0020D6] mb-3">
              Academic Catalogue
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#001D4A]">
              Flagship Undergraduate <br />
              <span className="font-editorial text-4xl sm:text-5xl font-normal text-[#0020D6]">
                degree programs.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
            Affiliated to Utkal University with comprehensive practical labs, industry-standard project work, and guaranteed recruitment training.
          </p>
        </div>

        {/* 3 Program Product Cards in White & Blue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {programs.map((program) => (
            <div
              key={program.code}
              className="bg-white border border-blue-100 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(0,32,214,0.09)] transition-all duration-300 group"
            >
              <div>
                {/* Top Badge & Duration Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-blue-50">
                  <span className="text-[10px] font-sans tracking-[0.14em] uppercase font-bold text-[#0052CC]">
                    {program.eyebrow}
                  </span>
                  <span className="text-[10px] font-sans tracking-wider font-bold bg-blue-50 border border-blue-200 text-[#0020D6] px-2.5 py-1 rounded-full shadow-xs">
                    {program.duration}
                  </span>
                </div>

                {/* Course Code & Title */}
                <div className="pt-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-2xl font-bold tracking-tight text-[#001D4A]">
                      {program.code}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#0020D6] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-bold">
                      {program.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#001D4A] leading-snug group-hover:text-[#0020D6] transition-colors">
                    {program.title}
                  </h3>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {program.desc}
                </p>

                {/* Structured Metadata Pills */}
                <div className="space-y-2.5 pb-6 border-b border-blue-50">
                  <div className="text-[11px]">
                    <span className="font-sans uppercase tracking-wider text-[#001D4A] font-bold block">
                      Eligibility
                    </span>
                    <span className="text-slate-600 mt-0.5 block">{program.eligibility}</span>
                  </div>
                  <div className="text-[11px] pt-1">
                    <span className="font-sans uppercase tracking-wider text-[#001D4A] font-bold block">
                      Career Outlets
                    </span>
                    <span className="text-slate-600 mt-0.5 block">{program.career}</span>
                  </div>
                </div>
              </div>

              {/* Action Links & Pill */}
              <div className="pt-6 flex items-center justify-between">
                <Link
                  href="/admission"
                  className="text-xs font-sans tracking-wider uppercase text-[#0020D6] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5"
                >
                  <span>Curriculum Guide</span>
                  <span className="text-sm">→</span>
                </Link>

                <button
                  type="button"
                  onClick={onOpenQuery}
                  className="text-[11px] font-semibold tracking-wide bg-[#0020D6] hover:bg-[#0018b3] text-white px-4 py-2 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* SECTION 3: RECRUITMENT & PLACEMENT TICKER BANNER */}
      <section id="placements" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="bg-gradient-to-r from-blue-50/60 via-white to-blue-50/60 border border-blue-100 rounded-3xl p-8 sm:p-12 shadow-[0_12px_36px_rgba(0,32,214,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] font-sans tracking-[0.2em] text-[#0020D6] uppercase font-bold block">
                Career Infrastructure
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#001D4A]">
                Top recruitment <br />
                <span className="font-editorial text-3xl sm:text-4xl font-normal text-[#0020D6]">
                  network &amp; placement cell.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                TAPS maintains continuous industry collaborations with global tech consultancies and regional business powerhouses for structured recruitment drives.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["TCS", "Wipro", "Infosys", "Cognizant", "Capgemini", "Tech Mahindra"].map((company) => (
                  <div
                    key={company}
                    className="p-4 rounded-2xl border border-blue-100 bg-white text-center flex flex-col items-center justify-center hover:border-blue-300 hover:shadow-xs transition-all"
                  >
                    <span className="font-mono text-sm font-bold tracking-tight text-[#001D4A]">
                      {company}
                    </span>
                    <span className="text-[9px] font-sans text-[#0052CC] font-semibold tracking-widest uppercase mt-0.5">
                      Recruitment Partner
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
