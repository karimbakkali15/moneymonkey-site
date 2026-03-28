"use client";

import { cn } from "@/lib/utils";

export function AnimatedHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#7a9eff] via-white to-[#c7dbff]",
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
