"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function StudioFooter() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#F5EFEB]/10 bg-[#040405] pt-16 pb-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#F5EFEB]">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-lg text-[#FFFDF9] tracking-tight">
                Sabitplay <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-[#F5EFEB]/10 text-[#D8C5B2] border border-[#F5EFEB]/15">Studio</span>
              </span>
            </div>
            <p className="text-xs text-[#A89480] max-w-sm leading-relaxed">
              Engineering next-generation games, fluid mechanics, and creative digital universes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#D8C5B2]">
            <button
              onClick={() => scrollTo("who-are-we")}
              className="hover:text-[#FFFDF9] transition-colors cursor-pointer"
            >
              Hello World!
            </button>
            <button
              onClick={() => scrollTo("sabit-family")}
              className="hover:text-[#FFFDF9] transition-colors cursor-pointer"
            >
              Sabit Family
            </button>
            <button
              onClick={() => scrollTo("our-projects")}
              className="hover:text-[#FFFDF9] transition-colors cursor-pointer py-1"
            >
              Our Games
            </button>
            <a
              href="https://sabitplay.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#fa5c5c] hover:text-[#ff7f7f] font-bold transition-colors"
            >
              <span>itch.io</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F5EFEB]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C7A68]">
          <div>
            © {new Date().getFullYear()} Sabitplay Studio.
          </div>
        </div>

      </div>
    </footer>
  );
}
