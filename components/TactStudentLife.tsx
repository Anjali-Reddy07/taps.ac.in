"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TactStudentLife() {
  const [activeItem, setActiveItem] = useState(0);

  const activities = [
    {
      title: "APPER Coding Club & Hackathons",
      badge: "Flagship Programming Club",
      desc: "TAPS' official coding club organizing 24-hour hackathons, algorithmic sprints, and open-source challenges solving real-world enterprise software problems.",
      icon: "💻",
      image: "/images/drive_fourth/hack_day.png",
    },
    {
      title: "Analytics & Strategy Clubs",
      badge: "Data-Driven Decision Making",
      desc: "Analytics Club enables students to take data-driven decisions, while Strategy Club prepares students to act as strategic advisors and business consultants.",
      icon: "📊",
      image: "/images/drive_fourth/brain_logic_club.png",
    },
    {
      title: "Fintech & Sustainability Clubs",
      badge: "Emerging Industry Specialization",
      desc: "Fintech Club prepares students for careers in the financial technology ecosystem, while Sustainability Club equips them to implement sustainable ESG business practices.",
      icon: "🌱",
      image: "/images/drive_fourth/cloud_club.png",
    },
    {
      title: "Kartavya Social Society",
      badge: "Community & Social Outreach",
      desc: "An active student-led volunteer society committed to community welfare, disaster relief drives, blood donation camps, and environmental plantation across Bhubaneswar.",
      icon: "🧘",
      image: "/images/drive_fourth/kartavya_club.png",
    },
    {
      title: "Cyber Security & Cloud Hub",
      badge: "Specialized Student Chapters",
      desc: "Hands-on network vulnerability testing, ethical hacking, and virtualization workshops led by senior student mentors and faculty leads.",
      icon: "🛡️",
      image: "/images/drive_fourth/cyber_security_club.png",
    },
    {
      title: "Trifest & Cultural Fests",
      badge: "Annual Flagship Festival",
      desc: "The premier multi-day spring festival uniting sports tournaments, coding hackathons, literary debates, fine arts, and vibrant cultural music nights.",
      icon: "🎉",
      image: "/images/drive_second/Activities.jpg",
    },
    {
      title: "In-Campus Hostels",
      badge: "In-Campus Residential Living",
      desc: "Three in-campus hostels accommodating 1,200 students with spacious furnished rooms, 24/7 Wi-Fi, hygienic mess, and medical dispensary.",
      icon: "🏢",
      image: "/images/drive_new/1414409430Capture.webp",
    },
    {
      title: "Sports & Athletics Arena",
      badge: "Athletics & Physical Wellness",
      desc: "Floodlit full-scale basketball court, cricket pitch, athletic turf, sprint tracks, volleyball, gymnasium, and outdoor recreation walkway.",
      icon: "🏀",
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
    },
  ];

  return (
    <section id="student-life" className="relative py-20 sm:py-24 lg:py-32 bg-transparent overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
            Student Life
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Life Beyond the Classroom
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Festivals, clubs, sports and social service. Campus life at TAPS is where foundational learning turns into leadership, teamwork, and lifelong friendships.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Campus Life Showcase Image Card */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            <div className="relative rounded-3xl overflow-hidden border border-indigo-100 shadow-2xl bg-[#070D21] group hover-lift">
              <div className="relative h-[380px] sm:h-[440px] w-full">
                <Image
                  key={activities[activeItem].image}
                  src={activities[activeItem].image}
                  alt={activities[activeItem].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[10%] group-hover:grayscale-0 animate-fadeIn"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/95 via-[#070D21]/40 to-transparent" />

                {/* Floating Active Item Badge */}
                <div key={activities[activeItem].title} className="absolute bottom-6 left-6 right-6 text-white animate-fadeIn">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2 shadow-xs">
                    <span>{activities[activeItem].badge}</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    {activities[activeItem].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 line-clamp-2 font-light">
                    {activities[activeItem].desc}
                  </p>
                </div>

                {/* Campus Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-blue-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-indigo-100 shadow-sm">
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
                      ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 translate-x-1"
                      : "bg-white/90 border-indigo-100 hover:border-indigo-300 shadow-xs hover-lift"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-indigo-100 shrink-0">
                      {act.icon}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                          {act.title}
                        </h4>
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isSelected ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-indigo-50 text-indigo-700"
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
                className="text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
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
