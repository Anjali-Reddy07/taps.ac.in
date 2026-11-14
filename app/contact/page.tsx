"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

// Hyperrealistic 3D Gyro-Tilt Phone Container with Ambient Float
function HyperrealisticPhoneContainer({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotate({
      x: (0.5 - y) * 9,
      y: (x - 0.5) * 9,
    });
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
        setGlarePos({ x: 50, y: 50 });
      }}
      animate={{
        y: isHovered ? -4 : [-5, 5, -5],
        rotateX: isHovered ? rotate.x : 0,
        rotateY: isHovered ? rotate.y : 0,
        transformPerspective: 1400,
      }}
      transition={{
        y: isHovered ? { duration: 0.2 } : { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotateX: { type: "spring", stiffness: 340, damping: 28 },
        rotateY: { type: "spring", stiffness: 340, damping: 28 },
      }}
      className="relative will-change-transform select-none"
    >
      {children}

      {/* Dynamic Cursor-Following Specular Glare on Glass */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[56px] opacity-35 transition-opacity duration-300 z-40"
          style={{
            background: `radial-gradient(450px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.45), transparent 45%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "BCA (4 Yrs NEP)",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("TAPS-2026-4821");
  const [currentTime, setCurrentTime] = useState("9:41");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Please enter your name, email, and contact number.");
      return;
    }
    setSubmitting(true);
    setTicketId(`TAPS-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setTimeout(() => {
      setSubmitting(false);
      setIsSent(true);
    }, 850);
  };

  const quickSubjects = [
    "BCA (4 Yrs NEP)",
    "BBA (4 Yrs NEP)",
    "Campus Tour",
    "Hostel Booking",
    "Fees & Grants",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Rich Background Image with Adjusted Scrim for Visibility */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/drive_new/1721020760290.jpg"
              alt="Trident Academy of Professional Studies Campus Building"
              fill
              priority
              quality={92}
              className="object-cover object-center filter contrast-105 opacity-90 scale-100"
              sizes="100vw"
            />
            {/* Smooth adjusted one-sided scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/85 via-[#070D21]/50 via-50% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/40 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900/80 border border-zinc-700/80 px-3.5 py-1 rounded-full shadow-2xs backdrop-blur-xs">
                Reach Our Infocity Campus
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                Connect with Trident Academy of Professional Studies
              </h1>
              <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                Located in the heart of Bhubaneswar&apos;s premier IT corridor at Infocity, Patia. 
                Our admissions officers and academic advisors are available for in-person campus visits, phone consultations, and inquiries.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black font-sans font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-zinc-200 transition-colors"
                >
                  <span>Chat on WhatsApp ↗</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white font-sans font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <span>Online Admission Inquiry ↗</span>
                </button>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* ========================================================================= */}
        {/* 2-COLUMN CONTACT CHANNELS & HYPERREALISTIC LIQUID GLASS SMARTPHONE */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Subtle Ambient Radial Lighting Blobs */}
          <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-blue-400/25 via-indigo-300/15 to-transparent blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-purple-400/20 via-cyan-200/15 to-transparent blur-[120px] pointer-events-none" />

          <section className="py-14 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Direct Institutional Coordinates */}
              <div className="lg:col-span-5 space-y-6 animate-fadeInUp">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-extrabold text-blue-700 mb-2.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    INFOCITY IT CORRIDOR • BHUBANESWAR
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                    Campus Coordinates &amp; Admissions Desk
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 leading-relaxed font-normal">
                    Direct institutional channels for academic counseling, seat reservations under the NEP-2020 syllabus, and on-campus computing facility tours.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-zinc-700">
                  
                  {/* Card 1: Campus Address */}
                  <div className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        📍
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-bold">
                          Official Campus Location
                        </div>
                        <p className="font-bold text-zinc-950 text-sm leading-snug">
                          Trident Academy of Professional Studies (TAPS)
                        </p>
                        <p className="text-zinc-600 text-xs leading-relaxed">
                          F-2, Chandaka Industrial Estate, In front of Infocity,<br />
                          Bhubaneswar, Odisha — 751024, India
                        </p>
                        <div className="pt-0.5 flex items-center gap-2">
                          <span className="text-[10px] font-mono text-zinc-500 font-semibold">Landmark: Opposite Infocity Main Gate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Hotlines */}
                  <div className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        📞
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-700 font-bold">
                          Direct Admission Hotlines
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href="tel:+919861191195"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-mono font-bold text-xs transition-colors"
                          >
                            <span>+91 98611 91195</span>
                          </a>
                          <a
                            href="tel:+917008443255"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-mono font-bold text-xs transition-colors"
                          >
                            <span>+91 70084 43255</span>
                          </a>
                        </div>
                        <p className="text-zinc-500 text-[11px] font-medium">
                          Chief Counseling Desk: Mon to Sat (9:00 AM – 5:30 PM)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Email Concierge */}
                  <div className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        ✉️
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-purple-700 font-bold">
                          Institutional Email
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href="mailto:admissions@taps.ac.in"
                            className="font-bold text-zinc-950 hover:text-purple-700 font-mono text-xs transition-colors"
                          >
                            admissions@taps.ac.in
                          </a>
                          <span className="text-zinc-300">•</span>
                          <a
                            href="mailto:info@taps.ac.in"
                            className="text-zinc-600 hover:text-zinc-950 font-mono text-xs transition-colors"
                          >
                            info@taps.ac.in
                          </a>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Average Response Window: Under 2 Hours</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Working Hours */}
                  <div className="group p-4 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        ⏰
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold">
                          Visiting Hours &amp; Counseling
                        </div>
                        <p className="text-zinc-950 font-bold text-xs sm:text-sm">
                          Monday to Saturday: 9:00 AM – 5:30 PM
                        </p>
                        <p className="text-zinc-500 text-[11px] leading-tight">
                          Admissions Cell remains open on Sundays during peak academic admission cycles.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: HYPERREALISTIC LIQUID GLASS SMARTPHONE */}
              <div className="lg:col-span-7 pt-4 lg:pt-0">
                <HyperrealisticPhoneContainer>
                  
                  {/* Floating Holographic Satellite 1 (Top Right) */}
                  <motion.div
                    animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden sm:flex absolute -top-5 -right-3 z-40 items-center gap-2 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-cyan-500/90 backdrop-blur-xl text-white px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold shadow-2xl shadow-blue-500/35 border border-white/30"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                    <span>Admissions 2026 Open</span>
                  </motion.div>

                  {/* Floating Holographic Satellite 2 (Bottom Left) */}
                  <motion.div
                    animate={{ y: [5, -5, 5], rotate: [1, -1, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="hidden sm:flex absolute -bottom-5 -left-4 z-40 items-center gap-2 bg-zinc-950/85 backdrop-blur-xl text-cyan-300 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold shadow-2xl border border-cyan-400/35"
                  >
                    <span className="text-emerald-400">⚡</span>
                    <span>Direct Counseling Cell</span>
                  </motion.div>

                  {/* ============================================================== */}
                  {/* PHOTOREALISTIC TITANIUM SMARTPHONE CHASSIS */}
                  {/* ============================================================== */}
                  <div className="max-w-[410px] sm:max-w-[428px] mx-auto relative">
                    
                    {/* Realistic Ground Diffusion Shadow */}
                    <div className="absolute -bottom-8 inset-x-6 h-12 bg-blue-950/40 rounded-full blur-2xl -z-10" />

                    {/* Hardware Buttons on Left Rail */}
                    <div className="absolute -left-[3px] top-[90px] w-[3.5px] h-6 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 rounded-l-xs shadow-xs z-10" />
                    <div className="absolute -left-[3px] top-[130px] w-[3.5px] h-11 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 rounded-l-xs shadow-xs z-10" />
                    <div className="absolute -left-[3px] top-[185px] w-[3.5px] h-11 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 rounded-l-xs shadow-xs z-10" />

                    {/* Hardware Buttons on Right Rail */}
                    <div className="absolute -right-[3px] top-[138px] w-[3.5px] h-14 bg-gradient-to-l from-zinc-500 via-zinc-400 to-zinc-600 rounded-r-xs shadow-xs z-10" />
                    <div className="absolute -right-[3px] top-[220px] w-[3.5px] h-10 bg-gradient-to-l from-zinc-600 via-zinc-400 to-zinc-700 rounded-r-xs shadow-xs z-10" />

                    {/* Precision Antenna Band Cuts */}
                    <div className="absolute left-[32px] -top-[2px] w-[3px] h-[3px] bg-zinc-600 z-10" />
                    <div className="absolute right-[32px] -top-[2px] w-[3px] h-[3px] bg-zinc-600 z-10" />
                    <div className="absolute left-[32px] -bottom-[2px] w-[3px] h-[3px] bg-zinc-600 z-10" />
                    <div className="absolute right-[32px] -bottom-[2px] w-[3px] h-[3px] bg-zinc-600 z-10" />

                    {/* Outer Brushed Titanium Bezel Frame */}
                    <div className="rounded-[52px] sm:rounded-[56px] p-[9px] sm:p-[10px] bg-gradient-to-tr from-zinc-700 via-zinc-500 via-40% to-zinc-800 shadow-[0_30px_90px_-15px_rgba(10,25,80,0.5),0_15px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_3px_rgba(255,255,255,0.65),inset_0_-1px_3px_rgba(0,0,0,0.8)] border-[1.5px] border-zinc-500/80 relative">
                      
                      {/* Inner Chamfered Dark Rim */}
                      <div className="rounded-[44px] sm:rounded-[48px] p-[2px] bg-gradient-to-b from-zinc-950 via-black to-zinc-900 shadow-inner">
                        
                        {/* Precision Earpiece Speaker Slit */}
                        <div className="w-14 h-[2.5px] bg-zinc-950 rounded-full mx-auto mb-[2px] border-t border-zinc-800 shadow-xs" />

                        {/* ============================================================== */}
                        {/* LIQUID GLASS OLED DISPLAY SURFACE (REFRACTIVE & TRANSLUCENT) */}
                        {/* ============================================================== */}
                        <div className="rounded-[40px] sm:rounded-[44px] overflow-hidden relative border border-white/25 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.6),inset_0_-1.5px_2px_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.5)] p-4 sm:p-4.5 flex flex-col justify-between min-h-[610px] bg-[#070D1E]/80 backdrop-blur-3xl text-white">
                          
                          {/* Animated Liquid Chroma Orbs underneath the glass */}
                          <motion.div
                            animate={{
                              x: [0, 35, -25, 0],
                              y: [0, -40, 20, 0],
                              scale: [1, 1.2, 0.9, 1],
                            }}
                            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/40 via-cyan-400/30 to-transparent blur-3xl pointer-events-none"
                          />
                          <motion.div
                            animate={{
                              x: [0, -30, 20, 0],
                              y: [0, 35, -25, 0],
                              scale: [1, 0.9, 1.15, 1],
                            }}
                            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-bl from-purple-500/35 via-indigo-500/30 to-pink-500/20 blur-3xl pointer-events-none"
                          />
                          <motion.div
                            animate={{
                              opacity: [0.35, 0.65, 0.35],
                              scale: [0.95, 1.08, 0.95],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none"
                          />

                          {/* Continuous Sweeping Angled Holographic Sheen Ribbon across Glass */}
                          <motion.div
                            animate={{
                              x: ["-120%", "260%"],
                            }}
                            transition={{
                              duration: 5.5,
                              repeat: Infinity,
                              repeatDelay: 3.5,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute -inset-y-24 -left-40 w-36 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -rotate-25 z-30"
                          />

                          {/* 1. TOP STATUS BAR & DYNAMIC ISLAND WITH EQUALIZER ANIMATION */}
                          <div className="relative z-30 mb-3">
                            
                            {/* Animated Dynamic Island Pill */}
                            <motion.div 
                              animate={{
                                width: isTyping ? 142 : 124,
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              className="h-[29px] bg-black/90 backdrop-blur-xl rounded-full mx-auto flex items-center justify-between px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.35)] ring-1 ring-white/10 relative"
                            >
                              {/* TrueDepth Camera Aperture Lens */}
                              <div className="w-3 h-3 rounded-full bg-[#080B18] ring-1 ring-zinc-700/80 flex items-center justify-center relative overflow-hidden">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
                                <span className="w-0.5 h-0.5 rounded-full bg-cyan-300 absolute top-0.5 right-0.5 opacity-90" />
                              </div>
                              
                              {/* Animated Wave / Status Activity */}
                              <div className="flex items-center gap-1.5">
                                {/* Live Equalizer Bars */}
                                <div className="flex items-end gap-[1.5px] h-2.5">
                                  <motion.span 
                                    animate={{ height: ["3px", "9px", "4px"] }} 
                                    transition={{ duration: 0.8, repeat: Infinity }} 
                                    className="w-[2px] bg-emerald-400 rounded-full" 
                                  />
                                  <motion.span 
                                    animate={{ height: ["6px", "3px", "10px"] }} 
                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} 
                                    className="w-[2px] bg-emerald-400 rounded-full" 
                                  />
                                  <motion.span 
                                    animate={{ height: ["4px", "10px", "5px"] }} 
                                    transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }} 
                                    className="w-[2px] bg-emerald-400 rounded-full" 
                                  />
                                </div>
                                <span className="text-[9px] font-mono font-bold tracking-tight text-white/95">
                                  {submitting ? "DISPATCH" : isTyping ? "TYPING..." : "TAPS LIVE"}
                                </span>
                              </div>
                            </motion.div>

                            {/* True-to-Life iOS Status Bar */}
                            <div className="flex items-center justify-between text-[11px] font-sans font-semibold text-zinc-200 px-3 mt-1.5">
                              <span className="tracking-tight font-medium">{currentTime}</span>
                              <div className="flex items-center gap-2">
                                
                                {/* iOS 4-Bar Signal Strength */}
                                <div className="flex items-end gap-[1.5px] h-2.5">
                                  <span className="w-[2.5px] h-[3px] bg-white rounded-xs" />
                                  <span className="w-[2.5px] h-[5px] bg-white rounded-xs" />
                                  <span className="w-[2.5px] h-[7.5px] bg-white rounded-xs" />
                                  <span className="w-[2.5px] h-[10px] bg-white rounded-xs" />
                                </div>

                                <span className="text-[9px] font-bold tracking-wider font-mono">5G</span>

                                {/* iOS WiFi Wave Icon */}
                                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                                  <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.67 0 7 1.48 9.44 3.89L12 18.28 2.56 11.39C5 8.98 8.33 7.5 12 7.5z"/>
                                </svg>

                                {/* iOS Battery Icon with Level */}
                                <div className="flex items-center gap-[1px]">
                                  <div className="w-[20px] h-[10px] rounded-[3px] border border-white/80 p-[1.5px] flex items-center">
                                    <div className="w-full h-full bg-emerald-400 rounded-[1.5px]" />
                                  </div>
                                  <div className="w-[1.5px] h-[3.5px] bg-white/70 rounded-r-xs" />
                                </div>

                              </div>
                            </div>
                          </div>

                          {/* 2. FROSTED GLASS IN-APP HEADER (VISIONOS STYLE) */}
                          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/15 relative z-10 px-1 bg-white/[0.03] backdrop-blur-md rounded-2xl p-2 shadow-xs">
                            <div className="flex items-center gap-2.5">
                              {/* TAPS Verified Institutional Crest */}
                              <div className="relative">
                                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-md">
                                  <div className="w-full h-full bg-[#070D21]/90 backdrop-blur-sm rounded-[14px] flex items-center justify-center font-bold text-white text-[10px] tracking-tight">
                                    TAPS
                                  </div>
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#070D21] flex items-center justify-center text-[7px] text-white font-bold">
                                  ✓
                                </span>
                              </div>
                              <div>
                                <div className="text-xs sm:text-[13px] font-bold text-white flex items-center gap-1.5 leading-snug">
                                  <span>Admissions Desk</span>
                                  <span className="text-[9px] text-cyan-300 font-mono">● Online</span>
                                </div>
                                <div className="text-[9px] text-zinc-300 font-mono">
                                  Infocity Official Counseling Desk
                                </div>
                              </div>
                            </div>

                            {/* Call & WhatsApp Quick Shortcuts */}
                            <div className="flex items-center gap-1.5 text-zinc-300">
                              <a
                                href="tel:+919861191195"
                                title="Call Desk"
                                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-[11px] transition-colors cursor-pointer border border-white/15"
                              >
                                📞
                              </a>
                              <a
                                href="https://wa.me/916371512551"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                                className="w-7 h-7 rounded-full bg-emerald-600/35 hover:bg-emerald-600/60 text-emerald-300 flex items-center justify-center text-[11px] transition-colors cursor-pointer border border-emerald-400/25"
                              >
                                💬
                              </a>
                            </div>
                          </div>

                          {/* 3. INTERACTIVE CONVERSATION & FROSTED GLASS FORM */}
                          <div className="flex-1 relative z-10">
                            <AnimatePresence mode="wait">
                              {isSent ? (
                                /* SUCCESS DELIVERED CHAT STATE */
                                <motion.div
                                  key="sent-view"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  className="space-y-3 py-1"
                                >
                                  {/* Outgoing Message Bubble (iMessage Blue) */}
                                  <div className="flex justify-end">
                                    <div className="max-w-[85%] bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-2xl rounded-tr-xs shadow-md text-xs space-y-1 border border-white/20">
                                      <div className="font-semibold text-white/95 text-[11px]">
                                        Inquiry: {form.subject}
                                      </div>
                                      <p className="text-blue-100 text-[11px] leading-relaxed">
                                        {form.message || "Requesting admission prospectus, fee breakdown, and seat reservation details."}
                                      </p>
                                      <div className="flex items-center justify-end gap-1 text-[9px] text-blue-200 font-mono pt-0.5">
                                        <span>Just now</span>
                                        <span>✓✓ Delivered</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Incoming Counselor Bubble */}
                                  <div className="flex justify-start">
                                    <div className="max-w-[88%] bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white p-3.5 rounded-2xl rounded-tl-xs shadow-lg text-xs space-y-2">
                                      <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px]">
                                        <span>🎓 TAPS Counselor Bot</span>
                                        <span className="text-[9px] font-mono text-zinc-300">• Verified</span>
                                      </div>
                                      <p className="text-zinc-200 text-xs leading-relaxed">
                                        Thank you, <strong className="text-white">{form.name}</strong>! 🎉 Your inquiry is logged under ticket <span className="font-mono text-cyan-300 font-bold">{ticketId}</span>.
                                      </p>
                                      <p className="text-zinc-300 text-[11px] leading-relaxed">
                                        A senior counselor will call your number <span className="font-mono text-cyan-300">{form.phone}</span> within 15 minutes.
                                      </p>
                                      <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                                        <a
                                          href="tel:+919861191195"
                                          className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-[11px] text-center shadow-md shadow-cyan-500/25"
                                        >
                                          📞 Speak with Counselor Now
                                        </a>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setIsSent(false);
                                            setForm({ ...form, message: "" });
                                          }}
                                          className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 text-[11px] font-mono transition-colors cursor-pointer border border-white/10"
                                        >
                                          ↺ Send Another Inquiry
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ) : (
                                /* INTERACTIVE HYPERREALISTIC FORM VIEW */
                                <motion.form
                                  key="form-view"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  onSubmit={handleSubmit}
                                  className="space-y-2.5"
                                >
                                  {/* Counselor Greeting Note in Frosted Glass */}
                                  <div className="p-2.5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 text-xs text-zinc-200 flex items-start gap-2 leading-snug shadow-sm">
                                    <span className="text-base shrink-0">👋</span>
                                    <div>
                                      <span className="text-white font-semibold block text-[11px] mb-0.5">Welcome to TAPS Admissions</span>
                                      Select your program and tap dispatch for direct counselor contact.
                                    </div>
                                  </div>

                                  {/* Quick Select Program Chips */}
                                  <div>
                                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 mb-1">
                                      Select Program of Interest
                                    </label>
                                    <div className="flex flex-wrap gap-1.5">
                                      {quickSubjects.map((s) => {
                                        const isSelected = form.subject === s;
                                        return (
                                          <motion.button
                                            key={s}
                                            type="button"
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setForm({ ...form, subject: s })}
                                            className={`px-2.5 py-1 rounded-xl text-[10.5px] font-mono transition-all duration-200 cursor-pointer ${
                                              isSelected
                                                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold shadow-md shadow-cyan-500/35 border border-cyan-300/60"
                                                : "bg-white/[0.08] backdrop-blur-md text-zinc-200 hover:bg-white/15 border border-white/15 shadow-xs"
                                            }`}
                                          >
                                            {s}
                                          </motion.button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Full Name in Frosted Capsule */}
                                  <div>
                                    <label className="block text-[9.5px] font-mono uppercase tracking-wider text-zinc-300 mb-0.5">
                                      Applicant Full Name *
                                    </label>
                                    <div className="relative">
                                      <span className="absolute left-3 top-2 text-zinc-400 text-xs">👤</span>
                                      <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onFocus={() => setIsTyping(true)}
                                        onBlur={() => setIsTyping(false)}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="e.g., Ananya Mohapatra"
                                        className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/[0.07] backdrop-blur-xl border border-white/20 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.12] focus:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all font-sans"
                                      />
                                    </div>
                                  </div>

                                  {/* Email & Phone in 2 Frosted Capsules */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <div>
                                      <label className="block text-[9.5px] font-mono uppercase tracking-wider text-zinc-300 mb-0.5">
                                        Email Address *
                                      </label>
                                      <div className="relative">
                                        <span className="absolute left-2.5 top-2 text-zinc-400 text-xs">✉</span>
                                        <input
                                          type="email"
                                          required
                                          value={form.email}
                                          onFocus={() => setIsTyping(true)}
                                          onBlur={() => setIsTyping(false)}
                                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                                          placeholder="name@email.com"
                                          className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-white/[0.07] backdrop-blur-xl border border-white/20 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.12] focus:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all font-mono"
                                        />
                                      </div>
                                    </div>

                                    <div>
                                      <label className="block text-[9.5px] font-mono uppercase tracking-wider text-zinc-300 mb-0.5">
                                        Phone Number *
                                      </label>
                                      <div className="relative">
                                        <span className="absolute left-2.5 top-2 text-zinc-400 text-xs">📱</span>
                                        <input
                                          type="tel"
                                          required
                                          value={form.phone}
                                          onFocus={() => setIsTyping(true)}
                                          onBlur={() => setIsTyping(false)}
                                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                          placeholder="10-digit number"
                                          className="w-full pl-7 pr-2.5 py-1.5 rounded-xl bg-white/[0.07] backdrop-blur-xl border border-white/20 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.12] focus:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all font-mono"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Specific Query Notes */}
                                  <div>
                                    <div className="flex items-center justify-between mb-0.5">
                                      <label className="text-[9.5px] font-mono uppercase tracking-wider text-zinc-300">
                                        Questions or Preferred Schedule
                                      </label>
                                      <span className="text-[9px] font-mono text-zinc-400">Optional</span>
                                    </div>
                                    <textarea
                                      rows={2}
                                      value={form.message}
                                      onFocus={() => setIsTyping(true)}
                                      onBlur={() => setIsTyping(false)}
                                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                                      placeholder="Write your questions or preferred campus visit schedule..."
                                      className="w-full px-3 py-1.5 rounded-xl bg-white/[0.07] backdrop-blur-xl border border-white/20 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.12] focus:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all resize-none"
                                    />
                                  </div>

                                  {/* Liquid Flowing Gradient Send Button with Advanced Shimmer */}
                                  <motion.button
                                    type="submit"
                                    disabled={submitting}
                                    whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-[length:200%_auto] hover:bg-right text-white font-mono font-bold text-xs tracking-wider uppercase transition-all duration-500 shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-1 border border-white/25"
                                  >
                                    {submitting ? (
                                      <>
                                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Transmitting to Desk...</span>
                                      </>
                                    ) : (
                                      <>
                                        <span>Send Inquiry to TAPS</span>
                                        <motion.span
                                          animate={{ x: [0, 3, 0] }}
                                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                          🚀
                                        </motion.span>
                                      </>
                                    )}
                                  </motion.button>
                                </motion.form>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* 4. AUTHENTIC iOS BOTTOM HOME SWIPE BAR */}
                          <div className="pt-2 pb-0.5 relative z-20">
                            <div className="w-32 h-[4px] bg-white/40 rounded-full mx-auto shadow-xs" />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </HyperrealisticPhoneContainer>
              </div>

            </div>

          </section>
        </AnimatedBackground>

        {/* TRANSIT GUIDE: LIGHT VARIANT (CARDLESS OPEN RAIL) */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-2xl mb-10 animate-fadeInUp">
              <div className="text-xs uppercase tracking-widest font-semibold text-blue-700 mb-2">
                Transit &amp; Accessibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                How to Reach Our Campus
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80 pt-6 border-t border-zinc-200/80">
              <div className="py-4 md:py-0 px-0 md:px-6 first:pl-0 last:pr-0">
                <div className="text-base font-bold text-zinc-950 mb-2">
                  🚆 From Railway Station (BBS)
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Distance: ~12 km. Direct Mo Bus route (Route 10, 11) or auto-rickshaws directly to Infocity Square / Patia.
                </p>
              </div>

              <div className="py-4 md:py-0 px-0 md:px-6 first:pl-0 last:pr-0">
                <div className="text-base font-bold text-zinc-950 mb-2">
                  ✈️ From Airport (BBI)
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Distance: ~16 km. Biju Patnaik International Airport is connected via Nandankanan Road and Jayadev Vihar flyover.
                </p>
              </div>

              <div className="py-4 md:py-0 px-0 md:px-6 first:pl-0 last:pr-0">
                <div className="text-base font-bold text-zinc-950 mb-2">
                  🚌 From Baramunda Bus Terminal (ISBT)
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Distance: ~14 km. Frequent direct bus connectivity and taxis available 24/7 along NH-16 towards Patia.
                </p>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* GOOGLE MAP IFRAME WITH GRAYSCALE FILTER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl mb-8">
              <div className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">
                Interactive Campus Map
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-tight">
                Technoplex Satellite Location
              </h2>
            </div>

            {/* Grayscale Map Container */}
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <iframe
                title="Trident Academy of Professional Studies Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.030307018735!2d85.80560981444366!3d20.34036661629799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091d551a38c7%3A0xd2f96c2eaee7b45f!2sTrident+Academy+of+Creative+Technology%2C+Infocity%2C+Chandrasekharpur%2C+Bhubaneswar%2C+Odisha+751016!5e0!3m2!1sen!2sin!4v1466591145858"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(90%) contrast(120%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
