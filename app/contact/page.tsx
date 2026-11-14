"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

// Interactive 3D Smartphone Device Mockup with Gyro-Tilt Glare
function PhoneDeviceContainer({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    // Gentle tilt angles
    setRotate({
      x: (0.5 - y) * 7,
      y: (x - 0.5) * 7,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: isHovered ? rotate.x : 0,
        rotateY: isHovered ? rotate.y : 0,
        transformPerspective: 1200,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="relative will-change-transform"
    >
      {children}
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
  const [currentTime, setCurrentTime] = useState("9:41 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
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
    }, 800);
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
        {/* 2-COLUMN CONTACT CHANNELS & ANIMATED SMARTPHONE CONSOLE */}
        {/* ========================================================================= */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200 relative overflow-hidden">
          {/* Subtle Ambient Glow Blobs */}
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-300/20 via-indigo-300/10 to-transparent blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-purple-300/20 via-cyan-200/15 to-transparent blur-[120px] pointer-events-none" />

          <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column: Direct Institutional Coordinates */}
              <div className="lg:col-span-5 space-y-7 animate-fadeInUp">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-extrabold text-blue-700 mb-2.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    INFOCITY IT CORRIDOR • BHUBANESWAR
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                    Campus Coordinates &amp; Admissions Desk
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed font-normal">
                    Direct institutional channels for academic counseling, seat reservations under NEP-2020, and on-campus computing facility tours.
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-xs sm:text-sm text-zinc-700">
                  
                  {/* Card 1: Campus Address */}
                  <div className="group p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
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
                        <div className="pt-1 flex items-center gap-2">
                          <span className="text-[10px] font-mono text-zinc-500 font-semibold">Landmark: Opposite Infocity Main Gate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Hotlines */}
                  <div className="group p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        📞
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-700 font-bold">
                          Direct Admission Hotlines
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5">
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
                  <div className="group p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
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
                  <div className="group p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/90 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md">
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

              {/* Right Column: ADVANCED ANIMATED SMARTPHONE CONSOLE */}
              <div className="lg:col-span-7 pt-6 lg:pt-0">
                <PhoneDeviceContainer>
                  
                  {/* Floating Holographic Pill Badges */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden sm:flex absolute -top-5 -right-3 z-30 items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-mono font-bold shadow-xl shadow-blue-500/30 border border-white/20 backdrop-blur-md"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                    <span>Admissions 2026 Open</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="hidden sm:flex absolute -bottom-5 -left-4 z-30 items-center gap-2 bg-zinc-950/95 text-cyan-300 px-4 py-2 rounded-full text-xs font-mono font-bold shadow-xl border border-cyan-500/30 backdrop-blur-md"
                  >
                    <span className="text-emerald-400">⚡</span>
                    <span>Direct Counseling Cell</span>
                  </motion.div>

                  {/* Outer Smartphone Chassis (Titanium Midnight Frame) */}
                  <div className="max-w-[440px] sm:max-w-[460px] mx-auto rounded-[52px] sm:rounded-[56px] p-3 sm:p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_30px_90px_-15px_rgba(10,25,80,0.45),0_15px_40px_-10px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.4)] border border-zinc-600/70 relative">
                    
                    {/* Hardware Buttons on Phone Edges */}
                    {/* Mute switch */}
                    <div className="absolute -left-[5px] top-24 w-1.5 h-7 bg-zinc-600 rounded-l-md" />
                    {/* Volume up */}
                    <div className="absolute -left-[5px] top-36 w-1.5 h-12 bg-zinc-600 rounded-l-md" />
                    {/* Volume down */}
                    <div className="absolute -left-[5px] top-52 w-1.5 h-12 bg-zinc-600 rounded-l-md" />
                    {/* Power / Siri button */}
                    <div className="absolute -right-[5px] top-36 w-1.5 h-16 bg-zinc-600 rounded-r-md" />

                    {/* Gloss Reflection Layer Across Phone Glass */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent rounded-t-[48px] z-20" />

                    {/* Inner OLED Display Glass */}
                    <div className="rounded-[42px] sm:rounded-[46px] overflow-hidden bg-gradient-to-b from-[#0B1536] via-[#070D21] to-[#040816] text-white p-5 sm:p-6 relative border border-white/10 shadow-inner flex flex-col justify-between min-h-[640px]">
                      
                      {/* 1. TOP STATUS BAR & DYNAMIC ISLAND */}
                      <div className="relative z-30 mb-4">
                        {/* Dynamic Island Notch */}
                        <div className="w-36 h-7 bg-black rounded-full mx-auto flex items-center justify-between px-3 text-[10px] text-zinc-300 font-mono shadow-inner border border-zinc-800">
                          {/* Camera sensor dot */}
                          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-blue-900" />
                          </div>
                          {/* Status Indicator */}
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                            <span className="text-[9px] font-bold tracking-tight text-white/90">
                              {submitting ? "SENDING..." : "TAPS • LIVE"}
                            </span>
                          </div>
                        </div>

                        {/* Top Status Bar (Clock & Icons) */}
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 px-2 mt-1.5">
                          <span className="font-bold tracking-tight">{currentTime}</span>
                          <div className="flex items-center gap-2">
                            {/* Cellular Signal Bars */}
                            <svg className="w-3.5 h-3.5 fill-current text-zinc-300" viewBox="0 0 24 24">
                              <path d="M2 20h2v-4H2v4zm5 0h2v-8H7v8zm5 0h2V8h-2v12zm5 0h2V4h-2v16z" />
                            </svg>
                            <span className="text-[10px] font-bold">5G</span>
                            {/* Battery SVG */}
                            <div className="flex items-center gap-0.5">
                              <div className="w-5 h-2.5 rounded-[4px] border border-zinc-300 p-0.5 flex items-center">
                                <div className="w-full h-full bg-emerald-400 rounded-[2px]" />
                              </div>
                              <div className="w-0.5 h-1 bg-zinc-300 rounded-r-xs" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2. IN-APP MESSAGING HEADER BAR */}
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 relative z-10">
                        <div className="flex items-center gap-2.5">
                          {/* Official TAPS Avatar */}
                          <div className="relative">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-md">
                              <div className="w-full h-full bg-[#070D21] rounded-[14px] flex items-center justify-center font-bold text-white text-xs">
                                TAPS
                              </div>
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#070D21] flex items-center justify-center text-[7px] text-white">
                              ✓
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white flex items-center gap-1.5 leading-snug">
                              <span>Admissions Desk</span>
                              <span className="text-[10px] text-cyan-400 font-mono">● Active</span>
                            </div>
                            <div className="text-[10px] text-zinc-400 font-mono">
                              Official Infocity Counselor
                            </div>
                          </div>
                        </div>

                        {/* Call action buttons */}
                        <div className="flex items-center gap-2 text-zinc-400">
                          <a
                            href="tel:+919861191195"
                            title="Call Admissions Desk"
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                          >
                            📞
                          </a>
                          <a
                            href="https://wa.me/916371512551"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open WhatsApp Hotline"
                            className="w-8 h-8 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 flex items-center justify-center text-xs transition-colors cursor-pointer"
                          >
                            💬
                          </a>
                        </div>
                      </div>

                      {/* 3. INTERACTIVE CONVERSATION & FORM VIEW */}
                      <div className="flex-1 relative z-10">
                        <AnimatePresence mode="wait">
                          {isSent ? (
                            /* SUCCESS DELIVERED CHAT STATE */
                            <motion.div
                              key="sent-view"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="space-y-4 py-2"
                            >
                              {/* User sent message bubble */}
                              <div className="flex justify-end">
                                <div className="max-w-[85%] bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3.5 rounded-2xl rounded-tr-xs shadow-md text-xs space-y-1">
                                  <div className="font-semibold text-white/95">
                                    Inquiry: {form.subject}
                                  </div>
                                  <p className="text-blue-100 text-[11px] leading-relaxed">
                                    {form.message || "Requesting admission prospectus and seat reservation guidance."}
                                  </p>
                                  <div className="flex items-center justify-end gap-1 text-[9px] text-blue-200 font-mono pt-1">
                                    <span>Just now</span>
                                    <span>✓✓ Delivered</span>
                                  </div>
                                </div>
                              </div>

                              {/* Automated Counselor Reply Bubble */}
                              <div className="flex justify-start">
                                <div className="max-w-[88%] bg-white/10 backdrop-blur-md border border-white/15 text-white p-3.5 rounded-2xl rounded-tl-xs shadow-md text-xs space-y-2">
                                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-[11px]">
                                    <span>🎓 TAPS Counselor Bot</span>
                                    <span className="text-[9px] font-mono text-zinc-400">• Verified</span>
                                  </div>
                                  <p className="text-zinc-200 text-xs leading-relaxed">
                                    Thank you, <strong className="text-white">{form.name}</strong>! 🎉 Your inquiry has been logged under ticket <span className="font-mono text-cyan-300 font-bold">{ticketId}</span>.
                                  </p>
                                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                                    Our senior admissions advisor will contact you at <span className="font-mono text-cyan-300">{form.phone}</span> within 15 minutes.
                                  </p>
                                  <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                                    <a
                                      href="tel:+919861191195"
                                      className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-[11px] text-center shadow-xs"
                                    >
                                      📞 Speak with Counselor Now
                                    </a>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setIsSent(false);
                                        setForm({ ...form, message: "" });
                                      }}
                                      className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 text-[11px] font-mono transition-colors cursor-pointer"
                                    >
                                      ↺ Send Another Message
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ) : (
                            /* INTERACTIVE MOBILE FORM VIEW */
                            <motion.form
                              key="form-view"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onSubmit={handleSubmit}
                              className="space-y-3.5"
                            >
                              {/* Counselor Greeting Note */}
                              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-start gap-2.5 leading-snug">
                                <span className="text-base shrink-0">👋</span>
                                <div>
                                  <span className="text-white font-semibold block mb-0.5">Welcome to TAPS Admissions</span>
                                  Select your course below to send an instant inquiry to our counseling officers.
                                </div>
                              </div>

                              {/* Interactive Course Selection Chips */}
                              <div>
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
                                  Select Program / Query
                                </label>
                                <div className="flex flex-wrap gap-1.5">
                                  {quickSubjects.map((s) => {
                                    const isSelected = form.subject === s;
                                    return (
                                      <button
                                        key={s}
                                        type="button"
                                        onClick={() => setForm({ ...form, subject: s })}
                                        className={`px-2.5 py-1 rounded-xl text-[11px] font-mono transition-all duration-200 cursor-pointer ${
                                          isSelected
                                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/30 scale-102"
                                            : "bg-white/10 text-zinc-300 hover:bg-white/15 border border-white/10"
                                        }`}
                                      >
                                        {s}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Full Name */}
                              <div>
                                <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-300 mb-1">
                                  Applicant Name *
                                </label>
                                <div className="relative">
                                  <span className="absolute left-3 top-2.5 text-zinc-400 text-xs">👤</span>
                                  <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="e.g., Ananya Mohapatra"
                                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                  />
                                </div>
                              </div>

                              {/* Email & Phone in 2 Columns */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                <div>
                                  <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-300 mb-1">
                                    Email Address *
                                  </label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-zinc-400 text-xs">✉</span>
                                    <input
                                      type="email"
                                      required
                                      value={form.email}
                                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                                      placeholder="name@email.com"
                                      className="w-full pl-8 pr-2.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-300 mb-1">
                                    Phone Number *
                                  </label>
                                  <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-zinc-400 text-xs">📱</span>
                                    <input
                                      type="tel"
                                      required
                                      value={form.phone}
                                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                      placeholder="10-digit number"
                                      className="w-full pl-8 pr-2.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Message Details */}
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-300">
                                    Specific Query / Notes
                                  </label>
                                  <span className="text-[9px] font-mono text-zinc-400">Optional</span>
                                </div>
                                <div className="relative">
                                  <textarea
                                    rows={2}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder="Write your questions or preferred campus visit schedule..."
                                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                                  />
                                </div>
                              </div>

                              {/* Interactive Haptic Dispatch Button */}
                              <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50 mt-1"
                              >
                                {submitting ? (
                                  <>
                                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Transmitting to Desk...</span>
                                  </>
                                ) : (
                                  <>
                                    <span>Send Inquiry to TAPS</span>
                                    <span>🚀</span>
                                  </>
                                )}
                              </button>
                            </motion.form>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* 4. BOTTOM HOME SWIPE INDICATOR BAR */}
                      <div className="pt-3 pb-1 relative z-20">
                        <div className="w-28 h-1 bg-white/25 rounded-full mx-auto" />
                      </div>

                    </div>
                  </div>
                </PhoneDeviceContainer>
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
