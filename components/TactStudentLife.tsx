"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TactStudentLife() {
  const [activeItem, setActiveItem] = useState(0);

  const activities = [
    {
      title: "Trifest",
      badge: "Annual Flagship Festival",
      desc: "The premier multi-day spring festival uniting sports tournaments, coding hackathons, literary debates, fine arts, and vibrant cultural music nights.",
      icon: "🎉",
      image: "/images/drive/trifest-celebration.jpg",
    },
    {
      title: "Kartavya",
      badge: "Community & Social Outreach",
      desc: "An active student-led volunteer society committed to community welfare, disaster relief drives, blood donation camps, and environmental plantation.",
      icon: "🤝",
      image: "/images/drive/campus-grounds.jpg",
    },
    {
      title: "Hostels",
      badge: "In-Campus Residential Living",
      desc: "Dedicated, secure hostels for boys and girls accommodating over 1,200 students with spacious furnished rooms, 24/7 high-speed Wi-Fi, and warden care.",
      icon: "🏢",
      image: "/images/drive/hostel-residential.jpg",
    },
    {
      title: "Food Centers",
      badge: "Central Food Courts & Dining",
      desc: "Hygienic multi-cuisine cafeteria providing fresh, balanced breakfast, lunch, evening snacks, and dinner in a lively communal setting.",
      icon: "🍽️",
      image: "/images/drive/cafeteria.jpg",
    },
    {
      title: "Sports & Campus Grounds",
      badge: "Athletics & Physical Wellness",
      desc: "Full-size cricket ground, football turf, volleyball, basketball, badminton courts, indoor table tennis, gymnasium, and outdoor recreation walkway.",
      icon: "⚽",
      image: "/images/drive/campus-walkway.jpg",
    },
  ];

  return (
    <section id="facilities" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF]/60 to-white overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0020D6] font-bold mb-3">
            Student Life
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#001D4A] tracking-tight">
            Life Beyond the Classroom
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mt-3 font-normal leading-relaxed">
            Festivals, clubs, sports and social service. Campus life at TAPS is where foundational learning turns into leadership, teamwork, and lifelong friendships.
          </p>
        </div>

        {/* 2-Column Grid matching TACT Section 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Campus Life Showcase Image Card */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <div className="relative rounded-3xl overflow-hidden border border-blue-200/80 shadow-2xl bg-white group">
              <div className="relative h-[380px] sm:h-[440px] w-full">
                <Image
                  src={activities[activeItem].image}
                  alt={activities[activeItem].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/90 via-[#001D4A]/30 to-transparent" />

                {/* Floating Active Item Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <span>{activities[activeItem].badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    {activities[activeItem].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2 font-light">
                    {activities[activeItem].desc}
                  </p>
                </div>

                {/* Campus Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#001D4A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                  Infocity Campus • Patia
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Interactive Categories */}
          <div className="lg:col-span-6 space-y-3.5">
            {activities.map((act, index) => {
              const isSelected = index === activeItem;
              return (
                <div
                  key={act.title}
                  onClick={() => setActiveItem(index)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#0020D6] shadow-lg shadow-blue-600/10 translate-x-1"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-blue-200 shadow-xs"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-blue-50 border border-blue-100 shrink-0">
                      {act.icon}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg sm:text-xl font-bold text-[#001D4A]">
                          {act.title}
                        </h4>
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isSelected ? "bg-[#0020D6] text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          {act.badge}
                        </span>
                      </div>

                      <p className="text-sm sm:text-[15px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2 flex items-center justify-end">
              <Link
                href="/admission"
                className="text-xs font-bold uppercase tracking-wider text-[#0020D6] hover:text-[#0018b3] flex items-center gap-1.5"
              >
                <span>Explore All Campus Amenities</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

