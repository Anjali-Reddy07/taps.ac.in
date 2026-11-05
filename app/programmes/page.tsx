"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ProgrammesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<"bca" | "bba">("bca");
  const [activeTab, setActiveTab] = useState<"curriculum" | "certifications" | "eligibility" | "careers">("curriculum");

  const programmes = {
    bca: {
      code: "BCA",
      title: "Bachelor of Computer Applications",
      degree: "3-Year Full-Time Degree • 6 Semesters",
      affiliation: "Affiliated to Utkal University • Approved by AICTE, New Delhi",
      intake: "128 Seats Approved",
      photo: "/images/drive_third/ClassRooms_Academic.JPG",
      photoCaption: "Smart Computing Amphitheatre • Official TACT Lecture Theatre",
      tagline: "High-Performance Computational Systems, Full-Stack Development & AI Foundations",
      summary:
        "The BCA programme at TAPS is engineered to transform students into enterprise-ready software developers, cloud architects, and data engineers. Taught by 100% NET/Ph.D qualified faculty with round-the-clock access to cloud computing clusters.",
      highlights: [
        "124+ Annual Recruiters with 95%+ Placement Conversion",
        "Dedicated Python, Full-Stack Java & Cloud Computing Labs",
        "Curriculum mapped to Utkal University CBCS Framework",
        "Industry certifications included in academic fees",
      ],
      semesters: [
        {
          sem: "Semester I",
          subjects: [
            "Programming Fundamentals using C / C++",
            "Computer System Architecture & Digital Logic",
            "Discrete Mathematical Structures",
            "Environmental Science & Professional Ethics",
            "C Programming Lab & Shell Scripting",
          ],
        },
        {
          sem: "Semester II",
          subjects: [
            "Data Structures & Algorithm Design",
            "Object-Oriented Programming with Java",
            "Basic Statistics & Probability Models",
            "English Technical & Business Communication",
            "Data Structures & Java Development Lab",
          ],
        },
        {
          sem: "Semester III",
          subjects: [
            "Relational Database Management Systems (Oracle/MySQL)",
            "Operating Systems & Linux Kernel Concepts",
            "Computer Networks & Transmission Protocols",
            "Python Programming for Data Analytics",
            "RDBMS & SQL Query Optimization Lab",
          ],
        },
        {
          sem: "Semester IV",
          subjects: [
            "Design & Analysis of Algorithms",
            "Web Technologies (HTML5, CSS3, JavaScript & React)",
            "Software Engineering & Agile Methodologies",
            "Foundations of Cyber Security & Cryptography",
            "Full-Stack Web Engineering Lab",
          ],
        },
        {
          sem: "Semester V",
          subjects: [
            "Cloud Computing & Virtualization (AWS / Azure)",
            "Artificial Intelligence & Machine Learning Basics",
            "Elective I: Mobile App Development (Flutter/Android)",
            "Elective II: Enterprise Java with Spring Boot",
            "Summer Internship & Live Industry Project Seminar",
          ],
        },
        {
          sem: "Semester VI",
          subjects: [
            "Big Data Analytics & Business Intelligence",
            "Elective III: Internet of Things (IoT) & Embedded Systems",
            "Elective IV: Software Testing & Quality Assurance",
            "Major Capstone Project & Viva Voce",
            "Corporate Placement Immersion",
          ],
        },
      ],
      certifications: [
        {
          name: "Full-Stack Web Development",
          provider: "Industry Finishing Wing",
          desc: "Mastery of MERN / Spring Boot stacks with version control and production deployment.",
        },
        {
          name: "Cloud Practitioner Foundations",
          provider: "AWS / Microsoft Partner",
          desc: "Serverless architecture, containerization with Docker, and cloud networking.",
        },
        {
          name: "Python for Data Science & AI",
          provider: "Data Analytics Lab",
          desc: "Pandas, NumPy, Scikit-Learn, and applied data visualization models.",
        },
        {
          name: "Cyber Security & Ethical Defense",
          provider: "TAPS Center of Excellence",
          desc: "Network penetration fundamentals, OWASP security benchmarks, and threat modeling.",
        },
      ],
      eligibility: {
        qualification: "Passed 10+2 / Higher Secondary (+2 Science / Arts / Commerce)",
        board: "CHSE Odisha, CBSE, CISCE, or any recognized State/Central Board.",
        marks: "Minimum 45% aggregate in qualifying examination (40% for reserved categories).",
        preferred: "Mathematics or Computer Science at +2 level is desirable but not mandatory.",
        process: "Admissions strictly on first-cum-first-serve basis subject to eligibility.",
      },
      careers: [
        { role: "Software Development Engineer (SDE)", hiring: "TCS, Infosys, Wipro, Capgemini" },
        { role: "Cloud & Infrastructure Engineer", hiring: "AWS, CGI Info Systems, Tech Mahindra" },
        { role: "Data Analyst & Business Intelligence Lead", hiring: "Deloitte, Cognizant, Genpact" },
        { role: "Cyber Security Analyst", hiring: "Leading IT security firms & enterprise banking" },
        { role: "Postgraduate Pathways", hiring: "Direct eligibility for MCA, M.Sc CS, and MBA (IT)" },
      ],
    },
    bba: {
      code: "BBA",
      title: "Bachelor of Business Administration",
      degree: "3-Year Full-Time Degree • 6 Semesters",
      affiliation: "Affiliated to Utkal University • Approved by AICTE, New Delhi",
      intake: "128 Seats Approved",
      tagline: "Strategic Leadership, Financial Acumen, Corporate Analytics & Entrepreneurship",
      photo: "/images/drive_third/MBA_seminar_1.jpeg",
      photoCaption: "Corporate Business Seminar Hall • Management Case Study Sessions",
      summary:
        "The BBA programme at TAPS builds executive competencies, commercial acumen, and strategic managerial thought. Designed in alignment with Utkal University's CBCS syllabus with specialized industry immersions in FinTech, Digital Marketing, and Supply Chain Analytics.",
      highlights: [
        "100+ Corporate Recruiters including Tier-1 Banks & Consulting Firms",
        "AKASHYAAN Student Startup & Innovation Incubator Desk",
        "Executive GD-PI Amphitheatre for Corporate Interview Prep",
        "Regular Industry Colloquiums and Corporate Live Projects",
      ],
      semesters: [
        {
          sem: "Semester I",
          subjects: [
            "Principles & Practices of Management",
            "Managerial Economics & Business Microeconomics",
            "Financial Accounting & Statement Analysis",
            "Business Communication & Professional Writing",
            "Business Computer Applications Lab (MS Office & Excel)",
          ],
        },
        {
          sem: "Semester II",
          subjects: [
            "Organizational Behavior & Group Dynamics",
            "Macroeconomics & Indian Financial Systems",
            "Quantitative Techniques & Business Statistics",
            "Business Law & Regulatory Framework",
            "Soft Skills & Personality Development Lab",
          ],
        },
        {
          sem: "Semester III",
          subjects: [
            "Marketing Management & Consumer Insights",
            "Cost & Management Accounting",
            "Human Resource Management",
            "Financial Management & Capital Budgeting",
            "Tally ERP & Accounting Automation Lab",
          ],
        },
        {
          sem: "Semester IV",
          subjects: [
            "Production & Operations Management",
            "Research Methodology for Business Decisions",
            "Taxation Laws & Corporate GST Practice",
            "Entrepreneurship Development & MSME Planning",
            "Advanced Excel for Financial Modeling Lab",
          ],
        },
        {
          sem: "Semester V",
          subjects: [
            "Strategic Management & Corporate Policy",
            "International Business & Global Logistics",
            "Specialization Elective I (Finance / Marketing / HR)",
            "Specialization Elective II (Finance / Marketing / HR)",
            "Summer Internship Project Report & Corporate Viva",
          ],
        },
        {
          sem: "Semester VI",
          subjects: [
            "Business Ethics & Corporate Governance",
            "Retail Management & E-Commerce Ecosystems",
            "Specialization Elective III (Advanced Elective)",
            "Specialization Elective IV (Advanced Elective)",
            "Major Business Plan Dissertation & Defense",
          ],
        },
      ],
      certifications: [
        {
          name: "Financial Modeling & Valuation (Excel)",
          provider: "FinTech Simulation Desk",
          desc: "DCF analysis, ratio analysis, sensitivity forecasting, and investment pitch decks.",
        },
        {
          name: "Digital Marketing & Performance Media",
          provider: "Corporate Marketing Wing",
          desc: "SEO/SEM, Meta Ads, Google Analytics 4, and brand storytelling strategies.",
        },
        {
          name: "HR Analytics & Talent Sourcing",
          provider: "Management Center of Excellence",
          desc: "Competency mapping, payroll automation, and modern ATS recruitment workflows.",
        },
        {
          name: "Supply Chain & ERP Systems",
          provider: "Operations Research Wing",
          desc: "Inventory modeling, logistics optimization, and SAP ERP workflow overviews.",
        },
      ],
      eligibility: {
        qualification: "Passed 10+2 / Higher Secondary in any stream (Science / Commerce / Arts)",
        board: "CHSE Odisha, CBSE, CISCE, or any recognized State/Central Board.",
        marks: "Minimum 45% aggregate in qualifying examination (40% for reserved categories).",
        preferred: "Basic proficiency in English communication and logical reasoning.",
        process: "Admissions strictly on first-cum-first-serve basis subject to eligibility.",
      },
      careers: [
        { role: "Business Development & Relationship Manager", hiring: "ICICI Bank, HDFC, Axis, Bandhan" },
        { role: "Financial & Investment Analyst", hiring: "Deloitte, Genpact, Corporate Brokerages" },
        { role: "Human Resource Executive & Recruiter", hiring: "Tech Mahindra, Capgemini, TCS" },
        { role: "Marketing & Brand Strategist", hiring: "FMCG, E-Commerce & Growth agencies" },
        { role: "Postgraduate Pathways", hiring: "Direct advantage for CAT/XAT/MAT and premier MBA institutions" },
      ],
    },
  };

  const current = programmes[selectedCourse];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/1721020760290.jpg"
              alt="Trident School of Computing"
              fill
              priority
              className="object-cover object-center filter contrast-105 opacity-35 scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21] via-[#070D21]/90 to-[#070D21]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-transparent to-[#070D21]/60" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Undergraduate Degree Programmes
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                Curriculum Engineered for Industry Leadership
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                TAPS exclusively offers three-year full-time undergraduate degrees in 
                <strong className="text-white font-medium"> Computer Applications (BCA)</strong> and 
                <strong className="text-white font-medium"> Business Administration (BBA)</strong> under 
                Utkal University's Choice-Based Credit System (CBCS).
              </p>

              {/* Course Switcher Pills */}
              <div className="inline-flex rounded-xl bg-zinc-900 border border-zinc-700 p-1.5 shadow-md">
                <button
                  onClick={() => setSelectedCourse("bca")}
                  className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                    selectedCourse === "bca"
                      ? "bg-white text-black shadow-md scale-[1.02]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  01. BCA — Computer Applications
                </button>
                <button
                  onClick={() => setSelectedCourse("bba")}
                  className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                    selectedCourse === "bba"
                      ? "bg-white text-black shadow-md scale-[1.02]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  02. BBA — Business Administration
                </button>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* PROGRAMME DETAIL SECTION: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* Header Card for Selected Programme */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-2xs mb-12 animate-fadeInUp">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-200 pb-8 mb-8">
                <div>
                  <div className="inline-block text-[11px] font-mono tracking-widest uppercase font-bold text-zinc-500 mb-2">
                    Degree Track • {current.code}
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
                    className="px-6 py-3 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                  >
                    Apply for {current.code} 2026 →
                  </button>
                  <Link
                    href="/admission"
                    className="px-5 py-3 rounded-lg bg-zinc-100 text-zinc-800 border border-zinc-300 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all duration-300"
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
                  <div key={i} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-[13px] text-zinc-800 font-medium flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Tab Navigation */}
            <div className="flex border-b border-zinc-200 mb-8 overflow-x-auto">
              {[
                { id: "curriculum", label: "Semester-wise Curriculum" },
                { id: "certifications", label: "Included Certifications" },
                { id: "eligibility", label: "Eligibility & Selection" },
                { id: "careers", label: "Career & Placement Pathways" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3.5 px-6 font-semibold text-xs sm:text-sm whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-black text-black font-bold"
                      : "border-transparent text-zinc-500 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sub-Tab 1: Semester-wise Curriculum */}
            {activeTab === "curriculum" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInUp">
                {current.semesters.map((s) => (
                  <div
                    key={s.sem}
                    className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-2xs"
                  >
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3 pb-2 border-b border-zinc-100 flex items-center justify-between">
                      <span>{s.sem}</span>
                      <span className="text-[10px] text-zinc-400">Utkal Univ CBCS</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-zinc-700">
                      {s.subjects.map((sub, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-zinc-400 font-mono text-[11px] shrink-0">{idx + 1}.</span>
                          <span className="leading-relaxed font-normal">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 2: Certifications */}
            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeInUp">
                {current.certifications.map((c) => (
                  <div
                    key={c.name}
                    className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-2xs"
                  >
                    <div className="text-[11px] tracking-widest font-semibold uppercase text-zinc-500 mb-1">
                      {c.provider}
                    </div>
                    <h3 className="text-base font-semibold text-zinc-950 mb-2">
                      {c.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 3: Eligibility with Photo */}
            {activeTab === "eligibility" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeInUp">
                <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8">
                <h3 className="text-xl font-medium text-zinc-950 mb-6">
                  Utkal University Eligibility Guidelines for {current.code}
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-zinc-700">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 mb-1">Qualifying Examination:</strong>
                    <span>{current.eligibility.qualification}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 mb-1">Recognized Educational Boards:</strong>
                    <span>{current.eligibility.board}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 mb-1">Minimum Aggregate Marks:</strong>
                    <span>{current.eligibility.marks}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 mb-1">Subject Preferences:</strong>
                    <span>{current.eligibility.preferred}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="block text-zinc-950 mb-1">Selection Norms:</strong>
                    <span>{current.eligibility.process}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2.5 rounded-lg bg-black text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm"
                  >
                    Submit Admission Enquiry Now
                  </button>
                  <Link
                    href="/admission"
                    className="px-6 py-2.5 rounded-lg bg-zinc-100 text-zinc-800 text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    View Full Admission Procedure
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-96 w-full rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
                <Image
                  src="/images/drive_third/ClassRooms__MG_2339.JPG"
                  alt="Faculty Mentored Academic Amphitheatre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                    Academic Standard
                  </span>
                  <div className="text-base font-bold mt-2">
                    100% NET / Ph.D Mentorship Ecosystem
                  </div>
                  <p className="text-xs text-zinc-300 font-light mt-1">
                    Direct merit-based counseling under Utkal University criteria.
                  </p>
                </div>
              </div>
            </div>
            )}

            {/* Sub-Tab 4: Careers with Corporate Photo Banner */}
            {activeTab === "careers" && (
              <div className="space-y-8 animate-fadeInUp">
                <div className="relative h-56 sm:h-64 w-full rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
                  <Image
                    src="/images/drive_third/Placement_DSC_2425.JPG"
                    alt="Corporate Campus Placement Desk"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600 text-white shadow-xs">
                        Placement Pipeline
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold mt-2">
                        Tier-1 Corporate Recruitment Drives &amp; Mock Technical Interviews
                      </h4>
                      <p className="text-xs text-zinc-300 font-light mt-0.5">
                        Over 124+ visiting companies annually recruiting TAPS BCA &amp; BBA graduates.
                      </p>
                    </div>
                    <Link
                      href="/placements"
                      className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shrink-0 shadow-sm"
                    >
                      View Placement Statistics →
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {current.careers.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-2xs"
                  >
                    <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                      Track 0{idx + 1}
                    </div>
                    <h3 className="text-base font-semibold text-zinc-950 mb-2">
                      {c.role}
                    </h3>
                    <div className="text-xs text-zinc-600">
                      <strong className="text-zinc-800">Recruiters / Scope:</strong> {c.hiring}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            )}

          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

