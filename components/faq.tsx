"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is my financial data secure?",
    answer: "Yes. Bank connections are handled through Tink, a regulated open banking provider licensed by the Swedish Financial Supervisory Authority. Sensitive tokens are stored in your device's secure Keychain, and all communication uses HTTPS. We never see your bank login credentials.",
  },
  {
    question: "How does Money Monkey connect to my bank?",
    answer: "We use Tink, a trusted and regulated open banking provider. You authenticate directly with your bank through Tink's secure portal. Money Monkey never sees or stores your banking login details.",
  },
  {
    question: "What can the AI advisor do?",
    answer: "Our AI can analyse your spending patterns, suggest budgets, help you create savings goals, track recurring bills, and provide personalised tips to improve your financial health. Pro users get unlimited conversations with 5 specialised AI advisors.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes. Go to iPhone Settings → your name → Subscriptions → Money Monkey → Cancel. Your Pro features remain active until the end of your current billing period. No questions asked.",
  },
  {
    question: "How do I delete my account and data?",
    answer: "Go to Settings in the app → scroll to the bottom → tap Delete Account. This permanently removes your account and all associated data within 30 days.",
  },
  {
    question: "Which banks are supported?",
    answer: "Money Monkey supports most major UK banks through Tink's open banking integration, including Barclays, HSBC, Lloyds, NatWest, Santander, Monzo, Starling, and many more.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about Money Monkey.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
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
                  openIndex === index ? "max-h-48" : "max-h-0"
                )}
              >
                <p className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
