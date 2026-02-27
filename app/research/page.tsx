"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";

export default function ResearchPage() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-900 sticky top-0 bg-zinc-950/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                className="text-red-600"
              >
                <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 12v-2a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-light text-lg">Hause Strategy</span>
            </Link>
            <div className="text-zinc-600">/</div>
            <span className="text-zinc-400">Research</span>
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
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-zinc-400 text-sm mb-4">Strategic Intelligence</p>
        <h1 className="text-4xl font-light tracking-tight mb-2">Research</h1>
        <p className="text-zinc-400 mb-12">
          Competitive analysis, audience insights, and market trends.
        </p>

        <div className="p-8 border border-zinc-900 rounded-lg text-center">
          <p className="text-zinc-400">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
