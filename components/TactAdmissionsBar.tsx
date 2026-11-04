"use client";

interface TactAdmissionsBarProps {
  onOpenQuery?: () => void;
}

export default function TactAdmissionsBar({ onOpenQuery }: TactAdmissionsBarProps) {
  return (
    <section className="bg-[#0020D6] text-white py-4 sm:py-5 border-y border-blue-700/50 shadow-md relative z-20 overflow-hidden">
      {/* Background Subtle Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-sky-400/10 to-blue-700/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        
        {/* Left: Admissions Info */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>

          <div>
            <div className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              Admissions Open 2026–2027 • BCA, BBA &amp; B.Sc Degree Programs
            </div>
            <div className="text-[11px] sm:text-xs text-blue-100 font-light mt-0.5">
              Permanently affiliated to Utkal University • AICTE Approved • High-package campus placements
            </div>
          </div>
        </div>

        {/* Right: Apply Now Button with Shimmer Border Effect */}
        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={onOpenQuery}
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#0020D6] hover:bg-blue-50 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-black/15 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Apply Online Now</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
