"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is my financial data secure?",
    answer:
      "Yes. Bank connections use Tink, a regulated open banking provider. Sensitive tokens live in your device Keychain, and traffic is encrypted with HTTPS. We never see your bank login credentials.",
  },
  {
    question: "How does Meridian connect to my bank?",
    answer:
      "You authenticate directly with your bank through Tink’s secure flow. Meridian does not store your banking password.",
  },
  {
    question: "What can the AI assistant do?",
    answer:
      "It can summarise spending, suggest budgets, help with savings goals, recurring bills, and personalised tips. Free includes a daily message allowance; Pro unlocks unlimited conversations and the full toolset.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. Pro includes a trial where applicable. Cancel in Settings → Apple ID → Subscriptions → Meridian. Paid time remains active until the period ends.",
  },
  {
    question: "How do I delete my account and data?",
    answer:
      "In the app: Settings → Delete account. Data is removed within 30 days subject to legal retention requirements.",
  },
  {
    question: "Which banks are supported?",
    answer:
      "Most major UK banks via Tink — including Barclays, HSBC, Lloyds, NatWest, Santander, Monzo, Starling, and many others.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">Straight answers about Meridian.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-white/[0.08] rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-2">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-[min(28rem,80vh)]" : "max-h-0"
                )}
              >
                <p className="px-6 pb-4 text-muted-foreground leading-relaxed text-[15px]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
