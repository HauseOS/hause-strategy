# Hause Strategy Portal

Internal strategy documentation platform for Hause Collective.

## Overview

Central repository for:
- **Revenue Strategies** — Monetization models, pricing, revenue projections
- **Roadmaps** — Execution timelines, milestones, quarterly planning
- **Research** — Competitive analysis, audience insights, market trends

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel

## Development

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building

```bash
npm run build
npm start
```

## Deployment

Deployed to [hause-strategy.vercel.app](https://hause-strategy.vercel.app)

Deploy changes:
```bash
git push origin main
```

Vercel auto-deploys on push to main.

## Features

- ✅ Password-protected access (default: 0000)
- ✅ Dark/light mode toggle
- ✅ Responsive design
- ✅ Publication Monetization Strategy (first document)
- 🔄 Roadmaps section (coming soon)
- 🔄 Research section (coming soon)

## Structure

```
hause-strategy/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── page.tsx            # Homepage
│   ├── revenue/
│   │   ├── page.tsx        # Revenue section
│   │   └── publication-monetization/
│   │       └── page.tsx    # Publication Monetization Strategy
│   ├── roadmaps/
│   │   └── page.tsx        # Roadmaps section (coming soon)
│   └── research/
│       └── page.tsx        # Research section (coming soon)
├── lib/
│   └── theme-provider.tsx  # Dark/light mode logic
├── package.json
└── tsconfig.json
```

## Next Steps

1. Add Roadmaps section (quarterly planning documents)
2. Add Research section (competitive analysis)
3. Integrate Supabase for dynamic content (when ready)
4. Add charts/diagrams to strategy documents
5. Implement member-only sections (when integrated with Hause Ops)

## Password

Default access password: `0000`

Change in production before launching.
