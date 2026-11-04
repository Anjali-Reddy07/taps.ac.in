"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TactAboutProps {
  onOpenQuery?: () => void;
}

export default function TactAbout({ onOpenQuery }: TactAboutProps) {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  // Institutional Milestones for Infinite Marquee
  const milestones = [
    "#1 BCA & BBA College under Utkal University",
    "124+ Annual Corporate Recruiters",
    "2,936+ Campus Placements Over 5 Years",
    "Permanent Recognition by Govt. of Odisha",
    "Approved by AICTE, New Delhi",
    "100% NET / Ph.D Pursuing Faculty",
    "State Medhabruti & Merit Scholarship Matrix",
    "Active MoUs with Tier-1 Tech Giants",
  ];

  // 2x2 Accreditation Metrics
  const accreditations = [
    {
      title: "#1 under Utkal Univ",
      desc: "Undisputed rank 1 private BBA & BCA institution.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "100% Ph.D / NET Faculty",
      desc: "Scholars from premier universities and institutes.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      title: "AICTE & State Approved",
      desc: "Permanently recognized by Higher Education Dept.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Tier-1 Industry MoUs",
      desc: "Direct corporate hiring pipeline & live projects.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Bite-Sized Value Points for Vision & Mission
  const visionPoints = [
    {
      label: "Academic Distinction",
      text: "Achieve and sustain an undisputed reputation for excellence in foundational computational and managerial education across Eastern India.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: "Industry-Academic Synergy",
      text: "Bridge textbook curricula with corporate mentorship, live software incubators, and enterprise cloud infrastructure.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      label: "Enduring Leadership Values",
      text: "Inculcate professional ethics, critical thinking, and social responsibility to produce upright global leaders.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004.07 9m1.442 7.784A8.04 8.04 0 014 11" />
        </svg>
      ),
    },
  ];

  const missionPoints = [
    {
      label: "Applied Technical Acumen",
      text: "Deliver hands-on pedagogy in full-stack engineering, cloud architecture, and financial decision modeling from day one.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      label: "Doctoral Mentorship Ecosystem",
      text: "Maintain a full-time M.Tech/NET faculty pursuing Ph.D to provide individualized academic and competitive career guidance.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      label: "Premier Campus Placements",
      text: "Prepare scholars for tier-1 corporate campus drives, competitive national entrance examinations, and Fortune 500 roles.",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  // 4 Facilities
  const facilityHighlights = [
    {
      badge: "TECH LAB 01",
      title: "Computer Applications Lab",
      subtitle: "Cloud & AI Computing Nodes",
      spec: "High-performance virtualization clusters, dedicated GPU rigs & 24/7 gigabit fiber network.",
      image: "/images/drive/computer-lab.jpg",
    },
    {
      badge: "ACADEMICS 02",
      title: "Smart Lecture Theatres",
      subtitle: "Multimedia Amphitheatres",
      spec: "Acoustic architecture, 4K interactive projection, wireless podiums & lecture capture systems.",
      image: "/images/drive/smart-classroom.jpg",
    },
    {
      badge: "RESEARCH 03",
      title: "Central Research Library",
      subtitle: "Digital & Physical Archives",
      spec: "Over 50,000 reference volumes, DELNET subscriptions & air-conditioned study pods.",
      image: "/images/drive/central-library.jpg",
    },
    {
      badge: "CAMPUS 04",
      title: "Infocity Campus Grounds",
      subtitle: "Patia, Bhubaneswar",
      spec: "Lush landscaped gardens, athletic turf, pedestrian walkways & open-air study gazebos.",
      image: "/images/drive/campus-walkway.jpg",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      
      {/* 1. AMBIENT ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Faint Geometric Dot Matrix */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80" 
        />

        {/* Oversized Monochrome Animated Radial Blur Orbs */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-zinc-400/10 blur-[130px] animate-drift-slow" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-zinc-600/10 blur-[140px] animate-drift-reverse" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-zinc-500/10 blur-[120px] animate-drift-slow" />
      </div>

      {/* 2. INFINITE RUNNING MARQUEE STRIP (Seamless Institutional Milestones) */}
      <div className="mb-14 sm:mb-18 border-y border-zinc-800 bg-zinc-950 text-white relative z-10 overflow-hidden py-3 shadow-md">
        <div className="relative overflow-hidden w-full">
          {/* Left and Right Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex animate-marquee gap-8 sm:gap-12 items-center shrink-0">
            {[...milestones, ...milestones].map((item, idx) => (
              <div 
                key={`${item}-${idx}`} 
                className="flex items-center gap-2.5 shrink-0 text-xs sm:text-[13px] tracking-wide text-zinc-300 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulseGlow" />
                <span className="whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* 3. ASYMMETRIC BENTO GRID: Story & 2x2 Accreditations (Left) | Interactive Executive Card (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-20 sm:mb-24">
          
          {/* LEFT BENTO CELL: Institutional Overview & 2x2 Feature Chips */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-7 animate-fadeInUp">
            
            <div className="space-y-4">
              {/* Monospace Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-zinc-900 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                ABOUT TAPS
              </div>

              {/* Editorial Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 leading-tight tracking-tight">
                Trident Academy of Professional Studies
              </h2>

              <p className="text-base sm:text-lg font-semibold text-zinc-900">
                Premier BCA &amp; BBA Institution • Where Ambition Finds Its Direction
              </p>

              {/* Tight, High-Impact Introductory Narrative */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                Functioning under the aegis of the renowned Trident Group (TACT Trust), TAPS is recognized as the undisputed No. 1 college under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA). Approved by AICTE and permanently recognized by the Higher Education Department, Govt. of Odisha, TAPS combines computational rigor with executive boardroom leadership.
              </p>
            </div>

            {/* 2x2 SLEEK ACCREDITATION PILLS / FEATURE CHIPS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {accreditations.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-zinc-50/90 border border-zinc-200/90 hover:border-black transition-all duration-300 shadow-2xs hover-lift group"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      {item.icon}
                    </span>
                    <h3 className="text-sm font-bold text-zinc-950 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 pl-9 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Bar with Arrow Micro-Interaction */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-all duration-200 shadow-md hover-lift active:scale-95 group"
              >
                <span>Explore Academic Legacy</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <button
                onClick={onOpenQuery}
                className="px-6 py-3 rounded-xl border border-zinc-300 hover:border-black hover:bg-zinc-50 text-zinc-900 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Download Institutional Prospectus
              </button>
            </div>

          </div>

          {/* RIGHT BENTO CELL: Interactive Executive Card (Our Vision & Our Mission) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full bg-zinc-950 text-white rounded-3xl p-7 sm:p-9 border border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Ambient Inner Dark Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Active Pill Toggle Segmented Controller */}
                <div 
                  role="tablist"
                  aria-label="Vision and Mission Selector"
                  className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800 mb-7"
                >
                  <button
                    role="tab"
                    aria-selected={activeTab === "vision"}
                    onClick={() => setActiveTab("vision")}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 ${
                      activeTab === "vision"
                        ? "bg-white text-black shadow-md font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Our Vision
                  </button>

                  <button
                    role="tab"
                    aria-selected={activeTab === "mission"}
                    onClick={() => setActiveTab("mission")}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 ${
                      activeTab === "mission"
                        ? "bg-white text-black shadow-md font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Our Mission
                  </button>
                </div>

                {/* Tab Header Banner */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span>{activeTab === "vision" ? "Strategic Vision for 2030" : "Core Institutional Mission"}</span>
                    <span className="w-2 h-2 rounded-full bg-white shrink-0 animate-pulseGlow" />
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
                    {activeTab === "vision"
                      ? "Pioneering collegiate education that elevates capability into leadership."
                      : "Four pillars sustaining technical, managerial, and ethical rigor."}
                  </p>
                </div>

                {/* Structured Bite-Sized Value Points */}
                <div className="space-y-4 animate-fadeIn" key={activeTab}>
                  {(activeTab === "vision" ? visionPoints : missionPoints).map((point, i) => (
                    <div 
                      key={point.label}
                      className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 hover:border-zinc-700 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-white mt-0.5 group-hover:scale-105 transition-transform">
                          {point.icon}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-white tracking-wide">
                              {point.label}
                            </h4>
                            <span className="text-[10px] font-mono text-zinc-500">
                              0{i + 1}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-300 mt-1 leading-relaxed font-normal">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Micro-Badge */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Trident Trust • Established 2000</span>
                <span className="font-mono text-zinc-400">Patia, Bhubaneswar</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4. ENHANCED FACILITIES / CAMPUS HIGHLIGHTS GRID */}
        <div id="facilities" className="pt-12 sm:pt-16 border-t border-zinc-200 scroll-mt-24">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-zinc-900 block mb-2 bg-zinc-100 border border-zinc-300 w-fit px-3 py-1 rounded-full shadow-2xs">
                INSIDE TAPS CAMPUS
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
                World-Class Academic Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl font-normal leading-relaxed">
                Purpose-built computing centers, amphitheatre classrooms, and comprehensive research repositories at Infocity, Bhubaneswar.
              </p>
            </div>
            
            <Link
              href="/admission"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-900 hover:text-black uppercase tracking-wider transition-colors group shrink-0 active:scale-95"
            >
              <span>Schedule Campus Tour</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* 4-Column Sleek Facility Image Cards with Aspect-Ratio, Smooth Scale-Up & Refined Bottom Scrim */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityHighlights.map((facility) => (
              <div
                key={facility.title}
                className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-950 shadow-md hover:shadow-2xl hover:border-black transition-all duration-500 hover-lift"
              >
                {/* Background Image with Smooth Scale-up on Hover */}
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter grayscale-[20%] group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle Hover Darkening Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500 pointer-events-none" />

                {/* Top Ambient Scrim for Floating Badge */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/95 backdrop-blur-md text-zinc-950 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-white/20">
                    {facility.badge}
                  </span>
                </div>

                {/* Refined Gradient Bottom Scrim for High-Contrast Legible Captions */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/70 via-50% to-transparent pointer-events-none" />

                {/* Caption Content Directly on the Bottom Scrim */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end text-white">
                  <div className="text-[11px] uppercase tracking-widest text-zinc-300 font-semibold mb-1">
                    {facility.subtitle}
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                    {facility.title}
                  </h4>

                  <p className="text-xs text-zinc-300 mt-1.5 font-light leading-relaxed line-clamp-2">
                    {facility.spec}
                  </p>

                  {/* Micro-interaction arrow reveal */}
                  <div className="pt-3 flex items-center justify-between border-t border-white/15 mt-3">
                    <span className="text-[11px] font-semibold text-zinc-200 uppercase tracking-wider">
                      Infocity Campus
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shrink-0 active:scale-95">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
