"use client";

import React from "react";
import Image from "next/image";
import { Crown, Code2, Palette, ShieldCheck, Headphones, Terminal, ArrowUpRight } from "lucide-react";

export default function OurTeam() {
  return (
    <section id="sabit-family" className="relative py-24 sm:py-32 px-4 max-w-6xl mx-auto z-10 scroll-mt-20">
      <span id="our-team" className="absolute -top-20" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 -z-10 pointer-events-none opacity-15 select-none flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Sabitplay Logo"
            width={240}
            height={240}
            className="w-full h-full object-contain"
            priority={false}
          />
        </div>

        <h2 className="relative text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] mb-4 [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
          Sabit Family
        </h2>

        <p className="relative text-sm sm:text-base md:text-lg text-[#D8C5B2] leading-relaxed">
          The team united by passion, creativity, and craftsmanship.
        </p>
      </div>

      {/* Founder Spotlight Card */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0d0d12] border border-[#F5EFEB]/20 hover:border-[#F5EFEB]/40 shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all duration-200 group relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#F5EFEB] to-[#C8B6A4] text-[#070809] flex items-center justify-center font-black text-3xl shadow-[0_4px_20px_rgba(245,239,235,0.25)] shrink-0">
              <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-[#070809]" />
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

      {/* Programmer and Art/Audio Branches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#09090d] border border-[#F5EFEB]/15 hover:border-[#F5EFEB]/30 shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5EFEB]/10">
              <div className="w-10 h-10 rounded-xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 flex items-center justify-center text-[#F5EFEB]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FFFDF9]">
                  Programmer Family
                </h3>
                <span className="text-xs font-mono text-[#A89480]">Engineering & Quality Assurance</span>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#040405] border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
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

              <div className="p-4 rounded-2xl bg-[#040405] border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#A89480]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">QA Tester</div>
                    <div className="text-sm font-medium text-[#8C7A68] italic">Open Position</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8C7A68]">
                  Open Role
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#09090d] border border-[#F5EFEB]/15 hover:border-[#F5EFEB]/30 shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5EFEB]/10">
              <div className="w-10 h-10 rounded-xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 flex items-center justify-center text-[#F5EFEB]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FFFDF9]">
                  Design Visual & Audio Family
                </h3>
                <span className="text-xs font-mono text-[#A89480]">Art Direction, Assets & Sound</span>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-[#040405] border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#A89480]">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">Assets / Art</div>
                    <div className="text-sm font-medium text-[#8C7A68] italic">Open Position</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8C7A68]">
                  Open Role
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#040405] border border-[#F5EFEB]/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#A89480]">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#A89480]">Audio</div>
                    <div className="text-sm font-medium text-[#8C7A68] italic">Open Position</div>
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
