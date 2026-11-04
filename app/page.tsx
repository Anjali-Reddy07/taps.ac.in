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
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      {/* 1. TOP SUB-NAVBAR & MAIN NAVIGATION (Black & White Theme) */}
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* SECTION 1: HERO CAROUSEL ("Where Ambition Finds Its Direction") */}
        <AnimatedBackground variant="dark">
          <TactHero onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 2: ADMISSIONS OPEN BORDER-BEAM BANNER */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800">
          <TactAdmissionsBar onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 3: ABOUT US (TAPS Institutional Profile, Vision & Mission Cards) */}
        <AnimatedBackground variant="light">
          <TactAbout onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 4: PROGRAMMES OFFERED (01 BCA, 02 BBA) */}
        <AnimatedBackground variant="light" className="border-y border-zinc-200">
          <TactProgrammes onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 5: NEWS & EVENTS / WHAT'S HAPPENING (Featured Story & Circulars) */}
        <AnimatedBackground variant="light">
          <TactNews />
        </AnimatedBackground>

        {/* SECTION 6: PLACEMENTS ("Where Our Students Go Next" with 3 Stat Counters & Recruiter Badges) */}
        <AnimatedBackground variant="dark" className="border-y border-zinc-800">
          <TactPlacements onOpenQuery={() => setIsModalOpen(true)} />
        </AnimatedBackground>

        {/* SECTION 7: STUDENT LIFE ("Life Beyond the Classroom" - Trifest, Kartavya, Hostels, Food Centers, Sports) */}
        <AnimatedBackground variant="light" className="border-t border-zinc-200">
          <TactStudentLife />
        </AnimatedBackground>

        {/* SECTION 8: TESTIMONIALS ("Alumni Speak" & Global Alumni Network) */}
        <AnimatedBackground variant="light" className="border-t border-zinc-200">
          <TactTestimonials />
        </AnimatedBackground>
      </main>

      {/* COMPREHENSIVE INSTITUTIONAL FOOTER */}
      <AnimatedBackground variant="dark">
        <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      </AnimatedBackground>

      {/* INTERACTIVE ADMISSION QUERY MODAL */}
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
