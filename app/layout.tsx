import type { Metadata, Viewport } from "next";
import { Newsreader, Nunito } from "next/font/google";
import "./globals.css";

/** Canonical production URL — set your Vercel project name to `meridian` (see README). */
const siteUrl = "https://meridian-finance-site.vercel.app";

/** Rounded UI — parallels SF Rounded in the app (lists, body, buttons). */
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
});

/** Display serif — parallels SF Serif / New York for hero & section titles. */
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Meridian | AI-Powered Finance",
  description:
    "Track spending, set budgets, and get personalised AI guidance. Connect your bank with open banking and stay in control with a calm, premium experience.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Meridian",
    title: "Meridian | AI-Powered Finance",
    description:
      "Track spending, set budgets, and get personalised AI guidance. Connect your bank with open banking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian | AI-Powered Finance",
    description:
      "Track spending, set budgets, and get personalised AI guidance. Connect your bank with open banking.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080f24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
