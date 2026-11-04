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
      degree: "BCA · Undergraduate Degree",
      duration: "3 Years · Full Time",
      desc: "Comprehensive software engineering, cloud computing, AI foundations, data structures, and database systems with extensive hands-on lab projects and industry certifications.",
      eligibility: "10+2 with Mathematics / Statistics / Computer Science",
      highlights: [
        "Full-Stack Web & Mobile App Development",
        "Cloud Computing, Data Analytics & AI Foundations",
        "Dedicated High-Performance Computing Labs",
        "100% Placement Assistance with Tier-1 Tech Recruiters",
      ],
      href: "/admission",
      tag: "Highest Campus Placement",
    },
    {
      num: "02",
      title: "Bachelor of Business Administration",
      degree: "BBA · Undergraduate Degree",
      duration: "3 Years · Full Time",
      desc: "Strategic managerial education covering corporate finance, marketing analytics, human resource dynamics, supply chain, and business leadership with corporate case studies.",
      eligibility: "10+2 in Any Stream (Science / Commerce / Arts)",
      highlights: [
        "Corporate Finance, Marketing & HR Specializations",
        "Business Incubation & Leadership Modeling",
        "Executive Mentorship by Industry Leaders",
        "Internships with Fortune 500 & Banking Giants",
      ],
      href: "/admission",
      tag: "Corporate Mentorship",
    },
  ];

  return (
    <section id="programmes" className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-blue-100/80 overflow-hidden">
      {/* Background Soft Aurora Accents matching TACT Section 4 */}
      <div className="absolute top-1/3 left-1/12 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#0020D6] font-bold mb-3">
            Academic Programmes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001D4A] tracking-tight leading-tight">
            Programmes Offered
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mt-3 font-normal leading-relaxed">
            Premier three-year undergraduate degree programmes in Computer Applications and Business Administration, affiliated to Utkal University and permanently approved by the Higher Education Department, Govt. of Odisha.
          </p>
        </div>

        {/* Flagship Programmes Grid: 2 Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {programmes.map((prog) => (
            <div
              key={prog.num}
              className="bg-white border-2 border-blue-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#0020D6]/40 transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-extralight text-[#0020D6] group-hover:scale-110 transition-transform origin-left font-serif">
                    {prog.num}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0020D6] border border-blue-200">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#001D4A] group-hover:text-[#0020D6] transition-colors mb-2.5 leading-snug">
                  {prog.title}
                </h3>

                <div className="text-sm sm:text-base font-semibold text-[#0052CC] mb-5 flex items-center gap-2.5">
                  <span>{prog.degree}</span>
                  <span>•</span>
                  <span>{prog.duration}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
                  {prog.desc}
                </p>

                {/* Key Course Highlights */}
                <div className="mb-8 space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="text-xs uppercase tracking-wider text-[#001D4A] font-bold">
                    Curriculum Highlights:
                  </div>
                  {prog.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#0020D6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">Eligibility</span>
                  <span className="text-sm sm:text-base text-slate-800 font-semibold">{prog.eligibility}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenQuery}
                    className="px-5 py-2.5 rounded-xl bg-[#0020D6] hover:bg-[#0018b3] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    Apply for {prog.num === "01" ? "BCA" : "BBA"}
                  </button>

                  <Link
                    href={prog.href}
                    className="w-10 h-10 rounded-full bg-blue-50 group-hover:bg-[#0020D6] text-[#0020D6] group-hover:text-white flex items-center justify-center transition-all shrink-0"
                    aria-label={`Explore ${prog.title}`}
                  >
                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

