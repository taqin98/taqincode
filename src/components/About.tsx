"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="py-[7rem] px-[3.5rem] border-t border-[var(--color-border-main)] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="font-mono text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem] reveal">
        {t('about.title')}
      </div>
      <div className="grid grid-cols-[1.3fr_1fr] gap-[6rem] mt-[3.5rem] max-[900px]:grid-cols-1 max-[900px]:gap-[3rem]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[1.5rem] reveal">
            <div className="w-[110px] h-[110px] shrink-0 rounded-md overflow-hidden border-2 border-[var(--color-acc-line)] bg-[var(--color-card)] relative">
              <Image
                src="/avatar1.png"
                alt="Profile"
                fill
                className="object-cover"
                sizes="110px"
              />
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
              {t('about.heading.1')}<br />
              <em className="italic text-[var(--color-accent)] font-light">{t('about.heading.2')}</em>
            </h2>
          </div>
          <p className="text-[1rem] text-[var(--color-text2)] leading-[1.85] font-light mb-[1rem] mt-[2rem] reveal">
            {t('about.p1')}
          </p>
          <p className="text-[1rem] text-[var(--color-text2)] leading-[1.85] font-light mb-[1rem] reveal">
            {t('about.p2')}
          </p>
          <div className="grid grid-cols-2 gap-[1rem] mt-[2.5rem] reveal">
            {[
              { num: "4+", label: t('about.stats.years') },
              { num: "20+", label: t('about.stats.projects') },
              { num: "100%", label: t('about.stats.remote') },
              { num: "UTC+7", label: t('about.stats.async') },
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
              {t('about.build')}
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
              label: t('about.row.work'),
              val: t('about.row.work.val'),
            },
            {
              label: t('about.row.tools'),
              chips: ["GitHub", "Vercel", "VS Code", "Git", "Figma"],
            },
            {
              label: t('about.row.location'),
              val: t('about.row.location.val'),
            },
            {
              label: t('about.row.comm'),
              val: t('about.row.comm.val'),
            },
            {
              label: t('about.row.fit'),
              val: t('about.row.fit.val'),
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
