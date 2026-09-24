const fs = require('fs');
const path = require('path');

const heroCode = `"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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

        {/* 1. Announcement Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full announcement-pill text-xs text-[#EADDCF] mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#F5EFEB] shadow-[0_0_8px_#F5EFEB] animate-pulse" />
          <span className="font-mono uppercase tracking-wider text-[#D8C5B2]">Sabitplay Studio 2.0</span>
          <span className="text-neutral-500">•</span>
          <span className="text-[#FFFDF9] font-semibold">Digital Dimensions</span>
        </div>

        {/* 2. Grand Headline with Sharp Dark Text Shadow for 100% Crisp Legibility */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-[-0.05em] leading-[0.98] mb-8 select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#FFF8F0] to-[#D6C4B0] [filter:drop-shadow(0_6px_25px_rgba(0,0,0,0.95))]">
            Sabitplay Studio
          </span>
        </h1>

        {/* 3. Subtitle with High-Contrast Readability */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#EDE4DA] font-normal leading-relaxed mb-12 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
          A creative digital studio engineering next-generation games, fluid interactive experiences, and bespoke software.
        </p>

        {/* 4. Clean Call To Action Buttons */}
        <div id="explore" className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FFFDF9] via-[#F5EFEB] to-[#E5D6C5] text-[#070809] font-bold text-base shadow-[0_0_35px_rgba(245,239,235,0.4),0_10px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_50px_rgba(245,239,235,0.65)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#040405]/70 hover:bg-[#F5EFEB]/10 border border-[#F5EFEB]/25 hover:border-[#F5EFEB]/50 text-[#F5EFEB] font-semibold text-base backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles className="w-4 h-4 text-[#EADDCF]" />
            <span>Interactive Lab</span>
          </a>
        </div>

      </div>

      {/* Clean Bottom Copyright Note */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center text-xs font-mono text-[#A89480] px-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
        <span>© {new Date().getFullYear()} Sabitplay Studio.</span>
      </div>

    </section>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'app', 'components', 'Hero.tsx'), heroCode, 'utf8');
console.log('Hero.tsx updated with dark contrast occlusion and drop shadows');
