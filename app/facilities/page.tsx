"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function FacilitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    {
      id: "computer-lab",
      badge: "TECH INFRASTRUCTURE 01",
      title: "Advanced Computer Applications & AI Labs",
      subtitle: "High-Density Virtualization Clusters",
      spec: "Equipped with high-performance desktop terminals, Linux & Windows virtualization servers, dedicated GPU clusters for machine learning, and round-the-clock 1 Gbps redundant fiber connectivity.",
      features: [
        "450+ High-Performance Core-i7/Xeon Workstations",
        "Redundant 1 Gbps Leased Line Internet",
        "Configured with Oracle, Visual Studio, Python & Cloud SDKs",
        "Dedicated Power Backup with Central 160 kVA Online UPS",
      ],
      image: "/images/drive/computer-lab.jpg",
    },
    {
      id: "smart-theatres",
      badge: "ACADEMICS 02",
      title: "Smart Lecture Theatres & Amphitheatres",
      subtitle: "Acoustically Engineered Digital Classrooms",
      spec: "Amphitheatre-style air-conditioned lecture halls featuring interactive 4K smart interactive touch panels, wireless presentation podiums, and automated lecture recording systems.",
      features: [
        "Acoustic Wall Paneling & Ergonomic Executive Seating",
        "Interactive Digital Smart Boards with Cloud Archiving",
        "High-Lumen HD Projectors with Surround Audio",
        "Integrated Hybrid Video Conferencing for Expert Talks",
      ],
      image: "/images/drive_third/ClassRooms_Academic.JPG",
    },
    {
      id: "central-library",
      badge: "RESEARCH 03",
      title: "Central Research Library & Digital Vault",
      subtitle: "50,000+ Print Volumes & Global E-Resources",
      spec: "A multi-storeyed resource center with extensive holdings in computer science, business management, data analytics, and corporate law. Connected to National Digital Library (NDL) and DELNET.",
      features: [
        "Over 50,000 Text & Reference Volumes",
        "Subscription to IEEE, Springer & DELNET Databases",
        "Air-Conditioned Quiet Study Enclosures & Research Cubicles",
        "Fully Automated Barcode & RFID Book Circulation",
      ],
      image: "/images/drive_third/Library_Library.JPG",
    },
    {
      id: "hostels",
      badge: "RESIDENTIAL 04",
      title: "On-Campus Residential Hostels",
      subtitle: "Separate Hostels for Boys & Girls (1,200+ Capacity)",
      spec: "Safe, secure, and fully furnished residential accommodation located directly within the Technoplex campus boundary. Supervised by resident wardens, security staff, and CCTV surveillance.",
      features: [
        "Furnished Double & Triple Occupancy Rooms",
        "24/7 High-Speed Wi-Fi & Dedicated Study Lounges",
        "Round-the-Clock Treated Drinking Water & Power Backup",
        "First-Aid Medical Dispensary with On-Call Doctor",
      ],
      image: "/images/drive/hostel-residential.jpg",
    },
    {
      id: "food-court",
      badge: "AMENITY 05",
      title: "Central Multi-Cuisine Food Court & Cafeteria",
      subtitle: "Hygienic Dining & Social Hub",
      spec: "Spacious cafeteria serving wholesome, freshly cooked North Indian, South Indian, Odia, and continental meals. Operates under strict FSSAI hygiene standards.",
      features: [
        "Nutritious Breakfast, Lunch, Evening Snacks & Dinner",
        "Modern Stainless Steel Commercial Kitchen Equipment",
        "Regular Water Testing & Hygiene Audits",
        "Spacious Dining Seating for Over 400 Students",
      ],
      image: "/images/drive/cafeteria.jpg",
    },
    {
      id: "transport",
      badge: "LOGISTICS 06",
      title: "Dedicated Campus Transport Fleet",
      subtitle: "Connecting All Nodes of Bhubaneswar & Cuttack",
      spec: "A fleet of institution-owned luxury buses operating on dedicated routes across Bhubaneswar, Cuttack, and Khurda, ensuring punctual and safe daily commuting for scholars.",
      features: [
        "Covering All Major City Stops and Transit Hubs",
        "GPS-Enabled Tracking with Speed Governors",
        "Experienced Drivers & Conductor Support",
        "Comfortable High-Back Seating & Emergency Toolkits",
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
              className="object-cover object-[68%_40%] filter contrast-105 saturate-110 opacity-80 scale-100"
              sizes="100vw"
            />
            {/* Smooth scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/95 via-[#070D21]/65 to-[#070D21]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/50 via-transparent to-[#070D21]/30" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Campus Infrastructure &amp; Amenities
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                11-Acre Modern Technoplex in Infocity
              </h1>
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
              {facilities.map((f) => (
                <div
                  key={f.id}
                  className="group bg-white border border-zinc-200 hover:border-zinc-400 rounded-3xl overflow-hidden shadow-2xs transition-all duration-500 hover-lift flex flex-col"
                >
                  {/* Image Container with Zoom Effect */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover object-center filter grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase font-semibold text-zinc-200 border border-white/20">
                        {f.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-0.5">
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
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-900 mb-2">
                        Key Specifications:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {f.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                            <span className="font-normal leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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

