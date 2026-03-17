import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "£0",
    period: "forever",
    description: "Get started with core budgeting and tracking.",
    features: [
      "Connect your bank account",
      "Automatic transaction tracking",
      "Basic spending breakdown",
      "Savings goals",
      "5 AI messages per day",
    ],
    cta: "Download Free",
    popular: false,
  },
  {
    name: "Pro Monthly",
    price: "£4.99",
    period: "per month",
    description: "Unlock the full power of Money Monkey.",
    features: [
      "Everything in Free",
      "Unlimited AI conversations",
      "All 5 AI advisor monkeys",
      "Advanced analytics & insights",
      "Recurring bill tracking",
      "Priority support",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Pro Annual",
    price: "£29.99",
    period: "per year",
    description: "Best value — save over 50% vs monthly.",
    features: [
      "Everything in Pro Monthly",
      "Works out to £2.50/month",
      "One payment, full year access",
      "Early access to new features",
      "Priority support",
      "Best value",
    ],
    cta: "Start Pro Annual",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, honest pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start free, upgrade when you&apos;re ready. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-card border rounded-2xl p-8 flex flex-col",
                plan.popular
                  ? "border-[#29A06E] shadow-lg shadow-[#29A06E]/10"
                  : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#177352] to-[#29A06E] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#29A06E] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://apps.apple.com"
                className={cn(
                  "w-full py-3 rounded-xl font-medium text-center transition-all",
                  plan.popular
                    ? "bg-gradient-to-r from-[#177352] to-[#29A06E] text-white hover:opacity-90 shadow-lg shadow-[#177352]/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
