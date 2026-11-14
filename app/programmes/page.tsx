"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import PrismaticSlats from "@/components/PrismaticSlats";
import SpeedometerCounter from "@/components/SpeedometerCounter";

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
  const [selectedSemIdx, setSelectedSemIdx] = useState<number>(0);
  const [curriculumViewMode, setCurriculumViewMode] = useState<"inspector" | "matrix">("inspector");

  const programmes = {
    bca: {
      code: "BCA",
      title: "Bachelor of Computer Applications",
      degree: "4-Year Full-Time Honours Degree • 8 Semesters (NEP-2020 Framework)",
      affiliation: "Affiliated to Utkal University • Approved by AICTE, OSHEC & Govt. of Odisha",
      intake: "128 Seats Approved",
      heroBg: "/images/drive_new/1721020760290.jpg",
      heroTag: "SCHOOL OF COMPUTING • BLOCK-1",
      photo: "/images/drive_third/ClassRooms_Academic.JPG",
      photoCaption: "Smart Computing Amphitheatre • Official TACT Lecture Theatre",
      tagline: "NEP-2020 Model Curriculum • Full-Stack Software Engineering, Cloud Architecture, Data Science & AI",
      summary:
        "The BCA programme at TAPS is updated to the official NEP-2020 Model Curriculum formulated by the Odisha State Higher Education Council (OSHEC) and Utkal University. Offering flexible multiple entry/exit pathways (Certificate, Diploma, 3-Year BCA Degree, and 4-Year BCA Honours with Research), the course blends foundational algorithmic rigor in C, C++, Java, and Python with advanced tracks in Artificial Intelligence, Cloud Computing, Cyber Security, and Machine Learning.",
      highlights: [
        "Official NEP-2020 Model Curriculum (OSHEC & Utkal University)",
        "Multiple Entry/Exit Options (Certificate, Diploma, BCA Degree & 4-Year Honours with Research)",
        "Modern Core Tech Stack: Python, C, C++, Java, PHP, DBMS, Cloud & AI/ML Labs",
        "Industry certifications, hackathons & capstone research projects included",
      ],
      keySkills: [
        { name: "Python, AI & Data Analytics", tag: "Python / AI / R / Machine Learning" },
        { name: "Data Structures & Algorithms", tag: "C / C++ / Advanced Algorithms" },
        { name: "Full-Stack Web & Java Systems", tag: "Core Java / PHP / MySQL / Web Tech" },
        { name: "Cloud, Security & OS", tag: "Linux / Cloud Computing / Cyber Defense" },
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
            "Core I: Problem Solving using C Programming",
            "Core II: Introduction to Python Programming",
            "SEC: Computer Fundamentals",
            "AEC: Communicative English / Odia / Hindi",
            "VAC: Environmental Studies & Disaster Management",
            "Practical: Problem Solving using C Lab",
            "Practical: Python Programming Lab",
          ],
        },
        {
          sem: "Semester II",
          subjects: [
            "Core III: Data Structures",
            "Core IV: Object Oriented Programming using C++",
            "SEC: Introduction to Web Technologies (HTML, CSS, JS)",
            "VAC: Ethics & Values",
            "Practical: Data Structures using C Lab",
            "Practical: Programming in C++ Lab",
            "Practical: Web Technologies Lab",
          ],
        },
        {
          sem: "Semester III",
          subjects: [
            "Core V: Data Base Management System (DBMS)",
            "Core VI: Computer Organization & Architecture",
            "Core VII: Operating Systems",
            "SEC: Internet and Ethical Practices",
            "Practical: Database Management System (SQL) Lab",
            "Practical: Operating Systems (Linux & Shell) Lab",
          ],
        },
        {
          sem: "Semester IV",
          subjects: [
            "Core VIII: Computer Graphics",
            "Core IX: Web Development with PHP",
            "Core X: Computer Network",
            "VAC: Contemporary Cross-Cutting Issues",
            "Practical: Computer Graphics (OpenGL) Lab",
            "Practical: Web Development with PHP & MySQL Lab",
            "Practical: Computer Network & Socket Programming Lab",
          ],
        },
        {
          sem: "Semester V",
          subjects: [
            "Core XI: Software Engineering",
            "Core XII: Elective Option (A: Intro to AI / B: Data Science with R)",
            "Core XIII: Programming in Java",
            "Practical: Programming in Java Lab",
            "Practical: AI / Data Science with R Programming Lab",
          ],
        },
        {
          sem: "Semester VI",
          subjects: [
            "Core XIV: Algorithm Design Techniques",
            "Core XV: Project Work-I (Structured Capstone Project & Defense)",
            "Practical: Algorithm Design & Analysis Lab",
            "Practical: Capstone Project Phase-I Lab",
          ],
        },
        {
          sem: "Semester VII",
          subjects: [
            "Core XVI: Applied Artificial Intelligence",
            "Core XVII: Data Analytics with Python",
            "Core XVIII: Cyber Security",
            "Core XIX: Elective Choice (IoT / Theory of Computation / Android)",
            "Practical: Applied AI & Deep Learning Lab",
            "Practical: Data Analytics with Python Lab",
            "Practical: Cyber Security & Penetration Testing Lab",
          ],
        },
        {
          sem: "Semester VIII",
          subjects: [
            "Core XX: Cloud Computing",
            "Core XXI: Machine Learning",
            "Core XXII: Elective Choice (Blockchain / Compiler Design / Info Science)",
            "Core XXIII: Project Work-II (Advanced Research / Industry Capstone & Viva)",
            "Practical: Cloud Computing & Virtualization Lab",
            "Practical: Machine Learning & Predictive Modeling Lab",
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
        qualification: "Passed 10+2 / Higher Secondary (Science / Arts / Commerce) with Mathematics / Statistics / Computer Science / Information Technology / Business Mathematics, OR a 3-year Diploma in Engineering from SCTE&VT Odisha.",
        board: "CHSE Odisha, CBSE, CISCE, or any recognized State/Central Board under NEP-2020 guidelines.",
        marks: "Minimum 45% aggregate in qualifying examination (40% for SC/ST candidates).",
        preferred: "Mathematics/Statistics/CS or 3-year Engineering Diploma is required by Utkal University.",
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
                    <span>TACT Trust • Utkal Univ NEP-2020 &amp; CBCS • AICTE Approved</span>
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
                        4 Yrs NEP
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
        {/* AT-A-GLANCE DUAL PROGRAMME COMPARISON CARDS (BCA vs BBA) */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Vibrant Multi-Color Ambient Aurora Glows */}
          <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-bl from-purple-500/20 via-pink-400/15 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-pink-400/10 rounded-full blur-[90px] pointer-events-none" />

          <section className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-3 bg-white/90 border border-indigo-200/70 shadow-sm px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                Two Specialized Undergraduate Pathways
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                Select Your Degree Specialization
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Click either degree track to dynamically load its semester breakdown, included certifications, computing facilities, and placement opportunities.
              </p>
            </div>

            {/* Advanced Animated Dual Glassmorphic Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative z-10">
              
              {/* 1. BCA SHOWCASE (Cardless Kinetic Rail) */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => {
                  setSelectedCourse("bca");
                  const el = document.getElementById("deep-dive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`pl-6 sm:pl-8 py-4 border-l-4 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  selectedCourse === "bca"
                    ? "border-blue-600 bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-transparent"
                    : "border-zinc-300 hover:border-blue-400 bg-transparent"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      BCA • 4-YEAR NEP-2020 TRACK
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100/80 border border-blue-200/80 px-3 py-0.5 rounded-full">
                      128 Seats Approved
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Bachelor of Computer Applications
                  </h3>
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                      Utkal University NEP-2020 Model Curriculum • AICTE &amp; Higher Education Dept Approved
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                    Comprehensive full-stack software development, cloud virtualization clusters, discrete algorithms, and applied machine learning foundations.
                  </p>

                  {/* 4 Core Competency Cardless Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {programmes.bca.keySkills.map((k, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-2.5 py-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <div>
                          <div className="font-bold text-zinc-900 text-xs sm:text-[13px] group-hover:text-blue-700 transition-colors">
                            {k.name}
                          </div>
                          <div className="text-[10px] font-mono font-semibold text-blue-700">
                            {k.tag}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    138+ Annual Recruiters
                  </span>
                  
                  {selectedCourse === "bca" ? (
                    <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xs flex items-center gap-1.5">
                      <span>✓ Currently Viewing Track</span>
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Switch to BCA Track</span>
                      <span>→</span>
                    </span>
                  )}
                </div>
              </motion.div>

              {/* 2. BBA SHOWCASE (Cardless Kinetic Rail) */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => {
                  setSelectedCourse("bba");
                  const el = document.getElementById("deep-dive");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`pl-6 sm:pl-8 py-4 border-l-4 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  selectedCourse === "bba"
                    ? "border-purple-600 bg-gradient-to-r from-purple-50/70 via-pink-50/30 to-transparent"
                    : "border-zinc-300 hover:border-purple-400 bg-transparent"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      BBA • 4-YEAR NEP TRACK
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-900 bg-purple-100/80 border border-purple-200/80 px-3 py-0.5 rounded-full">
                      128 Seats Approved
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    Bachelor of Business Administration
                  </h3>
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                      Utkal University CBCS • AICTE &amp; Higher Education Dept Approved
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                    Executive leadership acumen, DCF financial modeling, corporate marketing strategies, and supply chain ERP simulations.
                  </p>

                  {/* 4 Core Competency Cardless Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {programmes.bba.keySkills.map((k, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-2.5 py-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                        <div>
                          <div className="font-bold text-zinc-900 text-xs sm:text-[13px] group-hover:text-purple-700 transition-colors">
                            {k.name}
                          </div>
                          <div className="text-[10px] font-mono font-semibold text-purple-700">
                            {k.tag}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    138+ Annual Recruiters
                  </span>
                  
                  {selectedCourse === "bba" ? (
                    <span className="px-4 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold shadow-xs flex items-center gap-1.5">
                      <span>✓ Currently Viewing Track</span>
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-purple-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Switch to BBA Track</span>
                      <span>→</span>
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* IN-DEPTH PROGRAMME EXPLORATION CONSOLE: TABS & CURRICULUM */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Dynamic Ambient Color Orbs */}
          <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/18 via-cyan-400/14 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/18 via-pink-400/14 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-gradient-to-r from-indigo-500/12 via-purple-500/12 to-pink-500/12 rounded-full blur-[110px] pointer-events-none" />

          <section id="deep-dive" className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* Master Console for Active Track (Completely Cardless & Advanced Animated) */}
            <div className="relative pb-10 mb-10 border-b border-zinc-200/90">
              {/* Dynamic Animated Top Shimmer Laser Line */}
              <div className="relative h-1 w-full overflow-hidden mb-8 rounded-full bg-zinc-200/60">
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  selectedCourse === "bca"
                    ? "from-blue-600 via-cyan-400 via-indigo-600 to-sky-400"
                    : "from-purple-600 via-fuchsia-500 via-pink-500 to-rose-400"
                } animate-[shimmer_2.5s_infinite]`} />
              </div>
              
              {/* Status Pill & Fast Degree Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className={`inline-flex items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase font-bold px-4 py-1.5 rounded-full border shadow-2xs backdrop-blur-md ${
                  selectedCourse === "bca"
                    ? "text-blue-700 bg-blue-50/90 border-blue-200/80"
                    : "text-purple-700 bg-purple-50/90 border-purple-200/80"
                }`}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      selectedCourse === "bca" ? "bg-cyan-400" : "bg-pink-400"
                    } opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      selectedCourse === "bca" ? "bg-blue-600" : "bg-purple-600"
                    }`} />
                  </span>
                  <span>Interactive Degree Console • {current.code} Track</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">128 Approved Seats</span>
                </div>

                {/* Instant Track Toggle Capsule */}
                <div className="inline-flex items-center p-1 rounded-full bg-zinc-100/90 border border-zinc-200 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse("bca")}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      selectedCourse === "bca"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    <span>✦</span>
                    <span>BCA Track</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCourse("bba")}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      selectedCourse === "bba"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/25"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    <span>✦</span>
                    <span>BBA Track</span>
                  </button>
                </div>
              </div>

              {/* Title & Actions */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80 mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.code}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-2 max-w-3xl"
                  >
                    <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${
                      selectedCourse === "bca"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600"
                    }`}>
                      {current.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 font-mono font-medium flex flex-wrap items-center gap-2">
                      <span className="text-zinc-900 font-semibold">{current.degree}</span>
                      <span className="text-zinc-400">•</span>
                      <span>{current.affiliation}</span>
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`relative group overflow-hidden px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                      selectedCourse === "bca"
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:shadow-blue-500/35"
                        : "bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:shadow-purple-500/35"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <span className="relative flex items-center gap-2">
                      <span>Apply for {current.code} 2026</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </button>
                  <Link
                    href="/admission"
                    className="px-6 py-3.5 rounded-full bg-white text-zinc-800 border border-zinc-300 font-semibold text-xs sm:text-sm hover:bg-zinc-100 hover:border-zinc-400 transition-all duration-300 shadow-2xs flex items-center gap-1.5"
                  >
                    <span>Admission Guidelines</span>
                    <span className="text-zinc-400">↗</span>
                  </Link>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.p 
                  key={current.code + "-summary"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-4xl font-normal mb-10"
                >
                  {current.summary}
                </motion.p>
              </AnimatePresence>

              {/* 4 Feature Highlights (Advanced Animated Speedometer Pillars - Cardless) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-zinc-200/80 mb-6">
                {/* Metric 1 */}
                <div className="group pl-5 border-l-3 border-blue-600 transition-all duration-300 hover:border-cyan-400 hover:translate-x-1">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-blue-600 group-hover:text-cyan-600 transition-colors">
                      <SpeedometerCounter value="138+" duration={1.6} />
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-ping" />
                    Annual Recruiters
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Tier-1 corporate recruiters &amp; MNC placement partners in 2026 cycle.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="group pl-5 border-l-3 border-purple-600 transition-all duration-300 hover:border-pink-400 hover:translate-x-1">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-purple-600 group-hover:text-pink-600 transition-colors">
                      <SpeedometerCounter value="100%" duration={1.6} />
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:animate-ping" />
                    Doctoral Faculty
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    All regular faculty are M.Tech/NET qualified and actively pursuing Ph.D.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="group pl-5 border-l-3 border-emerald-600 transition-all duration-300 hover:border-teal-400 hover:translate-x-1">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-emerald-600 group-hover:text-teal-600 transition-colors">
                      <SpeedometerCounter value="24" duration={1.6} />
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">Credits/Sem</span>
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                    Utkal Univ CBCS
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Rigorous Choice-Based Credit System mapped to state university norms.
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="group pl-5 border-l-3 border-amber-500 transition-all duration-300 hover:border-orange-400 hover:translate-x-1">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-amber-500 group-hover:text-orange-600 transition-colors">
                      <SpeedometerCounter value="128" duration={1.6} />
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-600">Seats</span>
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-950 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:animate-ping" />
                    AICTE Approved
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Sanctioned by Govt. of Odisha Higher Education Dept with scholarships.
                  </p>
                </div>
              </div>
            </div>

            {/* 5-Tab Navigation Bar (Seamless Cardless Tab Axis with Sliding Underline) */}
            <div className="relative flex border-b border-zinc-200 mb-10 overflow-x-auto no-scrollbar gap-2 sm:gap-6">
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
                    className={`relative py-3.5 px-3 font-mono text-xs sm:text-sm whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "text-blue-700 font-bold"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProgrammesSubTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ========================================================================= */}
            {/* SUB-TAB 1: SEMESTER-WISE CURRICULUM (VIBRANT COLOURFUL & CARDLESS) */}
            {/* ========================================================================= */}
            {activeTab === "curriculum" && (() => {
              const semThemes = [
                {
                  gradient: "from-blue-600 via-indigo-600 to-cyan-500",
                  pillActive: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/35 ring-2 ring-blue-400/40",
                  badge: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/25",
                  border: "border-blue-600",
                  text: "text-blue-700",
                  dot: "bg-cyan-400",
                },
                {
                  gradient: "from-emerald-600 via-teal-600 to-cyan-500",
                  pillActive: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/35 ring-2 ring-emerald-400/40",
                  badge: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-500/25",
                  border: "border-emerald-600",
                  text: "text-emerald-700",
                  dot: "bg-emerald-400",
                },
                {
                  gradient: "from-amber-500 via-orange-500 to-yellow-500",
                  pillActive: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/35 ring-2 ring-amber-400/40",
                  badge: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm shadow-amber-500/25",
                  border: "border-amber-500",
                  text: "text-amber-700",
                  dot: "bg-amber-400",
                },
                {
                  gradient: "from-purple-600 via-violet-600 to-pink-500",
                  pillActive: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/35 ring-2 ring-purple-400/40",
                  badge: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm shadow-purple-500/25",
                  border: "border-purple-600",
                  text: "text-purple-700",
                  dot: "bg-purple-400",
                },
                {
                  gradient: "from-rose-600 via-pink-600 to-purple-500",
                  pillActive: "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-500/35 ring-2 ring-rose-400/40",
                  badge: "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-sm shadow-rose-500/25",
                  border: "border-rose-600",
                  text: "text-rose-700",
                  dot: "bg-rose-400",
                },
                {
                  gradient: "from-cyan-600 via-blue-600 to-indigo-600",
                  pillActive: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/35 ring-2 ring-cyan-400/40",
                  badge: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm shadow-cyan-500/25",
                  border: "border-cyan-600",
                  text: "text-cyan-700",
                  dot: "bg-cyan-400",
                },
              ];

              const subjectGradients = [
                "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xs shadow-blue-500/30",
                "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xs shadow-purple-500/30",
                "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-xs shadow-emerald-500/30",
                "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xs shadow-amber-500/30",
                "bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-xs shadow-rose-500/30",
                "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xs shadow-cyan-500/30",
                "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xs shadow-indigo-500/30",
              ];

              const disciplineTags = [
                { label: "FOUNDATIONAL CORE", color: "bg-blue-100 text-blue-900 border-blue-300" },
                { label: "ANALYTIC LOGIC", color: "bg-purple-100 text-purple-900 border-purple-300" },
                { label: "SYSTEMS ARCHITECTURE", color: "bg-emerald-100 text-emerald-900 border-emerald-300" },
                { label: "CORE ALGORITHMS", color: "bg-amber-100 text-amber-950 border-amber-300" },
                { label: "SOFTWARE METHODS", color: "bg-rose-100 text-rose-900 border-rose-300" },
                { label: "DATABASE SYSTEMS", color: "bg-cyan-100 text-cyan-900 border-cyan-300" },
                { label: "APPLIED SPECIALIZATION", color: "bg-indigo-100 text-indigo-900 border-indigo-300" },
              ];

              const safeSemIdx = Math.min(selectedSemIdx, current.semesters.length - 1);
              const activeTheme = semThemes[safeSemIdx % semThemes.length];
              const activeSem = current.semesters[safeSemIdx];
              const theorySubjects = activeSem.subjects.filter(
                (sub) => !sub.toLowerCase().includes("practical") && !sub.toLowerCase().includes("lab")
              );
              const labSubjects = activeSem.subjects.filter(
                (sub) => sub.toLowerCase().includes("practical") || sub.toLowerCase().includes("lab")
              );
              const yearNum = Math.floor(safeSemIdx / 2) + 1;

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-10 relative"
                >
                  {/* Vibrant Ambient Glow behind curriculum */}
                  <div className="absolute -top-10 left-1/4 w-[450px] h-[350px] rounded-full bg-gradient-to-tr from-blue-400/20 via-purple-300/15 to-transparent blur-[120px] pointer-events-none" />
                  <div className="absolute bottom-10 right-10 w-[450px] h-[350px] rounded-full bg-gradient-to-bl from-pink-400/20 via-cyan-300/15 to-transparent blur-[120px] pointer-events-none" />

                  {/* NEP-2020 Framework Banner (Official OSHEC & Utkal University Regulations) */}
                  {selectedCourse === "bca" && (
                    <div className="relative p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white border border-blue-500/30 overflow-hidden shadow-xl">
                      <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                        <div className="space-y-2.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950">
                              NEP-2020 Model Curriculum
                            </span>
                            <span className="text-[11px] font-mono text-cyan-300 font-semibold">
                              Odisha State Higher Education Council (OSHEC) • Utkal University
                            </span>
                          </div>
                          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                            Flexible Multiple Entry &amp; Exit Framework for BCA (3-Year Degree / 4-Year Honours with Research)
                          </h4>
                          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl font-normal">
                            Updated to the official model curriculum notified by OSHEC, Government of Odisha. Students can exit at designated milestones with certified academic credentials or progress through the 4th-Year Honours with Research track.
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 pt-3 text-xs">
                            <div className="pl-3 border-l-2 border-cyan-400">
                              <span className="font-mono text-cyan-300 font-bold block text-[12px]">1-Year Exit (Sem I-II)</span>
                              <span className="text-zinc-300 text-[11px] leading-tight block">UG Certificate in Computer Applications (40-44 Credits + Summer Internship)</span>
                            </div>
                            <div className="pl-3 border-l-2 border-indigo-400">
                              <span className="font-mono text-indigo-300 font-bold block text-[12px]">2-Year Exit (Sem III-IV)</span>
                              <span className="text-zinc-300 text-[11px] leading-tight block">UG Diploma in Computer Applications (80-88 Credits + Summer Internship)</span>
                            </div>
                            <div className="pl-3 border-l-2 border-emerald-400">
                              <span className="font-mono text-emerald-300 font-bold block text-[12px]">3-Year Exit (Sem V-VI)</span>
                              <span className="text-zinc-300 text-[11px] leading-tight block">Bachelor of Computer Applications (BCA) Degree (120-132 Credits)</span>
                            </div>
                            <div className="pl-3 border-l-2 border-purple-400">
                              <span className="font-mono text-purple-300 font-bold block text-[12px]">4-Year Track (Sem VII-VIII)</span>
                              <span className="text-zinc-300 text-[11px] leading-tight block">BCA (Honours with Research / 4-Year Major) Degree (160-176 Credits)</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                          <a
                            href="/docs/BCA-NEP-Syllabus.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/25 cursor-pointer active:scale-95"
                          >
                            <span>📥</span>
                            <span>Download NEP Syllabus (PDF)</span>
                          </a>
                          <a
                            href="https://msb.ac.in/wp-content/uploads/2025/01/BCA-NEP-Syllabus.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 font-mono text-xs font-medium border border-white/15 transition-all cursor-pointer"
                          >
                            <span>Official Source ↗</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 1. Master Semester Horizon Selector Rail (Colourful & Cardless) */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 relative z-10">
                    {/* Semester Pickers with Dynamic Rainbow Themes */}
                    <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-1">
                      {current.semesters.map((s, idx) => {
                        const isActive = selectedSemIdx === idx;
                        const theme = semThemes[idx % semThemes.length];
                        const sYear = Math.floor(idx / 2) + 1;
                        return (
                          <button
                            key={s.sem}
                            type="button"
                            onClick={() => setSelectedSemIdx(idx)}
                            className={`group relative py-2.5 px-4 rounded-xl font-mono text-xs transition-all duration-300 cursor-pointer flex flex-col items-start gap-0.5 active:scale-95 ${
                              isActive
                                ? theme.pillActive
                                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-transparent hover:border-zinc-300"
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${
                                isActive ? `${theme.dot} animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.9)]` : "bg-zinc-400 group-hover:bg-zinc-600"
                              }`} />
                              <span className="font-bold tracking-tight">SEM 0{idx + 1}</span>
                            </div>
                            <span className={`text-[10px] font-sans font-semibold uppercase tracking-wider ${
                              isActive ? "text-white/90" : "text-zinc-400"
                            }`}>
                              Year 0{sYear}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* View Mode Toggle Button */}
                    <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-xl text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setCurriculumViewMode("inspector")}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold ${
                          curriculumViewMode === "inspector"
                            ? "bg-white text-zinc-950 shadow-2xs font-bold"
                            : "text-zinc-500 hover:text-zinc-800"
                        }`}
                      >
                        ✦ Focused Stepper
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurriculumViewMode("matrix")}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold ${
                          curriculumViewMode === "matrix"
                            ? "bg-white text-zinc-950 shadow-2xs font-bold"
                            : "text-zinc-500 hover:text-zinc-800"
                        }`}
                      >
                        ☰ All Semesters Matrix
                      </button>
                    </div>
                  </div>

                  {/* 2A. Focused Stepper View (Vibrant Colours, Cardless & Box-Free) */}
                  {curriculumViewMode === "inspector" && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSem.sem}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2 relative z-10"
                      >
                        {/* Left Column: Semester Meta & Vibrant Milestones */}
                        <div className="lg:col-span-4 space-y-6">
                          <div>
                            {/* Colorful Eyebrow Pill */}
                            <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-3.5 shadow-sm ${activeTheme.badge}`}>
                              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                              YEAR 0{yearNum} • SEMESTER 0{safeSemIdx + 1}
                            </div>
                            
                            {/* Monumental Gradient Heading */}
                            <h3 className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r ${activeTheme.gradient} bg-clip-text text-transparent drop-shadow-xs`}>
                              {activeSem.sem}
                            </h3>
                            
                            <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed font-medium">
                              {selectedCourse === "bca"
                                ? "Official OSHEC & Utkal University NEP-2020 Model Curriculum, balancing foundational programming in C, C++, Java & Python with advanced AI, Cloud & Data Science specializations."
                                : "Utkal University Choice-Based Credit System (CBCS) & NEP-2020 4-Year Management curriculum, combining business strategy with corporate live projects."}
                            </p>
                          </div>

                          {/* Academic Specs Rail with Colorful Borders */}
                          <div className="space-y-4 pt-4 border-t border-zinc-200">
                            <div className="pl-4 border-l-4 border-blue-600">
                              <div className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider">Total Semester Credits</div>
                              <div className="text-2xl sm:text-3xl font-mono font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mt-0.5">
                                <SpeedometerCounter value="22" duration={1.2} /> Credits (Approx)
                              </div>
                            </div>
                            
                            <div className="pl-4 border-l-4 border-purple-600">
                              <div className="text-[11px] font-mono font-bold text-purple-600 uppercase tracking-wider">Evaluation Framework</div>
                              <div className="text-sm font-bold text-zinc-900 mt-0.5">
                                {selectedCourse === "bca" ? "NEP-2020 Semester Grading (SGPA / CGPA)" : "CBCS Continuous Grading (SGPA / CGPA)"}
                              </div>
                              <div className="text-[11px] text-purple-700 font-medium">Internal Continuous Assessment &amp; Semester Examination</div>
                            </div>
                            
                            <div className="pl-4 border-l-4 border-emerald-600">
                              <div className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider">Curriculum Weight</div>
                              <div className="text-sm font-bold text-zinc-900 mt-0.5">{activeSem.subjects.length} Total Papers &amp; Studios</div>
                              <div className="text-[11px] text-emerald-700 font-medium">{theorySubjects.length} Theory Papers + {labSubjects.length} Practical Labs</div>
                            </div>
                          </div>

                          {/* Stepper Quick Navigation */}
                          <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
                            <button
                              type="button"
                              disabled={safeSemIdx === 0}
                              onClick={() => setSelectedSemIdx((prev) => Math.max(0, prev - 1))}
                              className="px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed bg-zinc-100 hover:bg-zinc-200 text-zinc-800 active:scale-95"
                            >
                              <span>←</span>
                              <span>Prev Sem</span>
                            </button>

                            <span className="text-xs font-mono font-bold text-zinc-500">
                              0{safeSemIdx + 1} of 0{current.semesters.length}
                            </span>

                            <button
                              type="button"
                              disabled={safeSemIdx === current.semesters.length - 1}
                              onClick={() => setSelectedSemIdx((prev) => Math.min(current.semesters.length - 1, prev + 1))}
                              className="px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 active:scale-95"
                            >
                              <span>Next Sem</span>
                              <span>→</span>
                            </button>
                          </div>
                        </div>

                        {/* Right Column: Theory & Lab Studio Tracks (Rich Colours) */}
                        <div className="lg:col-span-8 space-y-8">
                          
                          {/* 1. Theory Papers */}
                          <div>
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200">
                              <span className="text-xs font-mono uppercase tracking-widest font-extrabold text-blue-700 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600" />
                                Theoretical Disciplines ({theorySubjects.length} Papers)
                              </span>
                              <span className="text-[11px] font-mono text-indigo-700 font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200">
                                CBCS Core &amp; Electives
                              </span>
                            </div>

                            <div className="space-y-3.5">
                              {theorySubjects.map((sub, sIdx) => {
                                const badgeGrad = subjectGradients[sIdx % subjectGradients.length];
                                const tag = disciplineTags[sIdx % disciplineTags.length];

                                return (
                                  <div
                                    key={sIdx}
                                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 px-3.5 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50/70 hover:via-indigo-50/40 hover:to-transparent transition-all duration-200 border-b border-zinc-100 last:border-b-0"
                                  >
                                    <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                                      {/* Colorful Gradient Number */}
                                      <span className={`w-8 h-8 rounded-xl ${badgeGrad} text-xs font-mono font-black flex items-center justify-center shrink-0`}>
                                        0{sIdx + 1}
                                      </span>
                                      
                                      <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                          <div className="text-sm sm:text-base font-bold text-zinc-950 group-hover:text-blue-700 transition-colors leading-snug">
                                            {sub}
                                          </div>
                                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tag.color}`}>
                                            {tag.label}
                                          </span>
                                        </div>
                                        <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                                          Lecture Hours: 4 hrs/week • Internal Continuous Sessional + End-Semester University Exam
                                        </div>
                                      </div>
                                    </div>

                                    {/* Colorful Credits Badge */}
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs shrink-0 self-start sm:self-center">
                                      4 Credits
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* 2. Practical & Lab Studios with Rich Cyan & Emerald Accents */}
                          {labSubjects.length > 0 && (
                            <div className="pt-6 border-t border-zinc-200">
                              <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-200">
                                <span className="text-xs font-mono uppercase tracking-widest font-extrabold text-cyan-700 flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                  Hands-On Computing Studios &amp; Practicals ({labSubjects.length} Labs)
                                </span>
                                <span className="text-[11px] font-mono text-cyan-800 font-bold px-3 py-0.5 rounded-full bg-cyan-100 border border-cyan-300">
                                  High-Density Terminal Labs
                                </span>
                              </div>

                              <div className="space-y-3.5">
                                {labSubjects.map((sub, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="group pl-4 py-3 border-l-4 border-cyan-500 rounded-r-2xl bg-gradient-to-r from-cyan-50/80 via-blue-50/40 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:from-cyan-100/90 hover:via-blue-100/60 transition-all duration-200"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                                        ⚡
                                      </div>
                                      <div>
                                        <div className="text-sm sm:text-base font-bold text-zinc-950 group-hover:text-cyan-800 transition-colors leading-snug">
                                          {sub}
                                        </div>
                                        <div className="text-[11px] text-zinc-600 font-mono mt-0.5">
                                          Hands-On Machine Coding • Continuous Lab Journal Record + Viva-Voce Assessment
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                                        2 Credits
                                      </span>
                                      <span className="text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs">
                                        Practical Lab
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}

                  {/* 2B. All Semesters Matrix View (Colourful Open Spread with Hairline Dividers) */}
                  {curriculumViewMode === "matrix" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/90 gap-y-10 md:gap-y-0 pt-4 border-t border-zinc-200">
                      {current.semesters.map((s, idx) => {
                        const theme = semThemes[idx % semThemes.length];
                        return (
                          <div
                            key={s.sem}
                            className="py-6 md:py-4 px-0 md:px-6 lg:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between"
                          >
                            <div>
                              {/* Header */}
                              <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-200">
                                <span className={`text-sm font-mono font-extrabold uppercase tracking-widest ${theme.text} flex items-center gap-2`}>
                                  <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                                  {s.sem}
                                </span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                                  24 Credits
                                </span>
                              </div>

                              {/* Subjects list */}
                              <ul className="space-y-3 text-xs text-zinc-800">
                                {s.subjects.map((sub, sIdx) => {
                                  const isLab = 
                                    sub.toLowerCase().includes("practical") || 
                                    sub.toLowerCase().includes("lab");

                                  if (isLab) {
                                    return (
                                      <li key={sIdx} className="pl-3 border-l-2 border-cyan-500 py-1 bg-cyan-50/50 rounded-r-lg">
                                        <div className="font-bold text-cyan-950 text-xs flex items-center gap-1.5">
                                          <span className="text-cyan-600">⚡</span>
                                          <span>{sub}</span>
                                        </div>
                                      </li>
                                    );
                                  }

                                  const badgeGrad = subjectGradients[sIdx % subjectGradients.length];
                                  return (
                                    <li key={sIdx} className="flex items-start gap-2.5 py-0.5">
                                      <span className={`w-5 h-5 rounded-md ${badgeGrad} text-[9px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5`}>
                                        0{sIdx + 1}
                                      </span>
                                      <span className="font-semibold text-zinc-800 leading-snug">
                                        {sub}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="pt-4 mt-6 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono">
                              <span className="text-zinc-500 font-semibold">Utkal Univ CBCS</span>
                              <span className={`font-bold ${theme.text}`}>Phase 0{Math.floor(idx / 2) + 1}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })()}

            {/* ========================================================================= */}
            {/* SUB-TAB 2: INCLUDED INDUSTRY CERTIFICATIONS (CARDLESS OPEN RAIL) */}
            {/* ========================================================================= */}
            {activeTab === "certifications" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4 border-t border-zinc-200"
              >
                {current.certifications.map((c, cIdx) => (
                  <div
                    key={c.name}
                    className="pl-5 border-l-2 border-blue-600 flex flex-col justify-between py-1 group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-2xl">{c.icon}</span>
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          {c.badge}
                        </span>
                      </div>

                      <div className="text-[11px] tracking-widest font-bold uppercase text-zinc-400 font-mono">
                        {c.provider}
                      </div>

                      <h3 className="text-lg font-bold text-zinc-950 mt-1 mb-2 group-hover:text-blue-700 transition-colors">
                        {c.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {c.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Zero Extra Tuition Cost
                      </span>
                      <span className="text-zinc-500 text-[11px]">Included in Curriculum</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* SUB-TAB 3: COMPUTING & MANAGEMENT LAB FACILITIES (CARDLESS PHOTO STREAM) */}
            {/* ========================================================================= */}
            {activeTab === "labs" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-4 border-t border-zinc-200"
              >
                {current.labFacilities.map((lab, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col space-y-4"
                  >
                    <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-900">
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

                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 mb-1.5 group-hover:text-blue-700 transition-colors">
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
            {/* SUB-TAB 4: ELIGIBILITY & ADMISSION ROADMAP (CARDLESS EDITORIAL) */}
            {/* ========================================================================= */}
            {activeTab === "eligibility" && (
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4 border-t border-zinc-200"
              >
                {/* Guidelines Left */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-3">
                      Statutory Norms
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                      Utkal University Eligibility Guidelines for {current.code}
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-zinc-700 pt-2 border-t border-zinc-200/80">
                    <div className="pl-4 border-l-2 border-blue-500 py-1 space-y-0.5">
                      <strong className="block text-zinc-950 font-bold">Qualifying Examination:</strong>
                      <span className="text-zinc-600">{current.eligibility.qualification}</span>
                    </div>
                    <div className="pl-4 border-l-2 border-indigo-500 py-1 space-y-0.5">
                      <strong className="block text-zinc-950 font-bold">Recognized Educational Boards:</strong>
                      <span className="text-zinc-600">{current.eligibility.board}</span>
                    </div>
                    <div className="pl-4 border-l-2 border-purple-500 py-1 space-y-0.5">
                      <strong className="block text-zinc-950 font-bold">Minimum Qualifying Marks:</strong>
                      <span className="text-zinc-600">{current.eligibility.marks}</span>
                    </div>
                    <div className="pl-4 border-l-2 border-emerald-500 py-1 space-y-0.5">
                      <strong className="block text-zinc-950 font-bold">Subject Preferences:</strong>
                      <span className="text-zinc-600">{current.eligibility.preferred}</span>
                    </div>
                    <div className="pl-4 border-l-2 border-cyan-500 py-1 space-y-0.5">
                      <strong className="block text-zinc-950 font-bold">Selection Norms:</strong>
                      <span className="text-zinc-600">{current.eligibility.process}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-200 flex flex-wrap gap-4">
                    <button
                      type="button"
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

                  {/* 4-Step Process (Cardless Open Spread) */}
                  <div className="pt-4 border-t border-zinc-200">
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
                          <span className="w-5 h-5 rounded-md bg-blue-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
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

                {/* Career Tracks Stream (Cardless Open Flow) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80 pt-6 border-t border-zinc-200/80">
                  {current.careers.map((c, idx) => (
                    <div
                      key={idx}
                      className="py-4 md:py-0 px-0 md:px-6 first:pl-0 last:pr-0 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-3">
                          <span className="font-bold text-blue-700">Track 0{idx + 1}</span>
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            {c.packageRange}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-zinc-950 mb-2">
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
        {/* BOTTOM CALL TO ACTION: ADMISSION 2026 ENROLMENT WITH PRISMATIC SLATS */}
        {/* ========================================================================= */}
        <div className="relative border-t border-zinc-800 overflow-hidden bg-[#070D21] min-h-[520px] flex items-center justify-center">
          {/* Prismatic Slats - Colored liquid refracted through fluted glass */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <PrismaticSlats
              colors={["#2563EB", "#7C3AED", "#EC4899"]}
              backgroundColor="#070D21"
              flutes={18}
              refraction={4.2}
              aberration={0.7}
              angle={24}
              speed={1.0}
              grain={0.05}
              interactive={true}
              autoplay={true}
            />
            {/* Cinematic subtle gradient overlays so text remains pin-sharp and readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-transparent to-[#070D21]/60 pointer-events-none" />
            <div className="absolute inset-0 bg-[#070D21]/30 pointer-events-none backdrop-blur-[1px]" />
          </div>

          <section className="relative z-10 py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center text-white pointer-events-none">
            <div className="max-w-3xl mx-auto pointer-events-auto">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-cyan-300 mb-5 bg-black/60 border border-cyan-500/40 px-4 py-1.5 rounded-full shadow-2xl backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Admissions Open • Academic Batch 2026-27
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-5 drop-shadow-lg">
                Step into Eastern India&apos;s Premier{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-300 via-indigo-200 to-pink-300 bg-clip-text text-transparent">
                  Undergraduate Academy
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md">
                Secure your seat in BCA or BBA under Utkal University. Early applications benefit from faculty mentorship, hostel allotment, and industry certification priority.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-2xl cursor-pointer hover-lift"
                >
                  Apply Online for 2026 Batch →
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl bg-black/60 text-white border border-white/30 font-semibold text-sm hover:bg-white/15 hover:border-white transition-all duration-300 backdrop-blur-md shadow-xl"
                >
                  Visit Campus / Contact Desk
                </Link>
              </div>
            </div>
          </section>
        </div>

      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
