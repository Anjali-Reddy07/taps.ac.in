"use client";

import { useState } from "react";
import Header from "@/components/Header";
import TactHero from "@/components/TactHero";
import TactAdmissionsBar from "@/components/TactAdmissionsBar";
import TactAbout from "@/components/TactAbout";
import TactProgrammes from "@/components/TactProgrammes";
import TactNews from "@/components/TactNews";
import TactPlacements from "@/components/TactPlacements";
import TactStudentLife from "@/components/TactStudentLife";
import CampusGallery from "@/components/CampusGallery";
import TactTestimonials from "@/components/TactTestimonials";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBFF] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. TOP SUB-NAVBAR & MAIN NAVIGATION (White, Blue, Lavender Theme) */}
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* SECTION 1: HERO CAROUSEL ("Where Ambition Finds Its Direction") */}
        <AnimatedBackground variant="dark">
          <TactHero onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 2: ADMISSIONS OPEN BORDER-BEAM BANNER & LIVE MARQUEE STRIP (ZERO GAP) */}
        <TactAdmissionsBar onOpenQuery={() => setIsModalOpen(true)} />

        {/* SECTION 3: ABOUT US (TAPS Institutional Profile, Vision & Mission Cards) */}
        <TactAbout onOpenQuery={() => setIsModalOpen(true)} />

        {/* SECTION 4: PROGRAMMES OFFERED (01 BCA, 02 BBA) */}
        <AnimatedBackground variant="light" className="border-y border-indigo-100">
          <TactProgrammes onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 5: NEWS & EVENTS / WHAT'S HAPPENING (Featured Story & Circulars) */}
        <AnimatedBackground variant="light">
          <TactNews />
        </AnimatedBackground>

        {/* SECTION 6: PLACEMENTS ("Where Our Students Go Next" with 3 Stat Counters & Recruiter Badges) */}
        <AnimatedBackground variant="dark" className="border-y border-indigo-900/40">
          <TactPlacements onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 7: STUDENT LIFE ("Life Beyond the Classroom" - Interactive Student Hub) */}
        <TactStudentLife />

        {/* SECTION 8: CAMPUS GALLERY (Interactive Filterable Bento Media Showcase) */}
        <AnimatedBackground variant="light" className="border-t border-indigo-100">
          <CampusGallery />
        </AnimatedBackground>

        {/* SECTION 9: TESTIMONIALS ("Alumni Speak" & Global Alumni Network) */}
        <AnimatedBackground variant="light" className="border-t border-indigo-100">
          <TactTestimonials />
        </AnimatedBackground>
      </main>

      {/* COMPREHENSIVE INSTITUTIONAL FOOTER (SOLID BLACK) */}
      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />

      {/* INTERACTIVE ADMISSION QUERY MODAL */}
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
