"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from "framer-motion";

export default function SabitplayRaysBackground() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-1, 1], [18, -18]);
  const parallaxY = useTransform(smoothY, [-1, 1], [14, -14]);

  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    // Disable parallax tracking on touch/mobile devices to save battery and CPU cycles
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = (e.clientY / innerHeight) * 2 - 1;
        mouseX.set(x);
        mouseY.set(y);
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ opacity: scrollOpacity }}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#040405] will-change-transform"
    >
      <div className="absolute inset-0 bg-[#040405]" />

      {/* GPU-efficient radial glow (no heavy Gaussian blur kernel) */}
      <div
        className="absolute h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,239,235,0.14)_0%,rgba(245,239,235,0.04)_45%,transparent_70%)] pointer-events-none"
      />

      {/* Volumetric rotated beams container */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : parallaxX,
          y: shouldReduceMotion ? 0 : parallaxY,
        }}
        className="absolute flex -rotate-[42deg] items-center gap-8 md:gap-14 will-change-transform"
      >
        {/* Outer Left Beam - hidden on tiny mobile screens for performance */}
        <div className="hidden sm:block h-[1100px] w-2 rounded-full bg-gradient-to-b from-transparent via-[#4D4238]/60 to-transparent opacity-30" />

        {/* Mid Left Beam */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [8, -8, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1250px] w-3 md:w-5 rounded-full bg-gradient-to-b from-transparent via-[#8A7969]/60 to-transparent opacity-50 will-change-transform"
        />

        {/* Main Center Beam */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-[1450px] w-36 sm:w-52 rounded-full bg-gradient-to-b from-transparent via-[#F5EFEB]/85 to-transparent flex items-center justify-center will-change-transform shadow-[0_0_50px_rgba(245,239,235,0.35)]"
        >
          {/* Inner Specular Core Spine */}
          <div className="h-[1100px] w-10 sm:w-14 rounded-full bg-gradient-to-b from-transparent via-[#FFFDF9] to-transparent opacity-90" />
        </motion.div>

        {/* Mid Right Beam */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1250px] w-3 md:w-5 rounded-full bg-gradient-to-b from-transparent via-[#8A7969]/60 to-transparent opacity-50 will-change-transform"
        />

        {/* Outer Right Beam - hidden on tiny mobile screens */}
        <div className="hidden sm:block h-[1100px] w-2 rounded-full bg-gradient-to-b from-transparent via-[#4D4238]/60 to-transparent opacity-30" />
      </motion.div>

      {/* Radial vignette overlay for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(4,4,5,0.65)_60%,#040405_90%)] pointer-events-none" />

      {/* Bottom gradient fade into section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040405] to-transparent pointer-events-none" />
    </motion.div>
  );
}
