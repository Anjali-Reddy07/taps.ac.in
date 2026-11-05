"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");

  const accreditations = [
    {
      title: "#1 under Utkal Univ",
      desc: "Undisputed rank 1 private BBA & BCA institution across Odisha.",
      badge: "ACADEMIC RANK",
    },
    {
      title: "100% Ph.D / NET Faculty",
      desc: "Scholars from premier universities providing 1:15 mentorship.",
      badge: "FACULTY BENCHMARK",
    },
    {
      title: "AICTE & Govt. Approved",
      desc: "Permanently recognized by Dept. of Higher Education, Govt. of Odisha.",
      badge: "RECOGNITION",
    },
    {
      title: "Tier-1 Industry MoUs",
      desc: "Direct hiring linkages with CGI, TCS, Infosys, Wipro, and Capgemini.",
      badge: "CORPORATE TIE-UPS",
    },
  ];

  const milestones = [
    {
      year: "1991",
      title: "Foundation of TSPL",
      desc: "Founded by visionary technocrats as Trident Softech Private Limited (TSPL), establishing an elite software finishing school in Oracle, Sybase, and PowerBuilder.",
    },
    {
      year: "1995",
      title: "Overseas Placements",
      desc: "Pioneered high-skill corporate software training in Eastern India, placing hundreds of software engineers in US and European enterprise deployments.",
    },
    {
      year: "2000",
      title: "Establishment of TAPS",
      desc: "Formal launch of Trident Academy of Professional Studies (TAPS) under TACT Trust, offering BCA and BBA affiliated to Utkal University with Govt. of Odisha approval.",
    },
    {
      year: "2005",
      title: "Technoplex Campus at Infocity",
      desc: "Expanded into an 11-acre flagship Technoplex in the heart of Infocity, Bhubaneswar, flanked by Infosys, TCS, and Wipro development centers.",
    },
    {
      year: "2026",
      title: "Silver Jubilee of Excellence",
      desc: "Celebrating 26+ years of academic dominance with 2,936+ campus placements and recognized as the benchmark undergraduate institute under Utkal University.",
    },
  ];

  const progressivePractices = [
    {
      title: "Teacher-Guardian Mentorship (TGM)",
      desc: "Every cohort of 15 students is assigned a designated faculty mentor who tracks continuous academic progress, attendance, psychological wellbeing, and semester preparation.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Aptitude & Soft-Skill Finishing School",
      desc: "Integrated training from 1st Year onwards in quantitative aptitude, logical reasoning, corporate business communication, and mock GD-PI simulations.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Industry Colloquium & Masterclasses",
      desc: "Bi-weekly technical sessions, hackathons, and executive symposiums featuring seasoned industry leads from Microsoft, CGI, Amazon, and Big-4 consulting firms.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Continuous Evaluation & Feedback Loop",
      desc: "Weekly surprise tests, mid-term examinations, and open-house parent meetings ensure that students remain ahead of Utkal University's CBCS grading benchmarks.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Dark Vignette */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/486600220_1163639735548661_1664987409974324893_n.jpg"
              alt="Trident Academy Colonnade Avenue"
              fill
              priority
              className="object-cover object-center filter contrast-105 opacity-35 scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21] via-[#070D21]/90 to-[#070D21]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21] via-transparent to-[#070D21]/60" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                About Trident Academy of Professional Studies
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                Legacy of Academic Excellence Since 2000
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Operating under the aegis of the renowned <strong className="text-white font-medium">TACT Trust</strong>, 
                TAPS is the undisputed No. 1 institution under Utkal University for BCA and BBA degrees. 
                Permanently recognized by the Higher Education Department, Govt. of Odisha, and AICTE approved.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-md cursor-pointer hover-lift"
                >
                  Admission Enquiry 2026 →
                </button>
                <Link
                  href="/programmes"
                  className="px-6 py-3 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-700 font-semibold text-sm hover:border-zinc-400 hover:text-white transition-all duration-300"
                >
                  Explore BCA &amp; BBA Degrees
                </Link>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* 2X2 ACCREDITATIONS & INSTITUTIONAL PROFILE: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Story & Metrics */}
              <div className="lg:col-span-7 space-y-8 animate-fadeInUp">
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-zinc-600 mb-2">
                    Institutional Charter
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                    Shaping Technology &amp; Business Leaders at Infocity
                  </h2>
                </div>

                <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The Bachelor of Computer Applications (BCA) and Bachelor of Business Administration (BBA) 
                    programmes of TACT are conducted under <strong className="text-zinc-950 font-medium">Trident Academy of Professional Studies</strong> at 
                    our modern four-storeyed Technoplex at F2D, Chandaka Industrial Estate, Bhubaneswar.
                  </p>
                  <p>
                    Strategically located across an 11-acre campus in close proximity to global tech titans including 
                    Infosys, TCS, Wipro, and Mindtree, our students train in an ecosystem immersed in enterprise 
                    computing, financial analytics, and corporate management.
                  </p>
                </div>

                {/* 2x2 Accreditation Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {accreditations.map((item) => (
                    <div 
                      key={item.title}
                      className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-2xs"
                    >
                      <div className="text-[10px] tracking-widest font-semibold uppercase text-zinc-500 mb-1.5">
                        {item.badge}
                      </div>
                      <div className="font-semibold text-base text-zinc-950 mb-1">
                        {item.title}
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 2 Authentic Academic Photos in Left Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group">
                    <Image
                      src="/images/drive_third/ClassRooms__MG_2339.JPG"
                      alt="Tiered Lecture Theatres"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Academic Theatres
                      </span>
                      <span className="text-xs font-semibold">
                        Faculty Mentored Pedagogy
                      </span>
                    </div>
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-200 shadow-xs group">
                    <Image
                      src="/images/drive_third/Library_Library.JPG"
                      alt="Central Research Library"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                        Knowledge Vault
                      </span>
                      <span className="text-xs font-semibold">
                        Central DELNET Library
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Vision, Mission & Values Card + Campus Showcase */}
              <div className="lg:col-span-5 animate-fadeInUp flex flex-col gap-6">
                {/* Real Campus Showcase Photo Card */}
                <div className="relative h-56 sm:h-64 w-full rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
                  <Image
                    src="/images/drive_new/313302072_5505727856213384_7957099915361488478_n.jpg"
                    alt="Trident Technoplex Campus Infocity"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white text-black shadow-xs">
                      11-Acre Technoplex
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      Infocity IT Corridor, Patia
                    </div>
                    <div className="text-base font-bold text-white mt-0.5">
                      Flanked by Infosys, TCS &amp; Wipro Campus
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                  {/* Tab Switcher */}
                  <div className="flex rounded-xl bg-zinc-100 p-1 mb-6 border border-zinc-200">
                    <button
                      onClick={() => setActiveTab("vision")}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                        activeTab === "vision"
                          ? "bg-black text-white shadow-xs"
                          : "text-zinc-600 hover:text-black"
                      }`}
                    >
                      Our Vision
                    </button>
                    <button
                      onClick={() => setActiveTab("mission")}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                        activeTab === "mission"
                          ? "bg-black text-white shadow-xs"
                          : "text-zinc-600 hover:text-black"
                      }`}
                    >
                      Our Mission
                    </button>
                    <button
                      onClick={() => setActiveTab("values")}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                        activeTab === "values"
                          ? "bg-black text-white shadow-xs"
                          : "text-zinc-600 hover:text-black"
                      }`}
                    >
                      Our Values
                    </button>
                  </div>

                  {/* Tab Content */}
                  {activeTab === "vision" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-zinc-950">
                        Excellence in Teaching, Research &amp; Mentorship
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        To achieve and sustain a reputation for excellence in teaching, learning, applied research, 
                        and industry mentorship while upholding enduring human and ethical values.
                      </p>
                      <ul className="space-y-2.5 text-xs text-zinc-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Undisputed undergraduate institute of choice for Computer Applications and Business Administration.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Holistic personality development and corporate finishing school culture.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Recognized center of academic distinction across Eastern India.</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "mission" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-zinc-950">
                        Bridging Rigor with Industry Readiness
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        To provide the highest caliber of technical acumen, business ethics, and practical 
                        experience to undergraduate scholars.
                      </p>
                      <ul className="space-y-2.5 text-xs text-zinc-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Maintain premier academic infrastructure and continuous applied research labs.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Motivate students toward top-tier competitive examinations and campus drives.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Sustain vibrant industry-academia tie-ups with global consulting and IT firms.</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "values" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-zinc-950">
                        Students are First, Second &amp; Third Priority
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        At Trident, collaborative learning, integrity, and student success govern every administrative 
                        and pedagogical decision.
                      </p>
                      <ul className="space-y-2.5 text-xs text-zinc-700">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>ISO 9001:2008 certified academic quality framework and transparent governance.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Equality of opportunity and comprehensive merit-based scholarship assistance.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                          <span>Respect for research inquiry, intellectual curiosity, and social responsibility.</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </section>
        </AnimatedBackground>

        {/* PROGRESSIVE PRACTICES: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Pedagogical Framework
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Progressive Academic Practices
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Leading universities globally emphasize holistic student development. 
                At TAPS, structured mentorship and corporate finishing school culture are built into the daily curriculum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {progressivePractices.map((practice) => (
                <div
                  key={practice.title}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-2xs flex flex-col justify-between hover-lift"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4">
                      {practice.icon}
                    </div>
                    <h3 className="text-base font-semibold text-zinc-950 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {practice.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* CAMPUS ENVIRONMENT & ACADEMIC CULTURE VISUAL SHOWCASE */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-3 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-full shadow-2xs">
                Campus Atmosphere
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-zinc-950 tracking-tight leading-tight">
                Where Academic Rigor Meets Corporate Readiness
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-3 font-normal leading-relaxed">
                Take a glimpse into our modern amphitheatre lecture halls, central reference libraries, and executive seminar environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Tiered Lecture Theatres",
                  subtitle: "Faculty-Mentored Pedagogy",
                  desc: "Acoustically engineered amphitheatre rooms hosting interactive BCA & BBA lectures and code reviews.",
                  img: "/images/drive_third/ClassRooms__MG_2339.JPG",
                  tag: "Lecture Theatres",
                },
                {
                  title: "Central Research Library",
                  subtitle: "50,000+ Volume Archives",
                  desc: "Spacious reading halls with full DELNET access, research journals, and air-conditioned individual study pods.",
                  img: "/images/drive_third/Library_Library.JPG",
                  tag: "Knowledge Hub",
                },
                {
                  title: "Executive Seminar Halls",
                  subtitle: "Industry Colloquium & Case Studies",
                  desc: "Smart presentation suites where corporate leaders, visiting faculty, and scholars debate real-world market cases.",
                  img: "/images/drive_third/MBA_seminar_1.jpeg",
                  tag: "Seminar Suites",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-2xs hover:border-zinc-400 transition-all duration-300 group hover-lift flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-black backdrop-blur-xs shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedBackground>

        {/* HISTORICAL TIMELINE: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Authentic Campus Background Image with Scrim */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/drive_new/1746352355680.jpg"
              alt="Trident Campus Heritage"
              fill
              className="object-cover object-center filter contrast-105 opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070D21] via-[#070D21]/95 to-[#070D21]" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-2xl mb-14 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-3 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Milestones &amp; Evolution
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                Over 3 Decades of Academic Distinction
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mt-3 font-normal leading-relaxed">
                From a pioneering finishing school in 1991 to Eastern India’s benchmark undergraduate institution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 relative border-l border-zinc-800 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
                {milestones.map((m) => (
                  <div key={m.year} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-white group-hover:scale-125 transition-transform" />
                    <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
                      {m.year}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light max-w-2xl">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* 2 Legacy & Alumni Archive Photo Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative h-60 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl group">
                  <Image
                    src="/images/drive_second/alumni3.jpg"
                    alt="Annual Alumni Homecoming"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-600 text-white">
                      Alumni Network
                    </span>
                    <h4 className="text-base font-bold mt-1">
                      Over 2,936+ Graduates Placed Worldwide
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">
                      Leading Fortune 500 corporations and global IT enterprises.
                    </p>
                  </div>
                </div>

                <div className="relative h-60 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl group">
                  <Image
                    src="/images/drive_second/Activities.jpg"
                    alt="Campus Festivals and Cultural Distinction"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-600 text-white">
                      Campus Culture
                    </span>
                    <h4 className="text-base font-bold mt-1">
                      Trifest &amp; Annual Cultural Celebrations
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">
                      Fostering creativity, theatrical arts, hackathons, and leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
