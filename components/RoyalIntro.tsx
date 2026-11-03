"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RoyalIntro() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const startLoading = () => {
    setProgress(0);
    setIsReady(false);
    setIsExiting(false);
    setShouldRender(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }

        const step = Math.random() > 0.4 ? 1 : 2;
        const next = prev + step;

        if (next >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }

        return next;
      });
    }, 45);
  };

  useEffect(() => { const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("taps_intro_navy_visible_v2"); if (!hasSeen) { const t = setTimeout(() => { setShouldRender(true); startLoading(); }, 10); return () => clearTimeout(t); } }, []);

  const handleEnter = () => {
    setIsExiting(true);
    sessionStorage.setItem("taps_intro_navy_visible_v2", "true");
    setTimeout(() => {
      setShouldRender(false);
    }, 850);
  };

  if (!shouldRender) return null;

  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbitCW {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.92); opacity: 0.6; }
          50% { transform: scale(1.18); opacity: 0.15; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}} />

      <div
        className={`fixed inset-0 z-[100] flex flex-col justify-between items-center overflow-hidden select-none transition-all duration-800 ease-in-out ${
          isExiting ? "-translate-y-full opacity-0 pointer-events-none scale-105" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Full-bleed Campus Image with High-Contrast Navy Tint */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/asset/intro-banner.jpg"
            alt="Trident Campus"
            fill sizes="100vw"
            className="object-cover scale-100 contrast-[1.08] brightness-[0.88]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001433]/75 via-[#001B44]/65 to-[#000E26]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,14,38,0.7)_90%)]" />

          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(#38BDF8 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Top Header Bar */}
        <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-7 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-white">
              Trident Group <span className="text-cyan-300">/</span> Bhubaneswar
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={startLoading}
              className="text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
            >
              <span>↺</span> Replay
            </button>
            <button
              onClick={handleEnter}
              className="text-xs font-bold text-white hover:text-cyan-300 px-4 py-1.5 rounded-full border border-white/25 bg-black/25 hover:bg-black/40 shadow-sm transition-all cursor-pointer backdrop-blur-md"
            >
              Skip →
            </button>
          </div>
        </header>

        {/* Centerpiece: Interactive Hoverable Crest */}
        <main className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl my-auto">
          
          {/* Logo Group Container with Enhanced Micro-Interactions */}
          <div className="relative flex items-center justify-center mb-6 group cursor-pointer">
            
            {/* Outer Subtle Pulse Wave */}
            <div
              className="absolute w-52 h-52 rounded-full border-2 border-cyan-400/40 pointer-events-none group-hover:border-cyan-300/80 transition-colors"
              style={{ animation: "pulseRing 2.8s cubic-bezier(0, 0.2, 0.8, 1) infinite" }}
            />

            {/* Orbiting Dashed Ring (Speeds up on hover) */}
            <div
              className="absolute w-56 h-56 rounded-full border border-dashed border-cyan-300/40 pointer-events-none group-hover:border-cyan-300 group-hover:[animation-duration:5s] transition-all"
              style={{ animation: "orbitCW 14s linear infinite" }}
            />

            {/* SVG Circular Progress Track */}
            <svg className="w-52 h-52 -rotate-90 drop-shadow-[0_0_25px_rgba(56,189,248,0.35)] group-hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all duration-300">
              <circle
                cx="104"
                cy="104"
                r={radius}
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="5"
                fill="transparent"
              />
              <circle
                cx="104"
                cy="104"
                r={radius}
                stroke="url(#cyanBlueGaugeGrad)"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                style={{ transition: "stroke-dashoffset 0.12s linear" }}
              />
              <defs>
                <linearGradient id="cyanBlueGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="60%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Crest Badge with Lift, Glow, & Rotation on Hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-28 h-28 rounded-full p-4 bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_10px_35px_rgba(0,0,0,0.4)] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.65)] group-hover:border-cyan-300"
                style={{ animation: "floatLogo 3s ease-in-out infinite" }}
              >
                <Image
                  src="/asset/logo.png"
                  alt="Trident Academy"
                  width={76}
                  height={76}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Admissions Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-extrabold text-white">
              Admissions 2026 – 2027 Open
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            TRIDENT ACADEMY
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-md mb-6 leading-relaxed drop-shadow">
            School of Professional Studies • Affiliated to Utkal University
            <span className="block text-slate-300 text-xs mt-1">
              Premier Undergraduate Programs in BCA & BBA
            </span>
          </p>

          {/* Dynamic Progress or Explore Button */}
          <div className="min-h-[64px] flex items-center justify-center">
            {!isReady ? (
              <div className="flex flex-col items-center gap-2.5">
                <span className="text-xs font-mono tracking-widest text-cyan-300 font-bold drop-shadow">
                  LOADING CAMPUS ENVIRONMENT • {progress}%
                </span>
                <div className="w-56 h-1.5 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden p-0.5 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleEnter}
                className="group relative inline-flex items-center gap-3.5 px-10 py-3.5 rounded-full font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 bg-white text-[#001433] hover:bg-cyan-300 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_45px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>EXPLORE CAMPUS LIFE</span>
                <span className="w-6 h-6 rounded-full bg-[#001433] text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform duration-300 shadow">
                  →
                </span>
              </button>
            )}
          </div>

        </main>

        {/* Bottom Statistics Bar */}
        <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 relative z-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-6">
            <div>
              <span className="font-extrabold text-white">25+</span>
              <span className="ml-1.5 text-slate-300">Years of Legacy</span>
            </div>
            <div className="w-px h-3.5 bg-white/20" />
            <div>
              <span className="font-extrabold text-cyan-300">100%</span>
              <span className="ml-1.5 text-slate-300">Placement Assistance</span>
            </div>
          </div>

          <div className="font-mono text-[11px] text-slate-300/80 tracking-wider">
            BHUBANESWAR, ODISHA • AFFILIATED TO UTKAL UNIVERSITY
          </div>
        </footer>

      </div>
    </>
  );
}
