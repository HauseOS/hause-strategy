"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const auth = localStorage.getItem("hause-strategy-auth");
    if (auth === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "0000") {
      localStorage.setItem("hause-strategy-auth", "true");
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  if (!mounted) {
    return null;
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-16">
            <div className="mb-10 flex justify-center">
              <div className="w-14 h-14 rounded-lg border border-border bg-card/50 flex items-center justify-center">
                <span className="text-accent text-2xl">◐</span>
              </div>
            </div>
            <h1 className="text-4xl font-light mb-2">Hause Strategy</h1>
            <p className="text-muted-foreground text-sm">Internal Documentation</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition"
              autoFocus
            />
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Continue
            </button>
          </form>

          <p className="text-center text-muted-foreground text-xs mt-8">
            © 2026 Hause Collective
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-6 h-6 rounded border border-accent bg-accent/10 flex items-center justify-center text-xs text-accent font-semibold">
              H
            </div>
            <span className="text-sm font-medium">Hause</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-card rounded-lg transition"
          >
            <Sun className="w-4 h-4 hidden dark:block text-accent" />
            <Moon className="w-4 h-4 dark:hidden" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-20">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">
            Strategic Intelligence
          </p>
          <h1 className="text-6xl font-light mb-8 tracking-tight">
            Strategy & Operations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Central repository for revenue strategy, execution roadmaps, and business intelligence. All critical decisions backed by data and documented for clarity.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Revenue */}
          <Link href="/revenue">
            <div className="group card-border p-8 hover:bg-card/80 transition cursor-pointer h-full">
              <div className="mb-6 text-3xl opacity-70 group-hover:opacity-100 transition">
                💰
              </div>
              <h2 className="text-2xl font-light mb-3 group-hover:text-accent transition">
                Revenue
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Monetization models, pricing strategies, and revenue projections.
              </p>
              <p className="text-xs text-muted-foreground">
                ↦ Publication Monetization
              </p>
            </div>
          </Link>

          {/* Roadmaps */}
          <Link href="/roadmaps">
            <div className="group card-border p-8 hover:bg-card/80 transition cursor-pointer h-full">
              <div className="mb-6 text-3xl opacity-70 group-hover:opacity-100 transition">
                📅
              </div>
              <h2 className="text-2xl font-light mb-3 group-hover:text-accent transition">
                Roadmaps
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Quarterly execution timelines and strategic milestones.
              </p>
              <p className="text-xs text-muted-foreground">
                ↦ Coming soon
              </p>
            </div>
          </Link>

          {/* Research */}
          <Link href="/research">
            <div className="group card-border p-8 hover:bg-card/80 transition cursor-pointer h-full">
              <div className="mb-6 text-3xl opacity-70 group-hover:opacity-100 transition">
                🔍
              </div>
              <h2 className="text-2xl font-light mb-3 group-hover:text-accent transition">
                Research
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Competitive analysis, audience insights, and market trends.
              </p>
              <p className="text-xs text-muted-foreground">
                ↦ Coming soon
              </p>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© 2026 Hause Collective · Internal Strategy Portal</p>
        </div>
      </div>
    </div>
  );
}
