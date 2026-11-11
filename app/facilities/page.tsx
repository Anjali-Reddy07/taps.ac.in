
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function FacilitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFacilityId, setActiveFacilityId] = useState<string>("computer-lab");

  const facilities = [
    {
      id: "computer-lab",
      num: "01",
      badge: "TECH INFRASTRUCTURE",
      title: "Advanced Computer Applications & AI Labs",
      subtitle: "600 Terminals • 1000 Mbps LAN & Internet Backbone",
      stat: "600+",
      statLabel: "Workstations (1:4 Ratio)",
      spec: "Equipped with state-of-the-art computer laboratories, campus-wide Local Area Network (LAN) and a wireless network backbone of 1000 Mbps (1:1). Features 600 systems with a 1:4 computer-to-student ratio for UG.",
      features: [
        "600 High-Performance Desktop Systems with 1:4 Ratio",
        "Campus-Wide 1000 Mbps (1:1) Leased Line Network",
        "Configured with Oracle, Visual Studio, Python & Linux SDKs",
        "Dedicated Power Backup with Central Online UPS Systems",
      ],
      image: "/images/drive/computer-lab.jpg",
      glow: "from-blue-600/30 via-cyan-500/20 to-transparent",
    },
    {
      id: "smart-theatres",
      num: "02",
      badge: "ACADEMICS",
      title: "Spacious ICT Classrooms & 400-Seat Auditorium",
      subtitle: "Smart Classrooms in Each of the Six Blocks",
      stat: "400 Seats",
      statLabel: "Central AC Auditorium",
      spec: "Spacious ICT enabled AC Classrooms, dedicated departmental seminar halls, and a 400-capacity central auditorium for institute-level presentations. Every department has access to smart classrooms in all six blocks.",
      features: [
        "ICT-Enabled AC Classrooms in All Six Blocks",
        "Central Air-Conditioned Auditorium of 400 Capacity",
        "Separate Departmental Seminar Halls & Chambers",
        "Interactive Digital Smart Boards & Cloud Archives",
      ],
      image: "/images/drive_third/ClassRooms_Academic.JPG",
      glow: "from-indigo-600/30 via-purple-500/20 to-transparent",
    },
    {
      id: "central-library",
      num: "03",
      badge: "RESEARCH",
      title: "TAPS Central Research Library",
      subtitle: "70,000+ Volumes • IEEE, Science Direct & ACM E-Journals",
      stat: "70,000+",
      statLabel: "Text & Reference Volumes",
      spec: "Considered the richest encyclopedia of books with above 70,000 text and reference volumes. Equipped with computer terminals for literature mining and access to Science Direct, IEEE, NPTEL, ISI, and ACM databases.",
      features: [
        "Over 70,000 Text & Reference Volumes on Display",
        "Access to Science Direct, IEEE, NPTEL, ISI & ACM Databases",
        "National & International Print Periodicals & Science Journals",
        "Dedicated Literature Mining Terminals with High-Speed Internet",
      ],
      image: "/images/drive_third/Library_Library.JPG",
      glow: "from-emerald-600/30 via-teal-500/20 to-transparent",
    },
    {
      id: "hostels",
      num: "04",
      badge: "RESIDENTIAL",
      title: "Three In-Campus Residential Hostels",
      subtitle: "1,200 Inmate Capacity • Separate Boys & Girls Wings",
      stat: "1,200",
      statLabel: "Inmate Residential Capacity",
      spec: "Three spacious in-campus hostels accommodating 1,200 students. Features well-furnished rooms, hygienic vegetarian & non-vegetarian mess, Wi-Fi coverage, hostel library, TV recreation hall, and 24/7 medical emergency care.",
      features: [
        "Spacious Well-Furnished Rooms (1,200 Inmate Capacity)",
        "Hygienic Vegetarian & Non-Vegetarian Mess Facility",
        "Wi-Fi Coverage, Hostel Library & Indoor Recreation Hall with TV",
        "Medical Dispensary with On-Call Doctor, Pharmacist & Emergency Vehicle",
      ],
      image: "/images/drive/hostel-residential.jpg",
      glow: "from-amber-600/30 via-orange-500/20 to-transparent",
    },
    {
      id: "food-court",
      num: "05",
      badge: "AMENITY",
      title: "Centralized Multi-Cuisine Food Court",
      subtitle: "Round-the-Clock Dining & Refreshment Hub",
      stat: "24/7",
      statLabel: "Dining & Refreshment Hub",
      spec: "Centralized food court providing round-the-clock breakfast, lunch, and dinner with South Indian snacks, Odia thalis, and continental refreshments. Located in close proximity to Infocity cafes like CCD and Barista.",
      features: [
        "Round-the-Clock Breakfast, Lunch, Evening Snacks & Dinner",
        "Dedicated Cafeteria & Dining Hall for TACT Students",
        "Hygienic Stainless Steel Kitchen & Quality Water Filtration",
        "Close Proximity to Infocity Cafes (CCD, Barista, Berrys)",
      ],
      image: "/images/drive/cafeteria.jpg",
      glow: "from-rose-600/30 via-red-500/20 to-transparent",
    },
    {
      id: "transport",
      num: "06",
      badge: "LOGISTICS",
      title: "City Transport Bus Fleet (Routes I to VI)",
      subtitle: "Dedicated Fleet Connecting Entire Bhubaneswar City",
      stat: "6 Routes",
      statLabel: "City-Wide Connectivity",
      spec: "The college operates its own transport facility running across 6 designated routes throughout Bhubaneswar City, ensuring punctual, safe, and comfortable daily transit for day scholars.",
      features: [
        "Dedicated Fleet Operating on Routes I, II, III, IV, V & VI",
        "Connecting All Major City Intersections and Residential Hubs",
        "Experienced Drivers & Conductors for Safe Transit",
        "Annual Bus Fee of ₹20,000 Across All Approved Routes",
      ],
      image: "/images/drive_third/Facilities_transportation.png",
      glow: "from-sky-600/30 via-blue-500/20 to-transparent",
    },
    {
      id: "sports-grounds",
      num: "07",
      badge: "ATHLETICS",
      title: "Infocity Sports Arenas & Grounds",
      subtitle: "Full-Scale Cricket, Football, Volleyball & Indoor Games",
      stat: "Multi-Court",
      statLabel: "Floodlit Athletics Arena",
      spec: "Lush green athletic grounds hosting annual university sports meets, inter-college cricket leagues, basketball tournaments, badminton courts, and indoor recreation halls.",
      features: [
        "Full-Size Cricket Field & Football Turf",
        "Standard Volleyball & Basketball Hardcourts",
        "Indoor Table Tennis, Chess & Carrom Chambers",
        "Modern Fitness Gymnasium with Certified Trainer",
      ],
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
      glow: "from-purple-600/30 via-pink-500/20 to-transparent",
    },
    {
      id: "campus-walkway",
      num: "08",
      badge: "CAMPUS",
      title: "11-Acre Technoplex Botanical Walkway",
      subtitle: "Green Eco-Friendly Institutional Sanctuary",
      stat: "11 Acres",
      statLabel: "Eco-Friendly Tech Sanctuary",
      spec: "Paved central promenade connecting academic blocks with hostel pavilions, shaded by mature trees, landscaping, and open-air discussion plazas.",
      features: [
        "Zero-Noise Academic Zone Directly Inside Infocity",
        "Pedestrian-First Paved Walkways and Pergolas",
        "Solar Street Lighting & Rainwater Harvesting",
        "24/7 Security Gate Checks & Perimeter CCTV",
      ],
      image: "/images/drive/campus-walkway.jpg",
      glow: "from-emerald-600/30 via-cyan-500/20 to-transparent",
    },
  ];

  const currentFacility = facilities.find((f) => f.id === activeFacilityId) || facilities[0];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Life & Cultural Fest Stage Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/facilities-concert-hero.jpg"
              alt="TAPS Campus Fest, Cultural Performances & Student Life"
              fill
              priority
              className="object-cover object-[68%_40%] filter contrast-105 saturate-110 opacity-95 scale-100"
              sizes="100vw"
            />
            {/* Smooth one-sided scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/98 via-[#070D21]/80 via-50% to-[#070D21]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/60 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900/90 border border-zinc-700/80 px-4 py-1.5 rounded-full shadow-2xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Campus Infrastructure &amp; Amenities</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                11-Acre Modern Technoplex in Infocity
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                From high-density cloud computing labs to research libraries and comfortable on-campus residential hostels,
                TAPS provides a world-class environment designed for academic rigor, innovation, and holistic living.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                >
                  Book a Campus Visit →
                </button>
                <Link
                  href="/admission"
                  className="px-6 py-3 rounded-full bg-zinc-900/90 text-zinc-200 border border-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Admissions 2026 Guidelines
                </Link>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* ALTERNATIVE 1: INTERACTIVE CAMPUS FACILITY STUDIO CONSOLE (ZERO BOXES)   */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                Interactive Campus Studio
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Explore the Technoplex Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Select any facility from the interactive track below to preview its live infrastructure, capabilities, and capacity.
              </p>
            </div>

            {/* Kinetic Facility Selector Rail (No boxes, clean interactive pill dock) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start lg:justify-center">
              {facilities.map((f) => {
                const isActive = activeFacilityId === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActiveFacilityId(f.id)}
                    className={`relative px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? "text-white shadow-lg"
                        : "text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFacilityStudioPill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10 font-bold">{f.num}</span>
                    <span className="relative z-10">{f.title.split(" ")[0]} {f.title.split(" ")[1]}</span>
                  </button>
                );
              })}
            </div>

            {/* Master Cinema Stage: Borderless Dynamic Viewport */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFacility.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Half: Borderless Floating Canvas */}
                <div className="lg:col-span-7 relative group">
                  <div className={`absolute -inset-4 rounded-3xl blur-3xl opacity-40 bg-gradient-to-tr ${currentFacility.glow} pointer-events-none`} />
                  
                  <div className="relative h-72 sm:h-96 lg:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={currentFacility.image}
                      alt={currentFacility.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-black/70 backdrop-blur-md text-cyan-300 border border-white/20 shadow-md">
                        {currentFacility.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
                        {currentFacility.title}
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        {currentFacility.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Half: Open Typography & Floating Specifications (NO BOXES) */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-mono font-black text-blue-600">
                        {currentFacility.stat}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                        {currentFacility.statLabel}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-snug">
                      {currentFacility.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {currentFacility.spec}
                  </p>

                  {/* Specification Lines (Divided by clean hairlines, no boxes) */}
                  <div className="pt-4 border-t border-zinc-200/80 space-y-3">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                      Technical Capabilities
                    </div>
                    <div className="space-y-2.5">
                      {currentFacility.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group cursor-pointer"
                    >
                      <span>Inquire About Facility Access</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* ALTERNATIVE 2: FULL-WIDTH EDITORIAL WALKTHROUGH (APPLE STYLE, ZERO BOXES) */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Comprehensive Tour
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Eight Pillars of Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                A seamless editorial overview of all academic, residential, athletic, and logistics facilities.
              </p>
            </div>

            {/* Alternating Seamless Rows (Zero Cards, Zero Box Borders) */}
            <div className="space-y-24 sm:space-y-32">
              {facilities.map((f, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                  >
                    {/* Visual Column */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative h-72 sm:h-96 lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl group">
                        <Image
                          src={f.image}
                          alt={f.title}
                          fill
                          className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm">
                            {f.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Narrative Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"} space-y-4`}>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-serif text-blue-600 font-light">
                          {f.num}
                        </span>
                        <div className="h-px flex-1 bg-zinc-200" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                          {f.stat}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight leading-snug">
                        {f.title}
                      </h3>

                      <p className="text-xs font-mono text-blue-700 font-medium uppercase tracking-wider">
                        {f.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                        {f.spec}
                      </p>

                      {/* Capabilities Strip */}
                      <div className="pt-4 border-t border-zinc-100 space-y-2">
                        {f.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </section>
        </AnimatedBackground>

        {/* BOTTOM CTA: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800">
          <section className="py-16 sm:py-20 max-w-5xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl sm:text-4xl font-light text-white mb-4 tracking-tight">
              Experience the Technoplex in Person
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Prospective students and guardians are welcome to visit our Infocity campus, inspect the computing labs,
              library, and residential hostels, and interact with the faculty mentors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-md cursor-pointer"
              >
                Schedule Guided Campus Visit
              </button>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-zinc-900 text-white border border-zinc-700 font-semibold text-sm hover:border-zinc-400 transition-colors"
              >
                Directions &amp; Map
              </Link>
            </div>
          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}


