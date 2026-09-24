"use client";

import React, { useState } from "react";
import { ArrowUpRight, Fish, Skull, Ghost, Play } from "lucide-react";

export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const games = [
    {
      id: "bocah-fishing",
      title: "Bocah Fishing",
      category: "simulation",
      badge: "Simulation • Cozy",
      status: "Playable on Web & Windows",
      tagline: "Cast your line, relax, and see what bites!",
      description: "A cozy, atmospheric lake fishing game where everything is bait! Hook junk, rusty batteries, or your freshly caught fish back onto the line to lure massive catches. Features a dynamic day-and-night cycle, unique anglers with passive traits, and a full fish almanac to complete.",
      coverImage: "https://img.itch.zone/aW1nLzMwMTQ2Mjc2LmpwZw==/original/rN5OkI.jpg",
      platforms: ["HTML5 Web", "Windows"],
      tags: ["Godot", "Cozy", "Fishing", "Simulation", "2D"],
      link: "https://sabitplay.itch.io/bocah-fishing",
      accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      icon: Fish
    },
    {
      id: "rustbond",
      title: "Rustbond",
      category: "horror",
      badge: "Visual Novel • Horror",
      status: "Windows & Android APK",
      tagline: "Can you survive?",
      description: "A Psychological Horror Visual Novel where you’re trapped in a ruined laboratory with Ashy, a mysterious yandere girl who claims to have spread a deadly plague. Survive deadly Q&A sessions, manipulate emotions, calm her anger, and uncover multiple tragic or secret endings.",
      coverImage: "https://img.itch.zone/aW1nLzI5MzkxMzYwLmpwZw==/original/7qABb1.jpg",
      platforms: ["Windows", "Android APK"],
      tags: ["Psychological Horror", "Visual Novel", "Yandere", "Dating Sim"],
      link: "https://sabitplay.itch.io/rustbond",
      accentColor: "from-rose-500/20 via-red-900/10 to-transparent",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      icon: Skull
    },
    {
      id: "finalnightmare",
      title: "Final Nightmare",
      category: "horror",
      badge: "Puzzle • Platformer",
      status: "Windows Download",
      tagline: "Is it even real....?",
      description: "An atmospheric 2D pixel-art horror puzzle platformer where you must navigate surreal and dangerous nightmare dimensions. Solve intricate environmental puzzles, overcome deadly hazards, and escape the nightmare.",
      coverImage: "https://img.itch.zone/aW1nLzI0MjU3NjM5LnBuZw==/original/q3nazN.png",
      platforms: ["Windows", "Unity"],
      tags: ["Unity", "Pixel Art", "Horror", "Puzzle", "Platformer"],
      link: "https://sabitplay.itch.io/finalnightmare",
      accentColor: "from-amber-500/20 via-orange-950/10 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      icon: Ghost
    }
  ];

  const filteredGames = activeFilter === "all"
    ? games
    : games.filter((g) => g.category === activeFilter);

  return (
    <section id="our-projects" className="relative py-32 px-4 max-w-6xl mx-auto z-10 scroll-mt-20">
      
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(245,239,235,0.03)_0%,rgba(4,4,5,0)_70%)] blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] [text-shadow:0_4px_20px_rgba(0,0,0,0.8)]">
            Our Project
          </h2>

          <p className="text-base sm:text-lg text-[#D8C5B2] mt-3 max-w-lg leading-relaxed">
            Explore and play our published games available now on itch.io.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#090A0C]/80 border border-[#F5EFEB]/15 self-start md:self-auto backdrop-blur-xl">
          {[
            { id: "all", label: "All Games" },
            { id: "simulation", label: "Simulation" },
            { id: "horror", label: "Horror & Story" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#F5EFEB] text-[#040405] font-bold shadow-[0_0_15px_rgba(245,239,235,0.3)]"
                  : "text-[#BAA28B] hover:text-[#FFFDF9] hover:bg-[#F5EFEB]/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredGames.map((game) => {
          const Icon = game.icon;
          return (
            <div
              key={game.id}
              className="rounded-3xl bg-[#08080b]/90 border border-[#F5EFEB]/15 hover:border-[#F5EFEB]/40 flex flex-col justify-between group relative overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-5 sm:p-6"
            >
              {/* Colored ambient glow header */}
              <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${game.accentColor} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="relative z-10">
                
                {/* Game Cover Image Thumbnail */}
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 border border-[#F5EFEB]/10 bg-[#040405] shadow-lg group-hover:border-[#F5EFEB]/30 transition-all"
                >
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-transparent to-transparent opacity-60" />
                </a>

                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-semibold ${game.badgeColor}`}>
                    {game.badge}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#F5EFEB]">
                    <Icon className="w-3.5 h-3.5 text-[#F5EFEB]" />
                  </div>
                </div>

                {/* Title */}
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-black text-[#FFFDF9] mb-1 group-hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>{game.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#A89480] group-hover:text-[#F5EFEB] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                </a>

                {/* Tagline */}
                <p className="text-xs font-mono text-[#D8C5B2] italic mb-3">
                  &ldquo;{game.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#BAA28B] leading-relaxed mb-6 line-clamp-3">
                  {game.description}
                </p>
              </div>

              {/* Card Footer: Platforms & Play Button */}
              <div className="relative z-10 pt-4 border-t border-[#F5EFEB]/10 flex flex-col gap-3.5">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#040405] text-[#A89480] border border-[#F5EFEB]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Play on itch.io Button */}
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#fa5c5c]/15 hover:bg-[#fa5c5c] text-[#fa5c5c] hover:text-white border border-[#fa5c5c]/30 hover:border-transparent text-xs font-bold transition-all duration-200 shadow-sm group-hover:shadow-[0_0_20px_rgba(250,92,92,0.35)]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play on itch.io</span>
                </a>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
