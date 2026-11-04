"use client";

import Image from "next/image";
import Link from "next/link";

export default function TactNews() {
  const events = [
    {
      date: "12 Oct 2026",
      title: "Expert Talk on Full-Stack Cloud Architecture & Cyber Security",
      category: "Technical Workshop",
      desc: "Distinguished alumni from Tier-1 tech firms conduct hands-on cloud deployment sessions for BCA and B.Sc Computer Science students.",
      href: "#notices",
    },
    {
      date: "22 Sep 2026",
      title: "Utkal University Inter-College Academic & Cultural Carnival 2026",
      category: "University Event",
      desc: "TAPS students clinch top honors in Business Plan presentations, coding hackathons, and scientific research symposiums.",
      href: "#notices",
    },
    {
      date: "17 Sep 2026",
      title: "Inauguration of AKASHYAAN & PARAKRAM Student Innovation Cells",
      category: "Innovation Cell",
      desc: "Dedicated incubation wings launched for undergraduate research in generative intelligence, fintech modeling, and bioinformatics.",
      href: "#notices",
    },
  ];

  return (
    <section id="notices" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-50/80 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#0020D6] font-bold mb-2">
              What’s Happening
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#001D4A] tracking-tight">
              News &amp; Events
            </h2>
          </div>

          <Link
            href="#notices"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0020D6] hover:text-[#0018b3] transition-colors"
          >
            <span>All News &amp; Circulars</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Split Grid matching TACT Section 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Featured Story Card */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-blue-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/asset/campus-banner.png"
                alt="Featured Story Campus Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/90 via-[#001D4A]/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-[#0020D6] text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-md">
                  Featured Story
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-sky-300 font-semibold tracking-wide">
                  14 September 2026
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-1 leading-snug">
                  TAPS Celebrates Annual Orientation &amp; Academic Honours with Festive Spirit
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Faculty, staff, and scholars of Trident Academy of Professional Studies (TAPS) gathered to celebrate the commencement of the new academic session, felicitating merit scholarship winners and inaugurating the 2026 corporate internship chapters.
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#001D4A] font-semibold">
                  Organized by: Academic &amp; Cultural Council
                </span>
                <Link
                  href="#notices"
                  className="text-xs font-bold text-[#0020D6] hover:text-[#0018b3] inline-flex items-center gap-1 group/btn"
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
                className="bg-white border border-blue-100 rounded-2xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#0020D6] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      {evt.category}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">{evt.date}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#001D4A] group-hover:text-[#0020D6] transition-colors leading-snug mb-2">
                    {evt.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    href={evt.href}
                    className="text-xs font-bold text-[#0020D6] hover:text-[#0018b3] flex items-center gap-1"
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

