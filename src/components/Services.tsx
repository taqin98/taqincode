export default function Services() {
  const services = [
    {
      num: "01",
      title: "Landing Pages",
      desc: "Fast, responsive landing pages built with Next.js or clean HTML/CSS. Optimized for clarity, performance, and conversion.",
    },
    {
      num: "02",
      title: "React Development",
      desc: "Custom React components, interactive UIs, and full React/Next.js frontend applications with clean, maintainable code.",
    },
    {
      num: "03",
      title: "Fullstack & ERP",
      desc: "From Node + React apps to Laravel ERP dashboards — I help turn business workflows into reliable web systems.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[var(--color-bg2)] border-t border-b border-[var(--color-border-main)] py-[7rem] px-[3.5rem] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="font-[family-name:var(--font-mono-custom)] text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem] reveal">
        — Services
      </div>
      <h2 className="font-[family-name:var(--font-disp)] text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] reveal">
        What I{" "}
        <em className="not-italic italic text-[var(--color-accent)] font-light">
          offer
        </em>
      </h2>
      <div className="grid grid-cols-3 gap-[1.25rem] mt-[3rem] max-[900px]:grid-cols-1">
        {services.map((svc) => (
          <div
            key={svc.num}
            className="reveal svc-card group bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] p-[2rem] transition-all duration-300 hover:border-[var(--color-acc-line)] hover:-translate-y-[3px]"
          >
            <div className="font-[family-name:var(--font-disp)] text-[2.5rem] font-black text-[var(--color-border2)] leading-none mb-[1.5rem] transition-colors duration-300 group-hover:text-[var(--color-acc-dim)]">
              {svc.num}
            </div>
            <h3 className="font-[family-name:var(--font-disp)] text-[1.2rem] font-bold tracking-[-0.02em] mb-[0.6rem]">
              {svc.title}
            </h3>
            <p className="text-[var(--color-text2)] text-[0.85rem] leading-[1.7] font-light">
              {svc.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
