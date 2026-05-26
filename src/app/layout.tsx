import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

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
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
    >
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
