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
      batch: "B.Sc & BCA Alumnus",
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
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-blue-100 overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#0020D6] font-bold mb-2">
            Alumni Speak
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#001D4A] tracking-tight">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Card matching TACT Section 8 */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-900/5 relative text-left">
          {/* Large Quote Mark */}
          <div className="text-6xl sm:text-7xl font-serif text-[#0020D6]/20 leading-none absolute top-6 left-8 select-none">
            “
          </div>

          <div className="relative z-10 pt-4">
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-light leading-relaxed mb-8 italic">
              {t.quote}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#001D4A]">
                  {t.name}
                </h4>
                <div className="text-xs sm:text-sm text-[#0020D6] font-medium">
                  {t.role} • {t.company}
                </div>
                <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                  {t.batch}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-blue-200 text-[#001D4A] hover:bg-[#0020D6] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-blue-200 text-[#001D4A] hover:bg-[#0020D6] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Alumni Network Tagline matching TACT Section 8 */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-xs font-semibold text-[#001D4A] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Global Alumni Network: TAPS graduates working with leading tech and corporate organizations worldwide.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
