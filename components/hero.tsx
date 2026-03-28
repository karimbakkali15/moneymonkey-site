import Link from "next/link";
import { AnimatedHeading } from "@/components/animated-heading";
import Image from "next/image";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-14 sm:pb-24 overflow-x-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-[#080f24]">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 20%, rgba(51, 115, 250, 0.35) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 85% 15%, rgba(224, 199, 140, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 60% 45% at 50% 100%, rgba(51, 115, 250, 0.12) 0%, transparent 45%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0f0f12]" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="relative text-center lg:text-left flex-1">
          <div className="inline-flex flex-row items-center gap-3 px-5 py-2.5 rounded-full border mb-6 sm:mb-8 backdrop-blur-xl bg-black/40 border-white/[0.12] shadow-[0_0_40px_rgba(51,115,250,0.15)] max-w-full">
            <span className="relative inline-flex w-8 h-8 shrink-0 rounded-full overflow-hidden ring-1 ring-[#e0c78c]/25 shadow-lg shadow-black/40">
              <Image src="/app-icon.png" alt="Meridian app icon" fill className="object-cover" sizes="28px" />
            </span>
            <span className="type-meta-caps text-white/80 whitespace-nowrap">Meridian · App</span>
          </div>

          <AnimatedHeading
            text="Clarity for every pound."
            className="max-w-full text-[clamp(1.5rem,4.2vw+0.6rem,3.25rem)] sm:text-5xl lg:text-[3.25rem] leading-[1.2] sm:leading-[1.18] text-white"
          />

          <p className="font-sans text-base sm:text-lg text-white/72 max-w-xl mt-4 mb-6 sm:mb-8 text-pretty leading-relaxed mx-auto lg:mx-0">
            Connect your bank, see the full picture, and get calm, personalised guidance. Built for a{" "}
            <span className="text-[#e0c78c] font-medium">premium</span>, focused money routine — not noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
            <Link
              href="https://apps.apple.com"
              className="font-sans inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#2556d8] via-[#3373fa] to-[#5b8cff] text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] hover:opacity-95 transition-opacity shadow-lg shadow-[#3373fa]/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-6 justify-center lg:justify-start font-sans">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#7a9eff]" />
              <span className="text-sm text-white/65">Bank-grade connections</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#e0c78c]" />
              <span className="text-sm text-white/65">
                Private AI — <span className="text-[#e0c78c]/95 font-medium">your data stays yours</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-1">
          <div className="relative w-[260px] h-[540px] mx-auto">
            <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-black/50 shadow-2xl shadow-black/70 ring-1 ring-[#e0c78c]/10 overflow-hidden">
              <Image
                src="/screenshots/home.png"
                alt="Meridian home screen"
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
