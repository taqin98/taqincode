"use client";

import { useLanguage } from "@/context/LanguageContext";
export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      num: "01",
      title: t('svc.1.title'),
      desc: t('svc.1.desc'),
    },
    {
      num: "02",
      title: t('svc.2.title'),
      desc: t('svc.2.desc'),
    },
    {
      num: "03",
      title: t('svc.3.title'),
      desc: t('svc.3.desc'),
    },
  ];

  return (
    <section
      id="services"
      className="bg-[var(--color-bg2)] border-t border-b border-[var(--color-border-main)] py-[7rem] px-[3.5rem] max-[900px]:py-[5rem] max-[900px]:px-[1.5rem]"
    >
      <div className="font-mono text-[0.68rem] text-[var(--color-accent)] tracking-[0.18em] uppercase mb-[0.75rem] reveal">
        {t('svc.title')}
      </div>
      <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.025em] reveal">
        What I{" "}
        <em className="italic text-[var(--color-accent)] font-light">{t('svc.heading.2')}</em>
      </h2>
      <div className="grid grid-cols-3 gap-[1.25rem] mt-[3rem] max-[900px]:grid-cols-1">
        {services.map((svc) => (
          <div
            key={svc.num}
            className="reveal svc-card group bg-[var(--color-card)] border border-[var(--color-border-main)] rounded-[14px] p-[2rem] transition-all duration-300 hover:border-[var(--color-acc-line)] hover:-translate-y-[3px]"
          >
            <div className="font-serif text-[2.5rem] font-black text-[var(--color-border2)] leading-none mb-[1.5rem] transition-colors duration-300 group-hover:text-[var(--color-acc-dim)]">
              {svc.num}
            </div>
            <h3 className="font-serif text-[1.2rem] font-bold tracking-[-0.02em] mb-[0.6rem]">
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
