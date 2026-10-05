"use client";

import React from "react";
import { Brain, Globe, Flame } from "lucide-react";

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="relative py-24 sm:py-32 px-4 max-w-5xl mx-auto z-10 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
          Hello World!
        </h2>
      </div>

      <div className="relative p-6 sm:p-12 md:p-14 rounded-3xl bg-[#08080c] border border-[#F5EFEB]/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden text-center">
        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#FFFDF9] tracking-tight mb-5 leading-tight">
          We are working on something special.
        </h3>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#D8C5B2] font-normal leading-relaxed mb-8">
          A project driven by passion, creativity, and imagination, growing up in the modern era alongside Artificial Intelligence.
        </p>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#F5EFEB]/25 to-transparent mx-auto mb-8" />

        <div className="space-y-1.5 mb-10">
          <p className="text-lg sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFFDF9] via-[#F5EFEB] to-[#C8B6A4] tracking-tight">
            New worlds. New stories.
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#A89480] tracking-wide uppercase">
            A different kind of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 border-t border-[#F5EFEB]/10 text-left">
          <div className="p-4 rounded-xl bg-[#040405] border border-[#F5EFEB]/10">
            <div className="flex items-center gap-2.5 mb-2">
              <Flame className="w-4 h-4 text-[#F5EFEB]" />
              <span className="text-xs font-mono font-bold text-[#FFFDF9]">Passion & Imagination</span>
            </div>
            <p className="text-xs text-[#BAA28B] leading-relaxed">
              Boundless creativity poured into every narrative and mechanic.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#040405] border border-[#F5EFEB]/10">
            <div className="flex items-center gap-2.5 mb-2">
              <Brain className="w-4 h-4 text-[#F5EFEB]" />
              <span className="text-xs font-mono font-bold text-[#FFFDF9]">AI-Era Innovation</span>
            </div>
            <p className="text-xs text-[#BAA28B] leading-relaxed">
              Leveraging modern intelligence to pioneer new gameplay frontiers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#040405] border border-[#F5EFEB]/10">
            <div className="flex items-center gap-2.5 mb-2">
              <Globe className="w-4 h-4 text-[#F5EFEB]" />
              <span className="text-xs font-mono font-bold text-[#FFFDF9]">Unique Worlds</span>
            </div>
            <p className="text-xs text-[#BAA28B] leading-relaxed">
              Crafting immersive environments that deliver memorable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
