"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Simple text animation inspired by React Bits text components
export function AnimatedHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <h1
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#29A06E] via-[#43d990] to-[#F5CC61]",
        className,
      )}
    >
      <span className="relative inline-flex overflow-hidden align-baseline">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block will-change-transform opacity-0 translate-y-4 animate-[fadeUp_0.6s_forwards]"
            style={{
              animationDelay: `${i * 35}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </h1>
  );
}

// Tailwind v4 keyframes via arbitrary values
// fadeUp defined globally in globals.css as a safety, but here we rely on arbitrary animate definition.
