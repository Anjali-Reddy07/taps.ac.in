"use client";

interface TactAdmissionsBarProps {
  onOpenQuery?: () => void;
}

export default function TactAdmissionsBar({ onOpenQuery }: TactAdmissionsBarProps) {
  return (
    <section className="bg-transparent text-white py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/40 shadow-sm relative z-20 overflow-hidden">
      {/* Animated vibrant colorful gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-500 via-purple-500 to-violet-400 animate-gradient-beam" />

      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Text */}
        <div className="text-base sm:text-lg font-medium tracking-wide text-center sm:text-left text-blue-50 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulseGlow" />
          <span>Admissions open for BCA &amp; BBA — begin your journey with TAPS.</span>
        </div>

        {/* Right Button: White Blue Lavender Gradient Button */}
        <button
          onClick={onOpenQuery}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border border-blue-300/30 text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-blue-600/30 hover-lift shrink-0 cursor-pointer"
        >
          <span>Apply Now</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </section>
  );
}
