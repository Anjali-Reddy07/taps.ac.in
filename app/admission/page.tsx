"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

interface AdmissionStep {
  step: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  badge: string;
  icon: string;
}

interface Scholarship {
  name: string;
  category: string;
  eligibility: string;
  benefit: string;
  disbursement: string;
  badgeColor: string;
}

export default function AdmissionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFeeTab, setActiveFeeTab] = useState<"bca" | "bba">("bca");
  const [feePaymentMode, setFeePaymentMode] = useState<"semester" | "annual">("annual");
  const [expandedStep, setExpandedStep] = useState<number>(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "BCA",
    stream12th: "Science (+2)",
    score12th: "",
    city: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email address is required";
    }
    if (!formData.phone.trim() || !/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Valid 10-digit phone number is required";
    }
    if (!formData.score12th.trim()) {
      newErrors.score12th = "Percentage / Expected score is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const admissionSteps: AdmissionStep[] = [
    {
      step: "01",
      title: "Online Registration & Application",
      shortDesc: "Submit digital inquiry on this portal or obtain prospectus at Infocity campus.",
      detailedDesc: "Complete the online lead verification form or collect the official application kit directly from the TAPS Admissions Cell at Infocity with an application fee of ₹200. Receive immediate student registration ID.",
      badge: "STEP 1: INITIATION",
      icon: "📝",
    },
    {
      step: "02",
      title: "Academic Document Verification",
      shortDesc: "Verification of 10th & 12th board certificates under Utkal University ordinances.",
      detailedDesc: "Submit self-attested copies of 10th & 12th marksheets, passing certificates, transfer/conduct certificate, and 4 color passport photographs. Provisional verification offered if +2 board results are awaited.",
      badge: "STEP 2: ELIGIBILITY",
      icon: "📋",
    },
    {
      step: "03",
      title: "Personal Counseling & Career Mapping",
      shortDesc: "1:1 consultation with senior faculty advisors regarding degree tracks & placements.",
      detailedDesc: "Engage in an in-person or virtual counseling interview with academic department heads to discuss elective tracks (Cloud/AI for BCA, Marketing/Fintech for BBA), hostel logistics, and corporate recruitment pipelines.",
      badge: "STEP 3: MENTORSHIP",
      icon: "🎯",
    },
    {
      step: "04",
      title: "Seat Allotment & Provisional Booking",
      shortDesc: "First-cum-first-serve seat reservation with ₹20,000 adjustable against tuition fee.",
      detailedDesc: "Seats in BCA and BBA are limited and allotted strictly on merit and first-cum-first-serve basis. Secure your provisional admission with ₹20,000 (fully adjustable against 1st semester college fees).",
      badge: "STEP 4: CONFIRMATION",
      icon: "🎓",
    },
  ];

  const scholarships: Scholarship[] = [
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

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* LIVE ADMISSIONS BROADCAST MARQUEE */}
        {/* ========================================================================= */}
        <div className="bg-[#040817] border-b border-cyan-900/40 py-2.5 px-4 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <div className="shrink-0 flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SESSION 2026–27</span>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="animate-marquee whitespace-nowrap text-xs font-mono text-zinc-300 flex items-center gap-8">
                <span className="flex items-center gap-2">
                  <strong className="text-amber-400 font-bold">● ADMISSIONS ACTIVE:</strong>
                  Full-Time BCA &amp; BBA Degrees under Utkal University. First-cum-first-serve seat allotment.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-emerald-400 font-bold">✔ PROVISIONAL SEAT BOOKING:</strong>
                  Reserve seat with ₹20,000 (fully adjustable against 1st semester fees).
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-cyan-400 font-bold">🏛 INFOCITY CAMPUS DESK:</strong>
                  Counseling open Mon–Sat 9:30 AM – 5:30 PM. Helpline: +91 94370 12345.
                </span>
                <span className="text-cyan-600">•</span>
                <span className="flex items-center gap-2">
                  <strong className="text-purple-400 font-bold">🎓 SCHOLARSHIPS:</strong>
                  Medhabruti, PRERANA, &amp; TACT Trust Merit Awards available for 2026 batch.
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-emerald-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>COUNSELING: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO BANNER: ADVANCED ANIMATED COMMAND DECK */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Dual Directional Scrim */}
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
            {/* Deep Dual Scrim for Maximum Contrast & Readability */}
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
              
              {/* Left Column: Headline, Course Tags & Lead Info */}
              <div className="lg:col-span-8 space-y-6 animate-fadeInUp">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Admissions Open • Academic Year 2026–27</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-800/80 px-3 py-1 rounded-full backdrop-blur-xs">
                    Affiliated to Utkal University
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
                  Begin Your Professional Career with{" "}
                  <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    BCA &amp; BBA Honours
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                  Applications are open for full-time three-year and four-year honours undergraduate degrees in 
                  <strong className="text-white font-medium"> Computer Applications (BCA)</strong> and 
                  <strong className="text-white font-medium"> Business Administration (BBA)</strong> under Utkal University. 
                  Admissions operate strictly on first-cum-first-serve basis with corporate placement finishing school.
                </p>

                {/* Telemetry Chips */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-700/80 backdrop-blur-xs">
                    <span className="text-cyan-400">🏛</span>
                    <span>Infocity Campus Admissions Cell</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-700/80 backdrop-blur-xs">
                    <span className="text-emerald-400">📄</span>
                    <span>Application Fee: ₹200</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900/80 px-3.5 py-2 rounded-xl border border-zinc-700/80 backdrop-blur-xs">
                    <span className="text-amber-400">⚡</span>
                    <span>Provisional Seat Reservation: ₹20,000</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry Quick Statistics Cards */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 mb-1 flex items-center justify-between">
                    <span>DEGREE AFFILIATION</span>
                    <span className="text-emerald-400">✓ GOVT. RECOGNIZED</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                    Utkal University
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-light">
                    CBCS Curriculum with Industry Electives
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-md shadow-xl">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 mb-1 flex items-center justify-between">
                    <span>PLACEMENT CONVERSION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                    94% PPO Success
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 font-light">
                    Direct recruitment drives with TCS, Infosys, CGI
                  </div>
                </div>
              </div>

            </div>
          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* 2-COLUMN SECTION: HIGH-TECH ADMISSION FORM & INTERACTIVE STEPPER */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* ===================================================================== */}
              {/* LEFT COLUMN: INTERACTIVE LEAD REGISTRATION CONSOLE (7 COLS) */}
              {/* ===================================================================== */}
              <div className="lg:col-span-7 animate-fadeInUp">
                <div className="p-6 sm:p-8 rounded-3xl border border-white/80 backdrop-blur-md bg-gradient-to-br from-white/70 via-white/45 to-white/20 shadow-xl relative overflow-hidden">
                  
                  {/* Subtle Top Ambient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

                  {/* Header within Card */}
                  <div className="border-b border-zinc-200/80 pb-5 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-widest font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/70">
                        ONLINE APPLICATION DESK
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Counselors Active</span>
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                      Register Admission Enquiry 2026
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 font-normal leading-relaxed">
                      Complete your candidate profile. A senior academic advisor from the Infocity Admissions Cell will contact you within 24 hours.
                    </p>
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
                          <strong>Target Program:</strong> {formData.course} Honours
                        </div>
                        <div>
                          <strong>Contact Mobile:</strong> {formData.phone}
                        </div>
                        <div className="pt-2 border-t border-zinc-200 text-xs text-emerald-700 font-mono">
                          ✔ An official counseling dossier has been generated. Our admission team will connect via phone / WhatsApp.
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            course: "BCA",
                            stream12th: "Science (+2)",
                            score12th: "",
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
                      {/* Preferred Course Degree Selector Chips */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-800 mb-2 uppercase tracking-wider">
                          Select Preferred Degree Track *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, course: "BCA" })}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              formData.course === "BCA"
                                ? "bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-blue-500/50"
                                : "bg-white/70 hover:bg-white border-zinc-200 text-zinc-800"
                            }`}
                          >
                            <div className="text-xs font-mono font-bold uppercase text-cyan-400">BCA</div>
                            <div className="text-sm font-bold mt-0.5">Computer Applications</div>
                            <div className={`text-[10px] mt-1 font-mono ${formData.course === "BCA" ? "text-zinc-300" : "text-zinc-500"}`}>
                              Cloud, AI &amp; Software Dev
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, course: "BBA" })}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              formData.course === "BBA"
                                ? "bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-blue-500/50"
                                : "bg-white/70 hover:bg-white border-zinc-200 text-zinc-800"
                            }`}
                          >
                            <div className="text-xs font-mono font-bold uppercase text-cyan-400">BBA</div>
                            <div className="text-sm font-bold mt-0.5">Business Administration</div>
                            <div className={`text-[10px] mt-1 font-mono ${formData.course === "BBA" ? "text-zinc-300" : "text-zinc-500"}`}>
                              Fintech, Analytics &amp; HR
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

                      {/* 12th Stream & 12th Marks */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                            12th / +2 Stream *
                          </label>
                          <select
                            value={formData.stream12th}
                            onChange={(e) => setFormData({ ...formData, stream12th: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                          >
                            <option value="Science (+2)">+2 Science (PCM / PCMB)</option>
                            <option value="Commerce (+2)">+2 Commerce</option>
                            <option value="Arts (+2)">+2 Arts</option>
                            <option value="Diploma / Polytechnic">3-Year Polytechnic Diploma</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                            12th Marks (%) / Expected *
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
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                          Current City / District
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g., Bhubaneswar, Cuttack, Rourkela, Balasore"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                        />
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-800 mb-1.5 uppercase tracking-wider">
                          Specific Questions (Hostel, Transport, Scholarship)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Hostel requirements, scholarship queries, or timing preferences..."
                          className="w-full px-4 py-2 rounded-xl border border-zinc-200/90 bg-white/80 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                        />
                      </div>

                      {/* Submit Action */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 rounded-2xl bg-zinc-950 hover:bg-blue-600 text-white font-mono font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                              <span>Registering Application Lead...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Application Lead 2026</span>
                              <span>→</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-[11px] font-mono text-zinc-400 text-center pt-1">
                        🔒 Information transmitted directly to TAPS Admissions Cell under Utkal University regulations.
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* ===================================================================== */}
              {/* RIGHT COLUMN: STEP-BY-STEP PROCEDURE & CAMPUS MEDIA (5 COLS) */}
              {/* ===================================================================== */}
              <div className="lg:col-span-5 space-y-6 animate-fadeInUp">
                
                {/* Authentic Campus Media Cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs group">
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

                  <div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-xs group">
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

                {/* Interactive Step-by-Step Procedure Guide */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-white/70 via-white/40 to-white/15 border border-white/80 shadow-xs backdrop-blur-md">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 mb-4">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                        OFFICIAL ROADMAP
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950">
                        Admission Procedure Timeline
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">4 Steps</span>
                  </div>

                  <div className="space-y-3">
                    {admissionSteps.map((st, idx) => {
                      const isSelected = expandedStep === idx;
                      return (
                        <div
                          key={st.step}
                          onClick={() => setExpandedStep(idx)}
                          className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-zinc-950 text-white border-zinc-900 shadow-md ring-1 ring-blue-500/40"
                              : "bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-900 shadow-2xs"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                                isSelected ? "text-cyan-400" : "text-blue-600"
                              }`}
                            >
                              {st.badge}
                            </span>
                            <span className="text-sm">{st.icon}</span>
                          </div>

                          <div className="text-sm font-bold tracking-tight">
                            {st.title}
                          </div>

                          <div
                            className={`text-xs mt-1 leading-relaxed ${
                              isSelected ? "text-zinc-300" : "text-zinc-500"
                            }`}
                          >
                            {isSelected ? st.detailedDesc : st.shortDesc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* TRANSPARENT APPROVED FEE STRUCTURE (INTERACTIVE DUAL DEGREE COMPARATOR) */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>Approved Fee Structure 2026–27</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Transparent Institutional Fees &amp;{" "}
                <span className="font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Payment Schedules
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Officially sanctioned tuition, examination, and laboratory fees for students admitted in the academic year 2026–27 for Bachelor of Computer Applications (BCA) and Bachelor of Business Administration (BBA) under Utkal University.
              </p>

              {/* Course Switcher Pills */}
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
                  💻 BCA Fee Structure
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
                  📈 BBA Fee Structure
                </button>
              </div>
            </div>

            {/* Interactive Fee Breakdown Card (Dissolved Glass Aesthetic) */}
            <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border border-white/80 bg-gradient-to-br from-white/70 via-white/45 to-white/20 shadow-xl backdrop-blur-md">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-200/80 gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    UTKAL UNIVERSITY AFFILIATED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
                    {activeFeeTab === "bca"
                      ? "Bachelor of Computer Applications (BCA)"
                      : "Bachelor of Business Administration (BBA)"}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {activeFeeTab === "bca"
                      ? "Eligibility: +2 with Mathematics / Statistics / Business Math, or 3-Year Polytechnic Diploma (SCTE&VT)."
                      : "Eligibility: +2 from C.H.S.E. or equivalent in any discipline with minimum 45% aggregate (40% for SC/ST)."}
                  </p>
                </div>

                {/* Payment Option Mode Toggle */}
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

              {/* Fee Schedule Rows */}
              <div className="py-6 space-y-4">
                {feePaymentMode === "semester" ? (
                  <>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div>
                        <div className="text-sm font-bold text-zinc-900">1st Semester College &amp; Lab Fee</div>
                        <div className="text-xs text-zinc-500">Includes tuition, high-speed computer labs, and library dues</div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg sm:text-xl font-mono font-bold text-zinc-950">₹52,500.00</span>
                        <div className="text-[10px] font-mono text-zinc-400">At Admission</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs">
                      <div>
                        <div className="text-sm font-bold text-zinc-900">Subsequent Semesters (2nd to 6th / 8th)</div>
                        <div className="text-xs text-zinc-500">Payable at the commencement of each academic semester</div>
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
                        <span>⭐ BEST VALUE UPFRONT</span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-zinc-950">Full Academic Year Upfront Payment</div>
                      <div className="text-xs text-zinc-600">Combines two semesters in a single upfront payment. Saves ₹5,000 annually.</div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-800">₹1,00,000.00</span>
                      <div className="text-[10px] font-mono text-emerald-600 font-bold">Annual Fee (Saves ₹5,000)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Provisional Booking Notice Bar */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-900">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <strong>Provisional Seat Booking:</strong> In case +2 results are awaited, reserve seat with <strong>₹20,000</strong>.
                    <div className="text-[11px] text-amber-800">Fully adjustable against the 1st semester college fee upon final admission confirmation.</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-black text-white font-mono font-bold text-xs transition-colors shrink-0 cursor-pointer"
                >
                  Inquire Seat Availability →
                </button>
              </div>

            </div>

            {/* Optional Residential Hostel & Transport Amenity Charges */}
            <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/70 via-white/40 to-white/15 border border-white/80 shadow-xs backdrop-blur-md flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 text-xl shadow-2xs">
                  🏢
                </span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">CAMPUS LIVING</span>
                  <h4 className="text-base font-bold text-zinc-950 mt-0.5">
                    In-Campus Residential Hostel Fee
                  </h4>
                  <div className="text-sm font-mono font-bold text-blue-700 my-1">
                    ₹85,000 / year <span className="text-xs font-normal text-zinc-500">(or ₹44,500 / semester)</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    Includes furnished accommodation in Ruby/Sapphire hostels, hygienic dining mess, 24/7 Wi-Fi, and resident warden security.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/70 via-white/40 to-white/15 border border-white/80 shadow-xs backdrop-blur-md flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center shrink-0 text-xl shadow-2xs">
                  🚌
                </span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700">COMMUTE FLEET</span>
                  <h4 className="text-base font-bold text-zinc-950 mt-0.5">
                    City Transport Bus Service
                  </h4>
                  <div className="text-sm font-mono font-bold text-indigo-700 my-1">
                    ₹20,000 / year
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    Dedicated college fleet operating across 6 comprehensive routes throughout Bhubaneswar City for day scholars.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Motto Banner */}
            <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#070D21] via-[#09153A] to-[#070D21] text-white text-center border border-indigo-950/60 shadow-xl">
              <p className="italic text-xs sm:text-sm font-light text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                &ldquo;Destiny is not a matter of chance, It is a matter of choice; It is not a thing to be waited for, It is a thing to be achieved.&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold mt-2 block">
                — TAPS Institutional Motto • Infocity Campus
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
                TAPS actively facilitates state government, central social welfare, and institutional merit endowments so financial barriers never restrict academic ambition.
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

            {/* Scholarships Matrix (Partially Dissolved Frosted Glass Cards) */}
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

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
