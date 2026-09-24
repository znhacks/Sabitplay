"use client";

import React, { useEffect, useRef, useState } from "react";

interface InkDrop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
  growth: number;
  particles: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }[];
}

export default function InkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dropsRef = useRef<InkDrop[]>([]);
  const mouseRef = useRef<{ x: number; y: number; moved: boolean }>({ x: 0, y: 0, moved: false });
  const [inkMode, setInkMode] = useState<"ambient" | "interactive" | "heavy">("ambient");
  const [stats, setStats] = useState({ dropCount: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    let spawnTimer = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createDrop = (x: number, y: number, isBurst = false) => {
      const maxR = isBurst ? 140 + Math.random() * 80 : 70 + Math.random() * 50;
      const particleCount = isBurst ? 16 : 8;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
        const speed = (0.6 + Math.random() * 1.4) * (isBurst ? 2 : 1);
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 3,
          opacity: 0.8 + Math.random() * 0.2,
        });
      }

      dropsRef.current.push({
        x,
        y,
        radius: 2,
        maxRadius: maxR,
        opacity: isBurst ? 0.75 : 0.45,
        speed: 0.015,
        growth: isBurst ? 1.8 : 0.8,
        particles,
      });

      // Keep array reasonable
      if (dropsRef.current.length > 40) {
        dropsRef.current.shift();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, moved: true };
      // Occasional ink drag
      if (Math.random() < 0.15) {
        createDrop(e.clientX, e.clientY, false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      createDrop(e.clientX, e.clientY, true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Initial drops for immediate atmosphere
    for (let i = 0; i < 4; i++) {
      createDrop(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight * 0.7,
        false
      );
    }

    const render = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Ambient drop spawner
      spawnTimer += delta;
      const spawnInterval = inkMode === "heavy" ? 900 : inkMode === "ambient" ? 2200 : 4000;
      if (spawnTimer > spawnInterval) {
        spawnTimer = 0;
        createDrop(
          Math.random() * window.innerWidth,
          Math.random() * (window.innerHeight * 0.85) + 50,
          false
        );
      }

      // Draw and update drops
      for (let i = dropsRef.current.length - 1; i >= 0; i--) {
        const drop = dropsRef.current[i];

        // Expand radius and fade out
        drop.radius += drop.growth;
        drop.opacity -= drop.speed * (drop.radius / drop.maxRadius + 0.3);

        if (drop.opacity <= 0.01 || drop.radius >= drop.maxRadius) {
          dropsRef.current.splice(i, 1);
          continue;
        }

        // 1. Organic dispersion gradient (outer halo)
        const outerGrad = ctx.createRadialGradient(
          drop.x,
          drop.y,
          0,
          drop.x,
          drop.y,
          Math.max(drop.radius, 1)
        );
        outerGrad.addColorStop(0, `rgba(255, 255, 255, ${(drop.opacity * 0.35).toFixed(3)})`);
        outerGrad.addColorStop(0.35, `rgba(240, 240, 255, ${(drop.opacity * 0.18).toFixed(3)})`);
        outerGrad.addColorStop(0.7, `rgba(220, 230, 255, ${(drop.opacity * 0.06).toFixed(3)})`);
        outerGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Crisp inner ring (Raycast style ink boundary)
        const innerGrad = ctx.createRadialGradient(
          drop.x,
          drop.y,
          drop.radius * 0.5,
          drop.x,
          drop.y,
          drop.radius * 0.95
        );
        innerGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        innerGrad.addColorStop(0.8, `rgba(255, 255, 255, ${(drop.opacity * 0.25).toFixed(3)})`);
        innerGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = `rgba(255, 255, 255, ${(drop.opacity * 0.15).toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius * 0.85, 0, Math.PI * 2);
        ctx.stroke();

        // 3. Ink Bloom droplets & particles
        for (const p of drop.particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.opacity -= 0.008;

          if (p.opacity > 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${(p.opacity * drop.opacity * 1.5).toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [inkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Background Layer */}
      <div className="absolute inset-0 bg-[#050507] [background-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
      
      {/* Subtle Noise / Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }} 
      />

      {/* Live White Ink Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Luminous Ambient Corner Highlights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.035] blur-[120px] rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full" />

      {/* Floating Ink Control Badge in bottom-left */}
      <div className="absolute bottom-5 left-5 pointer-events-auto hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full raycast-glass text-[11px] text-zinc-400 font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Ink Sim:</span>
        <button
          onClick={() => setInkMode("ambient")}
          className={`px-2 py-0.5 rounded transition ${
            inkMode === "ambient" ? "bg-white/20 text-white" : "hover:text-zinc-200"
          }`}
        >
          Zen
        </button>
        <button
          onClick={() => setInkMode("heavy")}
          className={`px-2 py-0.5 rounded transition ${
            inkMode === "heavy" ? "bg-white/20 text-white" : "hover:text-zinc-200"
          }`}
        >
          Rain
        </button>
        <button
          onClick={() => setInkMode("interactive")}
          className={`px-2 py-0.5 rounded transition ${
            inkMode === "interactive" ? "bg-white/20 text-white" : "hover:text-zinc-200"
          }`}
        >
          Touch
        </button>
      </div>
    </div>
  );
}
