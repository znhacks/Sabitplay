"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function RaycastRaysBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 60, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-1, 1], [25, -25]);
  const parallaxY = useTransform(smoothY, [-1, 1], [20, -20]);

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
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#070809]">
      
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-[#070809]" />

      {/* 2. Deep Warm Cream Ambient Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[750px] w-[750px] rounded-full bg-[#F5EFEB] blur-[170px]"
      />

      {/* 3. Volumetric Rotated Beam Container in Warm Cream / Ivory / Champagne */}
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        animate={{
          opacity: [0.88, 1, 0.88],
          scale: [1.35, 1.42, 1.35],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute flex -rotate-[42deg] items-center gap-10 md:gap-12"
      >
        
        {/* Far Left Cream Beam */}
        <div className="h-[1100px] w-2 rounded-full bg-gradient-to-b from-transparent via-[#6B5E52] to-transparent blur-[2px] opacity-40" />

        {/* Outer Left Cream Beam */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1250px] w-4 rounded-full bg-gradient-to-b from-transparent via-[#998776] to-transparent blur-[3px] opacity-60"
        />

        {/* Mid Left Cream Beam */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1350px] w-12 rounded-full bg-gradient-to-b from-transparent via-[#C8B8A6] to-transparent blur-[4px] opacity-85"
        />

        {/* 🌟 CENTER MAIN BEAM (Extra Wide Cream / Ivory Beam ~200px, Radiant Glow) */}
        <motion.div
          animate={{
            y: [-18, 18, -18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-[1550px] w-48 sm:w-52 rounded-full bg-gradient-to-b from-transparent via-[#F5EFEB] to-transparent blur-[6px] shadow-[0_0_100px_rgba(245,239,235,0.7)] flex items-center justify-center"
        >
          {/* Inner Specular Core Cream Spine */}
          <motion.div
            animate={{
              opacity: [0.8, 1, 0.8],
              scaleY: [0.96, 1.04, 0.96]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-[1200px] w-14 rounded-full bg-gradient-to-b from-transparent via-[#FFFDF9] to-transparent blur-[2px]"
          />
        </motion.div>

        {/* Mid Right Cream Beam */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1350px] w-10 rounded-full bg-gradient-to-b from-transparent via-[#C8B8A6] to-transparent blur-[4px] opacity-85"
        />

        {/* Outer Right Cream Beam */}
        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-[1250px] w-4 rounded-full bg-gradient-to-b from-transparent via-[#998776] to-transparent blur-[3px] opacity-60"
        />

        {/* Far Right Cream Beam */}
        <div className="h-[1100px] w-2 rounded-full bg-gradient-to-b from-transparent via-[#6B5E52] to-transparent blur-[2px] opacity-40" />

      </motion.div>

      {/* 4. Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#070809_85%)]" />

      {/* 5. Subtle Matte Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
