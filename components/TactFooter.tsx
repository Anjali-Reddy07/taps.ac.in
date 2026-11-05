"use client";

import Image from "next/image";
import Link from "next/link";

interface TactFooterProps {
  onOpenQuery?: () => void;
}

export default function TactFooter({ onOpenQuery }: TactFooterProps) {
  return (
    <footer className="relative z-10 bg-black text-white border-t border-zinc-800/90 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12 sm:pt-20 sm:pb-14">
        
        {/* Main 4-Column Grid: Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          
          {/* Column 1: Institutional Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group py-0.5" aria-label="TAPS Home">
              {/* College Logo: Proportional, subtle, max height around 38px to 42px */}
              <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center shadow-sm border border-zinc-700 transition-all duration-300 group-hover:border-zinc-400 group-hover:shadow-md">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Academy of Professional Studies"
                  width={150}
                  height={44}
                  className="h-[38px] sm:h-[40px] md:h-[42px] max-h-[44px] w-auto object-contain block"
                  priority
                />
              </div>
            </Link>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Trident Academy of Professional Studies (TAPS) is the premier undergraduate institution under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA). Founded under the Trident Group legacy since 2000.
            </p>

            <div className="pt-1 text-sm text-zinc-300 font-medium flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400 animate-pulseGlow" />
              <span>Affiliated to Utkal University • AICTE Approved</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-sm sm:text-[15px] uppercase tracking-wider font-bold text-white border-b border-zinc-800 pb-2.5 mb-4">
              Quick Links
            </div>
            <ul className="space-y-3 text-sm sm:text-[15px] text-zinc-300 font-normal">
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
          <div className="lg:col-span-3 space-y-4">
            <div className="text-sm sm:text-[15px] uppercase tracking-wider font-bold text-white border-b border-zinc-800 pb-2.5 mb-4">
              Academics
            </div>
            <ul className="space-y-3 text-sm sm:text-[15px] text-zinc-300 font-normal">
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
          <div className="lg:col-span-3 space-y-4">
            <div className="text-sm sm:text-[15px] uppercase tracking-wider font-bold text-white border-b border-zinc-800 pb-2.5 mb-4">
              Infocity Campus
            </div>
            <div className="space-y-3 text-sm sm:text-[15px] text-zinc-300 font-normal leading-relaxed">
              <p className="font-bold text-base sm:text-lg text-white tracking-wide">
                Trident Academy of Professional Studies
              </p>
              <p className="text-zinc-300">
                F2D, Chandaka Industrial Estate, Infocity, Patia, Bhubaneswar, Odisha — 751024
              </p>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-95 shadow-sm"
                >
                  <span>WhatsApp Desk</span>
                  <span className="text-cyan-400">↗</span>
                </a>

                <button
                  onClick={onOpenQuery}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-95 shadow-sm shadow-blue-500/20 cursor-pointer"
                >
                  <span>Enquiry Form</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-zinc-400 gap-4">
          <div>
            © 2026 Trident Academy of Professional Studies (TAPS). All Rights Reserved. Affiliated to Utkal University.
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
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
