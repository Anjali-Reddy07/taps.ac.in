"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onOpenQuery?: () => void;
}

export default function Header({ onOpenQuery }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [portalModalOpen, setPortalModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const academicsList = [
    { name: "BCA — Computer Applications", href: "/admission", desc: "3-Year Degree • Cloud, AI foundations & full-stack development" },
    { name: "BBA — Business Administration", href: "/admission", desc: "3-Year Degree • Managerial finance, marketing & strategy" },
    { name: "B.Sc (Hons) — Computer Science", href: "/admission", desc: "3-Year Degree • Algorithmic science & computational theory" },
    { name: "B.Sc (Hons) — Biotechnology", href: "/admission", desc: "3-Year Degree • Molecular research, genetics & bioprocess" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-xs">
        {/* SLIM ROYAL BLUE ANNOUNCEMENT MARQUEE */}
        <div className="bg-[#0020D6] text-white overflow-hidden py-1.5 relative">
          <div className="animate-marquee whitespace-nowrap text-[11px] sm:text-xs tracking-[0.12em] uppercase font-sans font-medium flex items-center">
            <span className="mx-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              Admissions Open 2026–2027 • BCA &amp; BBA Programs • Utkal University Affiliated
            </span>
            <span className="mx-6 text-white/50">✦</span>
            <span className="mx-6">
              100% Placement Assistance with Tier-1 Tech Recruiters
            </span>
            <span className="mx-6 text-white/50">✦</span>
            <span className="mx-6">
              Merit Scholarships for High-Performing Intermediate Scholars
            </span>
            <span className="mx-6 text-white/50">✦</span>
            <span className="mx-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              Admissions Open 2026–2027 • BCA &amp; BBA Programs • Utkal University Affiliated
            </span>
            <span className="mx-6 text-white/50">✦</span>
            <span className="mx-6">
              100% Placement Assistance with Tier-1 Tech Recruiters
            </span>
          </div>
        </div>

        {/* CRISP WHITE NAVIGATION BAR */}
        <nav
          className={`w-full transition-all duration-300 px-6 sm:px-10 lg:px-14 flex items-center justify-between border-b border-blue-100 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md py-2.5 shadow-sm"
              : "bg-white py-3"
          }`}
        >
          {/* LEFT: ONLY TRIDENT LOGO (Without any other text) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#001D4A] hover:text-[#0020D6] p-1 -ml-1 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* ONLY LOGO WITHOUT ANY TEXT */}
            <Link href="/" className="flex items-center group py-0.5" aria-label="Trident Academy Home">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Logo"
                  width={56}
                  height={56}
                  sizes="56px"
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* RIGHT CORNER: TWO-TIER STACKED NAVIGATION */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-1.5 py-0.5">
            
            {/* TOP ROW: Activities Bar & Notices Bar (+ Student/ERP Portal) */}
            <div className="flex items-center gap-5 text-[11px] font-sans tracking-wider uppercase font-semibold text-slate-500 pb-1.5 border-b border-blue-100/70">
              <Link
                href="#activities"
                className="flex items-center gap-1.5 hover:text-[#0020D6] transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                <span>Activities</span>
              </Link>

              <span className="text-blue-200">/</span>

              <Link
                href="#notices"
                className="flex items-center gap-1.5 hover:text-[#0020D6] transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0020D6] animate-pulse" />
                <span>Notices</span>
                <span className="text-[9px] bg-blue-50 text-[#0020D6] border border-blue-200 px-1.5 py-0.5 rounded-full font-bold">
                  NEW
                </span>
              </Link>

              <span className="text-blue-200">/</span>

              <button
                onClick={() => setPortalModalOpen(true)}
                className="flex items-center gap-1 hover:text-[#0020D6] transition-colors cursor-pointer"
                title="Student & Faculty ERP Login"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>ERP Portal Login</span>
              </button>
            </div>

            {/* BOTTOM ROW: Under that another navbar tabs: About, Academics, Facilities, Training & Placement, Admission, Contact */}
            <div className="flex items-center gap-6 xl:gap-7 pt-0.5">
              <Link
                href="/about"
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300"
              >
                About
              </Link>

              {/* Academics Dropdown */}
              <div
                className="relative py-1 cursor-pointer group"
                onMouseEnter={() => setActiveDropdown("academics")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300">
                  <span>Academics</span>
                  <svg className="w-3 h-3 text-[#0052CC] group-hover:text-[#0020D6] group-hover:translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "academics" && (
                  <div className="absolute top-full right-0 pt-2 w-80 z-50">
                    <div className="bg-white border border-blue-100 rounded-2xl p-4 shadow-[0_16px_36px_rgba(0,32,214,0.1)] space-y-1.5 animate-fadeIn">
                      <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#0052CC] px-3 pt-1 pb-1 border-b border-blue-50">
                        Degree Programs
                      </div>
                      {academicsList.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block p-2.5 rounded-xl hover:bg-blue-50/70 transition-all group/item"
                        >
                          <div className="text-xs font-bold text-[#001D4A] group-hover/item:text-[#0020D6] group-hover/item:translate-x-0.5 transition-all">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="#facilities"
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300"
              >
                Facilities
              </Link>

              <Link
                href="#placements"
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300 whitespace-nowrap"
              >
                Training &amp; Placement
              </Link>

              <Link
                href="/admission"
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300"
              >
                <span>Admission</span>
                <span className="text-[9px] tracking-wider font-bold bg-[#0020D6] text-white px-2 py-0.5 rounded-full shadow-xs ml-1.5">
                  2026–27
                </span>
              </Link>

              <Link
                href="/contact"
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300"
              >
                Contact
              </Link>

              {/* Apply Now Pill CTA Button */}
              <button
                onClick={onOpenQuery}
                className="bg-[#0020D6] hover:bg-[#0018b3] text-white font-semibold text-xs sm:text-[13px] tracking-wide px-5 py-2 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-600/25 cursor-pointer ml-1 whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>

          </div>

          {/* MOBILE ONLY RIGHT CTA */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuery}
              className="bg-[#0020D6] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-sm"
            >
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER IN WHITE & BLUE THEME */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-[#001D4A]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-white border-r border-blue-100 text-[#001D4A] h-full shadow-2xl flex flex-col justify-between p-7 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-blue-100 pb-5">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Logo"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-contain w-10 h-10"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#0020D6] transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Quick Utility Strip */}
              <div className="flex items-center gap-3 pt-4 pb-2 border-b border-blue-50 text-xs font-bold text-[#0020D6]">
                <Link
                  href="#activities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200"
                >
                  Activities
                </Link>
                <Link
                  href="#notices"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200"
                >
                  Notices
                </Link>
              </div>

              {/* Mobile Nav Links */}
              <div className="py-4 space-y-3.5 text-xs font-bold tracking-wider uppercase">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-blue-50"
                >
                  About
                </Link>

                <div className="py-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#0052CC] uppercase block mb-2">
                    Academics
                  </span>
                  <div className="space-y-2 normal-case pl-2 font-medium">
                    <Link
                      href="/admission"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-slate-700 hover:text-[#0020D6]"
                    >
                      BCA — Computer Applications
                    </Link>
                    <Link
                      href="/admission"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-slate-700 hover:text-[#0020D6]"
                    >
                      BBA — Business Administration
                    </Link>
                    <Link
                      href="/admission"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-slate-700 hover:text-[#0020D6]"
                    >
                      B.Sc (Biotechnology &amp; CS)
                    </Link>
                  </div>
                </div>

                <Link
                  href="#facilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-blue-50"
                >
                  Facilities
                </Link>

                <Link
                  href="#placements"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-blue-50"
                >
                  Training &amp; Placement
                </Link>

                <Link
                  href="/admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-blue-50"
                >
                  Admission (2026–27)
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-blue-50"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuery) onOpenQuery();
                }}
                className="w-full bg-[#0020D6] text-white font-bold py-3 rounded-full text-center text-xs tracking-wide shadow-md shadow-blue-600/20"
              >
                Apply for Admission 2026–27
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPortalModalOpen(true);
                }}
                className="w-full bg-blue-50 border border-blue-200 text-[#0020D6] font-bold py-2.5 rounded-full text-center text-xs"
              >
                Student &amp; Faculty ERP Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STUDENT & FACULTY ERP MODAL (WHITE & BLUE) */}
      {portalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#001D4A]/50 backdrop-blur-xs"
            onClick={() => setPortalModalOpen(false)}
          />
          <div className="relative bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[0_24px_60px_rgba(0,32,214,0.12)] text-[#001D4A] z-10 animate-fadeIn">
            <div className="flex items-center justify-between pb-5 border-b border-blue-100">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0052CC] uppercase block mb-1">
                  Institutional Portal
                </span>
                <h3 className="font-bold text-base sm:text-lg text-[#001D4A]">
                  Trident ERP Access
                </h3>
              </div>
              <button
                onClick={() => setPortalModalOpen(false)}
                className="w-8 h-8 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center text-slate-500 hover:text-[#0020D6] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#0052CC] mb-1.5">
                  Registration / Student Roll ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. 23BCA042"
                  className="w-full bg-slate-50 border border-blue-100 rounded-xl px-3.5 py-2.5 text-xs text-[#001D4A] focus:outline-none focus:border-[#0020D6] focus:bg-white placeholder-slate-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider uppercase text-[#0052CC] mb-1.5">
                  Portal Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-blue-100 rounded-xl px-3.5 py-2.5 text-xs text-[#001D4A] focus:outline-none focus:border-[#0020D6] focus:bg-white placeholder-slate-400"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-blue-200 text-[#0020D6] focus:ring-0" />
                  <span className="text-[11px]">Keep signed in</span>
                </label>
                <a href="#" className="text-[11px] underline underline-offset-2 text-[#0020D6] hover:text-[#0018b3]">Forgot details?</a>
              </div>
              <button
                type="button"
                className="w-full bg-[#0020D6] hover:bg-[#0018b3] text-white font-bold py-3 rounded-full text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-600/25 cursor-pointer mt-2"
              >
                Authenticate &amp; Enter
              </button>
            </div>

            <p className="text-center text-[11px] text-slate-500 border-t border-blue-100 pt-4">
              Seeking new academic admission?{" "}
              <button
                onClick={() => {
                  setPortalModalOpen(false);
                  if (onOpenQuery) onOpenQuery();
                }}
                className="text-[#0020D6] font-bold underline underline-offset-2"
              >
                Submit Application
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
