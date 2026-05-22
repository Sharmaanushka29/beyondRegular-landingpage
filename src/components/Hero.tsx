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
    <section className="relative w-full min-h-screen overflow-hidden -mt-20 pt-20">
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full z-0 -top-20">
        <video src="/beyondRegular_video.mp4" autoPlay loop muted playsInline className="w-full h-[calc(100%+5rem)] object-cover" />
      </div>

      {/* Content — vertically centered */}
      <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 gap-10">
        {/* Hero text block */}
        <div className="text-center flex flex-col items-center gap-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant text-on-surface-variant label-caps">
            <Sparkles className="h-3 w-3 text-primary-container/60 animate-pulse" />
            <span>Established Innovation</span>
          </div>

          <h1 className="display-lg text-4xl sm:text-6xl lg:text-7xl text-primary tracking-tight max-w-4xl leading-[1.1]">
            Turn product videos into <br />
            <span className="font-normal italic text-secondary">
              conversion engines.
            </span>
          </h1>

          <p className="font-hanken text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Upload short-form product videos, create shoppable carousels, and embed
            them into your website using a single JavaScript script.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto rounded bg-primary-container px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.1rem] text-surface transition-all hover:bg-primary-container/95 active:scale-[0.98]"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded border border-primary-container px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.1rem] text-primary-container hover:bg-surface-container-low transition-colors"
            >
              <span>Book Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
