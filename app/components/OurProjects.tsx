"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Skull, Ghost, Play, Shield, Trophy, Activity, HeartCrack } from "lucide-react";

export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const games = [
    {
      id: "bocah-fishing",
      title: "Bocah Fishing",
      category: "simulation",
      badge: "Cozy Simulation",
      isChampion: true,
      championBadge: "🏆 Champion • Microjam Fishing 065",
      accolades: [
        { icon: "🥇", label: "Top 1 Made with Ziva" },
        { icon: "🎖️", label: "Top 4 Overall Ranking" },
      ],
      status: "Playable on Web & Windows",
      tagline: "Cast your line, relax, and see what bites!",
      description: "An award-winning cozy lake fishing adventure where everything is bait! Hook junk, rusty batteries, or your freshly caught fish back onto the line to lure massive catches. Features dynamic day-and-night cycles and an extensive fish almanac.",
      coverImage: "https://img.itch.zone/aW1nLzMwMTQ2Mjc2LmpwZw==/original/rN5OkI.jpg",
      platforms: ["HTML5 Web", "Windows"],
      tags: ["Microjam 065", "Godot", "Cozy", "Fishing", "Champion"],
      link: "https://sabitplay.itch.io/bocah-fishing",
      accentColor: "from-amber-500/25 via-cyan-500/10 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/25",
      icon: Trophy,
    },
    {
      id: "still-her",
      title: "Still Her?",
      category: "horror",
      badge: "Micro Jam 066 • Narrative",
      status: "Playable in Browser",
      tagline: "Can't live with her. Can't live without her.",
      description: "A cinematic psychological narrative survival and dialogue simulator exploring the claustrophobic boundaries between love, obsession, and toxic codependency inside a sealed bunker with your infected partner, Hana.",
      coverImage: "https://img.itch.zone/aW1nLzMwNTMyMDY2LmpwZw==/original/HAkeLf.jpg",
      platforms: ["HTML5 Web", "Mobile / Browser"],
      tags: ["Micro Jam 066", "Psychological Horror", "Interactive Fiction", "Story Rich"],
      link: "https://sabitplay.itch.io/still-her",
      accentColor: "from-emerald-500/20 via-green-950/10 to-transparent",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      icon: HeartCrack,
    },
    {
      id: "keepie",
      title: "Keepie Uppie",
      category: "action",
      badge: "T-Lander Jam • Arcade Sports",
      status: "Playable in Browser",
      tagline: "Keep the ball in the air!",
      description: "A fast-paced, addictive 2D football freestyle juggling challenge! Test your reflexes, calculate dynamic ball physics based on foot contact points, control the rhythm, and keep the streak alive.",
      coverImage: "https://img.itch.zone/aW1nLzMwNDI1MDI2LnBuZw==/original/75wgH6.png",
      platforms: ["HTML5 Web", "Mobile / Touch"],
      tags: ["T-Lander Jam", "Godot", "Arcade", "Football", "Physics"],
      link: "https://sabitplay.itch.io/keepie",
      accentColor: "from-sky-500/20 via-blue-950/10 to-transparent",
      badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      icon: Activity,
    },
    {
      id: "last-gate",
      title: "Last Gate",
      category: "action",
      badge: "Action • Castle Defense",
      status: "Playable on Web & Mobile",
      tagline: "The kingdom's last line of defense rests in your hands!",
      description: "A fast-paced 4-lane reflex castle defense game where you deflect demon fireballs into explosive chain reactions, unleash powerful character ultimates with Felix & Mella, and shepherd fleeing civilians to safety.",
      coverImage: "https://img.itch.zone/aW1nLzMwNDA0NDM1LmpwZw==/original/hlYDAP.jpg",
      platforms: ["HTML5 Web", "Mobile / Touch"],
      tags: ["Godot", "Action", "Arcade", "Castle Defense", "2D"],
      link: "https://sabitplay.itch.io/last-gate",
      accentColor: "from-orange-500/20 via-amber-950/10 to-transparent",
      badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
      icon: Shield,
    },
    {
      id: "rustbond",
      title: "Rustbond",
      category: "horror",
      badge: "Visual Novel • Horror",
      status: "Windows & Android APK",
      tagline: "Can you survive?",
      description: "A Psychological Horror Visual Novel where you're trapped in a ruined laboratory with Ashy, a mysterious yandere girl who claims to have spread a deadly plague. Survive deadly Q&A sessions, manipulate emotions, calm her anger, and uncover multiple endings.",
      coverImage: "https://img.itch.zone/aW1nLzI5MzkxMzYwLmpwZw==/original/7qABb1.jpg",
      platforms: ["Windows", "Android APK"],
      tags: ["Psychological Horror", "Visual Novel", "Yandere", "Dating Sim"],
      link: "https://sabitplay.itch.io/rustbond",
      accentColor: "from-rose-500/20 via-red-900/10 to-transparent",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      icon: Skull,
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
      accentColor: "from-purple-500/20 via-violet-950/10 to-transparent",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      icon: Ghost,
    },
  ];

  const filteredGames = activeFilter === "all"
    ? games
    : games.filter((g) => g.category === activeFilter);

  return (
    <section id="our-projects" className="relative py-24 sm:py-32 px-4 max-w-7xl mx-auto z-10 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
            Our Games
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#D8C5B2] mt-2.5 max-w-lg leading-relaxed">
            Explore and play our published games available now on itch.io.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#090A0C] border border-[#F5EFEB]/15 self-start md:self-auto">
          {[
            { id: "all", label: "All Games (6)" },
            { id: "simulation", label: "Cozy & Simulation" },
            { id: "action", label: "Action & Sports" },
            { id: "horror", label: "Horror & Story" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#F5EFEB] text-[#040405] font-bold shadow-[0_2px_10px_rgba(245,239,235,0.25)]"
                  : "text-[#BAA28B] hover:text-[#FFFDF9] hover:bg-[#F5EFEB]/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Game Cards Grid (3 columns on large screens for balanced 6-game layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredGames.map((game) => {
          const Icon = game.icon;
          return (
            <div
              key={game.id}
              className={`rounded-3xl bg-[#09090d] border flex flex-col justify-between group relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.8)] p-5 sm:p-6 ${
                game.isChampion
                  ? "border-amber-500/35 shadow-[0_0_25px_rgba(245,158,11,0.08)] hover:border-amber-500/50"
                  : "border-[#F5EFEB]/15 hover:border-[#F5EFEB]/35"
              }`}
            >
              <div className={`absolute top-0 inset-x-0 h-36 bg-gradient-to-b ${game.accentColor} pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity`} />

              <div className="relative z-10">
                {/* Game Cover Image Thumbnail */}
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 border border-[#F5EFEB]/10 bg-[#040405] shadow-md group-hover:border-[#F5EFEB]/30 transition-all"
                >
                  <Image
                    src={game.coverImage}
                    alt={game.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent opacity-60" />
                </a>

                {/* Champion Accolades Banner if Champion */}
                {game.isChampion && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold mb-2">
                      <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{game.championBadge}</span>
                    </div>
                    {game.accolades && (
                      <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-[11px] font-mono">
                        {game.accolades.map((acc, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-amber-200">
                            <span>{acc.icon}</span>
                            <span className="font-semibold">{acc.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

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
                  className="text-xl sm:text-2xl font-black text-[#FFFDF9] mb-1 group-hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>{game.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#A89480] group-hover:text-[#F5EFEB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
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

                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 active:scale-[0.98] ${
                    game.isChampion
                      ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black shadow-[0_2px_15px_rgba(245,158,11,0.3)] hover:brightness-110"
                      : "bg-[#fa5c5c]/15 hover:bg-[#fa5c5c] text-[#fa5c5c] hover:text-white border border-[#fa5c5c]/30 hover:border-transparent"
                  }`}
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
