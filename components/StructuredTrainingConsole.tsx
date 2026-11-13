"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import SpeedometerCounter from "@/components/SpeedometerCounter";

export interface TrainingModule {
  name: string;
  tag: string;
  desc: string;
  topics?: string[];
  mastery?: number;
}

export interface TrainingPhase {
  tier: string;
  step: string;
  shortTitle: string;
  title: string;
  year: string;
  focus: string;
  statValue: string;
  statSuffix: string;
  statLabel: string;
  icon: string;
  accent: string;
  glowColor: string;
  desc: string;
  highlightChips: string[];
  modules: TrainingModule[];
  terminalType: "algo" | "bootcamp" | "capstone" | "ppo";
}

interface StructuredTrainingConsoleProps {
  phases: TrainingPhase[];
  onOpenQuery?: () => void;
}

export default function StructuredTrainingConsole({
  phases,
  onOpenQuery,
}: StructuredTrainingConsoleProps) {
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [showFullRoadmap, setShowFullRoadmap] = useState(false);
  const [selectedBootcampTrack, setSelectedBootcampTrack] = useState(0);
  const [activeTab, setActiveTab] = useState<"console" | "radar">("console");

  const total = phases.length;
  const current = phases[activePhase];

  // Auto-tour progression timer (6 seconds per stage)
  const autoPlayDuration = 6500;
  useEffect(() => {
    if (!isPlaying || showFullRoadmap) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % total);
      setExpandedModule(null);
    }, autoPlayDuration);
    return () => clearInterval(interval);
  }, [isPlaying, total, showFullRoadmap, activePhase]);

  // Spotlight mouse effect
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative select-none overflow-hidden"
    >
      {/* Dynamic Cursor Following Holographic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 sm:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) =>
              `radial-gradient(650px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent 75%)`
          ),
        }}
      />

      {/* Cybernetic Grid Mesh Layer */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" 
      />

      {/* ========================================================================= */}
      {/* CONSOLE CONTROLS & DUAL-VIEW TOGGLE */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200/80">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Interactive Stage • Phase 0{activePhase + 1} of 0{total}</span>
          </div>

          {/* Autoplay Play/Pause Toggle */}
          {!showFullFullRoadmapCheck(showFullRoadmap) && (
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-700 shadow-2xs cursor-pointer transition-colors"
              title={isPlaying ? "Pause Automated Pipeline Tour" : "Resume Automated Pipeline Tour"}
            >
              <span>{isPlaying ? "⏸ Pause Tour" : "▶ Auto Tour"}</span>
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-100 border border-zinc-200/80 self-start sm:self-auto shrink-0 shadow-xs">
          <button
            type="button"
            onClick={() => {
              setShowFullRoadmap(false);
              setIsPlaying(true);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
              !showFullRoadmap
                ? "bg-zinc-950 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
            }`}
          >
            ✨ Interactive Stage
          </button>
          <button
            type="button"
            onClick={() => {
              setShowFullRoadmap(true);
              setIsPlaying(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
              showFullRoadmap
                ? "bg-zinc-950 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
            }`}
          >
            📋 Complete 4-Year Rail
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ADVANCED ANIMATED MILESTONE NAVIGATION TRACK WITH LASER PROGRESS */}
      {/* ========================================================================= */}
      <div className="relative mb-12">
        {/* Background Connecting High-Tech Laser Tube */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-zinc-200 hidden md:block" />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {phases.map((phase, idx) => {
            const isCurrent = activePhase === idx && !showFullRoadmap;
            return (
              <button
                key={phase.tier}
                type="button"
                onClick={() => {
                  setActivePhase(idx);
                  setShowFullRoadmap(false);
                  setIsPlaying(false);
                  setExpandedModule(null);
                }}
                className={`relative p-4 sm:p-4.5 rounded-2xl text-left transition-all duration-300 cursor-pointer group overflow-hidden ${
                  isCurrent
                    ? "bg-zinc-950 text-white shadow-xl scale-[1.02] ring-2 ring-blue-500/80"
                    : "bg-white/85 hover:bg-white border border-zinc-200/90 text-zinc-900 shadow-2xs hover:shadow-md"
                }`}
              >
                {/* Laser Fill Line for Current Active Stage (when playing) */}
                {isCurrent && isPlaying && (
                  <motion.div
                    key={`laser-fill-${activePhase}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: autoPlayDuration / 1000, ease: "linear" }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      isCurrent ? "text-cyan-400" : "text-blue-600 group-hover:text-blue-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCurrent ? "bg-cyan-400 animate-pulse" : "bg-blue-600"
                      }`}
                    />
                    Phase 0{idx + 1}
                  </span>
                  <span className="text-base sm:text-lg">{phase.icon}</span>
                </div>

                <div className="text-xs sm:text-sm font-bold truncate tracking-tight">
                  {phase.shortTitle}
                </div>
                <div
                  className={`text-[10px] font-mono mt-0.5 truncate ${
                    isCurrent ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {phase.year}
                </div>

                {/* Subtitle Accent Line on Hover */}
                {!isCurrent && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE STAGE VIEW (ANIMATED HUD & MATRIX) */}
      {/* ========================================================================= */}
      {!showFullRoadmap && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT COLUMN: NARRATIVE + LIVE INTERACTIVE SIMULATION TERMINAL */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                    {current.tier}
                  </span>
                  <span className="text-xs font-mono font-semibold text-zinc-500">
                    {current.year}
                  </span>
                </div>

                {/* Live Speedometer Counter */}
                <div className="flex items-baseline gap-2.5 mt-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-mono font-black text-blue-600 tracking-tight">
                    <SpeedometerCounter value={current.statValue} duration={1.1} />
                    {current.statSuffix}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    • {current.statLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-snug">
                  {current.title}
                </h3>
                <div className="text-xs font-mono text-indigo-600 font-semibold mt-1">
                  {current.focus}
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* LIVE SIMULATION HUD TERMINAL */}
              <div className="rounded-2xl bg-zinc-950 border border-zinc-800 text-white shadow-2xl overflow-hidden">
                {/* Terminal Window Header Bar */}
                <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-zinc-400 pl-2">
                      taps@carrier-console:~/{current.step.toLowerCase()}
                    </span>
                  </div>
                  <span className="text-cyan-400 font-bold uppercase tracking-widest text-[9px] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Terminal Content Switcher based on Phase */}
                <div className="p-4 sm:p-5 font-mono text-xs space-y-3">
                  {current.terminalType === "algo" && (
                    <div className="space-y-2">
                      <div className="text-zinc-400 text-[11px] flex justify-between items-center border-b border-zinc-800/80 pb-2">
                        <span>SUITE: LeetCode &amp; HackerRank Benchmark</span>
                        <span className="text-emerald-400">STATUS: PROCTORED</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-2">
                        <span className="text-cyan-400">▶</span>
                        <span>[TEST-01] Dynamic Programming: Memoization &amp; Tabulation</span>
                        <span className="text-zinc-500 ml-auto">0.3ms</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-2">
                        <span className="text-cyan-400">▶</span>
                        <span>[TEST-02] Graph Traversal: BFS / DFS &amp; Disjoint Sets</span>
                        <span className="text-zinc-500 ml-auto">0.8ms</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-2">
                        <span className="text-cyan-400">▶</span>
                        <span>[TEST-03] Tree Balancing: AVL &amp; Segment Trees</span>
                        <span className="text-zinc-500 ml-auto">0.4ms</span>
                      </div>
                      <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-300 flex items-center justify-between">
                        <span>Cohort Benchmark Score: <strong className="text-cyan-300">Top 5%</strong></span>
                        <span className="text-blue-400 font-bold">142/142 Passed</span>
                      </div>
                    </div>
                  )}

                  {current.terminalType === "bootcamp" && (
                    <div className="space-y-2.5">
                      <div className="flex gap-1.5 pb-2 border-b border-zinc-800 overflow-x-auto text-[10px]">
                        {["Python & ML", "Java Spring Boot", "React 19 / Node", "Cloud DevOps"].map((trk, i) => (
                          <button
                            key={trk}
                            type="button"
                            onClick={() => setSelectedBootcampTrack(i)}
                            className={`px-2.5 py-0.5 rounded-md cursor-pointer transition-colors ${
                              selectedBootcampTrack === i
                                ? "bg-blue-600 text-white font-bold"
                                : "bg-zinc-900 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {trk}
                          </button>
                        ))}
                      </div>
                      <div className="text-cyan-300 text-[11px]">
                        $ docker-compose up --build {["ml-engine", "spring-api", "react-client", "cloud-cluster"][selectedBootcampTrack]}
                      </div>
                      <div className="text-zinc-300 text-[11px] leading-relaxed">
                        {selectedBootcampTrack === 0 && "✔ Pandas, Scikit-Learn pipelines deployed in Block 5 Analytics Lab."}
                        {selectedBootcampTrack === 1 && "✔ Enterprise Spring Boot microservices, Hibernate ORM & PostgreSQL container active."}
                        {selectedBootcampTrack === 2 && "✔ React 19 Server Components, Edge handlers & Tailwind CSS interface compiled."}
                        {selectedBootcampTrack === 3 && "✔ CI/CD Docker image builds, automated GitHub Actions deployment verified."}
                      </div>
                      <div className="text-emerald-400 text-[10px] pt-1">
                        ● CONTAINER HEALTH: 100% OPERATIONAL • BLOCK 5 CLOUD COMPUTING SUITE
                      </div>
                    </div>
                  )}

                  {current.terminalType === "capstone" && (
                    <div className="space-y-2">
                      <div className="text-zinc-400 text-[11px] flex justify-between items-center border-b border-zinc-800/80 pb-2">
                        <span>INDUSTRY SPRINT: Real-Time Corporate Capstone</span>
                        <span className="text-cyan-400">SPRINT 04/04</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-zinc-200">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Architecture Defense &amp; Code Review
                          </span>
                          <span className="text-emerald-400">PASSED</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-200">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Corporate Tech Lead 1:1 Sign-Off
                          </span>
                          <span className="text-emerald-400">VERIFIED</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-200">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Prototype Cloud Demo to Enterprise Jury
                          </span>
                          <span className="text-emerald-400">COMPLETED</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-zinc-400 pt-1.5 border-t border-zinc-800 flex justify-between">
                        <span>Evaluation Board: Tier-1 Tech Leads</span>
                        <span className="text-cyan-300">Grade: A+ Distinction</span>
                      </div>
                    </div>
                  )}

                  {current.terminalType === "ppo" && (
                    <div className="space-y-2">
                      <div className="text-zinc-400 text-[11px] flex justify-between items-center border-b border-zinc-800/80 pb-2">
                        <span>PPO PIPELINE: Corporate Placement Matchmaker</span>
                        <span className="text-amber-400 font-bold">94% CONVERSION</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                          <div className="text-zinc-400 text-[9px] uppercase">Corporate Clearance</div>
                          <div className="text-emerald-400 font-bold mt-0.5">✔ 100% Verified</div>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                          <div className="text-zinc-400 text-[9px] uppercase">HR Panel Rounds</div>
                          <div className="text-cyan-400 font-bold mt-0.5">Cleared (GD Suite)</div>
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-300 pt-1">
                        Direct PPO Alliances: <strong className="text-white">TCS, CISCO, Persistent, Cloudbite &amp; Infosys</strong>.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Execution Highlights */}
              <div className="space-y-2 pt-2 border-t border-zinc-200/80">
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Academic &amp; Placement Outcomes
                </div>
                {current.highlightChips.map((chip, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span className="font-medium leading-relaxed">{chip}</span>
                  </div>
                ))}
              </div>

              {onOpenQuery && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenQuery}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-blue-600 text-white text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <span>Inquire About Curriculum Details</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: INTERACTIVE MODULE CARDS WITH MASTERY GAUGES & SYLLABUS EXPANSION */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3 flex items-center justify-between border-b border-zinc-200/80 pb-2">
                <span>Curriculum Modules &amp; Deliverables</span>
                <span className="text-blue-600 font-mono">Click card to inspect</span>
              </div>

              <div className="space-y-3">
                {current.modules.map((mod, idx) => {
                  const isExpanded = expandedModule === idx;
                  const masteryPercentage = mod.mastery || [98, 95, 92, 96][idx % 4];

                  return (
                    <motion.div
                      key={mod.name}
                      layout
                      onClick={() => setExpandedModule(isExpanded ? null : idx)}
                      className={`relative p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group ${
                        isExpanded
                          ? "bg-white border-blue-400 shadow-lg ring-1 ring-blue-500/30"
                          : "bg-white/80 hover:bg-white border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-blue-300"
                      }`}
                    >
                      {/* Top Bar of Module Card */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80 shrink-0">
                            0{idx + 1}
                          </span>
                          <div>
                            <div className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors leading-snug">
                              {mod.name}
                            </div>
                            <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed font-normal">
                              {mod.desc}
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1.5">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                            {mod.tag}
                          </span>
                          <span className="text-zinc-400 text-xs transition-transform duration-200 group-hover:text-blue-600">
                            {isExpanded ? "▲" : "▼"}
                          </span>
                        </div>
                      </div>

                      {/* Animated Mastery Progress Line */}
                      <div className="mt-3.5 pt-2.5 border-t border-zinc-100 flex items-center justify-between gap-3 text-[11px] font-mono text-zinc-500">
                        <span>Cohort Proficiency Benchmark</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 sm:w-28 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${masteryPercentage}%` }}
                              transition={{ duration: 0.8, delay: 0.1 * idx }}
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                            />
                          </div>
                          <span className="font-bold text-zinc-800">{masteryPercentage}%</span>
                        </div>
                      </div>

                      {/* Expandable Syllabus Detail Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="mt-3.5 pt-3 border-t border-zinc-100 text-xs space-y-2 text-zinc-600"
                          >
                            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                              Core Academic Competencies &amp; Lab Defense:
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span>Supervised Lab Practicals</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <span>Weekly Benchmark Assessments</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                <span>1:1 Faculty Feedback Review</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                <span>Placement Readiness Clearance</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                <span>Verified Academic Progression</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Faculty Supervised &amp; Evaluated
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* ========================================================================= */}
      {/* COMPLETE 4-YEAR RAIL VIEW (EXPANSIVE HIGH-TECH TIMELINE) */}
      {/* ========================================================================= */}
      {showFullRoadmap && (
        <div className="relative border-l-2 border-blue-500/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-14 animate-fadeInUp">
          {phases.map((phase, idx) => (
            <div key={phase.tier} className="relative group">
              {/* Glowing High-Tech Timeline Node */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-mono font-bold ring-4 ring-white shadow-md">
                {idx + 1}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Phase Title & Meta */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-600 text-white">
                      {phase.tier}
                    </span>
                    <span className="text-xs font-mono font-semibold text-zinc-500">
                      {phase.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {phase.desc}
                  </p>
                  <div className="text-xs font-mono text-blue-600 font-semibold pt-1">
                    Key Metric: {phase.statValue}{phase.statSuffix} • {phase.statLabel}
                  </div>
                </div>

                {/* Right: Modules Matrix */}
                <div className="lg:col-span-7 divide-y divide-zinc-200/80 border-y border-zinc-200/80">
                  {phase.modules.map((mod, i) => (
                    <div key={i} className="py-3 px-2 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                          0{i + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                          {mod.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md shrink-0">
                        {mod.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function showFullFullRoadmapCheck(roadmap: boolean) {
  return roadmap;
}
