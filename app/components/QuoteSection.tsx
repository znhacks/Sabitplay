"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section id="unmatched-experience" className="relative py-36 px-4 max-w-5xl mx-auto z-10 text-center scroll-mt-20">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-[radial-gradient(ellipse_at_center,rgba(245,239,235,0.06)_0%,rgba(4,4,5,0)_70%)] blur-2xl pointer-events-none -z-10" />

      {/* Decorative Quote Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-[#F5EFEB]/5 border border-[#F5EFEB]/15 text-[#F5EFEB] mb-10 shadow-[0_0_30px_rgba(245,239,235,0.15)] backdrop-blur-xl">
        <Quote className="w-8 h-8 text-[#F5EFEB] opacity-90" />
      </div>

      {/* Grand Quote Title */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#FFFDF9] mb-8 leading-[1.15] [text-shadow:0_6px_25px_rgba(0,0,0,0.9)]">
        &ldquo;The Unmatched Experience&rdquo;
      </h2>

      {/* Manifesto Body */}
      <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl text-[#D8C5B2] font-light leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
        We don't simply build games — we engineer deep digital dimensions. Every frame, shader, soundwave, and mechanic is meticulously crafted to leave an indelible impression.
      </p>

    </section>
  );
}
