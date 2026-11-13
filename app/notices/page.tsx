"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

interface Notice {
  id: string;
  date: string;
  category: "Examinations" | "Academics" | "Placements" | "Events";
  title: string;
  authority: string;
  desc: string;
  fileSize: string;
}

export default function NoticesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);

  const notices: Notice[] = [
    {
      id: "notice-01",
      date: "04 Nov 2026",
      category: "Examinations",
      title: "Utkal University Even Semester (2nd, 4th & 6th) Examination Form Fill-up 2026",
      authority: "Office of the Controller of Examinations",
      desc: "Eligible BCA and BBA students are advised to complete online examination enrollment and fee payment through the university portal on or before the notified deadline.",
      fileSize: "245 KB PDF",
    },
    {
      id: "notice-02",
      date: "01 Nov 2026",
      category: "Placements",
      title: "CGI Info Systems Campus Recruitment Drive for 2026 Graduating Batch (BCA)",
      authority: "Training & Placement Cell, TAPS",
      desc: "Shortlisted candidates are required to report to the Executive GD-PI Amphitheatre at 9:00 AM sharp with formal corporate dress code and updated resumes.",
      fileSize: "180 KB PDF",
    },
    {
      id: "notice-03",
      date: "28 Oct 2026",
      category: "Academics",
      title: "State Medhabruti & Post-Matric Scholarship Portal Opening for Session 2026-27",
      authority: "Scholarship & Student Welfare Desk",
      desc: "Eligible undergraduate students of 1st, 2nd, and 3rd year are instructed to submit their scholarship applications along with certified bank passbook and income certificates.",
      fileSize: "320 KB PDF",
    },
    {
      id: "notice-04",
      date: "24 Oct 2026",
      category: "Events",
      title: "PARAKRAM & AKASHYAAN Annual Student Innovation Hackathon 2026",
      authority: "Student Activity Council (SAC)",
      desc: "Registration is open for the 36-hour inter-college coding and business incubation sprint. Cash prizes and seed incubation funding worth ₹1.5 Lakhs to be awarded.",
      fileSize: "410 KB PDF",
    },
    {
      id: "notice-05",
      date: "18 Oct 2026",
      category: "Examinations",
      title: "Mid-Term Internal Assessment Schedule for 1st & 3rd Semester Students",
      authority: "Academic Steering Committee",
      desc: "The continuous evaluation internal tests for BCA and BBA will commence as per the published department timetable. Attendance is strictly mandatory.",
      fileSize: "195 KB PDF",
    },
    {
      id: "notice-06",
      date: "12 Oct 2026",
      category: "Academics",
      title: "Utkal University CBCS Guidelines & Evaluation Ordinance Update",
      authority: "Office of the Principal, TAPS",
      desc: "Notification regarding revised credit weightage and external evaluation rubric under Choice Based Credit System regulations for undergraduate degree courses.",
      fileSize: "560 KB PDF",
    },
    {
      id: "notice-07",
      date: "05 Oct 2026",
      category: "Placements",
      title: "Phase-1 Soft Skills & Quantitative Aptitude Training Roster",
      authority: "Corporate Finishing School Wing",
      desc: "Weekly training calendar for 2nd Year BCA & BBA scholars focusing on TCS National Qualifier Test (NQT) and Infosys test pattern problem sets.",
      fileSize: "210 KB PDF",
    },
    {
      id: "notice-08",
      date: "28 Sep 2026",
      category: "Events",
      title: "Trifest 2026 Annual Cultural & Sports Conclave Auditions",
      authority: "Trident Cultural Society",
      desc: "Auditions for inter-college musical bands, dramatic presentations, debate forums, and athletic contingents are scheduled across next week.",
      fileSize: "175 KB PDF",
    },
  ];

  const categories = ["All", "Examinations", "Academics", "Placements", "Events"];

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = selectedCategory === "All" || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.authority.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg"
              alt="Trident Campus Notice Board"
              fill
              priority
              quality={92}
              className="object-cover object-center filter contrast-105 opacity-80 scale-100"
              sizes="100vw"
            />
            {/* Smooth one-sided scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/98 via-[#070D21]/80 via-50% to-[#070D21]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/60 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Official Institutional Circulars
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                Live Notice Board &amp; University Circulars
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Official updates regarding Utkal University semester examinations, campus placement drives, 
                merit scholarships, and student activities at Trident Academy of Professional Studies.
              </p>

              {/* Real-time Search Box */}
              <div className="relative max-w-xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search notices by keyword, company, or exam..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-white transition-all shadow-md"
                />
                <svg
                  className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* NOTICES LISTING: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* 2 Official Academic & Corporate Bulletin Photo Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm group">
                <Image
                  src="/images/drive_third/ClassRooms_Academic.JPG"
                  alt="Academic & Examination Circulars"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                    Academic Notices
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                    Utkal University CBCS Schedules
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    Semester Forms, Evaluation Rubrics &amp; Timetables
                  </div>
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm group">
                <Image
                  src="/images/drive_third/Placement_Trident-Placement-1.jpeg"
                  alt="Corporate Placement Circulars"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                    Placement Circulars
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                    Campus Recruitment Schedules
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    TCS, Infosys, Wipro, Capgemini &amp; CGI Drive Dates
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter Pills with Framer Motion Spring Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-200">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-2">
                Filter Category:
              </span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                      isSelected
                        ? "text-white shadow-xs"
                        : "text-zinc-600 hover:text-black bg-white border border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeNoticeFilter"
                        className="absolute inset-0 bg-black rounded-xl shadow-xs"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Results Count */}
            <div className="text-xs font-mono text-zinc-500 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Showing {filteredNotices.length} of {notices.length} published circulars</span>
            </div>

            {/* Notices List */}
            {filteredNotices.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white border border-zinc-200">
                <p className="text-zinc-600 text-sm">No circulars matched your search criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs font-semibold text-black underline underline-offset-4 cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotices.map((n, idx) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="py-6 border-b border-zinc-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:pl-2 transition-all duration-200"
                  >
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200/60">
                          {n.date}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                          {n.category}
                        </span>
                        <span className="text-xs text-zinc-500">
                          Issued by: <strong className="font-medium text-zinc-700">{n.authority}</strong>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight hover:text-blue-700 transition-colors">
                        {n.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {n.desc}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <button
                        onClick={() => setActiveNoticeModal(n)}
                        className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer hover-lift"
                      >
                        View Official Notice →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </section>
        </AnimatedBackground>
      </main>

      {/* DETAIL MODAL FOR CIRCULARS */}
      {activeNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-zinc-200 relative animate-fadeIn">
            <button
              onClick={() => setActiveNoticeModal(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-black text-white">
                {activeNoticeModal.category}
              </span>
              <span className="text-xs text-zinc-500 ml-3">{activeNoticeModal.date}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-zinc-950 mb-3 tracking-tight">
              {activeNoticeModal.title}
            </h3>

            <p className="text-xs text-zinc-500 mb-4 pb-3 border-b border-zinc-100">
              Issuing Wing: <strong className="text-zinc-800">{activeNoticeModal.authority}</strong>
            </p>

            <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-xs sm:text-sm text-zinc-700 leading-relaxed mb-6 font-normal">
              {activeNoticeModal.desc}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-zinc-500">{activeNoticeModal.fileSize}</span>
              <button
                onClick={() => {
                  alert(`Official circular "${activeNoticeModal.title}" is archived in TAPS Administrative Records.`);
                  setActiveNoticeModal(null);
                }}
                className="px-5 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Download Verified PDF
              </button>
            </div>
          </div>
        </div>
      )}

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

