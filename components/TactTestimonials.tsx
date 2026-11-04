"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface AlumnusTestimonial {
  id: string;
  name: string;
  degree: string;
  batch: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  initials: string;
  avatar: string;
  companyLogo: React.ReactNode;
}

export default function TactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const testimonials: AlumnusTestimonial[] = [
    {
      id: "jiban-samal",
      name: "Jiban Samal",
      degree: "BCA",
      batch: "'12",
      role: "SAP Lead Consultant",
      company: "CGI Info Systems",
      location: "London, United Kingdom",
      quote:
        "Nothing can suffice our golden days spent at Trident. Be it Ratha sir's serious practical classes or Manas sir's evergreen lectures, the faculties' inspiration and computing labs laid the foundation for every large-scale enterprise deployment I lead across Europe today.",
      initials: "JS",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      companyLogo: (
        <span className="inline-flex items-center font-mono font-extrabold text-[13px] tracking-wider text-zinc-900">
          CGI
        </span>
      ),
    },
    {
      id: "smruti-mishra",
      name: "Smruti Ranjan Mishra",
      degree: "BBA",
      batch: "'14",
      role: "Administrative Officer",
      company: "Govt. of Odisha (Revenue & Disaster Mgmt)",
      location: "Bhubaneswar, India",
      quote:
        "For me, Trident is more than an institution; it has been my favorite station next to my home. All I can say about TRIDENT is just 'Outstanding' from all aspects — administrative mentorship, public service ethics, and leadership readiness under pressure.",
      initials: "SM",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      companyLogo: (
        <span className="inline-flex items-center gap-1 font-semibold text-[11px] uppercase tracking-wider text-zinc-800">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Govt. of Odisha
        </span>
      ),
    },
    {
      id: "piali-mazumdar",
      name: "Piali Mazumdar",
      degree: "BCA",
      batch: "'16",
      role: "Staff Software Engineer",
      company: "Capgemini Engineering (formerly Aricent)",
      location: "Dallas, Texas, USA",
      quote:
        "TAPS paved my entire career pathway in software systems and analytics. Extremely honored to be an alumna of an institution that gives each undergraduate individual faculty attention, high-performance computing access, and unwavering corporate confidence.",
      initials: "PM",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      companyLogo: (
        <span className="inline-flex items-center gap-1 font-semibold text-xs text-zinc-900 tracking-tight">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.3-.39-3.9-1.92-4-4.18h1.9c.1 1.3 1.05 2.25 2.1 2.25s2-.95 2.1-2.25c.1-1.3-.9-2.25-2.1-2.25h-.9v-2h.9c1.1 0 1.9-.9 1.9-2s-.8-2-1.9-2c-1.05 0-1.95.9-2.05 2H7c.1-2.26 1.7-3.79 4-4.18V4h2v1.07c2.3.39 3.9 1.92 4 4.18h-1.9c-.1-1.3-1.05-2.25-2.1-2.25s-2 .95-2.1 2.25c-.1 1.3.9 2.25 2.1 2.25h.9v2h-.9c-1.1 0-1.9.9-1.9 2s.8 2 1.9 2c1.05 0 1.95-.9 2.05-2H17c-.1 2.26-1.7 3.79-4 4.18z"/>
          </svg>
          Capgemini
        </span>
      ),
    },
    {
      id: "dambarudhara-behera",
      name: "DambaruDhara Behera",
      degree: "BCA",
      batch: "'11",
      role: "Principal Solutions Architect",
      company: "DXC Technology (CSC)",
      location: "New York City, USA",
      quote:
        "Life at Trident was transformative. The foundation in computational science, database architecture, and collaborative hackathons continues to serve me at every stage of designing high-availability global cloud architectures on Wall Street.",
      initials: "DB",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      companyLogo: (
        <span className="inline-flex items-center font-mono font-bold text-xs tracking-wider text-zinc-900">
          DXC.technology
        </span>
      ),
    },
    {
      id: "ananya-senapati",
      name: "Ananya Senapati",
      degree: "BBA",
      batch: "'19",
      role: "Product Marketing Lead",
      company: "Deloitte Digital",
      location: "Bengaluru, India",
      quote:
        "The rigorous case study pedagogy and business innovation incubators at TAPS shaped my strategic intuition. We graduated not just with academic honors, but with an executive acumen and presentation polish ready for Fortune 500 boardroom engagements.",
      initials: "AS",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      companyLogo: (
        <span className="inline-flex items-center font-bold text-xs tracking-tight text-zinc-900">
          Deloitte<span className="text-zinc-500">.</span>
        </span>
      ),
    },
  ];

  const handleNext = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const current = testimonials[currentIndex];

  // Recruiter logo marks for the infinite marquee
  const recruiterPartners = [
    { name: "Tata Consultancy Services", label: "TCS" },
    { name: "Infosys Technologies", label: "Infosys" },
    { name: "CGI Information Systems", label: "CGI" },
    { name: "Wipro Global", label: "WIPRO" },
    { name: "Accenture Enterprise", label: "Accenture" },
    { name: "Capgemini", label: "Capgemini" },
    { name: "Deloitte Digital", label: "Deloitte." },
    { name: "Amazon Web Services", label: "AWS" },
    { name: "Cognizant Technology", label: "Cognizant" },
    { name: "Tech Mahindra", label: "Tech Mahindra" },
    { name: "HCLTech", label: "HCLTech" },
  ];

  return (
    <section 
      aria-label="Alumni Testimonials"
      className="relative py-20 sm:py-24 lg:py-28 bg-white border-t border-zinc-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-900 font-bold mb-3.5 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-xs">
            <span>Alumni Speak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
            Voices from the Trident Legacy
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
            Our graduates lead computational transformations, corporate strategy, and public governance across London, New York, and India.
          </p>
        </div>

        {/* MODERN INTERACTIVE CAROUSEL CARD */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Elevated Testimonial Card */}
          <div className="relative bg-zinc-50 border border-zinc-200/90 hover:border-zinc-400 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden hover-lift">
            
            {/* Elegant Quotation Mark Watermark */}
            <div 
              className="absolute top-6 right-8 sm:top-10 sm:right-12 text-zinc-200 select-none pointer-events-none font-serif text-8xl sm:text-9xl leading-none opacity-40"
              aria-hidden="true"
            >
              “
            </div>

            {/* Inner Content Grid */}
            <div 
              key={current.id}
              className={`relative z-10 flex flex-col md:flex-row gap-8 lg:gap-10 items-start md:items-center transition-all duration-500 ${
                direction === "next" ? "animate-fadeIn" : "animate-fadeIn"
              }`}
            >
              
              {/* Alumnus Circular Headshot with Monochrome Ring Border */}
              <div className="flex-shrink-0 self-center md:self-start">
                <div className="relative group">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-zinc-900 ring-offset-4 ring-offset-white shadow-xl bg-zinc-900 relative">
                    {/* Alumnus Portrait */}
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to high-contrast initials if photo is unavailable
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement("div");
                          fallback.className = "w-full h-full flex items-center justify-center font-serif text-2xl font-bold text-white bg-zinc-950";
                          fallback.innerText = current.initials;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>

                  {/* Verified Alumnus Micro-Badge */}
                  <div 
                    title="Verified Trident Alumnus"
                    className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white shadow-md font-bold"
                  >
                    ✓
                  </div>
                </div>
              </div>

              {/* Quote & Author Info */}
              <div className="flex-1 space-y-6">
                
                {/* Quotation Body */}
                <blockquote className="text-lg sm:text-xl lg:text-[22px] font-serif italic text-zinc-900 leading-relaxed font-normal tracking-tight">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Credentials & Corporate Identity */}
                <div className="pt-5 border-t border-zinc-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                        {current.name}
                      </h3>
                      
                      {/* Degree & Batch Pill Badge (e.g. BCA '12) */}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-black text-white shadow-xs">
                        {current.degree} {current.batch}
                      </span>
                    </div>

                    {/* Role & Company with Grayscale Logo */}
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs sm:text-sm text-zinc-700">
                      <span className="font-semibold text-zinc-900">{current.role}</span>
                      <span className="text-zinc-400">•</span>
                      <span className="inline-flex items-center gap-1.5 bg-zinc-100 border border-zinc-300/80 px-2.5 py-0.5 rounded-md text-zinc-900 shadow-2xs">
                        {current.companyLogo}
                      </span>
                    </div>

                    {/* Global Location */}
                    <div className="text-[11px] text-zinc-500 font-medium mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{current.location}</span>
                    </div>
                  </div>

                  {/* Slide Position Counter */}
                  <div className="text-xs font-mono font-bold tracking-widest text-zinc-400 self-start sm:self-center">
                    <span className="text-zinc-900">0{currentIndex + 1}</span> / 0{testimonials.length}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Carousel Controls: Previous / Next & Active Page Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Active Indicators (Clickable Progress Dots) */}
            <div className="flex items-center gap-2 order-2 sm:order-1" role="tablist" aria-label="Alumni slides">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? "next" : "prev");
                    setCurrentIndex(idx);
                  }}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Go to testimonial ${idx + 1} of ${testimonials.length}: ${item.name}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                    idx === currentIndex 
                      ? "w-8 bg-black shadow-xs" 
                      : "w-2 bg-zinc-300 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            {/* Previous and Next Navigation Buttons */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black bg-white hover:bg-black text-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black bg-white hover:bg-black text-zinc-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR: ELEGANT INFINITE-SCROLL MONOCHROME MARQUEE DISPLAYING RECRUITER LOGOS */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-zinc-200/90 relative">
          
          <div className="text-center text-xs uppercase tracking-[0.22em] text-zinc-500 mb-6 font-bold">
            Proud Alumni Leading at Global Enterprise Employers
          </div>

          {/* Marquee Container with Gradient Edge Fades */}
          <div className="relative overflow-hidden w-full py-2">
            
            {/* Left and Right Subtle Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Infinite Animated Marquee Track */}
            <div className="flex animate-marquee gap-8 sm:gap-12 items-center shrink-0">
              {[...recruiterPartners, ...recruiterPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 hover:border-black hover:text-black transition-all duration-300 cursor-default shrink-0 shadow-2xs group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-black transition-colors" />
                  <span className="font-serif font-bold text-sm sm:text-[15px] tracking-wide whitespace-nowrap">
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
