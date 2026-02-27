"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function RevenuePage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
              <div className="w-5 h-5 rounded border border-accent bg-accent/10 flex items-center justify-center text-xs text-accent font-semibold">
                H
              </div>
              <span>Hause</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>Revenue</span>
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">
            Revenue Strategy
          </p>
          <h1 className="text-5xl font-light mb-6">Revenue</h1>
          <p className="text-lg text-muted-foreground">
            Monetization models, pricing strategies, and revenue projections.
          </p>
        </div>

        {/* Document */}
        <Link href="/revenue/publication-monetization">
          <div className="group card-border p-8 hover:bg-card/80 transition cursor-pointer">
            <h2 className="text-2xl font-light mb-3 group-hover:text-accent transition">
              Publication Monetization Strategy
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Three-layer monetization model for hause.vercel.app: Free editorial, newsletter with affiliates, and premium membership. Complete timeline, revenue projections, and risk mitigation.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">5,800 words · Draft</p>
              <p className="text-xs text-accent">→</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
