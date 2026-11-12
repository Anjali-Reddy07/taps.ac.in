"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import InfiniteSpiral from "@/components/InfiniteSpiral";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimelineYear, setSelectedTimelineYear] = useState<string>("1991");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show3DHelix, setShow3DHelix] = useState(true);

  const accreditations = [
    {
      title: "Utkal Univ Affiliated",
      desc: "Affiliated to Utkal University with approval of Govt. of Odisha since 2000.",
      badge: "ACADEMIC AFFILIATION",
      stat: "2000",
    },
    {
      title: "100% Ph.D / NET Faculty",
      desc: "Scholars from premier universities providing 1:15 mentorship.",
      badge: "FACULTY BENCHMARK",
      stat: "100%",
    },
    {
      title: "AICTE & Govt. Approved",
      desc: "Permanently recognized by Dept. of Higher Education, Govt. of Odisha.",
      badge: "STATUTORY RECOGNITION",
      stat: "AICTE",
    },
    {
      title: "Tier-1 Industry MoUs",
      desc: "Direct hiring linkages with CGI, TCS, Infosys, Wipro, and Capgemini.",
      badge: "CORPORATE TIE-UPS",
      stat: "138+",
    },
  ];

  const milestones = [
    {
      year: "1991",
      title: "Foundation of TSPL & Corporate Finishing School",
      tag: "ERA 01 • INCEPTION",
      desc: "Founded by visionary technocrats as Trident Softech Private Limited (TSPL), establishing Eastern India's first elite corporate software finishing school in Oracle, Sybase, and PowerBuilder.",
      highlight: "Over 500+ corporate engineers trained in enterprise RDBMS systems.",
      image: "/images/tspl_1991_finishing_school.jpg",
      visualTitle: "TSPL Corporate Software Finishing School",
      visualSubtitle: "Eastern India's First Elite Software Finishing School in Oracle, Sybase & PowerBuilder",
      specs: ["Oracle, Sybase & PowerBuilder", "High-Performance Terminals", "Corporate Finishing School"],
      accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
      accentBorder: "border-amber-400/40",
      accentBadge: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    },
    {
      year: "1995",
      title: "Corporate Finishing School & Software Placements",
      tag: "ERA 02 • SPECIALIZED IT TRAINING",
      desc: "Through Trident's Advanced Computer Training (TACT), fresh engineering graduates were trained in enterprise packages including SYBASE, POWERBUILDER, ORACLE, DB-2, and JCL, securing coveted careers in competitive corporate markets.",
      highlight: "Pioneered specialized software education in Eastern India.",
      image: "/images/drive/computer-lab.jpg",
      visualTitle: "Enterprise Software & Computing Clusters",
      visualSubtitle: "Eastern India's Pioneer High-Density RDBMS Workstations",
      specs: ["UNIX & SYBASE Labs", "500+ Engineers Placed", "RDBMS Certifications"],
      accentGlow: "from-cyan-500/25 via-blue-500/15 to-transparent",
      accentBorder: "border-cyan-400/50",
      accentBadge: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    },
    {
      year: "2000",
      title: "Formal Launch of TAPS under TACT Trust",
      tag: "ERA 03 • TAPS INAUGURATION",
      desc: "Formal launch of Trident Academy of Professional Studies (TAPS) under TACT Trust, offering BCA and BBA affiliated to Utkal University with Govt. of Odisha approval.",
      highlight: "Permanent AICTE and Higher Education Department recognition.",
      image: "/images/drive_third/ClassRooms_Academic.JPG",
      visualTitle: "Multimedia Tiered Smart Amphitheatre",
      visualSubtitle: "Faculty-Mentored Pedagogy & Interactive Lecture Theatres",
      specs: ["Acoustically Engineered Tiered Seating", "Utkal University CBCS", "Multimedia Digital Podiums"],
      accentGlow: "from-indigo-500/25 via-purple-500/15 to-transparent",
      accentBorder: "border-indigo-400/50",
      accentBadge: "text-indigo-400 bg-indigo-400/10 border-indigo-400/30",
    },
    {
      year: "2005",
      title: "11-Acre Technoplex Campus at Infocity",
      tag: "ERA 04 • INFRASTRUCTURE SCALE",
      desc: "Expanded into an 11-acre flagship Technoplex in the heart of Infocity, Bhubaneswar, flanked by Infosys, TCS, and Wipro development centers.",
      highlight: "High-density cloud computing labs and central research library established.",
      image: "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg",
      visualTitle: "11-Acre Flagship Technoplex Campus",
      visualSubtitle: "Patia Infocity Tech Corridor Flanked by Global IT Giants",
      specs: ["11-Acre Technoplex", "Infocity IT Hub", "Modern Institutional Blocks"],
      accentGlow: "from-emerald-500/25 via-teal-500/15 to-transparent",
      accentBorder: "border-emerald-400/50",
      accentBadge: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    },
    {
      year: "2026",
      title: "Sustained Undergraduate Leadership",
      tag: "ERA 05 • CONTEMPORARY BENCHMARK",
      desc: "Recognized as the benchmark undergraduate institute under Utkal University for BCA and BBA with sustained placement records and corporate tie-ups.",
      highlight: "Odisha's premier academic benchmark for BCA & BBA scholars.",
      image: "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg",
      visualTitle: "Sunset Campus Promenade & Modern Colonnades",
      visualSubtitle: "Vibrant Academic Life & Sustained Campus Placement Drives",
      specs: ["138+ Annual Recruiters", "Utkal Univ CBCS No. 1", "24/7 Connected Campus"],
      accentGlow: "from-purple-500/25 via-pink-500/15 to-transparent",
      accentBorder: "border-purple-400/50",
      accentBadge: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    },
  ];

  // 16 Real Drive Images for the 3D Infinite Spiral Helix Showcase (1st Section Hero)
  const spiralItems = [
    { src: "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg", alt: "11-Acre Technoplex Campus Building", label: "Campus Architecture" },
    { src: "/images/drive/computer-lab.jpg", alt: "Computer Applications Cloud Lab", label: "Tech Labs" },
    { src: "/images/drive_third/ClassRooms_Academic.JPG", alt: "Smart Interactive Amphitheatres", label: "Smart Classrooms" },
    { src: "/images/drive_third/Library_Library.JPG", alt: "Central Research & IEEE Library", label: "Central Library" },
    { src: "/images/drive_third/Sports_IMG20260205104055.jpg", alt: "Athletic Meet Grounds & Arena", label: "Athletic Meet" },
    { src: "/images/drive_fourth/hack_day.png", alt: "Hack Day National Competition", label: "Coding Hackathon" },
    { src: "/images/drive_second/Activities.jpg", alt: "Annual Trifest Cultural Celebration", label: "Trifest Cultural Fest" },
    { src: "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg", alt: "Sunset Promenade & Colonnades", label: "Sunset Promenade" },
    { src: "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg", alt: "Twilight Floodlit Basketball Arena", label: "Sports Complex" },
    { src: "/images/drive_third/ClassRooms__MG_2339.JPG", alt: "Tiered Multimedia Lecture Theatre", label: "Interactive Theatres" },
    { src: "/images/drive_third/MBA_seminar_1.jpeg", alt: "Corporate Executive Seminars", label: "Corporate Seminars" },
    { src: "/images/drive_fourth/brain_logic_club.png", alt: "Brain Logic & Reasoning Club", label: "Student Clubs" },
    { src: "/images/drive_fourth/cloud_club.png", alt: "Enterprise Cloud Virtualization", label: "Cloud Computing" },
    { src: "/images/drive_fourth/web_dev_seminar.png", alt: "Web & IoT Tech Colloquium", label: "Developer Workshops" },
    { src: "/images/drive/innovation-mela.png", alt: "Innovation Mela Showcase", label: "Student Innovations" },
    { src: "/images/drive/campus-grounds.jpg", alt: "Landscaped Technoplex Quad", label: "Technoplex Lawns" },
  ];

  // Curated High-Definition Campus Slides (auto-advancing every 5 seconds just like the main page)
  const aboutSlides = [
    {
      eyebrow: "CAMPUS ARCHITECTURE & INFRASTRUCTURE",
      headline: "11-Acre Flagship Technoplex Campus Complex",
      subheadline: "Four-storeyed modern academic facility in the heart of Infocity IT Corridor, Chandaka Industrial Estate, flanked by global tech leaders.",
      image: "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg",
      tag: "CAMPUS ARCHITECTURE",
      location: "Infocity IT Corridor, Bhubaneswar",
      description: "Our modern four-storeyed academic facility situated in the heart of Infocity IT Corridor, Chandaka Industrial Estate, flanked by global tech giants.",
    },
    {
      eyebrow: "COMPUTING & AI SPECIALIZATIONS",
      headline: "High-Density Cloud Virtualization Hub",
      subheadline: "High-performance desktop terminals, gigabit fiber optic network, and specialized computing clusters for BCA scholars.",
      image: "/images/drive/computer-lab.jpg",
      tag: "COMPUTING & AI LABS",
      location: "Enterprise Systems Lab",
      description: "Equipped with high-performance desktop terminals, gigabit fiber optic network, and specialized computing clusters for BCA scholars.",
    },
    {
      eyebrow: "ACADEMIC THEATRES & CBCS",
      headline: "Multimedia Tiered Smart Amphitheatres",
      subheadline: "Acoustically treated tiered lecture theatres engineered with interactive instructor consoles and digital presentation hubs.",
      image: "/images/drive_third/ClassRooms_Academic.JPG",
      tag: "ACADEMIC THEATRES",
      location: "CBCS Lecture Amphitheatres",
      description: "Acoustically treated tiered lecture theatres engineered with interactive instructor consoles and digital presentation hubs for immersive learning.",
    },
    {
      eyebrow: "CENTRAL RESEARCH ARCHIVES",
      headline: "Central DELNET & IEEE Stacks",
      subheadline: "70,000+ text and reference volumes, automated OPAC search, digital resource terminals, and direct IEEE database access.",
      image: "/images/drive_third/Library_Library.JPG",
      tag: "CENTRAL RESEARCH LIBRARY",
      location: "DELNET & IEEE Stacks",
      description: "Vast archival reference collections, automated OPAC search, digital resource terminals, and direct access to international research publications.",
    },
    {
      eyebrow: "ATHLETICS & RECREATION",
      headline: "Full-Track Athletic Grounds & Arena",
      subheadline: "Expansive multi-discipline sports complex hosting annual athletic meets, inter-collegiate tournaments, and wellness recreational greens.",
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
      tag: "ATHLETICS & SPORTS",
      location: "Sports Complex & Arena",
      description: "Expansive multi-discipline sports complex hosting annual athletic meets, inter-collegiate tournaments, volleyball, and wellness recreational greens.",
    },
    {
      eyebrow: "INNOVATION & HACKATHONS",
      headline: "National Hack Day & Algorithmic Sprints",
      subheadline: "24-hour hackathons and software prototyping sprints where students build creative real-world solutions under faculty mentorship.",
      image: "/images/drive_fourth/hack_day.png",
      tag: "STUDENT INNOVATION",
      location: "Flagship Programming Chapter",
      description: "24-hour hackathons and software prototyping sprints where students build creative real-world solutions under faculty and industry mentorship.",
    },
    {
      eyebrow: "CAMPUS ENVIRONMENT & GREENERY",
      headline: "Sunset Promenade & Royal Colonnades",
      subheadline: "Symmetrical paved walkways flanked by lush green landscape and royal palms, creating an inspiring learning environment.",
      image: "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg",
      tag: "CAMPUS ENVIRONMENT",
      location: "Infocity Green Tech Corridor",
      description: "Symmetrical paved walkways flanked by lush green landscape and royal palms, creating an inspiring environment for student transformation.",
    },
    {
      eyebrow: "CULTURAL FORUM & ARTS",
      headline: "Annual Trifest Cultural Celebration",
      subheadline: "Vibrant annual cultural extravaganzas, musical concerts, youth forums, and community outreach campaigns fostering holistic leadership.",
      image: "/images/drive_second/Activities.jpg",
      tag: "CULTURAL FORUM",
      location: "Main Stage Arena",
      description: "Vibrant annual cultural extravaganzas, musical concerts, youth forums, and community outreach campaigns fostering holistic leadership.",
    },
  ];

  // Automatic slide rotation:
  // The 3D Helix animation plays initially for 5 seconds.
  // At 5 seconds, it transitions smoothly to sequential full-bleed image slides advancing every 5s just like the main page.
  useEffect(() => {
    const interval = setInterval(() => {
      setShow3DHelix(false);
      setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [aboutSlides.length]);

  const nextSlide = () => {
    setShow3DHelix(false);
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
  };

  const prevSlide = () => {
    setShow3DHelix(false);
    setCurrentSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  };

  const pillars = [
    {
      id: "vision",
      number: "PILLAR 0 1",
      title: "Academic Vision",
      subtitle: "Excellence in Teaching, Research & Mentorship",
      gradient: "from-blue-600 via-indigo-600 to-cyan-500",
      accentBg: "bg-blue-50/90 text-blue-700 border-blue-200",
      tagColor: "text-blue-700 bg-blue-50/90 border-blue-200/90",
      beaconColor: "bg-blue-500",
      glowBorder: "hover:border-blue-300/80",
      glowShadow: "hover:shadow-blue-500/15",
      cardHoverBg: "from-blue-50/70 via-indigo-50/30 to-white",
      iconGradient: "bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25",
      dotGradient: "bg-gradient-to-r from-blue-600 to-indigo-500 shadow-xs shadow-blue-500/40",
      learnMoreColor: "text-blue-600 group-hover:text-blue-700",
      desc: "To achieve and sustain a reputation for excellence in teaching, learning, applied research, and industry mentorship while upholding enduring human and ethical values.",
      points: [
        "Undisputed undergraduate institute of choice for Computer Applications & Business Administration.",
        "Holistic personality development and corporate finishing school culture integrated into CBCS.",
        "Recognized center of academic distinction and faculty scholarship across Eastern India.",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "mission",
      number: "PILLAR 0 2",
      title: "Pedagogical Mission",
      subtitle: "Bridging Academic Rigor with Industry Readiness",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      accentBg: "bg-purple-50/90 text-purple-700 border-purple-200",
      tagColor: "text-purple-700 bg-purple-50/90 border-purple-200/90",
      beaconColor: "bg-purple-500",
      glowBorder: "hover:border-purple-300/80",
      glowShadow: "hover:shadow-purple-500/15",
      cardHoverBg: "from-purple-50/70 via-pink-50/30 to-white",
      iconGradient: "bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-purple-500/25",
      dotGradient: "bg-gradient-to-r from-purple-600 to-pink-500 shadow-xs shadow-purple-500/40",
      learnMoreColor: "text-purple-600 group-hover:text-purple-700",
      desc: "To provide the highest caliber of technical acumen, business ethics, and practical experience to undergraduate scholars through structured experiential learning.",
      points: [
        "Maintain premier computing virtualization clusters and continuous data science labs.",
        "Motivate students toward top-tier competitive campus selections from 1st Year onwards.",
        "Sustain vibrant industry-academia tie-ups with global consulting and Fortune 500 IT firms.",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "values",
      number: "PILLAR 0 3",
      title: "Core Institutional Values",
      subtitle: "Students are Our First, Second & Third Priority",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      accentBg: "bg-emerald-50/90 text-emerald-700 border-emerald-200",
      tagColor: "text-emerald-700 bg-emerald-50/90 border-emerald-200/90",
      beaconColor: "bg-emerald-500",
      glowBorder: "hover:border-emerald-300/80",
      glowShadow: "hover:shadow-emerald-500/15",
      cardHoverBg: "from-emerald-50/70 via-teal-50/30 to-white",
      iconGradient: "bg-gradient-to-tr from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25",
      dotGradient: "bg-gradient-to-r from-emerald-600 to-teal-500 shadow-xs shadow-emerald-500/40",
      learnMoreColor: "text-emerald-600 group-hover:text-emerald-700",
      desc: "At Trident, collaborative learning, administrative integrity, and student career transformation govern every policy and pedagogical decision.",
      points: [
        "ISO 9001:2008 certified academic quality framework and transparent institutional governance.",
        "Equality of opportunity, comprehensive merit scholarships, and inclusive mentorship.",
        "Respect for research inquiry, intellectual curiosity, and lasting corporate ethics.",
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const progressivePractices = [
    {
      title: "Teacher-Guardian Mentorship (TGM)",
      desc: "Every cohort of 15 students is assigned a designated faculty mentor who tracks continuous academic progress, attendance, psychological wellbeing, and semester preparation.",
      tag: "1:15 RATIO",
      blobGradient: "from-blue-400/40 via-sky-300/45 to-indigo-400/35",
      topGradient: "from-blue-600 via-sky-500 to-indigo-600",
      cardBg: "bg-gradient-to-b from-blue-50/70 via-sky-50/30 to-white",
      borderColor: "border-blue-200/90 hover:border-blue-400",
      borderHover: "hover:shadow-xl hover:shadow-blue-500/15",
      iconBg: "bg-blue-600",
      iconText: "text-white",
      iconShadow: "shadow-md shadow-blue-500/30",
      tagBadge: "bg-blue-100 text-blue-800 border-blue-300/80 font-bold",
      titleHover: "group-hover:text-blue-700",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Aptitude & Soft-Skill Finishing School",
      desc: "Integrated training from 1st Year onwards in quantitative aptitude, logical reasoning, corporate business communication, and mock GD-PI simulations.",
      tag: "YEAR 1 ONWARDS",
      blobGradient: "from-amber-400/40 via-orange-300/45 to-rose-400/35",
      topGradient: "from-amber-500 via-orange-500 to-rose-500",
      cardBg: "bg-gradient-to-b from-amber-50/70 via-orange-50/30 to-white",
      borderColor: "border-amber-200/90 hover:border-amber-400",
      borderHover: "hover:shadow-xl hover:shadow-amber-500/15",
      iconBg: "bg-amber-500",
      iconText: "text-white",
      iconShadow: "shadow-md shadow-amber-500/30",
      tagBadge: "bg-amber-100 text-amber-900 border-amber-300/80 font-bold",
      titleHover: "group-hover:text-amber-700",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Industry Colloquium & Masterclasses",
      desc: "Bi-weekly technical sessions, hackathons, and executive symposiums featuring seasoned industry leads from Microsoft, CGI, Amazon, and Big-4 consulting firms.",
      tag: "FORTNIGHTLY",
      blobGradient: "from-purple-400/40 via-fuchsia-300/45 to-indigo-400/35",
      topGradient: "from-purple-600 via-violet-500 to-indigo-600",
      cardBg: "bg-gradient-to-b from-purple-50/70 via-violet-50/30 to-white",
      borderColor: "border-purple-200/90 hover:border-purple-400",
      borderHover: "hover:shadow-xl hover:shadow-purple-500/15",
      iconBg: "bg-purple-600",
      iconText: "text-white",
      iconShadow: "shadow-md shadow-purple-500/30",
      tagBadge: "bg-purple-100 text-purple-900 border-purple-300/80 font-bold",
      titleHover: "group-hover:text-purple-700",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Continuous Evaluation & Feedback Loop",
      desc: "Weekly surprise tests, mid-term examinations, and open-house parent meetings ensure that students remain ahead of Utkal University's CBCS grading benchmarks.",
      tag: "CONTINUOUS",
      blobGradient: "from-emerald-400/40 via-teal-300/45 to-cyan-400/35",
      topGradient: "from-emerald-600 via-teal-500 to-cyan-600",
      cardBg: "bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white",
      borderColor: "border-emerald-200/90 hover:border-emerald-400",
      borderHover: "hover:shadow-xl hover:shadow-emerald-500/15",
      iconBg: "bg-emerald-600",
      iconText: "text-white",
      iconShadow: "shadow-md shadow-emerald-500/30",
      tagBadge: "bg-emerald-100 text-emerald-900 border-emerald-300/80 font-bold",
      titleHover: "group-hover:text-emerald-700",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        
        {/* 1ST SECTION: DUAL-MODE HERO WITH PARTIAL BLACK SHADED MASK (3D HELIX FOR 5S -> AUTO PHOTO SLIDES JUST LIKE MAIN PAGE) */}
        <section
          aria-roledescription="carousel"
          aria-label="Campus highlights and 3D Helix"
          className="relative w-full h-[85vh] min-h-[620px] max-h-[850px] overflow-hidden bg-[#070D21] text-white"
        >
          {/* 1. 3D INFINITE SPIRAL HELIX BACKGROUND (Shown initially for ~5 sec, or toggled on demand) */}
          <div
            className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              show3DHelix ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <InfiniteSpiral
              items={spiralItems}
              animationMode="all"
              speed={0.52}
              radius={380}
              cardWidth={195}
              cardHeight={138}
              verticalSpacing={85}
              perspective={1300}
              cardRadius={14}
              centerScale={1.25}
              edgeBlur={5}
              edgeFade={0.3}
              cardsPerTurn={8}
              pauseOnHover={false}
              className="w-full h-full"
            />
          </div>

          {/* 2. FULL-BLEED SEQUENTIAL IMAGE SLIDES: Fade in smoothly after 5s and rotate every 5 seconds */}
          <div
            className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              !show3DHelix ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {aboutSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={`about-bg-${slide.tag}`}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-[2]" : "opacity-0 pointer-events-none z-[1]"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority={index === 0 || index === 1}
                    quality={92}
                    className={`object-cover object-center filter contrast-105 brightness-105 transition-transform duration-[6000ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    sizes="100vw"
                  />
                </div>
              );
            })}
          </div>

          {/* 3. PARTIAL SHADED MASK: Brighter & lighter scrim so background image is significantly more visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/80 via-[#070D21]/45 via-42% to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/40 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070D21]/30 via-transparent to-transparent z-10 pointer-events-none" />

          {/* 4. Top Right Floating Controls: View Mode Toggle & Location/Tag Pill */}
          <div className="absolute top-6 right-6 sm:right-12 z-30 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShow3DHelix((prev) => !prev)}
              className="flex items-center gap-1.5 bg-[#070D21]/80 hover:bg-[#070D21] backdrop-blur-md border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs text-indigo-200 hover:text-white transition-all cursor-pointer shadow-xs active:scale-95"
              title={show3DHelix ? "Switch to single photo slides" : "Switch to 3D Helix motion"}
            >
              <span className={`w-2 h-2 rounded-full ${show3DHelix ? "bg-cyan-400 animate-pulse" : "bg-emerald-400"}`} />
              <span className="font-semibold uppercase tracking-wider font-mono">
                {show3DHelix ? "3D Helix Motion" : "Photo Slides"}
              </span>
            </button>

            <div className="hidden sm:flex items-center gap-2 bg-[#070D21]/80 backdrop-blur-md border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs text-indigo-200 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="font-bold text-white uppercase tracking-wider">{aboutSlides[currentSlide].tag}</span>
              <span className="text-indigo-400">•</span>
              <span>{aboutSlides[currentSlide].location}</span>
            </div>
          </div>

          {/* 5. 3D Helix Overlay Text (Shown when 3D Helix is active) */}
          <div
            className={`absolute inset-0 z-20 flex items-center transition-opacity duration-1000 ease-in-out ${
              show3DHelix ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center w-full">
              <div className="max-w-4xl animate-fadeInUp">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 bg-blue-900/70 text-blue-100 border border-blue-400/50 px-3.5 py-1 text-xs tracking-widest uppercase rounded-full mb-4 sm:mb-6 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulse" />
                  <span>TACT TRUST • ESTD. 2000 • UTKAL UNIVERSITY</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-serif max-w-4xl leading-tight sm:leading-none mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Trident Academy of Professional Studies
                </h1>

                {/* Subheadline */}
                <p className="text-white sm:text-slate-100 text-base sm:text-lg max-w-2xl font-normal sm:font-medium mt-4 sm:mt-5 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                  Odisha&apos;s No. 1 private BCA &amp; BBA institution — 11-acre Infocity Technoplex in continuous 3D photographic motion, transitioning into authentic campus archives.
                </p>

                {/* CTA Row */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                  <button
                    onClick={() => {
                      setShow3DHelix(false);
                      setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
                    }}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-xl shadow-blue-600/30 hover-lift cursor-pointer active:scale-95"
                  >
                    Explore Photo Slides →
                  </button>

                  <Link
                    href="/programmes"
                    className="border border-indigo-300/50 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-xs active:scale-95"
                  >
                    Explore Programmes (BCA &amp; BBA)
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Sequential Photo Slide Content Layers (Cross-fade when show3DHelix is false) */}
          {aboutSlides.map((slide, index) => {
            const isActive = !show3DHelix && index === currentSlide;
            return (
              <div
                key={`content-${slide.tag}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-20 pointer-events-auto" : "opacity-0 pointer-events-none z-0"
                }`}
              >
                <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center w-full">
                  <div className="max-w-4xl animate-fadeInUp">
                    {/* Eyebrow Pill */}
                    <div className="inline-flex items-center gap-2 bg-blue-900/70 text-blue-100 border border-blue-400/50 px-3.5 py-1 text-xs tracking-widest uppercase rounded-full mb-4 sm:mb-6 backdrop-blur-md shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.9)] animate-pulse" />
                      <span>{slide.eyebrow}</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-serif max-w-4xl leading-tight sm:leading-none mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {slide.headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="text-white sm:text-slate-100 text-base sm:text-lg max-w-2xl font-normal sm:font-medium mt-4 sm:mt-5 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                      {slide.subheadline}
                    </p>

                    {/* CTA Row */}
                    <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-xl shadow-blue-600/30 hover-lift cursor-pointer active:scale-95"
                      >
                        Apply for 2026 Batch →
                      </button>

                      <button
                        onClick={() => setShow3DHelix(true)}
                        className="border border-indigo-300/50 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-xs active:scale-95 cursor-pointer"
                      >
                        View 3D Helix Motion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 7. Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 8. Pagination Indicators with Animated Progress Line */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
            {aboutSlides.map((slide, i) => (
              <button
                key={`dot-${slide.tag}`}
                onClick={() => {
                  setShow3DHelix(false);
                  setCurrentSlide(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative py-2 cursor-pointer"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    !show3DHelix && i === currentSlide ? "w-8 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </section>

        {/* 2X2 ACCREDITATIONS & INSTITUTIONAL PROFILE: LIGHT VARIANT WITH STAGGER VIEWPORT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Story & 2x2 Accreditations */}
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                    STATUTORY COMPLIANCE // BPUT &amp; UTKAL
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight mt-1">
                    Shaping Technology &amp; Business Leaders at Infocity
                  </h2>
                </div>

                <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The Bachelor of Computer Applications (BCA) and Bachelor of Business Administration (BBA) 
                    programmes of TACT are conducted under <strong className="text-zinc-950 font-medium">Trident Academy of Professional Studies</strong> at 
                    our modern four-storeyed Technoplex at F2D, Chandaka Industrial Estate, Bhubaneswar.
                  </p>
                  <p>
                    Strategically located across an 11-acre campus in close proximity to global tech titans including 
                    Infosys, TCS, Wipro, and Mindtree, our students train in an ecosystem immersed in enterprise 
                    computing, financial analytics, and corporate management.
                  </p>
                </div>

                {/* Elevated Fluid Accreditation Stream */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {accreditations.map((item, idx) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="relative p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-white transition-all duration-300 group cursor-default"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-indigo-700 bg-indigo-50/90 border border-indigo-200/60 px-2 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                        <span className="text-xl font-mono font-extrabold text-blue-600">
                          {item.stat}
                        </span>
                      </div>
                      <div className="font-bold text-base text-zinc-950 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal mt-1">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Campus Showcase Photo Card + Institutional Credo */}
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 flex flex-col gap-6"
              >
                {/* Real Campus Showcase Photo Viewport */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-zinc-200/80 group">
                  <Image
                    src="/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg"
                    alt="Trident Technoplex Campus Infocity"
                    fill
                    loading="lazy"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                      11-Acre Technoplex
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      Infocity IT Corridor, Patia
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      Flanked by Infosys, TCS &amp; Wipro Campus
                    </div>
                    <p className="text-xs text-slate-200 font-light mt-1">
                      Odisha's premier technology and undergraduate education hub.
                    </p>
                  </div>
                </div>

                {/* Institutional Charter Summary (Cardless Open Spread) */}
                <div className="py-6 border-t border-b border-indigo-100/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    ACADEMIC CHARTER COMMITMENT
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    Nurturing Next-Gen Technocrats &amp; Business Leaders
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    TAPS combines the rigorous curriculum of Utkal University's Choice-Based Credit System (CBCS) 
                    with real-world software development sprints, live corporate internships, and executive leadership coaching.
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-indigo-100">
                    <div className="pl-4 border-l-2 border-blue-600">
                      <div className="text-xl font-mono font-bold text-blue-700">26+ Yrs</div>
                      <div className="text-[11px] text-slate-500 font-medium">Educational Legacy</div>
                    </div>
                    <div className="pl-4 border-l-2 border-purple-600">
                      <div className="text-xl font-mono font-bold text-purple-700">138+</div>
                      <div className="text-[11px] text-slate-500 font-medium">Visiting Recruiters</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </section>
        </AnimatedBackground>

        {/* 3 PILLARS OF DISTINCTION: VISION, MISSION & VALUES (HIGH IMPACT MODERN SHOWCASE) */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Subtle Ambient Color Transition Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-transparent blur-[90px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[360px] rounded-full bg-gradient-to-br from-purple-400/15 via-pink-300/10 to-transparent blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-emerald-400/20 via-teal-300/15 to-transparent blur-[90px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />

          {/* Ambient Decorative Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="about-vm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-vm-grid)" />
          </svg>

          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50/90 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Vision, Mission &amp; Values
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                What We Stand For, <span className="font-semibold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">and How We Lead</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                The institutional pillars underpinning 26+ years of academic dominance and ethical leadership in Eastern India.
              </p>
            </div>

            {/* 3 Luxury Institutional Pillars (Card Architectural Triad with Transition Colours) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  whileHover={{ y: -8, transition: { duration: 0.28, ease: "easeOut" } }}
                  className={`p-8 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-zinc-200/90 shadow-sm flex flex-col justify-between relative group overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl ${pillar.glowShadow} ${pillar.glowBorder}`}
                >
                  {/* Top Glowing Shimmer Gradient Beam Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`} />

                  {/* Subtle Internal Transition Color Hover Pool */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${pillar.cardHoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Header Strip with Glowing Pillar Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${pillar.tagColor}`}>
                        <span className="relative flex h-2 w-2 mr-0.5">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pillar.beaconColor}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${pillar.beaconColor}`}></span>
                        </span>
                        {pillar.number}
                      </span>
                      <div className={`w-11 h-11 rounded-2xl ${pillar.iconGradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md`}>
                        {pillar.icon}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-900 transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <div className={`text-xs font-mono font-semibold uppercase tracking-wider mb-4 ${pillar.learnMoreColor}`}>
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.desc}
                    </p>

                    {/* Bullet Points with glowing pips */}
                    <ul className="space-y-2.5 pt-4 border-t border-slate-100/90">
                      {pillar.points.map((pt, pIdx) => (
                        <li 
                          key={pIdx} 
                          className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug p-2 -mx-2 rounded-xl hover:bg-white/80 transition-colors duration-200"
                        >
                          <span className={`w-2 h-2 rounded-full ${pillar.dotGradient} shrink-0 mt-1 shadow-xs`} />
                          <span className="font-normal">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 pt-6 mt-6 border-t border-slate-100/90 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="font-semibold text-[11px] tracking-wider text-slate-400">TRIDENT CHARTER</span>
                    <span className={`font-bold inline-flex items-center gap-1 ${pillar.learnMoreColor} group-hover:translate-x-1.5 transition-transform duration-200`}>
                      Core Commitment <span>→</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>
        </AnimatedBackground>

        {/* PROGRESSIVE ACADEMIC PRACTICES: CARDLESS ADVANCED ANIMATED HORIZON */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Subtle Ambient Color Transition Glows */}
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-indigo-400/15 via-purple-300/10 to-transparent blur-[90px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
          <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400/15 via-teal-300/10 to-transparent blur-[90px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50/90 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Pedagogical Framework
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Progressive <span className="font-semibold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Academic Practices</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Leading universities globally emphasize holistic student development. 
                At TAPS, structured mentorship and corporate finishing school culture are built into the daily curriculum.
              </p>
            </div>

            {/* Seamless Elevated Pedagogical Stream with Transition Colours */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {progressivePractices.map((practice, idx) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="relative p-7 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300/80 flex flex-col justify-between group overflow-hidden transition-all duration-500"
                >
                  {/* Fluid Hover Ambient Light Pool */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl">
                    <div className={`absolute -inset-2 bg-gradient-to-b ${practice.blobGradient} blur-2xl opacity-40`} />
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-xs rounded-3xl" />
                  </div>

                  {/* Top Animated Light Rail */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent group-hover:from-transparent group-hover:to-transparent transition-colors overflow-hidden">
                    <motion.div 
                      className={`h-full w-full bg-gradient-to-r ${practice.topGradient}`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Content Floating Freely */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      {/* Illuminated Floating Icon Pedestal */}
                      <motion.div 
                        whileHover={{ rotate: 6, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={`w-12 h-12 rounded-2xl ${practice.iconBg} ${practice.iconText} ${practice.iconShadow} flex items-center justify-center shadow-lg transition-transform`}
                      >
                        {practice.icon}
                      </motion.div>

                      {/* Floating Micro-Badge */}
                      <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-2xs ${practice.tagBadge}`}>
                        {practice.tag}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase mb-1">
                      PRACTICE 0{idx + 1}
                    </div>

                    <h3 className={`text-lg font-bold text-zinc-950 mb-3 ${practice.titleHover} transition-colors leading-snug`}>
                      {practice.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {practice.desc}
                    </p>
                  </div>

                  {/* Bottom Interactive Arrow Indicator */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    <span className="text-[11px] font-semibold text-slate-400">TAPS Standard</span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1.5 transition-transform duration-200">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* CAMPUS ENVIRONMENT & ACADEMIC CULTURE VISUAL SHOWCASE */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Campus Atmosphere
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Where Academic Rigor Meets Corporate Readiness
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Take a glimpse into our modern amphitheatre lecture halls, central reference libraries, and executive seminar environments.
              </p>
            </div>

            {/* Cardless Editorial Campus Atmosphere Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {[
                {
                  title: "Tiered Lecture Theatres",
                  subtitle: "Faculty-Mentored Pedagogy",
                  desc: "Acoustically engineered amphitheatre rooms hosting interactive BCA & BBA lectures and code reviews.",
                  img: "/images/drive_third/ClassRooms__MG_2339.JPG",
                  tag: "Lecture Theatres",
                },
                {
                  title: "Central Research Library",
                  subtitle: "50,000+ Volume Archives",
                  desc: "Spacious reading halls with full DELNET access, research journals, and air-conditioned individual study pods.",
                  img: "/images/drive_third/Library_Library.JPG",
                  tag: "Knowledge Hub",
                },
                {
                  title: "Executive Seminar Halls",
                  subtitle: "Industry Colloquium & Case Studies",
                  desc: "Smart presentation suites where corporate leaders, visiting faculty, and scholars debate real-world market cases.",
                  img: "/images/drive_third/MBA_seminar_1.jpeg",
                  tag: "Seminar Suites",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group flex flex-col justify-between space-y-4"
                >
                  <div className="relative h-60 sm:h-64 w-full rounded-3xl overflow-hidden shadow-lg group-hover:scale-102 transition-transform duration-500">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-black backdrop-blur-xs shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* EYE-CATCHING STICKY HISTORICAL TIMELINE: DARK VARIANT (INSPIRED BY TACT ARCHIVE) */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Dark Scrim */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/1746352355680.jpg"
              alt="Trident Campus Heritage"
              fill
              loading="lazy"
              quality={90}
              className="object-cover object-center filter contrast-105 opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070D21] via-[#051c33]/95 to-[#070D21]" />
            
            {/* Ambient Radial Mesh Lighting */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px]" />
            <div className="absolute top-2/3 -right-32 w-[480px] h-[480px] bg-sky-500/10 rounded-full blur-[130px]" />
            <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
          </div>

          <section id="history" className="relative z-10 py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            
            {/* Centered Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-amber-400 mb-4 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/25 shadow-2xs backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                ESTABLISHED: 1991 • TRIDENT ARCHIVE
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                From a Pioneering Finishing School to Eastern India&apos;s Benchmark
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 mt-4 font-light leading-relaxed max-w-2xl mx-auto">
                Tracing over three decades of academic dominance, technological breakthroughs, and sustained corporate campus placements under the TACT Trust.
              </p>
            </div>

            {/* 1. Kinetic Horizon Era Ribbon (Progress Rail) */}
            <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
              {/* Connecting glowing progress line */}
              <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-zinc-800 rounded-full hidden sm:block">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 via-indigo-500 to-purple-500 rounded-full"
                  animate={{
                    width: `${((milestones.findIndex((m) => m.year === selectedTimelineYear)) / (milestones.length - 1)) * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              </div>

              {/* 5 Milestone Points */}
              <div className="relative z-10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-2">
                {milestones.map((m, idx) => {
                  const isActive = selectedTimelineYear === m.year;
                  return (
                    <button
                      key={m.year}
                      onClick={() => setSelectedTimelineYear(m.year)}
                      className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-hidden"
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.6)] scale-110 ring-4 ring-amber-400/20"
                            : "bg-zinc-900/90 text-zinc-400 border border-zinc-700/80 hover:border-amber-400 hover:text-white hover:scale-105"
                        }`}
                      >
                        {isActive ? (
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950" />
                          </span>
                        ) : (
                          <span>0{idx + 1}</span>
                        )}
                      </div>
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-amber-400" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}>
                        {m.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Spotlight Cinema Stage: Large Cinematic Split Showcase with AnimatePresence */}
            {(() => {
              const currentMilestoneIdx = milestones.findIndex((m) => m.year === selectedTimelineYear);
              const currentMilestone = milestones[currentMilestoneIdx >= 0 ? currentMilestoneIdx : 0];
              const handlePrevMilestone = () => {
                const prev = (currentMilestoneIdx - 1 + milestones.length) % milestones.length;
                setSelectedTimelineYear(milestones[prev].year);
              };
              const handleNextMilestone = () => {
                const next = (currentMilestoneIdx + 1) % milestones.length;
                setSelectedTimelineYear(milestones[next].year);
              };

              return (
                <div className="relative max-w-6xl mx-auto mb-16 sm:mb-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMilestone.year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-950/90 border border-zinc-800/90 shadow-2xl backdrop-blur-2xl relative overflow-hidden"
                    >
                      {/* Dynamic Ambient Glow matching Era */}
                      <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-50 bg-gradient-to-br ${currentMilestone.accentGlow}`} />
                      <div className={`absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-40 bg-gradient-to-tl ${currentMilestone.accentGlow}`} />

                      {/* Top kinetic color bar */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-500" />

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                        
                        {/* Left Column: Narrative, Typography & Metrics */}
                        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                          
                          {/* Floating Watermark & Badge */}
                          <div>
                            <div className="flex items-center justify-between gap-4 mb-4">
                              <span className={`text-[11px] font-mono uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full border shadow-2xs backdrop-blur-md ${currentMilestone.accentBadge}`}>
                                {currentMilestone.tag}
                              </span>
                              <span className="text-xs font-mono text-zinc-500 font-semibold">
                                ERA 0{currentMilestoneIdx + 1} OF 0{milestones.length}
                              </span>
                            </div>

                            {/* Large Animated Year */}
                            <div className="text-5xl sm:text-7xl font-mono font-black tracking-tight bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent mb-3 drop-shadow-md">
                              {currentMilestone.year}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-4">
                              {currentMilestone.title}
                            </h3>

                            {/* Story Description */}
                            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-6">
                              {currentMilestone.desc}
                            </p>
                          </div>

                          {/* Highlight Callout Card */}
                          <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/60 backdrop-blur-md flex items-center gap-3 shadow-inner">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                            <span className="text-xs sm:text-sm text-cyan-200 font-medium">
                              {currentMilestone.highlight}
                            </span>
                          </div>

                          {/* 3 Key Era Specs Chips */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {currentMilestone.specs.map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-xs font-mono px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-300 shadow-2xs"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>

                          {/* Navigation Controls */}
                          <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                            <button
                              onClick={handlePrevMilestone}
                              className="px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2"
                            >
                              <span>←</span>
                              <span>Previous Era</span>
                            </button>

                            <div className="flex items-center gap-1.5">
                              {milestones.map((m, dIdx) => (
                                <span
                                  key={dIdx}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${
                                    dIdx === currentMilestoneIdx
                                      ? "w-6 bg-amber-400"
                                      : "w-2 bg-zinc-700"
                                  }`}
                                />
                              ))}
                            </div>

                            <button
                              onClick={handleNextMilestone}
                              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-400/20"
                            >
                              <span>Next Era</span>
                              <span>→</span>
                            </button>
                          </div>

                        </div>

                        {/* Right Column: Cinematic 3D Archival Window */}
                        <div className="lg:col-span-6 relative">
                          <div className="relative h-72 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/window">
                            <Image
                              src={currentMilestone.image}
                              alt={currentMilestone.visualTitle}
                              fill
                              loading="lazy"
                              quality={92}
                              className="object-cover object-center group-hover/window:scale-106 transition-transform duration-700 ease-out filter contrast-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Film grain vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                            {/* Top Badges */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-300 shadow-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                VERIFIED ARCHIVAL EXHIBIT
                              </div>
                              <span className="text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                                TRIDENT HERITAGE
                              </span>
                            </div>

                            {/* Bottom Caption Overlay */}
                            <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                              <div className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                                {currentMilestone.visualTitle}
                              </div>
                              <div className="text-xs font-mono text-cyan-300 font-medium mt-1">
                                {currentMilestone.visualSubtitle}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })()}

            {/* 3. Panoramic Milestone Shelf: 5 Eras Cards side by side */}
            <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Explore Complete 35-Year Archival Timeline
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {milestones.map((m, idx) => {
                  const isActive = selectedTimelineYear === m.year;
                  return (
                    <motion.div
                      key={m.year}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      onClick={() => setSelectedTimelineYear(m.year)}
                      className={`rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between border relative overflow-hidden ${
                        isActive
                          ? "bg-zinc-800/90 border-amber-400 shadow-xl shadow-amber-500/15 ring-2 ring-amber-400/30"
                          : "bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50"
                      }`}
                    >
                      {/* Top thumbnail */}
                      <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 border border-zinc-700/60">
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          loading="lazy"
                          quality={85}
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1.5 left-2 text-[10px] font-mono font-bold text-amber-300 uppercase">
                          ERA 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <div className="text-xl font-mono font-black text-white mb-1">
                          {m.year}
                        </div>
                        <h4 className="text-xs font-bold text-zinc-200 line-clamp-2 leading-snug mb-1">
                          {m.title}
                        </h4>
                      </div>

                      <div className="pt-2 mt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-zinc-500">Exhibit 0{idx + 1}</span>
                        <span className={isActive ? "text-amber-400 font-bold" : "text-zinc-400"}>
                          {isActive ? "Viewing ●" : "Select →"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom 4-Column Legacy Metrics Banner (Seamless Cardless Metric Rail) */}
            <div className="mt-16 sm:mt-24 pt-12 border-t border-zinc-800/80 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80 gap-4 sm:gap-0">
                {[
                  { stat: "35+ Yrs", label: "Educational Excellence", sub: "Since 1991 Inception" },
                  { stat: "500+", label: "Software Engineers", sub: "Trained in TSPL Finishing School" },
                  { stat: "Permanent", label: "Govt. Recognition", sub: "AICTE & Utkal University" },
                  { stat: "138+", label: "Corporate Partners", sub: "Global Recruitment Linkages" },
                ].map((item, idx) => (
                  <div key={idx} className="py-4 px-5 text-center group">
                    <div className="text-3xl sm:text-4xl font-mono font-black bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      {item.stat}
                    </div>
                    <div className="text-xs font-bold text-white mt-1.5">{item.label}</div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </AnimatedBackground>

      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
