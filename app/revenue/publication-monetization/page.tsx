"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function PublicationMonetizationPage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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
            <Link href="/revenue" className="text-muted-foreground hover:text-foreground transition">
              Revenue
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Publication</span>
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
        {/* Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">
            Revenue Strategy
          </p>
          <h1 className="text-5xl font-light mb-4">Publication Monetization</h1>
          <p className="text-muted-foreground flex gap-3 text-sm">
            <span>Q1-Q2 2026</span>
            <span>·</span>
            <span>Version 1.0</span>
            <span>·</span>
            <span className="text-accent">Draft</span>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Executive Summary */}
          <section>
            <h2 className="text-3xl font-light mb-6">Executive Summary</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>Hause Collective's publication (hause.vercel.app) will implement a three-layer monetization model to capture value from its audience of creative entrepreneurs.</p>
              <p><strong>Model:</strong> Free editorial → Newsletter with affiliates → Premium membership tier.</p>
              <p><strong>Projected revenue:</strong> $500–2,000/month by Q2 2026, scaling to $2,000–5,000/month by end of 2026.</p>
              <p><strong>Timeline:</strong> Feb–Mar 2026 (foundation), Apr–May 2026 (launch), Jun+ (scaling).</p>
            </div>
          </section>

          {/* Why Monetize */}
          <section>
            <h2 className="text-3xl font-light mb-6">Why Monetize</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>The publication currently generates zero revenue while consuming production effort. Monetization serves two goals:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Direct revenue:</strong> Passive income from subscribers and members.</li>
                <li><strong>Strategic leverage:</strong> Pair with YouTube sponsorships for 30–60% pricing premium.</li>
              </ul>
            </div>
          </section>

          {/* Three-Layer Model */}
          <section>
            <h2 className="text-3xl font-light mb-6">The Three-Layer Model</h2>

            {/* Layer 1 */}
            <div className="card-border p-8 mb-6 space-y-4">
              <h3 className="text-xl font-light">Layer 1: Free Editorial</h3>
              <div className="space-y-3 text-foreground leading-relaxed text-sm">
                <p><strong>Purpose:</strong> Audience building, SEO, brand positioning.</p>
                <p><strong>Revenue:</strong> $0 directly. Value is audience capture for layers 2 and 3.</p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="card-border p-8 mb-6 space-y-4">
              <h3 className="text-xl font-light">Layer 2: Newsletter + Affiliates</h3>
              <div className="space-y-3 text-foreground leading-relaxed text-sm">
                <p><strong>What:</strong> Weekly "AI Builder's Brief" with affiliate links embedded.</p>
                <p><strong>Revenue:</strong> 200–500 subscribers at 15–25% action rate = <span className="text-accent font-medium">$300–800/month</span>.</p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="card-border p-8 space-y-4">
              <h3 className="text-xl font-light">Layer 3: Membership Tier</h3>
              <div className="space-y-3 text-foreground leading-relaxed text-sm">
                <p><strong>What:</strong> Gated guides, templates, advanced tools.</p>
                <p><strong>Pricing:</strong> $9/month, $15/month, or $99/year.</p>
                <p><strong>Revenue:</strong> 50–100 members starting = <span className="text-accent font-medium">$600–1,200/month</span>. Scale to $2,400–4,500/month by end of 2026.</p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-3xl font-light mb-6">Implementation Timeline</h2>
            <div className="space-y-3">
              <div className="card-border p-6 border-l-2 border-l-accent">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Feb 2026 — Foundation</p>
                <p className="text-sm">Fix About page · Add email capture · Set up newsletter tool · Join affiliate programs</p>
              </div>
              <div className="card-border p-6 border-l-2 border-l-accent">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Mar 2026 — Newsletter Launch</p>
                <p className="text-sm">Launch weekly brief · 4 weeks no affiliates (build trust) · Goal: 200+ subscribers</p>
              </div>
              <div className="card-border p-6 border-l-2 border-l-accent">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">May 2026 — Membership Launch</p>
                <p className="text-sm">Launch membership tier · Promote to newsletter · Goal: 50+ paying members</p>
              </div>
            </div>
          </section>

          {/* Risks */}
          <section>
            <h2 className="text-3xl font-light mb-6">Risks & Mitigation</h2>
            <div className="space-y-3">
              <div className="card-border p-4">
                <p className="font-medium text-sm mb-1">Newsletter growth too slow</p>
                <p className="text-muted-foreground text-xs">Cross-promote in YouTube description and in-video mentions.</p>
              </div>
              <div className="card-border p-4">
                <p className="font-medium text-sm mb-1">Membership paywall hurts SEO</p>
                <p className="text-muted-foreground text-xs">Keep 80% free. Gate only premium guides and templates.</p>
              </div>
              <div className="card-border p-4">
                <p className="font-medium text-sm mb-1">Affiliate links erode trust</p>
                <p className="text-muted-foreground text-xs">Only recommend tools Hause uses. Disclose clearly.</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">
              Last updated: 2026-02-27 · Next review: After March 2026 launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
