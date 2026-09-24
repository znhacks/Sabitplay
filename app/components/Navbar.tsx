"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide at top (hero / title area), reveal when user starts scrolling down
      if (window.scrollY > 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 bg-[#040405]/85 backdrop-blur-xl border-b border-[#F5EFEB]/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
            
            {/* Sabitplay Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-xl bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 flex items-center justify-center overflow-hidden group-hover:border-[#F5EFEB]/50 transition-all">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-[#F5EFEB] drop-shadow-[0_0_8px_rgba(245,239,235,0.8)]"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-[#F5EFEB]">
                Sabitplay <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-[#F5EFEB]/10 text-[#D8C5B2] border border-[#F5EFEB]/15">Studio</span>
              </span>
            </a>

            {/* Right CTA - itch.io */}
            <div className="flex items-center gap-4">
              <a
                href="https://sabitplay.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#fa5c5c] hover:bg-[#ff6f6f] text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(250,92,92,0.35)] hover:shadow-[0_0_30px_rgba(250,92,92,0.55)] hover:scale-[1.02]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M2.5 4.5c-.3 0-.6.2-.8.5L.2 7c-.2.3-.2.7 0 1 .1.2.3.4.6.4h.2l2 1.5c.3.2.7.2 1 0l2-1.5h.2c.3 0 .5-.2.6-.4.2-.3.2-.7 0-1L5.3 5c-.2-.3-.5-.5-.8-.5H2.5zm19 0c-.3 0-.6.2-.8.5l-1.5 2c-.2.3-.2.7 0 1 .1.2.3.4.6.4h.2l2 1.5c.3.2.7.2 1 0l2-1.5h.2c.3 0 .5-.2.6-.4.2-.3.2-.7 0-1L23.3 5c-.2-.3-.5-.5-.8-.5h-2zm-9.5 0c-.3 0-.6.2-.8.5l-1.5 2c-.2.3-.2.7 0 1 .1.2.3.4.6.4h.2l2 1.5c.3.2.7.2 1 0l2-1.5h.2c.3 0 .5-.2.6-.4.2-.3.2-.7 0-1l-1.5-2c-.2-.3-.5-.5-.8-.5H12zM2 11v8c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8l-4 3-3-2.5-3 2.5-3-2.5-3 2.5-4-3zm5.5 3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S6 16.3 6 15.5 6.7 14 7.5 14zm9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"/>
                </svg>
                <span>itch.io</span>
              </a>
            </div>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
