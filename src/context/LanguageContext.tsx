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
    "proj.title": "— Projects",
    "proj.heading.1": "Things I've",
    "proj.heading.2": "built",
    "proj.type.1": "● Featured · ERP System",
    "proj.title.1": "ERP Inventory & Operations System",
    "proj.desc.1": "A multi-module Laravel system for managing operational workflows: inventory tracking, purchase orders, sales reports, employee management, and role-based access control. Built with a relational MySQL schema and clean CRUD flows for daily business use.",
    "proj.act.1.1": "Request Case Study",
    "proj.act.1.2": "GitHub",

    "proj.type.2": "● Next.js · Deployed on Vercel",
    "proj.title.2": "Marketing Landing Pages",
    "proj.desc.2": "High-conversion, animated landing pages for startups and businesses. Fully responsive, optimized for Core Web Vitals, with smooth scroll animations and Vercel edge deployment. From brief to live in hours.",
    "proj.act.2.1": "Discuss Similar Project",
    "proj.act.2.2": "GitHub",

    "proj.type.3": "● React · Component Library",
    "proj.title.3": "Reusable React Components",
    "proj.desc.3": "Custom React component library — modals, data tables, form builders, and dashboard widgets. Documented, modular, and ready to drop into any project with consistent design tokens.",
    "proj.act.3.1": "View Components",
    "proj.act.3.2": "GitHub",

    "proj.type.4": "● Node.js · REST API · Fullstack",
    "proj.title.4": "Small Fullstack Web Apps",
    "proj.desc.4": "End-to-end fullstack projects — Node.js / Express API with a React frontend, JWT authentication, MySQL database, CRUD operations, and Vercel deployment. Clean architecture, ready to scale.",
    "proj.act.4.1": "Plan an MVP",
    "proj.act.4.2": "GitHub",

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
    "proj.title": "— Proyek",
    "proj.heading.1": "Yang telah saya",
    "proj.heading.2": "bangun",
    "proj.type.1": "● Unggulan · Sistem ERP",
    "proj.title.1": "Sistem Inventaris & Operasional ERP",
    "proj.desc.1": "Sistem Laravel multi-modul untuk mengelola alur kerja operasional: pelacakan inventaris, pesanan pembelian, laporan penjualan, manajemen karyawan, dan kontrol akses berbasis peran. Dibangun dengan skema MySQL relasional dan alur CRUD yang bersih untuk penggunaan bisnis sehari-hari.",
    "proj.act.1.1": "Minta Studi Kasus",
    "proj.act.1.2": "GitHub",

    "proj.type.2": "● Next.js · Di-deploy di Vercel",
    "proj.title.2": "Landing Page Pemasaran",
    "proj.desc.2": "Landing page beranimasi dengan konversi tinggi untuk startup dan bisnis. Sepenuhnya responsif, dioptimalkan untuk Core Web Vitals, dengan animasi gulir yang mulus dan penerapan Vercel edge. Dari konsep hingga live dalam hitungan jam.",
    "proj.act.2.1": "Diskusikan Proyek Serupa",
    "proj.act.2.2": "GitHub",

    "proj.type.3": "● React · Component Library",
    "proj.title.3": "Komponen React Reusable",
    "proj.desc.3": "Pustaka komponen React kustom — modal, tabel data, pembuat formulir, dan widget dashboard. Terdokumentasi, modular, dan siap digunakan ke dalam proyek apa pun dengan desain yang konsisten.",
    "proj.act.3.1": "Lihat Komponen",
    "proj.act.3.2": "GitHub",

    "proj.type.4": "● Node.js · REST API · Fullstack",
    "proj.title.4": "Aplikasi Web Fullstack Skala Kecil",
    "proj.desc.4": "Proyek fullstack ujung-ke-ujung — Node.js / Express API dengan frontend React, autentikasi JWT, database MySQL, operasi CRUD, dan deployment Vercel. Arsitektur bersih, siap untuk diskalakan.",
    "proj.act.4.1": "Rencanakan MVP",
    "proj.act.4.2": "GitHub",

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
