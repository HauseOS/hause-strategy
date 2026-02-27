"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function ResearchPage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
              <div className="w-5 h-5 rounded border border-accent bg-accent/10 flex items-center justify-center text-xs text-accent font-semibold">
                H
              </div>
              <span>Hause</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Research</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-card rounded-lg transition"
          >
            <Sun className="w-4 h-4 hidden dark:block text-accent" />
            <Moon className="w-4 h-4 dark:hidden" />
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">
            Strategic Intelligence
          </p>
          <h1 className="text-5xl font-light mb-6">Research</h1>
          <p className="text-lg text-muted-foreground">
            Competitive analysis, audience insights, and market trends.
          </p>
        </div>

        <div className="card-border p-12 text-center">
          <p className="text-muted-foreground">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
