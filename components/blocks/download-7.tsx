"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Download7Props {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  rating?: string;
  reviewCount?: string;
  className?: string;
}

export function Download7({
  badge = "TAPS MOBILE APP • CAMPUS CONNECT",
  title = "Stay Connected with Campus Life",
  highlightText = "Anytime, Anywhere",
  description = "Get real-time push notifications for class timetables, attendance tracking, semester grades, campus bus GPS, and direct student support right from your smartphone.",
  appStoreUrl = "#",
  playStoreUrl = "#",
  rating = "4.9",
  reviewCount = "3,800+",
  className = "",
}: Download7Props) {
  return (
    <section className={`relative py-20 sm:py-28 overflow-hidden ${className}`}>
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/15 via-pink-500/10 to-transparent rounded-full blur-[120px]" />
        {/* Subtle grid mesh background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, App Store Badges & Social Proof */}
          <div className="lg:col-span-7 space-y-8 animate-fadeInUp">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-zinc-950 tracking-tight leading-[1.12]">
              {title}{" "}
              <span className="font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {highlightText}
              </span>
            </h2>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                "Instant Attendance Sync",
                "Live College Bus GPS",
                "Semester Exam Admit Cards",
                "Direct Faculty Channels",
              ].map((feat, i) => (
                <div 
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-mono font-medium text-zinc-700 flex items-center gap-1.5"
                >
                  <span className="text-blue-600">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Official Store Badges (Download 7 Signature) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Apple App Store Badge */}
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-950 text-white shadow-xl hover:shadow-2xl hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5 border border-zinc-800"
                aria-label="Download on the App Store"
              >
                {/* Apple SVG Icon */}
                <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.05-.51 2.68-1.26z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 leading-tight">
                    Download on the
                  </div>
                  <div className="text-base font-bold font-sans tracking-tight text-white leading-tight">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Store Badge */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-950 text-white shadow-xl hover:shadow-2xl hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5 border border-zinc-800"
                aria-label="Get it on Google Play"
              >
                {/* Google Play SVG Icon */}
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.6 1.4C3.3 1.7 3.1 2.2 3.1 2.8v18.4c0 .6.2 1.1.5 1.4l9.5-9.6L3.6 1.4z" />
                  <path fill="#FBBC04" d="M16.5 16.4l-3.4-3.4 3.4-3.4 3.8 2.2c1.1.6 1.1 1.7 0 2.4l-3.8 2.2z" />
                  <path fill="#EA4335" d="M13.1 13l-9.5 9.6c.4.4 1 .4 1.7 0l11.2-6.5L13.1 13z" />
                  <path fill="#34A853" d="M16.5 7.6L5.3 1.1c-.7-.4-1.3-.4-1.7 0L13.1 11l3.4-3.4z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 leading-tight">
                    GET IT ON
                  </div>
                  <div className="text-base font-bold font-sans tracking-tight text-white leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Social Proof & Rating Breakdown */}
            <div className="pt-3 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm font-mono font-bold text-zinc-900">{rating} / 5.0</span>
              </div>
              <div className="text-xs text-zinc-500 font-medium">
                Rated by <strong className="text-zinc-900 font-semibold">{reviewCount}</strong> active students and faculty across Android &amp; iOS.
              </div>
            </div>

          </div>

          {/* Right Column: Floating 3D Smartphone Device Mockup with Live UI */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-3xl opacity-80" />

            {/* Floating Satellite Chip 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-8 z-30 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-xl flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                92%
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-400">Attendance</div>
                <div className="text-xs font-bold text-zinc-900">Good Standing</div>
              </div>
            </motion.div>

            {/* Floating Satellite Chip 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 z-30 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-xl flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-400">College Bus #04</div>
                <div className="text-xs font-bold text-zinc-900">Infocity Gate • 3m</div>
              </div>
            </motion.div>

            {/* Floating Phone Device Frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 sm:w-80 rounded-[44px] p-3.5 bg-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border-4 border-zinc-800 ring-1 ring-white/10"
            >
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-zinc-900 z-40 flex items-center justify-between px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-950" />
                <div className="w-2 h-2 rounded-full bg-blue-900/40" />
              </div>

              {/* Internal Screen Content */}
              <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#0F1C3F] to-[#070D21] text-white pt-8 pb-6 px-4 space-y-4 select-none">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1 pt-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <span className="w-3 h-2 rounded-xs border border-zinc-400 flex items-center p-0.5">
                      <span className="h-full w-full bg-white rounded-2xs" />
                    </span>
                  </div>
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">TAPS PORTAL</div>
                    <div className="text-sm font-bold text-white">Student Dashboard</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold shadow-md">
                    RD
                  </div>
                </div>

                {/* Profile Banner */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300">Degree Student</span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Active</span>
                  </div>
                  <div className="text-sm font-bold text-white">Rohan Das</div>
                  <div className="text-[11px] font-mono text-cyan-300">BCA 2024-27 • Sem IV</div>
                </div>

                {/* Next Lecture Card */}
                <div className="p-3 rounded-2xl bg-blue-600/30 border border-blue-400/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-300 font-bold uppercase">Next Lecture</span>
                    <span className="text-[10px] font-mono text-white">11:30 AM</span>
                  </div>
                  <div className="text-xs font-bold text-white truncate">Cloud Architecture &amp; AWS Lab</div>
                  <div className="text-[10px] text-zinc-300 font-mono">Block 5 • High-Density Computing Lab 02</div>
                </div>

                {/* Notification Toast Animation */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-400/30 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-purple-500/30 flex items-center justify-center shrink-0 text-sm">
                    ⚡
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-bold text-white truncate">Admit Card Available</div>
                    <div className="text-[9px] text-zinc-300 truncate">Semester IV Mid-Term Assessment</div>
                  </div>
                </div>

                {/* Quick Action Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-sm mb-0.5">📅</div>
                    <div className="text-[9px] font-mono text-zinc-300">Timetable</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-sm mb-0.5">🚌</div>
                    <div className="text-[9px] font-mono text-zinc-300">Bus GPS</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-sm mb-0.5">💬</div>
                    <div className="text-[9px] font-mono text-zinc-300">Help Desk</div>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="pt-2 flex justify-center">
                  <div className="w-28 h-1 rounded-full bg-white/30" />
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
