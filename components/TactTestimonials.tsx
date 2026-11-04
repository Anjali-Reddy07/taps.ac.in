"use client";

import { useState } from "react";

export default function TactTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Nothing can suffice our golden days spent at Trident. Be it Ratha sir's serious classes or Manas sir's evergreen lectures, the faculties' inspiration and rigorous practical training are always memorable in today's global professional life.",
      name: "Jiban Samal",
      role: "SAP Lead Consultant",
      company: "CGI Info Systems, England",
      batch: "BCA Graduate",
    },
    {
      quote:
        "For me, Trident is more than an institution; it has been my favorite station next to my home. All I can say about TRIDENT is just 'Outstanding' from all aspects — mentorship, ethics, and corporate placement readiness.",
      name: "Smruti Ranjan Mishra",
      role: "Administrative Officer",
      company: "Revenue & Disaster Management Dept, Govt. of Odisha",
      batch: "BBA Graduate",
    },
    {
      quote:
        "TAPS paved my entire career pathway in software and analytics. Extremely honored to be an alumnus of an institution that gives you individual attention and unwavering confidence.",
      name: "Piali Mazumdar",
      role: "Technical Specialist",
      company: "Aricent Technologies Ltd, USA",
      batch: "BCA Graduate",
    },
    {
      quote:
        "Life at Trident was amazing. Enjoyed the rigorous coursework with great peers and faculties. The foundation in computational science and problem-solving continues to serve me at every stage of my career in New York.",
      name: "DambaruDhara Behera",
      role: "Senior Solutions Architect",
      company: "Computer Science Corporation, New York, USA",
      batch: "BCA Alumnus",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentTestimonial];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-t border-zinc-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 animate-fadeInUp">
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-900 font-bold mb-2 bg-zinc-100 border border-zinc-300 inline-block px-3 py-1 rounded-full">
            Alumni Speak
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-zinc-50 border border-zinc-200 hover:border-black rounded-3xl p-8 sm:p-12 shadow-lg relative text-left transition-all duration-300 hover-lift">
          {/* Large Quote Mark */}
          <div className="text-6xl sm:text-7xl font-serif text-black/10 leading-none absolute top-6 left-8 select-none">
            “
          </div>

          <div className="relative z-10 pt-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-zinc-800 font-normal leading-relaxed mb-8 italic">
              {t.quote}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-zinc-200">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-zinc-900">
                  {t.name}
                </h4>
                <div className="text-sm sm:text-base text-zinc-700 font-semibold">
                  {t.role} • {t.company}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5">
                  {t.batch}
                </div>
              </div>

              {/* Prev / Next Black & White Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-zinc-300 text-zinc-900 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-zinc-300 text-zinc-900 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Alumni Network Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-300 rounded-full py-2.5 px-6 text-xs sm:text-sm text-zinc-800 font-medium shadow-xs">
            <span className="w-2 h-2 rounded-full bg-black shrink-0 animate-pulseGlow" />
            <span>Global Alumni Network: TAPS graduates working with leading tech and corporate organizations worldwide.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
