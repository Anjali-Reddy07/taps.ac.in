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
    { name: "BCA — Computer Applications", href: "#programmes", desc: "3-Year Degree • Cloud, AI foundations & full-stack development" },
    { name: "BBA — Business Administration", href: "#programmes", desc: "3-Year Degree • Managerial finance, marketing & strategy" },
    { name: "B.Sc (Hons) — Computer Science", href: "#programmes", desc: "3-Year Degree • Algorithmic science & computational theory" },
    { name: "B.Sc (Hons) — Biotechnology", href: "#programmes", desc: "3-Year Degree • Molecular research, genetics & bioprocess" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-xs">
        {/* TOP SUB-NAVBAR: Social Media Icons (Left) & Search Symbol (Right) */}
        <div className="bg-[#F8FAFC] border-b border-blue-100/90 py-1.5 text-xs text-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
            
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
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:text-[#25D366] transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.572 4.183 1.571 5.932l-1.667 6.096 6.273-1.644c1.687.923 3.626 1.446 5.823 1.446 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.896 0-3.663-.538-5.167-1.469l-.371-.228-3.722.976.994-3.627-.25-.397c-1.02-1.62-1.558-3.504-1.558-5.461 0-5.293 4.307-9.6 9.6-9.6 5.293 0 9.6 4.307 9.6 9.6 0 5.293-4.307 9.6-9.6 9.6z"/>
                </svg>
              </a>
            </div>

            {/* Right Corner: Search Icon Symbol & Bar */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search TAPS..."
                  className="pl-7 pr-3 py-0.5 text-[11px] bg-white border border-blue-200 rounded-full focus:outline-none focus:border-[#0020D6] text-[#001D4A] placeholder-slate-400 w-28 sm:w-36 focus:w-48 transition-all"
                />
                <svg className="w-3.5 h-3.5 text-[#0052CC] absolute left-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <nav
          className={`w-full transition-all duration-300 bg-white border-b border-blue-100 ${
            isScrolled ? "py-2 sm:py-2.5 shadow-sm" : "py-3 sm:py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
            
            {/* LEFT: Official Trident Logo */}
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

            {/* RIGHT: NAVIGATION ITEMS MATCHING SCREENSHOT */}
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

              {/* NOTICES */}
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

              {/* ADMISSION */}
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
                className="bg-[#0020D6] hover:bg-[#0018b3] text-white font-semibold text-xs sm:text-[13px] tracking-wide px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-600/25 cursor-pointer ml-1 whitespace-nowrap"
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
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-white text-[#001D4A] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="relative w-44 h-11">
                  <Image
                    src="/asset/logo.png"
                    alt="Trident Academy of Professional Studies"
                    fill
                    className="object-contain object-left"
                    sizes="180px"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 hover:text-[#0020D6]"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="py-4 space-y-3 text-xs font-bold tracking-wider uppercase">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  About
                </Link>
                <Link
                  href="#programmes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  Academics
                </Link>
                <Link
                  href="#notices"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  Notices
                </Link>
                <Link
                  href="#facilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  Facilities
                </Link>
                <Link
                  href="#placements"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  Training &amp; Placement
                </Link>
                <Link
                  href="/admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  Admission
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[#001D4A] hover:text-[#0020D6] border-b border-slate-100"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuery) onOpenQuery();
                }}
                className="w-full bg-[#0020D6] text-white font-bold py-3 rounded-full text-center text-xs tracking-wider uppercase shadow-md"
              >
                Apply Online Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
