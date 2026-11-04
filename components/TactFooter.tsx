"use client";

import Image from "next/image";
import Link from "next/link";

interface TactFooterProps {
  onOpenQuery?: () => void;
}

export default function TactFooter({ onOpenQuery }: TactFooterProps) {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white border-t border-zinc-800 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Watermarked Trident Logo in Background */}
      <div
        className="absolute -right-8 sm:-right-12 lg:right-0 -bottom-16 sm:-bottom-20 lg:-bottom-24 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] pointer-events-none select-none z-0 opacity-15"
        aria-hidden="true"
      >
        <Image
          src="/asset/logo.png"
          alt=""
          fill
          className="object-contain filter grayscale invert contrast-125 brightness-150"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-10 sm:pt-16 sm:pb-12">
        
        {/* Main 4-Column Grid: Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Institutional Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group py-0.5" aria-label="TAPS Home">
              {/* College Logo: Proportional, subtle, max height around 36px to 42px */}
              <div className="bg-white rounded-lg px-2.5 py-1.5 inline-flex items-center shadow-xs border border-white/20 transition-all duration-300 group-hover:border-white/50 group-hover:shadow-md">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Academy of Professional Studies"
                  width={140}
                  height={42}
                  className="h-[36px] sm:h-[38px] md:h-[40px] max-h-[42px] w-auto object-contain block"
                  priority
                />
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Trident Academy of Professional Studies (TAPS) is the premier undergraduate institution under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA). Founded under the Trident Group legacy since 2000.
            </p>

            <div className="pt-1 text-xs text-zinc-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400 animate-pulseGlow" />
              <span>Affiliated to Utkal University • AICTE Approved</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-zinc-300 border-b border-zinc-800 pb-2 mb-3">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-zinc-400">
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
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-zinc-300 border-b border-zinc-800 pb-2 mb-3">
              Academics
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-zinc-400">
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
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Infocity Campus */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-zinc-300 border-b border-zinc-800 pb-2 mb-3">
              Infocity Campus
            </div>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed">
              <p className="font-semibold text-white tracking-wide">
                Trident Academy of Professional Studies
              </p>
              <p className="text-zinc-400">
                F2D, Chandaka Industrial Estate, Infocity, Patia, Bhubaneswar, Odisha — 751024
              </p>

              <div className="pt-3 flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 text-white text-xs font-medium tracking-wide transition-all active:scale-95 shadow-xs"
                >
                  <span>WhatsApp Desk</span>
                  <span className="text-zinc-400">↗</span>
                </a>

                <button
                  onClick={onOpenQuery}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 text-white text-xs font-medium tracking-wide transition-all active:scale-95 shadow-xs cursor-pointer"
                >
                  <span>Enquiry Form</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance with Clean Typography */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <div>
            © 2026 Trident Academy of Professional Studies (TAPS). All Rights Reserved. Affiliated to Utkal University.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="#about" className="hover:text-zinc-300 transition-colors">Terms of Use</Link>
            <span>•</span>
            <Link href="#about" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#about" className="hover:text-zinc-300 transition-colors">Mandatory Disclosures</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
