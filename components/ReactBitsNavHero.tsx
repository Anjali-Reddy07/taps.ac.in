"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// Types & Theme Presets
// ============================================================================
export type ThemePreset = "aurora" | "dune" | "dusk" | "silk";

interface PresetConfig {
  id: ThemePreset;
  name: string;
  subtitle: string;
  tag: string;
  gradient: string;
  accentColor: string;
  blobColors: string[];
}

export const PRESETS: Record<ThemePreset, PresetConfig> = {
  aurora: {
    id: "aurora",
    name: "Aurora",
    subtitle: "Cool cyan, electric teal & deep indigo waves",
    tag: "Liquid Cyan",
    gradient: "from-cyan-500/25 via-blue-600/20 to-purple-800/25",
    accentColor: "#06b6d4",
    blobColors: ["#06b6d4", "#3b82f6", "#6366f1", "#10b981"],
  },
  dune: {
    id: "dune",
    name: "Dune",
    subtitle: "Warm amber, gold & desert terracotta fluid",
    tag: "Amber Fluid",
    gradient: "from-amber-500/25 via-orange-600/20 to-rose-700/25",
    accentColor: "#f59e0b",
    blobColors: ["#f59e0b", "#ea580c", "#e11d48", "#d97706"],
  },
  dusk: {
    id: "dusk",
    name: "Dusk",
    subtitle: "Neon violet, magenta & midnight cyber dusk",
    tag: "Cyber Dusk",
    gradient: "from-fuchsia-500/25 via-purple-600/20 to-indigo-800/25",
    accentColor: "#d946ef",
    blobColors: ["#d946ef", "#8b5cf6", "#ec4899", "#3b82f6"],
  },
  silk: {
    id: "silk",
    name: "Silk",
    subtitle: "Platinum pearl, titanium & subtle icy sheen",
    tag: "Pearl Sheen",
    gradient: "from-slate-400/20 via-zinc-500/15 to-sky-700/20",
    accentColor: "#94a3b8",
    blobColors: ["#94a3b8", "#38bdf8", "#e2e8f0", "#64748b"],
  },
};

// ============================================================================
// 1. Dynamic Background Component
// ============================================================================
export function DynamicBackground({ activePreset }: { activePreset: ThemePreset }) {
  const current = PRESETS[activePreset];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#070709] pointer-events-none select-none">
      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Cross-fading Animated Mesh Blobs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePreset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Animated Blob 1 */}
          <motion.div
            animate={{
              x: [0, 80, -60, 0],
              y: [0, -70, 50, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full blur-[120px] opacity-70"
            style={{ backgroundColor: current.blobColors[0] }}
          />

          {/* Animated Blob 2 */}
          <motion.div
            animate={{
              x: [0, -90, 70, 0],
              y: [0, 80, -60, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 -right-24 h-[600px] w-[600px] rounded-full blur-[140px] opacity-60"
            style={{ backgroundColor: current.blobColors[1] }}
          />

          {/* Animated Blob 3 */}
          <motion.div
            animate={{
              x: [0, 60, -80, 0],
              y: [0, -50, 70, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 left-1/3 h-[580px] w-[580px] rounded-full blur-[130px] opacity-65"
            style={{ backgroundColor: current.blobColors[2] }}
          />

          {/* Animated Blob 4 (Center Aura) */}
          <motion.div
            animate={{
              scale: [0.95, 1.12, 0.95],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full blur-[160px]"
            style={{ backgroundColor: current.blobColors[3] }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/50 to-[#070709]/95" />
    </div>
  );
}

// ============================================================================
// 2. React Bits Modern Navigation Bar
// ============================================================================
interface NavbarProps {
  activePreset: ThemePreset;
  onSelectPreset: (preset: ThemePreset) => void;
  onHoverPreset?: (preset: ThemePreset | null) => void;
}

export function ReactBitsNavbar({
  activePreset,
  onSelectPreset,
  onHoverPreset,
}: NavbarProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { label: "Docs", href: "#docs" },
    { label: "Tools", href: "#tools", hasDropdown: true },
    { label: "Pro", href: "#pro", badge: "NEW" },
    { label: "Sponsors", href: "#sponsors" },
  ];

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      if (onHoverPreset) onHoverPreset(null);
    }, 180);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className="pointer-events-auto relative flex items-center justify-between w-full max-w-5xl px-3.5 py-2.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/80 transition-all duration-300"
      >
        {/* Left Side: Brand Logo & Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors group"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/25">
              <div className="w-full h-full rounded-[7px] bg-black/90 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white tracking-tight">
                React<span className="text-cyan-400">Bits</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-400">
                v2.4
              </span>
            </div>
          </a>

          {/* Navigation Links with Sliding Pill Spotlight */}
          <div
            className="hidden md:flex items-center relative"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const isHovered = hoveredNav === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredNav(link.label);
                    if (link.hasDropdown) {
                      handleDropdownEnter();
                    } else {
                      setDropdownOpen(false);
                      if (onHoverPreset) onHoverPreset(null);
                    }
                  }}
                  onMouseLeave={() => {
                    if (link.hasDropdown) {
                      handleDropdownLeave();
                    }
                  }}
                >
                  <a
                    href={link.href}
                    className="relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30">
                        {link.badge}
                      </span>
                    )}
                    {link.hasDropdown && (
                      <svg
                        className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-white" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Framer Motion Sliding Spotlight */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-pill-spotlight"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10 -z-0"
                    />
                  )}

                  {/* Dropdown Menu attached to "Tools" */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 24,
                          }}
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                          className="absolute left-0 top-full mt-3 w-80 rounded-2xl bg-[#0d0e12]/90 border border-white/15 backdrop-blur-xl p-3 shadow-2xl shadow-black/90 pointer-events-auto"
                        >
                          {/* Dropdown Header */}
                          <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                            <span>Dynamic Canvas Presets</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          </div>

                          {/* Preset Options */}
                          <div className="space-y-1">
                            {(Object.keys(PRESETS) as ThemePreset[]).map((key) => {
                              const preset = PRESETS[key];
                              const isSelected = activePreset === key;

                              return (
                                <button
                                  key={preset.id}
                                  type="button"
                                  onClick={() => onSelectPreset(preset.id)}
                                  onMouseEnter={() => onHoverPreset && onHoverPreset(preset.id)}
                                  onMouseLeave={() => onHoverPreset && onHoverPreset(null)}
                                  className={`w-full group flex items-center justify-between p-2 rounded-xl text-left transition-all duration-200 border ${
                                    isSelected
                                      ? "bg-white/10 border-white/20 text-white shadow-inner"
                                      : "border-transparent hover:bg-white/5 hover:border-white/10 text-zinc-300 hover:text-white"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    {/* Color Indicator Swatch */}
                                    <div
                                      className="w-7 h-7 rounded-lg flex items-center justify-center p-[2px] transition-transform duration-300 group-hover:scale-110"
                                      style={{
                                        background: `linear-gradient(135deg, ${preset.blobColors[0]}, ${preset.blobColors[1]})`,
                                      }}
                                    >
                                      <div className="w-full h-full rounded-[6px] bg-black/60 flex items-center justify-center">
                                        <div
                                          className="w-2.5 h-2.5 rounded-full"
                                          style={{ backgroundColor: preset.accentColor }}
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-xs font-semibold flex items-center gap-1.5">
                                        {preset.name}
                                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white/5 text-zinc-400">
                                          {preset.tag}
                                        </span>
                                      </div>
                                      <div className="text-[10px] text-zinc-400 line-clamp-1">
                                        {preset.subtitle}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Custom Animated Toggle Switch */}
                                  <div
                                    className={`w-8 h-4.5 rounded-full p-0.5 flex items-center transition-colors duration-300 ${
                                      isSelected ? "bg-cyan-500 justify-end" : "bg-zinc-800 justify-start"
                                    }`}
                                  >
                                    <motion.div
                                      layout
                                      transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                      }}
                                      className="w-3.5 h-3.5 rounded-full bg-white shadow-md"
                                    />
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Dropdown Footer Link */}
                          <div className="mt-2.5 pt-2 border-t border-white/10">
                            <a
                              href="#background-studio"
                              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                            >
                              <span>Open in Background Studio</span>
                              <svg
                                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: GitHub Stars & Prominent CTA Button */}
        <div className="flex items-center gap-2">
          {/* GitHub Star Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 transition-all duration-200 group"
          >
            <svg
              className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="font-medium">Star</span>
            <span className="font-mono text-[11px] text-zinc-400 bg-white/10 px-1.5 py-0.2 rounded-md">
              14.2k
            </span>
          </a>

          {/* Prominent CTA Button with vibrant blue accent */}
          <a
            href="#pro"
            className="relative group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-xs font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300"
          >
            <span>Get React Bits Pro</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}

// ============================================================================
// 3. React Bits Inspired Hero Section
// ============================================================================
export function ReactBitsHero({
  activePreset,
  onSelectPreset,
}: {
  activePreset: ThemePreset;
  onSelectPreset: (preset: ThemePreset) => void;
}) {
  const current = PRESETS[activePreset];

  return (
    <section className="relative min-h-screen pt-36 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Top Release Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group hover:border-white/20 transition-colors"
      >
        <span className="flex h-2 w-2 relative">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: current.accentColor }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: current.accentColor }}
          />
        </span>
        <span className="text-xs font-mono text-zinc-300">
          React Bits 2.0 • 60+ Animated Primitives
        </span>
        <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
          →
        </span>
      </motion.div>

      {/* Hero Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
      >
        Animate Your React Apps with{" "}
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff, ${current.accentColor}, #ffffff)`,
          }}
        >
          Fluid Micro-Interactions
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="max-w-2xl text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-10"
      >
        An open-source library of customizable animated components, liquid mesh
        backgrounds, and physics-driven micro-interactions built with Tailwind
        CSS &amp; Framer Motion.
      </motion.p>

      {/* CTA Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-3.5 mb-16"
      >
        <a
          href="#components"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/10"
        >
          Browse Components
        </a>
        <a
          href="#docs"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-md"
        >
          Documentation
        </a>
      </motion.div>

      {/* Live Interactive Background Preset Switcher Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-1.5"
      >
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 pl-3 hidden sm:inline-block">
          Active Theme
        </span>
        <div className="flex items-center gap-1 w-full sm:w-auto justify-center">
          {(Object.keys(PRESETS) as ThemePreset[]).map((key) => {
            const preset = PRESETS[key];
            const isSelected = activePreset === key;

            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelectPreset(preset.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="hero-active-preset-pill"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className="absolute inset-0 rounded-xl bg-white/15 border border-white/20 -z-0"
                  />
                )}
                <span
                  className="w-2 h-2 rounded-full relative z-10"
                  style={{ backgroundColor: preset.accentColor }}
                />
                <span className="relative z-10">{preset.name}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// 4. Complete Unified Showcase Component (Default Export)
// ============================================================================
export default function ReactBitsShowcase() {
  const [selectedPreset, setSelectedPreset] = useState<ThemePreset>("aurora");
  const [hoveredPreset, setHoveredPreset] = useState<ThemePreset | null>(null);

  // If hovering over a preset in dropdown, preview it live; otherwise use selected
  const activePreset = hoveredPreset || selectedPreset;

  return (
    <div className="min-h-screen text-white relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Dynamic Fluid Background reacting to menu hover / selection */}
      <DynamicBackground activePreset={activePreset} />

      {/* 2. Glassmorphic Navigation Bar with floating dropdown */}
      <ReactBitsNavbar
        activePreset={selectedPreset}
        onSelectPreset={setSelectedPreset}
        onHoverPreset={setHoveredPreset}
      />

      {/* 3. Hero Section */}
      <main>
        <ReactBitsHero
          activePreset={selectedPreset}
          onSelectPreset={setSelectedPreset}
        />
      </main>
    </div>
  );
}

