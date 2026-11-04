"use client";

import { useState, useEffect, useCallback } from "react";

interface AlumnusTestimonial {
  id: string;
  name: string;
  degreeBadge: string;
  designation: string;
  company: string;
  location: string;
  quote: string;
  companyTag: string;
}

export default function TactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: AlumnusTestimonial[] = [
    {
      id: "jiban-samal",
      name: "Jiban Samal",
      degreeBadge: "Class of 2012 • BCA",
      designation: "SAP Lead Consultant",
      company: "CGI Info Systems",
      location: "London, United Kingdom",
      companyTag: "CGI",
      quote:
        "Nothing can suffice our golden days spent at Trident. Be it Ratha sir's serious practical classes or Manas sir's evergreen lectures, the faculties' inspiration and computing labs laid the foundation for every large-scale enterprise deployment I lead across Europe today.",
    },
    {
      id: "smruti-mishra",
      name: "Smruti Ranjan Mishra",
      degreeBadge: "Class of 2014 • BBA",
      designation: "Administrative Officer",
      company: "Revenue & Disaster Management Dept, Govt. of Odisha",
      location: "Bhubaneswar, India",
      companyTag: "GOVT",
      quote:
        "For me, Trident is more than an institution; it has been my favorite station next to my home. All I can say about TRIDENT is just 'Outstanding' from all aspects — administrative mentorship, public service ethics, and leadership readiness under pressure.",
    },
    {
      id: "piali-mazumdar",
      name: "Piali Mazumdar",
      degreeBadge: "Class of 2016 • BCA",
      designation: "Staff Software Engineer",
      company: "Capgemini Engineering",
      location: "Dallas, Texas, USA",
      companyTag: "CAPGEMINI",
      quote:
        "TAPS paved my entire career pathway in software systems and analytics. Extremely honored to be an alumna of an institution that gives each undergraduate individual faculty attention, high-performance computing access, and unwavering corporate confidence.",
    },
    {
      id: "dambarudhara-behera",
      name: "DambaruDhara Behera",
      degreeBadge: "Class of 2011 • BCA",
      designation: "Principal Cloud Solutions Architect",
      company: "DXC Technology (CSC)",
      location: "New York City, USA",
      companyTag: "DXC",
      quote:
        "Life at Trident was transformative. The foundation in computational science, database architecture, and collaborative hackathons continues to serve me at every stage of designing high-availability global cloud architectures on Wall Street.",
    },
    {
      id: "ananya-senapati",
      name: "Ananya Senapati",
      degreeBadge: "Class of 2019 • BBA",
      designation: "Product Marketing Lead",
      company: "Deloitte Digital",
      location: "Bengaluru, India",
      companyTag: "DELOITTE",
      quote:
        "The rigorous case study pedagogy and business innovation incubators at TAPS shaped my strategic intuition. We graduated not just with academic honors, but with an executive acumen and presentation polish ready for Fortune 500 boardroom engagements.",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Autoplay with hover pause
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
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

  const recruiterPartners = [
    { label: "TCS" },
    { label: "Infosys" },
    { label: "CGI" },
    { label: "Wipro" },
    { label: "Accenture" },
    { label: "Capgemini" },
    { label: "Deloitte." },
    { label: "AWS" },
    { label: "Cognizant" },
    { label: "Tech Mahindra" },
    { label: "HCLTech" },
  ];

  return (
    <section 
      aria-label="Alumni Speak"
      className="relative py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header with Refined Typography Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
            Alumni Speak
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-tight">
            Voices from the Trident Legacy
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
            Our graduates lead computational transformations, corporate strategy, and public governance across London, New York, and India.
          </p>
        </div>

        {/* ELEGANT TEXT-FIRST INSTITUTIONAL CAROUSEL CARD (NO PERSON PHOTOS) */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card with Subtle Border and Hover Shadow */}
          <div className="relative bg-zinc-50 border border-zinc-200/90 hover:border-zinc-400 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden hover-lift">
            
            {/* Stylized Oversized Typographic Quotation Accent */}
            <div 
              className="absolute -top-4 right-8 sm:right-12 text-zinc-200/80 select-none pointer-events-none font-serif text-[120px] sm:text-[150px] leading-none"
              aria-hidden="true"
            >
              “
            </div>

            {/* Inner Content Container with Smooth Fade Transition */}
            <div key={current.id} className="relative z-10 space-y-8 animate-fadeIn">
              
              {/* Header Badge: Company Monogram Pill & Location Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {/* Clean Company Monogram Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider uppercase bg-black text-white shadow-2xs">
                    {current.companyTag}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    {current.location}
                  </span>
                </div>

                {/* Slide Counter */}
                <div className="text-xs font-mono font-bold tracking-widest text-zinc-400">
                  <span className="text-zinc-900">0{currentIndex + 1}</span> / 0{testimonials.length}
                </div>
              </div>

              {/* Quotation Body: Refined Editorial Serif with Balanced Line-Height */}
              <blockquote className="text-xl sm:text-2xl lg:text-[26px] font-serif italic text-zinc-900 leading-relaxed font-normal tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Alumnus Identity & Credentials (Text-First Layout) */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 tracking-tight">
                      {current.name}
                    </h3>
                    
                    {/* Degree & Batch Pill Badge (e.g., "Class of 2018 • BCA") */}
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-zinc-200/80 text-zinc-900 border border-zinc-300 tracking-wide">
                      {current.degreeBadge}
                    </span>
                  </div>

                  {/* Clean Designation & Company Text */}
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-1">
                    {current.designation}, <span className="text-zinc-900 font-semibold">{current.company}</span>
                  </p>
                </div>

                {/* Verified Alumni Stamp */}
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-medium self-start sm:self-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>Verified Trident Alumnus</span>
                </div>
              </div>

            </div>

          </div>

          {/* Carousel Controls: Previous / Next & Active Page Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Active Indicator Dots */}
            <div className="flex items-center gap-2 order-2 sm:order-1" role="tablist" aria-label="Alumni testimonials">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Go to testimonial ${idx + 1}: ${item.name}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                    idx === currentIndex 
                      ? "w-8 bg-black shadow-xs" 
                      : "w-2 bg-zinc-300 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            {/* Tactile Previous / Next Buttons */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black bg-white hover:bg-black text-zinc-900 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black bg-white hover:bg-black text-zinc-900 hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>

        {/* MONOCHROME RECRUITER / NETWORK TRUST BADGE BANNER UNDERNEATH */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-zinc-200 relative">
          
          <div className="text-center text-xs uppercase tracking-widest text-zinc-500 mb-6 font-semibold">
            Proud Alumni Leading at Global Enterprise Employers
          </div>

          {/* Marquee Track with Gradient Edge Fades */}
          <div className="relative overflow-hidden w-full py-2">
            
            {/* Left & Right Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee */}
            <div className="flex animate-marquee gap-8 sm:gap-12 items-center shrink-0">
              {[...recruiterPartners, ...recruiterPartners].map((partner, index) => (
                <div
                  key={`${partner.label}-${index}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 hover:border-black hover:text-black transition-all duration-300 cursor-default shrink-0 shadow-2xs group"
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
