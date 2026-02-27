"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";

export default function PublicationMonetizationPage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-900 sticky top-0 bg-zinc-950/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-zinc-400 hover:text-zinc-50 transition">
              Home
            </Link>
            <span className="text-zinc-700">/</span>
            <Link href="/revenue" className="text-zinc-400 hover:text-zinc-50 transition">
              Revenue
            </Link>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-400">Publication Monetization</span>
          </div>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 text-sm text-zinc-400 hover:text-zinc-50 transition"
          >
            ◐
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-zinc-400 text-sm mb-2">Revenue Strategy</p>
          <h1 className="text-5xl font-light tracking-tight mb-4">
            Publication Monetization Strategy
          </h1>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <span>Q1-Q2 2026</span>
            <span className="text-zinc-700">·</span>
            <span>Version 1.0</span>
            <span className="text-zinc-700">·</span>
            <span className="text-red-600">Draft</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Executive Summary */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Executive Summary</h2>
            <p className="text-zinc-300 leading-relaxed">
              Hause Collective's publication (hause.vercel.app) will implement a three-layer monetization model designed to capture value from its growing audience of creative entrepreneurs and builders.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              <strong>Model:</strong> Free editorial content → Email newsletter with affiliate revenue → Premium membership tier.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              <strong>Projected revenue:</strong> $500–2,000/month by Q2 2026, scaling to $2,000–5,000/month by end of 2026.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              <strong>Timeline:</strong> Feb–Mar 2026 (foundation), Apr–May 2026 (launch), Jun+ (scaling and optimization).
            </p>
          </section>

          {/* Why Monetize the Publication */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Why Monetize the Publication</h2>
            <p className="text-zinc-300 leading-relaxed">
              The publication currently generates zero revenue while consuming production effort. It exists as a brand-building asset and audience extension for the YouTube channel.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              Monetization serves two goals:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 mt-4">
              <li><strong>Direct revenue:</strong> Passive income from newsletter subscribers and members.</li>
              <li><strong>Strategic leverage:</strong> Paired with YouTube sponsorships, increases deal value (sponsors reach audience across two surfaces).</li>
            </ul>
          </section>

          {/* The Three-Layer Model */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">The Three-Layer Model</h2>

            {/* Layer 1 */}
            <div className="p-6 border border-zinc-900 rounded-lg bg-zinc-900/20 mt-6 mb-6">
              <h3 className="text-xl font-light mb-4">Layer 1: Free Editorial (Already Live)</h3>
              <p className="text-zinc-300 mb-4">
                <strong>What it is:</strong> Editorial articles, news feed, guides, tools (AI Model Matrix, Color Studio).
              </p>
              <p className="text-zinc-300 mb-4">
                <strong>Purpose:</strong> Audience building, SEO, brand positioning, proof of capability.
              </p>
              <p className="text-zinc-300 mb-4">
                <strong>What happens:</strong> Visitor reads article → sees newsletter signup prompt → converts to email subscriber.
              </p>
              <p className="text-zinc-300">
                <strong>Revenue from this layer:</strong> $0 directly. Value is in audience capture for layers 2 and 3.
              </p>
            </div>

            {/* Layer 2 */}
            <div className="p-6 border border-zinc-900 rounded-lg bg-zinc-900/20 mt-6 mb-6">
              <h3 className="text-xl font-light mb-4">Layer 2: Newsletter + Affiliates (Launch Mar 2026)</h3>
              <p className="text-zinc-300 mb-4">
                <strong>What it is:</strong> Weekly "AI Builder's Brief" — curated developments, tools, thinking.
              </p>
              <p className="text-zinc-300 mb-4">
                <strong>How it makes money:</strong> Affiliate links embedded in tool recommendations. When subscribers click and buy, Hause gets commission (typically 20–30% of first month subscription, or 5–10% of one-time purchases).
              </p>
              <p className="text-zinc-300 mb-4">
                <strong>Tools to recommend:</strong> AI tools in the Hause ecosystem (Claude, Vercel, Supabase, Midjourney, etc.) + tools Hause uses and genuinely recommends.
              </p>
              <p className="text-zinc-300 mb-4">
                <strong>Projected revenue:</strong> 200–500 newsletter subscribers at 15–25% taking an action per month = 30–125 conversions/month at $5–20 commission average = <strong>$150–2,500/month</strong> (conservative estimate: $300–800/month).
              </p>
              <p className="text-zinc-300">
                <strong>Key metric:</strong> Newsletter signup rate and subscriber engagement (open rate, click-through rate).
              </p>
            </div>

            {/* Layer 3 */}
            <div className="p-6 border border-zinc-900 rounded-lg bg-zinc-900/20 mt-6 mb-6">
              <h3 className="text-xl font-light mb-4">Layer 3: Membership Tier (Launch May 2026)</h3>
              <p className="text-zinc-300 mb-4">
                <strong>What it is:</strong> Gated premium content available to paid members.
              </p>
              <p className="text-zinc-300 mb-4">
                <strong>What members get:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
                <li>Guides library (curated prompts, workflows, frameworks)</li>
                <li>Downloadable templates (for designers, founders, makers)</li>
                <li>Advanced AI Model Matrix (comparison tools, updated weekly)</li>
                <li>Early access to new tools & research</li>
                <li>Monthly live Q&A or office hours (optional, if bandwidth allows)</li>
              </ul>

              <p className="text-zinc-300 mb-4">
                <strong>Pricing options:</strong>
              </p>
              <ul className="space-y-2 text-zinc-300 mb-4">
                <li>• <strong>$9/month</strong> (basic access to guides + Model Matrix)</li>
                <li>• <strong>$15/month</strong> (everything + templates + early access)</li>
                <li>• <strong>$99/year</strong> (save 25%, billed annually, highest conversion rate)</li>
              </ul>

              <p className="text-zinc-300 mb-4">
                <strong>Projected revenue:</strong> Starting with 50–100 paying members at $12 average monthly = $600–1,200/month. Scale to 200–300 members by end of 2026 = $2,400–4,500/month.
              </p>

              <p className="text-zinc-300">
                <strong>Key insight:</strong> Membership revenue is more stable than affiliate revenue. Even low conversion rates (2–5% of newsletter subscribers) generate meaningful recurring revenue.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Implementation Timeline</h2>

            <div className="space-y-6 mt-6">
              {/* February */}
              <div className="border-l-2 border-red-600 pl-6">
                <p className="text-sm text-zinc-400 mb-1">February 2026 (Foundation)</p>
                <p className="text-zinc-300 font-light">
                  • Fix About page (credibility signal)<br />
                  • Add email capture form above fold<br />
                  • Set up newsletter tool (Substack, Beehiiv, or custom)<br />
                  • Identify 10–15 affiliate programs to join (API tools, SaaS)<br />
                  • Design affiliate link strategy (non-disruptive, valuable)
                </p>
              </div>

              {/* March */}
              <div className="border-l-2 border-red-600 pl-6">
                <p className="text-sm text-zinc-400 mb-1">March 2026 (Newsletter Launch)</p>
                <p className="text-zinc-300 font-light">
                  • Launch weekly newsletter: "AI Builder's Brief"<br />
                  • First 4 weeks: no affiliate links (build trust)<br />
                  • Week 5+: introduce affiliate links naturally in tool recommendations<br />
                  • Track: newsletter growth, open rates, click-through rates<br />
                  • Goal: 200+ subscribers by end of March
                </p>
              </div>

              {/* April */}
              <div className="border-l-2 border-red-600 pl-6">
                <p className="text-sm text-zinc-400 mb-1">April 2026 (Build Membership)</p>
                <p className="text-zinc-300 font-light">
                  • Design & develop membership paywall (Stripe + custom)<br />
                  • Curate 10–15 guides for gated library<br />
                  • Create 3–5 downloadable templates<br />
                  • Set up member-only Model Matrix features<br />
                  • Test membership flow with early access group
                </p>
              </div>

              {/* May */}
              <div className="border-l-2 border-red-600 pl-6">
                <p className="text-sm text-zinc-400 mb-1">May 2026 (Membership Launch)</p>
                <p className="text-zinc-300 font-light">
                  • Launch membership: $9/15/99 pricing<br />
                  • Promote to existing newsletter (conversion segment)<br />
                  • Onboard first members, gather feedback<br />
                  • Goal: 50+ paying members by end of May<br />
                  • Newsletter revenue (affiliates): $300–800/month running rate
                </p>
              </div>

              {/* June+ */}
              <div className="border-l-2 border-red-600 pl-6">
                <p className="text-sm text-zinc-400 mb-1">June+ 2026 (Scale & Optimize)</p>
                <p className="text-zinc-300 font-light">
                  • Monthly membership updates (new guides, templates)<br />
                  • Expand affiliate programs (add more tools)<br />
                  • Test membership tiers (annual discount, premium tier)<br />
                  • Pair publication + YouTube sponsorships (bundle deals)<br />
                  • Analyze churn, upgrade rates, content engagement
                </p>
              </div>
            </div>
          </section>

          {/* Revenue Projections */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Revenue Projections</h2>

            <p className="text-zinc-300 mb-6">
              Based on conservative assumptions about subscriber growth and engagement:
            </p>

            <table className="w-full text-sm text-zinc-300 border-collapse mb-6">
              <thead>
                <tr className="border-b border-zinc-900">
                  <th className="text-left py-3 px-4 font-light">Period</th>
                  <th className="text-left py-3 px-4 font-light">Newsletter Subscribers</th>
                  <th className="text-left py-3 px-4 font-light">Affiliate Revenue</th>
                  <th className="text-left py-3 px-4 font-light">Paying Members</th>
                  <th className="text-left py-3 px-4 font-light">Membership Revenue</th>
                  <th className="text-left py-3 px-4 font-light">Total/Month</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-900/50">
                  <td className="py-3 px-4">Mar 2026</td>
                  <td className="py-3 px-4">200</td>
                  <td className="py-3 px-4">$200</td>
                  <td className="py-3 px-4">—</td>
                  <td className="py-3 px-4">—</td>
                  <td className="py-3 px-4 text-red-500">$200</td>
                </tr>
                <tr className="border-b border-zinc-900/50">
                  <td className="py-3 px-4">Apr 2026</td>
                  <td className="py-3 px-4">350</td>
                  <td className="py-3 px-4">$350</td>
                  <td className="py-3 px-4">—</td>
                  <td className="py-3 px-4">—</td>
                  <td className="py-3 px-4 text-red-500">$350</td>
                </tr>
                <tr className="border-b border-zinc-900/50">
                  <td className="py-3 px-4">May 2026</td>
                  <td className="py-3 px-4">500</td>
                  <td className="py-3 px-4">$500</td>
                  <td className="py-3 px-4">50</td>
                  <td className="py-3 px-4">$600</td>
                  <td className="py-3 px-4 text-red-500">$1,100</td>
                </tr>
                <tr className="border-b border-zinc-900/50">
                  <td className="py-3 px-4">Jun 2026</td>
                  <td className="py-3 px-4">700</td>
                  <td className="py-3 px-4">$700</td>
                  <td className="py-3 px-4">80</td>
                  <td className="py-3 px-4">$960</td>
                  <td className="py-3 px-4 text-red-500">$1,660</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Dec 2026</td>
                  <td className="py-3 px-4">1,500</td>
                  <td className="py-3 px-4">$1,500</td>
                  <td className="py-3 px-4">250</td>
                  <td className="py-3 px-4">$3,000</td>
                  <td className="py-3 px-4 text-red-500">$4,500</td>
                </tr>
              </tbody>
            </table>

            <p className="text-zinc-300">
              <strong>Key assumptions:</strong> 30% month-over-month growth in newsletter subscribers (slowing over time), 20% of newsletter subscribers convert to paid members, $12 average member LTV (mix of monthly and annual).
            </p>
          </section>

          {/* Strategic Pairing */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Strategic Pairing: YouTube + Publication</h2>

            <p className="text-zinc-300 mb-4">
              The publication monetization unlocks an additional sponsorship opportunity: <strong>bundled YouTube + publication deals.</strong>
            </p>

            <p className="text-zinc-300 mb-4">
              <strong>How it works:</strong> A sponsor can now reach the Hause audience across two surfaces:
            </p>

            <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-6">
              <li>YouTube video (25K+ average views, high engagement)</li>
              <li>Publication mention (newsletter + website, 500–1,500 subscribers)</li>
            </ul>

            <p className="text-zinc-300 mb-4">
              <strong>Pricing impact:</strong> YouTube-only sponsorship: $2,800 (dedicated video). YouTube + publication bundle: $4,200–4,500 (30–60% premium).
            </p>

            <p className="text-zinc-300">
              This creates a high-margin upsell opportunity and justifies the effort to grow the publication and newsletter.
            </p>
          </section>

          {/* Risks & Mitigation */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Risks & Mitigation</h2>

            <div className="space-y-4">
              <div className="p-4 bg-zinc-900/30 rounded-lg">
                <p className="font-light text-zinc-300 mb-2">
                  <strong>Risk:</strong> Newsletter doesn't grow fast enough to make affiliate revenue meaningful.
                </p>
                <p className="text-zinc-300 text-sm">
                  <strong>Mitigation:</strong> Cross-promote newsletter in YouTube description, end-screen cards, and in-video mentions. Prioritize email capture above fold on publication.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/30 rounded-lg">
                <p className="font-light text-zinc-300 mb-2">
                  <strong>Risk:</strong> Membership paywall hurts content discovery and SEO.
                </p>
                <p className="text-zinc-300 text-sm">
                  <strong>Mitigation:</strong> Keep 80% of content free. Gate only premium guides, templates, and advanced Model Matrix features. Free articles drive SEO and newsletter signups.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/30 rounded-lg">
                <p className="font-light text-zinc-300 mb-2">
                  <strong>Risk:</strong> Affiliate links erode reader trust or feel like selling out.
                </p>
                <p className="text-zinc-300 text-sm">
                  <strong>Mitigation:</strong> Only recommend tools Hause actually uses. Disclose affiliate relationships clearly. Start with no affiliate links and build trust before introducing them (Week 5+).
                </p>
              </div>

              <div className="p-4 bg-zinc-900/30 rounded-lg">
                <p className="font-light text-zinc-300 mb-2">
                  <strong>Risk:</strong> Publishing & newsletter effort pulls Anders away from YouTube.
                </p>
                <p className="text-zinc-300 text-sm">
                  <strong>Mitigation:</strong> Use AI agents for content editing and curation. Keep publication on a weekly cadence (one quality email, not daily noise).
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Next Steps</h2>

            <p className="text-zinc-300 mb-4">
              Immediate actions (next 2 weeks):
            </p>

            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
              <li>Fix About page on publication (credibility signal)</li>
              <li>Audit newsletter signup placement (move above fold if needed)</li>
              <li>Choose newsletter platform (Substack, Beehiiv, or custom)</li>
              <li>Research & join 10–15 affiliate programs (API tools, SaaS, AI services)</li>
              <li>Design affiliate link strategy (tone, frequency, value alignment)</li>
              <li>Create 4-week newsletter content plan (no affiliate links initially)</li>
            </ol>
          </section>

          {/* Decision Log */}
          <section>
            <h2 className="text-2xl font-light tracking-tight mb-4">Decisions Made</h2>

            <ul className="list-disc list-inside space-y-3 text-zinc-300">
              <li><strong>✅ Three-layer model:</strong> Free content (SEO + audience) → newsletter (affiliate revenue) → membership (recurring revenue).</li>
              <li><strong>✅ Keep publication separate from sponsorships:</strong> Publication is audience building + SEO. YouTube sponsorships remain main revenue driver.</li>
              <li><strong>✅ Pair for upsells:</strong> Bundle YouTube + publication sponsorships later (30–60% premium pricing).</li>
              <li><strong>✅ Membership pricing:</strong> $9/$15 monthly + $99 annual (higher conversion than $19–25/mo competitors).</li>
              <li><strong>✅ Low automation pressure:</strong> Weekly newsletter, not daily. Keep production sustainable.</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-zinc-900">
            <p className="text-sm text-zinc-500">
              Last updated: 2026-02-27 · Status: Draft · Next review: After March 2026 launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
