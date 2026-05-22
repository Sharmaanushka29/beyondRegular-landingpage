"use client";

import React, { useState } from "react";
import { Play, Copy, Check, ArrowRight, Sparkles, Tag, ShoppingBag, Eye } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const embedCode = `<script 
  src="https://cdn.beyondregular.com/widget.js" 
  data-widget="br-prod-9832"
  async
></script>`;

  const copyCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video src="/beyondRegular_video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        {/* Premium light-wash vignette overlay for maximum text contrast */}
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[1px] z-10" />
      </div>

      {/* Content — centred */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Hero text block */}
        <div className="text-center flex flex-col items-center gap-6 max-w-4xl w-full px-5 py-10 sm:p-12 rounded-2xl bg-white/60 backdrop-blur-md border border-outline-variant/35 shadow-lg md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0">
          <h1 className="font-hanken text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight max-w-[1000px] leading-[1.1] sm:leading-[1.05]">
            <span className="font-bold">Make your store</span> <br className="hidden sm:inline" />
            <span className="signature-font text-secondary block sm:inline mt-2 sm:mt-0 font-normal italic">
              feel alive.
            </span>
          </h1>

          <p className="font-hanken text-sm sm:text-base lg:text-lg text-on-surface-variant/90 max-w-2xl leading-relaxed">
            Beyond Regular brings movement, storytelling, <br className="hidden sm:block" />
            and video-first experiences into modern commerce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6 w-full sm:w-auto max-w-xs sm:max-w-none">
            {/* Primary solid button */}
            <a
              href="#pricing"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded bg-primary-container px-10 py-4 text-[11px] font-bold uppercase tracking-[0.12rem] text-surface transition-all hover:bg-primary active:scale-[0.98] font-hanken"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            {/* Outlined button */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded border-2 border-primary-container bg-transparent px-10 py-4 text-[11px] font-bold uppercase tracking-[0.12rem] text-primary-container hover:bg-primary-container/10 transition-colors font-hanken"
            >
              <span>Book Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
