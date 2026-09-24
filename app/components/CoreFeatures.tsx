"use client";

import React from "react";
import { Sparkles, Clipboard, Zap, Layers, Calculator } from "lucide-react";

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full announcement-pill text-[11px] font-mono text-[#F5EFEB] mb-3">
          <Layers className="w-3.5 h-3.5 text-[#F5EFEB]" />
          <span>CORE PRODUCTIVITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFEB] mb-4">
          Everything built in.
        </h2>
        <p className="text-base sm:text-lg text-[#D8C5B2]">
          No need to install a dozen standalone utilities. Raycast bundles every productivity superpower in one fast binary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8 rounded-3xl raycast-card p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#F5EFEB]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="p-2.5 rounded-2xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/25 text-[#F5EFEB]">
                <Sparkles className="w-5 h-5" />
              </span>
              <span className="font-mono text-xs text-[#BAA28B] uppercase">Built-in Intelligence</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5EFEB] mb-3">
              Raycast AI at your fingertips
            </h3>
            <p className="text-sm sm:text-base text-[#D8C5B2] max-w-lg leading-relaxed mb-6">
              Ask questions, generate and edit code, translate documents, or create bespoke custom AI commands with your preferred model (GPT-4o, Claude 3.5 Sonnet, Llama).
            </p>
          </div>

          <div className="rounded-2xl bg-black/60 border border-[#F5EFEB]/10 p-4 font-mono text-xs text-neutral-300">
            <div className="flex items-center gap-2 text-[#F5EFEB] mb-2 font-semibold">
              <span>✨ Ask AI: &quot;Optimize this WebGPU fluid dispersion shader&quot;</span>
            </div>
            <p className="text-neutral-400">
              &gt; Analyzing kernel loops... reduced GPU register pressure by 34%, locked at 120 FPS.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 rounded-3xl raycast-card p-8 flex flex-col justify-between group">
          <div>
            <span className="p-2.5 rounded-2xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 text-[#F5EFEB] inline-block mb-6">
              <Clipboard className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] mb-3">
              Clipboard History
            </h3>
            <p className="text-sm text-[#D8C5B2] leading-relaxed mb-6">
              Never lose a copied text, link, color hex, or screenshot again. Instant search with pin support.
            </p>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <div className="p-2 rounded-xl bg-black/50 border border-white/5 flex justify-between text-neutral-300">
              <span>#070809 (Obsidian BG)</span>
              <span className="text-[#BAA28B]">Color</span>
            </div>
            <div className="p-2 rounded-xl bg-black/50 border border-white/5 flex justify-between text-neutral-300">
              <span>npm install @raycast/api</span>
              <span className="text-[#BAA28B]">Command</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 rounded-3xl raycast-card p-8 flex flex-col justify-between group">
          <div>
            <span className="p-2.5 rounded-2xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 text-[#F5EFEB] inline-block mb-6">
              <Zap className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFEB] mb-3">
              Snippets & Expansion
            </h3>
            <p className="text-sm text-[#D8C5B2] leading-relaxed mb-4">
              Type keywords like <code className="text-[#F5EFEB] bg-[#F5EFEB]/10 px-1.5 py-0.5 rounded">!zoom</code> or <code className="text-[#F5EFEB] bg-[#F5EFEB]/10 px-1.5 py-0.5 rounded">!email</code> to instantly expand full templates.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs text-neutral-400">
            <span>!meet ➔ https://meet.google.com/sabitplay-core</span>
          </div>
        </div>

        <div className="md:col-span-8 rounded-3xl raycast-card p-8 flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-6">
            <span className="p-2.5 rounded-2xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 text-[#F5EFEB]">
              <Calculator className="w-5 h-5" />
            </span>
            <span className="font-mono text-xs text-[#BAA28B]">Quick Calculations & Window Snapping</span>
          </div>

          <h3 className="text-2xl font-bold text-[#F5EFEB] mb-3">
            Natural Language Calculations & Window Snapping
          </h3>
          <p className="text-sm text-[#D8C5B2] max-w-xl leading-relaxed mb-6">
            Calculate currency conversions, time zones, math expressions, and snap windows into halves, thirds, or full screens with zero friction.
          </p>

          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-neutral-300">
              <span className="text-[#BAA28B]">Query: </span> $250 in IDR
              <div className="text-[#F5EFEB] font-bold mt-1">Rp 4.075.000</div>
            </div>
            <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-neutral-300">
              <span className="text-[#BAA28B]">Hotkey: </span> ⌥⌘← Left Half
              <div className="text-emerald-400 font-bold mt-1">Snapped 50% Left</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
