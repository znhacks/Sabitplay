"use client";

import React, { useState } from "react";
import { Gamepad2, ArrowUpRight, Sparkles, Layers, Box, Terminal, ExternalLink } from "lucide-react";

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "aetheria",
      title: "Kurogane: Ink Blade",
      category: "games",
      badge: "Flagship Title",
      status: "Alpha v0.8.4",
      description: "Fast-paced cyber-samurai action roguelike rendered with dynamic ink slash physics and fluid WebGPU shaders.",
      tags: ["WebGPU", "Action Roguelike", "Procedural", "Rust"],
      metrics: "120 FPS / 4K"
    },
    {
      id: "sabit-engine",
      title: "Sabit Runtime SDK",
      category: "tools",
      badge: "Core Engine",
      status: "Production v2.1",
      description: "Lightweight, zero-overhead WebAssembly framework for rendering fluid particle simulations in modern web applications.",
      tags: ["TypeScript", "WASM", "WebGL2", "Fluid Dynamics"],
      metrics: "50k Particles"
    },
    {
      id: "obsidian-os",
      title: "Lumina: Canvas UI",
      category: "apps",
      badge: "Creative App",
      status: "Beta v1.2",
      description: "Next-gen spatial workspace for creative directors featuring infinite canvas, keyboard-driven navigation, and ink notes.",
      tags: ["Infinite Canvas", "Spatial UI", "Raycast CMD"],
      metrics: "Sub-millisecond"
    },
    {
      id: "void-protocol",
      title: "Project Zero Void",
      category: "games",
      badge: "Experimental",
      status: "In Development",
      description: "Sci-fi psychological mystery game set inside an abandoned deep-space observatory running on pure obsidian visuals.",
      tags: ["Immersive Sim", "Sound Design", "Volumetric"],
      metrics: "RTX WebGPU"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="showcase" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full raycast-glass border border-white/10 text-[11px] font-mono text-zinc-400 mb-3">
            <Gamepad2 className="w-3.5 h-3.5 text-white" />
            <span>STUDIO ROSTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Games & Digital Dimensions.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-lg">
            Explore the universe of interactive experiences engineered by Sabitplay Studio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl raycast-glass border border-white/10 self-start md:self-auto">
          {[
            { id: "all", label: "All Projects" },
            { id: "games", label: "Games" },
            { id: "tools", label: "Engines" },
            { id: "apps", label: "Web Apps" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeFilter === tab.id
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl raycast-glass raycast-glass-hover p-7 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient corner aura */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.08] transition-all" />

            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/15">
                  {p.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500">{p.status}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-white flex items-center justify-between">
                <span>{p.title}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            {/* Footer tags & metric */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/40 text-zinc-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-mono text-zinc-200 font-medium whitespace-nowrap">
                {p.metrics}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
