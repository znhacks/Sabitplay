"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import SabitplayRaysBackground from "./SabitplayRaysBackground";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden">
      <SabitplayRaysBackground />

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Soft dark aura behind title to ensure bold separation against the ray beams */}
        <div className="absolute inset-0 -inset-x-24 -inset-y-16 bg-[radial-gradient(ellipse_at_center,rgba(4,4,5,0.85)_0%,rgba(4,4,5,0.45)_55%,transparent_75%)] -z-10 pointer-events-none" />

        {/* 2-line grand headline: Pure White 'Sabitplay' & Warm Cream 'Studio' */}
        <h1 className="flex flex-col items-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] leading-[0.93] mb-8 select-none [filter:drop-shadow(0_10px_35px_rgba(0,0,0,0.9))]">
          <span className="text-[#FFFFFF]">
            Sabitplay
          </span>
          <span className="text-[#E7DACB]">
            Studio
          </span>
        </h1>

        <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#EDE4DA] font-normal leading-relaxed mb-10 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
          A creative digital studio engineering next-generation games, fluid interactive experiences, and bespoke software.
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={() => scrollTo("who-are-we")}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#F5EFEB] to-[#E5D6C5] text-[#070809] font-bold text-sm sm:text-base shadow-[0_4px_25px_rgba(245,239,235,0.35)] hover:shadow-[0_4px_35px_rgba(245,239,235,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
