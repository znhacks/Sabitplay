"use client";

import React from "react";
import { Zap, Activity, ShieldCheck, Gauge, Flame, Terminal } from "lucide-react";

export default function StudioStats() {
  const stats = [
    { label: "Target Framerate", value: "120 FPS", detail: "Locked GPU V-Sync", icon: Gauge },
    { label: "Input Latency", value: "< 0.8ms", detail: "WASM Hardware Direct", icon: Zap },
    { label: "Concurrent Ink Particles", value: "50,000+", detail: "Real-time Dispersion", icon: Activity },
    { label: "Core Bundle Overhead", value: "18.4 KB", detail: "Zero Bloat Architecture", icon: ShieldCheck },
  ];

  return (
    <section id="stats" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="rounded-3xl raycast-glass border border-white/10 p-8 md:p-12 relative overflow-hidden">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
            Performance Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            Pure Obsidian Speed.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/10 text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-1">{s.label}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{s.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
