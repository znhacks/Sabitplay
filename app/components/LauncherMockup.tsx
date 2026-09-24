"use client";

import React, { useState } from "react";
import {
  Search,
  Sparkles,
  Gamepad2,
  Terminal,
  Layers,
  Zap,
  Droplet,
  Cpu,
  ArrowRight,
  Flame,
  Globe,
  Sliders
} from "lucide-react";

export default function LauncherMockup() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("all");

  const listItems = [
    {
      id: "kurogane",
      title: "Launch Kurogane: Ink Blade",
      subtitle: "Sabitplay Flagship • WebGPU Action Roguelike",
      category: "Studio Game",
      shortcut: "↵",
      icon: Gamepad2,
      tag: "v0.9 Beta",
      highlight: true
    },
    {
      id: "ink-sim",
      title: "Simulate Obsidian Ink Dispersion",
      subtitle: "50,000 Real-Time White Fluid Particles",
      category: "Fluid Dynamics",
      shortcut: "⌘I",
      icon: Droplet,
      tag: "120 FPS",
    },
    {
      id: "runtime",
      title: "Open Sabit WebGPU Runtime Core",
      subtitle: "Hardware-Direct Low Latency Pipeline",
      category: "Engine SDK",
      shortcut: "⌘E",
      icon: Cpu,
      tag: "WASM",
    },
    {
      id: "canvas",
      title: "Lumina Spatial Infinite Canvas",
      subtitle: "Creative Design & Interaction Workspace",
      category: "Creative Suite",
      shortcut: "⌘L",
      icon: Layers,
      tag: "New",
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-2">
      {/* Background Luminous White Glow behind window */}
      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-[32px] blur-2xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/[0.08] blur-[100px] rounded-full pointer-events-none" />

      {/* Floating Extension Cards on Left & Right (Raycast Signature Style) */}
      <div className="hidden lg:block absolute -left-16 top-12 z-20 w-52 p-3.5 rounded-2xl raycast-glass border border-white/15 shadow-2xl backdrop-blur-xl animate-bounce [animation-duration:6s]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Droplet className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">White Ink Fluid</div>
            <div className="text-[10px] text-zinc-400 font-mono">0.0084 Viscosity</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-16 bottom-16 z-20 w-52 p-3.5 rounded-2xl raycast-glass border border-white/15 shadow-2xl backdrop-blur-xl animate-bounce [animation-duration:8s]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Zero Latency</div>
            <div className="text-[10px] text-emerald-400 font-mono">120 FPS Locked</div>
          </div>
        </div>
      </div>

      {/* Main Raycast Window Box */}
      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-[#0c0c10]/95 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(255,255,255,0.08)] overflow-hidden backdrop-blur-2xl">

        {/* Search Header Bar */}
        <div className="flex items-center gap-3.5 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            readOnly
            value="Sabitplay Studio • Search games, engines, and ink physics..."
            className="w-full bg-transparent text-sm sm:text-base text-zinc-200 placeholder-zinc-500 focus:outline-none cursor-default font-normal"
          />
          <div className="flex items-center gap-1.5 text-zinc-400">
            <kbd className="font-mono text-xs px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-zinc-300">
              ESC
            </kbd>
          </div>
        </div>

        {/* Section List (Raycast items) */}
        <div className="p-3 sm:p-4 space-y-1.5">
          <div className="px-3 py-1 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            Featured Studio Actions
          </div>

          {listItems.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = idx === selectedIdx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedIdx(idx)}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all cursor-pointer ${isSelected
                    ? "bg-white/15 text-white border border-white/20 shadow-md translate-x-1"
                    : "text-zinc-400 hover:bg-white/5 border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`p-2 rounded-xl transition-colors ${isSelected ? "bg-white/25 text-white shadow-inner" : "bg-white/5 text-zinc-400"
                    }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-white truncate flex items-center gap-2">
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-zinc-300">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 pl-2">
                  <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                    {item.category}
                  </span>
                  <kbd className="font-mono text-xs px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-zinc-300">
                    {item.shortcut}
                  </kbd>
                </div>
              </div>
            );
          })}
        </div>

        {/* Raycast Bottom Bar with Actions */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-black/50 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio Engine Active</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">Actions</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-zinc-300">
              ⌘↵
            </kbd>
          </div>
        </div>

      </div>
    </div>
  );
}
