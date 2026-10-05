"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section id="unmatched-experience" className="relative py-24 sm:py-32 px-4 max-w-5xl mx-auto z-10 text-center scroll-mt-20">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0d0d12] border border-[#F5EFEB]/15 text-[#F5EFEB] mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
        <Quote className="w-6 h-6 text-[#F5EFEB] opacity-90" />
      </div>

      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FFFDF9] mb-6 leading-[1.15] [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
        &ldquo;The Unmatched Experience&rdquo;
      </h2>

      <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-[#D8C5B2] font-normal leading-relaxed">
        We don&apos;t simply build games: we engineer deep digital dimensions. Every frame, shader, soundwave, and mechanic is meticulously crafted to leave an indelible impression.
      </p>
    </section>
  );
}
