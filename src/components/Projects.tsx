import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      featured: true,
      type: "● Featured · ERP System",
      title: "ERP Inventory & Operations System",
      desc: "A multi-module Laravel system for managing operational workflows: inventory tracking, purchase orders, sales reports, employee management, and role-based access control. Built with a relational MySQL schema and clean CRUD flows for daily business use.",
      stack: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap", "GitHub Actions"],
      actions: [
        { label: "Request Case Study", href: "#contact", primary: true },
        { label: "GitHub", href: "https://github.com/taqin98", primary: false },
      ],
      visual: "🏗️",
    },
    {
      featured: false,
      type: "● Next.js · Deployed on Vercel",
      title: "Marketing Landing Pages",
      desc: "High-conversion, animated landing pages for startups and businesses. Fully responsive, optimized for Core Web Vitals, with smooth scroll animations and Vercel edge deployment. From brief to live in hours.",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      actions: [
        { label: "Discuss Similar Project", href: "#contact", primary: true },
        { label: "GitHub", href: "https://github.com/taqin98", primary: false },
      ],
    },
    {
      featured: false,
      type: "● React · Component Library",
      title: "Reusable React Components",
      desc: "Custom React component library — modals, data tables, form builders, and dashboard widgets. Documented, modular, and ready to drop into any project with consistent design tokens.",
      stack: ["React", "JavaScript", "CSS Modules", "GitHub"],
      actions: [
        { label: "View Components", href: "#contact", primary: true },
        { label: "GitHub", href: "https://github.com/taqin98", primary: false },
      ],
    },
    {
      featured: false,
      type: "● Node.js · REST API · Fullstack",
      title: "Small Fullstack Web Apps",
      desc: "End-to-end fullstack projects — Node.js / Express API with a React frontend, JWT authentication, MySQL database, CRUD operations, and Vercel deployment. Clean architecture, ready to scale.",
      stack: ["Node.js", "Express", "React", "MySQL", "Vercel"],
      actions: [
        { label: "Plan an MVP", href: "#contact", primary: true },
        { label: "GitHub", href: "https://github.com/taqin98", primary: false },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-[7rem] px-[3.5rem] border-t border-[var(--color-border-main)] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="mb-[3.5rem] reveal">
        <div className="font-mono text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem]">
          — Projects
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
          Things I&apos;ve{" "}
          <em className="italic text-[var(--color-accent)] font-light">
            built
          </em>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-[1.25rem] max-[900px]:grid-cols-1">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`reveal proj-card bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[16px] p-[2rem] relative overflow-hidden transition-all duration-300 hover:border-[rgba(240,165,0,0.2)] hover:-translate-y-[5px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent2)] after:scale-x-0 after:origin-left after:transition-transform after:duration-[0.35s] hover:after:scale-x-100
              ${proj.featured
                ? "col-span-2 grid grid-cols-[1fr_300px] gap-[2.5rem] items-center max-[900px]:col-span-1 max-[900px]:grid-cols-1"
                : ""
              }
            `}
          >
            <div>
              <div className="font-mono text-[0.66rem] text-[var(--color-accent)] tracking-[0.12em] uppercase mb-[1rem]">
                {proj.type}
              </div>
              <h3 className="font-serif text-[1.5rem] font-bold tracking-[-0.02em] mb-[0.75rem] leading-[1.2]">
                {proj.title}
              </h3>
              <p className="text-[var(--color-text2)] text-[0.88rem] leading-[1.75] font-light mb-[1.5rem]">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-[0.4rem]">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[0.63rem] bg-[var(--color-bg)] text-[var(--color-text2)] border border-[var(--color-border2)] py-[0.25rem] px-[0.65rem] rounded-full tracking-[0.04em]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-[0.7rem] mt-[1.4rem]">
                {proj.actions.map((act, i) =>
                  act.href.startsWith("#") ? (
                    <Link
                      key={i}
                      href={act.href}
                      className={`font-mono text-[0.68rem] no-underline border rounded-full py-[0.48rem] px-[0.9rem] tracking-[0.04em] transition-all duration-250 hover:-translate-y-[2px] ${act.primary
                          ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)] hover:bg-[var(--color-accent2)] hover:border-[var(--color-acc-line)]"
                          : "text-[var(--color-text-main)] border-[var(--color-border2)] hover:border-[var(--color-acc-line)]"
                        }`}
                    >
                      {act.label}
                    </Link>
                  ) : (
                    <a
                      key={i}
                      href={act.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono text-[0.68rem] no-underline border rounded-full py-[0.48rem] px-[0.9rem] tracking-[0.04em] transition-all duration-250 hover:-translate-y-[2px] ${act.primary
                          ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)] hover:bg-[var(--color-accent2)] hover:border-[var(--color-acc-line)]"
                          : "text-[var(--color-text-main)] border-[var(--color-border2)] hover:border-[var(--color-acc-line)]"
                        }`}
                    >
                      {act.label}
                    </a>
                  )
                )}
              </div>
            </div>

            {proj.featured && (
              <div
                className="bg-[linear-gradient(135deg,rgba(240,165,0,0.08)_0%,rgba(240,165,0,0.02)_100%)] border border-[rgba(240,165,0,0.15)] rounded-[12px] h-[220px] flex items-center justify-center text-[5rem] relative overflow-hidden max-[900px]:hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(240,165,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(240,165,0,0.06) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                ></div>
                {proj.visual}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
