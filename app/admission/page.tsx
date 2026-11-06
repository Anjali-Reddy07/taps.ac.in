"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import ShatterHeading from "@/components/ShatterHeading";

export default function AdmissionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    }, 800);
  };

  const steps = [
    {
      step: "01",
      title: "Application Submission",
      desc: "Fill the online enquiry form on this portal or collect the official application booklet from the TAPS Admission Cell at Infocity with application fee of ₹200.",
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Submit self-attested copies of 10th & 12th pass certificates, marksheets, conduct certificate, and 4 passport photographs for eligibility verification under Utkal University norms.",
    },
    {
      step: "03",
      title: "Counseling & Merit Evaluation",
      desc: "Attend an in-person or telephonic academic counseling round to discuss course specialization tracks, faculty mentorship, and career aspirations.",
    },
    {
      step: "04",
      title: "Seat Allotment & Provisional Booking",
      desc: "Admissions operate strictly on first-cum-first-serve basis. In case +2 results are awaited, candidates can provisionally reserve a seat with ₹20,000 (adjustable against 1st semester fees).",
    },
  ];

  const scholarships = [
    {
      name: "Odisha State Medhabruti Scholarship",
      eligibility: "Top rankers in CHSE / CBSE +2 examinations belonging to Odisha domicile.",
      benefit: "Direct tuition assistance disbursed annually by Govt. of Odisha Higher Education Department.",
    },
    {
      name: "Post-Matric PRERANA Scholarship",
      eligibility: "Eligible SC, ST, OBC, and SEBC candidates as per Govt. of Odisha social welfare criteria.",
      benefit: "Comprehensive maintenance allowance and course fee reimbursement.",
    },
    {
      name: "TACT Trust Academic Merit Award",
      eligibility: "Students scoring 85%+ aggregate in qualifying Higher Secondary Board exams.",
      benefit: "Institutional tuition fee waiver and dedicated laptop grants for top semester performers.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg"
              alt="Trident Campus Admission Cell"
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
                Admissions Session 2026-27 Open
              </div>
              <ShatterHeading
                text="Begin Your Professional Journey at TAPS"
                as="h1"
                className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6"
              />
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Applications are invited for full-time three-year undergraduate degrees in 
                <strong className="text-white font-medium"> BCA (Bachelor of Computer Applications)</strong> and 
                <strong className="text-white font-medium"> BBA (Bachelor of Business Administration)</strong> affiliated to Utkal University. 
                Seats are allocated on first-cum-first-serve basis.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulseGlow" />
                  <span>Admissions Cell • Infocity Campus</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800">
                  <span>Application Fee: ₹200</span>
                </div>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* 2-COLUMN LAYOUT: ADMISSION ENQUIRY FORM & TIMELINE */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Interactive Admission Enquiry Form */}
              <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-2xs animate-fadeInUp">
                <div className="border-b border-zinc-100 pb-6 mb-8">
                  <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">
                    Online Lead Registration
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                    Submit Admission Enquiry 2026
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-normal">
                    Complete the form below. Our institutional admission counseling desk will review your details and contact you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto text-xl">
                      ✓
                    </div>
                    <h3 className="text-xl font-medium text-zinc-950">
                      Application Enquiry Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-zinc-950">{formData.fullName}</strong>. Your enquiry for{" "}
                      <strong className="text-zinc-950">{formData.course}</strong> has been logged in our admission roster. 
                      A senior counselor will reach out via WhatsApp / phone at{" "}
                      <strong className="text-zinc-950">{formData.phone}</strong>.
                    </p>
                    <button
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
                      className="px-6 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                        Applicant Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g., Ananya Mohapatra"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black ${
                          errors.fullName ? "border-red-500 bg-red-50/20" : "border-zinc-200 bg-zinc-50"
                        }`}
                      />
                      {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black ${
                            errors.email ? "border-red-500 bg-red-50/20" : "border-zinc-200 bg-zinc-50"
                          }`}
                        />
                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          WhatsApp / Mobile No *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g., 9876543210"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black ${
                            errors.phone ? "border-red-500 bg-red-50/20" : "border-zinc-200 bg-zinc-50"
                          }`}
                        />
                        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Course & 12th Stream */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          Preferred Degree Track *
                        </label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                        >
                          <option value="BCA">BCA — Bachelor of Computer Applications</option>
                          <option value="BBA">BBA — Bachelor of Business Administration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          12th / +2 Stream *
                        </label>
                        <select
                          value={formData.stream12th}
                          onChange={(e) => setFormData({ ...formData, stream12th: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                        >
                          <option value="Science (+2)">+2 Science (PCM / PCMB)</option>
                          <option value="Commerce (+2)">+2 Commerce</option>
                          <option value="Arts (+2)">+2 Arts</option>
                          <option value="Diploma / Polytechnic">3-Year Polytechnic Diploma</option>
                        </select>
                      </div>
                    </div>

                    {/* 12th Score & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          12th Marks (%) / Expected *
                        </label>
                        <input
                          type="text"
                          value={formData.score12th}
                          onChange={(e) => setFormData({ ...formData, score12th: e.target.value })}
                          placeholder="e.g., 78% or Result Awaited"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black ${
                            errors.score12th ? "border-red-500 bg-red-50/20" : "border-zinc-200 bg-zinc-50"
                          }`}
                        />
                        {errors.score12th && <p className="text-red-600 text-xs mt-1">{errors.score12th}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          Current City / District
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g., Bhubaneswar, Cuttack, Rourkela"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                        >
                        </input>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                        Questions / Specific Inquiries (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Hostel requirements, scholarship queries, or timing preferences..."
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Registering Lead..." : "Submit Application Enquiry →"}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Step-by-Step Procedure with Campus Media */}
              <div className="lg:col-span-5 space-y-8 animate-fadeInUp">
                {/* 2 Authentic Campus Media Cards for Admission Candidates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group">
                    <Image
                      src="/images/drive_third/ClassRooms_Academic.JPG"
                      alt="Academic Lecture Amphitheatre"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Academic Theatres
                      </span>
                      <span className="text-xs font-semibold">
                        BCA &amp; BBA Smart Lecture Halls
                      </span>
                    </div>
                  </div>

                  <div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group">
                    <Image
                      src="/images/drive_third/Placement_DSC_2425.JPG"
                      alt="Academic Counseling & Mentorship"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
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

                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">
                    Step-by-Step Guide
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                    Admission Procedure Timeline
                  </h2>
                </div>

                <div className="space-y-6">
                  {steps.map((st, idx) => (
                    <motion.div
                      key={st.step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-indigo-400 hover:shadow-lg transition-all duration-300 relative group card-sheen"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/60">
                          STEP {st.step}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                      </div>
                      <h3 className="text-base font-bold text-zinc-950 mb-2 group-hover:text-blue-700 transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {st.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </section>
        </AnimatedBackground>

        {/* OFFICIAL FEE STRUCTURE (2026-27): DIRECT FROM TAPS.AC.IN */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
                Official Fee Structure 2026-27
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Transparent &amp; Approved Institutional Fees
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Approved fee structure for students admitted in the academic year 2026-27 for 4-Year BBA and 3-Year / 4-Year BCA courses under Utkal University.
              </p>
            </div>

            {/* Fee Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* BBA Fee Card */}
              <div className="p-8 rounded-3xl bg-white border border-indigo-100 shadow-md hover:border-blue-400 transition-all card-sheen">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    4-YEAR COURSE • 8 SEMESTERS
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Utkal University</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">
                  Bachelor of Business Administration (BBA)
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Eligibility: +2 examination from C.H.S.E. or equivalent in any discipline with minimum 45% marks (40% for SC/ST).
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700 font-medium">B.B.A. 1st Semester College Fee</span>
                    <span className="font-bold text-slate-950 font-mono">₹52,500.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700 font-medium">Subsequent Semesters (2nd to 8th)</span>
                    <span className="font-bold text-slate-950 font-mono">₹52,500.00 / sem</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-dashed border-slate-200">
                    <span className="text-emerald-700 font-semibold">Full Year Upfront Payment</span>
                    <span className="font-bold text-emerald-700 font-mono">₹1,00,000 / year</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  <p>• Provisional seat reservation: ₹20,000 (Adjustable against 1st semester fee).</p>
                  <p>• Application fee: ₹200 (in person or via DD payable to &ldquo;TACT&rdquo; at Bhubaneswar).</p>
                </div>
              </div>

              {/* BCA Fee Card */}
              <div className="p-8 rounded-3xl bg-white border border-indigo-100 shadow-md hover:border-blue-400 transition-all card-sheen">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    3-YEAR / 4-YEAR COURSE
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Utkal University</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Eligibility: +2 with Mathematics / Statistics / Business Mathematics, or 3-Year Diploma in Engineering from SCTE&amp;VT Orissa.
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700 font-medium">B.C.A. 1st Semester College Fee</span>
                    <span className="font-bold text-slate-950 font-mono">₹52,500.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-700 font-medium">Subsequent Semesters (2nd to 6th/8th)</span>
                    <span className="font-bold text-slate-950 font-mono">₹52,500.00 / sem</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-2 border-t border-dashed border-slate-200">
                    <span className="text-emerald-700 font-semibold">Full Year Upfront Payment</span>
                    <span className="font-bold text-emerald-700 font-mono">₹1,00,000 / year</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  <p>• Provisional seat reservation: ₹20,000 (Adjustable against 1st semester fee).</p>
                  <p>• Application fee: ₹200 (in person or via DD payable to &ldquo;TACT&rdquo; at Bhubaneswar).</p>
                </div>
              </div>

            </div>

            {/* Optional Residential & Transport Amenities Charges */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold">
                  🏢
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-950 mb-1">
                    In-Campus Residential Hostel Fee
                  </h4>
                  <p className="text-sm font-mono font-bold text-blue-700 mb-1">
                    ₹85,000 / year (or ₹44,500 per semester)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hostel facility is opted for a complete academic session. Includes spacious furnished accommodation, vegetarian and non-vegetarian mess, 24/7 Wi-Fi, and medical dispensary.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
                  🚌
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-950 mb-1">
                    City Transport Bus Service
                  </h4>
                  <p className="text-sm font-mono font-bold text-indigo-700 mb-1">
                    ₹20,000 / year
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Safe, dedicated college bus service operating across 6 comprehensive routes throughout Bhubaneswar City for day scholars.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Motto Banner */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-[#070D21] text-white text-center">
              <p className="italic text-xs sm:text-sm font-light text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                &ldquo;Destiny is not a matter of chance, It is a matter of choice; It is not a thing to be waited for, It is a thing to be achieved. Let us repeat endlessly to our self, &lsquo;We will achieve extraordinary success in life. It all depends on us.&rsquo;&rdquo;
              </p>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold mt-2 block">
                — TAPS Institutional Motto • taps.ac.in
              </span>
            </div>

          </section>
        </AnimatedBackground>

        {/* SCHOLARSHIPS SECTION: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Financial Assistance
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Scholarships &amp; Fee Concessions
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                TAPS actively facilitates central, state, and institutional merit scholarships to ensure economic status never inhibits academic ambition.
              </p>
            </div>

            {/* 2 Photos for Financial & Merit Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group">
                <Image
                  src="/images/drive_third/Library_Library.JPG"
                  alt="Central Research Library"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                    Academic Merit Grants
                  </span>
                  <div className="text-sm font-bold mt-0.5">
                    Central Research Library &amp; Quiet Study Pods
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group">
                <Image
                  src="/images/drive_third/Sports_IMG20260205104055.jpg"
                  alt="Athletic Excellence Grants"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scholarships.map((sch) => (
                <div
                  key={sch.name}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-semibold text-zinc-950 mb-3">
                      {sch.name}
                    </h3>
                    <div className="text-xs text-zinc-600 space-y-2">
                      <p>
                        <strong className="text-zinc-800">Eligibility:</strong> {sch.eligibility}
                      </p>
                      <p>
                        <strong className="text-zinc-800">Assistance:</strong> {sch.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>
        </AnimatedBackground>

        {/* CONTACT ADMISSION CELL: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg"
              alt="Trident Colonnades"
              fill
              className="object-cover object-center filter contrast-105 opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-[#070D21]/90 to-[#070D21]" />
          </div>

          <section className="relative z-10 py-16 sm:py-20 max-w-5xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl sm:text-4xl font-light text-white mb-4 tracking-tight">
              Questions Regarding Admission 2026?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Speak directly with our senior admission counselors at the Infocity campus or connect via our official WhatsApp inquiry desk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/916371512551"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-md"
              >
                Connect on WhatsApp ↗
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-lg bg-zinc-900 text-white border border-zinc-700 font-semibold text-sm hover:border-zinc-400 transition-colors"
              >
                Visit Admission Desk
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

