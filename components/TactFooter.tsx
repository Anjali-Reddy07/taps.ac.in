"use client";

import Image from "next/image";
import Link from "next/link";

interface TactFooterProps {
  onOpenQuery?: () => void;
}

export default function TactFooter({ onOpenQuery }: TactFooterProps) {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white border-t border-zinc-700/80 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Watermarked Trident Logo in Background - Made Clearly Visible with higher opacity & inverted brightness */}
      <div
        className="absolute -right-10 sm:-right-12 md:-right-8 lg:right-0 -bottom-16 sm:-bottom-20 md:-bottom-24 lg:-bottom-28 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[680px] lg:h-[680px] pointer-events-none select-none z-0 opacity-20 transition-opacity duration-700"
        aria-hidden="true"
      >
        <Image
          src="/asset/logo.png"
          alt=""
          fill
          className="object-contain filter grayscale invert contrast-150 brightness-150"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-10 sm:pt-16 sm:pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Institutional Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group py-1" aria-label="TAPS Home">
              {/* Reduced and compact logo badge */}
              <div className="bg-white rounded-lg p-2 sm:p-2.5 inline-block shadow-md border border-white/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Academy of Professional Studies"
                  width={150}
                  height={50}
                  className="w-24 sm:w-28 md:w-30 h-auto object-contain block"
                  priority
                />
              </div>
            </Link>

            <p className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed max-w-md font-normal">
              Trident Academy of Professional Studies (TAPS) is the undisputed No. 1 college under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA). Founded under the Trident Group legacy since 2000.
            </p>

            <div className="pt-2 text-xs sm:text-sm text-zinc-200 font-semibold flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400 animate-pulseGlow" />
              <span className="tracking-wide">Affiliated to Utkal University • AICTE Approved</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-sm sm:text-base font-serif uppercase tracking-[0.18em] font-bold text-white border-b border-zinc-700/80 pb-2.5 flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300">
              {[
                { name: "About TAPS", href: "#about" },
                { name: "Programmes Offered", href: "#programmes" },
                { name: "Campus Facilities", href: "#facilities" },
                { name: "Notice Board & News", href: "#notices" },
                { name: "Training & Placements", href: "#placements" },
                { name: "Online Admission Form", href: "/admission" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1.5 text-zinc-300 hover:text-white transition-all duration-200 hover:translate-x-1.5"
                  >
                    <span className="text-zinc-500 group-hover:text-white transition-colors text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Degree Programmes */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-sm sm:text-base font-serif uppercase tracking-[0.18em] font-bold text-white border-b border-zinc-700/80 pb-2.5 flex items-center gap-2">
              <span>Academics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300">
              {[
                { name: "BCA — Computer Applications (3 Yrs)", href: "/admission" },
                { name: "BBA — Business Administration (3 Yrs)", href: "/admission" },
                { name: "Academic Regulations & Syllabi", href: "/admission" },
                { name: "Utkal University Regulations", href: "/admission" },
                { name: "Semester Examination Calendar", href: "/admission" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1.5 text-zinc-300 hover:text-white transition-all duration-200 hover:translate-x-1.5"
                  >
                    <span className="text-zinc-500 group-hover:text-white transition-colors text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info - Helpline and Email removed */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-sm sm:text-base font-serif uppercase tracking-[0.18em] font-bold text-white border-b border-zinc-700/80 pb-2.5 flex items-center gap-2">
              <span>Infocity Campus</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            <div className="space-y-3 text-sm sm:text-[15px] text-zinc-300 font-normal leading-relaxed">
              <p className="font-semibold text-white tracking-wide text-base">
                Trident Academy of Professional Studies (TAPS)
              </p>
              <p className="text-zinc-300">
                F2D, Chandaka Industrial Estate, Infocity, Patia, Bhubaneswar, Odisha — 751024
              </p>

              <div className="pt-3 flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black border border-zinc-600 hover:border-white hover:bg-zinc-900 text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 hover-lift shadow-md"
                >
                  <span>WhatsApp Desk</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={onOpenQuery}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black border border-zinc-600 hover:border-white hover:bg-zinc-900 text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 hover-lift shadow-md cursor-pointer"
                >
                  <span>Enquiry Form</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-zinc-400 gap-3">
          <div>
            © 2026 Trident Academy of Professional Studies (TAPS). All Rights Reserved. Affiliated to Utkal University.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#about" className="hover:text-white transition-colors">Terms of Use</Link>
            <span>•</span>
            <Link href="#about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#about" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
