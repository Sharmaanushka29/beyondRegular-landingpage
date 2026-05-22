"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Elegant Intersection Observer for fade-in animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background relative selection:bg-primary-container/10 selection:text-primary">
      <Navbar />

      <main className="flex-grow">
        <div className="reveal-on-scroll">
          <Hero />
        </div>
        <div className="reveal-on-scroll">
          <Brands />
        </div>
        <div className="reveal-on-scroll">
          <Benefits />
        </div>
        <div className="reveal-on-scroll">
          <HowItWorks />
        </div>
        <div className="reveal-on-scroll">
          <Pricing />
        </div>
        <div className="reveal-on-scroll">
          <Testimonials />
        </div>
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
