"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

// Interactive 3D Tilt Card with dynamic cursor-following specular glare
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = isHovered ? (0.5 - mousePos.y) * 6 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 6 : 0;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className={`relative ${className}`}
    >
      {children}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.45), transparent 40%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default function ProgrammesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<"bca" | "bba">("bca");
  const [activeTab, setActiveTab] = useState<"curriculum" | "certifications" | "labs" | "eligibility" | "careers">("curriculum");

  const programmes = {
    bca: {
      code: "BCA",
      title: "Bachelor of Computer Applications",
      degree: "3-Year Full-Time Degree • 6 Semesters",
      affiliation: "Affiliated to Utkal University • Approved by AICTE & Govt. of Odisha",
      intake: "128 Seats Approved",
      heroBg: "/images/drive_new/1721020760290.jpg",
      heroTag: "SCHOOL OF COMPUTING • BLOCK-1",
      photo: "/images/drive_third/ClassRooms_Academic.JPG",
      photoCaption: "Smart Computing Amphitheatre • Official TACT Lecture Theatre",
      tagline: "High-Performance Computational Systems, Full-Stack Development & AI Foundations",
      summary:
        "The BCA programme at TAPS is engineered to transform students into enterprise-ready software developers, cloud architects, and data engineers. Taught by 100% NET/Ph.D qualified faculty with round-the-clock access to cloud computing clusters, practical coding labs, and continuous hackathon mentoring.",
      highlights: [
        "138+ Annual Corporate Recruiters (Placements 2026)",
        "Dedicated Python, Full-Stack Java & Cloud Computing Labs",
        "Curriculum mapped to Utkal University CBCS Framework",
        "Industry certifications included in academic fees",
      ],
      keySkills: [
        { name: "Full-Stack Software Engineering", tag: "MERN / Spring Boot" },
        { name: "Cloud Virtualization & DevOps", tag: "AWS / Docker / Linux" },
        { name: "Applied Python & Data Engineering", tag: "Pandas / NumPy / ML" },
        { name: "Enterprise Database Systems", tag: "Oracle / MySQL / NoSQL" },
      ],
      labFacilities: [
        {
          title: "Cloud Virtualization & Server Lab",
          subtitle: "Enterprise Computing Cluster",
          img: "/images/drive_fourth/cloud_club.png",
          desc: "High-density computer terminals connected to 24/7 dedicated gigabit fiber, supporting cloud deployment and virtual machine clustering.",
        },
        {
          title: "Smart Computing Amphitheatre",
          subtitle: "Interactive Multi-Media Lectures",
          img: "/images/drive_third/ClassRooms_Academic.JPG",
          desc: "Acoustically treated lecture halls equipped with ultra-bright 4K projectors for live algorithmic walkthroughs and code reviews.",
        },
        {
          title: "Web Dev & IoT Innovation Lab",
          subtitle: "Applied Software Prototyping",
          img: "/images/drive_fourth/web_dev_seminar.png",
          desc: "Specialized collaborative workstations for hackathon teams, open-source repositories, and embedded IoT experimentation.",
        },
        {
          title: "Central Research & DELNET Library",
          subtitle: "50,000+ Computational Volumes",
          img: "/images/drive_third/Library_Library.JPG",
          desc: "Direct online DELNET repository access, IEEE computing transactions, and quiet air-conditioned project discussion carrels.",
        },
      ],
      semesters: [
        {
          sem: "Semester I",
          subjects: [
            "Mathematics-I",
            "Business Practices",
            "Digital Electronics",
            "Computer Fundamentals",
            "Programming Techniques Using C",
            "Practical: MS-DOS & Windows Lab",
            "Practical: C Programming Lab",
          ],
        },
        {
          sem: "Semester II",
          subjects: [
            "Mathematics-II",
            "Discrete Mathematical Structures",
            "Principles of Management & Organisational Behaviour",
            "Computer Organisation & Architecture",
            "Data Structure",
            "Practical: MS-Office Suite Lab",
            "Practical: Data Structure Using C Lab",
          ],
        },
        {
          sem: "Semester III",
          subjects: [
            "Computer Oriented Numerical Methods",
            "Managerial Economics",
            "Operating System",
            "File Structure",
            "Object Oriented Programming with C++",
            "Practical: Numerical Computing Lab",
            "Practical: Programming in C++ Lab",
          ],
        },
        {
          sem: "Semester IV",
          subjects: [
            "Probability & Statistics",
            "Accounting & Financial Management",
            "Business Communication Skill",
            "Database Management System",
            "Computer Graphics",
            "Practical: Database Lab (Oracle)",
            "Practical: Graphics Programming Lab",
          ],
        },
        {
          sem: "Semester V",
          subjects: [
            "Combinatorics & Graph Theory",
            "Computer Communications & Networking",
            "Software Engineering",
            "Unix & Shell Programming",
            "Visual & Windows Programming",
            "Practical: Unix Shell Programming Lab",
            "Practical: Visual Programming Lab",
          ],
        },
        {
          sem: "Semester VI",
          subjects: [
            "Object Oriented Design Using UML",
            "E-Commerce",
            "Management Information System (MIS)",
            "Internet & Java Programming",
            "Multimedia & Applications",
            "Practical: Java Programming Lab",
            "Mini Project & Viva-Voce",
          ],
        },
      ],
      certifications: [
        {
          name: "Full-Stack Web Development",
          provider: "Industry Finishing Wing",
          desc: "Mastery of modern JavaScript/TypeScript, React, Node.js, and Spring Boot with production deployment pipelines.",
          badge: "Web Architecture",
          icon: "💻",
        },
        {
          name: "Cloud Practitioner Foundations",
          provider: "AWS / Microsoft Academic Partner",
          desc: "Serverless architecture, containerization with Docker, virtual machines, and enterprise VPC networking.",
          badge: "Cloud Computing",
          icon: "☁️",
        },
        {
          name: "Python for Data Science & AI",
          provider: "Data Analytics Lab",
          desc: "Applied statistical modeling, Pandas dataframes, NumPy vectorized arithmetic, and scikit-learn predictive models.",
          badge: "Data & AI",
          icon: "📊",
        },
        {
          name: "Cyber Security & Ethical Defense",
          provider: "TAPS Center of Excellence",
          desc: "Network penetration fundamentals, OWASP Top-10 security benchmarks, and defensive encryption protocols.",
          badge: "Information Security",
          icon: "🛡️",
        },
      ],
      eligibility: {
        qualification: "Passed 10+2 / Higher Secondary with Mathematics / Statistics / Business Mathematics, OR a 3-year Diploma in Engineering from SCTE&VT Odisha.",
        board: "CHSE Odisha, CBSE, CISCE, or any recognized State/Central Board.",
        marks: "Minimum 45% aggregate in qualifying examination (40% for SC/ST candidates).",
        preferred: "Mathematics/Statistics or 3-year Engineering Diploma is required by Utkal University.",
        process: "Admissions strictly on first-cum-first-serve basis subject to eligibility norms.",
      },
      careers: [
        { role: "Software Development Engineer (SDE)", hiring: "TCS, Infosys, Wipro, Capgemini", packageRange: "₹4.5 - ₹8.5 LPA" },
        { role: "Cloud & Infrastructure Engineer", hiring: "AWS, CGI Info Systems, Tech Mahindra", packageRange: "₹4.8 - ₹9.0 LPA" },
        { role: "Data Analyst & Business Intelligence", hiring: "Deloitte, Cognizant, Genpact", packageRange: "₹5.0 - ₹9.5 LPA" },
        { role: "Cyber Security Analyst", hiring: "Enterprise IT security & banking firms", packageRange: "₹4.5 - ₹8.2 LPA" },
        { role: "Full-Stack Web Developer", hiring: "Fintech startups & product companies", packageRange: "₹4.2 - ₹8.0 LPA" },
        { role: "Postgraduate Pathways", hiring: "Direct eligibility for MCA, M.Sc CS, and MBA (IT)", packageRange: "Higher Education" },
      ],
    },
    bba: {
      code: "BBA",
      title: "Bachelor of Business Administration",
      degree: "4-Year Full-Time Degree • 8 Semesters (NEP Framework)",
      affiliation: "Affiliated to Utkal University • Approved by AICTE & Govt. of Odisha",
      intake: "128 Seats Approved",
      heroBg: "/images/drive_new/_DSC1852.JPG",
      heroTag: "MANAGEMENT & CORPORATE TOWER • BLOCK-5",
      photo: "/images/drive_third/MBA_seminar_1.jpeg",
      photoCaption: "Corporate Business Seminar Hall • Management Case Study Sessions",
      tagline: "Strategic Leadership, Financial Acumen, Corporate Analytics & Entrepreneurship",
      summary:
        "The BBA programme at TAPS builds executive competencies, commercial acumen, and strategic managerial thought. Designed strictly in alignment with Utkal University's CBCS and NEP 4-year framework with specialized industry immersions in FinTech, Digital Marketing, and Supply Chain Analytics.",
      highlights: [
        "100+ Corporate Recruiters including Tier-1 Banks & Consulting Firms",
        "Analytics, Strategy, Fintech & Sustainability Student Clubs",
        "Executive GD-PI Amphitheatre for Corporate Interview Prep",
        "Regular Industry Colloquiums and Corporate Live Projects",
      ],
      keySkills: [
        { name: "Financial Modeling & Valuation", tag: "DCF / Excel Analytics" },
        { name: "Digital Marketing & Performance Media", tag: "SEO / Meta Ads / GA4" },
        { name: "Strategic HR & Talent Analytics", tag: "ATS / Competency Models" },
        { name: "Logistics & Supply Chain ERP", tag: "SAP / Operations Strategy" },
      ],
      labFacilities: [
        {
          title: "Executive Seminar Hall",
          subtitle: "Case Study & Executive Colloquiums",
          img: "/images/drive_third/MBA_seminar_1.jpeg",
          desc: "Smart presentation suites where corporate leaders, visiting faculty, and scholars debate real-world market cases.",
        },
        {
          title: "Corporate Recruitment Delegates",
          subtitle: "Executive Industry Placements",
          img: "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
          desc: "Visiting senior corporate recruitment delegates, HR executives, and industry partners felicitated during annual on-campus hiring drives.",
        },
        {
          title: "Executive GD Chambers",
          subtitle: "Boardroom Group Discussion Arena",
          img: "/images/drive_third/Placement_GD-Halls.jpg",
          desc: "Circular conference seating with faculty moderation desks designed for corporate GD rehearsals and aptitude simulations.",
        },
        {
          title: "Business Analytics & Research Wing",
          subtitle: "Academic Block-5 Enclave",
          img: "/images/drive_new/_DSC1852.JPG",
          desc: "Home to the Center for Sustainability Research and Center for Business Analytics under the Department of Management.",
        },
      ],
      semesters: [
        {
          sem: "Semester I",
          subjects: [
            "CC101: Principles & Practices of Management",
            "AEC101: Business Communication-I",
            "CC102: Financial Accounting",
            "CC103: Business Statistics & Logic",
            "AEC102: General English",
            "MDE101: Indian Knowledge System",
            "VAC101: Environmental Science & Sustainability",
          ],
        },
        {
          sem: "Semester II",
          subjects: [
            "CC201: Human Behaviour & Organization",
            "CC202: Marketing Management",
            "CC203: Business Economics",
            "SEC201: Emerging Technologies & Application",
            "MDE201: Media Literacy & Critical Thinking",
            "VAC201: Indian Constitution",
            "AEC201: Business Communication-II",
          ],
        },
        {
          sem: "Semester III",
          subjects: [
            "CC301: Cost & Management Accounting",
            "CC302: Legal & Ethical Issues in Business",
            "CC303: Human Resource Management",
            "MDE301: Indian Systems of Health & Wellness",
            "SEC301: Management Information System (MIS)",
            "VAC301: Yoga / Sports / NCC / Disaster Management",
          ],
        },
        {
          sem: "Semester IV",
          subjects: [
            "CC401: Entrepreneurship & Startup Ecosystem",
            "CC402: Operations Management",
            "CC403: Financial Management",
            "CC404: Business Research Methodology",
            "VAC401: Business Environment & Public Policy",
            "CC405: International Business",
            "SEC401: Design Thinking & Innovation",
          ],
        },
        {
          sem: "Semester V",
          subjects: [
            "CC501: Strategic Management",
            "CC502: Logistics & Supply Chain Management",
            "DSE-I: Discipline Specific Elective I",
            "DSE-II: Discipline Specific Elective II",
            "SEC501: Internship / Capstone Project",
            "SEC502: Major Project (Initiation)",
          ],
        },
        {
          sem: "Semester VI",
          subjects: [
            "CC601: Project Management",
            "CC602: Business Taxation",
            "DSE-III: Discipline Specific Elective III",
            "DSE-IV: Discipline Specific Elective IV",
            "SEC601: Corporate Governance",
            "SEC602: Major Project Evaluation",
          ],
        },
        {
          sem: "Semester VII",
          subjects: [
            "OE701: AI for Business & Digital Ethnography",
            "CC701: Entrepreneurial Leadership",
            "DSE-V: Discipline Specific Elective V",
            "DSE-VI: Discipline Specific Elective VI",
            "SEC701: Dissertation Work (Phase I)",
            "SEC702: Summer Internship – II",
          ],
        },
        {
          sem: "Semester VIII",
          subjects: [
            "DSE-VII: Advanced Discipline Elective VII",
            "DSE-VIII: Advanced Discipline Elective VIII",
            "DSE-IX: Advanced Discipline Elective IX",
            "SEC801: Final Dissertation Defense & Viva",
          ],
        },
      ],
      certifications: [
        {
          name: "Financial Modeling & Valuation (Excel)",
          provider: "FinTech Simulation Desk",
          desc: "DCF analysis, ratio analysis, sensitivity forecasting, and investment pitch decks.",
          badge: "Corporate Finance",
          icon: "📈",
        },
        {
          name: "Digital Marketing & Performance Media",
          provider: "Corporate Marketing Wing",
          desc: "SEO/SEM, Meta Ads, Google Analytics 4, and brand storytelling strategies.",
          badge: "Digital Growth",
          icon: "🎯",
        },
        {
          name: "HR Analytics & Talent Sourcing",
          provider: "Management Center of Excellence",
          desc: "Competency mapping, payroll automation, and modern ATS recruitment workflows.",
          badge: "Human Capital",
          icon: "👥",
        },
        {
          name: "Supply Chain & ERP Systems",
          provider: "Operations Research Wing",
          desc: "Inventory modeling, logistics optimization, and SAP ERP workflow overviews.",
          badge: "Operations & ERP",
          icon: "📦",
        },
      ],
      eligibility: {
        qualification: "Passed 10+2 / Higher Secondary in any stream (Science / Commerce / Arts).",
        board: "CHSE Odisha, CBSE, CISCE, or any recognized State/Central Board.",
        marks: "Minimum 45% aggregate in qualifying examination (40% for reserved categories).",
        preferred: "Basic proficiency in English communication and logical reasoning.",
        process: "Admissions strictly on first-cum-first-serve basis subject to eligibility norms.",
      },
      careers: [
        { role: "Business Development & Relationship Manager", hiring: "ICICI Bank, HDFC, Axis, Bandhan", packageRange: "₹4.2 - ₹7.5 LPA" },
        { role: "Financial & Investment Analyst", hiring: "Deloitte, Genpact, Corporate Brokerages", packageRange: "₹4.8 - ₹8.5 LPA" },
        { role: "Human Resource Executive & Recruiter", hiring: "Tech Mahindra, Capgemini, TCS", packageRange: "₹4.0 - ₹7.2 LPA" },
        { role: "Marketing & Brand Strategist", hiring: "FMCG, E-Commerce & Growth agencies", packageRange: "₹4.5 - ₹8.0 LPA" },
        { role: "Supply Chain & Operations Analyst", hiring: "Logistics, Retail & E-Commerce", packageRange: "₹4.2 - ₹7.8 LPA" },
        { role: "Postgraduate Pathways", hiring: "Direct advantage for CAT/XAT/MAT and premier MBA institutions", packageRange: "Executive MBA" },
      ],
    },
  };

  const current = programmes[selectedCourse];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO BANNER: DYNAMIC CYBER-GLASSMORPHIC SHOWCASE WITH ADAPTIVE BACKGROUND */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Infrastructure Background Image (Clean Drive Photos) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCourse}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.heroBg}
                  alt={`${current.title} at TAPS Infocity Campus`}
                  fill
                  priority
                  quality={92}
                  className="object-cover object-center filter contrast-105"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Smooth Multi-Layer Scrim for Flawless Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/98 via-[#070D21]/85 via-55% to-[#070D21]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-transparent to-[#070D21]/60" />

            {/* Ambient Radial Mesh Lights */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[130px]" />
          </div>

          <section className="relative z-10 py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading, Degree Switcher & Actions */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* High-Tech Animated Pill Badge */}
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-5 bg-zinc-900/90 border border-zinc-700/80 px-4 py-1.5 rounded-full shadow-2xs backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    <span>TACT Trust • Utkal Univ CBCS • AICTE Approved</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                    Curriculum Engineered for{" "}
                    <span className="font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                      Corporate Leadership
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 max-w-2xl">
                    TAPS exclusively offers premier full-time undergraduate degrees in{" "}
                    <strong className="text-white font-medium">Computer Applications (BCA)</strong> and{" "}
                    <strong className="text-white font-medium">Business Administration (BBA)</strong> under{" "}
                    Utkal University with comprehensive corporate finishing school training.
                  </p>

                  {/* Cardless Floating Dual Degree Switcher */}
                  <div className="p-1 rounded-full bg-zinc-900/70 border border-zinc-700/60 shadow-lg backdrop-blur-md inline-flex flex-col sm:flex-row gap-1 mb-8">
                    <button
                      onClick={() => setSelectedCourse("bca")}
                      className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                        selectedCourse === "bca" ? "text-slate-950" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      {selectedCourse === "bca" && (
                        <motion.div
                          layoutId="activeHeroCourseTab"
                          className="absolute inset-0 bg-white rounded-full shadow-md"
                          transition={{ type: "spring", stiffness: 420, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        01. BCA — Computer Applications
                      </span>
                      <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900/10 font-bold">
                        3 Yrs
                      </span>
                    </button>

                    <button
                      onClick={() => setSelectedCourse("bba")}
                      className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                        selectedCourse === "bba" ? "text-slate-950" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      {selectedCourse === "bba" && (
                        <motion.div
                          layoutId="activeHeroCourseTab"
                          className="absolute inset-0 bg-white rounded-full shadow-md"
                          transition={{ type: "spring", stiffness: 420, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                        02. BBA — Business Administration
                      </span>
                      <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900/10 font-bold">
                        4 Yrs NEP
                      </span>
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-lg cursor-pointer hover-lift flex items-center gap-2"
                    >
                      <span>Apply for {current.code} 2026</span>
                      <span>→</span>
                    </button>
                    <a
                      href="#deep-dive"
                      className="px-6 py-3 rounded-full bg-zinc-900/70 text-zinc-200 border border-zinc-700/80 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                      Explore Full Curriculum
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Cardless Open Holographic Degree Cockpit (No Heavy Enclosed Boxes) */}
              <div className="lg:col-span-5 relative">
                {/* Dynamic Ambient Color Aura */}
                <div className="absolute -inset-4 rounded-full blur-[100px] pointer-events-none opacity-40 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/30" />

                <div className="relative z-10 flex flex-col justify-between">
                  {/* Top Floating Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase px-3.5 py-1 rounded-full bg-blue-500/15 text-cyan-300 border border-blue-400/30 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      {current.code} TRACK SNAPSHOT
                    </div>
                    <span className="text-xs font-mono text-zinc-400 font-semibold">
                      {current.intake}
                    </span>
                  </div>

                  {/* Cardless Floating Visual Window */}
                  <div className="relative h-56 sm:h-64 w-full rounded-3xl overflow-hidden shadow-2xl mb-6 group cursor-pointer">
                    <Image
                      src={current.photo}
                      alt={current.title}
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                        {current.photoCaption}
                      </div>
                    </div>
                  </div>

                  {/* Free-Floating Typography */}
                  <div className="mb-6 space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {current.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {current.tagline}
                    </p>
                  </div>

                  {/* 4 Cardless Holographic Feature Stats (Divided by subtle hairlines, no rigid boxes) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-800/80">
                    <div className="text-left group">
                      <div className="text-xl font-mono font-black text-blue-400">100%</div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">NET / Ph.D</div>
                    </div>
                    <div className="text-left group">
                      <div className="text-xl font-mono font-black text-emerald-400">138+</div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Recruiters</div>
                    </div>
                    <div className="text-left group">
                      <div className="text-xl font-mono font-black text-purple-400">CBCS</div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Utkal Univ</div>
                    </div>
                    <div className="text-left group">
                      <div className="text-xl font-mono font-black text-amber-400">AICTE</div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Approval</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* AT-A-GLANCE DUAL PROGRAMME COMPARISON CARDS (BCA vs BBA) */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                Two Specialized Undergraduate Pathways
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Select Your Degree Specialization
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Click either degree track to dynamically load its semester breakdown, included certifications, computing facilities, and placement opportunities.
              </p>
            </div>

            {/* Cardless Dual Pathway Split Horizon (No Rigid Box Cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/80">
              
              {/* 1. BCA SHOWCASE */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setSelectedCourse("bca");
                  const el = document.getElementById("deep-dive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`p-8 sm:p-12 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  selectedCourse === "bca" ? "bg-blue-50/40" : "hover:bg-zinc-50/60"
                }`}
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      BCA • 3-YEAR TRACK
                    </span>
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      128 Seats Approved
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
                    Utkal University CBCS • AICTE &amp; Higher Education Dept Approved
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                    Comprehensive full-stack software development, cloud virtualization clusters, discrete algorithms, and applied machine learning foundations.
                  </p>

                  {/* 4 Core Competency Chips */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {programmes.bca.keySkills.map((k, i) => (
                      <div key={i} className="pl-3.5 py-1.5 border-l-2 border-blue-400 text-xs">
                        <div className="font-bold text-zinc-950">{k.name}</div>
                        <div className="text-[10px] font-mono text-blue-600 mt-0.5">{k.tag}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 font-medium">138+ Annual Recruiters</span>
                  <span className="text-xs font-bold text-blue-700 group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    <span>{selectedCourse === "bca" ? "Currently Viewing Track" : "Switch to BCA Track"}</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>

              {/* 2. BBA SHOWCASE */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setSelectedCourse("bba");
                  const el = document.getElementById("deep-dive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`p-8 sm:p-12 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  selectedCourse === "bba" ? "bg-purple-50/40" : "hover:bg-zinc-50/60"
                }`}
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600" />
                
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                      BBA • 4-YEAR NEP TRACK
                    </span>
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      128 Seats Approved
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-2 group-hover:text-purple-700 transition-colors">
                    Bachelor of Business Administration
                  </h3>
                  <p className="text-xs font-mono text-purple-700 uppercase tracking-wider mb-4 font-semibold">
                    Utkal University CBCS • AICTE &amp; Higher Education Dept Approved
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-8">
                    Executive leadership acumen, DCF financial modeling, corporate marketing strategies, and supply chain ERP simulations.
                  </p>

                  {/* 4 Core Competency Chips */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {programmes.bba.keySkills.map((k, i) => (
                      <div key={i} className="pl-3.5 py-1.5 border-l-2 border-purple-400 text-xs">
                        <div className="font-bold text-zinc-950">{k.name}</div>
                        <div className="text-[10px] font-mono text-purple-600 mt-0.5">{k.tag}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 font-medium">138+ Annual Recruiters</span>
                  <span className="text-xs font-bold text-purple-700 group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    <span>{selectedCourse === "bba" ? "Currently Viewing Track" : "Switch to BBA Track"}</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>
            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* IN-DEPTH PROGRAMME EXPLORATION CONSOLE: TABS & CURRICULUM */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section id="deep-dive" className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* Header Card for Active Track */}
            <div className="relative bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-2xs mb-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-200 pb-8 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase font-bold text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/60 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    Interactive Degree Console • {current.code}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                    {current.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-medium">
                    {current.degree} • {current.affiliation}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-black text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                  >
                    Apply for {current.code} 2026 →
                  </button>
                  <Link
                    href="/admission"
                    className="px-5 py-3 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-300 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all duration-300"
                  >
                    Admission Guidelines
                  </Link>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-4xl font-normal mb-8">
                {current.summary}
              </p>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {current.highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-indigo-50/50 to-slate-50 border border-zinc-200/80 text-xs sm:text-[13px] text-zinc-800 font-medium flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Tab Navigation Bar with Kinetic Motion Indicator */}
            <div className="flex border-b border-zinc-200 mb-10 overflow-x-auto relative no-scrollbar">
              {[
                { id: "curriculum", label: "01. Semester Curriculum" },
                { id: "certifications", label: "02. Included Certifications" },
                { id: "labs", label: "03. Computing & Management Labs" },
                { id: "eligibility", label: "04. Eligibility & Selection" },
                { id: "careers", label: "05. Placements & Careers" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative py-4 px-6 font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-blue-700 font-bold" : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSubTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ========================================================================= */}
            {/* SUB-TAB 1: SEMESTER-WISE CURRICULUM */}
            {/* ========================================================================= */}
            {activeTab === "curriculum" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {current.semesters.map((s, idx) => (
                  <div
                    key={s.sem}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4 pb-3 border-b border-zinc-100 flex items-center justify-between">
                        <span className="text-blue-700 font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {s.sem}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-semibold px-2 py-0.5 bg-zinc-100 rounded-md">
                          Utkal Univ CBCS
                        </span>
                      </div>

                      <ul className="space-y-2.5 text-xs text-zinc-700">
                        {s.subjects.map((sub, sIdx) => {
                          const isLab = sub.toLowerCase().includes("practical") || sub.toLowerCase().includes("lab") || sub.toLowerCase().includes("project");
                          return (
                            <li key={sIdx} className="flex items-start gap-2.5">
                              <span className="text-zinc-400 font-mono text-[11px] shrink-0 mt-0.5">
                                {sIdx + 1}.
                              </span>
                              <span className={`leading-relaxed ${isLab ? "font-semibold text-blue-900" : "font-normal"}`}>
                                {sub}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="pt-4 mt-5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Module Track 0{idx + 1}</span>
                      <span className="text-blue-600 font-semibold">Continuous Assessment</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* SUB-TAB 2: INCLUDED INDUSTRY CERTIFICATIONS */}
            {/* ========================================================================= */}
            {activeTab === "certifications" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {current.certifications.map((c) => (
                  <div
                    key={c.name}
                    className="p-7 rounded-3xl bg-white border border-zinc-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-2xl">{c.icon}</span>
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                          {c.badge}
                        </span>
                      </div>

                      <div className="text-[11px] tracking-widest font-semibold uppercase text-zinc-500 mb-1">
                        {c.provider}
                      </div>

                      <h3 className="text-lg font-bold text-zinc-950 mb-3 group-hover:text-blue-700 transition-colors">
                        {c.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                        {c.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-emerald-600 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Zero Extra Tuition Cost
                      </span>
                      <span className="text-zinc-400">Included in Degree</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* SUB-TAB 3: COMPUTING & MANAGEMENT LAB FACILITIES (PHOTO SHOWCASE) */}
            {/* ========================================================================= */}
            {activeTab === "labs" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {current.labFacilities.map((lab, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={lab.img}
                        alt={lab.title}
                        fill
                        loading="lazy"
                        quality={90}
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-slate-950 shadow-xs">
                          {lab.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-blue-700 transition-colors">
                        {lab.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {lab.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* SUB-TAB 4: ELIGIBILITY & ADMISSION ROADMAP */}
            {/* ========================================================================= */}
            {activeTab === "eligibility" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Guidelines Left */}
                <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-9 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-4">
                    Statutory Norms
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-6 tracking-tight">
                    Utkal University Eligibility Guidelines for {current.code}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-zinc-700">
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                      <strong className="block text-zinc-950 font-bold mb-1">Qualifying Examination:</strong>
                      <span>{current.eligibility.qualification}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                      <strong className="block text-zinc-950 font-bold mb-1">Recognized Educational Boards:</strong>
                      <span>{current.eligibility.board}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                      <strong className="block text-zinc-950 font-bold mb-1">Minimum Qualifying Marks:</strong>
                      <span>{current.eligibility.marks}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                      <strong className="block text-zinc-950 font-bold mb-1">Subject Preferences:</strong>
                      <span>{current.eligibility.preferred}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                      <strong className="block text-zinc-950 font-bold mb-1">Selection Norms:</strong>
                      <span>{current.eligibility.process}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-3 rounded-xl bg-black text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
                    >
                      Submit Admission Enquiry Now →
                    </button>
                    <Link
                      href="/admission"
                      className="px-6 py-3 rounded-xl bg-zinc-100 text-zinc-800 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors"
                    >
                      View Full Admission Procedure
                    </Link>
                  </div>
                </div>

                {/* Admission Roadmap Right */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
                    <Image
                      src={current.photo}
                      alt="Academic Lecture Theatre"
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                        Admissions Open 2026
                      </span>
                      <div className="text-lg font-bold mt-2">
                        100% NET / Ph.D Mentorship Ecosystem
                      </div>
                      <p className="text-xs text-zinc-300 font-light mt-1">
                        Direct counseling &amp; document verification at Infocity Campus.
                      </p>
                    </div>
                  </div>

                  {/* 4-Step Process Box */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 border border-indigo-150 shadow-sm">
                    <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-4">
                      4-Step Admission Pathway
                    </div>
                    <div className="space-y-3">
                      {[
                        { step: "01", text: "Submit online inquiry or visit admission desk" },
                        { step: "02", text: "Verification of 10+2 marksheet & certificate" },
                        { step: "03", text: "Career counseling with senior faculty mentor" },
                        { step: "04", text: "Provisional seat allotment under Utkal Univ" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-center gap-3 text-xs text-slate-800">
                          <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                            {item.step}
                          </span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* SUB-TAB 5: CAREER & PLACEMENT PATHWAYS */}
            {/* ========================================================================= */}
            {activeTab === "careers" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Visual Banner */}
                <div className="relative h-60 sm:h-72 w-full rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
                  <Image
                    src="/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg"
                    alt="Corporate Campus Placement Delegates"
                    fill
                    loading="lazy"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                        Placement Cell • 138+ Companies
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold mt-2">
                        Tier-1 Corporate Recruitment Drives &amp; Mock Technical Interviews
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1 max-w-xl">
                        Over 138+ visiting IT and BFSI corporations actively recruit TAPS graduates each academic cycle.
                      </p>
                    </div>
                    <Link
                      href="/placements"
                      className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shrink-0 shadow-md"
                    >
                      View Placement Statistics →
                    </Link>
                  </div>
                </div>

                {/* Career Track Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {current.careers.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-3">
                          <span className="font-bold text-blue-700">Track 0{idx + 1}</span>
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            {c.packageRange}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-zinc-950 mb-2">
                          {c.role}
                        </h3>

                        <div className="text-xs text-zinc-600 leading-relaxed">
                          <strong className="text-zinc-800">Recruiters:</strong> {c.hiring}
                        </div>
                      </div>

                      <div className="pt-4 mt-5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <span>CAMPUS PLACEMENT</span>
                        <span className="text-blue-600 font-semibold">Verified Pathway</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Major Corporate Recruiters Grid */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-900 shadow-xl">
                  <div className="text-center max-w-2xl mx-auto mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                      Direct Campus Hiring Linkages
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                      Where TAPS Alumni Build Global Careers
                    </h3>
                  </div>

                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                    <Image
                      src="/images/drive_third/Placement_Trident-Placement-1.jpeg"
                      alt="Major Corporate Recruiters at TAPS"
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-contain bg-white rounded-xl"
                      sizes="100vw"
                    />
                  </div>
                </div>

              </motion.div>
            )}

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* BOTTOM CALL TO ACTION: ADMISSION 2026 ENROLMENT */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg"
              alt="TAPS Campus Promenade"
              fill
              loading="lazy"
              quality={90}
              className="object-cover object-center filter contrast-105 opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070D21] via-[#070D21]/90 to-[#070D21]" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-cyan-300 mb-4 bg-cyan-950/60 border border-cyan-800/80 px-4 py-1.5 rounded-full shadow-2xs backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Admissions Open • Academic Batch 2026-27
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                Step into Eastern India&apos;s Premier Undergraduate Academy
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Secure your seat in BCA or BBA under Utkal University. Early applications benefit from faculty mentorship, hostel allotment, and industry certification priority.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-xl cursor-pointer hover-lift"
                >
                  Apply Online for 2026 Batch →
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl bg-zinc-900/90 text-zinc-200 border border-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Visit Campus / Contact Desk
                </Link>
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
