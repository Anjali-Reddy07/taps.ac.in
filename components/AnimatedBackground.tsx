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
      {/* BACKGROUND AMBIENT CANVAS (Strictly pointer-events-none) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* 1. Moving Geometric Dot / Grid Matrix with Continuous Diagonally Traveling Movement */}
        <div
          className={`absolute inset-[-48px] animate-grid-travel ${
            isDark
              ? "bg-[radial-gradient(rgba(255,255,255,0.12)_1.2px,transparent_1.2px)]"
              : "bg-[radial-gradient(rgba(0,0,0,0.08)_1.2px,transparent_1.2px)]"
          } [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-80`}
        />

        {/* 2. Soft, Floating Monochrome Gradient Radial Blur Orbs on Dual Paths */}
        {isDark ? (
          <>
            {/* Dark Variant Orbs */}
            <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-zinc-700/20 blur-[130px] animate-drift-slow" />
            <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-zinc-800/35 blur-[150px] animate-drift-reverse" />
            <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-zinc-600/15 blur-[120px] animate-drift-slow" />
          </>
        ) : (
          <>
            {/* Light Variant Orbs */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-zinc-300/35 blur-[120px] animate-drift-slow" />
            <div className="absolute top-1/2 -right-32 w-[580px] h-[580px] rounded-full bg-zinc-200/50 blur-[140px] animate-drift-reverse" />
            <div className="absolute -bottom-32 left-1/3 w-[480px] h-[480px] rounded-full bg-zinc-300/25 blur-[110px] animate-drift-slow" />
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

