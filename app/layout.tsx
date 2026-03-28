import type { Metadata, Viewport } from "next";
import { Newsreader, Nunito } from "next/font/google";
import "./globals.css";

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
  title: "Meridian | AI-Powered Finance",
  description:
    "Track spending, set budgets, and get personalised AI guidance. Connect your bank with open banking and stay in control with a calm, premium experience.",
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
