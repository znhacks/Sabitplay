"use client";

import React, { useState } from "react";
import { Terminal } from "lucide-react";

export default function KeyboardVisual() {
  const [activeKey, setActiveKey] = useState("K");

  const row1 = ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];
  const row2 = ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"];
  const row3 = ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"];
  const row4 = ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"];
  const row5 = ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"];
  const row6 = ["fn", "control", "option", "command", "space", "command", "option"];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full announcement-pill text-[11px] font-mono text-[#F5EFEB] mb-3">
          <Terminal className="w-3.5 h-3.5 text-[#F5EFEB]" />
          <span>TACTILE ERGONOMICS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFEB] mb-4">
          It’s not just about speed.
        </h2>
        <p className="text-base sm:text-lg text-[#D8C5B2] leading-relaxed">
          It’s about feeling in absolute flow with your digital canvas. Every command, fluid splash, and game mechanic is one keystroke away.
        </p>
      </div>

      <div className="relative rounded-3xl raycast-card p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5EFEB]/[0.08] rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col gap-1.5 sm:gap-2 select-none overflow-x-auto pb-2">
          {/* Row 1 */}
          <div className="flex gap-1 sm:gap-2 justify-center min-w-[700px]">
            {row1.map((k) => (
              <div key={k} className="h-8 sm:h-10 px-2 sm:px-3 rounded-lg bg-black/60 border border-[#F5EFEB]/10 flex items-center justify-center text-[10px] sm:text-xs font-mono text-neutral-400 hover:text-white hover:border-[#F5EFEB]/30 transition-all">
                {k}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-1 sm:gap-2 justify-center min-w-[700px]">
            {row2.map((k) => (
              <div key={k} className="h-9 sm:h-12 w-9 sm:w-12 rounded-lg bg-black/60 border border-[#F5EFEB]/10 flex items-center justify-center text-xs font-mono text-[#D8C5B2] hover:text-white hover:border-[#F5EFEB]/30 transition-all">
                {k}
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-1 sm:gap-2 justify-center min-w-[700px]">
            {row3.map((k) => (
              <div key={k} className="h-9 sm:h-12 px-2 sm:px-3 rounded-lg bg-black/60 border border-[#F5EFEB]/10 flex items-center justify-center text-xs font-mono text-[#D8C5B2] hover:text-white hover:border-[#F5EFEB]/30 transition-all">
                {k}
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex gap-1 sm:gap-2 justify-center min-w-[700px]">
            {row4.map((k) => {
              const isGlowing = k === "K";
              return (
                <div
                  key={k}
                  onClick={() => setActiveKey(k)}
                  className={`h-9 sm:h-12 px-2 sm:px-3 rounded-lg flex items-center justify-center text-xs font-mono transition-all cursor-pointer ${
                    isGlowing
                      ? "bg-[#F5EFEB] text-[#121214] font-bold shadow-[0_0_25px_rgba(245,239,235,0.8)] border border-[#FFFDF9] scale-105"
                      : "bg-black/60 border border-[#F5EFEB]/10 text-[#D8C5B2] hover:text-white hover:border-[#F5EFEB]/30"
                  }`}
                >
                  {k}
                </div>
              );
            })}
          </div>

          {/* Row 5 */}
          <div className="flex gap-1 sm:gap-2 justify-center min-w-[700px]">
            {row5.map((k, i) => (
              <div key={i} className="h-9 sm:h-12 px-2 sm:px-3 rounded-lg bg-black/60 border border-[#F5EFEB]/10 flex items-center justify-center text-xs font-mono text-[#D8C5B2] hover:text-white hover:border-[#F5EFEB]/30 transition-all">
                {k}
              </div>
            ))}
          </div>

          {/* Row 6 */}
          <div className="flex gap-1 sm:gap-2 justify-center min-w-[700px]">
            {row6.map((k, i) => {
              const isCmd = k === "command";
              return (
                <div
                  key={i}
                  className={`h-9 sm:h-12 px-3 sm:px-4 rounded-lg flex items-center justify-center text-xs font-mono transition-all ${
                    isCmd
                      ? "bg-[#F5EFEB]/20 border border-[#F5EFEB]/40 text-[#F5EFEB] font-semibold"
                      : k === "space"
                      ? "w-48 sm:w-64 bg-black/60 border border-[#F5EFEB]/10 text-neutral-400"
                      : "bg-black/60 border border-[#F5EFEB]/10 text-[#D8C5B2]"
                  }`}
                >
                  {k === "command" ? "⌘ cmd" : k}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F5EFEB]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D8C5B2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5EFEB] animate-ping" />
            <span>Shortcut: Press <kbd className="px-1.5 py-0.5 rounded bg-[#F5EFEB]/20 text-[#F5EFEB] font-bold">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-[#F5EFEB] text-black font-bold">K</kbd> anywhere to trigger launcher</span>
          </div>
          <div className="text-[#BAA28B]">
            Precision Keycap Matrix v2.0
          </div>
        </div>
      </div>
    </section>
  );
}
