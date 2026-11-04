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
    <section id="placements" className="relative py-16 sm:py-24 bg-black text-white border-y border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fadeInUp">
          <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-300 font-bold mb-3 bg-zinc-900 border border-zinc-700 inline-block px-3.5 py-1 rounded-full">
            Placements &amp; Careers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4 text-white">
            Where Our Students Go Next
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A dedicated Training &amp; Placement Cell, year-round industry immersion, and alumni mentoring prepare every TAPS BCA and BBA graduate for competitive campus drives.
          </p>
        </div>

        {/* 3 Large Stat Counters with subtle floating effect */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto mb-14 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl animate-float">
          {stats.map((st) => (
            <div key={st.label} className="text-center py-4 sm:py-2 px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-1 font-serif">
                {st.value}
              </div>
              <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-200 mb-1">
                {st.label}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-normal">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Logos - Smooth Continuous Marquee Animation */}
        <div className="mb-14 overflow-hidden relative">
          <div className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6 font-semibold">
            Premier Corporate Recruiting Partners
          </div>

          {/* Fade gradients on edges */}
          <div className="absolute left-0 top-10 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-10 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Animated Marquee Strip Row 1 */}
          <div className="flex overflow-hidden py-2">
            <div className="animate-marquee flex gap-3 sm:gap-4 shrink-0">
              {[...recruiters, ...recruiters].map((rec, idx) => (
                <div
                  key={`${rec}-${idx}`}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm sm:text-[15px] font-medium text-zinc-300 hover:bg-zinc-800 hover:border-zinc-400 hover:text-white transition-all duration-300 shadow-xs hover-lift whitespace-nowrap cursor-default"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>

          {/* Animated Marquee Strip Row 2 (Reverse direction) */}
          <div className="flex overflow-hidden py-2 mt-2">
            <div className="animate-marquee-reverse flex gap-3 sm:gap-4 shrink-0">
              {[...recruiters.slice().reverse(), ...recruiters.slice().reverse()].map((rec, idx) => (
                <div
                  key={`rev-${rec}-${idx}`}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800/90 text-sm sm:text-[15px] font-medium text-zinc-300 hover:bg-zinc-800 hover:border-zinc-400 hover:text-white transition-all duration-300 shadow-xs hover-lift whitespace-nowrap cursor-default"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Black Buttons */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admission"
              className="px-8 py-3.5 rounded-xl bg-black border border-zinc-700 hover:border-zinc-300 hover:bg-zinc-900 text-white text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover-lift"
            >
              Placement Details &amp; Records
            </Link>

            <button
              onClick={onOpenQuery}
              className="px-7 py-3.5 rounded-xl bg-black border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 text-zinc-300 hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer hover-lift"
            >
              Recruiter Inquiry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
