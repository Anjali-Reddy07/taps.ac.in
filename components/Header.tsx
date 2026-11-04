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
        {/* TOP SUB-NAVBAR: Social Media Icons (Left) & Search Symbol (Right) */}
        <div className="bg-[#F8FAFC] border-b border-blue-100/90 py-1.5 px-4 sm:px-8 text-xs text-slate-600">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Left Corner: Social Media Icons (Facebook, Instagram, LinkedIn, YouTube, Twitter/X) */}
            <div className="flex items-center gap-2.5 text-slate-500">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-[#0020D6] transition-colors"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-[#0020D6] transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-[#0020D6] transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-[#0020D6] transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-blue-50 hover:text-[#0020D6] transition-colors"
                title="X (Twitter)"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916371512551"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            {/* Right Corner: Quick Links & Search */}
            <div className="flex items-center gap-3">
              <nav aria-label="Top menu" className="hidden lg:flex items-center text-[11px] text-slate-500 font-medium">
                <Link href="/" className="px-2.5 py-0.5 hover:text-[#0020D6] transition-colors border-r border-slate-200">Home</Link>
                <Link href="/admission" className="px-2.5 py-0.5 hover:text-[#0020D6] transition-colors border-r border-slate-200">Alumni</Link>
                <Link href="/contact" className="px-2.5 py-0.5 hover:text-[#0020D6] transition-colors border-r border-slate-200">Grievance</Link>
                <Link href="#about" className="px-2.5 py-0.5 hover:text-[#0020D6] transition-colors border-r border-slate-200">Mandatory Disclosure</Link>
                <Link href="#about" className="px-2.5 py-0.5 hover:text-[#0020D6] transition-colors">AICTE Approvals</Link>
              </nav>

              <span className="hidden lg:inline text-blue-200">|</span>

              {/* Search Icon Symbol & Bar */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search TAPS..."
                  className="pl-7 pr-3 py-0.5 text-[11px] bg-white border border-blue-200 rounded-full focus:outline-none focus:border-[#0020D6] text-[#001D4A] placeholder-slate-400 w-24 sm:w-32 focus:w-40 transition-all"
                />
                <svg className="w-3.5 h-3.5 text-[#0052CC] absolute left-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR (Wrapped in max-w-7xl to bring logo inward towards nav items) */}
        <nav
          className={`w-full transition-all duration-300 bg-white border-b border-blue-100 ${
            isScrolled ? "py-2 sm:py-2.5 shadow-sm" : "py-3 sm:py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
            
            {/* LEFT: BIG COMPLETE TRIDENT LOGO (Shifted inward towards nav items) */}
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

              <Link href="/" className="flex items-center group py-0.5" aria-label="Trident Academy Home">
                <div className="relative w-48 sm:w-56 md:w-64 h-11 sm:h-12 md:h-13 flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/asset/logo.png"
                    alt="Trident Academy of Professional Studies"
                    fill
                    priority
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 190px, 260px"
                  />
                </div>
              </Link>
            </div>

            {/* RIGHT: CLEAN NAVIGATION ITEMS (Notices bar placed right after Academics bar) */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
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

              {/* NOTICES BAR: Positioned directly after Academics Bar */}
              <Link
                href="#notices"
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300"
              >
                Notices
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
                className="relative py-1 text-xs tracking-[0.12em] uppercase font-bold text-[#001D4A] hover:text-[#0020D6] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#0020D6] after:transition-all after:duration-300"
              >
                Admission
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

            {/* Mobile Only Right CTA */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenQuery}
                className="bg-[#0020D6] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-sm"
              >
                Apply Now
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
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
                  Notices
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
                  Admission
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
