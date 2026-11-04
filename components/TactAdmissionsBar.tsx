"use client";

interface TactAdmissionsBarProps {
  onOpenQuery?: () => void;
}

export default function TactAdmissionsBar({ onOpenQuery }: TactAdmissionsBarProps) {
  return (
    <section className="bg-[#0060DF] text-white py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-blue-600/40 shadow-sm relative z-20">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Text matching TACT screenshot */}
        <div className="text-base sm:text-lg font-medium tracking-wide text-center sm:text-left">
          Admissions open for BCA &amp; BBA — begin your journey with TAPS.
        </div>

        {/* Right Button matching TACT screenshot: White pill with "Apply Now →" */}
        <button
          onClick={onOpenQuery}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-[#001D4A] hover:bg-slate-100 text-sm sm:text-base font-bold transition-colors shadow-sm shrink-0 cursor-pointer"
        >
          <span>Apply Now</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </section>
  );
}
