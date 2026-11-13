"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import SpeedometerCounter from "@/components/SpeedometerCounter";
import { Hero7, Hero7Slide } from "@/components/blocks/hero-7";

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
  
  // Interactive Studio Carousel state (automatic sliding one after one)
  const [currentStudioImageIndex, setCurrentStudioImageIndex] = useState<number>(0);
  const [studioSlideDirection, setStudioSlideDirection] = useState<number>(1);
  const [isStudioAutoPlaying, setIsStudioAutoPlaying] = useState<boolean>(true);

  // Dynamic Multi-Angle Hero Architecture Backgrounds
  const [heroSlideIndex, setHeroSlideIndex] = useState<number>(0);
  const heroBackgroundSlides = [
    {
      src: "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg",
      label: "11-Acre Technoplex Campus Complex",
      tag: "INFOCITY PATIA TECH CORRIDOR",
    },
    {
      src: "/images/drive_facilities/_dsc1828.jpg",
      label: "Trident Academy Main Architectural Facade & Portico",
      tag: "CENTRAL ACADEMIC ADMINISTRATION",
    },
    {
      src: "/images/drive_facilities/_dsc1843.jpg",
      label: "Four-Storeyed Modern Institutional Complex",
      tag: "CAMPUS ARCHITECTURE & IT LABS",
    },
    {
      src: "/images/facilities-concert-hero.jpg",
      label: "Cultural Conclaves, Sports Meets & Campus Life",
      tag: "VIBRANT STUDENT LIFE",
    },
  ];

  // Auto-advance hero background slides smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroBackgroundSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroBackgroundSlides.length]);

  const facilities: Facility[] = [
    {
      id: "technoplex-block",
      num: "01",
      badge: "ACADEMIC BLOCKS",
      title: "Primary Academic Complex & Portico",
      subtitle: "Six Multi-Storey Blocks • Business Analytics & Placement Division",
      stat: "6 Blocks",
      statLabel: "Academic & Research Wings",
      spec: "The primary institution campus at Infocity housing undergraduate lecture complexes, the Center for Business Analytics, Center for Sustainability Research, corporate finishing schools, and specialized placement interview suites.",
      features: [
        "Primary Entrance & Executive Portico",
        "Block-5 Center for Business Analytics & Research",
        "Corporate Training & Placement Interview Suites",
        "Digital Information Displays & Discussion Plazas",
      ],
      image: "/images/drive_facilities/_dsc1828.jpg",
      gallery: [
        { label: "Main Entrance", src: "/images/drive_facilities/_dsc1828.jpg", caption: "Primary institution entrance and executive portico" },
        { label: "Block 5 Complex", src: "/images/drive_facilities/_dsc1852.jpg", caption: "Block 5 housing Business Analytics, Sustainability & Placements" },
        { label: "Learning Circles", src: "/images/drive_facilities/_dsc1824.jpg", caption: "Learning Circles hub and digital display screen" },
        { label: "Campus Facade", src: "/images/drive_facilities/_dsc1843.jpg", caption: "Four-storeyed modern academic facility in Infocity IT corridor" },
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
      gallery: [
        { label: "AI Computing Lab", src: "/images/drive/computer-lab.jpg", caption: "600 high-performance workstations connected over 1000 Mbps gigabit LAN" },
        { label: "Online Testing Lab", src: "/images/drive_third/Placement_examhalls.jpg", caption: "Specialized computer terminal testing halls for technical assessments" },
        { label: "Hackathon Pods", src: "/images/drive_third/Placement_GD-Halls.jpg", caption: "Collaborative computing clusters for programming sprints & competitions" },
      ],
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
        { label: "Physics Apparatus", src: "/images/drive_facilities/_dsc1805.jpg", caption: "Students conducting precision physics and electronics experiments" },
        { label: "Laboratory Practical", src: "/images/drive_facilities/_dsc1803.jpg", caption: "Undergraduate laboratory practical sessions with certified faculty" },
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
      gallery: [
        { label: "Smart Classroom", src: "/images/drive_third/ClassRooms_Academic.JPG", caption: "Spacious air-conditioned smart classroom with faculty interaction" },
        { label: "400-Seat Auditorium", src: "/images/drive_third/MBA_seminar_1.jpeg", caption: "Central air-conditioned auditorium hosting institutional symposiums" },
        { label: "Lecture Theatre", src: "/images/drive_third/ClassRooms_carousel_.JPG", caption: "Tiered executive amphitheatre with high-definition digital displays" },
        { label: "Seminar Hall", src: "/images/drive_third/MBA_Seminar_3.jpeg", caption: "Departmental executive seminar chambers for corporate workshops" },
      ],
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
      gallery: [
        { label: "Central Library Wing", src: "/images/drive_third/Library_Library.JPG", caption: "Over 70,000 text and reference volumes across multi-storey stacks" },
        { label: "Digital Research Pods", src: "/images/drive_third/Library_research.jpg", caption: "High-speed digital workstations for IEEE, ScienceDirect & ACM access" },
        { label: "Reading Hall", src: "/images/drive_third/Library_Facilities12.JPG", caption: "Spacious air-conditioned quiet reading floors and literature archives" },
      ],
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
      gallery: [
        { label: "Central Cafeteria", src: "/images/drive/cafeteria.jpg", caption: "Multi-cuisine food court serving fresh meals and refreshments" },
        { label: "Dining Pavilion", src: "/images/drive_third/Out_side_Class_Room_1744605959382.jpeg", caption: "Outdoor open-air dining and refreshment plaza on campus grounds" },
      ],
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
  const currentFacilityGallery = currentFacility.gallery && currentFacility.gallery.length > 0
    ? currentFacility.gallery
    : [{ label: "Main View", src: currentFacility.image, caption: currentFacility.subtitle }];
  
  const safeStudioIndex = currentStudioImageIndex % currentFacilityGallery.length;
  const activeSlideItem = currentFacilityGallery[safeStudioIndex];
  const activeDisplayImage = activeSlideItem.src;

  const nextStudioImage = useCallback(() => {
    setStudioSlideDirection(1);
    setCurrentStudioImageIndex((prev) => (prev + 1) % currentFacilityGallery.length);
  }, [currentFacilityGallery.length]);

  const prevStudioImage = useCallback(() => {
    setStudioSlideDirection(-1);
    setCurrentStudioImageIndex((prev) => (prev - 1 + currentFacilityGallery.length) % currentFacilityGallery.length);
  }, [currentFacilityGallery.length]);

  // Continuous auto-sliding one after one every 3.5 seconds
  useEffect(() => {
    if (!isStudioAutoPlaying || currentFacilityGallery.length <= 1) return;
    const timer = setInterval(() => {
      setStudioSlideDirection(1);
      setCurrentStudioImageIndex((prev) => (prev + 1) % currentFacilityGallery.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isStudioAutoPlaying, currentFacilityGallery.length, activeFacilityId]);

  // React Bits Pro: Hero 7 Slides with authentic campus facility photography
  const facilitiesHero7Slides: Hero7Slide[] = [
    {
      id: "ruby-hostel",
      title: "Ruby Residential Hostel Block",
      desc: "Distinct multi-storey residential wing featuring high-speed connectivity, separate hostel library, and hygienic stainless-steel dining mess.",
      img: "/images/drive_facilities/_dsc1863.jpg",
      tag: "Residential Block",
      metric: "Blue-Glass Wing",
    },
    {
      id: "sapphire-hostel",
      title: "Sapphire Student Residential Hostel",
      desc: "Spacious multi-storey student hostel pavilion with well-furnished rooms, reading rooms, indoor games, and round-the-clock security surveillance.",
      img: "/images/drive_facilities/_dsc1862.jpg",
      tag: "Student Hostels",
      metric: "Multi-Storey",
    },
    {
      id: "physics-lab",
      title: "Applied Physics & Electronics Lab",
      desc: "Undergraduate students working hands-on with precision laboratory instrumentation, digital oscilloscopes, and optical experimental setups.",
      img: "/images/drive_facilities/_dsc1807.jpg",
      tag: "Precision Labs",
      metric: "Hardware Trainers",
    },
    {
      id: "basketball-arena",
      title: "Tournament Basketball Hardcourt Arena",
      desc: "Olympic-regulation outdoor basketball arena featuring vibrant colored keys, three-point arcs, perimeter fencing, and adjacent botanical greenhouse.",
      img: "/images/drive_facilities/_dsc1859.jpg",
      tag: "Athletics Arena",
      metric: "Tournament Court",
    },
    {
      id: "block-5",
      title: "Block 5 Business Analytics Complex",
      desc: "Multi-storey academic wing housing the Center for Business Analytics, Center for Sustainability Research, MBA Department, and Training & Placement suites.",
      img: "/images/drive_facilities/_dsc1852.jpg",
      tag: "Block 5 Complex",
      metric: "Analytics & MBA",
    },
    {
      id: "facade",
      title: "Trident Campus Primary Facade & Portico",
      desc: "The primary institution campus at Infocity housing undergraduate departments, smart amphitheatres, and high-performance computing centers.",
      img: "/images/drive_facilities/_dsc1828.jpg",
      tag: "Campus Facade",
      metric: "Infocity Hub",
    },
    {
      id: "transit-yoga",
      title: "Campus Transit Fleet & Open-Air Yoga",
      desc: "Dedicated college transit fleet operating across 6 major Bhubaneswar routes, stationed beside the serene Open-Air Yoga Center.",
      img: "/images/drive_facilities/_dsc1854.jpg",
      tag: "Transit Fleet",
      metric: "6 City Routes",
    },
    {
      id: "fitness-center",
      title: "Open-Air Fitness Center",
      desc: "Dedicated outdoor health and body conditioning facility on the athletics grounds, supporting active physical fitness and morning workouts.",
      img: "/images/drive_facilities/_dsc1853.jpg",
      tag: "Campus Gymnasium",
      metric: "Outdoor Rig",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-blue-600 selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DYNAMIC MULTI-SCENE WITH KINETIC STATS */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Animated Ambient Aurora Color Orbs */}
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/25 via-pink-500/15 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse" />

          {/* Dynamic Background Slideshow with Smooth Crossfade */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlideIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroBackgroundSlides[heroSlideIndex].src}
                  alt={heroBackgroundSlides[heroSlideIndex].label}
                  fill
                  priority
                  quality={92}
                  className="object-cover object-center filter contrast-105 saturate-110"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays for High Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/95 via-[#070D21]/85 via-55% to-[#070D21]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-transparent to-[#070D21]/40" />
          </div>

          <section className="relative z-10 py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Headline, Narrative & Interactive CTAs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 backdrop-blur-md shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
                  </span>
                  <span>Campus Infrastructure &amp; Amenities</span>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="text-white/80 font-medium hidden sm:inline">Infocity IT Corridor</span>
                </div>

                {/* Animated Gradient Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
                    11-Acre Modern Technoplex
                  </span>
                  <br />
                  <span className="font-light text-2xl sm:text-4xl lg:text-5xl text-zinc-200">
                    in Infocity IT Corridor
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
                  Equipped with high-density cloud computing clusters, a 70,000+ volume IEEE central research library, 
                  tournament basketball hardcourts, and 1,200-capacity in-campus residential pavilions flanking Bhubaneswar&apos;s global IT leaders.
                </p>

                {/* Action Row */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative group overflow-hidden px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-500/30 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <span className="relative flex items-center gap-2">
                      <span>Book a Campus Visit</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                  <Link
                    href="/admission"
                    className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm backdrop-blur-md transition-all duration-300 shadow-md flex items-center gap-1.5"
                  >
                    <span>Admissions 2026 Guidelines</span>
                    <span className="text-zinc-400">↗</span>
                  </Link>
                </div>

                {/* Active Background Caption Indicator */}
                <div className="pt-4 flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Viewing: {heroBackgroundSlides[heroSlideIndex].label}</span>
                  <div className="flex items-center gap-1.5 ml-auto">
                    {heroBackgroundSlides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setHeroSlideIndex(dotIdx)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          heroSlideIndex === dotIdx
                            ? "w-5 h-1.5 bg-cyan-400"
                            : "w-1.5 h-1.5 bg-white/30 hover:bg-white/70"
                        }`}
                        aria-label={`View slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Cardless Live Infrastructure Metric Stream */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-6 lg:gap-8 pt-4 lg:pt-0">
                {/* Stat 1 */}
                <div className="pl-4 border-l-2 border-cyan-400 transition-all duration-300 hover:translate-x-1 group">
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    <SpeedometerCounter value="11" duration={1.5} /> Acres
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-1">
                    Technoplex Complex
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    Infocity IT Hub, Chandaka
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="pl-4 border-l-2 border-blue-500 transition-all duration-300 hover:translate-x-1 group">
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-blue-400 group-hover:text-blue-300 transition-colors">
                    <SpeedometerCounter value="6" duration={1.5} /> Blocks
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-1">
                    Academic Wings
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    Multi-Storey Lecture Pods
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="pl-4 border-l-2 border-purple-500 transition-all duration-300 hover:translate-x-1 group">
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-purple-400 group-hover:text-purple-300 transition-colors">
                    <SpeedometerCounter value="600+" duration={1.6} />
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-1">
                    AI &amp; Cloud Terminals
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    1000 Mbps Gigabit LAN
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="pl-4 border-l-2 border-amber-400 transition-all duration-300 hover:translate-x-1 group">
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-amber-300 group-hover:text-amber-200 transition-colors">
                    <SpeedometerCounter value="1,200" duration={1.6} />
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-1">
                    Hostel Residents
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    Sapphire &amp; Ruby Pavilions
                  </div>
                </div>

                {/* Stat 5 */}
                <div className="pl-4 border-l-2 border-emerald-400 transition-all duration-300 hover:translate-x-1 group">
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-300 group-hover:text-emerald-200 transition-colors">
                    <SpeedometerCounter value="70,000+" duration={1.8} />
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-1">
                    Library Volumes
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    IEEE, ACM &amp; ScienceDirect
                  </div>
                </div>

                {/* Stat 6 */}
                <div className="pl-4 border-l-2 border-rose-400 transition-all duration-300 hover:translate-x-1 group">
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-rose-300 group-hover:text-rose-200 transition-colors">
                    <SpeedometerCounter value="400" duration={1.5} /> Seats
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-white mt-1">
                    Central Auditorium
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    Air-Conditioned Hall
                  </div>
                </div>
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
                      setCurrentStudioImageIndex(0);
                      setStudioSlideDirection(1);
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
                {/* Visual Half: Expansive Cinema Viewport with Smooth Perspective Transitions */}
                <div className="lg:col-span-7 relative">
                  {/* Subtle Background Glow */}
                  <div className={`absolute -inset-4 rounded-3xl blur-3xl opacity-35 bg-gradient-to-tr ${currentFacility.glow} pointer-events-none`} />

                  {/* Main Architectural Viewport */}
                  <div 
                    onMouseEnter={() => setIsStudioAutoPlaying(false)}
                    onMouseLeave={() => setIsStudioAutoPlaying(true)}
                    className="relative h-80 sm:h-96 lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 select-none group"
                  >
                    {/* Active Slide Image with Smooth Cinematic Crossfade */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlideItem.src}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={activeSlideItem.src}
                          alt={activeSlideItem.caption || currentFacility.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          priority
                          quality={92}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Gradient Shadows for High Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                    {/* Top Left: Facility Category Badge */}
                    <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-black/75 backdrop-blur-md text-cyan-300 border border-white/20 shadow-md">
                        {currentFacility.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md text-white border border-white/10">
                        {currentFacility.num} / 10
                      </span>
                    </div>

                    {/* Top Right: Minimal Slide Indicator */}
                    {currentFacilityGallery.length > 1 && (
                      <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-[10px] font-mono font-bold text-white">
                          0{safeStudioIndex + 1}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">/</span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          0{currentFacilityGallery.length}
                        </span>
                      </div>
                    )}

                    {/* Left / Right Arrow Controls (Minimal Floating) */}
                    {currentFacilityGallery.length > 1 && (
                      <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none z-20">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevStudioImage();
                          }}
                          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 pointer-events-auto cursor-pointer hover:scale-105 active:scale-95 shadow-lg"
                          aria-label="Previous Perspective"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextStudioImage();
                          }}
                          className="w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 pointer-events-auto cursor-pointer hover:scale-105 active:scale-95 shadow-lg"
                          aria-label="Next Perspective"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Bottom Floating Glass Plate: Perspective Name & Description */}
                    <div className="absolute bottom-5 left-5 right-5 z-20">
                      <div className="p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
                        <div>
                          <div className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span>{activeSlideItem.label}</span>
                          </div>
                          <div className="text-xs text-zinc-300 font-light mt-0.5 line-clamp-1">
                            {activeSlideItem.caption}
                          </div>
                        </div>

                        {/* Interactive Dots for Direct Navigation */}
                        {currentFacilityGallery.length > 1 && (
                          <div className="flex items-center gap-1.5 shrink-0">
                            {currentFacilityGallery.map((_, dotIdx) => {
                              const isDotActive = safeStudioIndex === dotIdx;
                              return (
                                <button
                                  key={dotIdx}
                                  type="button"
                                  onClick={() => setCurrentStudioImageIndex(dotIdx)}
                                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                                    isDotActive
                                      ? "w-6 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-sm"
                                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                                  }`}
                                  aria-label={`Go to slide ${dotIdx + 1}`}
                                />
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Razor-Thin Bottom Countdown Progress Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-30">
                      <motion.div
                        key={`line-${activeFacilityId}-${safeStudioIndex}`}
                        initial={{ width: "0%" }}
                        animate={{ width: isStudioAutoPlaying ? "100%" : "60%" }}
                        transition={{ duration: 3.5, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                      />
                    </div>
                  </div>

                  {/* Clean Multi-Perspective Selector Dock (Directly Beneath Viewport) */}
                  {currentFacilityGallery.length > 1 && (
                    <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {currentFacilityGallery.map((g, gIdx) => {
                        const isSelected = safeStudioIndex === gIdx;
                        return (
                          <button
                            key={g.label + gIdx}
                            type="button"
                            onClick={() => setCurrentStudioImageIndex(gIdx)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                              isSelected
                                ? "bg-zinc-900 text-white shadow-md scale-102 font-bold"
                                : "text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200/80"
                            }`}
                          >
                            <span className={isSelected ? "text-cyan-400" : "text-zinc-400"}>0{gIdx + 1}</span>
                            <span>{g.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Narrative Half: Open Editorial Typography & Feature Matrix */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    {/* Large Prominent Metric */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-mono font-black text-blue-600 tracking-tight">
                        {currentFacility.stat}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                        {currentFacility.statLabel}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-snug">
                      {currentFacility.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 mt-1 font-semibold tracking-wide">
                      {currentFacility.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {currentFacility.spec}
                  </p>

                  {/* 2x2 Clean Capability Tiles */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3">
                      Core Technical &amp; Living Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentFacility.features.map((feat, idx) => (
                        <div 
                          key={idx} 
                          className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200"
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span className="text-[10px] font-mono font-bold uppercase text-zinc-500">
                              Feature 0{idx + 1}
                            </span>
                          </div>
                          <div className="text-xs font-medium text-zinc-800 leading-snug">
                            {feat}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-blue-600 text-white text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
                    >
                      <span>Inquire About Facility Access</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* REACT BITS PRO: HERO 7 (3D ROTATING CAROUSEL WITH A GLOW BAR) */}
        {/* ========================================================================= */}
        <section 
          id="campus-glimpses-slides"
          className="relative py-16 sm:py-24 bg-gradient-to-b from-[#060A1C] via-[#09112B] to-[#050817] text-white overflow-hidden border-y border-indigo-900/50"
        >
          {/* Dynamic Ambient Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25 bg-gradient-to-tr from-cyan-600/30 via-blue-600/20 to-purple-600/20" />
            <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-blue-600/15 pointer-events-none" />
            <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full blur-[120px] bg-purple-600/15 pointer-events-none" />
            <div 
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px"
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <Hero7
              badge="AUTHENTIC CAMPUS HORIZON • HERO 7"
              title="Living Campus Architecture &"
              highlightText="3D Horizon Stage"
              description="Explore undergraduate residential hostel pavilions, precision applied physics laboratories, and tournament athletics facilities in an automated 3D rotating carousel with React Bits Pro laser glow bar."
              slides={facilitiesHero7Slides}
              autoPlayInterval={3600}
              theme="dark"
            />
          </div>
        </section>

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
