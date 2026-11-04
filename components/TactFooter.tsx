"use client";

import Image from "next/image";
import Link from "next/link";

interface TactFooterProps {
  onOpenQuery?: () => void;
}

export default function TactFooter({ onOpenQuery }: TactFooterProps) {
  return (
    <footer className="bg-[#001D4A] text-white relative z-10 border-t border-white/10 overflow-hidden">
      {/* Watermarked Trident Logo in Background matching TACT footer */}
      <div
        className="absolute -right-16 sm:-right-20 md:-right-16 lg:-right-10 -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-32 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] pointer-events-none select-none z-0 opacity-[0.07]"
        aria-hidden="true"
      >
        <Image
          src="/asset/logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-10 sm:pt-16 sm:pb-12">
        
        {/* Main 4-Column Grid matching TACT Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Institutional Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group py-1" aria-label="TAPS Home">
              <div className="bg-white rounded-xl p-3 sm:p-3.5 inline-block shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Academy of Professional Studies"
                  width={280}
                  height={98}
                  className="w-48 sm:w-56 md:w-64 h-auto object-contain block"
                  priority
                />
              </div>
            </Link>

            <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed max-w-md font-normal">
              Trident Academy of Professional Studies (TAPS) is the undisputed No. 1 college under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA). Founded under the Trident Group legacy since 2000.
            </p>

            <div className="pt-2 text-xs sm:text-sm text-sky-300 font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Affiliated to Utkal University • AICTE Approved</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-sky-300 border-b border-white/15 pb-2.5">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-[13px] sm:text-sm text-slate-200">
              <li>
                <Link href="#about" className="hover:text-white transition-colors block">About TAPS</Link>
              </li>
              <li>
                <Link href="#programmes" className="hover:text-white transition-colors block">Programmes Offered</Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-white transition-colors block">Campus Facilities</Link>
              </li>
              <li>
                <Link href="#notices" className="hover:text-white transition-colors block">Notice Board &amp; News</Link>
              </li>
              <li>
                <Link href="#placements" className="hover:text-white transition-colors block">Training &amp; Placements</Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-white transition-colors block">Online Admission Form</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Degree Programmes */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-sky-300 border-b border-white/15 pb-2.5">
              Academics
            </div>
            <ul className="space-y-2.5 text-[13px] sm:text-sm text-slate-200">
              <li>
                <Link href="/admission" className="hover:text-white transition-colors block">BCA — Computer Applications (3 Yrs)</Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-white transition-colors block">BBA — Business Administration (3 Yrs)</Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-white transition-colors block">Academic Regulations &amp; Syllabi</Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-white transition-colors block">Utkal University Regulations</Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-white transition-colors block">Semester Examination Calendar</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-sky-300 border-b border-white/15 pb-2.5">
              Infocity Campus
            </div>
            <div className="space-y-2.5 text-[13px] sm:text-sm text-slate-200 font-normal leading-relaxed">
              <p className="font-semibold text-white">
                Trident Academy of Professional Studies (TAPS)
              </p>
              <p className="text-slate-300">
                F2D, Chandaka Industrial Estate, Infocity, Patia, Bhubaneswar, Odisha — 751024
              </p>
              <p className="pt-1 text-slate-200">
                <strong className="text-white">Admissions Helpline:</strong> +91 63715 12551
              </p>
              <p className="text-slate-200">
                <strong className="text-white">Email:</strong> admissions@taps.ac.in
              </p>

              <div className="pt-3 flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-colors shadow-sm"
                >
                  <span>WhatsApp Desk</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={onOpenQuery}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0020D6] hover:bg-[#0018b3] text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-colors shadow-sm cursor-pointer"
                >
                  <span>Enquiry Form</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-slate-400 gap-3">
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

