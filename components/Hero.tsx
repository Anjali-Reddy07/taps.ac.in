"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenQuery?: () => void;
}

export default function Hero({ onOpenQuery }: HeroProps) {
  const [activeMedia, setActiveMedia] = useState<"campus" | "charter">("campus");

  const metrics = [
    {
      stat: "25+",
      unit: "Years",
      label: "Institutional Legacy",
      detail: "Shaping leaders since 2000",
    },
    {
      stat: "No. 1",
      unit: "College",
      label: "Under Utkal Univ",
      detail: "BCA & BBA benchmark rank",
    },
    {
      stat: "100%",
      unit: "Support",
      label: "Placement Assistance",
      detail: "Top Tier-1 IT & corporate ties",
    },
    {
      stat: "AICTE",
      unit: "& State",
      label: "Approved & Affiliated",
      detail: "Fully accredited standards",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50/40 via-white to-white text-[#001D4A] overflow-hidden pt-8 sm:pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-14 sm:pb-20">
        
        {/* EDITORIAL SPLIT LAYOUT IN WHITE & BLUE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Lightweight, High-Impact Headline & Subcopy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Eyebrow Pill Tag */}
            <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-[11px] font-sans tracking-[0.14em] uppercase font-bold text-[#0020D6] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0020D6] animate-pulse" />
              <span>Admissions Open 2026–2027</span>
            </div>

            {/* High-Editorial Headline (Deep Navy + Royal Blue Serif Accent) */}
            <h1 className="text-4xl sm:text-6xl xl:text-[68px] font-bold tracking-tight text-[#001D4A] leading-[1.08]">
              Higher learning, <br />
              <span className="font-editorial text-5xl sm:text-7xl xl:text-[80px] font-normal text-[#0020D6]">
                elevated by design.
              </span>
            </h1>

            {/* Clean Editorial Subcopy */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed font-normal">
              Trident Academy of Professional Studies (TAPS) blends computational rigor, managerial acumen, and premier placement infrastructure into an unhurried, elevated undergraduate experience in Bhubaneswar.
            </p>

            {/* Micro Metadata Course Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="text-[11px] font-sans tracking-wide uppercase text-[#0020D6] border border-blue-200 bg-blue-50/70 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
                BCA Degree
              </span>
              <span className="text-[11px] font-sans tracking-wide uppercase text-[#0020D6] border border-blue-200 bg-blue-50/70 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
                BBA Degree
              </span>
              <span className="text-[11px] font-sans tracking-wide uppercase text-[#0020D6] border border-blue-200 bg-blue-50/70 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
                B.Sc Biotechnology &amp; CS
              </span>
            </div>

            {/* Rounded Pill CTA Buttons (Royal Blue + Crisp White) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuery}
                className="bg-[#0020D6] hover:bg-[#0018b3] text-white font-semibold text-xs sm:text-sm tracking-wide px-7 sm:px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                Apply for 2026–27
              </button>

              <Link
                href="#programs"
                className="bg-white hover:bg-blue-50/70 border border-blue-200 hover:border-blue-300 text-[#0020D6] font-semibold text-xs sm:text-sm tracking-wide px-6 sm:px-7 py-3.5 rounded-full transition-all duration-200 shadow-xs"
              >
                Explore Curriculum
              </Link>
            </div>

          </div>

          {/* RIGHT: Large Rounded Showcase Media Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl sm:rounded-[32px] overflow-hidden border border-blue-100 bg-white shadow-[0_20px_50px_rgba(0,32,214,0.08)] group">
              
              {/* Main Photographic Image */}
              <Image
                src={activeMedia === "campus" ? "/asset/intro-banner.jpg" : "/asset/campus-banner.png"}
                alt={activeMedia === "campus" ? "Trident Academy Main Campus Grounds" : "Trident Academic Emblem & Charter"}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={92}
                className={`transition-all duration-700 ease-out ${
                  activeMedia === "campus"
                    ? "object-cover group-hover:scale-[1.03] brightness-[0.94] contrast-[1.05]"
                    : "object-contain p-6 group-hover:scale-105"
                }`}
                priority
              />

              {/* Cinematic Vignette on photographic mode */}
              {activeMedia === "campus" && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/70 via-transparent to-transparent pointer-events-none" />
              )}

              {/* Floating Editorial Corner Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-[#0020D6]/90 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full tracking-wider uppercase text-[10px] font-sans font-bold shadow-sm">
                  {activeMedia === "campus" ? "Campus Grounds" : "Academic Seal"}
                </span>
                <span className="text-[11px] text-white/95 font-medium tracking-wide">
                  Chandaka Estate, Infocity
                </span>
              </div>
            </div>

            {/* Media View Switcher */}
            <div className="mt-3.5 inline-flex items-center gap-1.5 p-1 rounded-full border border-blue-100 bg-white text-[11px] font-medium text-slate-500 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveMedia("campus")}
                className={`px-3.5 py-1 rounded-full transition-all cursor-pointer font-semibold ${
                  activeMedia === "campus"
                    ? "bg-[#0020D6] text-white shadow-sm"
                    : "hover:text-[#0020D6]"
                }`}
              >
                Campus Grounds
              </button>
              <button
                type="button"
                onClick={() => setActiveMedia("charter")}
                className={`px-3.5 py-1 rounded-full transition-all cursor-pointer font-semibold ${
                  activeMedia === "charter"
                    ? "bg-[#0020D6] text-white shadow-sm"
                    : "hover:text-[#0020D6]"
                }`}
              >
                Institutional Seal
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* TRUST / METRICS STATISTICAL TICKER WITH BLUE DIVIDERS */}
      <div className="w-full border-y border-blue-100 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 py-8 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-blue-100">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx === 0 ? "md:pr-8" : idx === 3 ? "md:pl-8" : "md:px-8"
              }`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#0020D6] tracking-tight">
                  {item.stat}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0052CC] font-semibold">
                  {item.unit}
                </span>
              </div>
              <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#001D4A] font-bold mt-1">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 font-normal mt-0.5">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
