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
        {/* 1. TOP CRISP WHITE NAVIGATION BAR */}
        <nav
          className={`w-full transition-all duration-300 px-4 sm:px-8 lg:px-12 flex items-center justify-between border-b border-blue-100 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md py-2 sm:py-2.5 shadow-sm"
              : "bg-white py-3 sm:py-3.5"
          }`}
        >
          {/* LEFT: BIG, PROMINENT TRIDENT COMPLETE LOGO WITH ALL TEXT */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#001D4A] hover:text-[#0020D6] p-1 -ml-1 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* BIG PROPERLY VISIBLE COMPLETE LOGO (EMBLEM + TEXT) */}
            <Link href="/" className="flex items-center group py-0.5" aria-label="Trident Academy Home">
              <div className="relative w-48 sm:w-60 md:w-72 h-11 sm:h-13 md:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/asset/logo.png"
                  alt="Trident Academy of Professional Studies"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 200px, 300px"
                />
              </div>
            </Link>
          </div>

          {/* RIGHT: CLEAN SINGLE-ROW NAVIGATION (ACTIVITIES & ERP PORTAL REMOVED) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
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
                <div className="absolute top-full left-0 pt-2 w-80 z-50">
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

            {/* Notices Tab */}
            <Link
              href="#notices"
              className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300 flex items-center gap-1.5"
            >
              <span>Notices</span>
              <span className="text-[9px] bg-blue-50 text-[#0020D6] border border-blue-200 px-1.5 py-0.2 rounded-full font-bold">
                NEW
              </span>
            </Link>

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
              className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300 flex items-center gap-1.5"
            >
              <span>Admission</span>
              <span className="text-[9px] tracking-wider font-bold bg-[#0020D6] text-white px-2 py-0.5 rounded-full shadow-xs">
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
              className="bg-[#0020D6] hover:bg-[#0018b3] text-white font-semibold text-xs sm:text-[13px] tracking-wide px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-600/25 cursor-pointer ml-1 whitespace-nowrap"
            >
              Apply Now
            </button>
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

        {/* 2. RUNNING BLUE MARQUEE AT THE BOTTOM OF THE NAVBAR */}
        <div className="bg-[#0020D6] text-white overflow-hidden py-1.5 border-b border-blue-700/30 relative">
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
                <div className="relative w-44 h-10">
                  <Image
                    src="/asset/logo.png"
                    alt="Trident Academy Logo"
                    fill
                    className="object-contain object-left"
                    sizes="180px"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#0020D6] transition-colors"
                >
                  ✕
                </button>
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
                  href="#notices"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-blue-50"
                >
                  Notices (2026 Updates)
                </Link>

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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
