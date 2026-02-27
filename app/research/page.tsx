"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function ResearchPage() {
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
            <span className="text-foreground">Research</span>
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
            Strategic Intelligence
          </p>
          <h1 className="text-5xl leading-tight tracking-tight mb-4">Research</h1>
          <p className="text-lg text-muted-foreground">
            Competitive analysis, audience insights, and market trends.
          </p>
        </div>

        <div className="card p-12 text-center">
          <p className="text-muted-foreground">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
