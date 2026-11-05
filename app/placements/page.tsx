"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function PlacementsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "124+", label: "Recruiters Visited", sub: "Annual Campus Drives (2026)" },
    { value: "2,936+", label: "Campus Placements", sub: "Placed Across Last 5 Years" },
    { value: "95%+", label: "Conversion Rate", sub: "For Eligible Final-Year Candidates" },
    { value: "#1", label: "Placement Record in Odisha", sub: "Under Utkal University BBA & BCA" },
  ];

  const trainingTiers = [
    {
      tier: "TIER 01",
      title: "Foundational Aptitude & Soft-Skills Finishing School",
      year: "Year 1 (Semesters I & II)",
      focus: "Quantitative Aptitude, Logical Reasoning & Professional Communication",
      desc: "Begins in the first semester. Students undergo weekly structured sessions on number theory, algebraic reasoning, data interpretation, corporate email etiquette, and accent-neutral verbal communication.",
      modules: [
        "Speed Mathematics & Arithmetic Progression",
        "Logical Deductions, Syllogisms & Critical Reasoning",
        "Corporate Communication & Presentation Delivery",
        "Public Speaking, Group Debates & Active Listening",
      ],
    },
    {
      tier: "TIER 02",
      title: "Technical Competency & Code Immersion",
      year: "Year 2 (Semesters III & IV)",
      focus: "Full-Stack Development, Data Structures & Cloud Deployment",
      desc: "Led by industry veterans and alumni mentors. BCA scholars solve competitive programming challenges in C++, Java, and Python on HackerRank/LeetCode, while BBA students master financial modeling, CRM, and digital marketing analytics.",
      modules: [
        "Hands-on Data Structures & Algorithm Optimization",
        "Full-Stack Web Development & Version Control (Git)",
        "Financial Valuation Models, DCF & Advanced Excel",
        "Digital Marketing Strategy & Google Analytics Certification",
      ],
    },
    {
      tier: "TIER 03",
      title: "Corporate Readiness & Mock Interview Drills",
      year: "Year 3 (Semesters V & VI)",
      focus: "Simulated Corporate Drives, GD-PI Rounds & Technical Panels",
      desc: "Simulated end-to-end recruitment drives in our dedicated Executive GD-PI Amphitheatre. HR leaders from Infosys, TCS, and CGI conduct mock technical interviews with actionable feedback scoring.",
      modules: [
        "Individual Resume Scrubbing & LinkedIn Profile Optimization",
        "Mock Group Discussions with Video Playback Feedback",
        "Multi-Stage Technical & HR Behavioral Interviews",
        "Company-Specific Question Bank Solving (CGI, TCS, Infosys)",
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
          {/* Authentic Campus Placement Tower Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/_DSC1852.JPG"
              alt="Trident Training and Placement Hub"
              fill
              priority
              className="object-cover object-center filter contrast-105 opacity-35 scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21] via-[#070D21]/90 to-[#070D21]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-transparent to-[#070D21]/60" />
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
                With over <strong className="text-white font-medium">2,936 campus selections</strong> over the past five years 
                and visits from 124+ corporate recruiters annually, TAPS maintains the premier placement benchmark for BCA and BBA in Odisha.
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

        {/* 4 STATS COUNTER STRIP: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs text-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-2">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 mb-1">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-normal">
                    {s.sub}
                  </div>
                </div>
              ))}
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
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xs hover:border-zinc-400 transition-all duration-300 group"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                        {c.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">
                      {c.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>
                </div>
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

