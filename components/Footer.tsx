"use client";

import Link from "next/link";

export default function Footer() {
  const academicLinks = [
    { name: "BCA — Computer Applications", href: "/admission" },
    { name: "BBA — Business Administration", href: "/admission" },
    { name: "Academic Regulations & Syllabi", href: "#" },
    { name: "Utkal University Regulations", href: "#" },
    { name: "Semester Examination Calendar", href: "#" },
  ];

  const admissionLinks = [
    { name: "Online Application Form 2026–27", href: "/admission" },
    { name: "Eligibility Criteria & Guidelines", href: "/admission" },
    { name: "Academic Fee Schedule & Aid", href: "#" },
    { name: "Merit Scholarship Directory", href: "#" },
    { name: "Utkal University Regulations", href: "#" },
  ];

  const campusLinks = [
    { name: "Institutional Profile & Heritage", href: "/about" },
    { name: "High-Performance Computing Labs", href: "#" },
    { name: "Training & Placement Cell", href: "#placements" },
    { name: "Student Innovation & Research", href: "#" },
    { name: "Anti-Ragging & Code of Conduct", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#001128] text-slate-200 border-t-2 border-[#0020D6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 pb-12">
        
        {/* EDITORIAL PHILOSOPHY QUOTE IN SERIF ITALIC */}
        <div className="border-b border-white/10 pb-14 mb-14">
          <div className="max-w-3xl">
            <span className="text-[10px] font-sans tracking-[0.25em] text-sky-400 font-bold uppercase block mb-3">
              Institutional Creed
            </span>
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-snug">
              &ldquo;Destiny is not a matter of chance, it is a matter of choice; it is not a thing to be waited for, it is a thing to be achieved. Let us repeat endlessly to our self, &apos;We will achieve extraordinary success in life. It all depends on us.&apos;&rdquo;
            </blockquote>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-slate-400 font-semibold mt-4">
              — Trident Educational Charter
            </p>
          </div>
        </div>

        {/* STRUCTURED 4-COLUMN DIRECTORY */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Academics */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Academics
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {academicLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Admissions */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Admissions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {admissionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Campus & Institution */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Institution
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {campusLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Coordinates */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.18em] uppercase text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Infocity Campus
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed space-y-1">
              <p className="font-bold text-white">
                TRIDENT ACADEMY OF CREATIVE TECHNOLOGY
              </p>
              <p className="text-[11px] text-sky-400 font-semibold">
                School of Professional Studies (TAPS)
              </p>
              <p>F2D, Chandaka Industrial Estate, Infocity</p>
              <p>Patia, Bhubaneswar, Odisha — 751024</p>
              <p className="pt-2 font-semibold text-white">
                Admissions: +91 63715 12551
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/916371512551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0020D6] hover:bg-[#0018b3] text-white px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-colors shadow-sm"
              >
                <span>WhatsApp Desk</span>
                <span>↗</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white underline underline-offset-4 font-medium transition-colors"
              >
                Campus Map
              </Link>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA & COPYRIGHT STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>
            © 2026 Trident Academy of Creative Technology. All Rights Reserved. Utkal University Affiliated.
          </p>
          <div className="flex items-center gap-5 text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">
              AICTE Compliance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
