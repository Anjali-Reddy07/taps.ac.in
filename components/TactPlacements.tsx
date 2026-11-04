"use client";

import Link from "next/link";

interface TactPlacementsProps {
  onOpenQuery?: () => void;
}

export default function TactPlacements({ onOpenQuery }: TactPlacementsProps) {
  const stats = [
    { value: "100+", label: "Recruiters in 2026", sub: "Tier-1 IT & Corporate Partners" },
    { value: "95%+", label: "Placement Rate", sub: "For Eligible Final-Year Candidates" },
    { value: "2,500+", label: "Campus Placements", sub: "Graduates Placed in Past 5 Years" },
  ];

  const recruiters = [
    "Tata Consultancy Services",
    "Infosys",
    "Wipro",
    "Capgemini",
    "Cognizant",
    "Tech Mahindra",
    "Deloitte",
    "Amazon Web Services",
    "Genpact",
    "HCL Technologies",
    "ICICI Bank",
    "Accenture",
  ];

  return (
    <section id="placements" className="relative py-16 sm:py-24 bg-[#001D4A] text-white overflow-hidden">
      {/* Background Radial Light Accents matching TACT Section 6 */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0020D6]/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-sky-300 font-bold mb-3">
            Placements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4">
            Where Our Students Go Next
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A dedicated Training &amp; Placement Cell, year-round industry immersion, and alumni mentoring prepare every TAPS graduate for competitive campus drives.
          </p>
        </div>

        {/* 3 Large Stat Counters matching TACT Section 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto mb-12 sm:mb-16 divide-y sm:divide-y-0 sm:divide-x divide-white/15 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          {stats.map((st) => (
            <div key={st.label} className="text-center py-4 sm:py-2 px-4">
              <div className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-1 font-serif">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-300 mb-1">
                {st.label}
              </div>
              <div className="text-[11px] text-slate-400 font-light">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Logos / Marquee Banner */}
        <div className="mb-12">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 mb-6 font-semibold">
            Premier Corporate Recruiting Partners
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {recruiters.map((rec) => (
              <div
                key={rec}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 hover:bg-[#0020D6] hover:border-blue-400 hover:text-white transition-all shadow-xs"
              >
                {rec}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/admission"
              className="px-8 py-3 rounded-lg bg-[#0020D6] hover:bg-[#0018b3] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-900/50 hover:scale-105 active:scale-95"
            >
              Placement Details &amp; Records
            </Link>

            <button
              onClick={onOpenQuery}
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Recruiter Inquiry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
