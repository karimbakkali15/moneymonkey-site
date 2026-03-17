import Link from "next/link";
import { AnimatedHeading } from "@/components/animated-heading";
import Image from "next/image";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
       <div className="absolute inset-0">
        <Image src="/jungle-hero.png" alt="Jungle background" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0D1712]" />
      </div>

      <div className="max-w-3xl mx-auto relative text-center">
        <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border mb-8">
          <span className="relative inline-flex w-7 h-7 rounded-full overflow-hidden bg-black/40"><Image src="/app-icon.png" alt="Money Monkey app icon" fill className="object-cover" sizes="28px" /></span>
          <span className="text-sm text-muted-foreground">AI-powered finance tracking</span>
        </div>

        <AnimatedHeading text="Your money, made smarter." className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance" />

        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed mb-10">
          Connect your bank, track every penny, and get personalised AI advice to grow your wealth. Money Monkey makes finance effortless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="https://apps.apple.com"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#177352] to-[#29A06E] text-white px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#177352]/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on App Store
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex items-center gap-6 justify-center">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#29A06E]" />
            <span className="text-sm text-muted-foreground">Bank-level security</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#F5CC61]" />
            <span className="text-sm text-muted-foreground">AI-powered insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
