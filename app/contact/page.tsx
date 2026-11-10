"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import TactFooter from "@/components/TactFooter";
import QueryModal from "@/components/QueryModal";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Admission Inquiry",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Please enter your name, email, and contact number.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSent(true);
    }, 700);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      <Header onOpenQuery={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* HERO BANNER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-b border-zinc-800 relative overflow-hidden">
          {/* Rich Background Image with One-Sided Scrim */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/drive_new/1721020760290.jpg"
              alt="Trident Academy of Professional Studies Campus Building"
              fill
              priority
              className="object-cover object-center filter contrast-105 opacity-80 scale-100"
              sizes="100vw"
            />
            {/* Smooth one-sided scrim: deep dark on left for text legibility, clear and vibrant on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D21]/98 via-[#070D21]/80 via-50% to-[#070D21]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D21]/60 via-transparent to-transparent" />
          </div>

          <section className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl animate-fadeInUp">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 mb-4 bg-zinc-900 border border-zinc-700 px-3.5 py-1 rounded-full shadow-2xs">
                Reach Our Infocity Campus
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-6">
                Connect with Trident Academy of Professional Studies
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Located in the heart of Bhubaneswar's premier IT corridor at Infocity, Patia. 
                Our admissions officers and academic advisors are available for in-person campus visits, phone consultations, and inquiries.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <a
                  href="https://wa.me/916371512551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black font-sans font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-zinc-200 transition-colors"
                >
                  <span>Chat on WhatsApp ↗</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white font-sans font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <span>Online Admission Inquiry ↗</span>
                </button>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* 2-COLUMN CONTACT CHANNELS & MESSAGE FORM: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Direct Institutional Channels */}
              <div className="lg:col-span-5 space-y-8 animate-fadeInUp">
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">
                    Institutional Office
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                    Campus Coordinates &amp; Office Desk
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-zinc-700">
                  <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold mb-1.5">
                      Campus Address
                    </div>
                    <p className="font-semibold text-zinc-950 text-sm">
                      Trident Academy of Professional Studies (TAPS)
                    </p>
                    <p className="text-zinc-600 mt-1 leading-relaxed">
                      F-2, Chandaka Industrial Estate, In front of Infocity,<br />
                      Bhubaneswar, Odisha — 751024, India
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 font-medium">
                      Landmark: In front of Infocity • Chandaka Industrial Estate
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold mb-1.5">
                      Admission Contact &amp; Phones
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-zinc-950 font-mono text-sm">
                        +91 98611 91195
                      </p>
                      <p className="text-zinc-700 font-mono text-sm">
                        +91 70084 43255
                      </p>
                      <p className="text-zinc-500 text-xs mt-1">
                        Official Admission Desk: Monday to Saturday (9:00 AM – 5:30 PM)
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold mb-1.5">
                      Email Communication
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-zinc-950">
                        admissions@taps.ac.in
                      </p>
                      <p className="text-zinc-600 text-xs">
                        General: info@taps.ac.in
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold mb-1.5">
                      Office Working Hours
                    </div>
                    <p className="text-zinc-950 font-medium">
                      Monday to Saturday: 9:00 AM – 5:30 PM
                    </p>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      Admission Cell remains open on Sundays during peak admission cycles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Message Box */}
              <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-2xs animate-fadeInUp">
                <div className="border-b border-zinc-100 pb-6 mb-8">
                  <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">
                    Send a Message
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                    Inquire Directly with Administration
                  </h2>
                </div>

                {isSent ? (
                  <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto text-xl">
                      ✓
                    </div>
                    <h3 className="text-xl font-medium text-zinc-950">
                      Message Dispatched Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Trident Academy of Professional Studies. 
                      Our administrative team has received your message and will reply via email or phone shortly.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="10-digit number"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                        Subject of Inquiry
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option value="General Admission Inquiry">General Admission Inquiry (BCA / BBA)</option>
                        <option value="Campus Tour Booking">Campus Tour &amp; Facility Inspection</option>
                        <option value="Fee Structure & Scholarship">Fee Structure &amp; Scholarship Queries</option>
                        <option value="Hostel Accommodation">Hostel &amp; Residential Inquiries</option>
                        <option value="Placement & Training Verification">Placement &amp; Corporate Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-900 mb-1.5 uppercase tracking-wider">
                        Message / Query Details
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please write your questions or preferred appointment schedule..."
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Send Inquiry to TAPS →"}
                    </button>
                  </form>
                )}
              </div>

            </div>

          </section>
        </AnimatedBackground>

        {/* TRANSIT GUIDE: LIGHT VARIANT */}
        <AnimatedBackground variant="light" className="border-b border-zinc-200">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-2xl mb-10 animate-fadeInUp">
              <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">
                Transit &amp; Accessibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-tight">
                How to Reach Our Campus
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                <div className="text-base font-semibold text-zinc-950 mb-2">
                  🚆 From Railway Station (BBS)
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Distance: ~12 km. Direct Mo Bus route (Route 10, 11) or auto-rickshaws directly to Infocity Square / Patia.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                <div className="text-base font-semibold text-zinc-950 mb-2">
                  ✈️ From Airport (BBI)
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Distance: ~16 km. Biju Patnaik International Airport is connected via Nandankanan Road and Jayadev Vihar flyover.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                <div className="text-base font-semibold text-zinc-950 mb-2">
                  🚌 From Baramunda Bus Terminal (ISBT)
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Distance: ~14 km. Frequent direct bus connectivity and taxis available 24/7 along NH-16 towards Patia.
                </p>
              </div>
            </div>
          </section>
        </AnimatedBackground>

        {/* GOOGLE MAP IFRAME WITH GRAYSCALE FILTER: DARK VARIANT */}
        <AnimatedBackground variant="dark" className="border-t border-zinc-800">
          <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-white">
            <div className="max-w-3xl mb-8">
              <div className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">
                Interactive Campus Map
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-tight">
                Technoplex Satellite Location
              </h2>
            </div>

            {/* Grayscale Map Container */}
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <iframe
                title="Trident Academy of Professional Studies Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.030307018735!2d85.80560981444366!3d20.34036661629799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091d551a38c7%3A0xd2f96c2eaee7b45f!2sTrident+Academy+of+Creative+Technology%2C+Infocity%2C+Chandrasekharpur%2C+Bhubaneswar%2C+Odisha+751016!5e0!3m2!1sen!2sin!4v1466591145858"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(90%) contrast(120%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </AnimatedBackground>
      </main>

      <TactFooter onOpenQuery={() => setIsModalOpen(true)} />
      <QueryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

