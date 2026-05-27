export default function About() {
  return (
    <section
      id="about"
      className="py-[7rem] px-[3.5rem] border-t border-[var(--color-border-main)] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="font-mono text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem] reveal">
        — About
      </div>
      <div className="grid grid-cols-[1.3fr_1fr] gap-[6rem] mt-[3.5rem] max-[900px]:grid-cols-1 max-[900px]:gap-[3rem]">
        <div className="flex flex-col">
          <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] reveal">
            Code that<br />
            <em className="italic text-[var(--color-accent)] font-light">works.</em>
          </h2>
          <p className="text-[1rem] text-[var(--color-text2)] leading-[1.85] font-light mb-[1rem] mt-[2rem] reveal">
            I&apos;m Taqin, a web developer based in Semarang, Central Java,
            Indonesia with hands-on experience building production-grade web
            applications. I focus on practical interfaces, maintainable code,
            and systems that help real businesses move faster.
          </p>
          <p className="text-[1rem] text-[var(--color-text2)] leading-[1.85] font-light mb-[1rem] reveal">
            My strongest areas are React/Next.js for frontend work and
            Laravel/PHP for data-driven systems. I also work with Node.js,
            MySQL, Git, GitHub workflows, and Vercel deployments — from idea,
            implementation, testing, to launch.
          </p>
          <div className="grid grid-cols-2 gap-[1rem] mt-[2.5rem] reveal">
            {[
              { num: "2+", label: "Years Experience" },
              { num: "20+", label: "Projects Built" },
              { num: "100%", label: "Remote Ready" },
              { num: "UTC+7", label: "Async Friendly" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[12px] p-[1.4rem] transition-colors duration-300 hover:border-[var(--color-acc-line)]"
              >
                <div className="font-serif text-[2.4rem] font-black text-[var(--color-accent)] leading-none mb-[0.3rem]">
                  {stat.num}
                </div>
                <div className="font-mono text-[0.65rem] text-[var(--color-text3)] tracking-[0.1em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[1.1rem] reveal">
          <div className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[12px] py-[1.3rem] px-[1.5rem] transition-colors duration-300 hover:border-[var(--color-border2)]">
            <div className="font-mono text-[0.63rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.5rem]">
              What I Build
            </div>
            <div className="flex flex-wrap gap-[0.45rem] mt-[0.5rem]">
              {[
                "Landing Pages",
                "React Components",
                "Fullstack Apps",
                "ERP Systems",
                "REST APIs",
                "Admin Panels",
              ].map((chip) => (
                <span
                  key={chip}
                  className="font-mono text-[0.67rem] bg-[var(--color-acc-dim)] text-[var(--color-accent)] border border-[var(--color-acc-line)] py-[0.28rem] px-[0.75rem] rounded-full tracking-[0.04em]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {[
            {
              label: "Work Type",
              val: "Freelance · Contract · Full-time Remote",
            },
            {
              label: "Tools & Workflow",
              chips: ["GitHub", "Vercel", "VS Code", "Git", "Figma"],
            },
            {
              label: "Location",
              val: "Semarang, Central Java, Indonesia 🇮🇩",
            },
            {
              label: "Communication",
              val: "English · Bahasa Indonesia · Async preferred",
            },
            {
              label: "Best Fit",
              val: "Landing pages · Laravel dashboards · Internal tools · Fullstack MVPs",
            },
          ].map((row, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[12px] py-[1.3rem] px-[1.5rem] transition-colors duration-300 hover:border-[var(--color-border2)]"
            >
              <div className="font-mono text-[0.63rem] text-[var(--color-text3)] tracking-[0.12em] uppercase mb-[0.5rem]">
                {row.label}
              </div>
              {row.chips ? (
                <div className="flex flex-wrap gap-[0.45rem] mt-[0.5rem]">
                  {row.chips.map((chip) => (
                    <span
                      key={chip}
                      className="font-mono text-[0.67rem] bg-[var(--color-acc-dim)] text-[var(--color-accent)] border border-[var(--color-acc-line)] py-[0.28rem] px-[0.75rem] rounded-full tracking-[0.04em]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-[0.9rem] text-[var(--color-text-main)]">
                  {row.val}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
