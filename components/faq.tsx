"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption to protect your data. We're also SOC 2 Type II certified and never sell your personal information to third parties.",
  },
  {
    question: "How does MoneyMonkey connect to my bank?",
    answer: "We use Plaid, a secure and trusted service used by major financial apps, to connect to your bank accounts. You'll authenticate directly with your bank, and we never see your login credentials.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export all your data before canceling. After cancellation, we retain your data for 30 days in case you change your mind, then it's permanently deleted.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a full refund within the first 14 days of any paid subscription. After that, you can cancel anytime but refunds aren't available for partial months.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about MoneyMonkey.
          </p>
        </div>

        {/* FAQ items */}
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
