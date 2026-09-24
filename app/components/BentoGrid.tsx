"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal, 
  Droplet, 
  Cpu, 
  Zap, 
  Activity, 
  Layers, 
  ShieldCheck, 
  SlidersHorizontal,
  Flame,
  ArrowRight,
  Code
} from "lucide-react";

export default function BentoGrid() {
  const [fps, setFps] = useState(120);
  const [activeTab, setActiveTab] = useState("renderer");
  const waveCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Live mini wave animation for the Engine card
  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.04;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
          Math.sin(x * 0.03 + step) * 14 + 
          Math.sin(x * 0.015 - step * 0.8) * 8;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Shadow glow wave
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 6;
      ctx.stroke();

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full raycast-glass border border-white/10 text-[11px] font-mono text-zinc-400 mb-3">
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>BENTO ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Engineered for Pure Immersion.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
          Every tool, engine, and interface is tuned for ultra-low latency, visceral fluid dynamics, and frictionless developer ergonomics.
        </p>
      </div>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Card 1: Sabitplay WebGPU Core (Large 8 cols) */}
        <div className="md:col-span-8 rounded-3xl raycast-glass raycast-glass-hover p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-[90px] pointer-events-none" />
          
          <div className="relative z-10 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/10 border border-white/15 text-white">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Sabit Runtime Engine</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>120 FPS Locked</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Hardware-Accelerated WebGPU & WASM Shaders
            </h3>
            <p className="text-sm text-zinc-400 max-w-lg leading-relaxed">
              Real-time fluid dynamics computed directly on the GPU. Capable of simulating 50,000+ organic white ink particles simultaneously with zero frame drops.
            </p>
          </div>

          {/* Interactive Wave Visualizer inside card */}
          <div className="relative z-10 w-full rounded-2xl bg-black/50 border border-white/10 p-4 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 mb-2 pb-2 border-b border-white/10">
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-white" />
                <span>GPU Render Pipeline Visualizer</span>
              </span>
              <span className="text-[11px] text-zinc-500">Latency: 0.8ms</span>
            </div>
            <canvas ref={waveCanvasRef} width={600} height={70} className="w-full h-16 rounded-lg" />
          </div>
        </div>

        {/* Card 2: White Ink Liquid Aesthetics (4 cols) */}
        <div className="md:col-span-4 rounded-3xl raycast-glass raycast-glass-hover p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/[0.08] rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <div className="p-2 w-fit rounded-xl bg-white/10 border border-white/15 text-white mb-4">
              <Droplet className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-1">Visual Philosophy</span>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              White Ink on Void Black
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Sumie-inspired minimalism meets high-tech cyber aesthetics. Contrast tuned for organic dispersion and soothing depth.
            </p>
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
            <span>Viscosity Ratio</span>
            <span className="font-mono text-white font-semibold">0.0084 Pa·s</span>
          </div>
        </div>

        {/* Card 3: Raycast-Style Command Extensibility (4 cols) */}
        <div className="md:col-span-4 rounded-3xl raycast-glass raycast-glass-hover p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <div className="p-2 w-fit rounded-xl bg-white/10 border border-white/15 text-white mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-1">Workflow</span>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Keyboard-First Control
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Every action in the Sabitplay ecosystem is accessible in less than two keystrokes.
            </p>

            {/* Shortcut list */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                <span className="text-zinc-300">Launch Ink Splash</span>
                <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white">⌘I</kbd>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                <span className="text-zinc-300">Open Game Roster</span>
                <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white">⌘G</kbd>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                <span className="text-zinc-300">Quick Command Menu</span>
                <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white">⌘K</kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Studio Toolkit & Cross-Platform (8 cols) */}
        <div className="md:col-span-8 rounded-3xl raycast-glass raycast-glass-hover p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-white/10 border border-white/15 text-white">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-zinc-500">Universal Target SDK</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Single Codebase, Instant Web & Desktop Deployment
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed mb-6">
              Write once in TypeScript / Rust, compile into lightweight WebAssembly modules, and ship across browser tabs, Electron, or native standalone binaries.
            </p>

            {/* Mini code preview */}
            <div className="rounded-xl bg-black/70 border border-white/10 p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
              <div className="flex items-center gap-2 text-zinc-500 mb-2 border-b border-white/5 pb-1">
                <Code className="w-3 h-3" />
                <span>sabitplay.config.ts</span>
              </div>
              <p><span className="text-zinc-500">import</span> &#123; <span className="text-white font-semibold">defineStudioPipeline</span> &#125; <span className="text-zinc-500">from</span> <span className="text-emerald-400">&quot;@sabitplay/core&quot;</span>;</p>
              <p className="mt-1"><span className="text-zinc-500">export default</span> defineStudioPipeline(&#123;</p>
              <p className="pl-4">engine: <span className="text-emerald-400">&quot;webgpu-fluid-v2&quot;</span>,</p>
              <p className="pl-4">particles: <span className="text-amber-300">50_000</span>,</p>
              <p className="pl-4">theme: <span className="text-emerald-400">&quot;obsidian-white-ink&quot;</span>,</p>
              <p>&#125;);</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
