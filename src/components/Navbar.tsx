"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 4) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        width: "calc(100% - 2rem)",
        maxWidth: "72rem",
        zIndex: 9998,
        transition: "opacity 300ms ease, transform 300ms ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(-100%)",
      }}
      className="glass3d rounded py-2 px-5 md:px-7"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <div className="w-6 h-6 rounded bg-primary-container flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.03]">
            <span className="text-white text-[10px] font-bold font-hanken">bR</span>
          </div>
          <span className="font-hanken font-bold text-sm tracking-tight text-primary">
            beyond<span className="font-normal italic text-secondary">Regular</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-bold font-hanken tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-container after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-[11px] font-bold font-hanken tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            >
              Connect With Us
            </a>
            <a
              href="#login"
              className="text-[11px] font-bold font-hanken tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1 overflow-hidden rounded bg-primary-container px-4 py-1.5 text-[10px] font-bold tracking-[0.1em] text-surface transition-all hover:bg-primary-container/95 active:scale-[0.98]"
            >
              <span>Use Plugin</span>
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-black/[0.02] transition-colors text-on-surface"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-[calc(100%+0.75rem)] left-0 w-full rounded glass-parchment p-6 shadow-xl origin-top"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold font-hanken tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-[1px] bg-outline-variant/30 my-1" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold font-hanken tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition-colors"
              >
                Connect With Us
              </a>
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold font-hanken tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition-colors"
              >
                Login
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1 w-full rounded bg-primary-container py-3 text-[11px] font-bold tracking-[0.1em] text-surface hover:bg-primary-container/95 transition-colors"
              >
                <span>Use Plugin</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
