"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TactProgrammesProps {
  onOpenQuery?: () => void;
}

export default function TactProgrammes({ onOpenQuery }: TactProgrammesProps) {
  const [selectedCourse, setSelectedCourse] = useState<"bca" | "bba">("bca");
  const [activeSubTab, setActiveSubTab] = useState<"curriculum" | "careers" | "eligibility" | "labs">("curriculum");

  const courseData = {
    bca: {
      code: "BCA",
      num: "01",
      title: "Bachelor of Computer Applications",
      fullName: "BCA (Bachelor in Computer Application)",
      degree: "3-Year Undergraduate Degree • Full Time",
      affiliation: "Affiliated to Utkal University • AICTE Approved",
      tagline: "High-Performance Computational Systems, Full-Stack Development & AI Foundations",
      tag: "Highest Campus Placement",
      metrics: [
        { label: "Duration", value: "3 Years", sub: "6 Semesters" },
        { label: "Placement Network", value: "138+", sub: "Corporate Recruiters" },
        { label: "Practical Lab Hours", value: "450+ Hrs", sub: "Cloud & AI Clusters" },
        { label: "Faculty Mentorship", value: "1:15", sub: "Dedicated Research Guides" },
      ],
      curriculum: [
        {
          period: "Year 1 (Semesters I & II)",
          title: "Computational Foundations & Software Logic",
          topics: [
            "Programming Fundamentals in C & C++",
            "Discrete Mathematics & Graph Theory",
            "Digital Electronics & Computer Architecture",
            "Data Structures & Algorithm Design Labs",
            "Relational Database Systems (SQL)",
          ],
        },
        {
          period: "Year 2 (Semesters III & IV)",
          title: "Full-Stack Development, Cloud & Object Systems",
          topics: [
            "Advanced Java & Python for Data Analytics",
            "Operating Systems & Linux Kernel Commands",
            "Web Technologies (React, Node.js & TypeScript)",
            "Cloud Computing & Virtualization Infrastructure",
            "Computer Networks & Network Security Fundamentals",
          ],
        },
        {
          period: "Year 3 (Semesters V & VI)",
          title: "AI Foundations, Capstone Project & Placement Immersion",
          topics: [
            "Generative AI & Machine Learning Foundations",
            "Software Engineering & Agile Scrum Methodologies",
            "Enterprise Cloud Deployment & CI/CD Pipelines",
            "Industry Capstone Project & Code Defense",
            "Corporate Placement Prep & Mock Technical Interviews",
          ],
        },
      ],
      careers: {
        profiles: [
          { role: "Software Development Engineer", desc: "Full-stack web and mobile application engineering across modern frameworks." },
          { role: "Cloud & DevOps Associate", desc: "Deploying and managing scalable workloads on AWS, Azure, and Google Cloud." },
          { role: "Database & Data Analyst", desc: "Data modeling, business intelligence pipelines, and real-time database administration." },
          { role: "Cybersecurity & QA Specialist", desc: "System penetration testing, code quality automation, and network threat defense." },
        ],
        hiringPartners: ["TCS", "Infosys", "Wipro", "Capgemini", "Cognizant", "Deloitte", "Amazon AWS", "CGI"],
      },
      eligibility: {
        criteria: "Passed 10+2 or equivalent examination in any stream (Science / Arts / Commerce) with Mathematics / Statistics / Computer Science / Information Technology as one of the subjects, securing minimum 45% aggregate (40% for reserved categories).",
        selectionProcess: "Direct Merit Counseling based on 10+2 board scores followed by Personal Academic Counseling session.",
        intake: "120 Seats Approved by Utkal University & Higher Education Dept, Govt. of Odisha.",
        scholarships: "State Medhabruti, Post-Matric Merit Grants & Trident Foundation Fee Concessions available.",
      },
      labs: [
        { name: "Advanced Software Engineering Lab", spec: "120 Dual-Boot Intel Core i7 workstations with Linux & Windows dev environments." },
        { name: "Cloud Computing & AI Innovation Wing", spec: "Dedicated AWS Academy sandbox, high-speed GPU accelerators & Docker containers." },
        { name: "Network & Cyber Architecture Lab", spec: "Cisco managed switches, hardware firewalls & protocol packet analysis tools." },
      ],
      buildingImage: "/images/drive_third/ClassRooms_Academic.JPG",
      buildingTitle: "Trident School of Computing & Smart Amphitheatres",
      buildingTag: "Smart Computing & Tech Wing",
    },
    bba: {
      code: "BBA",
      num: "02",
      title: "Bachelor of Business Administration",
      fullName: "BBA (Bachelor in Business Administration)",
      degree: "3-Year Undergraduate Degree • Full Time",
      affiliation: "Affiliated to Utkal University • AICTE Approved",
      tagline: "Corporate Strategic Management, Financial Analytics, Marketing & Venture Incubation",
      tag: "Corporate Leadership Track",
      metrics: [
        { label: "Duration", value: "3 Years", sub: "6 Semesters" },
        { label: "Corporate Immersion", value: "100%", sub: "Live Industry Projects" },
        { label: "Case Study Pedagogy", value: "300+ Cases", sub: "Harvard & IIM Frameworks" },
        { label: "Executive Mentors", value: "25+", sub: "Fortune 500 Leaders" },
      ],
      curriculum: [
        {
          period: "Year 1 (Semesters I & II)",
          title: "Managerial Economics & Organizational Principles",
          topics: [
            "Principles & Practices of Modern Management",
            "Managerial Economics & Microeconomic Decisions",
            "Financial Accounting & Cost Analysis",
            "Business Communication & Corporate Presentation",
            "Legal Frameworks for Commercial Enterprises",
          ],
        },
        {
          period: "Year 2 (Semesters III & IV)",
          title: "Specialized Functional Strategy & Market Dynamics",
          topics: [
            "Marketing Management & Consumer Analytics",
            "Corporate Financial Management & Capital Markets",
            "Human Resource Dynamics & Talent Architecture",
            "Production, Supply Chain & Operations Logistics",
            "Management Information Systems (MIS) & Business Tools",
          ],
        },
        {
          period: "Year 3 (Semesters V & VI)",
          title: "Strategic Leadership, Venture Incubation & Corporate Placement",
          topics: [
            "Business Policy & Strategic Corporate Governance",
            "Digital Marketing, SEO & Brand Management",
            "Entrepreneurship & Venture Capital Modeling",
            "Summer Internship Project (SIP) Dissertation",
            "Corporate Placement Assessment & GD/PI Simulations",
          ],
        },
      ],
      careers: {
        profiles: [
          { role: "Management Trainee & Associate", desc: "Corporate business planning, executive operations, and cross-functional leadership." },
          { role: "Financial & Investment Analyst", desc: "Corporate portfolio assessment, financial risk modeling, and banking operations." },
          { role: "Digital Brand & Marketing Strategist", desc: "Campaign optimization, market research analytics, and client relationship management." },
          { role: "Human Capital & Talent Consultant", desc: "Talent acquisition, organizational development, and corporate training programs." },
        ],
        hiringPartners: ["Deloitte", "ICICI Bank", "Genpact", "Tech Mahindra", "Tata Consultancy Services", "HDFC Bank", "Accenture"],
      },
      eligibility: {
        criteria: "Passed 10+2 or equivalent examination in any stream (Science, Commerce, or Arts) from CHSE Odisha or any recognized central/state board with minimum 45% aggregate (40% for reserved categories).",
        selectionProcess: "Merit-based admission on 10+2 scores followed by Aptitude & Profile Assessment.",
        intake: "120 Seats Approved by Utkal University & Dept of Higher Education, Govt. of Odisha.",
        scholarships: "State Merit Scholarships, Trident Meritorious Fee Waivers & Corporate Sponsored Grants.",
      },
      labs: [
        { name: "Business Analytics & Financial Simulation Desk", spec: "Equipped with statistical modeling software, Excel financial suites & market feeds." },
        { name: "Executive Boardroom & GD-PI Amphitheatre", spec: "Acoustically treated corporate discussion chamber with HD presentation consoles." },
        { name: "AKASHYAAN Student Innovation & Startup Cell", spec: "Seed grant incubator with corporate mentor desks for student entrepreneurs." },
      ],
      buildingImage: "/images/drive_third/MBA_seminar_1.jpeg",
      buildingTitle: "Executive Management & Business Seminar Hall",
      buildingTag: "Center for Business Leadership & Case Studies",
    },
  };

  const current = courseData[selectedCourse];

  return (
    <section 
      id="programmes" 
      className="relative py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
            Academic Programmes
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Interactive Programme Explorer
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Choose between our premier three-year undergraduate degree tracks. Compare curricula, career trajectories, lab infrastructure, and eligibility criteria in a clean, unified view.
          </p>
        </div>

        {/* PRIMARY COURSE SWITCHER SEGMENTED TABS */}
        <div 
          role="tablist" 
          aria-label="Academic Degree Programs"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mb-8"
        >
          {/* BCA Tab Button */}
          <button
            role="tab"
            aria-selected={selectedCourse === "bca"}
            aria-controls="course-panel-bca"
            id="course-tab-bca"
            onClick={() => {
              setSelectedCourse("bca");
              setActiveSubTab("curriculum");
            }}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between group active:scale-95 ${
              selectedCourse === "bca"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20"
                : "bg-white text-slate-800 border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-2xs"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className={`text-2xl font-serif font-light ${
                selectedCourse === "bca" ? "text-blue-100" : "text-indigo-400 group-hover:text-blue-700"
              }`}>
                01
              </span>
              <div>
                <div className="text-base sm:text-lg font-bold tracking-tight">
                  BCA
                </div>
                <div className={`text-xs ${
                  selectedCourse === "bca" ? "text-blue-100" : "text-slate-500"
                }`}>
                  Computer Applications (3 Yrs)
                </div>
              </div>
            </div>

            <span className={`text-xs uppercase font-semibold px-2.5 py-1 rounded-md border tracking-wider ${
              selectedCourse === "bca"
                ? "bg-white/20 text-white border-white/30"
                : "bg-blue-50 text-blue-700 border-blue-200 group-hover:border-blue-300"
            }`}>
              Tech &amp; AI
            </span>
          </button>

          {/* BBA Tab Button */}
          <button
            role="tab"
            aria-selected={selectedCourse === "bba"}
            aria-controls="course-panel-bba"
            id="course-tab-bba"
            onClick={() => {
              setSelectedCourse("bba");
              setActiveSubTab("curriculum");
            }}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between group active:scale-95 ${
              selectedCourse === "bba"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20"
                : "bg-white text-slate-800 border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-2xs"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className={`text-2xl font-serif font-light ${
                selectedCourse === "bba" ? "text-purple-100" : "text-indigo-400 group-hover:text-blue-700"
              }`}>
                02
              </span>
              <div>
                <div className="text-base sm:text-lg font-bold tracking-tight">
                  BBA
                </div>
                <div className={`text-xs ${
                  selectedCourse === "bba" ? "text-purple-100" : "text-slate-500"
                }`}>
                  Business Administration (3 Yrs)
                </div>
              </div>
            </div>

            <span className={`text-xs uppercase font-semibold px-2.5 py-1 rounded-md border tracking-wider ${
              selectedCourse === "bba"
                ? "bg-white/20 text-white border-white/30"
                : "bg-purple-50 text-purple-700 border-purple-200 group-hover:border-purple-300"
            }`}>
              Management
            </span>
          </button>
        </div>

        {/* ACTIVE COURSE CARDLESS EDITORIAL WORKSPACE */}
        <div 
          role="tabpanel"
          id={`course-panel-${selectedCourse}`}
          aria-labelledby={`course-tab-${selectedCourse}`}
          className="pt-10 pb-12 border-t border-b border-indigo-100 animate-fadeIn"
        >
          {/* Course Banner Header */}
          <div className="border-b border-indigo-100 pb-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
                    {current.code} • 2026–27
                  </span>
                  <span className="text-xs uppercase font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    {current.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    {current.affiliation}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Action Buttons in Header */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={onOpenQuery}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-500/25 hover-lift active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Apply for {current.code}
                </button>

                <button
                  onClick={onOpenQuery}
                  className="px-5 py-3 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/60 text-indigo-950 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Request Brochure
                </button>
              </div>

            </div>

            {/* 4 Cardless Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-indigo-100">
              {current.metrics.map((m) => (
                <div key={m.label} className="pl-4 py-1.5 border-l-2 border-indigo-300 hover:border-blue-600 transition-colors duration-200">
                  <div className="text-[10px] uppercase tracking-wider text-indigo-700 font-bold mb-0.5">
                    {m.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECONDARY NAVIGATION SUB-TABS */}
          <div 
            role="tablist" 
            aria-label={`${current.code} Detailed Sections`}
            className="flex items-center gap-2 border-b border-indigo-100 pb-4 mb-8 overflow-x-auto scrollbar-none"
          >
            {[
              { id: "curriculum", label: "Curriculum & Semesters" },
              { id: "careers", label: "Career & Placements" },
              { id: "eligibility", label: "Eligibility & Seats" },
              { id: "labs", label: "Labs & Infrastructure" },
            ].map((tab) => {
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSubTab(tab.id as typeof activeSubTab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs"
                      : "bg-indigo-50/70 text-indigo-900 hover:text-blue-700 hover:bg-indigo-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* SUB-TAB PANEL 1: CURRICULUM */}
          {activeSubTab === "curriculum" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Open 3-Column Pedagogical Stream */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {current.curriculum.map((year, idx) => (
                  <div 
                    key={year.period} 
                    className="pl-5 py-2 border-l-2 border-indigo-200 hover:border-blue-600 transition-colors duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          {year.period}
                        </span>
                        <span className="text-xs font-mono text-indigo-400 font-bold">
                          PHASE 0{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                        {year.title}
                      </h4>

                      <ul className="space-y-2">
                        {year.topics.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUB-TAB PANEL 2: CAREERS */}
          {activeSubTab === "careers" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  Graduation Job Profiles &amp; Career Trajectories
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {current.careers.profiles.map((p) => (
                    <div key={p.role} className="pl-4 py-2 border-l-2 border-indigo-200 hover:border-blue-600 transition-colors duration-300 group">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{p.role}</h5>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 pl-4 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-indigo-100">
                <div className="text-xs uppercase tracking-widest text-indigo-700 font-semibold mb-3">
                  Leading Recruiters for {current.code} Candidates
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {current.careers.hiringPartners.map((rec) => (
                    <span 
                      key={rec}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-400 transition-colors"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB PANEL 3: ELIGIBILITY */}
          {activeSubTab === "eligibility" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pl-5 py-2 border-l-2 border-indigo-200 hover:border-blue-600 transition-colors duration-300 space-y-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-blue-700">
                    Academic Minimum Requirement
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    10+2 Qualification
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                    {current.eligibility.criteria}
                  </p>
                </div>

                <div className="pl-5 py-2 border-l-2 border-indigo-200 hover:border-blue-600 transition-colors duration-300 space-y-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-blue-700">
                    Admission &amp; Counseling
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Counseling &amp; Seat Allocation
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                    {current.eligibility.selectionProcess}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0B132E] text-white border border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <div className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-1">
                    Sanctioned Intake
                  </div>
                  <div className="text-sm sm:text-base font-medium text-white">
                    {current.eligibility.intake}
                  </div>
                  <div className="text-xs text-indigo-200/80 mt-1">
                    {current.eligibility.scholarships}
                  </div>
                </div>

                <button
                  onClick={onOpenQuery}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all shrink-0 active:scale-95 cursor-pointer"
                >
                  Check Seat Availability
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB PANEL 4: LABS & INFRASTRUCTURE */}
          {activeSubTab === "labs" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Featured Faculty Infrastructure Viewport */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-slate-950 group h-64 sm:h-72 w-full shadow-sm">
                <Image
                  src={current.buildingImage}
                  alt={current.buildingTitle}
                  fill
                  quality={90}
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-white/40">
                    {current.buildingTag}
                  </span>
                  <span className="bg-blue-600/90 text-white font-medium text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Infocity Campus
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-white">
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {current.buildingTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 font-light leading-relaxed">
                    Dedicated academic wings equipped with modern smart theatres, enterprise servers, and specialized departmental laboratories.
                  </p>
                </div>
              </div>

              {/* 3 Detailed Lab Facilities (Cardless Stream) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {current.labs.map((lab, i) => (
                  <div key={lab.name} className="pl-5 py-2 border-l-2 border-indigo-200 hover:border-blue-600 transition-colors duration-300 flex flex-col justify-between group">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 block mb-1">
                        LAB 0{i + 1}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-blue-700 transition-colors">
                        {lab.name}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {lab.spec}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Card Summary Bar */}
          <div className="mt-8 pt-6 border-t border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              Affiliated to Utkal University • AICTE Approved • Permanent Recognition by Govt. of Odisha
            </div>
            <Link
              href="/admission"
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 group active:scale-95"
            >
              <span>Download Detailed {current.code} Syllabus PDF</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
