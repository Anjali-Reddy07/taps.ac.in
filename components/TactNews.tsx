"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TactNews() {
  const events = [
    {
      date: "12 Oct 2026",
      title: "Expert Talk on Full-Stack Cloud Architecture & Cyber Security",
      category: "Technical Workshop",
      desc: "Distinguished alumni from Tier-1 tech firms conduct hands-on cloud deployment sessions for BCA and BBA students.",
      href: "/notices",
    },
    {
      date: "22 Sep 2026",
      title: "Utkal University Inter-College Academic & Cultural Carnival 2026",
      category: "University Event",
      desc: "TAPS students clinch top honors in Business Plan presentations, coding hackathons, and managerial symposiums.",
      href: "/notices",
    },
    {
      date: "17 Sep 2026",
      title: "Inauguration of AKASHYAAN & PARAKRAM Student Innovation Cells",
      category: "Innovation Cell",
      desc: "Dedicated incubation wings launched for undergraduate research in generative intelligence, fintech modeling, and data analytics.",
      href: "/notices",
    },
  ];

  return (
    <section id="notices" className="relative py-16 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-2 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>What’s Happening</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              News &amp; Events
            </h2>
          </div>

          <Link
            href="/notices"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors active:scale-95 group"
          >
            <span>All News &amp; Circulars</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Split Grid - Cardless Editorial Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Featured Story (Open Editorial Layout, No Outer Card Enclosure) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col group relative"
          >
            {/* Featured Image Window */}
            <div className="relative h-72 sm:h-84 md:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-zinc-200/80">
              <Image
                src="/images/drive_second/IMG_5567.JPG"
                alt="Student Keynote Address at Trident Academic Symposium"
                fill
                loading="lazy"
                quality={90}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/95 via-[#070D21]/45 to-transparent" />
              
              {/* Floating Featured Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
                  <span>Featured Story</span>
                </span>
                <span className="bg-[#070D21]/80 backdrop-blur-md text-blue-200 text-[10px] font-mono px-2.5 py-1 rounded-full border border-blue-400/30">
                  Infocity Campus
                </span>
              </div>

              {/* Headline Directly Over Image Scrim */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono font-semibold tracking-wide mb-1.5">
                  <span>14 September 2026</span>
                  <span>•</span>
                  <span>Annual Convocation &amp; Honours</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-tight group-hover:text-cyan-100 transition-colors">
                  TAPS Celebrates Annual Orientation &amp; Academic Honours with Festive Spirit
                </h3>
              </div>
            </div>

            {/* Content Body - Open Editorial Flow */}
            <div className="pt-6 space-y-5">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Faculty, staff, and scholars of Trident Academy of Professional Studies (TAPS) gathered to celebrate the commencement of the new academic session, felicitating merit scholarship winners and inaugurating the 2026 corporate internship chapters.
              </p>

              {/* Story Highlights Hairline Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="pl-4 py-1 border-l-2 border-blue-600">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">50+ Merit Scholarships</div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Scholars felicitated across BCA &amp; BBA departments.
                  </div>
                </div>

                <div className="pl-4 py-1 border-l-2 border-indigo-600">
                  <div className="text-xs font-bold text-slate-900 mb-0.5">Corporate Induction</div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Readiness keynotes delivered by senior corporate leaders.
                  </div>
                </div>
              </div>

              {/* Bottom Cardless Bar */}
              <div className="pt-4 flex items-center justify-between border-t border-zinc-200/80">
                <span className="text-xs text-slate-500 font-medium">
                  Organized by: <strong className="text-slate-800 font-semibold">Academic &amp; Cultural Council</strong>
                </span>
                <Link
                  href="/notices"
                  className="text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5 group/btn"
                >
                  <span>Read Full Story</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Cardless Event Stream (Hairline Divided) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Event Photo Aperture */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-44 rounded-2xl overflow-hidden border border-zinc-200/80 group bg-slate-950"
            >
              <Image
                src="/images/drive_second/alumni2.jpg"
                alt="Academic Medal Felicitation"
                fill
                loading="lazy"
                quality={90}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                  Merit Honours
                </span>
                <div className="text-sm font-bold mt-0.5 group-hover:text-cyan-200 transition-colors">
                  Silver Medal of Distinction Felicitation Ceremony
                </div>
              </div>
            </motion.div>

            {/* Seamless Hairline Divided Event Feed (No Isolated Boxes) */}
            <div className="divide-y divide-zinc-200/80 border-t border-b border-zinc-200/80">
              {events.map((evt, idx) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.08 }}
                  className="py-5 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                        {evt.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{evt.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-1">
                      {evt.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {evt.desc}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-end">
                    <Link
                      href={evt.href}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group/btn"
                    >
                      <span>Read circular</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
