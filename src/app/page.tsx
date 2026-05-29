"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "50px" }
    );
    document.querySelectorAll(".reveal").forEach((r) => obs.observe(r));

    // Fallback for Safari 15 bug where IntersectionObserver fails
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.visible)").forEach(r => r.classList.add("visible"));
    }, 1500);

    return () => {
      obs.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
