import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunan Jibril — IT Enthusiast",
  description:
    "Portfolio of Sunan Jibril — IT Enthusiast specializing in Network Engineering, DevOps, Infrastructure, and Web Development. Solum Secundum Data et Veritas.",
  keywords: [
    "Sunan Jibril",
    "IT Enthusiast",
    "Network Engineering",
    "DevOps",
    "Web Development",
    "System Administration",
    "Portfolio",
  ],
  authors: [{ name: "Sunan Jibril" }],
  openGraph: {
    title: "Sunan Jibril — IT Enthusiast",
    description:
      "Solum Secundum Data et Veritas — Network Engineering, DevOps & Web Development.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05050a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
