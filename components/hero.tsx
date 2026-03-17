import Link from "next/link";
import { AnimatedHeading } from "@/components/animated-heading";
import Image from "next/image";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/jungle-hero.png"
          alt="Jungle background"
          fill
          priority
          className="object-cover object-[center_top]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-[#050908]" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="relative text-center lg:text-left flex-1">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-6 sm:mb-8 backdrop-blur-xl bg-black/70 border-[#29A06E]/70 shadow-[0_0_25px_rgba(41,160,110,0.45)] max-w-full">
            <span className="relative inline-flex w-8 h-8 rounded-full overflow-hidden bg-[#F5CC61] shadow-md">
              <Image src="/app-icon.png" alt="Money Monkey app icon" fill className="object-cover" sizes="28px" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              AI-powered finance tracking
            </span>
          </div>

          <AnimatedHeading
            text="Your money, made smarter."
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white"
          />

          <p className="text-lg text-white/85 max-w-xl mt-5 mb-8 text-pretty leading-relaxed mx-auto lg:mx-0">
            Connect your bank, track every penny, and get personalised AI advice to grow your wealth. Money Monkey makes
            finance effortless.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Link
              href="https://apps.apple.com"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#177352] to-[#29A06E] text-white px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-black/40"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#29A06E]" />
              <span className="text-sm text-white/80">Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F5CC61]" />
              <span className="text-sm text-white/80">AI-powered insights</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-1">
          <div className="relative w-[260px] h-[540px] mx-auto">
            <div className="absolute inset-0 rounded-[40px] border border-white/15 bg-black/60 shadow-2xl shadow-black/60 overflow-hidden">
              <Image
                src="/screenshots/home.png"
                alt="Money Monkey home screen"
                fill
                className="object-cover"
                sizes="260px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
