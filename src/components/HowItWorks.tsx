"use client";

import React from "react";
import { UploadCloud, Sliders, Code2, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload",
      description: "Drag and drop your raw product footage.",
      icon: UploadCloud,
      badge: "01"
    },
    {
      title: "Customize",
      description: "Tag products and style the interface.",
      icon: Sliders,
      badge: "02"
    },
    {
      title: "Copy",
      description: "Generate your unique embed snippet.",
      icon: Code2,
      badge: "03"
    },
    {
      title: "Go Live",
      description: "Watch engagement skyrocket immediately.",
      icon: Rocket,
      badge: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-28 relative z-10 px-4 sm:px-6 lg:px-8 bg-inverse-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="font-hanken font-bold text-4xl sm:text-5xl lg:text-6xl text-inverse-on-surface tracking-tight leading-[1.1] mb-6">
            From creation to conversion in minutes.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle with 3D Glass Effect */}
                <div className="relative mb-8">
                  <div className="glass-circle w-32 h-32 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-inverse-on-surface/60 relative z-10" />
                  </div>
                  {/* Connecting line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-outline/30 to-transparent -translate-y-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold text-inverse-on-surface/70">
                    {step.badge}. {step.title}
                  </div>
                  <p className="text-sm text-inverse-on-surface/60 leading-relaxed max-w-[240px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
