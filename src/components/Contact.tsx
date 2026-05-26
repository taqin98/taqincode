export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[7rem] px-[3.5rem] text-center relative overflow-hidden border-t border-[var(--color-border-main)] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(240,165,0,0.06)_0%,transparent_65%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="font-[family-name:var(--font-mono-custom)] text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase inline-block mb-[1.25rem] reveal">
        — Let&apos;s Work Together
      </div>

      <h2 className="font-[family-name:var(--font-disp)] text-[clamp(3rem,6vw,6rem)] font-black tracking-[-0.035em] leading-[0.95] mb-[1.75rem] reveal">
        Let&apos;s<br />
        <em className="not-italic italic text-[var(--color-accent)] font-light">
          build
        </em>
        <br />
        something.
      </h2>

      <p className="text-[var(--color-text2)] font-light max-w-[420px] mx-auto mb-[3rem] leading-[1.75] reveal">
        Open to freelance, contract, and full-time remote opportunities —
        especially landing pages, Laravel dashboards, ERP modules, internal
        tools, and fullstack MVPs.
      </p>

      <div className="flex justify-center gap-[1rem] flex-wrap mb-[4.5rem] relative reveal">
        <a
          href="mailto:taqin.juni.or56@gmail.com?subject=Project%20Inquiry%20for%20Taqin"
          className="font-[family-name:var(--font-mono-custom)] text-[0.8rem] bg-[var(--color-accent)] text-black py-[0.9rem] px-[2.2rem] rounded-full no-underline font-medium tracking-[0.04em] transition-all duration-250 hover:bg-[var(--color-accent2)] hover:-translate-y-[2px]"
        >
          Send Email →
        </a>
        <a
          href="/resume.pdf"
          className="font-[family-name:var(--font-mono-custom)] text-[0.8rem] text-[var(--color-text-main)] border border-[var(--color-border2)] py-[0.9rem] px-[2.2rem] rounded-full no-underline tracking-[0.04em] transition-all duration-250 hover:border-[var(--color-text2)]"
        >
          Download CV
        </a>
        <a
          href="https://github.com/taqin-juni"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-mono-custom)] text-[0.8rem] text-[var(--color-text-main)] border border-[var(--color-border2)] py-[0.9rem] px-[2.2rem] rounded-full no-underline tracking-[0.04em] transition-all duration-250 hover:border-[var(--color-text2)]"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/taqin-juni"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-mono-custom)] text-[0.8rem] text-[var(--color-text-main)] border border-[var(--color-border2)] py-[0.9rem] px-[2.2rem] rounded-full no-underline tracking-[0.04em] transition-all duration-250 hover:border-[var(--color-text2)]"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex justify-center gap-[3.5rem] flex-wrap border-t border-[var(--color-border-main)] pt-[3rem] relative reveal max-[900px]:gap-[2rem]">
        <div className="text-center">
          <div className="font-[family-name:var(--font-mono-custom)] text-[0.62rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.35rem]">
            Email
          </div>
          <div className="text-[0.9rem] text-[var(--color-text-main)]">
            taqin.juni.or56@gmail.com
          </div>
        </div>
        <div className="text-center">
          <div className="font-[family-name:var(--font-mono-custom)] text-[0.62rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.35rem]">
            Location
          </div>
          <div className="text-[0.9rem] text-[var(--color-text-main)]">
            Semarang, Indonesia
          </div>
        </div>
        <div className="text-center">
          <div className="font-[family-name:var(--font-mono-custom)] text-[0.62rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.35rem]">
            Timezone
          </div>
          <div className="text-[0.9rem] text-[var(--color-text-main)]">
            UTC+7 (WIB)
          </div>
        </div>
        <div className="text-center">
          <div className="font-[family-name:var(--font-mono-custom)] text-[0.62rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.35rem]">
            Availability
          </div>
          <div className="text-[0.9rem] text-[var(--color-green-custom)]">
            Open to work ✓
          </div>
        </div>
        <div className="text-center">
          <div className="font-[family-name:var(--font-mono-custom)] text-[0.62rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.35rem]">
            Response time
          </div>
          <div className="text-[0.9rem] text-[var(--color-text-main)]">
            &lt; 24 hours
          </div>
        </div>
      </div>
    </section>
  );
}
