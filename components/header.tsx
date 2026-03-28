"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f12]/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative inline-flex w-7 h-7 rounded-xl overflow-hidden ring-1 ring-white/10">
              <Image src="/app-icon.png" alt="Meridian app icon" fill className="object-cover" sizes="28px" />
            </span>
            <span className="font-serif font-semibold text-lg tracking-tight text-foreground">Meridian</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-muted-foreground hover:text-[#e0c78c] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://apps.apple.com"
              className="font-sans bg-gradient-to-r from-[#2556d8] to-[#3373fa] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity shadow-md shadow-[#3373fa]/20 ring-1 ring-[#e0c78c]/15"
            >
              Download
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-[#0f0f12] border-b border-white/[0.06] transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-muted-foreground hover:text-[#e0c78c] transition-colors text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/[0.06]">
            <Link
              href="https://apps.apple.com"
              className="font-sans block bg-gradient-to-r from-[#2556d8] to-[#3373fa] text-white px-4 py-3 rounded-lg text-sm font-semibold text-center ring-1 ring-[#e0c78c]/15"
            >
              Download
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
