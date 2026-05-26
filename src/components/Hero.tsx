"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen pt-[9rem] pb-[5rem] px-[3.5rem] grid grid-cols-[1fr_auto] gap-[3rem] items-center relative overflow-hidden max-[900px]:pt-[8rem] max-[900px]:pb-[4rem] max-[900px]:px-[1.5rem] max-[900px]:grid-cols-1"
      id="home"
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border-main) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-main) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
        }}
      ></div>

      <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(240,165,0,0.07)_0%,transparent_65%)] top-1/2 right-[-200px] -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-[2]">
        <div className="inline-flex items-center gap-[0.6rem] font-mono text-[0.72rem] text-[var(--color-accent)] border border-[var(--color-acc-line)] bg-[var(--color-acc-dim)] py-[0.4rem] px-[1.1rem] rounded-full mb-[2.5rem] tracking-[0.08em] opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-accent)] animate-pulse-slow"></div>
          Available for Remote · UTC+7
        </div>

        <h1 className="font-serif text-[clamp(3.8rem,7.5vw,7.8rem)] font-black leading-[0.93] tracking-[-0.035em] mb-[2rem] opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          Fullstack<br />
          <em className="not-italic italic text-[var(--color-accent)] font-light">Developer</em><br />
          who <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-text2)]">ships.</span>
        </h1>

        <div className="flex items-center gap-[1rem] mb-[1.5rem] opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-[44px] h-[1px] bg-[var(--color-text3)]"></div>
          <p className="font-mono text-[0.73rem] text-[var(--color-text2)] tracking-[0.1em] uppercase">
            Frontend · Fullstack · Laravel · Vercel
          </p>
        </div>

        <p className="text-[1.05rem] text-[var(--color-text2)] max-w-[460px] leading-[1.75] font-light mb-[3rem] opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          I build practical, production-ready web products — from fast landing
          pages to Laravel-based ERP systems, dashboards, and fullstack business
          tools. Based in Semarang, Indonesia. Working remotely and
          asynchronously.
        </p>

        <div className="flex gap-[0.9rem] items-center flex-wrap opacity-0 animate-fade-up" style={{ animationDelay: '0.65s' }}>
          <Link
            href="#projects"
            className="font-mono text-[0.8rem] bg-[var(--color-accent)] text-black py-[0.9rem] px-[2.2rem] rounded-full no-underline font-medium tracking-[0.04em] transition-all duration-250 hover:bg-[var(--color-accent2)] hover:-translate-y-[2px]"
          >
            See My Work ↓
          </Link>
          <a
            href="mailto:taqin.juni.or56@gmail.com"
            className="font-mono text-[0.8rem] text-[var(--color-text-main)] border border-[var(--color-border2)] py-[0.9rem] px-[2.2rem] rounded-full no-underline tracking-[0.04em] transition-all duration-250 hover:border-[var(--color-text2)]"
          >
            Email Me
          </a>
          <a
            href="/resume.pdf"
            className="font-mono text-[0.8rem] text-[var(--color-text-main)] border border-[var(--color-border2)] py-[0.9rem] px-[2.2rem] rounded-full no-underline tracking-[0.04em] transition-all duration-250 hover:border-[var(--color-text2)]"
          >
            Download CV
          </a>
          <span className="font-mono text-[0.68rem] text-[var(--color-text3)] tracking-[0.06em]">
            🕐 UTC+7 · <span className="text-[var(--color-green-custom)]">Open to work</span>
          </span>
        </div>
      </div>

      <div className="relative z-[2] flex flex-col gap-[1rem] opacity-0 animate-fade-left max-[900px]:hidden" style={{ animationDelay: '0.8s' }}>
        <div className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] py-[1.25rem] px-[1.5rem] min-w-[220px]">
          <div className="font-mono text-[0.62rem] text-[var(--color-text3)] tracking-[0.1em] uppercase mb-[0.5rem]">
            Status
          </div>
          <div className="text-[0.88rem] text-[var(--color-text-main)] font-medium">
            <span className="text-[var(--color-green-custom)]">● Available</span> for remote
          </div>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] py-[1.25rem] px-[1.5rem] min-w-[220px]">
          <div className="font-mono text-[0.62rem] text-[var(--color-text3)] tracking-[0.1em] uppercase mb-[0.5rem]">
            Primary Stack
          </div>
          <div className="flex flex-wrap gap-[0.35rem] mt-[0.5rem]">
            {["React", "Next.js", "Laravel", "Node.js", "MySQL"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.62rem] bg-[var(--color-acc-dim)] text-[var(--color-accent)] border border-[var(--color-acc-line)] py-[0.2rem] px-[0.6rem] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] py-[1.25rem] px-[1.5rem] min-w-[220px]">
          <div className="font-mono text-[0.62rem] text-[var(--color-text3)] tracking-[0.1em] uppercase mb-[0.5rem]">
            Deploy &amp; Ship
          </div>
          <div className="text-[0.88rem] text-[var(--color-text-main)] font-medium">
            <span className="text-[var(--color-accent)]">Vercel</span> · GitHub · Git
          </div>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] py-[1.25rem] px-[1.5rem] min-w-[220px]">
          <div className="font-mono text-[0.62rem] text-[var(--color-text3)] tracking-[0.1em] uppercase mb-[0.5rem]">
            Timezone
          </div>
          <div className="text-[0.88rem] text-[var(--color-text-main)] font-medium">
            WIB · UTC+7 · Semarang 🇮🇩
          </div>
        </div>
      </div>
    </section>
  );
}
