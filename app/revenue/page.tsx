"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function RevenuePage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:opacity-80 transition flex items-center gap-2">
              <div className="w-5 h-5 rounded border border-accent bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-light text-xs">H</span>
              </div>
              <span className="font-medium">Hause</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Revenue</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-card rounded-lg transition"
            aria-label="Toggle theme"
          >
            <Sun className="w-4 h-4 hidden dark:block" />
            <Moon className="w-4 h-4 dark:hidden" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">
            Revenue Strategies
          </p>
          <h1 className="text-5xl leading-tight tracking-tight mb-4">Revenue</h1>
          <p className="text-lg text-muted-foreground">
            Monetization models, pricing strategies, and revenue projections.
          </p>
        </div>

        {/* Document Links */}
        <div className="space-y-4">
          <Link href="/revenue/publication-monetization">
            <div className="group card p-8 cursor-pointer">
              <h2 className="text-2xl mb-3 group-hover:text-accent transition">
                Publication Monetization Strategy
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Three-layer monetization model for hause.vercel.app: Free editorial content, newsletter subscribers with affiliates, and paid membership tier. Comprehensive timeline, revenue projections, and risk mitigation.
              </p>
              <p className="text-muted-foreground text-xs">
                Last updated: 2026-02-27 · 5,800 words · Draft
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
