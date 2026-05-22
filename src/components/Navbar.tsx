"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "how it works", href: "#how-it-works" },
    { label: "pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl rounded z-50 transition-all duration-300 glass3d ${scrolled
          ? "py-3.5 px-6 md:px-8"
          : "py-4.5 px-6 md:px-8"
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-[1.03]">
            <span className="text-white text-xs font-bold font-hanken">bR</span>
          </div>
          <span className="font-hanken font-bold text-lg tracking-tight text-primary">
            beyond<span className="font-normal italic text-secondary">Regular</span>
          </span>
        </a>

        {/* Desktop Navigation and CTA grouped in Top Right */}
        <div className="hidden md:flex items-center gap-10">
          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-bold font-hanken tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary-container transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-container after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-[11px] font-bold font-hanken tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            >
              connect with us
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1 overflow-hidden rounded bg-primary-container px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-surface transition-all hover:bg-primary-container/95 active:scale-[0.98]"
            >
              <span>use plugin</span>
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-black/[0.02] transition-colors text-on-surface"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-[calc(100%+0.75rem)] left-0 w-full rounded glass-parchment p-6 shadow-xl transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold font-hanken tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary-container transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-[1px] bg-outline-variant/30 my-1" />
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-xs font-bold font-hanken tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary-container transition-colors"
          >
            connect with us
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-1 w-full rounded bg-primary-container py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-surface hover:bg-primary-container/95 transition-colors"
          >
            <span>use plugin</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </nav>
  );
}
