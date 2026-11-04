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
        isDark ? "bg-zinc-950 text-white" : "bg-[#FAFAFA] text-zinc-900"
      } ${className}`}
    >
      {/* 1. TOP PRISMATIC GRADIENT BEAM ACCENT (Continuous Linear Shimmer) */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] w-full bg-gradient-to-r from-violet-600 via-cyan-400 via-pink-500 via-emerald-400 to-indigo-600 animate-gradient-beam opacity-85 z-20 pointer-events-none" 
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
              ? "bg-[radial-gradient(rgba(255,255,255,0.14)_1.2px,transparent_1.2px)]"
              : "bg-[radial-gradient(rgba(99,102,241,0.10)_1.2px,transparent_1.2px)]"
          } [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-80`}
        />

        {/* 3. Dynamic Colorful Aurora & Iridescent Gradient Blur Spheres */}
        {isDark ? (
          <>
            {/* Dark Variant: Luminous Cosmic Orbs (Indigo, Purple, Cyan, Emerald, Rose) */}
            <div className="absolute -top-32 -left-32 w-[620px] h-[620px] rounded-full bg-gradient-to-tr from-indigo-600/40 via-purple-600/35 to-pink-500/30 blur-[130px] animate-aurora" />
            <div className="absolute top-1/3 -right-32 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-cyan-500/35 via-blue-600/30 to-emerald-400/25 blur-[140px] animate-aurora-reverse" />
            <div className="absolute -bottom-32 left-1/4 w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-rose-500/30 via-violet-600/25 to-amber-400/20 blur-[135px] animate-drift-slow" />
            <div className="absolute top-2/3 -left-28 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-emerald-500/25 via-teal-400/20 to-blue-500/25 blur-[125px] animate-drift-reverse" />
          </>
        ) : (
          <>
            {/* Light Variant: Prismatic Pastel Aurora Orbs (Soft Indigo, Sky Cyan, Blush Rose, Mint) */}
            <div className="absolute -top-32 -left-32 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-indigo-300/40 via-purple-300/35 to-pink-200/30 blur-[120px] animate-aurora" />
            <div className="absolute top-1/3 -right-32 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-cyan-200/45 via-sky-300/35 to-emerald-200/30 blur-[130px] animate-aurora-reverse" />
            <div className="absolute -bottom-32 left-1/4 w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-rose-200/35 via-violet-200/30 to-amber-100/25 blur-[120px] animate-drift-slow" />
            <div className="absolute top-2/3 -left-28 w-[490px] h-[490px] rounded-full bg-gradient-to-r from-teal-200/30 via-emerald-200/25 to-blue-200/30 blur-[115px] animate-drift-reverse" />
          </>
        )}
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
