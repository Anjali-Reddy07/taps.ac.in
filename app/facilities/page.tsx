"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

interface GalleryItem {
  label: string;
  src: string;
  caption: string;
}

interface Facility {
  id: string;
  num: string;
  badge: string;
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  spec: string;
  features: string[];
  image: string;
  gallery?: GalleryItem[];
  glow: string;
}

export default function FacilitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFacilityId, setActiveFacilityId] = useState<string>("technoplex-block");
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>("all");

  const facilities: Facility[] = [
    {
      id: "technoplex-block",
      num: "01",
      badge: "ACADEMIC BLOCKS",
      title: "Trident Academy of Creative Technology Main Facade",
      subtitle: "Six Multi-Storey Blocks • Business Analytics & Placement Division",
      stat: "6 Blocks",
      statLabel: "Academic & Research Wings",
      spec: "The primary institution campus at Infocity housing undergraduate lecture complexes, the Center for Business Analytics, Center for Sustainability Research, corporate finishing schools, and specialized placement interview suites.",
      features: [
        "Iconic Trident Academy of Creative Technology Primary Facade & Portico",
        "Block-5 Center for Business Analytics & Sustainability Research",
        "Central Corporate Training & Placement Interview Suites",
        "Integrated Outdoor Digital Information Screen & Discussion Plazas",
      ],
      image: "/images/drive_facilities/_dsc1828.jpg",
      gallery: [
        { label: "Main Entrance", src: "/images/drive_facilities/_dsc1828.jpg", caption: "Trident Academy of Creative Technology main entrance and portico" },
        { label: "Block 5 Complex", src: "/images/drive_facilities/_dsc1852.jpg", caption: "Block 5 housing Business Analytics, Sustainability & Placements" },
        { label: "Learning Circles", src: "/images/drive_facilities/_dsc1824.jpg", caption: "Trident Learning Circles hub and digital display screen" },
      ],
      glow: "from-cyan-600/30 via-blue-500/20 to-transparent",
    },
    {
      id: "computer-lab",
      num: "02",
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
      id: "science-labs",
      num: "03",
      badge: "LABORATORIES",
      title: "Applied Sciences & Electronics Engineering Labs",
      subtitle: "Instrumentation • Physics • Biotechnology Research",
      stat: "8+ Labs",
      statLabel: "Dedicated Experimental Labs",
      spec: "Modern scientific and technical laboratories outfitted with precision electronics trainers, optical benches, instrumentation systems, and plant tissue culture growth chambers for multi-disciplinary exploration.",
      features: [
        "Applied Physics & Electronic Instrumentation Laboratory with Bench Trainers",
        "Advanced Plant Tissue Culture & Biotechnology Research Chambers",
        "Optical Benches, Digital Oscilloscopes & Microprocessor Kits",
        "Faculty Mentorship for Undergraduate Student Experimental Projects",
      ],
      image: "/images/drive_facilities/_dsc1807.jpg",
      gallery: [
        { label: "Instrumentation Lab", src: "/images/drive_facilities/_dsc1807.jpg", caption: "Students working on precision electronics and instrumentation setups" },
        { label: "Biotech Growth Chamber", src: "/images/drive_facilities/_dsc1819.jpg", caption: "Biotechnology tissue culture plant growth chambers under LED lights" },
        { label: "Physics Setup", src: "/images/drive_facilities/_dsc1803.jpg", caption: "Undergraduate laboratory practical sessions with certified faculty" },
      ],
      glow: "from-teal-600/30 via-emerald-500/20 to-transparent",
    },
    {
      id: "smart-theatres",
      num: "04",
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
      num: "05",
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
      num: "06",
      badge: "RESIDENTIAL",
      title: "Three In-Campus Hostels (Sapphire & Ruby Wings)",
      subtitle: "1,200 Inmate Capacity • Separate Boys & Girls Wings",
      stat: "1,200",
      statLabel: "Inmate Residential Capacity",
      spec: "Three spacious in-campus residential wings (Sapphire, Ruby & Emerald) accommodating 1,200 students. Features well-furnished rooms, hygienic vegetarian & non-vegetarian mess, Wi-Fi coverage, hostel library, TV recreation hall, and 24/7 medical emergency care.",
      features: [
        "Spacious Multi-Storey Well-Furnished Hostels (Sapphire & Ruby Wings)",
        "Hygienic Vegetarian & Non-Vegetarian Mess Facility with Stainless Steel Dining",
        "Wi-Fi Coverage, Hostel Study Rooms & Indoor Recreation Hall with TV",
        "Medical Dispensary with On-Call Doctor, Pharmacist & Emergency Vehicle",
      ],
      image: "/images/drive_facilities/_dsc1862.jpg",
      gallery: [
        { label: "Sapphire Hostel", src: "/images/drive_facilities/_dsc1862.jpg", caption: "Sapphire multi-storey residential pavilion for students" },
        { label: "Ruby Hostel", src: "/images/drive_facilities/_dsc1863.jpg", caption: "Ruby residential block with modern blue-glass architectural facade" },
        { label: "Rooftop Sign", src: "/images/drive_facilities/_dsc1860.jpg", caption: "Architectural rooftop signage overlooking Infocity" },
      ],
      glow: "from-amber-600/30 via-orange-500/20 to-transparent",
    },
    {
      id: "sports-grounds",
      num: "07",
      badge: "ATHLETICS",
      title: "Infocity Sports Arenas & Tournament Hardcourt",
      subtitle: "Basketball Arena, Athletics Ground & Open-Air Fitness",
      stat: "Multi-Court",
      statLabel: "Floodlit Athletics Arena",
      spec: "Lush green athletic grounds hosting annual university sports meets, inter-college cricket leagues, Olympic-grade basketball hardcourts, outdoor fitness center, and green recreation plazas.",
      features: [
        "Standard Tournament Basketball Hardcourt with Regulation Color Markings",
        "Dedicated Open-Air Fitness Center & Outdoor Gymnasium on Campus Grounds",
        "Full-Size Cricket Field, Football Turf & Volleyball Hardcourts",
        "Adjacent Campus Greenhouse and Landscaped Athletic Promenade",
      ],
      image: "/images/drive_facilities/_dsc1859.jpg",
      gallery: [
        { label: "Basketball Court", src: "/images/drive_facilities/_dsc1859.jpg", caption: "Tournament basketball hardcourt with regulation markings" },
        { label: "Court & Greenhouse", src: "/images/drive_facilities/_dsc1857.jpg", caption: "Hardcourt arena adjacent to campus botanical greenhouse" },
        { label: "Open-Air Fitness", src: "/images/drive_facilities/_dsc1853.jpg", caption: "Equipped open-air fitness center on campus grounds" },
      ],
      glow: "from-purple-600/30 via-pink-500/20 to-transparent",
    },
    {
      id: "transport-wellness",
      num: "08",
      badge: "LOGISTICS & WELLNESS",
      title: "Campus Bus Fleet & Open-Air Yoga Center",
      subtitle: "6 City Routes Fleet • Dedicated Student Wellness Pavilion",
      stat: "6 Routes",
      statLabel: "City-Wide Connectivity",
      spec: "The institution operates its own fleet of buses connecting 6 routes across Bhubaneswar City, alongside on-campus student wellness hubs including the Open-Air Yoga Center.",
      features: [
        "Dedicated College Bus Fleet Operating Across All Key City Routes",
        "Punctual, Safe Daily Transit with Experienced Drivers & Conductors",
        "Open-Air Yoga Center for Daily Morning Meditation & Breathwork",
        "Dedicated Transit Parking Hub & Electric Vehicle Infrastructure",
      ],
      image: "/images/drive_facilities/_dsc1854.jpg",
      gallery: [
        { label: "Buses & Yoga Center", src: "/images/drive_facilities/_dsc1854.jpg", caption: "Trident college bus fleet stationed beside the Open-Air Yoga Center" },
        { label: "Transit Fleet Hub", src: "/images/drive_third/Facilities_transportation.png", caption: "City route network connecting major Bhubaneswar intersections" },
      ],
      glow: "from-sky-600/30 via-blue-500/20 to-transparent",
    },
    {
      id: "food-court",
      num: "09",
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
      id: "campus-walkway",
      num: "10",
      badge: "ECO CAMPUS",
      title: "11-Acre Botanical Walkway & Eco Sustainability",
      subtitle: "Tree-Lined Tech Promenade • 150 KLD Sewage Treatment Plant",
      stat: "11 Acres",
      statLabel: "Eco-Friendly Tech Sanctuary",
      spec: "Paved central promenade connecting academic blocks with hostel pavilions, shaded by mature trees, botanical landscaping, and state-of-the-art eco-sustainability facilities like a 150 KLD water treatment plant.",
      features: [
        "Zero-Noise Academic Zone Directly Inside Infocity IT Corridor",
        "Pedestrian-First Paved Walkways, Tree Canopies and Open Plazas",
        "150 KLD MBBR Sewage Treatment Plant for 100% Water Recycling",
        "Solar Street Lighting, Greenhouses & 24/7 Monitored Perimeter",
      ],
      image: "/images/drive_facilities/_dsc1845.jpg",
      gallery: [
        { label: "Tree-Lined Avenue", src: "/images/drive_facilities/_dsc1845.jpg", caption: "Lush green tree-lined avenue connecting academic departments" },
        { label: "Campus Canopy", src: "/images/drive_facilities/_dsc1843.jpg", caption: "Mature tree canopy shading the main institutional block" },
        { label: "Eco Water Plant", src: "/images/drive_facilities/_dsc1856.jpg", caption: "Campus 150 KLD MBBR sewage treatment and water recycling facility" },
      ],
      glow: "from-emerald-600/30 via-cyan-500/20 to-transparent",
    },
  ];

  const currentFacility = facilities.find((f) => f.id === activeFacilityId) || facilities[0];
  const activeDisplayImage = selectedGalleryImage || currentFacility.image;

  // Real campus gallery items from Google Drive
  const campusDriveGallery = [
    {
      title: "Trident Academy of Creative Technology Main Facade",
      category: "academic",
      badge: "Main Campus",
      src: "/images/drive_facilities/_dsc1828.jpg",
      desc: "Primary entrance and architectural facade of Trident Academy of Creative Technology in Infocity.",
    },
    {
      title: "Tournament Basketball Hardcourt",
      category: "sports",
      badge: "Athletics Arena",
      src: "/images/drive_facilities/_dsc1859.jpg",
      desc: "Olympic-regulation outdoor basketball arena with painted color keys and perimeter fencing.",
    },
    {
      title: "Sapphire Residential Hostel",
      category: "hostel",
      badge: "Student Living",
      src: "/images/drive_facilities/_dsc1862.jpg",
      desc: "Spacious multi-storey student accommodation with modern amenities and scenic campus views.",
    },
    {
      title: "Ruby Residential Hostel",
      category: "hostel",
      badge: "Residential Block",
      src: "/images/drive_facilities/_dsc1863.jpg",
      desc: "Distinct multi-storey residential wing featuring blue glass architectural stairwells.",
    },
    {
      title: "Applied Physics & Electronics Lab",
      category: "academic",
      badge: "Technical Lab",
      src: "/images/drive_facilities/_dsc1807.jpg",
      desc: "Undergraduate students working hands-on with precision laboratory instrumentation.",
    },
    {
      title: "Biotechnology Plant Tissue Culture Chambers",
      category: "academic",
      badge: "Research Facility",
      src: "/images/drive_facilities/_dsc1819.jpg",
      desc: "Controlled environmental growth chambers illuminated by calibrated scientific grow lights.",
    },
    {
      title: "Campus Transit Fleet & Open-Air Yoga",
      category: "campus",
      badge: "Logistics & Wellness",
      src: "/images/drive_facilities/_dsc1854.jpg",
      desc: "Yellow Trident college bus fleet stationed next to the peaceful Open-Air Yoga Center.",
    },
    {
      title: "Open-Air Fitness Center",
      category: "sports",
      badge: "Outdoor Gym",
      src: "/images/drive_facilities/_dsc1853.jpg",
      desc: "Outdoor health and body conditioning center situated on the campus athletics grounds.",
    },
    {
      title: "Block 5 Business Analytics Complex",
      category: "academic",
      badge: "Research Complex",
      src: "/images/drive_facilities/_dsc1852.jpg",
      desc: "Houses the Center for Business Analytics, Sustainability Research, and Placement Cell.",
    },
    {
      title: "Basketball Arena & Botanical Greenhouse",
      category: "sports",
      badge: "Sports Complex",
      src: "/images/drive_facilities/_dsc1857.jpg",
      desc: "Clear perspective showing the court alongside the campus horticultural greenhouse.",
    },
    {
      title: "Tree-Lined Botanical Walkway",
      category: "campus",
      badge: "Eco Walkway",
      src: "/images/drive_facilities/_dsc1845.jpg",
      desc: "Shaded green pedestrian avenue connecting academic blocks with hostel accommodations.",
    },
    {
      title: "150 KLD Sewage Treatment Plant",
      category: "campus",
      badge: "Sustainability",
      src: "/images/drive_facilities/_dsc1856.jpg",
      desc: "Campus MBBR wastewater treatment facility delivering sustainable 100% water recycling.",
    },
  ];

  const filteredGallery = galleryFilter === "all"
    ? campusDriveGallery
    : campusDriveGallery.filter((item) => item.category === galleryFilter);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-blue-600 selection:text-white">
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
              quality={92}
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
                From high-density cloud computing labs to research libraries, tournament basketball hardcourts, and comfortable on-campus residential hostels,
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
        {/* INTERACTIVE CAMPUS FACILITY STUDIO CONSOLE (ZERO BOXES, MULTI-ANGLE VIEWER) */}
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
                Select any facility from the interactive track below to preview its live infrastructure, multi-angle views, and technical specifications.
              </p>
            </div>

            {/* Kinetic Facility Selector Rail */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start lg:justify-center">
              {facilities.map((f) => {
                const isActive = activeFacilityId === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      setActiveFacilityId(f.id);
                      setSelectedGalleryImage(null);
                    }}
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

            {/* Master Cinema Stage: Borderless Dynamic Viewport with Multi-Angle Gallery */}
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
                  
                  <div className="relative h-72 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-950">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeDisplayImage}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeDisplayImage}
                          alt={currentFacility.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          priority
                          quality={92}
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-black/75 backdrop-blur-md text-cyan-300 border border-white/20 shadow-md">
                        {currentFacility.badge}
                      </span>
                    </div>

                    {/* Multi-Angle Gallery Switcher on Top Right */}
                    {currentFacility.gallery && currentFacility.gallery.length > 1 && (
                      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-lg">
                        {currentFacility.gallery.map((g) => {
                          const isSelected = activeDisplayImage === g.src;
                          return (
                            <button
                              key={g.label}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedGalleryImage(g.src);
                              }}
                              className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-white text-zinc-950 shadow-md scale-105"
                                  : "text-zinc-300 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              {g.label}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                      <div className="text-xl sm:text-2xl font-bold tracking-tight mb-1 drop-shadow-md">
                        {currentFacility.title}
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        {selectedGalleryImage && currentFacility.gallery
                          ? currentFacility.gallery.find((g) => g.src === selectedGalleryImage)?.caption
                          : currentFacility.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Half: Open Typography & Floating Specifications */}
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

                  {/* Specification Lines */}
                  <div className="pt-4 border-t border-zinc-200/80 space-y-3">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                      Technical &amp; Living Capabilities
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

                  <div className="pt-2 flex items-center gap-4">
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
        {/* NEW SECTION: AUTHENTIC CAMPUS GLIMPSES REEL (DRIVE PHOTOS SHOWCASE)       */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                  CAMPUS PHOTO ARCHIVE
                </div>
                <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                  Authentic Glimpses from the Technoplex
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl font-normal leading-relaxed">
                  Real, unfiltered glimpses of our academic blocks, student hostels, sports hardcourts, technical laboratories, and green campus.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Photos" },
                  { id: "academic", label: "Academic & Labs" },
                  { id: "hostel", label: "Hostels" },
                  { id: "sports", label: "Sports & Fitness" },
                  { id: "campus", label: "Eco Campus" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryFilter(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      galleryFilter === tab.id
                        ? "bg-zinc-900 text-white shadow-sm"
                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Responsive Photo Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence>
                {filteredGallery.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <h4 className="text-base font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors tracking-tight leading-snug mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <span>Infocity Campus</span>
                        <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">Live View →</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* FULL-WIDTH EDITORIAL WALKTHROUGH (APPLE STYLE, ZERO BOXES)                */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Comprehensive Tour
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Ten Pillars of Campus Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                A seamless editorial overview of all academic, residential, athletic, research, and logistics facilities.
              </p>
            </div>

            {/* Alternating Seamless Rows */}
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
                      <div className="relative h-72 sm:h-96 lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl group bg-zinc-950">
                        <Image
                          src={f.image}
                          alt={f.title}
                          fill
                          loading="lazy"
                          quality={90}
                          className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm">
                            {f.badge}
                          </span>
                        </div>
                        {f.gallery && f.gallery.length > 1 && (
                          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-zinc-200 border border-white/20">
                            {f.gallery.length} Perspectives
                          </div>
                        )}
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
              library, sports arenas, and residential hostels, and interact with the faculty mentors.
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
