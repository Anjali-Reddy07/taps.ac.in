"use client";

import Image from "next/image";
import Link from "next/link";

interface TactAboutProps {
  onOpenQuery?: () => void;
}

export default function TactAbout({ onOpenQuery }: TactAboutProps) {
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top Grid: Profile (Left) and Vision/Mission (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Institutional Profile */}
          <div className="lg:col-span-5 space-y-5 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-900 font-bold bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light text-zinc-900 leading-tight tracking-tight">
              Trident Academy of Professional Studies
            </h2>

            <p className="text-base sm:text-lg font-bold text-zinc-900">
              Premier BCA &amp; BBA Institution • Where Ambition Finds Its Direction
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Trident Academy of Professional Studies (TAPS), functioning under the aegis of the renowned Trident Group (TACT Trust), is recognized as the undisputed No. 1 college under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA).
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Permanently recognized by the Higher Education Department, Govt. of Odisha, and approved by AICTE, TAPS integrates computational rigor, managerial acumen, and holistic training into an unmatched undergraduate learning journey at Infocity, Bhubaneswar.
            </p>

            {/* Key USPs Checklist */}
            <div className="pt-2 space-y-3">
              {[
                "Undisputed No. 1 Private BBA & BCA College under Utkal University",
                "100% full-time faculties are M.Tech/NET qualified, pursuing Ph.D",
                "Leadership modeling, soft-skills & business innovation incubators",
                "Active MoUs with Tier-1 tech giants for internships & placement drives",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm sm:text-[15px] text-zinc-800 font-medium">
                  <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm sm:text-base font-semibold hover:bg-zinc-800 transition-all duration-300 shadow-md hover-lift"
              >
                <span>Know More About TAPS</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <button
                onClick={onOpenQuery}
                className="px-6 py-3 rounded-xl border-2 border-black text-zinc-900 hover:bg-black hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 hover-lift cursor-pointer"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Column: Vision & Mission Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Vision Card */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7 sm:p-8 shadow-xs hover:border-black hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3.5 flex items-center gap-2">
                <span>Our Vision</span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </h3>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-zinc-700 leading-relaxed font-normal">
                <p>
                  To achieve and sustain reputation for <strong className="text-zinc-950 font-semibold">Excellence in Teaching, Learning, Research and Industry Mentorship</strong> whilst upholding enduring human values.
                </p>
                <p>
                  To become an undergraduate institute of premier repute in Computer Applications and Business Administration by offering high-standard curricula and fostering holistic personality development.
                </p>
                <p>
                  To be a recognized center of excellence in foundational technology and management education across Eastern India.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7 sm:p-8 shadow-xs hover:border-black hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3.5 flex items-center gap-2">
                <span>Our Mission</span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </h3>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-zinc-700 leading-relaxed font-normal">
                <p>
                  To provide the <strong className="text-zinc-950 font-semibold">best of technical skills, business ethics, and practical acumen</strong> to undergraduate scholars.
                </p>
                <p>
                  To maintain faculty and academic infrastructure with the highest qualifications and continuous research opportunities.
                </p>
                <p>
                  To motivate students to pursue top-tier competitive examinations, higher education at premier institutes, and corporate campus careers.
                </p>
                <p>
                  To sustain vibrant industry-academia tie-ups for internships, live projects, and professional skill accreditation.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 2. ENHANCED FACILITIES / CAMPUS HIGHLIGHTS GRID */}
        <div id="facilities" className="pt-12 sm:pt-16 border-t border-zinc-200 scroll-mt-24">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-900 font-bold block mb-2 bg-zinc-100 border border-zinc-300 w-fit px-3 py-1 rounded-full">
                Inside TAPS Campus
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-zinc-950 tracking-tight">
                World-Class Academic Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl font-normal leading-relaxed">
                Purpose-built computing centers, amphitheatre classrooms, and comprehensive research repositories at Infocity, Bhubaneswar.
              </p>
            </div>
            
            <Link
              href="/admission"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 hover:text-black uppercase tracking-wider transition-colors group shrink-0"
            >
              <span>Schedule Campus Tour</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* 4-Column Sleek Facility Image Cards with Aspect-Ratio & Refined Bottom Scrim */}
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
                  <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-300 font-semibold mb-1">
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
                    <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shrink-0">
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
