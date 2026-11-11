"use client";

import { useState } from "react";
import Image from "next/image";
import InfiniteSpiral from "./InfiniteSpiral";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "architecture" | "tech" | "sports" | "nature" | "events";
  tag: string;
  location: string;
  src: string;
  description: string;
  featured?: boolean;
}

export default function CampusGallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | "architecture" | "tech" | "sports" | "nature" | "events">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Sunset Promenade & Colonnades",
      category: "architecture",
      tag: "Iconic Campus",
      location: "Central Academic Avenue",
      src: "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg",
      description: "Students strolling along the terracotta colonnade avenue during sunset at the Infocity campus.",
      featured: true,
    },
    {
      id: "2",
      title: "Trifest Theatrical Stage Performance",
      category: "events",
      tag: "Cultural Fest",
      location: "Main Stage Arena",
      src: "/images/drive_second/Activities.jpg",
      description: "High-energy dramatic dance & mask theatre performance on the illuminated festival stage during annual Trifest.",
      featured: true,
    },
    {
      id: "3",
      title: "Twilight Floodlit Sports Arena",
      category: "sports",
      tag: "Athletics & Life",
      location: "Sports Complex",
      src: "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg",
      description: "Vibrant purple and lavender dusk skies over the floodlit full-court basketball and collegiate grounds.",
    },
    {
      id: "4",
      title: "Annual Alumni Meet (TRANSCEND)",
      category: "events",
      tag: "Alumni Network",
      location: "Shovana Hall Auditorium",
      src: "/images/drive_second/alumni3.jpg",
      description: "Over 100 distinguished graduates and senior faculty members celebrating the annual alumni homecoming.",
    },
    {
      id: "5",
      title: "School of Computing (BCA)",
      category: "tech",
      tag: "Computing Hub",
      location: "Block-4 Wing",
      src: "/images/drive_new/1721020760290.jpg",
      description: "Home of computer applications, high-performance virtualization labs, and AI innovation clusters.",
    },
    {
      id: "6",
      title: "Student Leadership & Emcee Desk",
      category: "events",
      tag: "Leadership",
      location: "Auditorium Podium",
      src: "/images/drive_second/IMG_5567.JPG",
      description: "Elected student emcees and academic leaders addressing delegates from the official Trident podium.",
    },
    {
      id: "7",
      title: "Central Technoplex Promenade",
      category: "architecture",
      tag: "Campus View",
      location: "Academic Promenade",
      src: "/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg",
      description: "Symmetrical paved avenue flanked by institutional pink colonnades and the official Trident Group insignia.",
    },
    {
      id: "8",
      title: "Training & Placement Tower",
      category: "tech",
      tag: "Corporate Synergy",
      location: "Block-5 Center",
      src: "/images/drive_new/_DSC1852.JPG",
      description: "Multi-floor Training & Placement cell paired with the Center for Business Analytics and Sustainability Research.",
    },
    {
      id: "9",
      title: "Alumni Medal Felicitation",
      category: "events",
      tag: "Academic Distinction",
      location: "Auditorium Stage",
      src: "/images/drive_second/alumni2.jpg",
      description: "Senior professors awarding the silver medal of distinction to an accomplished Trident alumnus.",
    },
    {
      id: "10",
      title: "Academic Organizing Committee",
      category: "events",
      tag: "Student Council",
      location: "Main Stage",
      src: "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
      description: "Student executive delegates and mentors coordinating inter-collegiate conference proceedings.",
    },
    {
      id: "11",
      title: "Aerial Campus Panorama & Lawns",
      category: "nature",
      tag: "Green Campus",
      location: "Central Lawns",
      src: "/images/drive_new/453489392_17883235170094364_6424711783098985408_n.jpg",
      description: "High-angle panoramic view across the manicured institutional lawns, palm trees, and modern academic blocks.",
    },
    {
      id: "12",
      title: "Central Stone Walkway",
      category: "nature",
      tag: "Campus Greenery",
      location: "Academic Quad",
      src: "/images/drive_new/1746352355680.jpg",
      description: "Symmetrical paved pathway framed by royal palms, flower borders, and open discussion areas.",
    },
    {
      id: "13",
      title: "Smart Amphitheatre Lecture Theatre",
      category: "tech",
      tag: "Academic Amphitheatre",
      location: "Lecture Theatre 1",
      src: "/images/drive_third/ClassRooms_Academic.JPG",
      description: "Undergraduate scholars attending an interactive lecture in the multimedia smart amphitheatre.",
    },
    {
      id: "14",
      title: "Corporate Recruitment Delegates & Placement Drive",
      category: "events",
      tag: "Campus Placements",
      location: "Main Convention Stage",
      src: "/images/drive_second/321398647_614967553732563_5218244034042291334_n.jpg",
      description: "Visiting senior corporate recruitment delegates, HR executives, and industry partners felicitated during annual on-campus hiring drives.",
    },
    {
      id: "15",
      title: "Annual Campus Athletic Sprint Meet",
      category: "sports",
      tag: "Annual Sports",
      location: "Athletic Sprint Track",
      src: "/images/drive_third/Sports_IMG20260205104055.jpg",
      description: "Student sprinters competing at the starting blocks during the annual campus athletics championship.",
    },
    {
      id: "16",
      title: "Central Research & DELNET Library",
      category: "architecture",
      tag: "Knowledge Vault",
      location: "Central Library",
      src: "/images/drive_third/Library_Library.JPG",
      description: "Scholars researching reference volumes, journals, and digital periodicals in the quiet study wing.",
    },
    {
      id: "17",
      title: "Hack Day National Competition",
      category: "tech",
      tag: "Tech Challenge",
      location: "Computer Labs",
      src: "/images/drive_fourth/hack_day.png",
      description: "Collegiate tech sprint and 24-hour coding hackathon with multidisciplinary student teams developing real-world software solutions.",
      featured: true,
    },
    {
      id: "18",
      title: "Web Development & IoT Tech Colloquium",
      category: "tech",
      tag: "Tech Seminar",
      location: "Multimedia Lecture Hall",
      src: "/images/drive_fourth/web_dev_seminar.png",
      description: "Undergraduate scholars engaging in interactive developer sessions on Web Architecture, IoT, and Git/GitHub pipelines.",
    },
    {
      id: "19",
      title: "Enterprise Cloud Virtualization Lab",
      category: "tech",
      tag: "Cloud Infrastructure",
      location: "High-Density Lab",
      src: "/images/drive_fourth/cloud_club.png",
      description: "Hands-on cloud virtualization, SAP S/4HANA computing clusters, and enterprise server deployment workshops.",
    },
    {
      id: "20",
      title: "Kartavya Social Outreach Society",
      category: "events",
      tag: "Social Welfare",
      location: "Community Outreach",
      src: "/images/drive_fourth/kartavya_club.png",
      description: "Student volunteers executing community welfare, digital literacy, and environmental sustainability campaigns across Bhubaneswar.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((it) => it.category === activeFilter);

  // 16 Real Drive Images for the 3D Infinite Spiral Helix Showcase
  const spiralItems = [
    { src: "/images/drive_fourth/campus_exterior_1.jpg", alt: "11-Acre Technoplex Campus Building", label: "Campus Architecture" },
    { src: "/images/drive/computer-lab.jpg", alt: "Computer Applications Cloud Lab", label: "Tech Labs" },
    { src: "/images/drive_third/ClassRooms_Academic.JPG", alt: "Smart Interactive Amphitheatres", label: "Smart Classrooms" },
    { src: "/images/drive_third/Library_Library.JPG", alt: "Central Research & IEEE Library", label: "Central Library" },
    { src: "/images/drive_third/Sports_IMG20260205104055.jpg", alt: "Athletic Meet Grounds & Arena", label: "Athletic Meet" },
    { src: "/images/drive_fourth/hack_day.png", alt: "Hack Day National Competition", label: "Coding Hackathon" },
    { src: "/images/drive_second/Activities.jpg", alt: "Annual Trifest Cultural Celebration", label: "Trifest Cultural Fest" },
    { src: "/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg", alt: "Sunset Promenade & Colonnades", label: "Sunset Promenade" },
    { src: "/images/drive_new/470234356_122200804352040677_3595499250058296861_n.jpg", alt: "Twilight Floodlit Basketball Arena", label: "Sports Complex" },
    { src: "/images/drive_third/ClassRooms__MG_2339.JPG", alt: "Tiered Multimedia Lecture Theatre", label: "Interactive Theatres" },
    { src: "/images/drive_third/MBA_seminar_1.jpeg", alt: "Corporate Executive Seminars", label: "Corporate Seminars" },
    { src: "/images/drive_fourth/brain_logic_club.png", alt: "Brain Logic & Reasoning Club", label: "Student Clubs" },
    { src: "/images/drive_fourth/cloud_club.png", alt: "Enterprise Cloud Virtualization", label: "Cloud Computing" },
    { src: "/images/drive_fourth/web_dev_seminar.png", alt: "Web & IoT Tech Colloquium", label: "Developer Workshops" },
    { src: "/images/drive/innovation-mela.png", alt: "Innovation Mela Showcase", label: "Student Innovations" },
    { src: "/images/drive/campus-grounds.jpg", alt: "Landscaped Technoplex Quad", label: "Technoplex Lawns" },
  ];

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-transparent text-slate-900 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl animate-fadeInUp">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-blue-700 mb-3 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs">
              Campus Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Life &amp; Architecture at TAPS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
              Explore authentic glimpses of our Infocity campus — where grand architecture, computing labs, athletics, and student life unite.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div 
            role="tablist"
            aria-label="Gallery Categories"
            className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-indigo-100 shadow-sm"
          >
            {[
              { id: "all", label: "All Highlights" },
              { id: "events", label: "Events & Alumni" },
              { id: "architecture", label: "Architecture" },
              { id: "tech", label: "Tech & Labs" },
              { id: "sports", label: "Athletics" },
              { id: "nature", label: "Campus Greenery" },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-blue-700 hover:bg-indigo-50/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D INFINITE SPIRAL CAMPUS HELIX SHOWCASE (REACT BITS) - EXPANDED FULL-LENGTH SCALE */}
        <div className="relative w-full rounded-[36px] sm:rounded-[44px] overflow-hidden mb-16 sm:mb-24 min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] bg-slate-950 border border-slate-800/80 shadow-2xl flex flex-col justify-between">
          {/* Background 3D Infinite Spiral */}
          <div className="absolute inset-0 z-0">
            <InfiniteSpiral
              items={spiralItems}
              animationMode="all"
              speed={0.45}
              radius={330}
              cardWidth={165}
              cardHeight={120}
              verticalSpacing={80}
              perspective={1250}
              cardRadius={14}
              centerScale={1.3}
              edgeBlur={5}
              edgeFade={0.32}
              cardsPerTurn={8}
              pauseOnHover={true}
              className="w-full h-full"
            />
            {/* Cinematic Radial & Linear Vignettes */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(2, 6, 23, 0.72) 0%, rgba(2, 6, 23, 0.38) 45%, rgba(2, 6, 23, 0.95) 100%)",
              }}
            />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
          </div>

          {/* Top Bar inside Showcase */}
          <div className="relative z-10 px-8 sm:px-14 pt-8 sm:pt-10 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>3D CAMPUS HELIX • REACT BITS</span>
            </div>
            <div className="text-xs font-mono text-white/70 tracking-widest hidden sm:block bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              DRAG • SCROLL • HOVER TO INTERACT
            </div>
          </div>

          {/* Center Overlay Content */}
          <div className="relative z-10 px-6 sm:px-12 py-12 max-w-3xl mx-auto text-center pointer-events-none">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
              The Living Campus in <span className="font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">3D Infinite Motion</span>
            </h3>
            <p className="text-base sm:text-lg text-slate-200 mt-4 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Experience our continuous photographic helix — where computing hubs, smart amphitheatres, cultural fests, and athletic arenas rotate in 3D perspective.
            </p>
            <div className="pt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
              <a
                href="#gallery-grid"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold transition-all duration-300 shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Explore Bento Archive Below</span>
                <span className="transform group-hover:translate-y-1 transition-transform duration-200 text-base">↓</span>
              </a>
            </div>
          </div>

          {/* Bottom Footer bar inside Showcase */}
          <div className="relative z-10 px-8 sm:px-14 pb-8 sm:pb-10 flex items-center justify-between text-white/60 text-xs font-mono tracking-wider pointer-events-none">
            <span>16 REAL CAMPUS MOMENTS</span>
            <span className="animate-pulse text-cyan-400">✦ ✦ ✦</span>
            <span>TECHNOPLEX ARCHIVES</span>
          </div>
        </div>

        {/* Dynamic Bento Gallery Grid */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-3xl overflow-hidden border border-indigo-100/90 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift bg-slate-950 ${
                item.featured && idx === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3] sm:aspect-[4/3]"
              }`}
            >
              {/* Photo */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:from-slate-950/95 transition-colors duration-300 pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-white/40">
                  {item.tag}
                </span>
                <span className="bg-blue-600/90 text-white font-medium text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm hidden sm:inline-block">
                  {item.location}
                </span>
              </div>

              {/* Expand Hint Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>

              {/* Bottom Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-white flex flex-col justify-end">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mt-1 font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#070D21] border border-indigo-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-5 sm:p-7 bg-[#0B132E] border-t border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest mb-1">
                  <span>{selectedPhoto.tag}</span>
                  <span>•</span>
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-200/90 mt-1 font-light max-w-2xl leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md active:scale-95 cursor-pointer shrink-0"
              >
                Close Preview
              </button>
            </div>

            {/* Top Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

