"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Skull,
  Ghost,
  Play,
  Shield,
  Activity,
  HeartCrack,
  Gamepad2,
  Moon,
} from "lucide-react";
import { GameProject, FALLBACK_GAMES } from "@/app/lib/games";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Skull,
  Ghost,
  HeartCrack,
  Activity,
  Gamepad2,
  Moon,
};

interface OurProjectsProps {
  initialGames?: GameProject[];
}

export default function OurProjects({ initialGames }: OurProjectsProps) {
  const games = initialGames && initialGames.length > 0 ? initialGames : FALLBACK_GAMES;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredGames =
    activeFilter === "all"
      ? games
      : games.filter((g) => g.category === activeFilter);

  return (
    <section id="our-projects" className="relative py-24 sm:py-32 px-4 max-w-7xl mx-auto z-10 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa5c5c]/10 border border-[#fa5c5c]/25 text-[#fa5c5c] text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fa5c5c]" />
            <span>Synced with itch.io</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#FFFDF9] [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
            Our Games
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#D8C5B2] mt-2.5 max-w-lg leading-relaxed">
            Explore and play our published games available now on itch.io.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#090A0C] border border-[#F5EFEB]/15 self-start md:self-auto">
          {[
            { id: "all", label: `All Games (${games.length})` },
            { id: "simulation", label: "Cozy & Simulation" },
            { id: "action", label: "Action & Sports" },
            { id: "horror", label: "Horror & Story" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFEB] ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredGames.map((game) => {
          const Icon =
            game.iconName && iconMap[game.iconName]
              ? iconMap[game.iconName]
              : Gamepad2;

          return (
            <div
              key={game.id}
              className="rounded-3xl bg-[#09090d] border border-[#F5EFEB]/15 hover:border-[#F5EFEB]/35 flex flex-col justify-between group relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.8)] p-5 sm:p-6"
            >
              <div
                className={`absolute top-0 inset-x-0 h-36 bg-gradient-to-b ${game.accentColor} pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity`}
              />

              <div className="relative z-10">
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 border border-[#F5EFEB]/10 bg-[#040405] shadow-md group-hover:border-[#F5EFEB]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa5c5c]"
                >
                  {game.coverImage ? (
                    <Image
                      src={game.coverImage}
                      alt={game.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-500 font-mono text-xs">
                      No Preview
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent opacity-60" />
                </a>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-semibold ${game.badgeColor}`}
                  >
                    {game.badge}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F5EFEB]/5 border border-[#F5EFEB]/10 flex items-center justify-center text-[#F5EFEB]">
                    <Icon className="w-3.5 h-3.5 text-[#F5EFEB]" />
                  </div>
                </div>

                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-black text-[#FFFDF9] mb-1 group-hover:text-white flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>{game.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#A89480] group-hover:text-[#F5EFEB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                <p className="text-xs font-mono text-[#D8C5B2] italic mb-3">
                  &ldquo;{game.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#BAA28B] leading-relaxed mb-6 line-clamp-3">
                  {game.description}
                </p>
              </div>

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
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 active:scale-[0.98] bg-[#fa5c5c]/15 hover:bg-[#fa5c5c] text-[#fa5c5c] hover:text-white border border-[#fa5c5c]/30 hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fa5c5c]"
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
