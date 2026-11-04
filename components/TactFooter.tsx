"use client";

import Image from "next/image";
import Link from "next/link";

interface TactFooterProps {
  onOpenQuery?: () => void;
}

export default function TactFooter({ onOpenQuery }: TactFooterProps) {
  return (
    <footer className="relative z-10 bg-transparent text-white border-t border-indigo-900/50 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Watermarked Trident Logo in Background */}
      <div
        className="absolute -right-8 sm:-right-12 lg:right-0 -bottom-16 sm:-bottom-20 lg:-bottom-24 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] pointer-events-none select-none z-0 opacity-10"
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
              <div className="bg-white rounded-lg px-2.5 py-1.5 inline-flex items-center shadow-xs border border-indigo-100 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-md">
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

            <p className="text-indigo-100/80 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Trident Academy of Professional Studies (TAPS) is the premier undergraduate institution under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA). Founded under the Trident Group legacy since 2000.
            </p>

            <div className="pt-1 text-xs text-blue-200 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 shadow-xs shadow-cyan-400 animate-pulseGlow" />
              <span>Affiliated to Utkal University • AICTE Approved</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-200 border-b border-indigo-900/60 pb-2 mb-3">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-indigo-200/80">
              {[
                { name: "About TAPS", href: "/about" },
                { name: "Programmes Offered", href: "/programmes" },
                { name: "Campus Facilities", href: "/facilities" },
                { name: "Notice Board & News", href: "/notices" },
                { name: "Placements", href: "/placements" },
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
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-200 border-b border-indigo-900/60 pb-2 mb-3">
              Academics
            </div>
            <ul className="space-y-2 text-xs sm:text-[13px] text-indigo-200/80">
              {[
                { name: "BCA — Computer Applications (3 Yrs)", href: "/programmes" },
                { name: "BBA — Business Administration (3 Yrs)", href: "/programmes" },
                { name: "Academic Regulations & Syllabi", href: "/programmes" },
                { name: "Utkal University Regulations", href: "/about" },
                { name: "Semester Examination Calendar", href: "/notices" },
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
            <div className="text-xs uppercase tracking-widest font-semibold text-blue-200 border-b border-indigo-900/60 pb-2 mb-3">
              Infocity Campus
            </div>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-indigo-200/80 font-normal leading-relaxed">
              <p className="font-semibold text-white tracking-wide">
                Trident Academy of Professional Studies
              </p>
              <p className="text-indigo-200/70">
                F2D, Chandaka Industrial Estate, Infocity, Patia, Bhubaneswar, Odisha — 751024
              </p>

              <div className="pt-3 flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D183B] border border-indigo-800/60 hover:border-purple-400 hover:bg-[#132252] text-white text-xs font-medium tracking-wide transition-all active:scale-95 shadow-xs"
                >
                  <span>WhatsApp Desk</span>
                  <span className="text-cyan-400">↗</span>
                </a>

                <button
                  onClick={onOpenQuery}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-medium tracking-wide transition-all active:scale-95 shadow-xs cursor-pointer"
                >
                  <span>Enquiry Form</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 border-t border-indigo-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-indigo-300/70 gap-3">
          <div>
            © 2026 Trident Academy of Professional Studies (TAPS). All Rights Reserved. Affiliated to Utkal University.
          </div>
          <div className="flex items-center gap-4 text-xs">
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
