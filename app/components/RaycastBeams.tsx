"use client";

import React, { useEffect, useState } from "react";

export default function RaycastBeams() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animId: number;
    let step = 0;
    const loop = () => {
      step += 0.015;
      setOffsetY(Math.sin(step) * 12);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070809]">
      
      {/* 1. Exact SVG Diagonal Light Beams Rotated -42deg */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1600 1000"
      >
        <defs>
          {/* Main Vibrant Center Beam Gradient (transparent -> red -> transparent) */}
          <linearGradient id="mainBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c51636" stopOpacity="0" />
            <stop offset="18%" stopColor="#c51636" stopOpacity="0.4" />
            <stop offset="42%" stopColor="#ff4d4d" stopOpacity="0.95" />
            <stop offset="58%" stopColor="#ff4d4d" stopOpacity="0.95" />
            <stop offset="82%" stopColor="#c51636" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c51636" stopOpacity="0" />
          </linearGradient>

          {/* Supporting Flanking Beams Gradient */}
          <linearGradient id="sideBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c51636" stopOpacity="0" />
            <stop offset="22%" stopColor="#c51636" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ff4d4d" stopOpacity="0.75" />
            <stop offset="78%" stopColor="#c51636" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c51636" stopOpacity="0" />
          </linearGradient>

          {/* Specular Core Ridge Line Gradient (White highlight on center beam) */}
          <linearGradient id="specularGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ambient Outer Halo Filter */}
          <filter id="wideHalo" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>

        {/* Group centered at (800, 420) and rotated -42 degrees */}
        <g transform="translate(800, 420) rotate(-42)">
          
          {/* A. Wide Ambient Halo Pass behind all beams */}
          <g filter="url(#wideHalo)" opacity="0.6">
            <line x1="-190" y1="-850" x2="-190" y2="850" stroke="url(#sideBeamGrad)" strokeWidth="60" strokeLinecap="round" />
            <line x1="-90" y1="-950" x2="-90" y2="950" stroke="url(#sideBeamGrad)" strokeWidth="90" strokeLinecap="round" />
            <line x1="0" y1="-1050" x2="0" y2="1050" stroke="url(#mainBeamGrad)" strokeWidth="130" strokeLinecap="round" />
            <line x1="100" y1="-950" x2="100" y2="950" stroke="url(#sideBeamGrad)" strokeWidth="90" strokeLinecap="round" />
            <line x1="200" y1="-850" x2="200" y2="850" stroke="url(#sideBeamGrad)" strokeWidth="60" strokeLinecap="round" />
          </g>

          {/* B. Core Beams with Soft Glow */}
          <g filter="url(#softGlow)">
            {/* Outer Left Beam 3 */}
            <line
              x1="-280"
              y1="-650"
              x2="-280"
              y2="650"
              stroke="url(#sideBeamGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.35"
            />

            {/* Left Beam 2 */}
            <line
              x1="-180"
              y1="-800"
              x2="-180"
              y2="800"
              stroke="url(#sideBeamGrad)"
              strokeWidth="28"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Left Beam 1 */}
            <line
              x1="-90"
              y1="-950"
              x2="-90"
              y2="950"
              stroke="url(#sideBeamGrad)"
              strokeWidth="44"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* 🌟 Center Main Beam (Brightest & Thickest: 68px strokeWidth) */}
            <line
              x1="0"
              y1="-1100"
              x2="0"
              y2="1100"
              stroke="url(#mainBeamGrad)"
              strokeWidth="68"
              strokeLinecap="round"
              opacity="1.0"
            />

            {/* Specular White Line in center of main beam */}
            <line
              x1="0"
              y1="-800"
              x2="0"
              y2="800"
              stroke="url(#specularGrad)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* Right Beam 1 */}
            <line
              x1="90"
              y1="-950"
              x2="90"
              y2="950"
              stroke="url(#sideBeamGrad)"
              strokeWidth="44"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Right Beam 2 */}
            <line
              x1="180"
              y1="-800"
              x2="180"
              y2="800"
              stroke="url(#sideBeamGrad)"
              strokeWidth="28"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Outer Right Beam 3 */}
            <line
              x1="280"
              y1="-650"
              x2="280"
              y2="650"
              stroke="url(#sideBeamGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              opacity="0.35"
            />
          </g>

        </g>
      </svg>

      {/* 2. Radial Vignette Overlay (Transparent in center -> Solid #070809 at edges) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 45%, transparent 20%, rgba(7, 8, 9, 0.4) 50%, #070809 80%)"
        }}
      />

      {/* 3. Subtle Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

    </div>
  );
}
