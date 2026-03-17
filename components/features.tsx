import { Wallet, PieChart, Bell, Lock, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "AI-powered budgeting that learns your spending habits and helps you save more automatically.",
  },
  {
    icon: PieChart,
    title: "Investment Tracking",
    description: "Monitor all your investments in one place with real-time updates and performance insights.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about unusual spending, bill reminders, and opportunities to save.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Your data is protected with 256-bit encryption and multi-factor authentication.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your finances anywhere with our beautifully designed mobile app.",
  },
  {
    icon: TrendingUp,
    title: "Growth Insights",
    description: "Personalized recommendations to help grow your wealth faster.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything you need to manage your money
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Powerful features designed to help you take control of your finances 
            and build lasting wealth.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
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
