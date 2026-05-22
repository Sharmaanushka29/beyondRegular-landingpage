"use client";

import React, { useState } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    website: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context Info */}
          <div className="lg:col-span-5 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low border border-outline-variant text-on-surface-variant label-caps">
              <Mail className="h-3 w-3 text-primary-container/60" />
              <span>Connect With Us</span>
            </div>
            <h2 className="font-hanken font-bold text-3xl sm:text-5xl text-primary tracking-tight leading-[1.1] mb-6 mt-4">
              Let’s build your storefront.
            </h2>
            <p className="font-hanken text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8">
              Discuss custom edge builds, CMS integrations, and bespoke styling with our engineering team. We typically respond within two hours.
            </p>

            <div className="space-y-4 text-xs text-on-surface-variant">
              <div>
                <p className="font-semibold text-primary uppercase tracking-wider text-[10px] mb-1">Location</p>
                <p>India</p>
              </div>
              <div>
                <p className="font-semibold text-primary uppercase tracking-wider text-[10px] mb-1">Direct inquiries</p>
                <a href="mailto:enquire@itsbeyondregular.com" className="hover:text-primary-container underline cursor-pointer">enquire@itsbeyondregular.com</a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-surface-container-lowest border border-outline-variant rounded p-8 sm:p-10 shadow-sm relative overflow-hidden">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-surface flex items-center justify-center mb-6 shadow-sm">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-hanken font-bold text-lg text-primary mb-2">Request Received</h3>
                  <p className="text-xs text-on-surface-variant max-w-sm">
                    Thank you. One of our design architects will reach out shortly to coordinate a walkthrough.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", brand: "", website: "", message: "" });
                    }}
                    className="mt-6 text-xs text-primary-container hover:underline uppercase tracking-widest font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    Send another request <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-on-surface-variant mb-2 font-bold label-caps">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-1 py-2.5 border-b border-outline-variant bg-transparent text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:bg-surface-container-low/20 transition-all duration-300"
                        placeholder="e.g. Alexander Roy"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-on-surface-variant mb-2 font-bold label-caps">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-1 py-2.5 border-b border-outline-variant bg-transparent text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:bg-surface-container-low/20 transition-all duration-300"
                        placeholder="e.g. alex@brand.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Brand */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-on-surface-variant mb-2 font-bold label-caps">Business Name</label>
                      <input
                        type="text"
                        required
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-1 py-2.5 border-b border-outline-variant bg-transparent text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:bg-surface-container-low/20 transition-all duration-300"
                        placeholder="e.g. Acme Inc."
                      />
                    </div>
                    {/* Website */}
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-on-surface-variant mb-2 font-bold label-caps">Website</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-1 py-2.5 border-b border-outline-variant bg-transparent text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:bg-surface-container-low/20 transition-all duration-300"
                        placeholder="e.g. https://yourwebsite.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider text-on-surface-variant mb-2 font-bold label-caps">Bespoke requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-1 py-2.5 border-b border-outline-variant bg-transparent text-xs text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:bg-surface-container-low/20 transition-all duration-300 resize-none"
                      placeholder="Outline any customization requirements, expected monthly pageviews, or CMS setups."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-primary-container hover:bg-primary-container/95 text-surface text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-[0.98] cursor-pointer"
                  >
                    Submit request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
