"use client";

import React from "react";
import { Crown, Code2, Palette, ShieldCheck, Headphones, Terminal, ArrowUpRight } from "lucide-react";

export default function OurTeam() {
  return (
    <section id="sabit-family" className="relative py-32 px-4 max-w-6xl mx-auto z-10 scroll-mt-20">
      
      {/* Invisible anchor for backward compatibility */}
      <span id="our-team" className="absolute -top-20" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5EFEB]/[0.02] blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] mb-4 [text-shadow:0_4px_20px_rgba(0,0,0,0.8)]">
          Sabit Family
        </h2>

        <p className="text-base sm:text-lg text-[#D8C5B2] leading-relaxed">
          The team united by passion, creativity, and craftsmanship.
        </p>
      </div>

      {/* 1. Founder Spotlight Card */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#111116] to-[#08080b] border border-[#F5EFEB]/20 hover:border-[#F5EFEB]/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(245,239,235,0.05)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5EFEB]/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-[#F5EFEB]/[0.08] transition-all" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            {/* Avatar Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#F5EFEB] to-[#C8B6A4] text-[#070809] flex items-center justify-center font-black text-3xl shadow-[0_0_30px_rgba(245,239,235,0.3)] shrink-0">
              <Crown className="w-10 h-10 text-[#070809]" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFEB]/10 text-[#F5EFEB] border border-[#F5EFEB]/20 text-xs font-mono mb-2">
                <span>FOUNDER</span>
              </div>

              <div className="mb-1">
                <a
                  href="https://jordevs.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFDF9] group-hover/link:underline">
                    Jordy
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#A89480] group-hover/link:text-[#FFFDF9] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>
              </div>
              <p className="text-sm font-mono text-[#A89480] mb-3">
                (Ordi Kurniawan)
              </p>

              <p className="text-sm text-[#D8C5B2] leading-relaxed">
                Visionary leader driving creative direction, studio strategy, and full-stack game architecture.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 2-Column Family Branches: Programmer Family & Design Visual/Audio Family */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* BRANCH 1: Programmer Family */}
        <div className="p-8 rounded-3xl bg-[#08080b]/90 border border-[#F5EFEB]/15 hover:border-[#F5EFEB]/30 shadow-[0_12px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5EFEB]/10">
              <div className="w-10 h-10 rounded-xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 flex items-center justify-center text-[#F5EFEB]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFFDF9]">
                  Programmer Family
                </h3>
                <span className="text-xs font-mono text-[#A89480]">Engineering & Quality Assurance</span>
              </div>
            </div>

            <div className="space-y-4">
              
              {/* Fullstack */}
              <div className="p-4 rounded-2xl bg-[#040405]/70 border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#F5EFEB]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">Fullstack</div>
                    <a
                      href="https://jordevs.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#FFFDF9] hover:underline hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Jordy</span>
                      <span className="text-xs font-normal text-[#BAA28B]">(Ordi Kurniawan)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#A89480]" />
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5EFEB]/10 text-[#F5EFEB] border border-[#F5EFEB]/15">
                  Core Lead
                </span>
              </div>

              {/* QA Tester */}
              <div className="p-4 rounded-2xl bg-[#040405]/70 border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#A89480]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">QA Tester</div>
                    <div className="text-sm font-medium text-[#8C7A68] italic">Placeholder</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8C7A68]">
                  Open Role
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* BRANCH 2: Design Visual & Audio Family */}
        <div className="p-8 rounded-3xl bg-[#08080b]/90 border border-[#F5EFEB]/15 hover:border-[#F5EFEB]/30 shadow-[0_12px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5EFEB]/10">
              <div className="w-10 h-10 rounded-xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 flex items-center justify-center text-[#F5EFEB]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFFDF9]">
                  Design Visual & Audio Family
                </h3>
                <span className="text-xs font-mono text-[#A89480]">Art Direction, Assets & Sound</span>
              </div>
            </div>

            <div className="space-y-4">
              
              {/* Assets / Art */}
              <div className="p-4 rounded-2xl bg-[#040405]/70 border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#A89480]">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">Assets / Art</div>
                    <div className="text-sm font-medium text-[#8C7A68] italic">Placeholder</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8C7A68]">
                  Open Role
                </span>
              </div>

              {/* Audio */}
              <div className="p-4 rounded-2xl bg-[#040405]/70 border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#A89480]">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">Audio</div>
                    <div className="text-sm font-medium text-[#8C7A68] italic">Placeholder</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8C7A68]">
                  Open Role
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
