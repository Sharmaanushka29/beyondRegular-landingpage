"use client";

import React, { useState } from "react";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Artisan",
      priceMonthly: 49,
      priceYearly: 39,
      description: "Perfect for independent brands launching their first shoppable loops.",
      features: [
        "5 Active Shoppable Videos",
        "Global CDN Access",
        "Standard Conversion Analytics",
        "Email Support",
        "Basic Branding Customization"
      ],
      cta: "Start Free Trial",
      featured: false
    },
    {
      name: "Maison",
      priceMonthly: 149,
      priceYearly: 119,
      description: "Tailored for growing DTC houses and boutique storefronts.",
      features: [
        "Unlimited Shoppable Videos",
        "Advanced Player Customization",
        "Real-time Revenue Attribution Intel",
        "Priority Concierge Support",
        "Platform API Integrations",
        "Custom Tag Styling templates"
      ],
      cta: "Select Maison Plan",
      featured: true
    },
    {
      name: "Atelier",
      priceMonthly: 399,
      priceYearly: 319,
      description: "For established houses requiring custom solutions and APIs.",
      features: [
        "White-label API & SDK Access",
        "Dedicated Account Director",
        "Custom Edge CDN Infrastructure",
        "Bespoke Visual Styling service",
        "Multi-store master sync",
        "99.9% uptime SLA guarantee"
      ],
      cta: "Contact Atelier Sales",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-28 relative z-10 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-outline-variant text-on-surface-variant label-caps">
            <Info className="h-3 w-3 text-primary-container/60" />
            <span>Pricing Architecture</span>
          </div>
          <h2 className="font-hanken font-bold text-3xl sm:text-5xl text-primary tracking-tight leading-[1.1] mb-4 mt-4">
            Plans for the discerning brand.
          </h2>
          <p className="font-hanken text-on-surface-variant text-sm sm:text-base">
            Select a tier tailored to your scale. Save 20% with an annual commitment.
          </p>

          {/* Toggle switcher */}
          <div className="mt-8 inline-flex items-center p-1 rounded bg-surface-container border border-outline-variant">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-primary-container text-surface shadow-sm"
                  : "text-on-surface-variant hover:text-primary-container"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-primary-container text-surface shadow-sm"
                  : "text-on-surface-variant hover:text-primary-container"
              }`}
            >
              Yearly <span className="text-[9px] lowercase font-light pl-1 opacity-80">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative ${
                plan.featured
                  ? "bg-surface-container-lowest border border-primary-container shadow-md scale-[1.03] z-10"
                  : "bg-surface-container-lowest border border-outline-variant hover:border-primary-container/40 shadow-sm"
              }`}
            >
              {/* Highlight bar for Featured plan */}
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-surface px-4 py-1 rounded text-[9px] font-bold uppercase tracking-widest border border-primary-container shadow-md">
                  Maison Tier
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-8">
                  <h3 className="font-hanken font-bold text-lg uppercase tracking-wider text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-baseline gap-1 text-primary">
                  <span className="font-hanken font-bold text-4xl sm:text-5xl">
                    ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </span>
                  <span className="text-xs text-on-surface-variant">/mo</span>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-outline-variant/60 mb-8" />

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start text-xs text-on-surface-variant">
                      <Check className="h-4 w-4 text-primary-container shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-action Button */}
              <button
                className={`w-full py-3.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                  plan.featured
                    ? "bg-primary-container text-surface hover:bg-primary-container/95 shadow-sm"
                    : "bg-surface-container border border-outline-variant text-primary-container hover:bg-surface-container-high"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
