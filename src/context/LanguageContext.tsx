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
    "proj.type.1": "● Featured · Web Portal",
    "proj.title.1": "Muladi Dome - Internet Package Web Portal",
    "proj.desc.1": "Web portal for purchasing internet packages (3 & 6 hours) accessible via Muladi Dome Wifi, Diponegoro University, Semarang.\n\nResponsibilities:\n• Developed backend using Laravel for package and transaction management.\n• Integrated online payment gateway using Xendit.\n• Implemented frontend based on UI/UX mockups for optimal user experience.\n• Handled validation, data security, and website performance optimization.\n• Developed REST APIs for adding and removing router passcodes.",
    "proj.act.1.1": "Visit Website",

    "proj.type.2": "● Featured · ISP Web & Portal",
    "proj.title.2": "TitanHome - Home Internet Service",
    "proj.desc.2": "Internet service provider in Semarang offering subscription packages up to 12 months. Includes a company profile website and service registration portal.\n\nResponsibilities:\n• Developed Laravel backend for user, package, and transaction management.\n• Created responsive frontend based on UI/UX designs.\n• Built CMS panel for managing website content and services.\n• Built User panel for checking service status and billing.\n• Implemented authentication, online registration, and Xendit payments.",
    "proj.act.2.1": "Visit Website",

    "proj.type.3": "● Company Profile",
    "proj.title.3": "Nexa Semarang",
    "proj.desc.3": "Company profile website showcasing Nexa's digital solutions and services as a trusted digital provider in Indonesia, featuring a modern and responsive design.\n\nResponsibilities:\n• Implemented frontend based on UI/UX mockups.\n• Handled form validation, data security, and performance optimization.\n• Integrated APIs across all pages and displayed dynamic data.",
    "proj.act.3.1": "Visit Website",

    "proj.type.4": "● ERP System",
    "proj.title.4": "KLA Computer - ERP System",
    "proj.desc.4": "Integrated enterprise resource planning system used for managing various business processes, including data management, transactions, and reporting.\n\nResponsibilities:\n• Built sales marketing modules (POS, Sales orders, Sales reports, Promos, etc).\n• Built sales finance modules (AR Invoices, Customer receivables settlement, etc).\n• Collaborated with other developers to build and maintain the ERP System.",
    "proj.act.4.1": "View Preview",

    "proj.type.5": "● Campaign & Verification",
    "proj.title.5": "Nexa Festive Draw",
    "proj.desc.5": "A raffle program designed to boost customer interaction for NEXA by uploading shopping receipts. Admins can verify data and monitor participants.\n\nResponsibilities:\n• Developed customer registration and OTP-based login module.\n• Built customer dashboard for uploading receipts and checking approval history.\n• Implemented admin dashboard for receipt verification and participant monitoring.",
    "proj.act.5.1": "Visit Website",

    "proj.type.6": "● Featured · Web AR & AI",
    "proj.title.6": "Family Medicinal Garden (TOGA)",
    "proj.desc.6": "PWA web app for medicinal plant info featuring marker-based Augmented Reality (AR) and an OpenRouter AI chatbot. Serverless backend on Vercel.\n\nResponsibilities:\n• Built installable, responsive PWA frontend.\n• Implemented marker-based AR using AR.js.\n• Developed Vercel serverless backend as a secure proxy for OpenRouter AI API.\n• Integrated AI chatbot with automatic fallback system.\n• Developed event schedule management linked to Google Apps Script.",
    "proj.act.6.1": "Visit App",
    "proj.act.6.2": "Backend API",

    "proj.type.7": "● Landing Page · Apps Script",
    "proj.title.7": "Anza Fashion",
    "proj.desc.7": "Catalog landing page for a custom tailoring business, migrated to Next.js 15. Contact form and product data integrated with Google Sheets via Google Apps Script.\n\nResponsibilities:\n• Built a modular landing page using Next.js App Router and TypeScript.\n• Built API routes (/api/contact & /api/collections) integrated with Apps Script.\n• Implemented reveal-on-scroll animations using IntersectionObserver.\n• Applied shared secret protection between Vercel and Apps Script.",
    "proj.act.7.1": "Visit Website",

    "proj.type.8": "● Featured · Enterprise App",
    "proj.title.8": "Compliance Apps",
    "proj.desc.8": "Integrated web application for document management and operational compliance: SOPs, ISO Audits, Whistle Blowing, and document disposal.\n\nResponsibilities:\n• Developed SOP/WI management module with multi-level approvals.\n• Built ISO-based internal audit module with tree views and checklists.\n• Implemented Whistle Blowing system and custom role privileges.\n• Automated changelog system via Git post-commit hooks.\n• Integrated MinIO and job queues for asynchronous document uploads.",
    "proj.act.8.1": "View Preview",

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
    "proj.type.1": "● Unggulan · Web Portal",
    "proj.title.1": "Muladi Dome - Web Portal Pembelian Paket Internet",
    "proj.desc.1": "Portal web untuk pembelian paket internet (3 jam & 6 jam) yang dapat diakses di Wifi Muladi Dome, Universitas Diponegoro, Semarang.\n\nJobdesk:\n• Mengembangkan backend menggunakan Laravel untuk manajemen paket dan transaksi.\n• Membuat integrasi pembayaran online menggunakan xendit.\n• Mengimplementasikan frontend sesuai mockup UI/UX designer untuk pengalaman pengguna optimal.\n• Menangani validasi, keamanan data, dan optimasi performa website.\n• Mengembangkan REST API untuk menambahkan dan menghapus passcode pada router.",
    "proj.act.1.1": "Kunjungi Website",

    "proj.type.2": "● Unggulan · ISP Web & Portal",
    "proj.title.2": "TitanHome - Layanan Internet Rumah",
    "proj.desc.2": "Penyedia layanan internet di Semarang dengan paket berlangganan bulanan hingga 12 bulan. Meliputi website company profile dan portal registrasi layanan.\n\nJobdesk:\n• Mengembangkan backend Laravel untuk manajemen pengguna, paket, dan transaksi.\n• Membuat frontend responsif sesuai desain UI/UX.\n• Membuat panel CMS untuk mengelola informasi website dan layanan.\n• Membuat panel User untuk mengecek status layanan dan tagihan.\n• Mengimplementasikan autentikasi, registrasi online, dan pembayaran Xendit.",
    "proj.act.2.1": "Kunjungi Website",

    "proj.type.3": "● Company Profile",
    "proj.title.3": "Nexa Semarang",
    "proj.desc.3": "Website company profile yang menampilkan layanan dan solusi digital Nexa sebagai penyedia layanan digital terpercaya di Indonesia, dengan desain modern dan responsif.\n\nJobdesk:\n• Mengimplementasikan frontend sesuai mockup UI/UX designer.\n• Menangani validasi form, keamanan data, dan optimasi performa.\n• Mengintegrasikan API pada setiap halaman dan menampilkan data dinamis.",
    "proj.act.3.1": "Kunjungi Website",

    "proj.type.4": "● ERP System",
    "proj.title.4": "KLA Computer - ERP System",
    "proj.desc.4": "Sistem yang digunakan untuk mengelola berbagai proses bisnis perusahaan secara terintegrasi, termasuk manajemen data, transaksi, dan laporan.\n\nJobdesk:\n• Membuat modul sales marketing (POS, Sales order, Report penjualan, Promo barang, dll).\n• Membuat modul sales finance (Invoice AR, Pelunasan piutang customer, dll).\n• Berkolaborasi dengan developer lain untuk mengembangkan ERP System.",
    "proj.act.4.1": "Lihat Preview",

    "proj.type.5": "● Campaign & Verifikasi",
    "proj.title.5": "Nexa Festive Draw",
    "proj.desc.5": "Program undian untuk meningkatkan interaksi pelanggan NEXA dengan mengunggah nota belanja. Admin dapat memverifikasi data dan memonitor peserta.\n\nJobdesk:\n• Mengembangkan modul registrasi pelanggan dan login berbasis OTP.\n• Membangun dashboard pelanggan untuk upload nota belanja dan riwayat approval.\n• Mengimplementasikan dashboard admin untuk verifikasi nota dan monitoring peserta.",
    "proj.act.5.1": "Kunjungi Website",

    "proj.type.6": "● Unggulan · Web AR & AI",
    "proj.title.6": "Taman Obat Keluarga (TOGA)",
    "proj.desc.6": "Aplikasi web PWA informasi tanaman obat dengan fitur Augmented Reality (AR) berbasis marker dan chatbot AI OpenRouter. Backend serverless di Vercel.\n\nJobdesk:\n• Membangun antarmuka responsif PWA yang dapat diinstal.\n• Mengimplementasikan AR berbasis marker menggunakan AR.js.\n• Mengembangkan backend serverless Vercel sebagai proxy aman untuk API AI OpenRouter.\n• Integrasi AI chatbot dengan sistem fallback otomatis.\n• Mengembangkan fitur manajemen jadwal event terhubung ke Google Apps Script.",
    "proj.act.6.1": "Kunjungi App",
    "proj.act.6.2": "API Backend",

    "proj.type.7": "● Landing Page · Apps Script",
    "proj.title.7": "Anza Fashion",
    "proj.desc.7": "Landing page katalog untuk bisnis jahitan custom, bermigrasi ke Next.js 15. Form kontak dan data produk terintegrasi dengan Google Spreadsheet via Google Apps Script.\n\nJobdesk:\n• Membangun landing page modular dengan Next.js App Router dan TypeScript.\n• Membangun API route (/api/contact & /api/collections) terintegrasi Apps Script.\n• Mengimplementasikan animasi reveal-on-scroll menggunakan IntersectionObserver.\n• Menerapkan proteksi shared secret antara Vercel dan Apps Script.",
    "proj.act.7.1": "Kunjungi Website",

    "proj.type.8": "● Unggulan · Enterprise App",
    "proj.title.8": "Compliance Apps",
    "proj.desc.8": "Aplikasi web terintegrasi untuk pengelolaan dokumen dan kepatuhan operasional: SOP, ISO Audit, Whistle Blowing, dan pemusnahan dokumen.\n\nJobdesk:\n• Mengembangkan modul manajemen SOP/WI dengan approval multi-level.\n• Membangun modul audit internal berbasis ISO dengan tree view dan checklist.\n• Mengimplementasikan Whistle Blowing system dan custom role privileges.\n• Sistem changelog otomatis via Git post-commit hook.\n• Integrasi MinIO dan job queue untuk upload dokumen asinkron.",
    "proj.act.8.1": "Lihat Preview",

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
