"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    id: "artisan",
    name: "ARTISAN",
    tagline: "Perfect for independent brands launching their first shoppable loops.",
    monthly: 49,
    yearly: 39,
    features: [
      "5 Active Shoppable Videos",
      "Global CDN Access",
      "Standard Conversion Analytics",
      "Email Support",
      "Basic Branding Customization",
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: null,
  },
  {
    id: "maison",
    name: "MAISON",
    tagline: "Tailored for growing DTC houses and boutique storefronts.",
    monthly: 149,
    yearly: 119,
    features: [
      "Unlimited Shoppable Videos",
      "Advanced Player Customization",
      "Real-time Revenue Attribution Intel",
      "Priority Concierge Support",
      "Platform API Integrations",
      "Custom Tag Styling templates",
    ],
    cta: "Select Maison Plan",
    highlight: true,
    badge: "MAISON TIER",
  },
  {
    id: "atelier",
    name: "ATELIER",
    tagline: "For established houses requiring custom solutions and APIs.",
    monthly: 399,
    yearly: 319,
    features: [
      "White-label API & SDK Access",
      "Dedicated Account Director",
      "Custom Edge CDN Infrastructure",
      "Bespoke Visual Styling service",
      "Multi-store master sync",
      "99.9% uptime SLA guarantee",
    ],
    cta: "Contact Atelier Sales",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-14 bg-surface-container-low px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-7">
        <h2 className="font-hanken text-2xl sm:text-3xl font-bold text-primary mb-2 tracking-tight">
          Plans for the discerning brand.
        </h2>
        <p className="text-on-surface-variant text-xs sm:text-sm">
          Select a tier tailored to your scale. Save 20% with an annual commitment.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all cursor-pointer ${
              billing === "monthly"
                ? "bg-primary-container text-on-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all cursor-pointer flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-primary-container text-on-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Yearly
            <span className="text-[9px] font-bold tracking-widest text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div key={plan.id} className="relative">
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-primary-container text-on-primary text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm whitespace-nowrap">
                  {plan.badge}
                </span>
              </div>
            )}

            <div
              onClick={() => setSelected(plan.id)}
              className={`bg-surface-container-lowest flex flex-col p-5 h-full cursor-pointer transition-all duration-200 ${
                selected === plan.id
                  ? "ring-2 ring-primary shadow-md scale-[1.02]"
                  : plan.highlight
                  ? "border-2 border-primary-container hover:shadow-md hover:scale-[1.01]"
                  : "border border-outline-variant hover:border-primary/40 hover:shadow-sm hover:scale-[1.01]"
              } rounded`}
            >
              {/* Plan name */}
              <h3 className="font-hanken text-xs font-bold tracking-[0.15em] text-primary mb-1.5">
                {plan.name}
              </h3>
              <p className="text-on-surface-variant text-xs leading-snug mb-4">
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-hanken text-4xl font-bold text-primary">
                  ${billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                <span className="text-on-surface-variant text-xs">/mo</span>
              </div>

              {/* Divider */}
              <div className="border-t border-outline-variant mb-4" />

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0 stroke-[2]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] rounded transition-all cursor-pointer ${
                  selected === plan.id
                    ? "bg-primary text-on-primary"
                    : plan.highlight
                    ? "bg-primary-container text-on-primary hover:bg-primary"
                    : "border border-outline-variant text-primary hover:border-primary"
                }`}
              >
                {selected === plan.id ? "✓ Selected" : plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
