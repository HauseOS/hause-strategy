"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="w-12 h-12 rounded-lg border border-border bg-card flex items-center justify-center">
                <span className="text-accent font-light text-xl">◐</span>
              </div>
            </div>
            <h1 className="text-4xl font-light tracking-tight mb-2">
              Hause Strategy
            </h1>
            <p className="text-muted-foreground text-sm">
              Internal Documentation Portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
            />
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-xs mt-6">
            © 2026 Hause Collective
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="w-6 h-6 rounded border border-accent bg-accent/10 flex items-center justify-center">
              <span className="text-accent font-light text-xs">H</span>
            </div>
            <span className="text-sm font-medium">Hause Strategy</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="w-4 h-4 hidden dark:block" />
            <Moon className="w-4 h-4 dark:hidden" />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-20">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">
            Strategy Documentation
          </p>
          <h1 className="text-6xl leading-tight tracking-tight mb-6">
            Strategic <br />
            Intelligence
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Central repository for Hause Collective's revenue strategy, execution roadmaps, and competitive research. Make informed decisions backed by data.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Revenue Section */}
          <Link href="/revenue">
            <div className="group rounded-lg border bg-card border-border transition-all hover:border-accent/30 p-8 cursor-pointer">
              <div className="mb-6 text-3xl">💰</div>
              <h2 className="text-2xl mb-3 group-hover:text-accent transition">
                Revenue
              </h2>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Monetization strategies, pricing models, and revenue projections for sustainable growth.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition">
                  <span className="text-accent">→</span> Publication Monetization
                </li>
              </ul>
            </div>
          </Link>

          {/* Roadmaps Section */}
          <Link href="/roadmaps">
            <div className="group rounded-lg border bg-card border-border transition-all hover:border-accent/30 p-8 cursor-pointer">
              <div className="mb-6 text-3xl">📅</div>
              <h2 className="text-2xl mb-3 group-hover:text-accent transition">
                Roadmaps
              </h2>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Quarterly execution timelines, milestones, and strategic planning documents.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-muted-foreground">→</span> Coming soon
                </li>
              </ul>
            </div>
          </Link>

          {/* Research Section */}
          <Link href="/research">
            <div className="group rounded-lg border bg-card border-border transition-all hover:border-accent/30 p-8 cursor-pointer">
              <div className="mb-6 text-3xl">🔍</div>
              <h2 className="text-2xl mb-3 group-hover:text-accent transition">
                Research
              </h2>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Competitive analysis, audience insights, and market trends for strategic advantage.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-muted-foreground">→</span> Coming soon
                </li>
              </ul>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border text-center text-xs text-muted-foreground">
          <p>© 2026 Hause Collective · Internal Strategy Portal</p>
        </div>
      </div>
    </div>
  );
}
