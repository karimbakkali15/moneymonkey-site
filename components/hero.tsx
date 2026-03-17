import Link from "next/link";
import { ArrowRight, Shield, Sparkles, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Jungle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#177352_0%,_transparent_50%)] opacity-15" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-[#29A06E] opacity-[0.07] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F5CC61] opacity-[0.05] rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
              <span className="text-lg">🐒</span>
              <span className="text-sm text-muted-foreground">AI-powered finance tracking</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your money,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A06E] to-[#43d990]">made smarter.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
              Connect your bank, track every penny, and get personalised AI advice to grow your wealth. Money Monkey makes finance effortless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://apps.apple.com"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#177352] to-[#29A06E] text-white px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#177352]/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download on App Store
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
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

          {/* Right content - Dashboard preview */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Total Balance</p>
                  <p className="text-3xl font-bold text-foreground">£12,847.32</p>
                </div>
                <div className="flex items-center gap-1 bg-[#29A06E]/10 text-[#29A06E] px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+8.2%</span>
                </div>
              </div>

              <div className="h-48 bg-secondary/50 rounded-xl mb-6 flex items-end justify-around p-4 gap-2">
                {[35, 55, 40, 70, 50, 85, 65, 78, 55, 90, 72, 82].map((height, i) => (
                  <div
                    key={i}
                    className="rounded-t-sm w-full transition-all"
                    style={{ 
                      height: `${height}%`,
                      background: `linear-gradient(to top, #177352, #29A06E${height > 70 ? '' : '99'})`
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">Savings</p>
                  <p className="text-lg font-semibold text-foreground">£4,200</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">Budget Left</p>
                  <p className="text-lg font-semibold text-[#29A06E]">£680</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">Score</p>
                  <p className="text-lg font-semibold text-[#F5CC61]">82/100</p>
                </div>
              </div>
            </div>

            {/* Floating AI card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#29A06E]/10 rounded-full flex items-center justify-center text-lg">
                  🐒
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI Insight</p>
                  <p className="text-xs text-muted-foreground">You saved 23% more this month!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
