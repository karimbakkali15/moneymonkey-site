import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card border border-white/[0.08] rounded-3xl p-12 relative overflow-hidden shadow-xl shadow-black/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3373fa_0%,_transparent_65%)] opacity-[0.12]" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#7a9eff] opacity-[0.06] rounded-full blur-[90px]" />

          <div className="relative">
            <div className="relative w-14 h-14 mx-auto mb-6 rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-lg shadow-black/40">
              <Image src="/app-icon.png" alt="Meridian" fill className="object-cover" sizes="56px" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
              Ready for calmer money days?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Download Meridian and run your finances with clarity — tracking, saving, and AI that fits a premium
              workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://apps.apple.com"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#2556d8] to-[#3373fa] text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:opacity-95 transition-opacity shadow-lg shadow-[#3373fa]/25"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Free to download. No card required to try core features.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
