"use client";

import React from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  id?: string;
}

export default function AnimatedBackground({
  children,
  variant = "light",
  className = "",
  id,
}: AnimatedBackgroundProps) {
  const isDark = variant === "dark";

  return (
    <div
      id={id}
      className={`relative w-full overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#070D21] text-white" : "bg-[#FBFBFF] text-slate-900"
      } ${className}`}
    >
      {/* 1. TOP BLUE & LAVENDER PRISMATIC GRADIENT BEAM ACCENT */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2.5px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 via-purple-500 to-violet-400 animate-gradient-beam opacity-90 z-20 pointer-events-none" 
        aria-hidden="true"
      />

      {/* 2. BACKGROUND AMBIENT CANVAS (Strictly pointer-events-none) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Colorful Radiant Mesh Texture Base */}
        <div 
          className={`absolute inset-0 ${
            isDark ? "colorful-texture-dark opacity-90" : "colorful-texture-light opacity-80"
          }`} 
        />

        {/* Moving Geometric Dot Matrix with Continuous Diagonal Travel */}
        <div
          className={`absolute inset-[-48px] animate-grid-travel ${
            isDark
              ? "bg-[radial-gradient(rgba(196,181,253,0.24)_1.2px,transparent_1.2px)]"
              : "bg-[radial-gradient(rgba(99,102,241,0.18)_1.2px,transparent_1.2px)]"
          } [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-90`}
        />

        {/* 3. Dynamic Colorful Aurora & Iridescent Gradient Blur Spheres (Blue & Lavender) */}
        {isDark ? (
          <>
            {/* Dark Variant: Deep Midnight Sapphire, Royal Blue, Indigo & Radiant Lavender Orbs */}
            <div className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-blue-600/50 via-indigo-600/45 to-purple-600/40 blur-[120px] animate-aurora" />
            <div className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-500/45 via-purple-600/40 to-violet-500/35 blur-[130px] animate-aurora-reverse" />
            <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-sky-500/40 via-blue-600/35 to-indigo-500/30 blur-[125px] animate-drift-slow" />
            <div className="absolute top-2/3 -left-28 w-[540px] h-[540px] rounded-full bg-gradient-to-r from-purple-600/35 via-violet-500/30 to-blue-500/35 blur-[120px] animate-drift-reverse" />
          </>
        ) : (
          <>
            {/* Light Variant: Soft Prismatic Blue, Periwinkle & Lavender Pastel Orbs */}
            <div className="absolute -top-32 -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-blue-300/50 via-indigo-300/45 to-purple-300/40 blur-[110px] animate-aurora" />
            <div className="absolute top-1/3 -right-32 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-purple-300/50 via-indigo-200/45 to-sky-200/40 blur-[120px] animate-aurora-reverse" />
            <div className="absolute -bottom-32 left-1/4 w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-sky-300/45 via-blue-200/40 to-purple-200/35 blur-[110px] animate-drift-slow" />
            <div className="absolute top-2/3 -left-28 w-[540px] h-[540px] rounded-full bg-gradient-to-r from-indigo-300/40 via-purple-300/35 to-blue-200/40 blur-[110px] animate-drift-reverse" />
          </>
        )}

        {/* Soft lightly shaded contrast mask: gently enhances visibility of ambient animations across every section */}
        <div className={`absolute inset-0 pointer-events-none ${
          isDark ? "bg-gradient-to-b from-transparent via-[#070D21]/20 to-transparent" : "bg-gradient-to-b from-transparent via-indigo-950/[0.03] to-transparent"
        }`} />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
