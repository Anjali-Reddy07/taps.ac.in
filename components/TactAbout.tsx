"use client";

import Link from "next/link";

interface TactAboutProps {
  onOpenQuery?: () => void;
}

export default function TactAbout({ onOpenQuery }: TactAboutProps) {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top Grid: Profile (Left) and Vision/Mission (Right) matching TACT Section 3 */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          
          {/* Left Column: Institutional Profile */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0020D6] font-bold bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              About Us
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#001D4A] leading-tight">
              Trident Academy of Professional Studies
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#0020D6]">
              Premier BCA, BBA &amp; B.Sc Institution • Where Ambition Finds Its Direction
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Trident Academy of Professional Studies (TAPS), functioning under the aegis of the renowned Trident Group (TACT Trust), is recognized as the undisputed No. 1 college under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA).
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Permanently recognized by the Higher Education Department, Govt. of Odisha, and approved by AICTE, TAPS integrates computational rigor, managerial acumen, and holistic training into an unmatched undergraduate learning journey at Infocity, Bhubaneswar.
            </p>

            {/* Key USPs Checklist */}
            <div className="pt-2 space-y-2.5">
              {[
                "Undisputed No. 1 Private BBA & BCA College under Utkal University",
                "100% full-time faculties are M.Tech/NET qualified, pursuing Ph.D",
                "Leadership modeling, soft-skills & business innovation incubators",
                "Active MoUs with Tier-1 tech giants for internships & placement drives",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0020D6] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#001D4A] text-white text-xs sm:text-sm font-semibold hover:bg-[#0020D6] transition-colors shadow-sm"
              >
                <span>Know More About TAPS</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <button
                onClick={onOpenQuery}
                className="px-5 py-2.5 rounded-lg border border-blue-200 text-[#0020D6] hover:bg-blue-50 text-xs sm:text-sm font-semibold transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Column: Vision & Mission Cards matching TACT Section 3 */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Vision Card */}
            <div className="bg-[#F8FAFC] border border-blue-100/80 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0020D6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[#001D4A] mb-3 flex items-center gap-2">
                <span>Our Vision</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0020D6]" />
              </h3>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  To achieve and sustain reputation for <strong className="text-[#001D4A]">Excellence in Teaching, Learning, Research and Industry Mentorship</strong> whilst upholding enduring human values.
                </p>
                <p>
                  To become an undergraduate institute of premier repute in Computer Applications, Business Administration and Biotechnology by offering high-standard curricula and fostering holistic personality development.
                </p>
                <p>
                  To be a recognized center of excellence in foundational technology and management education across Eastern India.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#F8FAFC] border border-blue-100/80 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0020D6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[#001D4A] mb-3 flex items-center gap-2">
                <span>Our Mission</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0020D6]" />
              </h3>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  To provide the <strong className="text-[#001D4A]">best of technical skills, business ethics, and practical acumen</strong> to undergraduate scholars.
                </p>
                <p>
                  To maintain faculty and academic infrastructure with the highest qualifications and continuous research opportunities.
                </p>
                <p>
                  To motivate students to pursue top-tier competitive examinations, higher education at premier institutes, and corporate campus careers.
                </p>
                <p>
                  To sustain vibrant industry-academia tie-ups for internships, live projects, and professional skill accreditation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
