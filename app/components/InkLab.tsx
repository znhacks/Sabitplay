"use client";

import React, { useState, useRef, useEffect } from "react";
import { Droplet, Sparkles, RefreshCw } from "lucide-react";

interface InkParticle {
  x: number;
  y: number;
  r: number;
  opacity: number;
}

export default function InkLab() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [inkDrops, setInkDrops] = useState<InkParticle[]>([]);
  const [viscosity, setViscosity] = useState(65);
  const [bloomRadius, setBloomRadius] = useState(80);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let drops = [...inkDrops];

    const render = () => {
      ctx.fillStyle = "rgba(5, 5, 7, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.r += (bloomRadius / 100) * 1.2;
        d.opacity -= (100 - viscosity) * 0.0003;

        if (d.opacity <= 0.01) {
          drops.splice(i, 1);
          continue;
        }

        // Radial Ink Gradient
        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(d.r, 1));
        grad.addColorStop(0, `rgba(255, 255, 255, ${(d.opacity * 0.9).toFixed(3)})`);
        grad.addColorStop(0.3, `rgba(240, 245, 255, ${(d.opacity * 0.4).toFixed(3)})`);
        grad.addColorStop(0.7, `rgba(220, 230, 255, ${(d.opacity * 0.1).toFixed(3)})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();

        // Ink boundary halo
        ctx.strokeStyle = `rgba(255, 255, 255, ${(d.opacity * 0.3).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 0.9, 0, Math.PI * 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [viscosity, bloomRadius, inkDrops]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setInkDrops((prev) => [
      ...prev,
      { x, y, r: 4, opacity: 0.9 }
    ]);
    setClickCount((c) => c + 1);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setInkDrops([]);
  };

  const handleTriggerPreset = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const newDrops: InkParticle[] = [];
    for (let i = 0; i < 5; i++) {
      newDrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 3,
        opacity: 0.85
      });
    }
    setInkDrops((prev) => [...prev, ...newDrops]);
    setClickCount((c) => c + 5);
  };

  return (
    <section id="lab" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="rounded-3xl raycast-glass border border-white/15 p-6 md:p-10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono mb-2 border border-white/10">
              <Droplet className="w-3.5 h-3.5" />
              <span>INTERACTIVE FLUID EXPERIMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Obsidian Ink Dispersion Sandbox
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Click anywhere on the pitch black canvas below to drop droplets of white ink into the void.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTriggerPreset}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Drop Burst</span>
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#050507] shadow-inner mb-6">
          <canvas
            ref={canvasRef}
            width={1000}
            height={400}
            onClick={handleCanvasClick}
            className="w-full h-80 sm:h-96 cursor-crosshair block"
          />

          <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Click canvas to drop ink • Total Drops: {clickCount}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
          <div className="space-y-2">
            <div className="flex justify-between text-zinc-400">
              <span>Bloom Diffusion Radius</span>
              <span className="text-white">{bloomRadius}px</span>
            </div>
            <input
              type="range"
              min={30}
              max={150}
              value={bloomRadius}
              onChange={(e) => setBloomRadius(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-zinc-400">
              <span>Ink Viscosity / Dissolve Rate</span>
              <span className="text-white">{viscosity}%</span>
            </div>
            <input
              type="range"
              min={30}
              max={95}
              value={viscosity}
              onChange={(e) => setViscosity(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
