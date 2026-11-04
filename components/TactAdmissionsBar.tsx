"use client";

interface TactAdmissionsBarProps {
  onOpenQuery?: () => void;
}

export default function TactAdmissionsBar({ onOpenQuery }: TactAdmissionsBarProps) {
  return (
    <section className="bg-transparent text-white py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-zinc-800 shadow-sm relative z-20 overflow-hidden">
      {/* Animated subtle shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] animate-shimmer" />

      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Text */}
        <div className="text-base sm:text-lg font-medium tracking-wide text-center sm:text-left text-zinc-100 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400 animate-pulseGlow" />
          <span>Admissions open for BCA &amp; BBA — begin your journey with TAPS.</span>
        </div>

        {/* Right Button: Signature Black Button with sleek border */}
        <button
          onClick={onOpenQuery}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white border border-zinc-700 hover:border-zinc-300 hover:bg-zinc-900 text-sm sm:text-base font-bold transition-all duration-300 shadow-md hover-lift shrink-0 cursor-pointer"
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
