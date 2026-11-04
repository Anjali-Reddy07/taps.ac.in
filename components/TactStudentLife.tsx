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
    <section id="student-life" className="relative py-20 sm:py-24 lg:py-32 bg-zinc-50 border-t border-zinc-200 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
            Student Life
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
            Life Beyond the Classroom
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
            Festivals, clubs, sports and social service. Campus life at TAPS is where foundational learning turns into leadership, teamwork, and lifelong friendships.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Campus Life Showcase Image Card */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-black group hover-lift">
              <div className="relative h-[380px] sm:h-[440px] w-full">
                <Image
                  key={activities[activeItem].image}
                  src={activities[activeItem].image}
                  alt={activities[activeItem].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] animate-fadeIn"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Floating Active Item Badge */}
                <div key={activities[activeItem].title} className="absolute bottom-6 left-6 right-6 text-white animate-fadeIn">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-zinc-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <span>{activities[activeItem].badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    {activities[activeItem].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 line-clamp-2 font-light">
                    {activities[activeItem].desc}
                  </p>
                </div>

                {/* Campus Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-200 shadow-sm">
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
                      ? "bg-white border-2 border-black shadow-xl translate-x-1"
                      : "bg-white border-zinc-200 hover:border-zinc-400 shadow-xs hover-lift"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-zinc-100 border border-zinc-200 shrink-0">
                      {act.icon}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg sm:text-xl font-bold text-zinc-900">
                          {act.title}
                        </h4>
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isSelected ? "bg-black text-white" : "bg-zinc-100 text-zinc-600"
                        }`}>
                          {act.badge}
                        </span>
                      </div>

                      <p className="text-sm sm:text-[15px] text-zinc-600 mt-1.5 leading-relaxed font-normal">
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
                className="text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-black flex items-center gap-1.5"
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
