"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const screens = [
  { id: "home", label: "Home", src: "/screenshots/home.png" },
  { id: "savings", label: "Savings", src: "/screenshots/savings.png" },
  { id: "ai", label: "Money Monkey", src: "/screenshots/ai-chat.png" },
  { id: "analytics", label: "Analytics", src: "/screenshots/analytics.png" },
  { id: "leaderboard", label: "Leaderboard", src: "/screenshots/leaderboard.png" },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto shrink-0" style={{ width: 270, height: 555 }}>
      <div className="absolute inset-0 rounded-[40px] border-[3px] border-white/10 bg-black shadow-2xl shadow-black/50 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="270px"
          priority
        />
      </div>
    </div>
  );
}

export function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section id="screenshots" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A beautiful, intuitive interface that makes managing your money feel effortless.
          </p>
        </div>

        {/* Screen selector tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                active === i
                  ? "bg-[#29A06E] text-white shadow-lg shadow-[#29A06E]/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Carousel with 3 phones */}
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {/* Previous screen (faded) */}
          <div className="hidden md:block opacity-40 scale-90 transition-all duration-500">
            <PhoneFrame
              src={screens[(active - 1 + screens.length) % screens.length].src}
              alt={screens[(active - 1 + screens.length) % screens.length].label}
            />
          </div>

          {/* Active screen */}
          <div className="transition-all duration-500 scale-100">
            <PhoneFrame
              src={screens[active].src}
              alt={screens[active].label}
            />
            <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
              {screens[active].label}
            </p>
          </div>

          {/* Next screen (faded) */}
          <div className="hidden md:block opacity-40 scale-90 transition-all duration-500">
            <PhoneFrame
              src={screens[(active + 1) % screens.length].src}
              alt={screens[(active + 1) % screens.length].label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
