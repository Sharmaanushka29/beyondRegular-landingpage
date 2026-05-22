"use client";

import React, { useState } from "react";
import { Play, Flame, BarChart3, Globe2, Layers, Tag } from "lucide-react";

export default function Benefits() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(1);

  return (
    <section id="benefits" className="py-28 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low border border-outline-variant text-on-surface-variant label-caps">
            <Layers className="h-3.5 w-3.5 text-primary-container/60 shrink-0" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="font-hanken font-bold text-3xl sm:text-5xl text-primary tracking-tight leading-[1.1] mt-4 mb-4">
            Engineered for high-conversion commerce.
          </h2>
          <p className="font-hanken text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Every feature is crafted to maximize user engagement and purchasing speed without compromising design integrity or site performance.
          </p>
        </div>

        {/* Bento Grid - Tonal stepping and hairline borders, no shadows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Shoppable Videos (Large, 8 cols) */}
          <div className="md:col-span-8 group rounded border border-outline-variant bg-surface-container-low p-8 sm:p-10 flex flex-col justify-between min-h-[440px] transition-all duration-500 overflow-hidden relative">
            <div className="max-w-md relative z-10">
              <span className="inline-flex items-center justify-center p-3 rounded bg-surface-container-lowest border border-outline-variant text-primary-container mb-6 transition-transform duration-500 group-hover:scale-105">
                <Play className="h-5 w-5 fill-primary-container text-primary-container" />
              </span>
              <h3 className="font-hanken font-semibold text-lg sm:text-xl text-primary uppercase tracking-wide mb-3">
                Shoppable Video Player
              </h3>
              <p className="font-hanken text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Embed high-definition product loops. Customers tap overlayed hotspots to view specs and add items directly to their checkout cart without leaving the video.
              </p>
            </div>

            {/* Visual preview: Interactive hotspotted image */}
            <div className="mt-8 relative aspect-video w-full rounded border border-outline-variant bg-surface-container max-w-lg self-center lg:self-start">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
                alt="Luxury Fashion Apparel"
                className="w-full h-full object-cover opacity-85 sepia-[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent" />

              {/* Hotspot 1 */}
              <div className="absolute top-1/3 left-1/4">
                <button
                  onMouseEnter={() => setActiveHotspot(1)}
                  className={`w-5.5 h-5.5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    activeHotspot === 1
                      ? "bg-primary-container text-surface scale-110 shadow-sm"
                      : "bg-surface-container-lowest/90 text-primary-container border border-outline-variant"
                  }`}
                >
                  <Tag className="w-2.5 h-2.5" />
                </button>
                {activeHotspot === 1 && (
                  <div className="absolute top-7 -left-4 p-2 rounded border border-outline-variant bg-surface-container-lowest flex items-center gap-2.5 shadow-sm w-40 animate-fade-in z-20">
                    <div className="text-[10px] font-hanken">
                      <p className="font-bold text-primary uppercase tracking-wide truncate">Silk Linen Blazer</p>
                      <p className="text-on-surface-variant">$890</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Hotspot 2 */}
              <div className="absolute top-1/2 right-1/3">
                <button
                  onMouseEnter={() => setActiveHotspot(2)}
                  className={`w-5.5 h-5.5 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    activeHotspot === 2
                      ? "bg-primary-container text-surface scale-110 shadow-sm"
                      : "bg-surface-container-lowest/90 text-primary-container border border-outline-variant"
                  }`}
                >
                  <Tag className="w-2.5 h-2.5" />
                </button>
                {activeHotspot === 2 && (
                  <div className="absolute top-7 -left-4 p-2 rounded border border-outline-variant bg-surface-container-lowest flex items-center gap-2.5 shadow-sm w-40 animate-fade-in z-20">
                    <div className="text-[10px] font-hanken">
                      <p className="font-bold text-primary uppercase tracking-wide truncate">Leather Clutch</p>
                      <p className="text-on-surface-variant">$1,250</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Sub-second Delivery (Small, 4 cols) */}
          <div className="md:col-span-4 group rounded border border-outline-variant bg-surface-container-low p-8 sm:p-10 flex flex-col justify-between min-h-[440px] transition-all duration-500 overflow-hidden relative">
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center p-3 rounded bg-surface-container-lowest border border-outline-variant text-primary-container mb-6 transition-transform duration-500 group-hover:scale-105">
                <Flame className="h-5 w-5" />
              </span>
              <h3 className="font-hanken font-semibold text-lg text-primary uppercase tracking-wide mb-3">
                Sub-Second CDN
              </h3>
              <p className="font-hanken text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Zero layout shifts. Video chunks are optimized at the edge and serve compressed WebM/MP4 sizes dynamically, resulting in lightning-fast loads.
              </p>
            </div>

            {/* Graphic metric dial */}
            <div className="mt-8 flex flex-col items-center justify-center relative">
              <div className="w-32 h-32 rounded border border-outline-variant/60 flex flex-col items-center justify-center relative bg-surface-container-lowest">
                {/* SVG circular progress indicator */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="rgba(129, 11, 56, 0.05)"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="#810b38"
                    strokeWidth="3.5"
                    fill="transparent"
                    strokeDasharray="276"
                    strokeDashoffset="70"
                    className="transition-all duration-1000"
                  />
                </svg>
                <span className="font-hanken font-bold text-3xl text-primary-container">99.8</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant mt-0.5">Speed score</span>
              </div>
              <div className="mt-4 text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">
                Edge latency &lt; 85ms
              </div>
            </div>
          </div>

          {/* Card 3: Platform Agnostic (Medium, 6 cols) */}
          <div className="md:col-span-6 group rounded border border-outline-variant bg-surface-container-low p-8 sm:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-500 overflow-hidden relative">
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center p-3 rounded bg-surface-container-lowest border border-outline-variant text-primary-container mb-6 transition-transform duration-500 group-hover:scale-105">
                <Globe2 className="h-5 w-5" />
              </span>
              <h3 className="font-hanken font-semibold text-lg text-primary uppercase tracking-wide mb-3">
                Platform Agnostic
              </h3>
              <p className="font-hanken text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Connect and sync easily. Installs natively on custom headless Next.js builds, Shopify storefronts, Webflow sites, or Squarespace templates.
              </p>
            </div>

            {/* Grid of integrations */}
            <div className="mt-8 grid grid-cols-4 gap-3 text-center max-w-md">
              {["Shopify", "Webflow", "Next.js", "WooCommerce"].map((platform) => (
                <div
                  key={platform}
                  className="py-2.5 rounded border border-outline-variant bg-surface-container-lowest text-[10px] font-bold text-on-surface-variant hover:text-primary-container hover:border-primary-container transition-all duration-300 uppercase tracking-widest"
                >
                  {platform.split(".")[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Advanced Conversion Analytics (Medium, 6 cols) */}
          <div className="md:col-span-6 group rounded border border-outline-variant bg-surface-container-low p-8 sm:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-500 overflow-hidden relative">
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center p-3 rounded bg-surface-container-lowest border border-outline-variant text-primary-container mb-6 transition-transform duration-500 group-hover:scale-105">
                <BarChart3 className="h-5 w-5" />
              </span>
              <h3 className="font-hanken font-semibold text-lg text-primary uppercase tracking-wide mb-3">
                Conversion Analytics
              </h3>
              <p className="font-hanken text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Gain insights into player clicks, drop-off rates, visual hotspots, and directly attribute checkout revenue to each product loop.
              </p>
            </div>

            {/* Custom SVG line chart visualization - styled in Burgundy */}
            <div className="mt-6 w-full relative">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 100">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(129, 11, 56, 0.08)" />
                    <stop offset="100%" stopColor="rgba(129, 11, 56, 0)" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(129, 11, 56, 0.04)" strokeDasharray="3" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(129, 11, 56, 0.04)" strokeDasharray="3" />
                <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(129, 11, 56, 0.04)" strokeDasharray="3" />
                
                {/* Area under the path */}
                <path
                  d="M0,80 Q35,65 70,55 T140,65 T210,35 T280,10 L300,10 L300,100 L0,100 Z"
                  fill="url(#chartGradient)"
                />
                
                {/* Glowing line path */}
                <path
                  d="M0,80 Q35,65 70,55 T140,65 T210,35 T280,10 L300,10"
                  fill="none"
                  stroke="#810b38"
                  strokeWidth="2.5"
                />

                {/* Hotspot data marker */}
                <circle cx="280" cy="10" r="4.5" fill="#810b38" />
                <circle cx="280" cy="10" r="10" fill="transparent" stroke="rgba(129, 11, 56, 0.2)" className="animate-pulse" />
              </svg>
              <div className="absolute top-[-10px] right-2 px-2.5 py-0.5 rounded border border-outline-variant bg-surface-container-lowest text-[9px] font-bold text-primary-container shadow-sm uppercase tracking-wider">
                +42.3% Conversion
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
