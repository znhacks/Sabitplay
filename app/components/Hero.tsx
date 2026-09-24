"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import SabitplayRaysBackground from "./SabitplayRaysBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden">

      {/* 🌟 Background Cream & Obsidian Flowing Beams (z-0) */}
      <SabitplayRaysBackground />

      {/* 🌟 Focused Sabitplay Title & Content Layer (z-10) with Dark Contrast Separation */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">

        {/* Soft Localized Dark Contrast Aura behind text to prevent color blending with background beam */}
        <div className="absolute inset-0 -inset-x-20 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(4,4,5,0.75)_0%,rgba(4,4,5,0.35)_55%,transparent_75%)] -z-10 pointer-events-none blur-xl" />

        {/* 1. Grand Headline with Sharp Dark Text Shadow for 100% Crisp Legibility */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] leading-[1.08] mb-8 select-none">
          <span className="inline-block py-2 px-1 bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#FFF8F0] to-[#D6C4B0] [filter:drop-shadow(0_6px_25px_rgba(0,0,0,0.95))]">
            Sabitplay Studio
          </span>
        </h1>

        {/* 2. Subtitle with High-Contrast Readability */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#EDE4DA] font-normal leading-relaxed mb-12 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
          A creative digital studio engineering next-generation games, fluid interactive experiences, and bespoke software.
        </p>

        {/* 3. Clean Call To Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("who-are-we");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FFFDF9] via-[#F5EFEB] to-[#E5D6C5] text-[#070809] font-bold text-base shadow-[0_0_35px_rgba(245,239,235,0.4),0_10px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_50px_rgba(245,239,235,0.65)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
