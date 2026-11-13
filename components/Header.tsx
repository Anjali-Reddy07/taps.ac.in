"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
  onOpenQuery?: () => void;
}

export default function Header({ onOpenQuery }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/notices?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "ACADEMICS", href: "/programmes" },
    { label: "FACILITIES", href: "/facilities" },
    { label: "PLACEMENTS", href: "/placements" },
    { label: "NOTICES", href: "/notices" },
    { label: "ADMISSION", href: "/admission" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* FIXED PERMANENT DUAL-TIER NAVBAR MATCHING DESIGN SPECIFICATION */}
      <header className="fixed top-0 inset-x-0 z-50 w-full bg-white/98 backdrop-blur-md border-b border-zinc-200/90 shadow-2xs">
        
        {/* ===================================================================== */}
        {/* TOP UTILITY BAR: Social Icons (Left) & Search Pill (Right) */}
        {/* ===================================================================== */}
        <div className="bg-white border-b border-zinc-100 py-1.5 text-xs text-zinc-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Left: 6 Social Media Icons */}
            <div className="flex items-center gap-2 sm:gap-3 text-zinc-600">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-blue-600 transition-colors"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-pink-600 transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-blue-700 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-red-600 transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-black transition-colors"
                title="X (Twitter)"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Globe / Web */}
              <a
                href="https://taps.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:text-blue-600 transition-colors"
                title="Official Portal"
                aria-label="Official Portal"
              >
                <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>

            {/* Right: Search Input Pill */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search TAPS..."
                className="pl-7 pr-3 py-0.5 text-[11px] bg-white border border-zinc-300 rounded-full focus:outline-none focus:border-blue-600 text-zinc-800 placeholder-zinc-400 w-32 sm:w-44 transition-all shadow-2xs"
              />
              <svg
                className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>

          </div>
        </div>

        {/* ===================================================================== */}
        {/* MAIN NAVIGATION BAR: Logo | Uppercase Nav Links | Apply Now Pill */}
        {/* ===================================================================== */}
        <div className="w-full py-2 sm:py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
            
            {/* LEFT: Official Trident Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-zinc-900 hover:text-black p-1 -ml-1 cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <Link href="/" className="flex items-center" aria-label="Trident Academy Home">
                <div className="flex-shrink-0">
                  <Image
                    src="/asset/logo.png"
                    alt="Trident Academy of Professional Studies"
                    width={240}
                    height={84}
                    priority
                    fetchPriority="high"
                    quality={100}
                    className="h-8 sm:h-9 lg:h-10 w-auto object-contain block"
                  />
                </div>
              </Link>
            </div>

            {/* CENTER / DESKTOP: BOLD UPPERCASE NAVIGATION LINKS WITH ANIMATED HOVER LINE */}
            <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-2 xl:px-4">
              <nav aria-label="Main Navigation" className="flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative py-1 text-xs xl:text-sm font-bold tracking-wider select-none transition-colors group ${
                        isActive
                          ? "text-blue-600 font-extrabold"
                          : "text-[#1E293B] hover:text-blue-600"
                      }`}
                    >
                      <span>{item.label}</span>

                      {/* Smooth Animated Hover Line with Gradient & Subtle Glow */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100 shadow-[0_0_8px_rgba(37,99,235,0.7)]"
                            : "scale-x-0 group-hover:scale-x-100 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* RIGHT: GRADIENT "APPLY NOW" PILL BUTTON */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={onOpenQuery}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm tracking-wide px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95"
              >
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* HEADER SPACER: Offsets the page content so it starts right below the fixed navbar */}
      <div className="w-full h-[76px] sm:h-[84px] lg:h-[92px]" aria-hidden="true" />

      {/* RESPONSIVE MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-white text-zinc-900 h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div className="relative w-36 h-10">
                  <Image
                    src="/asset/logo.png"
                    alt="Trident Academy of Professional Studies"
                    fill
                    quality={100}
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="mt-4 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search TAPS..."
                  className="w-full pl-8 pr-3 py-2 text-xs bg-zinc-50 border border-zinc-300 rounded-full focus:outline-none focus:border-blue-600 text-zinc-800"
                />
                <svg
                  className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>

              {/* Mobile Nav Links */}
              <div className="py-4 space-y-2 text-xs font-bold tracking-wider uppercase">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-xl transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white font-extrabold shadow-sm"
                          : "text-[#1E293B] hover:bg-zinc-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuery) onOpenQuery();
                }}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-3 rounded-full text-center text-xs tracking-wider uppercase shadow-md shadow-blue-500/25 hover:from-blue-700 hover:to-purple-700 transition-colors cursor-pointer"
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
