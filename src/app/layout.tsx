import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport = {
  themeColor: "#08090e",
};

export const metadata: Metadata = {
  title: "Taqin — Fullstack Web Developer",
  description: "Taqin is a fullstack web developer based in Semarang, Indonesia, specializing in React, Next.js, Laravel, ERP systems, and production-ready web applications.",
  metadataBase: new URL("https://taqincode.vercel.app"),
  openGraph: {
    title: "Taqin — Fullstack Web Developer",
    description: "Fullstack developer building Laravel ERP systems, React/Next.js interfaces, landing pages, and practical business web apps.",
    type: "website",
    url: "https://taqincode.vercel.app", // Adjust if needed
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,900;1,9..144,300;1,9..144,700;1,9..144,900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
