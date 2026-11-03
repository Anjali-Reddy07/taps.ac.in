"use client";

import { useState } from "react";

interface AdmissionRibbonsProps {
  onOpenQuery?: () => void;
}

export default function AdmissionRibbons({ onOpenQuery }: AdmissionRibbonsProps) {
  const [downloading, setDownloading] = useState(false);
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Create a virtual text/pdf blob download for user instant gratification
      const blob = new Blob(
        [
          "TRIDENT ACADEMY OF PROFESSIONAL STUDIES (TAPS)\n" +
          "AFFILIATED TO UTKAL UNIVERSITY, BHUBANESWAR\n\n" +
          "APPLICATION FORM FOR ADMISSION (2026–2027)\n" +
          "Courses: BCA | BBA | B.Sc (Biotech / CS)\n\n" +
          "Candidate Name: _______________________________\n" +
          "Parent/Guardian: _______________________________\n" +
          "Contact Number: _______________________________\n" +
          "Aggregate +2 / 12th Percentage: _______________\n\n" +
          "Submit this completed form to TAPS Admissions Office, Infocity, Bhubaneswar."
        ],
        { type: "text/plain" }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "TAPS-Admission-Application-Form-2026.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  const ribbons = [
    {
      id: "details",
      title: "Admission Details",
      tag: "Eligibility & Seats",
      badge: "Utkal Univ Criteria",
      color: "from-blue-600 via-[#0020D6] to-blue-800",
      accentBg: "bg-blue-50/90",
      accentBorder: "border-blue-200",
      accentText: "text-[#0020D6]",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bullets: [
        "BCA: 10+2 with Math / Stats / CS",
        "BBA: 10+2 in Any Stream",
        "Direct merit seat counseling",
      ],
      action: "View Criteria Matrix",
      actionType: "link",
      href: "/admission",
    },
    {
      id: "advertisement",
      title: "Admission Circular",
      tag: "Official 2026 Notice",
      badge: "Press Release",
      color: "from-sky-500 via-blue-600 to-[#0020D6]",
      accentBg: "bg-sky-50/90",
      accentBorder: "border-sky-200",
      accentText: "text-blue-700",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      bullets: [
        "Government of Odisha approved",
        "Utkal University registration dates",
        "Hostel & transport notification",
      ],
      action: "Read Circular",
      actionType: "preview",
    },
    {
      id: "download",
      title: "Download Application",
      tag: "Printable PDF",
      badge: "Instant Form",
      color: "from-[#0020D6] via-indigo-600 to-[#001D4A]",
      accentBg: "bg-indigo-50/90",
      accentBorder: "border-indigo-200",
      accentText: "text-[#0020D6]",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      bullets: [
        "Official offline registration form",
        "Document verification checklist",
        "Free prospective scholar kit",
      ],
      action: "Download Form",
      actionType: "download",
    },
    {
      id: "fees",
      title: "Fee Structure",
      tag: "Scholarship & Aid",
      badge: "Up to 50% Grants",
      color: "from-blue-700 via-[#0020D6] to-sky-600",
      accentBg: "bg-blue-50/90",
      accentBorder: "border-blue-200",
      accentText: "text-[#0020D6]",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
      bullets: [
        "Transparent semester schedules",
        "Installment payment support",
        "Merit waiver for +2 toppers",
      ],
      action: "Calculate Fee & Aid",
      actionType: "preview",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-28 px-4 sm:px-8 lg:px-14 border-b border-blue-100 overflow-hidden">
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-200/25 rounded-full blur-[120px] pointer-events-none" />

      {/* TOP HEADER: "ADMISSION OPEN" IN ADVANCED ANIMATED STYLE */}
      <div className="max-w-7xl mx-auto text-center space-y-5 mb-16 relative z-10">
        
        {/* Pulsing Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white text-xs font-sans tracking-[0.2em] uppercase font-bold text-[#0020D6] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0020D6] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0020D6]" />
          </span>
          <span>Official Intake 2026–2027</span>
        </div>

        {/* Heading inspired by user's banner with high-end editorial treatment */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#001D4A]">
          Admission <span className="font-editorial text-[#0020D6] font-normal">Open</span>
        </h2>

        {/* Course Offerings Pills with Glowing Status Dots */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-4 py-2 rounded-full shadow-xs hover:border-[#0020D6] transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#001D4A]">
              Bachelor in Business Administration (BBA)
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-4 py-2 rounded-full shadow-xs hover:border-[#0020D6] transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0020D6] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#001D4A]">
              Bachelor in Computer Application (BCA)
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-4 py-2 rounded-full shadow-xs hover:border-[#0020D6] transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm font-bold text-[#001D4A]">
              B.Sc (Biotechnology &amp; CS)
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto font-normal leading-relaxed pt-2">
          Select any verified admission gateway below to download application forms, review fee structures, or inspect official Utkal University circulars.
        </p>

      </div>

      {/* 4 ADVANCED HANGING RIBBON CARDS */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Overhead Hanging Wire / Cable */}
        <div className="hidden sm:block absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6">
          {ribbons.map((ribbon, idx) => (
            <div
              key={ribbon.id}
              className="group relative flex flex-col items-center"
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              {/* Overhead Tether String & Metallic Pin */}
              <div className="hidden sm:flex flex-col items-center -mt-6 mb-2">
                <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0020D6] shadow-sm z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0020D6]" />
                </div>
                <div className="w-[1.5px] h-6 bg-gradient-to-b from-[#0020D6] to-blue-300" />
              </div>

              {/* RIBBON CONTAINER (Chevron tail clip-path with smooth physics hover) */}
              <div
                className="relative w-full bg-white rounded-t-2xl shadow-[0_15px_35px_rgba(0,32,214,0.08)] border border-blue-100 hover:border-[#0020D6] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_25px_50px_rgba(0,32,214,0.18)] flex flex-col justify-between overflow-hidden cursor-pointer pb-12"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 22px), 50% 100%, 0% calc(100% - 22px))",
                }}
                onClick={() => {
                  if (ribbon.actionType === "download") {
                    handleDownload();
                  } else if (ribbon.actionType === "preview") {
                    setActivePreview(ribbon.id);
                  } else if (onOpenQuery) {
                    onOpenQuery();
                  }
                }}
              >
                {/* Diagonal Glass Reflection Shimmer on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent pointer-events-none z-10" />

                {/* Top Ribbon Accent Color Band */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${ribbon.color}`} />

                {/* Ribbon Card Body */}
                <div className="p-6 sm:p-7 flex flex-col items-center text-center space-y-4">
                  
                  {/* Floating Glowing Icon */}
                  <div className={`p-4 rounded-2xl ${ribbon.accentBg} ${ribbon.accentBorder} border ${ribbon.accentText} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                    {ribbon.icon}
                  </div>

                  {/* Eyebrow Tag */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#0052CC] block">
                      {ribbon.tag}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#001D4A] group-hover:text-[#0020D6] transition-colors leading-snug">
                      {ribbon.title}
                    </h3>
                  </div>

                  {/* Verified Badge */}
                  <span className="text-[10px] font-sans font-semibold bg-blue-50 border border-blue-200 text-[#0020D6] px-3 py-1 rounded-full shadow-xs">
                    {ribbon.badge}
                  </span>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 text-left w-full pt-2 border-t border-blue-50 text-xs text-slate-600">
                    {ribbon.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0020D6]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Animated Ribbon Bottom Action Pill */}
                <div className="px-6 pb-4 pt-2 w-full flex justify-center">
                  <button
                    type="button"
                    className="w-full bg-blue-50 group-hover:bg-[#0020D6] text-[#0020D6] group-hover:text-white border border-blue-200 group-hover:border-[#0020D6] font-bold text-xs py-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>
                      {ribbon.id === "download" && downloading
                        ? "Generating PDF..."
                        : ribbon.action}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* INTERACTIVE PREVIEW MODAL FOR CIRCULAR & FEE STRUCTURE */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#001D4A]/50 backdrop-blur-xs"
            onClick={() => setActivePreview(null)}
          />
          <div className="relative bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl text-[#001D4A] z-10 animate-fadeIn">
            
            <div className="flex items-center justify-between pb-4 border-b border-blue-100">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#0020D6] uppercase block">
                  TAPS Portal Preview
                </span>
                <h3 className="font-bold text-lg text-[#001D4A]">
                  {activePreview === "advertisement" ? "Admission Circular 2026–27" : "Fee Structure & Merit Waivers"}
                </h3>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="w-8 h-8 rounded-full border border-blue-100 flex items-center justify-center text-slate-500 hover:text-[#0020D6] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activePreview === "advertisement" ? (
                <>
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-[#001D4A] space-y-2">
                    <p className="font-bold text-[#0020D6]">Official Notice No: TAPS/ADM/2026-01</p>
                    <p>Applications are invited for admissions into 3-Year Regular BCA &amp; BBA courses affiliated to Utkal University for Academic Session 2026–2027.</p>
                  </div>
                  <ul className="space-y-2 pl-2">
                    <li>• Commencement of Registration: March 2026</li>
                    <li>• Counseling &amp; Scrutiny of Documents: Rolling Admissions</li>
                    <li>• Campus Location: Technoplex, Chandaka Industrial Estate, Infocity, Patia, Bhubaneswar</li>
                  </ul>
                </>
              ) : (
                <>
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-[#001D4A] space-y-2">
                    <p className="font-bold text-[#0020D6]">Transparent &amp; Affordable Fee Policy</p>
                    <p>Utkal University regulated tuition with zero hidden charges. Semester installment schedules are supported for all registered scholars.</p>
                  </div>
                  <div className="space-y-2 border border-blue-100 rounded-xl p-3 bg-white">
                    <div className="flex justify-between font-bold text-xs text-[#001D4A] border-b pb-1">
                      <span>Course Program</span>
                      <span>Tuition / Sem</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>BCA (Computer Application)</span>
                      <span className="font-semibold text-[#0020D6]">Affordable Utkal Norms</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>BBA (Business Administration)</span>
                      <span className="font-semibold text-[#0020D6]">Affordable Utkal Norms</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold">
                    ✦ Merit Waiver: Students scoring &gt;80% in 10+2 qualify for direct scholarship grant on first semester tuition.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-blue-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setActivePreview(null);
                  handleDownload();
                }}
                className="text-xs font-bold text-[#0020D6] hover:underline"
              >
                Download Official PDF ↓
              </button>
              <button
                onClick={() => {
                  setActivePreview(null);
                  if (onOpenQuery) onOpenQuery();
                }}
                className="bg-[#0020D6] hover:bg-[#0018b3] text-white px-5 py-2 rounded-full text-xs font-bold shadow-md shadow-blue-600/25 transition-all"
              >
                Apply Online →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
