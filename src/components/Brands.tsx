import React from "react";

export default function Brands() {
  const brands = [
    {
      name: "VALERIE",
      logo: (
        <svg className="h-3.5 w-auto fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0 L20 24 H15 L10 12 L5 24 H0 Z M35 0 H45 V4 H39 V10 H44 V14 H39 V20 H45 V24 H35 Z M60 0 H65 V20 H72 V24 H60 Z M90 0 L100 24 H95 L90 12 L85 24 H80 Z" />
        </svg>
      )
    },
    {
      name: "MONOLITH",
      logo: (
        <svg className="h-4 w-auto fill-current" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 H5 L15 15 L25 0 H30 V24 H25 V8 L15 23 L5 8 V24 H0 Z M45 0 C55 0 60 5 60 12 C60 19 55 24 45 24 C35 24 30 19 30 12 C30 5 35 0 45 0 Z M45 4 C38 4 36 8 36 12 C36 16 38 20 45 20 C52 20 54 16 54 12 C54 8 52 4 45 4 Z M75 0 H80 V20 H90 V24 H75 Z M105 0 H110 V24 H105 Z" />
        </svg>
      )
    },
    {
      name: "KRONOS",
      logo: (
        <svg className="h-3.5 w-auto fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 H5 V10 L15 0 H21 L10 11 L22 24 H16 L7 14 V24 H0 Z M35 0 C45 0 50 4 50 12 C50 20 45 24 35 24 H30 V0 Z M35 4 H35 V20 H35 C42 20 44 17 44 12 C44 7 42 4 35 4 Z M65 0 L75 24 H70 L65 12 L60 24 H55 Z" />
        </svg>
      )
    },
    {
      name: "AURA",
      logo: (
        <svg className="h-4 w-auto fill-current" viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0 L20 24 H15 L10 12 L5 24 H0 Z M35 0 C45 0 50 5 50 12 C50 19 45 24 35 24 H30 V0 H35 Z M35 4 H35 V20 H35 C41 20 44 17 44 12 C44 7 41 4 35 4 Z M65 0 C75 0 80 5 80 12 C80 19 75 24 65 24 H60 V0 Z M65 4 H65 V20 H65 C71 20 74 17 74 12 C74 7 71 4 65 4 Z" />
        </svg>
      )
    },
    {
      name: "VELVET",
      logo: (
        <svg className="h-3.5 w-auto fill-current" viewBox="0 0 90 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L10 24 H5 L0 12 L-5 24 H-10 Z M25 0 H35 V4 H29 V10 H34 V14 H29 V20 H35 V24 H25 Z M50 0 H55 V20 H62 V24 H50 Z M75 0 H85 V4 H79 V24 H75 Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 border-y border-outline-variant bg-surface-container-low relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-bold tracking-[0.25em] text-center uppercase text-on-surface-variant mb-8 font-hanken">
          Trusted by Independent Visionaries & Luxury Maisons
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 text-on-surface-variant/40">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-3 hover:text-primary-container transition-colors duration-500 cursor-default transform hover:scale-[1.02]"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
