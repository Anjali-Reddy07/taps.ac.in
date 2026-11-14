"use client";

import { useState, useEffect } from "react";

interface QueryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QueryModal({ isOpen, onClose }: QueryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "bca",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Keyboard Escape listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* QUICK ENQUIRY SLIDE-OVER DRAWER (Responsive Bottom Sheet on Mobile / Slide-Over on Desktop) */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="relative w-full max-w-lg bg-white h-full max-h-[100dvh] shadow-2xl flex flex-col justify-between z-10 overflow-hidden border-l border-zinc-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 px-6 sm:px-8 py-5 border-b border-indigo-100 flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold tracking-widest text-blue-700 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulseGlow" />
              <span>Admissions Desk • 2026–27</span>
            </div>
            <h3 id="drawer-title" className="text-xl font-bold tracking-tight text-slate-900">
              Quick Academic Enquiry
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-indigo-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-700 hover:border-blue-500 transition-all active:scale-95 cursor-pointer shadow-2xs"
            aria-label="Close Enquiry Drawer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Body (Scrollable) */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
          {status === "success" ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-blue-500/25">
                ✓
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Enquiry Transmitted Successfully
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in TAPS. Our admissions counseling cell will reach out to you within one business day with prospectus and merit seat allocation details.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-xl transition-all shadow-md shadow-blue-500/20 hover-lift active:scale-95 cursor-pointer"
                >
                  Close Drawer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Candidate Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-800 mb-1.5">
                  Candidate Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="e.g. Aditi Mohapatra"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-indigo-50/30 border rounded-xl outline-none transition-colors text-slate-900 placeholder-slate-400 ${
                    errors.name ? "border-red-400 bg-red-50/20" : "border-indigo-100 focus:border-blue-600 focus:bg-white"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-800 mb-1.5">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="10-digit mobile"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-indigo-50/30 border rounded-xl outline-none transition-colors text-slate-900 placeholder-slate-400 ${
                      errors.phone ? "border-red-400 bg-red-50/20" : "border-indigo-100 focus:border-blue-600 focus:bg-white"
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-800 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="aditi@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-indigo-50/30 border rounded-xl outline-none transition-colors text-slate-900 placeholder-slate-400 ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-indigo-100 focus:border-blue-600 focus:bg-white"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Interested Program */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-800 mb-1.5">
                  Interested Undergraduate Program
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-indigo-50/30 border border-indigo-100 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-slate-900 cursor-pointer font-medium"
                >
                  <option value="bca">BCA — Bachelor of Computer Applications (4 Years NEP)</option>
                  <option value="bba">BBA — Bachelor of Business Administration (4 Years NEP)</option>
                </select>
              </div>

              {/* Inquiry Details */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-800 mb-1.5">
                  Specific Questions / Remarks
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquire about seat eligibility, semester fee structure, merit grants, or hostel facilities..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-indigo-50/30 border border-indigo-100 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-indigo-200 bg-white rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:border-blue-400 transition-colors active:scale-95 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-7 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-blue-500/25 hover-lift disabled:opacity-50 active:scale-95 cursor-pointer"
                >
                  {status === "submitting" ? "Transmitting..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer Info */}
        <div className="bg-indigo-50/50 px-6 sm:px-8 py-3.5 border-t border-indigo-100 text-xs text-slate-500 flex items-center justify-between shrink-0">
          <span>Infocity Campus, Bhubaneswar</span>
          <span className="font-mono text-[11px] text-indigo-400">Admissions 2026–27</span>
        </div>
      </div>
    </div>
  );
}
