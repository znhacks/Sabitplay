"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

export default function SabitplayRaysBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 60, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-1, 1], [25, -25]);
  const parallaxY = useTransform(smoothY, [-1, 1], [20, -20]);

  // Fade out beams smoothly as user scrolls down away from the title/hero
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ opacity: scrollOpacity }}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#040405]"
    >
      
      {/* 1. Base Pitch Obsidian Background */}
      <div className="absolute inset-0 bg-[#040405]" />

      {/* 2. Deep Warm Cream Ambient Core Glow (Darkened & Contained) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.20, 0.12],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[700px] w-[700px] rounded-full bg-[#F5EFEB] blur-[180px]"
      />

      {/* 3. Volumetric Rotated Cream Beam Container */}
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        animate={{
          opacity: [0.85, 0.98, 0.85],
          scale: [1.35, 1.45, 1.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute flex -rotate-[42deg] items-center gap-10 md:gap-14"
      >
        {/* Far Left Cream Beam */}
        <div className="h-[1200px] w-2 rounded-full bg-gradient-to-b from-transparent via-[#4D4238] to-transparent blur-[2px] opacity-30" />

        {/* Outer Left Cream Beam */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1350px] w-4 rounded-full bg-gradient-to-b from-transparent via-[#7A6B5C] to-transparent blur-[3px] opacity-50"
        />

        {/* Mid Left Cream Beam */}
        <motion.div
          animate={{ y: [12, -12, 12] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1450px] w-12 rounded-full bg-gradient-to-b from-transparent via-[#B3A290] to-transparent blur-[4px] opacity-75"
        />

        {/* 🌟 CENTER MAIN BEAM (Extra Wide Cream ~210px with Specular Spine) */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-[1650px] w-52 sm:w-60 rounded-full bg-gradient-to-b from-transparent via-[#F5EFEB] to-transparent blur-[6px] shadow-[0_0_90px_rgba(245,239,235,0.6)] flex items-center justify-center"
        >
          {/* Inner Specular Core Cream Spine */}
          <motion.div
            animate={{
              opacity: [0.8, 1, 0.8],
              scaleY: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-[1300px] w-16 rounded-full bg-gradient-to-b from-transparent via-[#FFFDF9] to-transparent blur-[2px]"
          />
        </motion.div>

        {/* Mid Right Cream Beam */}
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1450px] w-10 rounded-full bg-gradient-to-b from-transparent via-[#B3A290] to-transparent blur-[4px] opacity-75"
        />

        {/* Outer Right Cream Beam */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1350px] w-4 rounded-full bg-gradient-to-b from-transparent via-[#7A6B5C] to-transparent blur-[3px] opacity-50"
        />

        {/* Far Right Cream Beam */}
        <div className="h-[1200px] w-2 rounded-full bg-gradient-to-b from-transparent via-[#4D4238] to-transparent blur-[2px] opacity-30" />
      </motion.div>

      {/* 4. Deep Darkened Radial Vignette Overlay (Darker & More Contrast) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(4,4,5,0.6)_50%,#040405_85%)]" />

      {/* 5. Seamless bottom gradient fade into pitch black */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#040405] via-[#040405]/80 to-transparent pointer-events-none" />

      {/* 6. Subtle Matte Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </motion.div>
  );
}
