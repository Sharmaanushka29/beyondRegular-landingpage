import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Embedding beyondRegular transformed our product detail pages. We saw a direct 42% lift in conversion in the first 30 days. The design fits perfectly into our high-end aesthetic.",
      author: "Helena Rostova",
      role: "Creative Director, VALERIE",
      metric: "+42% Conversion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Most video players drag down site speed. beyondRegular loads instantly. The integration was a single script file copy and sync'd seamlessly with our Shopify store.",
      author: "Marcus Vance",
      role: "Head of Growth, KRONOS",
      metric: "0.2s Load Latency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Our customers love the non-intrusive tag overlays. They checkout directly from the video frame. It represents the future of luxury storytelling and commerce combined.",
      author: "Chloe Dubois",
      role: "Founder, AURA Haute Joaillerie",
      metric: "3.5x Engagement",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "beyondRegular didn't just speed up our site; it gave us a new way to showcase our artisanal process. The engagement on our video tags has surpassed all expectations.",
      author: "Alessandra Rossi",
      role: "VP of Brand, FIORE",
      metric: "4.8x ROI",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "We were skeptical about direct video-checkout, but the friction drop was massive. beyondRegular has set the standard for modern e-commerce.",
      author: "Jonathan Kray",
      role: "Co-Founder, OBLIQ",
      metric: "+50% Add-To-Cart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Our digital catalog went from static pages to an immersive video salon. beyondRegular's attention to visual detail perfectly mirrors our brand value.",
      author: "Elise Laurent",
      role: "Head of Digital, MAISON LAURENT",
      metric: "92% Completion Rate",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    // Defer initial layout measurement to prevent cascading synchronous renders
    const timer = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 0);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Helper to calculate circular distance relative to the active card
  const getDiff = (idx: number) => {
    let diff = idx - activeIndex;
    while (diff < -testimonials.length / 2) diff += testimonials.length;
    while (diff > testimonials.length / 2) diff -= testimonials.length;
    return diff;
  };

  // Dynamic layout offsets based on viewport widths
  let baseSpacing = 285;
  let baseYOffset = 22;
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  if (isMobile) {
    baseSpacing = 135;
    baseYOffset = 8;
  } else if (isTablet) {
    baseSpacing = 215;
    baseYOffset = 14;
  }

  return (
    <section id="testimonials" className="py-28 relative z-10 px-4 sm:px-6 lg:px-8 border-t border-outline-variant bg-surface bg-gradient-to-b from-surface to-surface-container-low overflow-hidden select-none">
      
      {/* Premium organic leaf shadow overlay (dappled light filter) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow-blur">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>
        <g filter="url(#shadow-blur)" fill="#5b0024">
          <path d="M-100,-100 Q 150,120 380,-30 Q 520,240 730,70 Q 820,-30 920,-200 Z" />
          <path d="M1250,-50 Q 1050,280 820,180 Q 640,420 420,270 Q 220,480 -60,550 Z" />
          <path d="M-60,380 Q 220,580 120,780 Q 320,880 180,1080 Z" />
        </g>
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-hanken font-bold text-4xl sm:text-5xl text-primary tracking-tight leading-[1.1] mb-3">
            Real stories.<br />Real impact.
          </h2>
          <p className="font-hanken text-on-surface-variant text-xs sm:text-sm tracking-wide max-w-md mx-auto">
            See how beyondRegular helps world-class brands, and explore what it can do for yours.
          </p>
        </div>

        {/* Carousel Curved Semicircle Arc Container */}
        <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center mb-10 overflow-visible">
          {testimonials.map((t, idx) => {
            const diff = getDiff(idx);
            const absDiff = Math.abs(diff);

            // Positioning calculations
            const translateX = diff * baseSpacing;
            const translateY = absDiff * absDiff * baseYOffset;
            const rotate = diff * 6.5;
            const scale = 1 - absDiff * 0.07;
            const zIndex = 30 - absDiff * 5;

            // Opacity thresholds to hide cards on smaller screens
            let opacity = 1 - absDiff * 0.35;
            let shouldHide = false;
            
            if (isMobile && absDiff > 1) {
              opacity = 0;
              shouldHide = true;
            } else if (isTablet && absDiff > 2) {
              opacity = 0;
              shouldHide = true;
            } else if (absDiff >= 3) {
              opacity = 0;
              shouldHide = true;
            }

            const isActive = diff === 0;

            return (
              <div
                key={idx}
                style={{
                  transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: shouldHide ? "none" : "auto",
                }}
                className={`absolute left-1/2 top-4 w-[250px] sm:w-[280px] md:w-[310px] h-[320px] sm:h-[370px] md:h-[410px] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                  isActive
                    ? "bg-white border-outline-variant shadow-[0_12px_28px_rgba(91,0,36,0.06)]"
                    : "bg-surface-container-low/90 border-outline-variant/50 shadow-sm cursor-pointer"
                }`}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(idx);
                  }
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Metric Badge */}
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase mb-5 sm:mb-6 label-caps border transition-all ${
                        isActive
                          ? "bg-secondary-container border-outline-variant text-on-secondary-container"
                          : "bg-surface-container border-outline-variant/40 text-on-surface-variant/70"
                      }`}
                    >
                      <Star className={`h-2.5 w-2.5 shrink-0 ${isActive ? "fill-on-secondary-container text-on-secondary-container" : "text-on-surface-variant/60"}`} />
                      <span>{t.metric}</span>
                    </div>

                    {/* Quote */}
                    <blockquote
                      className={`font-hanken italic leading-relaxed text-center select-none text-[11px] sm:text-xs md:text-sm transition-all duration-500 ${
                        isActive ? "text-primary font-medium" : "text-on-surface-variant/80"
                      }`}
                    >
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Profile info inside the card */}
                  <div className="flex items-center gap-3 border-t border-outline-variant/30 pt-4 mt-auto">
                    <img
                      src={t.image}
                      alt={t.author}
                      className={`w-8 h-8 rounded-full object-cover border border-outline-variant/60 transition-all duration-500 ${
                        isActive ? "grayscale-0 scale-105" : "grayscale opacity-70"
                      }`}
                    />
                    <div className="text-left">
                      <h4 className="font-hanken font-bold text-[10px] sm:text-xs text-primary">{t.author}</h4>
                      <p className="text-[9px] sm:text-[10px] text-on-surface-variant font-light leading-tight">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-outline-variant flex items-center justify-center text-primary-container hover:scale-105 hover:bg-white hover:border-primary/40 active:scale-95 transition-all duration-300 shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-2 border-primary-container flex items-center justify-center text-primary hover:scale-105 hover:bg-white hover:border-primary active:scale-95 transition-all duration-300 shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

