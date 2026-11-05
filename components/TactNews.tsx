"use client";

import Image from "next/image";
import Link from "next/link";

export default function TactNews() {
  const events = [
    {
      date: "12 Oct 2026",
      title: "Expert Talk on Full-Stack Cloud Architecture & Cyber Security",
      category: "Technical Workshop",
      desc: "Distinguished alumni from Tier-1 tech firms conduct hands-on cloud deployment sessions for BCA and BBA students.",
      href: "#notices",
    },
    {
      date: "22 Sep 2026",
      title: "Utkal University Inter-College Academic & Cultural Carnival 2026",
      category: "University Event",
      desc: "TAPS students clinch top honors in Business Plan presentations, coding hackathons, and managerial symposiums.",
      href: "#notices",
    },
    {
      date: "17 Sep 2026",
      title: "Inauguration of AKASHYAAN & PARAKRAM Student Innovation Cells",
      category: "Innovation Cell",
      desc: "Dedicated incubation wings launched for undergraduate research in generative intelligence, fintech modeling, and data analytics.",
      href: "#notices",
    },
  ];

  return (
    <section id="notices" className="relative py-16 sm:py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14 animate-fadeInUp">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-2 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
              What’s Happening
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              News &amp; Events
            </h2>
          </div>

          <Link
            href="#notices"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors active:scale-95"
          >
            <span>All News &amp; Circulars</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Featured Story Card */}
          <div className="lg:col-span-7 bg-white/95 border border-indigo-100 hover:border-indigo-400 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover-lift">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/images/drive_second/IMG_5567.JPG"
                alt="Student Keynote Address at Trident Academic Symposium"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/95 via-[#070D21]/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-md">
                  Featured Story
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs sm:text-sm text-blue-200 font-semibold tracking-wide">
                  14 September 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1.5 leading-snug">
                  TAPS Celebrates Annual Orientation &amp; Academic Honours with Festive Spirit
                </h3>
              </div>
            </div>

            <div className="p-7 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Faculty, staff, and scholars of Trident Academy of Professional Studies (TAPS) gathered to celebrate the commencement of the new academic session, felicitating merit scholarship winners and inaugurating the 2026 corporate internship chapters.
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-indigo-100">
                <span className="text-xs sm:text-sm text-slate-900 font-semibold">
                  Organized by: Academic &amp; Cultural Council
                </span>
                <Link
                  href="#notices"
                  className="text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 group/btn"
                >
                  <span>Read Full Story</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Event List Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {events.map((evt) => (
              <div
                key={evt.title}
                className="bg-white/95 border border-indigo-100 hover:border-indigo-400 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between hover-lift shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full">
                      {evt.category}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">{evt.date}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2">
                    {evt.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-indigo-50 flex items-center justify-end">
                  <Link
                    href={evt.href}
                    className="text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    <span>Read circular</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
