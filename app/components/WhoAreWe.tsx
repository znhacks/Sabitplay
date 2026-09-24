"use client";

import React from "react";
import { Brain, Globe, Flame } from "lucide-react";

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="relative py-32 px-4 max-w-5xl mx-auto z-10 scroll-mt-20">

      {/* Background soft ambient radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(245,239,235,0.05)_0%,rgba(4,4,5,0)_70%)] blur-3xl pointer-events-none -z-10" />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] [text-shadow:0_4px_20px_rgba(0,0,0,0.8)]">
          Hello World!
        </h2>
      </div>

      {/* Main Manifesto Card */}
      <div className="relative p-8 sm:p-12 md:p-16 rounded-[32px] bg-[#08080b]/90 border border-[#F5EFEB]/15 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(245,239,235,0.03)] backdrop-blur-2xl overflow-hidden text-center">

        {/* Subtle decorative background lights */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#F5EFEB]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#F5EFEB]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFDF9] tracking-tight mb-6 leading-tight [text-shadow:0_2px_15px_rgba(0,0,0,0.9)]">
          We are working on something special.
        </h3>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#D8C5B2] font-normal leading-relaxed mb-10 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
          A project driven by passion, creativity, and imagination, grow up in the new era alongside with Artificial Intelligence.
        </p>

        {/* Divider line with glow */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F5EFEB]/30 to-transparent mx-auto mb-10" />

        {/* Closing punchline */}
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFFDF9] via-[#F5EFEB] to-[#C8B6A4] tracking-tight">
            New worlds. New stories.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-mono text-[#A89480] tracking-wide uppercase">
            A different kind of experience.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-10 border-t border-[#F5EFEB]/10 text-left">
          <div className="p-4 rounded-2xl bg-[#040405]/60 border border-[#F5EFEB]/5">
            <div className="flex items-center gap-2.5 mb-2">
              <Flame className="w-4 h-4 text-[#F5EFEB]" />
              <span className="text-xs font-mono font-bold text-[#FFFDF9]">Passion & Imagination</span>
            </div>
            <p className="text-xs text-[#BAA28B]">
              Boundless creativity poured into every narrative and mechanic.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#040405]/60 border border-[#F5EFEB]/5">
            <div className="flex items-center gap-2.5 mb-2">
              <Brain className="w-4 h-4 text-[#F5EFEB]" />
              <span className="text-xs font-mono font-bold text-[#FFFDF9]">AI-Era Innovation</span>
            </div>
            <p className="text-xs text-[#BAA28B]">
              Leveraging modern intelligence to pioneer new gameplay frontiers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#040405]/60 border border-[#F5EFEB]/5">
            <div className="flex items-center gap-2.5 mb-2">
              <Globe className="w-4 h-4 text-[#F5EFEB]" />
              <span className="text-xs font-mono font-bold text-[#FFFDF9]">Unique Worlds</span>
            </div>
            <p className="text-xs text-[#BAA28B]">
              Crafting immersive environments that deliver memorable experiences.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
