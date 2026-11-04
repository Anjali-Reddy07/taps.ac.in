"use client";

import Link from "next/link";

interface TactProgrammesProps {
  onOpenQuery?: () => void;
}

export default function TactProgrammes({ onOpenQuery }: TactProgrammesProps) {
  const programmes = [
    {
      num: "01",
      title: "Bachelor of Computer Applications",
      degree: "BCA · Undergraduate",
      duration: "3 Years · Full Time",
      desc: "Full-stack software engineering, cloud computing, AI foundations, data structures, and database systems with extensive hands-on lab projects.",
      eligibility: "10+2 with Mathematics / Stats / CS",
      href: "/admission",
      tag: "Highest Campus Placement",
    },
    {
      num: "02",
      title: "Bachelor of Business Administration",
      degree: "BBA · Undergraduate",
      duration: "3 Years · Full Time",
      desc: "Comprehensive managerial training across corporate finance, marketing analytics, human resource dynamics, and entrepreneurial leadership.",
      eligibility: "10+2 in Any Stream (Science / Arts / Comm)",
      href: "/admission",
      tag: "Corporate Mentorship",
    },
    {
      num: "03",
      title: "B.Sc (Hons) Computer Science",
      degree: "B.Sc (CS) · Undergraduate",
      duration: "3 Years · Full Time",
      desc: "Core algorithmic rigor, computational theory, operating systems, networking architectures, and modern software design.",
      eligibility: "10+2 Science with Mathematics",
      href: "/admission",
      tag: "Computational Rigor",
    },
    {
      num: "04",
      title: "B.Sc (Hons) Biotechnology",
      degree: "B.Sc (Biotech) · Undergraduate",
      duration: "3 Years · Full Time",
      desc: "Advanced laboratory-driven curriculum in molecular biology, genetics, bioprocess engineering, bioinformatics, and immunology.",
      eligibility: "10+2 Science with Biology (PCB / PCMB)",
      href: "/admission",
      tag: "Research Labs & Genetics",
    },
  ];

  return (
    <section id="programmes" className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-blue-100/80 overflow-hidden">
      {/* Background Soft Aurora Accents matching TACT Section 4 */}
      <div className="absolute top-1/3 left-1/12 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Heading matching TACT Section 4 */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0020D6] font-bold mb-3">
            Academics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001D4A] tracking-tight leading-tight">
            Programmes Offered
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-light leading-relaxed">
            Three-year undergraduate degree programmes, affiliated to Utkal University and permanently approved by the Higher Education Department, Govt. of Odisha.
          </p>
        </div>

        {/* Programmes Grid matching TACT card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programmes.map((prog) => (
            <div
              key={prog.num}
              className="bg-white border border-blue-100 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-extralight text-[#0020D6] group-hover:scale-110 transition-transform origin-left font-serif">
                    {prog.num}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#0020D6] border border-blue-200">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#001D4A] group-hover:text-[#0020D6] transition-colors mb-2 leading-snug">
                  {prog.title}
                </h3>

                <div className="text-xs font-semibold text-[#0052CC] mb-4 flex items-center gap-2">
                  <span>{prog.degree}</span>
                  <span>•</span>
                  <span>{prog.duration}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {prog.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold block">Eligibility</span>
                  <span className="text-slate-700 font-medium">{prog.eligibility}</span>
                </div>

                <Link
                  href={prog.href}
                  className="w-9 h-9 rounded-full bg-blue-50 group-hover:bg-[#0020D6] text-[#0020D6] group-hover:text-white flex items-center justify-center transition-all shrink-0"
                  aria-label={`Explore ${prog.title}`}
                >
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* 5th Card: Explore More Opportunities (Matching TACT Section 4) */}
          <div className="bg-gradient-to-br from-[#001D4A] to-[#0020D6] rounded-2xl p-7 sm:p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group">
            {/* Ambient light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold mb-3">
                Academic Ecosystem
              </div>
              <h3 className="text-2xl font-light mb-3">
                Explore More Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6 font-light">
                Departments, high-performance computing centers, library resources, examination calendars, and faculty credentials.
              </p>

              <div className="space-y-2 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-sky-300">✦</span>
                  <span>Utkal University Semester Regulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sky-300">✦</span>
                  <span>Special Tutoring &amp; Remedial Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sky-300">✦</span>
                  <span>Student Innovation &amp; Hackathon Hub</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20 mt-6 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider uppercase text-sky-200">
                Admission Desk
              </span>
              <button
                onClick={onOpenQuery}
                className="px-5 py-2.5 rounded-lg bg-white text-[#001D4A] hover:bg-sky-50 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

