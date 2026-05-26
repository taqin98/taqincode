"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        className="fixed left-4 -top-20 z-[10000] bg-[var(--color-accent)] text-black py-[0.7rem] px-4 rounded-full font-mono text-[0.75rem] no-underline transition-[top] duration-200 focus:top-4"
        href="#projects"
      >
        Skip to projects
      </a>

      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between transition-all duration-400 py-[1.3rem] px-[3.5rem] border-b border-transparent max-[900px]:py-4 max-[900px]:px-[1.2rem] ${
          scrolled
            ? "bg-[rgba(8,9,14,0.82)] backdrop-blur-[24px] border-b-[var(--color-border-main)]"
            : ""
        }`}
      >
        <Link
          href="#"
          className="font-serif text-[1.5rem] font-black text-[var(--color-text-main)] no-underline tracking-[-0.03em] transition-opacity duration-200 hover:opacity-75"
        >
          TQ<span className="text-[var(--color-accent)]">.</span>
        </Link>

        <button
          className="hidden max-[900px]:inline-flex items-center justify-center w-[42px] h-[42px] rounded-full border border-[var(--color-border2)] bg-[rgba(17,18,25,0.86)] text-[var(--color-text-main)] font-mono cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <ul
          id="navLinks"
          className={`flex gap-[2.5rem] list-none max-[900px]:fixed max-[900px]:top-[70px] max-[900px]:left-4 max-[900px]:right-4 max-[900px]:flex-col max-[900px]:gap-0 max-[900px]:p-[0.9rem] max-[900px]:border max-[900px]:border-[var(--color-border-main)] max-[900px]:rounded-[18px] max-[900px]:bg-[rgba(8,9,14,0.96)] max-[900px]:backdrop-blur-[20px] max-[900px]:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
            menuOpen ? "max-[900px]:flex" : "max-[900px]:hidden"
          }`}
        >
          {["about", "skills", "projects", "services", "contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-[0.73rem] text-[var(--color-text2)] no-underline tracking-[0.06em] transition-colors duration-200 hover:text-[var(--color-text-main)] max-[900px]:block max-[900px]:py-[0.85rem] max-[900px]:px-[0.8rem] max-[900px]:text-[0.78rem]"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        <a
          href="mailto:taqin.juni.or56@gmail.com"
          className="font-mono text-[0.73rem] bg-[var(--color-accent)] text-black py-[0.55rem] px-[1.4rem] rounded-full no-underline font-medium tracking-[0.04em] transition-all duration-200 hover:opacity-85 hover:scale-97 max-[900px]:hidden"
        >
          Hire Me →
        </a>
      </nav>
    </>
  );
}
