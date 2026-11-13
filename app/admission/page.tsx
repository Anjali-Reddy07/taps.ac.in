"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

interface DocumentItem {
  id: string;
  name: string;
  desc: string;
  mandatory: boolean;
  tag: string;
}

export default function AdmissionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStep, setFormStep] = useState<number>(1);
  const [activeFeeTab, setActiveFeeTab] = useState<"bca" | "bba">("bca");
  const [feePaymentMode, setFeePaymentMode] = useState<"annual" | "semester">("annual");
  const [includeHostel, setIncludeHostel] = useState<boolean>(false);
  const [includeTransport, setIncludeTransport] = useState<boolean>(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    "doc-1": true,
    "doc-2": true,
  });

  // Candidate Lead Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "BCA",
    board12th: "CHSE Odisha (+2)",
    stream12th: "Science (+2 with Mathematics)",
    score12th: "",
    hasMathOrDiploma: "Yes",
    category: "General",
    needHostel: "No",
    needTransport: "No",
    city: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email address is required";
    }
    if (!formData.phone.trim() || !/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Valid 10-digit mobile number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.score12th.trim()) {
      newErrors.score12th = "Percentage or 'Result Awaited' is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (formStep === 1 && validateStep1()) {
      setFormStep(2);
    } else if (formStep === 2 && validateStep2()) {
      setFormStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1() || !validateStep2()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  // Official Fee Computations matching taps.ac.in
  const baseCollegeFee = feePaymentMode === "annual" ? 100000 : 52500;
  const hostelFee = includeHostel ? (feePaymentMode === "annual" ? 85000 : 44500) : 0;
  const transportFee = includeTransport ? (feePaymentMode === "annual" ? 20000 : 10000) : 0;
  const totalCalculatedFee = baseCollegeFee + hostelFee + transportFee;

  const requiredDocuments: DocumentItem[] = [
    {
      id: "doc-1",
      name: "10th Board Pass Certificate & Marksheet",
      desc: "Original and 2 self-attested photocopies verifying date of birth and secondary curriculum.",
      mandatory: true,
      tag: "ORIGINAL + 2 COPIES",
    },
    {
      id: "doc-2",
      name: "12th / +2 Marksheet & Pass Certificate",
      desc: "From CHSE Odisha, CBSE, ICSE or equivalent (or +2 Admit Card if board results are awaited for provisional admission).",
      mandatory: true,
      tag: "ORIGINAL + 2 COPIES",
    },
    {
      id: "doc-3",
      name: "College Leaving Certificate (CLC) & Conduct Certificate",
      desc: "Issued by the Head of the Institution last attended. Mandatory at the time of final admission confirmation.",
      mandatory: true,
      tag: "ORIGINAL REQUIRED",
    },
    {
      id: "doc-4",
      name: "4 Recent Color Passport Photographs",
      desc: "Standard passport size color photos with white background for official student record ID and university card.",
      mandatory: true,
      tag: "4 COPIES",
    },
    {
      id: "doc-5",
      name: "Migration Certificate (for Non-CHSE Candidates)",
      desc: "Required for students passing qualifying examination from boards other than CHSE Odisha under Utkal University regulations.",
      mandatory: false,
      tag: "FOR CBSE / ICSE / OTHER",
    },
    {
      id: "doc-6",
      name: "Caste / Income / Domicile Certificate",
      desc: "Required for SC, ST, OBC, SEBC and Odisha State Medhabruti or PRERANA scholarship fee concessions.",
      mandatory: false,
      tag: "FOR SCHOLARSHIP SCHEMES",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* LIVE ADMISSIONS BROADCAST MARQUEE */}
        {/* ========================================================================= */}
        <div className="bg-[#030716] border-b border-cyan-900/40 py-2.5 px-4 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <div className="shrink-0 flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>OFFICIAL TAPS PORTAL</span>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="animate-marquee whitespace-nowrap text-xs font-mono text-zinc-300 flex items-center gap-8">
                <span className="flex items-center gap-2">
                  <strong className="text-amber-400 font-bold">● ADMISSIONS 2026–27:</strong>
                  Full-Time 3-Year / 4-Year BCA &amp; 4-Year BBA under Utkal University. First-cum-first-served seat allotment.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-emerald-400 font-bold">✔ PROVISIONAL SEAT BOOKING:</strong>
                  Candidates awaiting +2 results can provisionally book seat with ₹20,000 (fully adjustable against 1st semester fee).
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-cyan-400 font-bold">🏛 APPLICATION FEE:</strong>
                  ₹200 in person at Infocity Admissions Cell or via DD payable to &ldquo;TACT&rdquo; at Bhubaneswar.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-purple-400 font-bold">🎓 SCHOLARSHIP SUPPORT:</strong>
                  Odisha State Medhabruti, PRERANA &amp; TACT Trust Merit Endowments facilitated.
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-emerald-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DESK: ONLINE</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO BANNER: ADVANCED ANIMATED COMMAND DECK */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Deep Gradient Scrim */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg"
              alt="Trident Campus Admission Cell"
              fill
              priority
              quality={92}
              className="object-cover object-center filter contrast-105 opacity-65 scale-100"
              sizes="100vw"
            />
            {/* Deep Dual Scrim for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030716] via-[#050C22]/90 to-[#04091A]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030716] via-transparent to-transparent" />
            
            {/* Cybernetic High-Tech Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "36px 36px"
              }}
            />
          </div>

          <section className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Headline, Official Utkal Details & Key Policies */}
              <div className="lg:col-span-8 space-y-6 animate-fadeInUp">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Academic Session 2026–27 Open</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-800/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    Utkal University CBCS Affiliated
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
                  Begin Your Professional Career with{" "}
                  <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    BCA &amp; BBA Honours
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                  Applications are invited for full-time undergraduate degrees in 
                  <strong className="text-white font-medium"> BCA (Bachelor of Computer Applications)</strong> and 
                  <strong className="text-white font-medium"> BBA (Bachelor of Business Administration)</strong> affiliated to Utkal University. 
                  Admissions operate strictly on first-cum-first-serve basis with dedicated corporate recruitment preparation.
                </p>

                {/* Telemetry Metric Chips directly matching taps.ac.in */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-700/80 backdrop-blur-xs">
                    <span className="text-cyan-400">🏛</span>
                    <span>Infocity Campus Admissions Cell</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-700/80 backdrop-blur-xs">
                    <span className="text-emerald-400">📄</span>
                    <span>Application Fee: ₹200 (DD to &ldquo;TACT&rdquo;)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-700/80 backdrop-blur-xs">
                    <span className="text-amber-400">⚡</span>
                    <span>Provisional Seat Reservation: ₹20,000</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Statistics Cards (Partially Dissolved Frosted Glass) */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 mb-1 flex items-center justify-between">
                    <span>UTKAL AFFILIATION</span>
                    <span className="text-emerald-400 font-bold">✓ GOVT. APPROVED</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                    CBCS 8-Semesters
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-light">
                    Autonomous Syllabus with Cloud &amp; AI Electives
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 mb-1 flex items-center justify-between">
                    <span>CORPORATE ALLIANCES</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                    100+ Hiring Partners
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-light">
                    TCS, Infosys, Wipro, Capgemini, CGI Recruitment
                  </div>
                </div>
              </div>

            </div>
          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* 2-COLUMN SECTION: INTERACTIVE 3-STAGE WIZARD & PROCEDURE STEPS */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* ===================================================================== */}
              {/* LEFT COLUMN: 3-STAGE ANIMATED LEAD ENQUIRY WIZARD (7 COLS) */}
              {/* ===================================================================== */}
              <div className="lg:col-span-7 animate-fadeInUp">
                <div className="p-6 sm:p-8 rounded-3xl border border-white/80 backdrop-blur-md bg-gradient-to-br from-white/70 via-white/45 to-white/20 shadow-xl relative overflow-hidden">
                  
                  {/* Subtle Top Ambient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

                  {/* Header & Step Wizard Bar */}
                  <div className="border-b border-zinc-200/80 pb-5 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-widest font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/70">
                        ONLINE APPLICATION REGISTRATION
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Admissions Cell Online</span>
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                      Register Admission Enquiry 2026
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 font-normal leading-relaxed">
                      Complete your academic profile. Our institutional admission counseling desk will review your eligibility and contact you within 24 hours.
                    </p>

                    {/* Step Wizard Progress Bar */}
                    {!isSubmitted && (
                      <div className="mt-5 pt-4 border-t border-zinc-200/60">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className={formStep >= 1 ? "font-bold text-blue-700" : "text-zinc-400"}>
                            1. Profile &amp; Course
                          </span>
                          <span className={formStep >= 2 ? "font-bold text-blue-700" : "text-zinc-400"}>
                            2. +2 Academic Eligibility
                          </span>
                          <span className={formStep >= 3 ? "font-bold text-blue-700" : "text-zinc-400"}>
                            3. Campus Logistics
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-200/70 rounded-full overflow-hidden">
                          <motion.div
                            initial={false}
                            animate={{ width: formStep === 1 ? "33%" : formStep === 2 ? "66%" : "100%" }}
                            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10 text-center space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl shadow-lg">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                        Application Enquiry Received!
                      </h3>
                      <div className="p-4 rounded-2xl bg-white/80 border border-zinc-200/80 text-xs sm:text-sm text-zinc-700 max-w-md mx-auto leading-relaxed shadow-xs text-left space-y-2">
                        <div>
                          <strong>Applicant:</strong> {formData.fullName}
                        </div>
                        <div>
                          <strong>Registered Program:</strong> {formData.course} Honours (Utkal University)
                        </div>
                        <div>
                          <strong>Registered Mobile:</strong> {formData.phone}
                        </div>
                        <div>
                          <strong>Qualifying Stream:</strong> {formData.stream12th} ({formData.score12th})
                        </div>
                        <div className="pt-2 border-t border-zinc-200 text-xs text-emerald-700 font-mono">
                          ✔ An official counseling dossier has been generated. Our senior counselor will connect via Phone / WhatsApp within 24 hours.
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormStep(1);
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            course: "BCA",
                            board12th: "CHSE Odisha (+2)",
                            stream12th: "Science (+2 with Mathematics)",
                            score12th: "",
                            hasMathOrDiploma: "Yes",
                            category: "General",
                            needHostel: "No",
                            needTransport: "No",
                            city: "",
                            notes: "",
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-mono font-bold hover:bg-blue-600 transition-colors cursor-pointer shadow-md"
                      >
                        Submit Another Inquiry ↺
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* STAGE 1: PROFILE & COURSE SELECTION */}
                      {formStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-xs font-mono font-bold text-zinc-800 mb-2 uppercase tracking-wider">
                              Select Target Undergraduate Degree *
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              <button
                                type="button"
                                onClick={() => setFormData({ ...formData, course: "BCA" })}
                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                  formData.course === "BCA"
                                    ? "bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-blue-500/50"
                                    : "bg-white/70 hover:bg-white border-zinc-200 text-zinc-800"
                                }`}
                              >
                                <div className="text-xs font-mono font-bold uppercase text-cyan-400">BCA</div>
                                <div className="text-sm font-bold mt-0.5">Bachelor of Computer Applications</div>
                                <div className={`text-[10px] mt-1 font-mono ${formData.course === "BCA" ? "text-cyan-300" : "text-zinc-500"}`}>
                                  Req: +2 with Math/Stats/Business Math OR 3-Yr Diploma
                                </div>
                              </button>

                              <button
                                type="button"
                                onClick={() => setFormData({ ...formData, course: "BBA" })}
                                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                  formData.course === "BBA"
                                    ? "bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-blue-500/50"
                                    : "bg-white/70 hover:bg-white border-zinc-200 text-zinc-800"
                                }`}
                              >
                                <div className="text-xs font-mono font-bold uppercase text-cyan-400">BBA</div>
                                <div className="text-sm font-bold mt-0.5">Bachelor of Business Administration</div>
                                <div className={`text-[10px] mt-1 font-mono ${formData.course === "BBA" ? "text-cyan-300" : "text-zinc-500"}`}>
                                  Req: +2 in any discipline (min 45% aggregate, 40% SC/ST)
                                </div>
                              </button>
                            </div>
                          </div>

                          {/* Full Name */}
                          <div>
                            <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                              Applicant Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="e.g., Ananya Mohapatra"
                              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${
                                errors.fullName ? "border-red-500 bg-red-50/30" : "border-zinc-200/90 bg-white/80"
                              }`}
                            />
                            {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                          </div>

                          {/* Email & Phone */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${
                                  errors.email ? "border-red-500 bg-red-50/30" : "border-zinc-200/90 bg-white/80"
                                }`}
                              />
                              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                WhatsApp / Mobile No *
                              </label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="e.g., 9876543210"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${
                                  errors.phone ? "border-red-500 bg-red-50/30" : "border-zinc-200/90 bg-white/80"
                                }`}
                              />
                              {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="w-full py-3.5 rounded-2xl bg-zinc-950 hover:bg-blue-600 text-white font-mono font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                            >
                              <span>Continue to Academic Eligibility (Step 2)</span>
                              <span>→</span>
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* STAGE 2: ACADEMIC QUALIFICATIONS & ELIGIBILITY */}
                      {formStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="space-y-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                Qualifying Board / Council *
                              </label>
                              <select
                                value={formData.board12th}
                                onChange={(e) => setFormData({ ...formData, board12th: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                              >
                                <option value="CHSE Odisha (+2)">C.H.S.E. Odisha (+2)</option>
                                <option value="CBSE Class 12">CBSE (Class XII)</option>
                                <option value="ICSE / ISC">ISC / ICSE (Class XII)</option>
                                <option value="SCTE&VT Polytechnic Diploma">3-Year Polytechnic Diploma (SCTE&amp;VT)</option>
                                <option value="Other State Board">Other Recognized State Board</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                Qualifying Stream *
                              </label>
                              <select
                                value={formData.stream12th}
                                onChange={(e) => setFormData({ ...formData, stream12th: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                              >
                                <option value="Science (+2 with Mathematics)">+2 Science (with Mathematics)</option>
                                <option value="Science (+2 with Statistics / PCMB)">+2 Science (with Statistics / PCMB)</option>
                                <option value="Commerce (+2 with Business Math)">+2 Commerce (with Business Mathematics)</option>
                                <option value="Commerce (+2 General)">+2 Commerce (General)</option>
                                <option value="Arts (+2 with Statistics/Math)">+2 Arts (with Math / Statistics)</option>
                                <option value="Arts (+2 General)">+2 Arts (General)</option>
                                <option value="3-Year Diploma in Engineering">3-Year Diploma in Engineering</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                12th Marks (%) / Status *
                              </label>
                              <input
                                type="text"
                                value={formData.score12th}
                                onChange={(e) => setFormData({ ...formData, score12th: e.target.value })}
                                placeholder="e.g., 78% or Result Awaited"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all ${
                                  errors.score12th ? "border-red-500 bg-red-50/30" : "border-zinc-200/90 bg-white/80"
                                }`}
                              />
                              {errors.score12th && <p className="text-red-600 text-xs mt-1">{errors.score12th}</p>}
                            </div>

                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                Reservation Category
                              </label>
                              <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                              >
                                <option value="General">General Category</option>
                                <option value="OBC / SEBC">OBC / SEBC (Eligible for PRERANA)</option>
                                <option value="SC / ST">SC / ST (Eligible for Fee Reimbursement)</option>
                                <option value="Physically Challenged">Physically Challenged (PH)</option>
                              </select>
                            </div>
                          </div>

                          {/* Utkal University Rule Validation Box */}
                          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-950 font-mono flex items-start gap-2">
                            <span className="text-base text-blue-600">ℹ️</span>
                            <div>
                              <strong>Utkal University Norms:</strong> Candidates with results awaited can register provisionally. Final seat confirmation occurs upon producing qualifying marksheet before the notified university deadline.
                            </div>
                          </div>

                          <div className="pt-2 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setFormStep(1)}
                              className="px-5 py-3 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono font-bold text-xs cursor-pointer transition-colors"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="flex-1 py-3.5 rounded-2xl bg-zinc-950 hover:bg-blue-600 text-white font-mono font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                            >
                              <span>Continue to Campus Logistics (Step 3)</span>
                              <span>→</span>
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* STAGE 3: CAMPUS LOGISTICS & FINAL SUBMISSION */}
                      {formStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="space-y-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                Residential Hostel Opted?
                              </label>
                              <select
                                value={formData.needHostel}
                                onChange={(e) => setFormData({ ...formData, needHostel: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                              >
                                <option value="No">No — Day Scholar</option>
                                <option value="Yes - Ruby Hostel (In-Campus)">Yes — Ruby Hostel Block</option>
                                <option value="Yes - Sapphire Hostel (In-Campus)">Yes — Sapphire Hostel Block</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                                City Bus Transport Opted?
                              </label>
                              <select
                                value={formData.needTransport}
                                onChange={(e) => setFormData({ ...formData, needTransport: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                              >
                                <option value="No">No — Own Arrangement</option>
                                <option value="Yes - Route 1 (Cuttack - Campus)">Yes — Route 1 (Cuttack – Infocity)</option>
                                <option value="Yes - Route 2 (Bhubaneswar South)">Yes — Route 2 (Old Town / Khandagiri)</option>
                                <option value="Yes - Route 3 (Bhubaneswar Central)">Yes — Route 3 (Master Canteen / Vani Vihar)</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                              Current City / Hometown District
                            </label>
                            <input
                              type="text"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              placeholder="e.g., Bhubaneswar, Cuttack, Rourkela, Balasore, Berhampur"
                              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                              Specific Queries (Scholarship, Provisional Booking, Documents)
                            </label>
                            <textarea
                              rows={2}
                              value={formData.notes}
                              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                              placeholder="Optional inquiries regarding scholarship eligibility or fee installment options..."
                              className="w-full px-4 py-2 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                            />
                          </div>

                          <div className="pt-2 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setFormStep(2)}
                              className="px-5 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono font-bold text-xs cursor-pointer transition-colors"
                            >
                              ← Back
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 py-3.5 rounded-2xl bg-zinc-950 hover:bg-blue-600 text-white font-mono font-bold text-xs tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                              {isSubmitting ? (
                                <>
                                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                                  <span>Logging Dossier into Admissions Roster...</span>
                                </>
                              ) : (
                                <>
                                  <span>Submit Official Admission Enquiry 2026</span>
                                  <span>→</span>
                                </>
                              )}
                            </button>
                          </div>
                        </motion.div>
                      )}

                      <div className="text-[11px] font-mono text-zinc-400 text-center pt-1">
                        🔒 Governed under Utkal University Admission Ordinances • Official Admissions Cell at Infocity Campus.
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* ===================================================================== */}
              {/* RIGHT COLUMN: APPLICATION KIT DOWNLOAD & ADMISSION PROCEDURE (5 COLS) */}
              {/* ===================================================================== */}
              <div className="lg:col-span-5 space-y-6 animate-fadeInUp">
                
                {/* OFFICIAL APPLICATION KIT DOWNLOAD CALLOUT */}
                <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 text-white shadow-xl border border-zinc-800 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">
                      OFFICIAL ADMISSION KIT
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Download Undergraduate Prospectus &amp; Form
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed font-light">
                    Download the official TAPS Admission Application Form 2026–27. Duly filled forms along with a Demand Draft of ₹200 drawn in favor of <strong>&ldquo;TACT&rdquo;</strong> payable at Bhubaneswar can be sent via Registered Post or submitted at the campus counter.
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-zinc-400">Application Fee: <strong>₹200</strong></span>
                    <button
                      type="button"
                      onClick={() => {
                        alert("Official TAPS Application Form & Prospectus (PDF) download initiated. Send completed form with ₹200 DD to TACT, Infocity, Bhubaneswar.");
                      }}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs transition-colors cursor-pointer"
                    >
                      Download Form (PDF) ↓
                    </button>
                  </div>
                </div>

                {/* 2 Authentic Campus Media Cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs group">
                    <Image
                      src="/images/drive_third/ClassRooms_Academic.JPG"
                      alt="Academic Lecture Amphitheatre"
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Academic Theatres
                      </span>
                      <span className="text-xs font-semibold">
                        BCA &amp; BBA Smart Lecture Halls
                      </span>
                    </div>
                  </div>

                  <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs group">
                    <Image
                      src="/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg"
                      alt="Corporate Placement Delegation"
                      fill
                      loading="lazy"
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Counseling Desk
                      </span>
                      <span className="text-xs font-semibold">
                        Personal Academic Guidance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step-by-Step Procedure Guide */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-white/70 via-white/40 to-white/15 border border-white/80 shadow-xs backdrop-blur-md">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 mb-4">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                        OFFICIAL PROCEDURE
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950">
                        Admission Procedure Timeline
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">4 Steps</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-blue-700">STEP 01</span>
                        <span>Application Submission</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        Submit online inquiry on this portal or collect application form from campus (₹200 fee).
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-blue-700">STEP 02</span>
                        <span>Document Verification</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        Submit self-attested copies of 10th &amp; 12th certificates for Utkal University eligibility check.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-blue-700">STEP 03</span>
                        <span>Counseling &amp; Career Mapping</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        1:1 faculty consultation regarding degree specializations, hostel amenities, and placements.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1">
                        <span className="font-bold text-emerald-700">STEP 04</span>
                        <span>Seat Allotment &amp; Provisional Booking</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-900 leading-snug">
                        Confirm admission or provisionally book seat with ₹20,000 (adjustable against 1st semester fees).
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* INTERACTIVE DOCUMENT CHECKLIST & ADMISSION DOSSIER COMPLIANCE */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full shadow-2xs">
                <span>Verification Checklist • Utkal University Norms</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Mandatory Documents for{" "}
                <span className="font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Admission Verification
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Candidates must submit self-attested copies of the following documents along with the filled application form. Original documents will be verified at the campus admission desk.
              </p>
            </div>

            {/* Checklist Matrix */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? "bg-white border-blue-400 shadow-sm ring-1 ring-blue-500/20"
                        : "bg-white/70 hover:bg-white border-zinc-200/90 shadow-2xs"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold transition-colors ${
                      isChecked ? "bg-blue-600 text-white" : "border border-zinc-300 text-transparent"
                    }`}>
                      ✓
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-zinc-950 leading-snug">{doc.name}</span>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded shrink-0">
                          {doc.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed font-normal">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center text-xs font-mono text-zinc-500">
              💡 Tip: Click items above to track your preparation before visiting the Infocity Admissions Counter.
            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* OFFICIAL APPROVED FEE STRUCTURE & REAL-TIME INVESTMENT CALCULATOR */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>Sanctioned Institutional Fee Structure 2026–27</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Transparent Fee Schedules &amp;{" "}
                <span className="font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Investment Calculator
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Directly matching the published guidelines on taps.ac.in for 4-Year BBA and 3-Year / 4-Year BCA courses under Utkal University.
              </p>

              {/* Course Switcher Tabs */}
              <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveFeeTab("bca")}
                  className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeFeeTab === "bca"
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  💻 BCA Fee Schedule
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFeeTab("bba")}
                  className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeFeeTab === "bba"
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  📈 BBA Fee Schedule
                </button>
              </div>
            </div>

            {/* Interactive Fee Breakdown Card (Dissolved Frosted Glass) */}
            <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border border-white/80 bg-gradient-to-br from-white/70 via-white/45 to-white/20 shadow-xl backdrop-blur-md">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200/80 gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    UTKAL UNIVERSITY AFFILIATED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
                    {activeFeeTab === "bca"
                      ? "Bachelor in Computer Application (BCA)"
                      : "Bachelor in Business Administration (BBA)"}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {activeFeeTab === "bca"
                      ? "Eligibility: +2 with Mathematics / Statistics / Business Mathematics, or 3-Year Diploma in Engineering (SCTE&VT)."
                      : "Eligibility: +2 examination from C.H.S.E. or equivalent in any discipline with minimum 45% marks (40% for SC/ST)."}
                  </p>
                </div>

                {/* Payment Mode Selector */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 border border-zinc-200 self-start sm:self-auto shrink-0 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setFeePaymentMode("semester")}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      feePaymentMode === "semester" ? "bg-white font-bold text-zinc-950 shadow-xs" : "text-zinc-600"
                    }`}
                  >
                    Per Semester
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeePaymentMode("annual")}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      feePaymentMode === "annual" ? "bg-white font-bold text-emerald-700 shadow-xs" : "text-zinc-600"
                    }`}
                  >
                    Annual (Save ₹5,000)
                  </button>
                </div>
              </div>

              {/* Fee Schedules Grid */}
              <div className="py-6 space-y-3.5">
                {feePaymentMode === "semester" ? (
                  <>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div>
                        <div className="text-sm font-bold text-zinc-900">1st Semester College Fee</div>
                        <div className="text-xs text-zinc-500">Compulsory charges for 1st semester (tuition, computer labs, library, development)</div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg sm:text-xl font-mono font-bold text-zinc-950">₹52,500.00</span>
                        <div className="text-[10px] font-mono text-zinc-400">At Admission</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div>
                        <div className="text-sm font-bold text-zinc-900">Subsequent Semesters (2nd to 8th)</div>
                        <div className="text-xs text-zinc-500">Payable at the beginning of each semester as per university academic calendar</div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg sm:text-xl font-mono font-bold text-zinc-950">₹52,500.00</span>
                        <div className="text-[10px] font-mono text-zinc-400">Per Semester</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 shadow-xs">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md mb-1">
                        <span>⭐ ANNUAL UPFRONT DISCOUNT</span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-zinc-950">Full Year Upfront Payment</div>
                      <div className="text-xs text-zinc-600">Covers two complete semesters in single payment. Saves ₹5,000 annually.</div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-800">₹1,00,000.00</span>
                      <div className="text-[10px] font-mono text-emerald-600 font-bold">Annual (Saves ₹5,000)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Optional Amenities Calculator Add-ons */}
              <div className="pt-4 border-t border-zinc-200/80 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">
                  Optional Campus Amenities Calculator:
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Hostel Addon */}
                  <div 
                    onClick={() => setIncludeHostel(!includeHostel)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      includeHostel ? "bg-blue-50 border-blue-400 text-blue-950 ring-1 ring-blue-500/20" : "bg-white/60 border-zinc-200 text-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={includeHostel} 
                        onChange={() => {}} 
                        className="rounded accent-blue-600 pointer-events-none" 
                      />
                      <div>
                        <div className="font-bold">In-Campus Residential Hostel</div>
                        <div className="text-[10px] text-zinc-500">{feePaymentMode === "annual" ? "₹85,000 / year" : "₹44,500 / sem"}</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-xs">{includeHostel ? "Added" : "+ Add"}</span>
                  </div>

                  {/* Bus Addon */}
                  <div 
                    onClick={() => setIncludeTransport(!includeTransport)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      includeTransport ? "bg-indigo-50 border-indigo-400 text-indigo-950 ring-1 ring-indigo-500/20" : "bg-white/60 border-zinc-200 text-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input 
                        type="checkbox" 
                        checked={includeTransport} 
                        onChange={() => {}} 
                        className="rounded accent-indigo-600 pointer-events-none" 
                      />
                      <div>
                        <div className="font-bold">City Transport Bus Service</div>
                        <div className="text-[10px] text-zinc-500">{feePaymentMode === "annual" ? "₹20,000 / year" : "₹10,000 / sem"}</div>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-xs">{includeTransport ? "Added" : "+ Add"}</span>
                  </div>
                </div>

                {/* Dynamic Calculated Investment Banner */}
                {(includeHostel || includeTransport) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-4 rounded-2xl bg-zinc-950 text-white flex items-center justify-between font-mono text-xs shadow-md"
                  >
                    <div>
                      <span className="text-zinc-400 text-[10px] uppercase block">TOTAL ESTIMATED {feePaymentMode.toUpperCase()} INVESTMENT</span>
                      <span className="text-sm font-bold text-cyan-300">College Fee + Selected Campus Amenities</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">₹{totalCalculatedFee.toLocaleString("en-IN")}.00</span>
                      <div className="text-[10px] text-zinc-400">{feePaymentMode === "annual" ? "Full Academic Year" : "Per Academic Semester"}</div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Provisional Seat Booking Callout Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
                <div className="flex items-start gap-2.5">
                  <span className="text-xl">⚡</span>
                  <div>
                    <strong>Provisional Seat Booking:</strong> If +2 board results are awaited, candidates can reserve their seat provisionally with <strong>₹20,000</strong>.
                    <div className="text-[11px] text-amber-800 mt-0.5">
                      Adjustable against the 1st semester college fee upon final admission confirmation. Application fee: ₹200 via DD payable to &ldquo;TACT&rdquo;.
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-black text-white font-mono font-bold text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  Reserve Provisional Seat →
                </button>
              </div>

            </div>

            {/* Official Motto Banner */}
            <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#070D21] via-[#09153A] to-[#070D21] text-white text-center border border-indigo-950/60 shadow-xl">
              <p className="italic text-xs sm:text-sm font-light text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                &ldquo;Destiny is not a matter of chance, It is a matter of choice; It is not a thing to be waited for, It is a thing to be achieved.&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold mt-2 block">
                — TAPS Institutional Motto • taps.ac.in
              </span>
            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* SCHOLARSHIPS & FINANCIAL ASSISTANCE SECTION */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Financial Assistance &amp; Merit Support
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Scholarships &amp; Fee Concessions
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                TAPS actively facilitates central, state, and institutional merit scholarships to ensure economic status never inhibits academic ambition.
              </p>
            </div>

            {/* 2 Photos for Financial & Merit Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs group">
                <Image
                  src="/images/drive_third/Library_Library.JPG"
                  alt="Central Research Library"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                    Academic Merit Grants
                  </span>
                  <div className="text-sm font-bold mt-0.5">
                    Central Research Library &amp; Quiet Study Pods
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs group">
                <Image
                  src="/images/drive_third/Sports_IMG20260205104055.jpg"
                  alt="Athletic Excellence Grants"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                    Sports &amp; Extracurricular Grants
                  </span>
                  <div className="text-sm font-bold mt-0.5">
                    Annual Athletic Track &amp; Sports Complex
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarships Matrix (Frosted Glass Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {scholarships.map((sch) => (
                <div
                  key={sch.name}
                  className="p-6 rounded-2xl border border-white/80 bg-gradient-to-br from-white/70 via-white/40 to-white/15 shadow-xs backdrop-blur-md flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-3 ${sch.badgeColor}`}>
                      {sch.category}
                    </span>
                    <h3 className="text-base font-bold text-zinc-950 mb-2 leading-snug">
                      {sch.name}
                    </h3>
                    <div className="text-xs text-zinc-600 space-y-2 mt-3 pt-3 border-t border-zinc-200/60 leading-relaxed">
                      <p>
                        <strong className="text-zinc-900">Eligibility:</strong> {sch.eligibility}
                      </p>
                      <p>
                        <strong className="text-zinc-900">Benefits:</strong> {sch.benefit}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200/60 text-[10px] font-mono text-zinc-500">
                    {sch.disbursement}
                  </div>
                </div>
              ))}
            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* CONTACT ADMISSION CELL: HIGH-TECH INVITATION BANNER */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg"
              alt="Trident Colonnades"
              fill
              loading="lazy"
              quality={90}
              className="object-cover object-center filter contrast-105 opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#050C22]/90 to-[#040816]" />
          </div>

          <section className="relative z-10 py-16 sm:py-20 max-w-5xl mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-cyan-300 mb-3 bg-cyan-950/70 border border-cyan-800 px-3.5 py-1 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Admissions Desk • Infocity Bhubaneswar</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-white mb-4 tracking-tight leading-snug">
              Have Questions Regarding Admissions 2026?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Speak directly with our senior admission counselors at the Infocity campus or connect instantly with our official admissions WhatsApp desk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/916371512551"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-2xl bg-white text-black font-mono font-bold text-xs hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
              >
                Connect on WhatsApp ↗
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-2xl bg-zinc-900 text-white border border-zinc-700 font-mono font-bold text-xs hover:border-cyan-400 transition-colors shadow-md"
              >
                Visit Campus Desk →
              </Link>
            </div>
          </section>
        </AnimatedBackground>
      </main>

      {/* MODAL & QUERY */}
      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

const scholarships = [
  {
    name: "Odisha State Medhabruti Scholarship",
    category: "GOVT. OF ODISHA SCHEME",
    eligibility: "Top rankers in CHSE / CBSE / ICSE +2 examinations belonging to Odisha domicile.",
    benefit: "Direct tuition assistance disbursed annually to candidate's verified bank account.",
    disbursement: "Disbursed through State Higher Education Portal",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    name: "Post-Matric PRERANA Scholarship",
    category: "SOCIAL WELFARE ASSISTANCE",
    eligibility: "Eligible SC, ST, OBC, and SEBC candidates as per Govt. of Odisha social welfare norms.",
    benefit: "Comprehensive maintenance allowance and 100% tuition course fee reimbursement.",
    disbursement: "Direct DBT Transfer via PRERANA Portal",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
  },
  {
    name: "TACT Trust Academic Merit Award",
    category: "INSTITUTIONAL ENDOWMENT",
    eligibility: "Meritorious scholars scoring 85%+ aggregate in qualifying Higher Secondary Board examinations.",
    benefit: "Institutional tuition fee concessions and laptop grants for top semester academic performers.",
    disbursement: "Granted by TACT Governing Body at Session Commencement",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
  },
];
