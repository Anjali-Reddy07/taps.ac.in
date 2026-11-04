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
import TactTestimonials from "@/components/TactTestimonials";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#001D4A]">
      {/* 1. TOP SUB-NAVBAR & MAIN NAVIGATION (Exact TACT structure with White & Royal Blue theme) */}
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* SECTION 1: HERO CAROUSEL ("Where Ambition Finds Its Direction") */}
        <TactHero />

        {/* SECTION 2: ADMISSIONS OPEN BORDER-BEAM BANNER */}
        <TactAdmissionsBar onOpenQuery={() => setIsModalOpen(true)} />

        {/* SECTION 3: ABOUT US (TAPS Institutional Profile, Vision & Mission Cards) */}
        <TactAbout onOpenQuery={() => setIsModalOpen(true)} />

        {/* SECTION 4: PROGRAMMES OFFERED (01 BCA, 02 BBA) */}
        <TactProgrammes onOpenQuery={() => setIsModalOpen(true)} />

        {/* SECTION 5: NEWS & EVENTS / WHAT'S HAPPENING (Featured Story & Circulars) */}
        <TactNews />

        {/* SECTION 6: PLACEMENTS ("Where Our Students Go Next" with 3 Stat Counters & Recruiter Marquee) */}
        <TactPlacements onOpenQuery={() => setIsModalOpen(true)} />

        {/* SECTION 7: STUDENT LIFE ("Life Beyond the Classroom" - Trifest, Kartavya, Hostels, Food Centers, Sports) */}
        <TactStudentLife />

        {/* SECTION 8: TESTIMONIALS ("Alumni Speak" & Global Alumni Network) */}
        <TactTestimonials />
      </main>

      {/* COMPREHENSIVE INSTITUTIONAL FOOTER (Watermark Logo, 4-Column Layout, Utkal Univ Affiliation) */}
      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />

      {/* INTERACTIVE ADMISSION QUERY MODAL */}
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
