"use client";

import React, { useEffect, useState } from "react";
import { Search, Sparkles, Gamepad2, Terminal, Droplet, Layers, Zap, X, Code2, Sliders, Check } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerInkSplash?: () => void;
}

export default function CommandPalette({ isOpen, onClose, onTriggerInkSplash }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeItem, setActiveItem] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const actions = [
    {
      id: "splash-ink",
      title: "Trigger Obsidian Cream Flow",
      category: "Fluid Simulation",
      icon: Droplet,
      shortcut: "⌘I",
      action: () => {
        if (onTriggerInkSplash) onTriggerInkSplash();
        showToast("Cream fluid dispersion triggered!");
        onClose();
      }
    },
    {
      id: "explore-games",
      title: "Explore Sabitplay Games Roster",
      category: "Projects",
      icon: Gamepad2,
      shortcut: "⌘G",
      action: () => {
        const el = document.getElementById("showcase");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "open-engine",
      title: "Launch Sabit Core WebGPU Engine",
      category: "Developer Tools",
      icon: Terminal,
      shortcut: "⌘E",
      action: () => {
        const el = document.getElementById("developer");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "ink-lab",
      title: "Open Interactive Ink Sandbox",
      category: "Lab & Physics",
      icon: Sliders,
      shortcut: "⌘L",
      action: () => {
        const el = document.getElementById("lab");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveItem((prev) => (prev + 1) % filteredActions.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveItem((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === "Enter" && filteredActions[activeItem]) {
          e.preventDefault();
          filteredActions[activeItem].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, activeItem, onClose]);

  if (!isOpen) {
    return toastMessage ? (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl raycast-card border border-[#F5EFEB]/20 text-[#F5EFEB] text-xs font-mono shadow-2xl animate-fade-in">
        <Check className="w-4 h-4 text-emerald-400" />
        <span>{toastMessage}</span>
      </div>
    ) : null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-2xl bg-[#0c0c0e]/95 border border-[#F5EFEB]/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(245,239,235,0.1)] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#F5EFEB]/10">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveItem(0);
            }}
            placeholder="Search commands, studio engines, cream physics..."
            className="w-full bg-transparent text-sm text-[#F5EFEB] placeholder-neutral-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-[#F5EFEB] hover:bg-[#F5EFEB]/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-neutral-500">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredActions.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === activeItem;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setActiveItem(index)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                    isSelected
                      ? "bg-[#F5EFEB]/15 text-[#FFFDF9] border border-[#F5EFEB]/20 shadow-sm"
                      : "text-[#D8C5B2] hover:bg-[#F5EFEB]/5 hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? "bg-[#F5EFEB]/25 text-[#FFFDF9]" : "bg-white/5 text-[#D8C5B2]"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#F5EFEB]">{item.title}</div>
                      <div className="text-[10px] text-[#BAA28B]">{item.category}</div>
                    </div>
                  </div>
                  <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#F5EFEB]/10 border border-[#F5EFEB]/20 text-[#F5EFEB]">
                    {item.shortcut}
                  </kbd>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-[#F5EFEB]/10 bg-black/40 text-[11px] text-[#BAA28B] font-mono">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">↓</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">↵</kbd>
          </div>
          <div>Sabitplay Command Core</div>
        </div>
      </div>
    </div>
  );
}
