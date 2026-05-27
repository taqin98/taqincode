"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const projects = [
    {
      featured: true,
      type: t('proj.type.1'),
      title: t('proj.title.1'),
      desc: t('proj.desc.1'),
      stack: ["Laravel","MySQL","Bootstrap","JQuery","Xendit API"],
      actions: [
        { label: t('proj.act.1.1'), href: "https://muladiconnect.id", primary: true }
      ],
      visual: "📡",
    },
    {
      featured: true,
      type: t('proj.type.2'),
      title: t('proj.title.2'),
      desc: t('proj.desc.2'),
      stack: ["Laravel","MySQL","Bootstrap","JQuery","Xendit API"],
      actions: [
        { label: t('proj.act.2.1'), href: "https://titanhome.net.id", primary: true }
      ],
      visual: "🏠",
    },
    {
      featured: false,
      type: t('proj.type.3'),
      title: t('proj.title.3'),
      desc: t('proj.desc.3'),
      stack: ["ReactJs","Bootstrap","API Integration"],
      actions: [
        { label: t('proj.act.3.1'), href: "https://nexa.net.id", primary: true }
      ],
    },
    {
      featured: false,
      type: t('proj.type.4'),
      title: t('proj.title.4'),
      desc: t('proj.desc.4'),
      stack: ["Laravel","MySQL","Bootstrap","JQuery"],
      actions: [
        { label: t('proj.act.4.1'), href: "https://taqincode.vercel.app/projects/kla_preview.png", primary: true }
      ],
    },
    {
      featured: false,
      type: t('proj.type.5'),
      title: t('proj.title.5'),
      desc: t('proj.desc.5'),
      stack: ["Lumen","MySQL","Bootstrap","JQuery"],
      actions: [
        { label: t('proj.act.5.1'), href: "https://festivedraw.nexa.net.id", primary: true }
      ],
    },
    {
      featured: true,
      type: t('proj.type.6'),
      title: t('proj.title.6'),
      desc: t('proj.desc.6'),
      stack: ["JavaScript","AR.js","Node.js","Vercel Serverless","OpenRouter API"],
      actions: [
        { label: t('proj.act.6.1'), href: "https://taqin98.github.io/toga-tanaman", primary: true },
        { label: t('proj.act.6.2'), href: "https://vercel-ai-backend-ten.vercel.app", primary: false }
      ],
      visual: "🌿",
    },
    {
      featured: false,
      type: t('proj.type.7'),
      title: t('proj.title.7'),
      desc: t('proj.desc.7'),
      stack: ["Next.js 15","React 19","TypeScript","Tailwind CSS","Google Apps Script"],
      actions: [
        { label: t('proj.act.7.1'), href: "https://anzafashion.vercel.app", primary: true }
      ],
    },
    {
      featured: true,
      type: t('proj.type.8'),
      title: t('proj.title.8'),
      desc: t('proj.desc.8'),
      stack: ["Laravel","MySQL","Bootstrap","jQuery","MinIO","Job Queue"],
      actions: [
        { label: t('proj.act.8.1'), href: "https://taqincode.vercel.app/projects/compliance_preview.png", primary: true }
      ],
      visual: "📑",
    }
  ];

  return (
    <section
      id="projects"
      className="py-[7rem] px-[3.5rem] border-t border-[var(--color-border-main)] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="mb-[3.5rem] reveal">
        <div className="font-mono text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem]">
          {t('proj.title')}
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
          {t('proj.heading.1')}{" "}
          <em className="italic text-[var(--color-accent)] font-light">
            {t('proj.heading.2')}
          </em>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-[1.25rem] max-[900px]:grid-cols-1">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`reveal proj-card bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[16px] p-[2rem] relative overflow-hidden transition-all duration-300 hover:border-[rgba(240,165,0,0.2)] hover:-translate-y-[5px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-[var(--color-accent2)] after:scale-x-0 after:origin-left after:transition-transform after:duration-[0.35s] hover:after:scale-x-100
              flex flex-col h-full
            `}
          >
            <div className="flex flex-col h-full">
              <div className="font-mono text-[0.66rem] text-[var(--color-accent)] tracking-[0.12em] uppercase mb-[1rem]">
                {proj.type}
              </div>
              <h3 className="font-serif text-[1.5rem] font-bold tracking-[-0.02em] mb-[1rem] leading-[1.2]">
                {proj.title}
              </h3>
              
              <div className="text-[var(--color-text2)] text-[0.88rem] leading-[1.75] font-light mb-[1.5rem] flex-1">
                {proj.desc.split('\n').map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith('•')) {
                    return (
                      <div key={i} className="flex gap-[0.5rem] mb-[0.25rem]">
                        <span className="text-[var(--color-accent)] opacity-80 mt-[2px] text-[0.7rem]">●</span>
                        <span className="flex-1">{trimmed.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  if (trimmed.toLowerCase().includes('jobdesk:') || trimmed.toLowerCase().includes('responsibilities:')) {
                     return <div key={i} className="font-medium text-[var(--color-text-main)] mt-[1.2rem] mb-[0.5rem]">{trimmed}</div>;
                  }
                  return <p key={i} className="mb-[0.5rem]">{trimmed}</p>;
                })}
              </div>

              <div className="flex flex-wrap gap-[0.4rem] mt-[1rem]">
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

          </div>
        ))}
      </div>
    </section>
  );
}
