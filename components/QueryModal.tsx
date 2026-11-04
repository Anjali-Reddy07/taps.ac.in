"use client";

import { useState } from "react";

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
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001D4A]/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,32,214,0.15)] overflow-hidden border border-blue-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 px-7 py-6 flex items-center justify-between border-b border-blue-100">
          <div>
            <span className="text-[10px] font-sans tracking-[0.2em] text-[#0020D6] font-bold uppercase block mb-1">
              Admissions Desk • 2026–27
            </span>
            <h3 className="text-lg font-bold tracking-tight text-[#001D4A]">
              Submit Academic Query
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-blue-100 bg-white flex items-center justify-center text-slate-500 hover:text-[#0020D6] transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-7">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-[#0020D6] text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold shadow-md shadow-blue-600/30">
                ✓
              </div>
              <h4 className="text-lg font-bold text-[#001D4A]">Query Received Successfully</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in TAPS. Our admissions counseling cell will reach out to you within one business day with prospectus and curriculum guidelines.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="bg-[#0020D6] hover:bg-[#0018b3] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all shadow-md shadow-blue-600/25"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-sans tracking-wider uppercase font-semibold text-[#001D4A] mb-1.5">
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
                  className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-xl outline-none transition-colors text-[#001D4A] placeholder-slate-400 ${
                    errors.name ? "border-red-400 bg-red-50/20" : "border-blue-100 focus:border-[#0020D6] focus:bg-white"
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1 font-sans">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans tracking-wider uppercase font-semibold text-[#001D4A] mb-1.5">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="10-digit mobile number"
                    className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-xl outline-none transition-colors text-[#001D4A] placeholder-slate-400 ${
                      errors.phone ? "border-red-400 bg-red-50/20" : "border-blue-100 focus:border-[#0020D6] focus:bg-white"
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-sans">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-sans tracking-wider uppercase font-semibold text-[#001D4A] mb-1.5">
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
                    className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-xl outline-none transition-colors text-[#001D4A] placeholder-slate-400 ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-blue-100 focus:border-[#0020D6] focus:bg-white"
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1 font-sans">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans tracking-wider uppercase font-semibold text-[#001D4A] mb-1.5">
                  Interested Program
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-blue-100 rounded-xl outline-none focus:border-[#0020D6] focus:bg-white text-[#001D4A]"
                >
                  <option value="bca">BCA — Bachelor in Computer Application (3 Years)</option>
                  <option value="bba">BBA — Bachelor in Business Administration (3 Years)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans tracking-wider uppercase font-semibold text-[#001D4A] mb-1.5">
                  Inquiry Details / Specific Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquire about seat eligibility, semester fee structure, merit grants, or hostel..."
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-blue-100 rounded-xl outline-none focus:border-[#0020D6] focus:bg-white text-[#001D4A] placeholder-slate-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-blue-100 bg-white rounded-full text-xs font-semibold text-slate-600 hover:text-[#0020D6] hover:bg-blue-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-7 py-2.5 bg-[#0020D6] hover:bg-[#0018b3] text-white rounded-full text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue-600/30 disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? "Transmitting..." : "Submit Query"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
