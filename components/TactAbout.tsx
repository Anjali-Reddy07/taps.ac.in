"use client";

import Image from "next/image";
import Link from "next/link";

interface TactAboutProps {
  onOpenQuery?: () => void;
}

export default function TactAbout({ onOpenQuery }: TactAboutProps) {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Top Grid: Profile (Left) and Vision/Mission (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          
          {/* Left Column: Institutional Profile */}
          <div className="lg:col-span-5 space-y-5 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-900 font-bold bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light text-zinc-900 leading-tight tracking-tight">
              Trident Academy of Professional Studies
            </h2>

            <p className="text-base sm:text-lg font-bold text-zinc-900">
              Premier BCA &amp; BBA Institution • Where Ambition Finds Its Direction
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Trident Academy of Professional Studies (TAPS), functioning under the aegis of the renowned Trident Group (TACT Trust), is recognized as the undisputed No. 1 college under Utkal University for Bachelor of Business Administration (BBA) and Bachelor of Computer Application (BCA).
            </p>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Permanently recognized by the Higher Education Department, Govt. of Odisha, and approved by AICTE, TAPS integrates computational rigor, managerial acumen, and holistic training into an unmatched undergraduate learning journey at Infocity, Bhubaneswar.
            </p>

            {/* Key USPs Checklist */}
            <div className="pt-2 space-y-3">
              {[
                "Undisputed No. 1 Private BBA & BCA College under Utkal University",
                "100% full-time faculties are M.Tech/NET qualified, pursuing Ph.D",
                "Leadership modeling, soft-skills & business innovation incubators",
                "Active MoUs with Tier-1 tech giants for internships & placement drives",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm sm:text-[15px] text-zinc-800 font-medium">
                  <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Buttons - strictly black and white */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm sm:text-base font-semibold hover:bg-zinc-800 transition-all duration-300 shadow-md hover-lift"
              >
                <span>Know More About TAPS</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <button
                onClick={onOpenQuery}
                className="px-6 py-3 rounded-xl border-2 border-black text-zinc-900 hover:bg-black hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 hover-lift cursor-pointer"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Column: Vision & Mission Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Vision Card */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7 sm:p-8 shadow-xs hover:border-black hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3.5 flex items-center gap-2">
                <span>Our Vision</span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </h3>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-zinc-700 leading-relaxed font-normal">
                <p>
                  To achieve and sustain reputation for <strong className="text-zinc-950 font-semibold">Excellence in Teaching, Learning, Research and Industry Mentorship</strong> whilst upholding enduring human values.
                </p>
                <p>
                  To become an undergraduate institute of premier repute in Computer Applications and Business Administration by offering high-standard curricula and fostering holistic personality development.
                </p>
                <p>
                  To be a recognized center of excellence in foundational technology and management education across Eastern India.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7 sm:p-8 shadow-xs hover:border-black hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-3.5 flex items-center gap-2">
                <span>Our Mission</span>
                <span className="w-2 h-2 rounded-full bg-black" />
              </h3>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-zinc-700 leading-relaxed font-normal">
                <p>
                  To provide the <strong className="text-zinc-950 font-semibold">best of technical skills, business ethics, and practical acumen</strong> to undergraduate scholars.
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

        {/* Real Campus & Academic Infrastructure Showcase */}
        <div className="pt-6 border-t border-zinc-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-900 font-bold block mb-1">
                Inside TAPS Campus
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-zinc-900">
                World-Class Academic Infrastructure
              </h3>
            </div>
            <Link
              href="#facilities"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 hover:text-black transition-colors"
            >
              <span>Explore All Facilities</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Computer Applications Lab",
                subtitle: "High-Performance Cloud & AI Systems",
                image: "/images/drive/computer-lab.jpg",
              },
              {
                title: "Smart Lecture Theatres",
                subtitle: "Interactive Multi-Media Classrooms",
                image: "/images/drive/smart-classroom.jpg",
              },
              {
                title: "Central Research Library",
                subtitle: "Over 50,000 Volumes & Digital Journals",
                image: "/images/drive/central-library.jpg",
              },
              {
                title: "Infocity Campus Grounds",
                subtitle: "Patia, Bhubaneswar, Odisha",
                image: "/images/drive/campus-walkway.jpg",
              },
            ].map((infra) => (
              <div
                key={infra.title}
                className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-xs hover:border-black hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={infra.image}
                    alt={infra.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-black transition-colors">
                    {infra.title}
                  </h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    {infra.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
