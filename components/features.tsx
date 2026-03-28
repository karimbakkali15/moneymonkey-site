import { Brain, Landmark, PiggyBank, Receipt, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI financial copilot",
    description:
      "Ask questions in plain language and get answers grounded in your real balances, budgets, and habits — with a calm, premium chat experience.",
  },
  {
    icon: Landmark,
    title: "Open banking",
    description:
      "Securely connect UK accounts through Tink. Transactions sync automatically — no manual spreadsheets.",
  },
  {
    icon: PiggyBank,
    title: "Savings goals",
    description:
      "Set targets and deadlines, track progress visually, and stay motivated with clear milestones.",
  },
  {
    icon: Receipt,
    title: "Recurring bills",
    description:
      "Surface subscriptions and recurring payments. Get reminders before money leaves your account.",
  },
  {
    icon: BarChart3,
    title: "Spending analytics",
    description:
      "Break down by category, merchant, and time. See patterns at a glance with a refined, dark UI.",
  },
  {
    icon: Shield,
    title: "Secure by design",
    description:
      "Tokens in the device Keychain, HTTPS everywhere, and no bank passwords stored on our servers.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4 text-balance">
            Everything in one place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Powerful tools behind a polished interface — the same premium feel you expect from a top-tier finance app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-white/[0.08] rounded-2xl p-6 hover:border-[#3373fa]/35 transition-all duration-300 shadow-sm shadow-black/20"
            >
              <div className="w-12 h-12 bg-[#3373fa]/12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#3373fa]/18 transition-colors">
                <feature.icon className="w-6 h-6 text-[#7a9eff]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
