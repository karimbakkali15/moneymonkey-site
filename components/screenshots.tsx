"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const screens = [
  { id: "home", label: "Home" },
  { id: "ai", label: "AI Chat" },
  { id: "budgets", label: "Budgets" },
  { id: "savings", label: "Savings" },
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 580 }}>
      <div className="absolute inset-0 rounded-[40px] border-[3px] border-white/10 bg-black shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />
        {/* Screen content */}
        <div className="w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "linear-gradient(to bottom, #083622, #1A5C3D)" }}>
      {/* Header */}
      <div className="px-5 pt-10 pb-4">
        <p className="text-white text-[22px] font-bold">Good Morning</p>
        <p className="text-white/70 text-[11px]">Here&apos;s your financial overview</p>
      </div>

      {/* Net Worth */}
      <div className="text-center pb-6">
        <p className="text-white/80 text-[11px] font-medium">Net Worth</p>
        <p className="text-white text-[36px] font-bold tracking-tight">£12,847</p>
        <div className="inline-flex items-center gap-1 text-[#5CF280] text-[11px] font-medium">
          <span>↑</span>
          <span>+£842 this month</span>
        </div>
      </div>

      {/* Content area with rounded top */}
      <div className="flex-1 bg-[#141416] rounded-t-[20px] px-4 pt-5 space-y-3 overflow-hidden">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: "🏦", label: "Accounts" },
            { icon: "💰", label: "Budget" },
            { icon: "🐵", label: "Ask AI" },
            { icon: "➕", label: "Add" },
          ].map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[16px]">{a.icon}</div>
              <span className="text-[9px] text-white/50">{a.label}</span>
            </div>
          ))}
        </div>

        {/* Financial Score */}
        <div className="bg-white/5 rounded-2xl p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-[13px] font-semibold">Financial Score</p>
              <p className="text-[#29A06E] text-[11px] font-medium">Great</p>
            </div>
            <div className="relative w-[44px] h-[44px]">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(41,160,110,0.2)" strokeWidth="3" />
                <circle cx="18" cy="18" r="15" fill="none" stroke="#29A06E" strokeWidth="3" strokeDasharray="76 100" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-[13px] font-bold">76</span>
            </div>
          </div>
        </div>

        {/* Insight card */}
        <div className="bg-white/5 rounded-2xl p-3 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#29A06E]/10 flex items-center justify-center text-[14px] shrink-0">🐵</div>
          <div>
            <p className="text-white text-[11px] font-semibold">Money Monkey Insight</p>
            <p className="text-white/50 text-[10px] leading-relaxed">You spent 18% less on dining this week. Keep it up!</p>
          </div>
        </div>

        {/* Budget mini */}
        <div className="bg-white/5 rounded-2xl p-3">
          <p className="text-white text-[11px] font-semibold mb-2">Budget Status</p>
          {[
            { cat: "🛒 Groceries", pct: 65, color: "#29A06E", spent: "£260", total: "£400" },
            { cat: "🍽 Dining", pct: 42, color: "#29A06E", spent: "£84", total: "£200" },
            { cat: "🚗 Transport", pct: 88, color: "#F5A623", spent: "£132", total: "£150" },
          ].map((b) => (
            <div key={b.cat} className="mb-2 last:mb-0">
              <div className="flex justify-between text-[9px] mb-1">
                <span className="text-white/70">{b.cat}</span>
                <span className="text-white/50">{b.spent}/{b.total}</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${b.pct}%`, background: b.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-[#141416] border-t border-white/5 px-4 py-2 flex justify-around">
        {["🏠", "💰", "🐵", "📊"].map((icon, i) => (
          <div key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-[14px]", i === 0 && "bg-[#29A06E]/15")}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function AIChatScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "linear-gradient(to bottom, #0D1710, #0F1E14)" }}>
      {/* Header */}
      <div className="px-4 pt-10 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#29A06E]/20 flex items-center justify-center text-[14px]">🐵</div>
          <div>
            <p className="text-white text-[13px] font-semibold">Money Monkey</p>
            <p className="text-[#29A06E] text-[9px]">Online</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-white/50">📋</div>
          <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-white/50">⚙️</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-3 space-y-3 overflow-hidden">
        {/* AI welcome */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-[#29A06E]/20 flex items-center justify-center text-[10px] shrink-0 mt-1">🐵</div>
          <div className="bg-white/5 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
            <p className="text-white text-[11px] leading-relaxed">Hey! I&apos;ve been looking at your spending this week. You&apos;re doing great — 18% less on dining out compared to last month! 🎉</p>
          </div>
        </div>

        {/* User */}
        <div className="flex justify-end">
          <div className="bg-[#29A06E]/20 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-white text-[11px]">How are my budgets looking?</p>
          </div>
        </div>

        {/* AI response with budget card */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-[#29A06E]/20 flex items-center justify-center text-[10px] shrink-0 mt-1">🐵</div>
          <div className="max-w-[85%] space-y-2">
            <div className="bg-white/5 rounded-2xl rounded-tl-sm px-3 py-2">
              <p className="text-white text-[11px] leading-relaxed">Here&apos;s a quick summary of your budgets:</p>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/70">🛒 Groceries</span>
                <span className="text-[10px] text-[#29A06E]">£260/£400</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#29A06E]" style={{ width: "65%" }} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/70">🚗 Transport</span>
                <span className="text-[10px] text-[#F5A623]">£132/£150</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#F5A623]" style={{ width: "88%" }} />
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl px-3 py-2">
              <p className="text-white text-[11px] leading-relaxed">Transport is at 88% — watch out for that one! Want me to suggest ways to cut back? 💡</p>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex gap-2 flex-wrap">
          {["Analyse spending", "Budget tips", "Savings plan"].map((s) => (
            <div key={s} className="bg-[#29A06E]/10 border border-[#29A06E]/20 rounded-full px-3 py-1.5">
              <span className="text-[9px] text-[#29A06E] font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-white/5">
        <div className="flex items-center gap-2 bg-white/5 rounded-2xl px-3 py-2">
          <span className="text-white/30 text-[11px] flex-1">Ask Money Monkey...</span>
          <div className="w-7 h-7 rounded-full bg-[#29A06E] flex items-center justify-center">
            <span className="text-white text-[10px]">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetsScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#141416]">
      {/* Header */}
      <div className="px-5 pt-10 pb-4">
        <p className="text-white text-[22px] font-bold">Budgets</p>
        <p className="text-white/50 text-[11px]">March 2026</p>
      </div>

      {/* Summary bar */}
      <div className="mx-4 mb-3 bg-white/5 rounded-2xl p-3 flex items-center justify-between">
        <div>
          <p className="text-white/50 text-[9px]">Total Spent</p>
          <p className="text-white text-[18px] font-bold">£1,847</p>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-[9px]">Total Budget</p>
          <p className="text-white text-[18px] font-bold">£2,500</p>
        </div>
        <div className="relative w-[44px] h-[44px]">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(41,160,110,0.15)" strokeWidth="3.5" />
            <circle cx="18" cy="18" r="15" fill="none" stroke="#29A06E" strokeWidth="3.5" strokeDasharray="70 100" strokeLinecap="round" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-bold">74%</span>
        </div>
      </div>

      {/* Budget cards */}
      <div className="flex-1 px-4 space-y-2.5 overflow-hidden">
        {[
          { icon: "🛒", cat: "Groceries", spent: 260, total: 400, color: "#29A06E" },
          { icon: "🍽", cat: "Dining Out", spent: 84, total: 200, color: "#29A06E" },
          { icon: "🚗", cat: "Transport", spent: 132, total: 150, color: "#F5A623" },
          { icon: "🎬", cat: "Entertainment", spent: 45, total: 100, color: "#29A06E" },
          { icon: "🛍", cat: "Shopping", spent: 310, total: 300, color: "#E54D4D" },
          { icon: "💊", cat: "Health", spent: 28, total: 80, color: "#29A06E" },
          { icon: "📱", cat: "Subscriptions", spent: 42, total: 60, color: "#29A06E" },
        ].map((b) => {
          const pct = Math.min((b.spent / b.total) * 100, 100);
          return (
            <div key={b.cat} className="relative bg-white/[0.03] rounded-2xl overflow-hidden">
              {/* Progress fill */}
              <div className="absolute inset-y-0 left-0 opacity-10 rounded-2xl" style={{ width: `${pct}%`, background: b.color }} />
              <div className="relative flex items-center justify-between p-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-[16px]">{b.icon}</span>
                  <div>
                    <p className="text-white text-[12px] font-semibold">{b.cat}</p>
                    <p className="text-white/40 text-[10px]">£{b.spent} of £{b.total}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-bold" style={{ color: b.color }}>
                    {pct >= 100 ? "Over" : `£${b.total - b.spent} left`}
                  </p>
                  <p className="text-white/30 text-[9px]">{Math.round(pct)}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tab bar */}
      <div className="bg-[#141416] border-t border-white/5 px-4 py-2 flex justify-around">
        {["🏠", "💰", "🐵", "📊"].map((icon, i) => (
          <div key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-[14px]", i === 1 && "bg-[#29A06E]/15")}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function SavingsScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: "linear-gradient(to bottom, #083622, #1A5C3D)" }}>
      {/* Header */}
      <div className="px-5 pt-10 pb-4">
        <p className="text-white text-[22px] font-bold">Savings Goals</p>
        <p className="text-white/70 text-[11px]">You&apos;re saving £420/month</p>
      </div>

      {/* Total savings */}
      <div className="text-center pb-5">
        <p className="text-white/70 text-[11px]">Total Saved</p>
        <p className="text-white text-[32px] font-bold">£4,200</p>
      </div>

      {/* Content area */}
      <div className="flex-1 bg-[#141416] rounded-t-[20px] px-4 pt-5 overflow-hidden">
        {/* Savings buckets */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { name: "Holiday Fund", current: 1200, goal: 3000, emoji: "✈️", color: "#3B82F6" },
            { name: "Emergency", current: 2100, goal: 3000, emoji: "🛡", color: "#29A06E" },
            { name: "New Laptop", current: 650, goal: 1500, emoji: "💻", color: "#F5A623" },
            { name: "Car Fund", current: 250, goal: 5000, emoji: "🚗", color: "#E54D4D" },
          ].map((b) => {
            const pct = (b.current / b.goal) * 100;
            return (
              <div key={b.name} className="bg-white/[0.03] rounded-2xl p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[16px]">{b.emoji}</span>
                  <span className="text-white text-[11px] font-semibold truncate">{b.name}</span>
                </div>
                <p className="text-white text-[18px] font-bold mb-0.5">£{b.current.toLocaleString()}</p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-1">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: b.color }} />
                </div>
                <p className="text-white/40 text-[9px]">of £{b.goal.toLocaleString()} · {Math.round(pct)}%</p>
              </div>
            );
          })}
        </div>

        {/* Recurring bills preview */}
        <div className="mt-4">
          <p className="text-white text-[13px] font-semibold mb-2">Upcoming Bills</p>
          {[
            { name: "Netflix", amount: "£10.99", date: "Mar 22", icon: "🎬" },
            { name: "Spotify", amount: "£9.99", date: "Mar 25", icon: "🎵" },
            { name: "Gym", amount: "£29.99", date: "Mar 28", icon: "💪" },
          ].map((bill) => (
            <div key={bill.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-[14px]">{bill.icon}</span>
                <div>
                  <p className="text-white text-[11px] font-medium">{bill.name}</p>
                  <p className="text-white/40 text-[9px]">{bill.date}</p>
                </div>
              </div>
              <p className="text-white text-[11px] font-semibold">{bill.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-[#141416] border-t border-white/5 px-4 py-2 flex justify-around">
        {["🏠", "💰", "🐵", "📊"].map((icon, i) => (
          <div key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-[14px]", i === 1 && "bg-[#29A06E]/15")}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

const screenComponents: Record<string, React.FC> = {
  home: HomeScreen,
  ai: AIChatScreen,
  budgets: BudgetsScreen,
  savings: SavingsScreen,
};

export function Screenshots() {
  const [active, setActive] = useState("home");
  const ActiveScreen = screenComponents[active];

  return (
    <section id="screenshots" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A beautiful, intuitive interface that makes managing your money feel effortless.
          </p>
        </div>

        {/* Screen selector tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                active === s.id
                  ? "bg-[#29A06E] text-white shadow-lg shadow-[#29A06E]/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center">
          <PhoneFrame>
            <ActiveScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
