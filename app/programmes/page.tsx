"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";

type ProgrammeKey = "bca" | "bba";

interface Subject {
  name: string;
  code: string;
  category: "Core Theory" | "Practical Lab" | "Elective" | "Project / Seminar" | "Foundation" | "Skill Enhancement";
  credits: number;
}

interface Semester {
  semNumber: number;
  title: string;
  theme: string;
  subjects: Subject[];
}

interface Certification {
  name: string;
  provider: string;
  badge: string;
  desc: string;
}

interface CareerTrack {
  role: string;
  averagePackage: string;
  recruiters: string;
  skills: string[];
}

interface ProgrammeData {
  code: ProgrammeKey;
  abbr: string;
  title: string;
  degreeName: string;
  affiliation: string;
  intake: string;
  duration: string;
  tagline: string;
  overview: string;
  heroImage: string;
  campusWing: string;
  accentGradient: string;
  glowColor: string;
  borderHover: string;
  keyMetrics: { label: string; value: string; helper: string }[];
  curriculum: Semester[];
  certifications: Certification[];
  careers: CareerTrack[];
  eligibility: {
    qualifyingExam: string;
    boards: string;
    aggregateScore: string;
    subjectPreference: string;
    admissionBasis: string;
  };
}

const PROGRAMMES: Record<ProgrammeKey, ProgrammeData> = {
  bca: {
    code: "bca",
    abbr: "BCA",
    title: "Bachelor of Computer Applications",
    degreeName: "B.C.A. (Honours / Regular)",
    affiliation: "Affiliated to Utkal University • Approved by AICTE, New Delhi",
    intake: "128 Approved Seats",
    duration: "3 Years • 6 Semesters • Choice-Based Credit System (CBCS)",
    tagline: "Full-Stack Cloud Engineering, Enterprise Architecture & AI Foundations",
    overview:
      "Engineered from the ground up to cultivate high-caliber computational problem solvers, systems architects, and software engineers. Delivered in our specialized School of Computing (Block-4) with round-the-clock gigabit fiber connectivity, virtualization clusters, and industry-partnered software engineering finishing labs.",
    heroImage: "/images/drive_new/1721020760290.jpg",
    campusWing: "School of Computing • Block-4 Cluster",
    accentGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
    borderHover: "hover:border-blue-500/40",
    keyMetrics: [
      { label: "Placement Rate", value: "95%+", helper: "Tier-1 Software Recruiters" },
      { label: "Approved Intake", value: "128", helper: "Annual Student Cohort" },
      { label: "Faculty Pedagogy", value: "100%", helper: "NET / Ph.D Scholars" },
      { label: "Industry MoUs", value: "12+", helper: "Tech Giants & Cloud Partners" },
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester 01",
        theme: "Computational Foundations & Low-Level Architecture",
        subjects: [
          { name: "Programming Fundamentals using C & C++", code: "BCA-101", category: "Core Theory", credits: 4 },
          { name: "Computer System Architecture & Digital Logic", code: "BCA-102", category: "Core Theory", credits: 4 },
          { name: "Discrete Mathematical Structures", code: "BCA-103", category: "Foundation", credits: 4 },
          { name: "Environmental Science & Engineering Ethics", code: "BCA-104", category: "Skill Enhancement", credits: 2 },
          { name: "C Programming & Shell Scripting Laboratory", code: "BCA-105P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester 02",
        theme: "Data Structures & Object-Oriented Paradigms",
        subjects: [
          { name: "Data Structures & Algorithm Design", code: "BCA-201", category: "Core Theory", credits: 4 },
          { name: "Object-Oriented Programming with Java", code: "BCA-202", category: "Core Theory", credits: 4 },
          { name: "Probability Models & Statistical Analytics", code: "BCA-203", category: "Foundation", credits: 4 },
          { name: "Business English & Technical Writing", code: "BCA-204", category: "Skill Enhancement", credits: 2 },
          { name: "Data Structures & Java Development Lab", code: "BCA-205P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester 03",
        theme: "Enterprise Databases & Operating Systems",
        subjects: [
          { name: "Relational Database Management Systems (SQL/Oracle)", code: "BCA-301", category: "Core Theory", credits: 4 },
          { name: "Operating Systems & Linux Kernel Concepts", code: "BCA-302", category: "Core Theory", credits: 4 },
          { name: "Computer Networks & Protocol Architectures", code: "BCA-303", category: "Core Theory", credits: 4 },
          { name: "Python for Scientific Computing & Data Analysis", code: "BCA-304", category: "Skill Enhancement", credits: 2 },
          { name: "RDBMS Query Optimization & Schema Design Lab", code: "BCA-305P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester 04",
        theme: "Full-Stack Web Engineering & Cyber Security",
        subjects: [
          { name: "Design & Analysis of Algorithms", code: "BCA-401", category: "Core Theory", credits: 4 },
          { name: "Web Technologies (Node.js, React, RESTful APIs)", code: "BCA-402", category: "Core Theory", credits: 4 },
          { name: "Software Engineering & Agile DevOps Workflows", code: "BCA-403", category: "Core Theory", credits: 4 },
          { name: "Foundations of Information Security & Cryptography", code: "BCA-404", category: "Skill Enhancement", credits: 2 },
          { name: "Full-Stack Web Engineering Practical Laboratory", code: "BCA-405P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester 05",
        theme: "Cloud Virtualization & Artificial Intelligence",
        subjects: [
          { name: "Cloud Computing Architectures (AWS & Microsoft Azure)", code: "BCA-501", category: "Core Theory", credits: 4 },
          { name: "Artificial Intelligence & Applied Machine Learning", code: "BCA-502", category: "Core Theory", credits: 4 },
          { name: "Elective I: Mobile App Engineering (Flutter / Native)", code: "BCA-503A", category: "Elective", credits: 4 },
          { name: "Elective II: Enterprise Spring Boot & Microservices", code: "BCA-503B", category: "Elective", credits: 4 },
          { name: "Summer Industry Internship Seminar & Technical Defense", code: "BCA-504S", category: "Project / Seminar", credits: 2 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester 06",
        theme: "Big Data Systems, IoT & Capstone Immersion",
        subjects: [
          { name: "Big Data Engineering & Business Analytics", code: "BCA-601", category: "Core Theory", credits: 4 },
          { name: "Elective III: Internet of Things & Embedded Mesh", code: "BCA-602A", category: "Elective", credits: 4 },
          { name: "Elective IV: Automated Software Testing & QA Pipelines", code: "BCA-602B", category: "Elective", credits: 4 },
          { name: "Major Software Capstone Dissertation & Public Defense", code: "BCA-603D", category: "Project / Seminar", credits: 4 },
          { name: "Corporate Placement Immersion & Technical Viva Voce", code: "BCA-604V", category: "Practical Lab", credits: 2 },
        ],
      },
    ],
    certifications: [
      {
        name: "Full-Stack Enterprise Engineering",
        provider: "TAPS Technical Finishing School",
        badge: "Full-Stack Track",
        desc: "Mastery in React, TypeScript, Next.js, Node.js, Spring Boot, GitOps, and CI/CD automated test benches.",
      },
      {
        name: "AWS & Cloud Practitioner Foundations",
        provider: "Cloud Center of Excellence",
        badge: "Cloud Computing",
        desc: "Serverless lambda compute, Amazon S3 storage buckets, VPC networking, security groups, and Docker containers.",
      },
      {
        name: "Data Science with Python & Scikit",
        provider: "AI & Analytics Incubator",
        badge: "Machine Learning",
        desc: "Exploratory data analysis with Pandas, mathematical vectorization via NumPy, and predictive regression models.",
      },
      {
        name: "Applied Cyber Security Benchmarks",
        provider: "Cyber Defense Wing",
        badge: "Network Security",
        desc: "OWASP Top 10 vulnerabilities, penetration testing basics, ethical cryptographic protocols, and secure coding.",
      },
    ],
    careers: [
      {
        role: "Software Development Engineer (SDE)",
        averagePackage: "₹4.5 – ₹9.0 LPA",
        recruiters: "TCS, Infosys, Wipro, Capgemini, Cognizant",
        skills: ["Java", "Spring Boot", "Data Structures", "System Design"],
      },
      {
        role: "Cloud DevOps & Systems Architect",
        averagePackage: "₹5.0 – ₹8.5 LPA",
        recruiters: "AWS Partners, CGI, Tech Mahindra, L&T Infotech",
        skills: ["AWS", "Docker", "Linux Shell", "Kubernetes Basics"],
      },
      {
        role: "Data Analyst & Business Intelligence Lead",
        averagePackage: "₹4.2 – ₹7.8 LPA",
        recruiters: "Deloitte, Genpact, Mu Sigma, FactSet",
        skills: ["Python", "SQL", "PowerBI", "Predictive Analytics"],
      },
      {
        role: "Postgraduate Academic Ascension",
        averagePackage: "Higher Studies Pathway",
        recruiters: "Direct Pathway for MCA, M.Sc Computer Science & MBA Tech",
        skills: ["NIMCET Prep", "Academic Research", "Technical Mastery"],
      },
    ],
    eligibility: {
      qualifyingExam: "Higher Secondary (10+2 / +2 Science, Arts, or Commerce) from a recognized Board.",
      boards: "CHSE Odisha, CBSE, CISCE (ICSE), or any recognized State/Central Board.",
      aggregateScore: "Minimum 45% aggregate score in the qualifying exam (40% for reserved categories).",
      subjectPreference: "Mathematics, Statistics, or Computer Science at 10+2 is advantageous though not mandatory.",
      admissionBasis: "Merit-based admission on first-cum-first-serve basis subject to seats and Utkal University norms.",
    },
  },
  bba: {
    code: "bba",
    abbr: "BBA",
    title: "Bachelor of Business Administration",
    degreeName: "B.B.A. (Honours / Regular)",
    affiliation: "Affiliated to Utkal University • Approved by AICTE, New Delhi",
    intake: "128 Approved Seats",
    duration: "3 Years • 6 Semesters • Choice-Based Credit System (CBCS)",
    tagline: "Strategic Leadership, Financial Engineering, Corporate Analytics & Venture Incubation",
    overview:
      "Crafted to nurture executive leadership, commercial acumen, and analytical decision-making for contemporary corporate boardrooms. Taught in Block-5 (Department of MBA, Training & Placement Hub) with live trading simulation desks, executive GD-PI amphitheaters, and the AKASHYAAN student enterprise incubator.",
    heroImage: "/images/drive_new/_DSC1852.JPG",
    campusWing: "Executive Enclave • Block-5 Management Tower",
    accentGradient: "from-indigo-600 via-purple-600 to-pink-500",
    glowColor: "rgba(147, 51, 234, 0.15)",
    borderHover: "hover:border-purple-500/40",
    keyMetrics: [
      { label: "Corporate Partners", value: "100+", helper: "Banking, FMCG & Consulting" },
      { label: "Approved Intake", value: "128", helper: "Annual Student Cohort" },
      { label: "Executive Faculty", value: "100%", helper: "Doctoral Scholars & Corporate Mentors" },
      { label: "Startup Desk", value: "AKASHYAAN", helper: "Student Venture Accelerator" },
    ],
    curriculum: [
      {
        semNumber: 1,
        title: "Semester 01",
        theme: "Managerial Foundations & Economic Systems",
        subjects: [
          { name: "Principles & Practices of Modern Management", code: "BBA-101", category: "Core Theory", credits: 4 },
          { name: "Managerial Economics & Microeconomic Principles", code: "BBA-102", category: "Foundation", credits: 4 },
          { name: "Financial Accounting & Corporate Statement Analysis", code: "BBA-103", category: "Core Theory", credits: 4 },
          { name: "Executive Business Communication & Pitch Writing", code: "BBA-104", category: "Skill Enhancement", credits: 2 },
          { name: "Business Computer Applications & Advanced Excel Lab", code: "BBA-105P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 2,
        title: "Semester 02",
        theme: "Organizational Psychology & Quantitative Reasoning",
        subjects: [
          { name: "Organizational Behavior & Group Dynamics", code: "BBA-201", category: "Core Theory", credits: 4 },
          { name: "Macroeconomics & Indian Banking Ecosystem", code: "BBA-202", category: "Foundation", credits: 4 },
          { name: "Quantitative Techniques & Business Statistics", code: "BBA-203", category: "Core Theory", credits: 4 },
          { name: "Corporate Law, Contracts & Regulatory Frameworks", code: "BBA-204", category: "Core Theory", credits: 4 },
          { name: "Personality Development, GD & Executive Presence Lab", code: "BBA-205P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 3,
        title: "Semester 03",
        theme: "Marketing Strategy, Human Capital & Finance",
        subjects: [
          { name: "Marketing Management & Consumer Behavior Insights", code: "BBA-301", category: "Core Theory", credits: 4 },
          { name: "Cost & Managerial Accounting Frameworks", code: "BBA-302", category: "Core Theory", credits: 4 },
          { name: "Human Resource Management & Talent Acquisition", code: "BBA-303", category: "Core Theory", credits: 4 },
          { name: "Corporate Financial Management & Capital Budgeting", code: "BBA-304", category: "Core Theory", credits: 4 },
          { name: "Tally ERP & Accounting Automation Practical Lab", code: "BBA-305P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 4,
        title: "Semester 04",
        theme: "Operations Research, Taxation & Entrepreneurship",
        subjects: [
          { name: "Operations Management & Supply Chain Logistics", code: "BBA-401", category: "Core Theory", credits: 4 },
          { name: "Business Research Methodology & Statistical Modeling", code: "BBA-402", category: "Core Theory", credits: 4 },
          { name: "Direct & Indirect Corporate Taxations (GST Practice)", code: "BBA-403", category: "Core Theory", credits: 4 },
          { name: "Venture Ideation & Entrepreneurship Incubation", code: "BBA-404", category: "Skill Enhancement", credits: 2 },
          { name: "Financial Modeling & Valuation Simulation Lab", code: "BBA-405P", category: "Practical Lab", credits: 2 },
        ],
      },
      {
        semNumber: 5,
        title: "Semester 05",
        theme: "Strategic Governance & Functional Specializations",
        subjects: [
          { name: "Strategic Management & Competitive Corporate Policy", code: "BBA-501", category: "Core Theory", credits: 4 },
          { name: "International Business & Cross-Border Logistics", code: "BBA-502", category: "Core Theory", credits: 4 },
          { name: "Elective I: Investment Banking / Digital Performance Media", code: "BBA-503A", category: "Elective", credits: 4 },
          { name: "Elective II: HR Metrics / Financial Derivatives", code: "BBA-503B", category: "Elective", credits: 4 },
          { name: "Summer Internship Project (SIP) Defense & Defense Viva", code: "BBA-504S", category: "Project / Seminar", credits: 2 },
        ],
      },
      {
        semNumber: 6,
        title: "Semester 06",
        theme: "Corporate Governance, E-Commerce & Capstone Venture",
        subjects: [
          { name: "Business Ethics, Sustainability & Corporate Governance", code: "BBA-601", category: "Core Theory", credits: 4 },
          { name: "Retail Management & Omnichannel Commerce Networks", code: "BBA-602", category: "Core Theory", credits: 4 },
          { name: "Elective III: Fintech Platforms / Strategic Brand Scaling", code: "BBA-603A", category: "Elective", credits: 4 },
          { name: "Elective IV: Organizational Change & Global HRM", code: "BBA-603B", category: "Elective", credits: 4 },
          { name: "Comprehensive Business Plan Dissertation & Defense", code: "BBA-604D", category: "Project / Seminar", credits: 4 },
        ],
      },
    ],
    certifications: [
      {
        name: "Financial Modeling & DCF Valuation",
        provider: "FinTech Simulation Desk",
        badge: "Corporate Finance",
        desc: "Three-statement financial models, discounted cash flows, sensitivity matrices, and investment thesis creation.",
      },
      {
        name: "Digital Marketing & Performance Media",
        provider: "Growth Marketing Lab",
        badge: "Digital Growth",
        desc: "Google Analytics 4, Meta Ad Manager, customer lifetime value optimization, SEM attribution, and content strategy.",
      },
      {
        name: "Human Resource Analytics & Talent Metrics",
        provider: "HR Center of Excellence",
        badge: "Human Capital",
        desc: "Attrition forecasting, recruitment funnel KPI measurement, competency mapping, and modern HRIS workflows.",
      },
      {
        name: "Logistics Optimization & Supply Chain ERP",
        provider: "Operations Research Wing",
        badge: "Supply Chain",
        desc: "Inventory replenishment planning, warehouse routing efficiency, and SAP ERP enterprise distribution overviews.",
      },
    ],
    careers: [
      {
        role: "Corporate Banking & Wealth Manager",
        averagePackage: "₹4.5 – ₹8.5 LPA",
        recruiters: "HDFC Bank, ICICI Bank, Axis Bank, Bandhan Bank",
        skills: ["Wealth Advisory", "Portfolio Analysis", "Client Relations"],
      },
      {
        role: "Financial & Equity Research Analyst",
        averagePackage: "₹4.8 – ₹8.0 LPA",
        recruiters: "Deloitte, Genpact, Bajaj Finserv, Karvy",
        skills: ["Financial Statements", "Equity Research", "DCF Modeling"],
      },
      {
        role: "Human Resources Executive & Recruiter",
        averagePackage: "₹3.8 – ₹6.5 LPA",
        recruiters: "Tech Mahindra, Capgemini, TCS, Wipro",
        skills: ["Talent Sourcing", "Compensation Benchmarking", "Employee Engagement"],
      },
      {
        role: "Premier MBA Ascension",
        averagePackage: "Higher Studies Pathway",
        recruiters: "Competitive edge in CAT / XAT / CMAT / MAT for Tier-1 B-Schools",
        skills: ["Quantitative Ability", "Case Study Frameworks", "Executive GD-PI"],
      },
    ],
    eligibility: {
      qualifyingExam: "Higher Secondary (10+2 / +2 Science, Commerce, or Arts) from any recognized Board.",
      boards: "CHSE Odisha, CBSE, CISCE (ICSE), or any recognized State/Central Board.",
      aggregateScore: "Minimum 45% aggregate in qualifying exam (40% for reserved categories).",
      subjectPreference: "Open to all academic streams; strong communication and logical aptitude encouraged.",
      admissionBasis: "Merit-based admission on first-cum-first-serve basis subject to seats and Utkal University norms.",
    },
  },
};

const RECRUITERS = [
  "Tata Consultancy Services",
  "Infosys Enterprise",
  "Wipro Digital",
  "Capgemini India",
  "Deloitte Consulting",
  "Cognizant Interactive",
  "Tech Mahindra",
  "ICICI Bank",
  "HDFC Bank",
  "Genpact Analytics",
  "Amazon Web Services Partner",
  "Bandhan Bank",
  "Bajaj Finserv",
  "CGI Technologies",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Core Theory": "bg-blue-950/80 text-blue-400 border-blue-800/60",
  "Practical Lab": "bg-emerald-950/80 text-emerald-400 border-emerald-800/60",
  Elective: "bg-purple-950/80 text-purple-400 border-purple-800/60",
  "Project / Seminar": "bg-amber-950/80 text-amber-400 border-amber-800/60",
  Foundation: "bg-zinc-800 text-zinc-300 border-zinc-700",
  "Skill Enhancement": "bg-cyan-950/80 text-cyan-400 border-cyan-800/60",
};

export default function ProgrammesPage() {
  const [selectedCourse, setSelectedCourse] = useState<ProgrammeKey>("bca");
  const [openSemester, setOpenSemester] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"curriculum" | "certifications" | "eligibility" | "careers">("curriculum");

  const current = PROGRAMMES[selectedCourse];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-zinc-800 selection:text-white">
      {/* 1. TOP GLOBAL NAVIGATION */}
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1 relative overflow-hidden bg-black">
        {/* KINETIC AMBIENT BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent blur-[120px] rounded-full" />
        <div className="pointer-events-none absolute top-[30%] -right-40 w-[600px] h-[600px] bg-indigo-900/10 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute top-[60%] -left-40 w-[600px] h-[600px] bg-purple-950/15 blur-[140px] rounded-full" />

        {/* SUBTLE LINEAR GRID TEXTURE */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#18181b15_1px,transparent_1px),linear-gradient(to_bottom,#18181b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* =========================================================================
            SECTION 1: HERO HEADER (Staggered Text Reveal & Enterprise Dark Mode)
           ========================================================================= */}
        <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Animated Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-6 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-300 font-medium">
                TACT Trust • Estd. 2000 • Utkal University CBCS
              </span>
            </motion.div>

            {/* Staggered Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6"
            >
              Two Flagship Degrees.
              <br />
              <span className="font-medium bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Infinite Career Trajectories.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10"
            >
              Trident Academy of Professional Studies delivers rigorous, industry-accredited 
              undergraduate degrees in <span className="text-white font-medium">Computer Applications (BCA)</span> and{" "}
              <span className="text-white font-medium">Business Administration (BBA)</span> under Utkal University.
            </motion.p>

            {/* Program Switcher (Framer Motion layoutId Pill) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl backdrop-blur-xl"
            >
              {(["bca", "bba"] as ProgrammeKey[]).map((courseKey) => {
                const isSelected = selectedCourse === courseKey;
                const p = PROGRAMMES[courseKey];
                return (
                  <button
                    key={courseKey}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setSelectedCourse(courseKey);
                      setOpenSemester(1);
                    }}
                    className={`relative z-10 flex items-center gap-3 px-6 sm:px-9 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                      isSelected ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        courseKey === "bca" ? "bg-blue-400" : "bg-purple-400"
                      }`}
                    />
                    <span>{p.abbr} — {p.title.split(" ")[2] || p.abbr}</span>
                    {isSelected && (
                      <motion.div
                        layoutId="activeProgramPill"
                        className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-800/90 to-zinc-700/80 border border-zinc-600/50 rounded-xl shadow-lg -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROGRAMME OVERVIEW BENTO SHOWCASE (3D Glassmorphic Card)
           ========================================================================= */}
        <section className="relative py-8 sm:py-12 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.code}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-3xl border border-zinc-800/90 bg-zinc-950/70 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative"
            >
              {/* Dynamic Atmospheric Card Corner Glow */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: current.glowColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Col: Narrative, Badges, Metrics */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700/80 text-zinc-300">
                      {current.abbr} Track
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-400">
                      {current.duration.split("•")[0]}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-400">
                      {current.intake}
                    </span>
                  </div>

                  {/* Headline & Affiliation */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
                      {current.title}
                    </h2>
                    <p className="text-sm font-mono text-zinc-400 mt-2">
                      {current.affiliation}
                    </p>
                  </div>

                  {/* High-Impact Tagline & Narrative */}
                  <p className="text-sm sm:text-base font-semibold text-zinc-200 leading-snug">
                    {current.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {current.overview}
                  </p>

                  {/* 4 Quantitative Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {current.keyMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                      >
                        <div className="text-2xl font-bold tracking-tight text-white">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-semibold text-zinc-300 mt-1">
                          {metric.label}
                        </div>
                        <div className="text-[10px] text-zinc-500 mt-0.5 truncate">
                          {metric.helper}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Micro-Interactions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/10 active:scale-95 cursor-pointer flex items-center gap-2 group"
                    >
                      <span>Apply for {current.abbr} 2026</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>

                    <Link
                      href="/admission"
                      className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white hover:border-zinc-500 font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95"
                    >
                      Admission Guidelines
                    </Link>
                  </div>

                </div>

                {/* Right Col: Verified Infrastructure Image Surface */}
                <div className="lg:col-span-5">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group"
                  >
                    <Image
                      src={current.heroImage}
                      alt={`${current.title} Academic Facility`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    
                    {/* Dark gradient scrim overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                    {/* Infrastructure Tag Floating Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-md">
                        {current.campusWing}
                      </span>
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-white">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                        Dedicated Academic Wing
                      </div>
                      <div className="text-base font-bold text-white mt-1">
                        Utkal University Authorized Study Center
                      </div>
                      <div className="text-xs text-zinc-300 font-light mt-0.5">
                        High-density fiber optic backbone &amp; modern acoustic lecture halls.
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </section>

        {/* =========================================================================
            SECTION 3: CAREER & INDUSTRY OUTCOME RIBBON (Kinetic Infinite Marquee)
           ========================================================================= */}
        <section className="relative py-10 border-y border-zinc-800/80 bg-zinc-950/60 overflow-hidden z-10">
          <div className="flex items-center gap-4 mb-4 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Industry Recruiters &amp; Corporate Placement Pipeline
            </span>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 28, repeat: Infinity }}
              className="flex items-center gap-8 whitespace-nowrap will-change-transform"
            >
              {[...RECRUITERS, ...RECRUITERS].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  <span>{company}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: SUB-NAVIGATION TAB CONTROLLER (Curriculum / Certs / Eligibility)
           ========================================================================= */}
        <section className="relative py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
          
          {/* Sub-Navigation Pills */}
          <div className="flex border-b border-zinc-800/80 mb-12 overflow-x-auto scrollbar-none gap-2">
            {[
              { id: "curriculum", label: "CBCS Semester Curriculum", count: "06 Semesters" },
              { id: "certifications", label: "Finishing Certifications", count: "04 Modules" },
              { id: "eligibility", label: "Eligibility & Selection", count: "Criteria" },
              { id: "careers", label: "Career & Placement Tracks", count: "Outcome" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`group relative pb-4 px-5 text-left transition-all duration-200 cursor-pointer whitespace-nowrap`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-xs sm:text-sm font-semibold tracking-wide ${
                      isActive ? "text-white font-bold" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}>
                      {tab.label}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-zinc-400">
                      {tab.count}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="subTabIndicator"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              TAB CONTENT 1: CBCS CURRICULUM ACCORDION (Semesters 1-6)
             ========================================================================= */}
          {activeTab === "curriculum" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    Choice-Based Credit System (CBCS) Structure
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Structured across 6 comprehensive semesters under Utkal University academic regulations.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setOpenSemester(openSemester === -1 ? 1 : -1)}
                    className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
                  >
                    {openSemester === -1 ? "Expand First" : "Collapse All"}
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-900/50 transition-colors"
                  >
                    Download Full Syllabus PDF ↓
                  </button>
                </div>
              </div>

              {/* Accordion List */}
              <div className="space-y-3">
                {current.curriculum.map((sem) => {
                  const isOpen = openSemester === sem.semNumber;
                  const totalCredits = sem.subjects.reduce((sum, s) => sum + s.credits, 0);

                  return (
                    <div
                      key={sem.semNumber}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-zinc-950/90 border-zinc-700/80 shadow-2xl"
                          : "bg-zinc-950/40 border-zinc-850 hover:border-zinc-700/70"
                      }`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenSemester(isOpen ? -1 : sem.semNumber)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                            isOpen
                              ? "bg-white text-black border-white"
                              : "bg-zinc-900 text-zinc-400 border-zinc-800"
                          }`}>
                            0{sem.semNumber}
                          </span>
                          <div>
                            <div className="flex items-center gap-3">
                              <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                                {sem.title}
                              </h4>
                              <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline">
                                • {totalCredits} Credits
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                              {sem.theme}
                            </p>
                          </div>
                        </div>

                        {/* Chevron Indicator */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-mono text-xs text-zinc-400 hidden md:inline">
                            {sem.subjects.length} Courses
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 text-xs"
                          >
                            ▼
                          </motion.span>
                        </div>
                      </button>

                      {/* Accordion Collapsible Panel */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden border-t border-zinc-850"
                          >
                            <div className="p-5 sm:p-6 pt-4 space-y-3">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {sem.subjects.map((sub, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors flex items-start justify-between gap-3 group"
                                  >
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-2">
                                        <span className="font-mono text-[10px] text-zinc-500">
                                          {sub.code}
                                        </span>
                                        <span
                                          className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${
                                            CATEGORY_COLORS[sub.category] || "bg-zinc-800 text-zinc-300"
                                          }`}
                                        >
                                          {sub.category}
                                        </span>
                                      </div>
                                      <p className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors leading-relaxed">
                                        {sub.name}
                                      </p>
                                    </div>

                                    <div className="text-right shrink-0 pt-0.5">
                                      <span className="font-mono text-[11px] text-zinc-400">
                                        {sub.credits} Credits
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              TAB CONTENT 2: FINISHING CERTIFICATIONS BENTO
             ========================================================================= */}
          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  Industry-Aligned Technical Certifications
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Embedded within {current.abbr} academic semesters at zero supplementary tuition fee.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {current.certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-600 transition-colors shadow-xl relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/40 border border-blue-900/60 px-3 py-1 rounded-md">
                        {cert.badge}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        {cert.provider}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-100 transition-colors">
                      {cert.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                      {cert.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-zinc-850 flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span>Hands-on Lab Capstone</span>
                      <span className="text-emerald-400">Certificate of Mastery ✓</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              TAB CONTENT 3: ELIGIBILITY & UTKAL UNIVERSITY NORMS
             ========================================================================= */}
          {activeTab === "eligibility" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-8 p-7 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-800 shadow-xl space-y-6">
                <div>
                  <h3 className="text-2xl font-light text-white tracking-tight">
                    Utkal University Eligibility &amp; Admission Norms
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
                    Academic Year 2026–27 Admission Guidelines
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                      01. Qualifying Examination
                    </span>
                    <p className="text-sm font-medium text-white">
                      {current.eligibility.qualifyingExam}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                      02. Recognized Education Boards
                    </span>
                    <p className="text-sm font-medium text-white">
                      {current.eligibility.boards}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                      03. Minimum Aggregate Percentage
                    </span>
                    <p className="text-sm font-medium text-white">
                      {current.eligibility.aggregateScore}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                      04. Subject Preference
                    </span>
                    <p className="text-sm font-medium text-white">
                      {current.eligibility.subjectPreference}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1">
                      05. Admission Process
                    </span>
                    <p className="text-sm font-medium text-white">
                      {current.eligibility.admissionBasis}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-md"
                  >
                    Initiate Admission Registration →
                  </button>
                  <Link
                    href="/admission"
                    className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Read Detailed Process
                  </Link>
                </div>
              </div>

              {/* Fast Track Box */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 space-y-5">
                <span className="font-mono text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Important Notice
                </span>
                <h4 className="text-lg font-light text-white leading-snug">
                  Admissions Open for 2026 Batch
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Due to high demand and strict cohort ceiling (128 seats each for BCA and BBA), applicants are encouraged to submit queries early.
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-800 text-xs font-mono text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Academic Year:</span>
                    <span>2026–2029</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Session Commencement:</span>
                    <span>July 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Degree Authority:</span>
                    <span>Utkal University</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity"
                >
                  Book Counseling Slot
                </button>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              TAB CONTENT 4: CAREERS & PLACEMENT PATHWAYS
             ========================================================================= */}
          {activeTab === "careers" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                  Placement Roles &amp; Postgraduate Trajectories
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Average compensation benchmarks and typical recruitment partners for {current.abbr} graduates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {current.careers.map((career, cIdx) => (
                  <motion.div
                    key={cIdx}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-colors shadow-lg space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                          Role 0{cIdx + 1}
                        </span>
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          {career.role}
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1 rounded-md shrink-0">
                        {career.averagePackage}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-zinc-500 font-mono block mb-1">
                        Frequent Recruiters:
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                        {career.recruiters}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] text-zinc-400 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </section>

        {/* =========================================================================
            SECTION 5: ENTERPRISE CALL TO ACTION (Magnetic Glowing Card)
           ========================================================================= */}
        <section className="relative py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-center flex flex-col items-center">
            
            {/* Ambient Lighting Orb */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />

            <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/80 mb-6">
              Admissions Open 2026–27
            </span>

            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-3xl mb-4">
              Begin Your Academic Journey at Trident Academy of Professional Studies
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed mb-8">
              Whether you are aspiring for software engineering excellence in BCA or corporate executive leadership in BBA, our faculty and career incubation desks will mentor you every step of the way.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
              >
                Apply for Admission 2026 →
              </button>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-semibold text-sm hover:bg-zinc-800 transition-all active:scale-95"
              >
                Schedule Campus Tour
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* 6. GLOBAL FOOTER & INQUIRY MODAL */}
      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
