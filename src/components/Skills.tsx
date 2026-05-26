export default function Skills() {
  const stackData = [
    { icon: "⚛️", name: "React", lvl: "Proficient" },
    { icon: "▲", name: "Next.js", lvl: "Proficient" },
    { icon: "🟨", name: "JavaScript", lvl: "Proficient" },
    { icon: "🌐", name: "HTML & CSS", lvl: "Proficient" },
    { icon: "🐘", name: "PHP", lvl: "Proficient" },
    { icon: "🔴", name: "Laravel", lvl: "Proficient" },
    { icon: "🟢", name: "Node.js", lvl: "Intermediate" },
    { icon: "🗄️", name: "MySQL", lvl: "Proficient" },
    { icon: "🐙", name: "Git & GitHub", lvl: "Proficient" },
    { icon: "🚀", name: "Vercel", lvl: "Proficient" },
    { icon: "💨", name: "Tailwind CSS", lvl: "Proficient" },
    { icon: "📦", name: "REST API", lvl: "Intermediate" },
  ];

  return (
    <section
      id="skills"
      className="bg-[var(--color-bg2)] border-t border-b border-[var(--color-border-main)] py-[7rem] px-[3.5rem] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="flex justify-between items-end mb-[3.5rem] reveal max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[1rem]">
        <div>
          <div className="font-mono text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem]">
            — Tech Stack
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
            Tools I&apos;m{" "}
            <em className="italic text-[var(--color-accent)] font-light">
              fluent
            </em>{" "}
            in
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[0.9rem]">
        {stackData.map((s, i) => (
          <div
            key={s.name}
            className="skill-card reveal bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] py-[1.5rem] px-[1.25rem] transition-all duration-250 cursor-default hover:border-[var(--color-acc-line)] hover:bg-[rgba(240,165,0,0.04)] hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className="text-[1.9rem] mb-[0.8rem] leading-none">
              {s.icon}
            </div>
            <div className="font-mono text-[0.78rem] text-[var(--color-text-main)] font-medium tracking-[0.02em] mb-[0.2rem]">
              {s.name}
            </div>
            <div className="font-mono text-[0.63rem] text-[var(--color-text3)] tracking-[0.06em]">
              {s.lvl}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
