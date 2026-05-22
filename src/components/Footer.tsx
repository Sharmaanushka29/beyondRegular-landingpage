import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-highest relative z-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col gap-2">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-hanken font-bold text-base tracking-tight text-primary">
              beyond<span className="font-normal italic text-secondary">Regular</span>
            </span>
          </div>
          <p className="text-[10px] text-on-surface-variant font-medium">
            © {currentYear} beyondRegular. Designed for aesthetic luxury conversion.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] text-on-surface-variant font-hanken font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-primary-container transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-container transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-primary-container transition-colors duration-300">
            Contact
          </a>
          <a href="#" className="hover:text-primary-container transition-colors duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-primary-container transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
