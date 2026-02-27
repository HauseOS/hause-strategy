"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";
import { Sun, Moon } from "lucide-react";

export default function PublicationMonetizationPage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <div className="w-5 h-5 rounded border border-accent bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-light text-xs">H</span>
              </div>
              <span className="font-medium">Hause</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/revenue"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Revenue
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Publication Monetization</span>
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
        {/* Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">
            Revenue Strategy
          </p>
          <h1 className="text-5xl leading-tight tracking-tight mb-4">
            Publication Monetization Strategy
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Q1-Q2 2026</span>
            <span className="text-border">·</span>
            <span>Version 1.0</span>
            <span className="text-border">·</span>
            <span className="text-accent">Draft</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Executive Summary */}
          <section>
            <h2 className="text-3xl leading-tight mb-6">Executive Summary</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Hause Collective's publication (hause.vercel.app) will implement a three-layer monetization model designed to capture value from its growing audience of creative entrepreneurs and builders.
              </p>
              <p>
                <span className="font-medium">Model:</span> Free editorial content → Email newsletter with affiliate revenue → Premium membership tier.
              </p>
              <p>
                <span className="font-medium">Projected revenue:</span> $500–2,000/month by Q2 2026, scaling to $2,000–5,000/month by end of 2026.
              </p>
              <p>
                <span className="font-medium">Timeline:</span> Feb–Mar 2026 (foundation), Apr–May 2026 (launch), Jun+ (scaling and optimization).
              </p>
            </div>
          </section>

          {/* Why Monetize */}
          <section>
            <h2 className="text-3xl leading-tight mb-6">Why Monetize the Publication</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                The publication currently generates zero revenue while consuming production effort. It exists as a brand-building asset and audience extension for the YouTube channel.
              </p>
              <p>Monetization serves two goals:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <span className="font-medium">Direct revenue:</span> Passive income from newsletter subscribers and members.
                </li>
                <li>
                  <span className="font-medium">Strategic leverage:</span> Paired with YouTube sponsorships, increases deal value.
                </li>
              </ul>
            </div>
          </section>

          {/* Three-Layer Model */}
          <section>
            <h2 className="text-3xl leading-tight mb-6">The Three-Layer Model</h2>

            {/* Layer 1 */}
            <div className="card p-8 mb-6 space-y-4">
              <h3 className="text-2xl">Layer 1: Free Editorial (Already Live)</h3>
              <div className="space-y-3 text-foreground leading-relaxed">
                <p>
                  <span className="font-medium">What it is:</span> Editorial articles, news feed, guides, tools.
                </p>
                <p>
                  <span className="font-medium">Purpose:</span> Audience building, SEO, brand positioning.
                </p>
                <p>
                  <span className="font-medium">What happens:</span> Visitor reads article → sees newsletter signup prompt → converts to email subscriber.
                </p>
                <p>
                  <span className="font-medium">Revenue from this layer:</span> $0 directly. Value is in audience capture for layers 2 and 3.
                </p>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="card p-8 mb-6 space-y-4">
              <h3 className="text-2xl">Layer 2: Newsletter + Affiliates (Launch Mar 2026)</h3>
              <div className="space-y-3 text-foreground leading-relaxed">
                <p>
                  <span className="font-medium">What it is:</span> Weekly "AI Builder's Brief" — curated developments, tools, thinking.
                </p>
                <p>
                  <span className="font-medium">How it makes money:</span> Affiliate links embedded in tool recommendations.
                </p>
                <p>
                  <span className="font-medium">Tools to recommend:</span> AI tools in the Hause ecosystem.
                </p>
                <p>
                  <span className="font-medium">Projected revenue:</span> 200–500 newsletter subscribers at 15–25% taking an action per month = <span className="text-accent font-medium">$300–800/month</span>.
                </p>
                <p>
                  <span className="font-medium">Key metric:</span> Newsletter signup rate and subscriber engagement.
                </p>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="card p-8 space-y-4">
              <h3 className="text-2xl">Layer 3: Membership Tier (Launch May 2026)</h3>
              <div className="space-y-3 text-foreground leading-relaxed">
                <p>
                  <span className="font-medium">What it is:</span> Gated premium content available to paid members.
                </p>
                <p className="font-medium">What members get:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Guides library (curated prompts, workflows, frameworks)</li>
                  <li>Downloadable templates</li>
                  <li>Advanced AI Model Matrix (updated weekly)</li>
                  <li>Early access to new tools & research</li>
                </ul>

                <p className="pt-2 font-medium">Pricing options:</p>
                <ul className="space-y-2 pl-2">
                  <li>• <span className="font-medium">$9/month</span> (basic access)</li>
                  <li>• <span className="font-medium">$15/month</span> (premium access)</li>
                  <li>• <span className="font-medium">$99/year</span> (best value, 25% savings)</li>
                </ul>

                <p className="pt-2">
                  <span className="font-medium">Projected revenue:</span> Starting with 50–100 paying members at $12 average = <span className="text-accent font-medium">$600–1,200/month</span>. Scale to 200–300 members by end of 2026 = <span className="text-accent font-medium">$2,400–4,500/month</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-3xl leading-tight mb-6">Implementation Timeline</h2>

            <div className="space-y-4">
              {/* February */}
              <div className="card p-6 border-l-2 border-l-accent">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  February 2026 (Foundation)
                </p>
                <ul className="space-y-2 text-foreground text-sm leading-relaxed">
                  <li>• Fix About page (credibility signal)</li>
                  <li>• Add email capture form above fold</li>
                  <li>• Set up newsletter tool</li>
                  <li>• Identify 10–15 affiliate programs</li>
                </ul>
              </div>

              {/* March */}
              <div className="card p-6 border-l-2 border-l-accent">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  March 2026 (Newsletter Launch)
                </p>
                <ul className="space-y-2 text-foreground text-sm leading-relaxed">
                  <li>• Launch weekly newsletter</li>
                  <li>• First 4 weeks: no affiliate links (build trust)</li>
                  <li>• Week 5+: introduce affiliate links</li>
                  <li>• Goal: 200+ subscribers by end of March</li>
                </ul>
              </div>

              {/* May */}
              <div className="card p-6 border-l-2 border-l-accent">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  May 2026 (Membership Launch)
                </p>
                <ul className="space-y-2 text-foreground text-sm leading-relaxed">
                  <li>• Launch membership: $9/15/99 pricing</li>
                  <li>• Promote to existing newsletter</li>
                  <li>• Goal: 50+ paying members by end of May</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Risk Mitigation */}
          <section>
            <h2 className="text-3xl leading-tight mb-6">Risks & Mitigation</h2>

            <div className="space-y-4">
              <div className="card p-6">
                <p className="font-medium mb-2">Newsletter doesn't grow fast enough</p>
                <p className="text-muted-foreground text-sm">
                  Cross-promote in YouTube description, end-screen cards, and in-video mentions.
                </p>
              </div>

              <div className="card p-6">
                <p className="font-medium mb-2">Membership paywall hurts SEO</p>
                <p className="text-muted-foreground text-sm">
                  Keep 80% of content free. Gate only premium guides and templates.
                </p>
              </div>

              <div className="card p-6">
                <p className="font-medium mb-2">Affiliate links erode reader trust</p>
                <p className="text-muted-foreground text-sm">
                  Only recommend tools Hause actually uses. Disclose affiliate relationships clearly.
                </p>
              </div>
            </div>
          </section>

          {/* Decisions Made */}
          <section>
            <h2 className="text-3xl leading-tight mb-6">Decisions Made</h2>

            <ul className="space-y-3 text-foreground text-sm">
              <li className="flex gap-3">
                <span className="text-accent">✅</span>
                <span>
                  <span className="font-medium">Three-layer model:</span> Free → newsletter → membership
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✅</span>
                <span>
                  <span className="font-medium">Keep separate:</span> Publication for audience, YouTube for revenue
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✅</span>
                <span>
                  <span className="font-medium">Bundle later:</span> YouTube + publication sponsorship = 30–60% premium
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✅</span>
                <span>
                  <span className="font-medium">Membership pricing:</span> $9/$15 monthly + $99 annual
                </span>
              </li>
            </ul>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Last updated: 2026-02-27 · Status: Draft · Next review: After March 2026 launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
