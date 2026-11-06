"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import StippleType from "@/components/StippleType";

export default function FacilitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    {
      id: "computer-lab",
      badge: "TECH INFRASTRUCTURE 01",
      title: "Advanced Computer Applications & AI Labs",
      subtitle: "600 Terminals • 1000 Mbps LAN & Internet Backbone",
      spec: "Equipped with state-of-the-art computer laboratories, campus-wide Local Area Network (LAN) and a wireless network backbone of 1000 Mbps (1:1). Features 600 systems with a 1:4 computer-to-student ratio for UG.",
      features: [
        "600 High-Performance Desktop Systems with 1:4 Ratio",
        "Campus-Wide 1000 Mbps (1:1) Leased Line Network",
        "Configured with Oracle, Visual Studio, Python & Linux SDKs",
        "Dedicated Power Backup with Central Online UPS Systems",
      ],
      image: "/images/drive/computer-lab.jpg",
    },
    {
      id: "smart-theatres",
      badge: "ACADEMICS 02",
      title: "Spacious ICT Classrooms & 400-Seat Auditorium",
      subtitle: "Smart Classrooms in Each of the Six Blocks",
      spec: "Spacious ICT enabled AC Classrooms, dedicated departmental seminar halls, and a 400-capacity central auditorium for institute-level presentations. Every department has access to smart classrooms in all six blocks.",
      features: [
        "ICT-Enabled AC Classrooms in All Six Blocks",
        "Central Air-Conditioned Auditorium of 400 Capacity",
        "Separate Departmental Seminar Halls & Chambers",
        "Interactive Digital Smart Boards & Cloud Archives",
      ],
      image: "/images/drive_third/ClassRooms_Academic.JPG",
    },
    {
      id: "central-library",
      badge: "RESEARCH 03",
      title: "TAPS Central Research Library",
      subtitle: "70,000+ Volumes • IEEE, Science Direct & ACM E-Journals",
      spec: "Considered the richest encyclopedia of books with above 70,000 text and reference volumes. Equipped with computer terminals for literature mining and access to Science Direct, IEEE, NPTEL, ISI, and ACM databases.",
      features: [
        "Over 70,000 Text & Reference Volumes on Display",
        "Access to Science Direct, IEEE, NPTEL, ISI & ACM Databases",
        "National & International Print Periodicals & Science Journals",
        "Dedicated Literature Mining Terminals with High-Speed Internet",
      ],
      image: "/images/drive_third/Library_Library.JPG",
    },
    {
      id: "hostels",
      badge: "RESIDENTIAL 04",
      title: "Three In-Campus Residential Hostels",
      subtitle: "1,200 Inmate Capacity • Separate Boys & Girls Wings",
      spec: "Three spacious in-campus hostels accommodating 1,200 students. Features well-furnished rooms, hygienic vegetarian & non-vegetarian mess, Wi-Fi coverage, hostel library, TV recreation hall, and 24/7 medical emergency care.",
      features: [
        "Spacious Well-Furnished Rooms (1,200 Inmate Capacity)",
        "Hygienic Vegetarian & Non-Vegetarian Mess Facility",
        "Wi-Fi Coverage, Hostel Library & Indoor Recreation Hall with TV",
        "Medical Dispensary with On-Call Doctor, Pharmacist & Emergency Vehicle",
      ],
      image: "/images/drive/hostel-residential.jpg",
    },
    {
      id: "food-court",
      badge: "AMENITY 05",
      title: "Centralized Multi-Cuisine Food Court",
      subtitle: "Round-the-Clock Dining & Refreshment Hub",
      spec: "Centralized food court providing round-the-clock breakfast, lunch, and dinner with South Indian snacks, Odia thalis, and continental refreshments. Located in close proximity to Infocity cafes like CCD and Barista.",
      features: [
        "Round-the-Clock Breakfast, Lunch, Evening Snacks & Dinner",
        "Dedicated Cafeteria & Dining Hall for TACT Students",
        "Hygienic Stainless Steel Kitchen & Quality Water Filtration",
        "Close Proximity to Infocity Cafes (CCD, Barista, Berrys)",
      ],
      image: "/images/drive/cafeteria.jpg",
    },
    {
      id: "transport",
      badge: "LOGISTICS 06",
      title: "City Transport Bus Fleet (Routes I to VI)",
      subtitle: "Dedicated Fleet Connecting Entire Bhubaneswar City",
      spec: "The college operates its own transport facility running across 6 designated routes throughout Bhubaneswar City, ensuring punctual, safe, and comfortable daily transit for day scholars.",
      features: [
        "Dedicated Fleet Operating on Routes I, II, III, IV, V & VI",
        "Connecting All Major City Intersections and Residential Hubs",
        "Experienced Drivers & Conductors for Safe Transit",
        "Annual Bus Fee of ₹20,000 Across All Approved Routes",
      ],
      image: "/images/drive_third/Facilities_transportation.png",
    },
    {
      id: "sports-grounds",
      badge: "ATHLETICS 07",
      title: "Infocity Sports Arenas & Grounds",
      subtitle: "Full-Scale Cricket, Football, Volleyball & Indoor Games",
      spec: "Lush green athletic grounds hosting annual university sports meets, inter-college cricket leagues, basketball tournaments, badminton courts, and indoor recreation halls.",
      features: [
        "Full-Size Cricket Field & Football Turf",
        "Standard Volleyball & Basketball Hardcourts",
        "Indoor Table Tennis, Chess & Carrom Chambers",
        "Modern Fitness Gymnasium with Certified Trainer",
      ],
      image: "/images/drive_third/Sports_IMG20260205104055.jpg",
    },
    {
      id: "campus-walkway",
      badge: "CAMPUS 08",
      title: "11-Acre Technoplex Botanical Walkway",
      subtitle: "Green Eco-Friendly Institutional Sanctuary",
      spec: "Paved central promenade connecting academic blocks with hostel pavilions, shaded by mature trees, landscaping, and open-air discussion plazas.",
      features: [
        "Zero-Noise Academic Zone Directly Inside Infocity",
        "Pedestrian-First Paved Walkways and Pergolas",
        "Solar Street Lighting & Rainwater Harvesting",
        "24/7 Security Gate Checks & Perimeter CCTV",
      ],
      image: "/images/drive/campus-walkway.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Life & Cultural Fest Stage Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/facilities-concert-hero.jpg"
              alt="TAPS Campus Fest, Cultural Performances & Student Life"
              fill
              priority
              className="object-cover object-[68%_40%] filter contrast-105 saturate-110 opacity-95 scale-100"
              sizes="100vw"
            />
            {/* Smooth one-sided scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/95 via-[#070D21]/60 via-35% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/50 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Campus Infrastructure &amp; Amenities
              </div>
              <div className="mb-6">
                <StippleType
                  text="11-Acre Modern Technoplex in Infocity"
                  as="h1"
                  className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white"
                />
              </div>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                From high-density cloud computing labs to research libraries and comfortable on-campus residential hostels, 
                TAPS provides a world-class environment designed for academic rigor, innovation, and holistic living.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                >
                  Book a Campus Visit →
                </button>
                <Link
                  href="/admission"
                  className="px-6 py-3 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300"
                >
                  Admissions 2026 Guidelines
                </Link>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* 8 FACILITIES GRID: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Technoplex Amenities
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Designed for Focus, Discovery &amp; Community
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Take an immersive look at the institutional facilities supporting over 1,200 scholars every academic session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {facilities.map((f, idx) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group bg-white border border-zinc-200/90 hover:border-indigo-400 rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col card-sheen"
                >
                  {/* Image Container with Zoom Effect */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase font-semibold text-zinc-200 border border-white/20">
                        {f.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-0.5 group-hover:text-cyan-200 transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-xs text-zinc-300 font-light">
                        {f.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                      {f.spec}
                    </p>

                    <div className="border-t border-zinc-100 pt-5 space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>Key Specifications:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {f.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                            <span className="font-normal leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>
        </AnimatedBackground>

        {/* BOTTOM CTA: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800">
          <section className="py-16 sm:py-20 max-w-5xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl sm:text-4xl font-light text-white mb-4 tracking-tight">
              Experience the Technoplex in Person
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Prospective students and guardians are welcome to visit our Infocity campus, inspect the computing labs, 
              library, and residential hostels, and interact with the faculty mentors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-md cursor-pointer"
              >
                Schedule Guided Campus Visit
              </button>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-zinc-900 text-white border border-zinc-700 font-semibold text-sm hover:border-zinc-400 transition-colors"
              >
                Directions &amp; Map
              </Link>
            </div>
          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

