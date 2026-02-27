"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme-provider";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Check if already authenticated
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
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <div className="mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="mx-auto"
              >
                <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 12v-2a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="22" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-3xl font-light tracking-tight mb-2">
              Hause Strategy
            </h1>
            <p className="text-zinc-400 text-sm">Internal Documentation Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-50 placeholder-zinc-600 focus:outline-none focus:border-red-500 transition"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="border-b border-zinc-900 sticky top-0 bg-zinc-950/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <p className="text-zinc-400 text-sm mb-4">Strategy Documentation</p>
          <h1 className="text-5xl font-light tracking-tight mb-4">
            Strategic Intelligence
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl">
            Central repository for Hause Collective's revenue strategy, execution roadmaps, and competitive research.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Revenue Section */}
          <Link href="/revenue">
            <div className="group p-8 border border-zinc-900 rounded-lg hover:border-zinc-800 transition cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/40">
              <div className="mb-4 text-2xl">💰</div>
              <h2 className="text-2xl font-light mb-2">Revenue</h2>
              <p className="text-zinc-400 text-sm mb-6">
                Monetization strategies, pricing models, and revenue projections.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-red-600">→</span> Publication Monetization
                </li>
              </ul>
            </div>
          </Link>

          {/* Roadmaps Section */}
          <Link href="/roadmaps">
            <div className="group p-8 border border-zinc-900 rounded-lg hover:border-zinc-800 transition cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/40">
              <div className="mb-4 text-2xl">📅</div>
              <h2 className="text-2xl font-light mb-2">Roadmaps</h2>
              <p className="text-zinc-400 text-sm mb-6">
                Execution timelines, milestones, and quarterly planning.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-red-600">→</span> Coming soon
                </li>
              </ul>
            </div>
          </Link>

          {/* Research Section */}
          <Link href="/research">
            <div className="group p-8 border border-zinc-900 rounded-lg hover:border-zinc-800 transition cursor-pointer bg-zinc-900/20 hover:bg-zinc-900/40">
              <div className="mb-4 text-2xl">🔍</div>
              <h2 className="text-2xl font-light mb-2">Research</h2>
              <p className="text-zinc-400 text-sm mb-6">
                Competitive analysis, audience insights, and market trends.
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-red-600">→</span> Coming soon
                </li>
              </ul>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-zinc-900 text-center text-sm text-zinc-500">
          <p>© 2026 Hause Collective · Internal Strategy Portal</p>
        </div>
      </div>
    </div>
  );
}
