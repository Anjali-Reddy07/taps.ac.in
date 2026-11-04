"use client";

import { useState } from "react";
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
        { label: "Placement Rate", value: "95%+", sub: "Tier-1 Tech Partners" },
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
    },
  };

  const current = courseData[selectedCourse];

  return (
    <section 
      id="programmes" 
      className="relative py-20 sm:py-24 lg:py-28 bg-zinc-50 border-y border-zinc-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
            Academic Programmes
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
            Interactive Programme Explorer
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
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
                ? "bg-black text-white border-black shadow-lg hover:bg-zinc-900"
                : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 shadow-2xs"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className={`text-2xl font-serif font-light ${
                selectedCourse === "bca" ? "text-zinc-300" : "text-zinc-400 group-hover:text-black"
              }`}>
                01
              </span>
              <div>
                <div className="text-base sm:text-lg font-bold tracking-tight">
                  BCA
                </div>
                <div className={`text-xs ${
                  selectedCourse === "bca" ? "text-zinc-300" : "text-zinc-500"
                }`}>
                  Computer Applications (3 Yrs)
                </div>
              </div>
            </div>

            <span className={`text-xs uppercase font-semibold px-2.5 py-1 rounded-md border tracking-wider ${
              selectedCourse === "bca"
                ? "bg-zinc-900 text-zinc-200 border-zinc-700"
                : "bg-zinc-100 text-zinc-700 border-zinc-200 group-hover:border-zinc-300"
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
                ? "bg-black text-white border-black shadow-lg hover:bg-zinc-900"
                : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 shadow-2xs"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span className={`text-2xl font-serif font-light ${
                selectedCourse === "bba" ? "text-zinc-300" : "text-zinc-400 group-hover:text-black"
              }`}>
                02
              </span>
              <div>
                <div className="text-base sm:text-lg font-bold tracking-tight">
                  BBA
                </div>
                <div className={`text-xs ${
                  selectedCourse === "bba" ? "text-zinc-300" : "text-zinc-500"
                }`}>
                  Business Administration (3 Yrs)
                </div>
              </div>
            </div>

            <span className={`text-xs uppercase font-semibold px-2.5 py-1 rounded-md border tracking-wider ${
              selectedCourse === "bba"
                ? "bg-zinc-900 text-zinc-200 border-zinc-700"
                : "bg-zinc-100 text-zinc-700 border-zinc-200 group-hover:border-zinc-300"
            }`}>
              Management
            </span>
          </button>
        </div>

        {/* ACTIVE COURSE INTERACTIVE CARD CONTAINER */}
        <div 
          role="tabpanel"
          id={`course-panel-${selectedCourse}`}
          aria-labelledby={`course-tab-${selectedCourse}`}
          className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.04)] animate-fadeIn"
        >
          {/* Course Banner Header */}
          <div className="border-b border-zinc-200 pb-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black text-white">
                    {current.code} • 2026–27
                  </span>
                  <span className="text-xs uppercase font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-300">
                    {current.tag}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium hidden sm:inline">
                    {current.affiliation}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight leading-tight">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Action Buttons in Header */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={onOpenQuery}
                  className="px-6 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover-lift active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Apply for {current.code}
                </button>

                <button
                  onClick={onOpenQuery}
                  className="px-5 py-3 rounded-xl border border-zinc-300 hover:border-black hover:bg-zinc-50 text-zinc-900 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Request Brochure
                </button>
              </div>

            </div>

            {/* 4 Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-100">
              {current.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    {m.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight font-serif">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-zinc-600 mt-0.5">
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
            className="flex items-center gap-2 border-b border-zinc-200 pb-4 mb-8 overflow-x-auto scrollbar-none"
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
                      ? "bg-black text-white shadow-xs"
                      : "bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200/70"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {current.curriculum.map((year, idx) => (
                  <div 
                    key={year.period} 
                    className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-black transition-all duration-300 hover-lift flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase font-mono font-bold tracking-wider text-zinc-500">
                          {year.period}
                        </span>
                        <span className="text-xs font-serif text-zinc-400 font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-zinc-950 mb-4 leading-snug">
                        {year.title}
                      </h4>

                      <ul className="space-y-2.5">
                        {year.topics.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
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
                <h4 className="text-base sm:text-lg font-bold text-zinc-950 mb-4">
                  Graduation Job Profiles &amp; Career Trajectories
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {current.careers.profiles.map((p) => (
                    <div key={p.role} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                        <h5 className="text-sm font-bold text-zinc-950">{p.role}</h5>
                      </div>
                      <p className="text-xs sm:text-[13px] text-zinc-600 pl-4 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200">
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
                  Leading Recruiters for {current.code} Candidates
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {current.careers.hiringPartners.map((rec) => (
                    <span 
                      key={rec}
                      className="px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-xs font-semibold text-zinc-800 shadow-2xs"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-bold text-zinc-500">
                    Academic Minimum Requirement
                  </div>
                  <h4 className="text-base font-bold text-zinc-950">
                    10+2 Qualification
                  </h4>
                  <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
                    {current.eligibility.criteria}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-bold text-zinc-500">
                    Admission &amp; Counseling
                  </div>
                  <h4 className="text-base font-bold text-zinc-950">
                    Counseling &amp; Seat Allocation
                  </h4>
                  <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
                    {current.eligibility.selectionProcess}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">
                    Sanctioned Intake
                  </div>
                  <div className="text-sm sm:text-base font-medium text-zinc-200">
                    {current.eligibility.intake}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    {current.eligibility.scholarships}
                  </div>
                </div>

                <button
                  onClick={onOpenQuery}
                  className="px-6 py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-colors shrink-0 active:scale-95 cursor-pointer"
                >
                  Check Seat Availability
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB PANEL 4: LABS */}
          {activeSubTab === "labs" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              {current.labs.map((lab, i) => (
                <div key={lab.name} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">
                      LAB FACILITY 0{i + 1}
                    </span>
                    <h4 className="text-base font-bold text-zinc-950 mb-2 leading-snug">
                      {lab.name}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      {lab.spec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Card Summary Bar */}
          <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
            <div>
              Affiliated to Utkal University • AICTE Approved • Permanent Recognition by Govt. of Odisha
            </div>
            <Link
              href="/admission"
              className="text-xs font-semibold text-zinc-900 hover:text-black flex items-center gap-1 group active:scale-95"
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
