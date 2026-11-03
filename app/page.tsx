"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdmissionRibbons from "@/components/AdmissionRibbons";
import ScrollShowcase from "@/components/ScrollShowcase";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";
import QueryModal from "@/components/QueryModal";
import RoyalIntro from "@/components/RoyalIntro";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#001D4A]">
      {/* Optional Royal Intro */}
      <RoyalIntro />

      {/* Top Sub-Navbar & Clean White Primary Navbar */}
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* Editorial Split Hero Section & Statistical Metrics Ticker */}
        <Hero onOpenQuery={() => setIsModalOpen(true)} />

        {/* RUNNING BLUE MARQUEE ITEM PLACED DIRECTLY AFTER HERO SECTION */}
        <div className="w-full bg-[#0020D6] text-white overflow-hidden py-2.5 border-y border-blue-700/40 shadow-sm relative z-20">
          <div className="animate-marquee whitespace-nowrap text-[11px] sm:text-xs tracking-[0.14em] uppercase font-sans font-medium flex items-center">
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

        {/* ADVANCED ANIMATED 3D HANGING RIBBON CARDS */}
        <AdmissionRibbons onOpenQuery={() => setIsModalOpen(true)} />

        {/* COTERIE-STYLE PARALLAX SCROLLING SECTION WITH TAPS.AC.IN DATA */}
        <ScrollShowcase onOpenQuery={() => setIsModalOpen(true)} />

        {/* REFINED EDITORIAL CALLOUT IN CRISP WHITE & BLUE */}
        <section className="w-full bg-gradient-to-b from-white via-blue-50/30 to-white border-b border-blue-100 py-16 px-6 sm:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white border border-blue-100 rounded-3xl p-8 sm:p-12 shadow-[0_12px_36px_rgba(0,32,214,0.06)]">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <span className="text-[10px] font-sans tracking-[0.22em] text-[#0020D6] font-bold uppercase block">
                Admission Portal • Academic Year 2026–27
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001D4A] tracking-tight">
                Begin your undergraduate <br className="hidden sm:inline" />
                <span className="font-editorial text-3xl sm:text-4xl font-normal text-[#0020D6]">
                  journey with Trident.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
                Undisputed benchmark institution under Utkal University for BCA &amp; BBA degrees. Early merit counseling seats currently open.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0020D6] hover:bg-[#0018b3] text-white font-semibold text-xs sm:text-[13px] tracking-wide px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30 cursor-pointer whitespace-nowrap"
              >
                Submit Admission Query →
              </button>
            </div>
          </div>
        </section>

        {/* ACADEMIC CATALOGUE & INSTITUTIONAL PROFILE */}
        <HomeContent onOpenQuery={() => setIsModalOpen(true)} />
      </main>

      {/* Interactive Admission Query Modal */}
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Deep Navy & White Footer */}
      <Footer />
    </div>
  );
}
