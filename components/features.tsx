import { Brain, Landmark, PiggyBank, Receipt, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Financial Advisor",
    description: "Chat with 5 specialised AI monkeys — from budgeting to investing — each with personalised advice based on your real spending data.",
  },
  {
    icon: Landmark,
    title: "Open Banking",
    description: "Securely connect your UK bank accounts via Tink. Your transactions sync automatically — no manual entry needed.",
  },
  {
    icon: PiggyBank,
    title: "Savings Goals",
    description: "Set savings buckets with targets and deadlines. Watch your progress grow with visual trackers and milestone celebrations.",
  },
  {
    icon: Receipt,
    title: "Recurring Bills",
    description: "Automatically detect and track recurring payments. Get alerts before bills are due so you're never caught off guard.",
  },
  {
    icon: BarChart3,
    title: "Spending Analytics",
    description: "Detailed breakdowns by category, merchant, and time period. Understand exactly where your money goes each month.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Bank tokens stored in device Keychain. HTTPS everywhere. No passwords stored. Your financial data stays yours.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything you need to master your money
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Powerful features wrapped in a beautiful interface, designed to make personal finance actually enjoyable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-[#29A06E]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#29A06E]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#29A06E]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#29A06E]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
