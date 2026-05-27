"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "about",
    "nav.skills": "stack",
    "nav.projects": "projects",
    "nav.services": "services",
    "nav.contact": "contact",
    "nav.language": "Language",
    "nav.hire": "Hire Me →",
    // Hero
    "hero.badge": "Available for Remote · UTC+7",
    "hero.title.line1": "Fullstack",
    "hero.title.line2": "Developer",
    "hero.title.line3": "who ",
    "hero.title.line3.highlight": "delivers.",
    "hero.stack": "Frontend · Fullstack · Laravel · Vercel",
    "hero.desc": "I build practical, production-ready web products — from fast landing pages to Laravel-based ERP systems, dashboards, and fullstack business tools. Based in Semarang, Indonesia. Working remotely and asynchronously.",
    "hero.action.work": "See My Work ↓",
    "hero.action.email": "Email Me",
    "hero.action.cv": "Download CV",
    "link.cv": "https://drive.google.com/file/d/1YDZ5zkXK-VQreSf_a42hiVIYyVmrbJP4/view?usp=sharing",
    "hero.tz": "🕐 UTC+7 · ",
    "hero.tz.live": "Open to work",
    "hero.card.status": "Status",
    "hero.card.status.val": "Available",
    "hero.card.status.val2": " for remote",
    "hero.card.stack": "Primary Stack",
    "hero.card.deploy": "Deploy & Ship",
    "hero.card.tz": "Timezone",
    // About
    "about.title": "— About",
    "about.heading.1": "Code that",
    "about.heading.2": "works.",
    "about.p1": "I'm Taqin, a web developer based in Semarang, Central Java, Indonesia with hands-on experience building production-grade web applications. I focus on practical interfaces, maintainable code, and systems that help real businesses move faster.",
    "about.p2": "My strongest areas are React/Next.js for frontend work and Laravel/PHP for data-driven systems. I also work with Node.js, MySQL, Git, GitHub workflows, and Vercel deployments — from idea, implementation, testing, to launch.",
    "about.stats.years": "Years Experience",
    "about.stats.projects": "Projects Built",
    "about.stats.remote": "Remote Ready",
    "about.stats.async": "Async Friendly",
    "about.build": "What I Build",
    "about.row.work": "Work Type",
    "about.row.work.val": "Freelance · Contract · Full-time Remote",
    "about.row.tools": "Tools & Workflow",
    "about.row.location": "Location",
    "about.row.location.val": "Semarang, Central Java, Indonesia 🇮🇩",
    "about.row.comm": "Communication",
    "about.row.comm.val": "English · Bahasa Indonesia · Async preferred",
    "about.row.fit": "Best Fit",
    "about.row.fit.val": "Landing pages · Laravel dashboards · Internal tools · Fullstack MVPs",

    // Skills
    "skills.title": "— Tech Stack",
    "skills.heading.1": "Tools I'm",
    "skills.heading.2": "fluent",
    "skills.heading.3": "in",
    "skills.lvl.proficient": "Proficient",
    "skills.lvl.intermediate": "Intermediate",

    // Projects
    "proj.title": "— Selected Projects",
    "proj.heading.1": "Practical ",
    "proj.heading.2": "solutions.",
    "proj.view_live": "Live Site ↗",
    "proj.view_github": "GitHub ↗",
    "proj.private": "Private Repo / Demo available upon request",
    "proj.1.desc": "Complete landing page, sales funnel, and checkout system built with Next.js, integrating direct payments for a local digital business.",
    "proj.2.desc": "Internal ERP system for tracking production, raw materials, inventory, and automated reporting. Replaced scattered spreadsheets with a unified system.",
    "proj.3.desc": "Dynamic inventory management and sales dashboard built for local retail, ensuring real-time stock synchronization and easy checkout.",

    // Services
    "svc.title": "— Services",
    "svc.heading.1": "What I ",
    "svc.heading.2": "offer",
    "svc.1.title": "Landing Pages",
    "svc.1.desc": "Fast, responsive landing pages built with Next.js or clean HTML/CSS. Optimized for clarity, performance, and conversion.",
    "svc.2.title": "React Development",
    "svc.2.desc": "Custom React components, interactive UIs, and full React/Next.js frontend applications with clean, maintainable code.",
    "svc.3.title": "Fullstack & ERP",
    "svc.3.desc": "From Node + React apps to Laravel ERP dashboards — I help turn business workflows into reliable web systems.",

    // Contact
    "contact.title": "— Let's Work Together",
    "contact.heading.1": "Let's",
    "contact.heading.2": "build",
    "contact.heading.3": "something.",
    "contact.desc": "Open to freelance, contract, and full-time remote opportunities — especially landing pages, Laravel dashboards, ERP modules, internal tools, and fullstack MVPs.",
    "contact.btn.email": "Send Email →",
    "contact.btn.cv": "Download CV",
    "contact.lbl.email": "Email",
    "contact.lbl.loc": "Location",
    "contact.val.loc": "Semarang, Indonesia",
    "contact.lbl.tz": "Timezone",
    "contact.lbl.avail": "Availability",
    "contact.val.avail": "Open to work ✓",
    "contact.lbl.resp": "Response time",
    "contact.val.resp": "< 24 hours",

    // Footer
    "footer.built": "Built with Next.js, Tailwind CSS · Deployed on",
  },
  id: {
    // Navbar
    "nav.about": "tentang",
    "nav.skills": "stack",
    "nav.projects": "proyek",
    "nav.services": "layanan",
    "nav.contact": "kontak",
    "nav.language": "Bahasa",
    "nav.hire": "Rekrut Saya →",
    // Hero
    "hero.badge": "Tersedia untuk Remote · UTC+7",
    "hero.title.line1": "Fullstack",
    "hero.title.line2": "Developer",
    "hero.title.line3": "yang dapat ",
    "hero.title.line3.highlight": "diandalkan.",
    "hero.stack": "Frontend · Fullstack · Laravel · Vercel",
    "hero.desc": "Saya membangun produk web praktis dan siap produksi — mulai dari landing page cepat hingga sistem ERP berbasis Laravel, dashboard, dan alat bisnis fullstack. Berbasis di Semarang, Indonesia. Bekerja secara remote dan asinkron.",
    "hero.action.work": "Lihat Karya Saya ↓",
    "hero.action.email": "Kirim Email",
    "hero.action.cv": "Unduh CV",
    "link.cv": "https://drive.google.com/file/d/1qzYs7lfYaHl3YMcMCdnnv3-yF3faB3Hr/view?usp=sharing",
    "hero.tz": "🕐 UTC+7 · ",
    "hero.tz.live": "Terbuka untuk bekerja",
    "hero.card.status": "Status",
    "hero.card.status.val": "Tersedia",
    "hero.card.status.val2": " untuk remote",
    "hero.card.stack": "Stack Utama",
    "hero.card.deploy": "Deploy & Rilis",
    "hero.card.tz": "Zona Waktu",
    // About
    "about.title": "— Tentang",
    "about.heading.1": "Kode yang",
    "about.heading.2": "berjalan.",
    "about.p1": "Saya Taqin, seorang web developer berbasis di Semarang, Jawa Tengah, Indonesia dengan pengalaman langsung membangun aplikasi web siap produksi. Saya berfokus pada antarmuka praktis, kode yang mudah dipelihara, dan sistem yang membantu bisnis nyata bergerak lebih cepat.",
    "about.p2": "Keahlian utama saya adalah React/Next.js untuk frontend dan Laravel/PHP untuk sistem berbasis data. Saya juga menggunakan Node.js, MySQL, Git, alur kerja GitHub, dan deployment di Vercel — mulai dari ide, implementasi, pengujian, hingga peluncuran.",
    "about.stats.years": "Tahun Pengalaman",
    "about.stats.projects": "Proyek Selesai",
    "about.stats.remote": "Siap Remote",
    "about.stats.async": "Ramah Asinkron",
    "about.build": "Yang Saya Bangun",
    "about.row.work": "Tipe Kerja",
    "about.row.work.val": "Freelance · Kontrak · Full-time Remote",
    "about.row.tools": "Alat & Alur Kerja",
    "about.row.location": "Lokasi",
    "about.row.location.val": "Semarang, Jawa Tengah, Indonesia 🇮🇩",
    "about.row.comm": "Komunikasi",
    "about.row.comm.val": "Inggris · Bahasa Indonesia · Lebih suka asinkron",
    "about.row.fit": "Kecocokan",
    "about.row.fit.val": "Landing page · Dashboard Laravel · Alat internal · Fullstack MVP",

    // Skills
    "skills.title": "— Tech Stack",
    "skills.heading.1": "Alat yang saya",
    "skills.heading.2": "kuasai",
    "skills.heading.3": " ",
    "skills.lvl.proficient": "Mahir",
    "skills.lvl.intermediate": "Menengah",

    // Projects
    "proj.title": "— Proyek Pilihan",
    "proj.heading.1": "Solusi ",
    "proj.heading.2": "praktis.",
    "proj.view_live": "Situs Langsung ↗",
    "proj.view_github": "GitHub ↗",
    "proj.private": "Repo Privat / Demo tersedia atas permintaan",
    "proj.1.desc": "Landing page lengkap, sales funnel, dan sistem checkout yang dibangun dengan Next.js, mengintegrasikan pembayaran langsung untuk bisnis digital lokal.",
    "proj.2.desc": "Sistem ERP internal untuk melacak produksi, bahan baku, inventaris, dan pelaporan otomatis. Menggantikan spreadsheet yang tersebar dengan sistem terpadu.",
    "proj.3.desc": "Manajemen inventaris dinamis dan dashboard penjualan yang dibangun untuk ritel lokal, memastikan sinkronisasi stok real-time dan checkout yang mudah.",

    // Services
    "svc.title": "— Layanan",
    "svc.heading.1": "Yang Saya ",
    "svc.heading.2": "tawarkan",
    "svc.1.title": "Landing Pages",
    "svc.1.desc": "Landing page yang cepat dan responsif yang dibangun dengan Next.js atau HTML/CSS yang rapi. Dioptimalkan untuk kejelasan, kinerja, dan konversi.",
    "svc.2.title": "React Development",
    "svc.2.desc": "Komponen React kustom, UI interaktif, dan aplikasi frontend React/Next.js penuh dengan kode yang bersih dan mudah dipelihara.",
    "svc.3.title": "Fullstack & ERP",
    "svc.3.desc": "Dari aplikasi Node + React hingga dashboard ERP Laravel — Saya membantu mengubah alur kerja bisnis menjadi sistem web yang dapat diandalkan.",

    // Contact
    "contact.title": "— Mari Bekerja Sama",
    "contact.heading.1": "Mari",
    "contact.heading.2": "bangun",
    "contact.heading.3": "sesuatu.",
    "contact.desc": "Terbuka untuk peluang freelance, kontrak, dan full-time remote — terutama landing page, dashboard Laravel, modul ERP, alat internal, dan MVP fullstack.",
    "contact.btn.email": "Kirim Email →",
    "contact.btn.cv": "Unduh CV",
    "contact.lbl.email": "Email",
    "contact.lbl.loc": "Lokasi",
    "contact.val.loc": "Semarang, Indonesia",
    "contact.lbl.tz": "Zona Waktu",
    "contact.lbl.avail": "Ketersediaan",
    "contact.val.avail": "Terbuka untuk bekerja ✓",
    "contact.lbl.resp": "Waktu respon",
    "contact.val.resp": "< 24 jam",

    // Footer
    "footer.built": "Dibangun dengan Next.js, Tailwind CSS · Di-deploy di",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
