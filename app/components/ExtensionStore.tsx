"use client";

import React, { useState } from "react";
import { Search, Download, ArrowUpRight, Grid } from "lucide-react";

export default function ExtensionStore() {
  const [search, setSearch] = useState("");

  const extensions = [
    { name: "GitHub", author: "Raycast", icon: "🐙", downloads: "340k", desc: "Search repositories, notifications & pull requests" },
    { name: "Linear", author: "Linear Team", icon: "📐", downloads: "210k", desc: "Create, view and update issues at lightspeed" },
    { name: "Spotify", author: "Mattis", icon: "🟢", downloads: "180k", desc: "Full playback controls, playlists & lyrics" },
    { name: "Obsidian", author: "Kepano", icon: "💎", downloads: "150k", desc: "Append notes, search vault and daily journals" },
    { name: "1Password", author: "1Password", icon: "🔑", downloads: "190k", desc: "Search credentials and auto-fill passkeys" },
    { name: "Figma", author: "Figma", icon: "🎨", downloads: "120k", desc: "Search files, components and project assets" },
    { name: "Notion", author: "Raycast", icon: "📝", downloads: "280k", desc: "Search pages, databases and quick capture" },
    { name: "Slack", author: "Raycast", icon: "💬", downloads: "160k", desc: "Set status, snooze notifications and send DMs" }
  ];

  const filtered = extensions.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase()) || 
    e.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="store" className="py-24 px-4 max-w-7xl mx-auto border-t border-[#F5EFEB]/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full announcement-pill text-[11px] font-mono text-[#F5EFEB] mb-3">
            <Grid className="w-3.5 h-3.5 text-[#F5EFEB]" />
            <span>RAYCAST STORE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFEB]">
            1,500+ Community Extensions.
          </h2>
          <p className="text-base text-[#D8C5B2] mt-2 max-w-xl">
            Connect all your favorite daily tools. Built with open-source TypeScript APIs.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search extensions..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5EFEB] placeholder-neutral-500 focus:outline-none focus:border-[#F5EFEB]/30 font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((ext) => (
          <div
            key={ext.name}
            className="p-5 rounded-2xl raycast-card flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#F5EFEB]/10 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  {ext.icon}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#BAA28B]">
                  <Download className="w-3 h-3" />
                  <span>{ext.downloads}</span>
                </div>
              </div>

              <h4 className="text-base font-semibold text-[#F5EFEB] group-hover:text-[#FFFDF9] transition-colors flex items-center justify-between">
                <span>{ext.name}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#F5EFEB] transition-colors" />
              </h4>
              <p className="text-xs text-[#BAA28B] font-mono mb-2">by {ext.author}</p>
              <p className="text-xs text-[#D8C5B2] leading-relaxed">
                {ext.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Install Extension</span>
              <span className="text-[#F5EFEB] font-semibold">Free</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
