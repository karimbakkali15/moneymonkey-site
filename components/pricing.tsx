import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "£0",
    period: "forever",
    description: "Core budgeting and tracking to get started.",
    features: [
      "1 bank connection",
      "Up to 3 budgets",
      "10 AI messages per day",
      "Automatic transaction sync",
      "Savings goals & recurring bills",
    ],
    cta: "Download free",
    popular: false,
  },
  {
    name: "Pro Monthly",
    price: "£9.99",
    period: "per month",
    description: "Full Meridian experience, unlocked.",
    features: [
      "Everything in Free",
      "Unlimited AI conversations",
      "Unlimited budgets & bank links",
      "AI budget tools",
      "7-day free trial",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Pro Annual",
    price: "£99.99",
    period: "per year",
    description: "Best value — save vs paying monthly.",
    features: ["Everything in Pro Monthly", "One payment for the year", "7-day trial included", "Best value"],
    cta: "Start free trial",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Simple pricing
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Start free. Upgrade when Meridian has{" "}
            <span className="text-[#e0c78c] font-medium">earned a place</span> in your routine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-card border rounded-2xl p-8 flex flex-col border-white/[0.08]",
                plan.popular
                  ? "border-[#3373fa]/45 ring-1 ring-[#3373fa]/25 shadow-[0_12px_40px_-8px_rgba(51,115,250,0.2),0_0_60px_-20px_rgba(224,199,140,0.12)]"
                  : ""
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans bg-[#0c0e14] border border-[#e0c78c]/35 text-[#e0c78c] text-[11px] uppercase tracking-[0.12em] font-semibold px-3 py-1.5 rounded-full">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1 type-display-tight">
                  <span className="font-serif text-4xl font-semibold text-foreground">
                    {plan.price.startsWith("£") ? (
                      <>
                        <span className="text-[#e0c78c]">£</span>
                        {plan.price.slice(1)}
                      </>
                    ) : (
                      plan.price
                    )}
                  </span>
                  <span className="font-sans text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e0c78c] shrink-0 mt-0.5 opacity-90" />
                    <span className="font-sans text-sm text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://apps.apple.com"
                className={cn(
                  "font-sans w-full py-3 rounded-xl font-semibold text-center text-sm transition-all",
                  plan.popular
                    ? "bg-gradient-to-r from-[#2556d8] to-[#3373fa] text-white hover:opacity-95 shadow-lg shadow-[#3373fa]/25 ring-1 ring-[#e0c78c]/20"
                    : "bg-secondary text-secondary-foreground hover:bg-white/[0.06] border border-white/[0.06]"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
