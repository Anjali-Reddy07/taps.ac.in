"use client";

import { motion } from "framer-motion";
import SpeedometerCounter from "./SpeedometerCounter";

export interface StatItem {
  value: string;
  label: string;
  sub: string;
}

interface PlacementStatCardsProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { value: "138+", label: "Recruiters (2026)", sub: "Placements 2026" },
  { value: "260", label: "Recruiters (2025)", sub: "Placements 2025" },
  { value: "112", label: "Recruiters (2024)", sub: "Placements 2024" },
  { value: "102", label: "Recruiters (2023)", sub: "Placements 2023" },
];

/**
 * PlacementStatCards
 * Responsive 4-column statistical card grid showcasing placement and recruitment numbers
 * powered by the fast-spinning speedometer motion-blur counter.
 */
export default function PlacementStatCards({
  stats = defaultStats,
  className = "",
}: PlacementStatCardsProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 py-4 ${className}`}>
      {stats.map((s, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="p-6 text-center relative group"
        >
          {/* Speedometer Rolling Counter with Motion Blur */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight mb-2.5 font-serif group-hover:text-blue-700 transition-colors flex items-center justify-center">
            <SpeedometerCounter
              value={s.value}
              duration={2.0}
              delay={0.15 + idx * 0.1}
              maxBlur={8}
              className="text-slate-950 group-hover:text-blue-700"
              suffixClassName="text-blue-600 group-hover:text-blue-800"
            />
          </div>

          {/* Category Label */}
          <div className="text-xs sm:text-sm font-semibold text-slate-900 mb-1 tracking-tight">
            {s.label}
          </div>

          {/* Subtitle / Verification Tag */}
          <div className="text-[11px] text-slate-500 font-normal">
            {s.sub}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
