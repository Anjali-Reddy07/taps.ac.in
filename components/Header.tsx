"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onOpenQuery?: () => void;
}

export default function Header({ onOpenQuery }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const academicsList = [
    { name: "BCA — Computer Applications", href: "#programmes", desc: "3-Year Degree • Cloud, AI foundations & full-stack development" },
    { name: "BBA — Business Administration", href: "#programmes", desc: "3-Year Degree • Managerial finance, marketing & strategy" },
    { name: "B.Sc (Hons) — Computer Science", href: "#programmes", desc: "3-Year Degree • Algorithmic science & computational theory" },
    { name: "B.Sc (Hons) — Biotechnology", href: "#programmes", desc: "3-Year Degree • Molecular research, genetics & bioprocess" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-xs border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          
          {/* LEFT: Official Trident Logo from TAPS */}
          <Link href="/" className="flex items-center shrink-0 group py-1" aria-label="TAPS Home">
            <div className="relative w-48 sm:w-56 md:w-64 h-12 sm:h-14 md:h-16 shrink-0 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/asset/logo.png"
                alt="Trident Academy of Professional Studies"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </Link>

          {/* CENTER / RIGHT: Navigation Items with Vertical Dividers */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 h-full">
            <nav aria-label="Main menu" className="flex items-stretch h-full border-r border-[#001D4A]/15">
              <Link
                href="/about"
                className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] hover:text-[#0020D6] hover:bg-slate-50 transition-colors"
              >
                About
              </Link>

              {/* Academics with Dropdown */}
              <div
                className="relative flex items-stretch cursor-pointer group/acad"
                onMouseEnter={() => setActiveDropdown("academics")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center gap-1 text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] group-hover/acad:text-[#0020D6] group-hover/acad:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>Academics</span>
                  <svg className="w-3 h-3 text-slate-500 group-hover/acad:text-[#0020D6] group-hover/acad:translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "academics" && (
                  <div className="absolute top-full left-0 pt-1 w-80 z-50">
                    <div className="bg-white border border-blue-100 rounded-xl p-3 shadow-xl space-y-1 animate-fadeIn">
                      <div className="text-[10px] tracking-wider uppercase font-bold text-[#0052CC] px-2.5 py-1 border-b border-blue-50">
                        Undergraduate Programs
                      </div>
                      {academicsList.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block p-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <div className="text-xs font-bold text-[#001D4A] hover:text-[#0020D6]">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Notices */}
              <Link
                href="#notices"
                className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] hover:text-[#0020D6] hover:bg-slate-50 transition-colors"
              >
                Notices
              </Link>

              {/* Facilities */}
              <Link
                href="#facilities"
                className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] hover:text-[#0020D6] hover:bg-slate-50 transition-colors"
              >
                Facilities
              </Link>

              {/* Training & Placement */}
              <Link
                href="#placements"
                className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] hover:text-[#0020D6] hover:bg-slate-50 transition-colors"
              >
                Training &amp; Placement
              </Link>

              {/* Admission */}
              <Link
                href="/admission"
                className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] hover:text-[#0020D6] hover:bg-slate-50 transition-colors"
              >
                Admission
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="px-2.5 xl:px-3.5 2xl:px-4 flex items-center text-[11px] xl:text-[12px] 2xl:text-[13px] font-bold uppercase whitespace-nowrap border-l border-[#001D4A]/15 text-[#001D4A] hover:text-[#0020D6] hover:bg-slate-50 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* FAR RIGHT: Rectangular Blue Apply Now Button matching TACT */}
            <button
              onClick={onOpenQuery}
              className="px-4 py-2 rounded bg-[#0060DF] hover:bg-[#004dc0] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button & Mobile Apply CTA */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuery}
              className="px-3 py-1.5 rounded bg-[#0060DF] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm"
            >
              Apply Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-[#001D4A] hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
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
                className="w-full bg-[#0060DF] text-white font-bold py-3 rounded text-center text-xs tracking-wider uppercase shadow-md"
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
