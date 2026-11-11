"use client";

import Image from "next/image";
import Link from "next/link";
import SpeedometerCounter from "@/components/SpeedometerCounter";

interface TactPlacementsProps {
  onOpenQuery?: () => void;
}

export default function TactPlacements({ onOpenQuery }: TactPlacementsProps) {
  const stats = [
    { value: "138+", label: "Recruiters (2026)", sub: "Active Corporate Placement Network" },
    { value: "260", label: "Recruiters (2025)", sub: "Peak Annual Placement Drives" },
    { value: "112", label: "Recruiters (2024)", sub: "Verified Campus Recruiters" },
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
    <section id="placements" className="relative py-16 sm:py-24 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-200 mb-3 bg-blue-900/60 border border-blue-400/40 px-3.5 py-1 rounded-full shadow-2xs">
            Placements &amp; Careers
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-4 text-white">
            Where Our Students Go Next
          </h2>
          <p className="text-sm sm:text-base text-indigo-100/90 font-normal leading-relaxed">
            A dedicated Training &amp; Placement Cell, year-round industry immersion, and alumni mentoring prepare every TAPS BCA and BBA graduate for competitive campus drives.
          </p>
        </div>

        {/* Cardless Holographic 3-Stat Stream (No rigid box border) */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-indigo-800/40 relative z-10 py-6">
            {stats.map((st, idx) => (
              <div key={st.label} className="text-center py-4 sm:py-2 px-6 group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-1 font-serif bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <SpeedometerCounter
                    value={st.value}
                    duration={2.0}
                    delay={0.1 + idx * 0.15}
                    maxBlur={8}
                    className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                    suffixClassName="text-cyan-300"
                  />
                </div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-blue-100 mb-1">
                  {st.label}
                </div>
                <div className="text-xs sm:text-sm text-indigo-200/80 font-normal">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cardless Open Training & Placement Tower Spotlight */}
        <div className="max-w-4xl mx-auto mb-20 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-purple-600/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />
          <div className="relative z-10 bg-[#0D183B]/60 backdrop-blur-md border border-indigo-900/60 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Industry-Academic Synergy
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Dedicated Training &amp; Placement Cell
              </h3>
              <p className="text-sm sm:text-base text-indigo-200/90 leading-relaxed font-light mb-6">
                Operating across the 1st, 4th, and 5th floors of Block-5 alongside the Center for Business Analytics and Sustainability Research, our T&amp;P wing coordinates round-the-year mock technical interviews, aptitude prep, and direct on-campus hiring drives with over 100 corporate recruiters.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="pl-4 py-2 border-l-2 border-cyan-400/60 bg-white/5 rounded-r-xl">
                  <div className="text-xs sm:text-sm font-bold text-white">Center for Business Analytics</div>
                  <div className="text-xs text-indigo-300">Live Corporate Projects &amp; Modeling</div>
                </div>
                <div className="pl-4 py-2 border-l-2 border-indigo-400/60 bg-white/5 rounded-r-xl">
                  <div className="text-xs sm:text-sm font-bold text-white">Tier-1 IT Pipeline</div>
                  <div className="text-xs text-indigo-300">TCS, Infosys, Wipro &amp; Capgemini</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-900/60 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-300/80">
              <span>Trident Placement Consortium • Block-5 Corporate Hub</span>
              <span className="font-mono text-cyan-300 font-bold text-sm">138+ Visiting Recruiters</span>
            </div>
          </div>
        </div>

        {/* Live Corporate Recruitment Lifecycle Showcase */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              On-Campus Recruitment Infrastructure
            </div>
            <h3 className="text-xl sm:text-3xl font-light text-white tracking-tight">
              From Pre-Placement Talk to Final Offer Rollout
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Aptitude & Screening",
                desc: "High-capacity computer-based examination halls with invigilation for preliminary screening tests.",
                img: "/images/drive_third/Placement_Trident-Placement-2.jpg",
                badge: "Phase 1: Online Test",
              },
              {
                step: "02",
                title: "Executive GD Chambers",
                desc: "Acoustically insulated discussion suites for corporate case study debates and group evaluation.",
                img: "/images/drive_third/Placement_GD-Halls.jpg",
                badge: "Phase 2: Group Discussion",
              },
              {
                step: "03",
                title: "Corporate Recruitment Delegates",
                desc: "Distinguished corporate HR leads, talent delegates, and technical panels visiting campus.",
                img: "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
                badge: "Phase 3: Executive Interactions",
              },
              {
                step: "04",
                title: "Tier-1 Recruiter Network",
                desc: "Direct corporate tie-ups with Fortune 500 IT giants, consulting firms, and premier financial institutions.",
                img: "/images/drive_third/Placement_Trident-Placement-1.jpeg",
                badge: "Phase 4: Final Offers",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-lg group-hover:scale-102 transition-transform duration-500">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132E] via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600/90 text-white backdrop-blur-xs shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-cyan-300 font-bold mb-1">
                      STEP {item.step}
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight mb-1.5 group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-indigo-200/80 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Logos - Smooth Continuous Marquee Animation */}
        <div className="mb-14 overflow-hidden relative">
          <div className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-indigo-300 mb-6 font-semibold">
            Premier Corporate Recruiting Partners
          </div>

          {/* Fade gradients on edges */}
          <div className="absolute left-0 top-10 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#070D21] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-10 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#070D21] to-transparent z-10 pointer-events-none" />

          {/* Animated Marquee Strip Row 1 */}
          <div className="flex overflow-hidden py-2">
            <div className="animate-marquee flex gap-3 sm:gap-4 shrink-0">
              {[...recruiters, ...recruiters].map((rec, idx) => (
                <div
                  key={`${rec}-${idx}`}
                  className="px-5 py-2.5 rounded-xl bg-[#0D183B] border border-indigo-900/70 text-sm sm:text-[15px] font-medium text-indigo-100 hover:bg-[#132252] hover:border-purple-400 hover:text-white transition-all duration-300 shadow-xs hover-lift whitespace-nowrap cursor-default"
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
                  className="px-5 py-2.5 rounded-xl bg-[#0D183B]/90 border border-indigo-900/70 text-sm sm:text-[15px] font-medium text-indigo-100 hover:bg-[#132252] hover:border-purple-400 hover:text-white transition-all duration-300 shadow-xs hover-lift whitespace-nowrap cursor-default"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Blue/Lavender Buttons */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admission"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-blue-500/30 hover-lift active:scale-95"
            >
              Placement Details &amp; Records
            </Link>

            <button
              onClick={onOpenQuery}
              className="px-7 py-3.5 rounded-xl bg-[#0B132E] border border-indigo-700/60 hover:border-indigo-400 hover:bg-[#132048] text-indigo-100 hover:text-white text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer hover-lift active:scale-95"
            >
              Recruiter Inquiry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
