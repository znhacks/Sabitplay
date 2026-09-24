"use client";

import React from "react";
import { Code2 } from "lucide-react";

export default function DeveloperSDK() {
  return (
    <section id="developer" className="py-24 px-4 max-w-7xl mx-auto border-t border-[#F5EFEB]/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full announcement-pill text-[11px] font-mono text-[#F5EFEB] mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#F5EFEB]" />
            <span>EXTENSIBLE DEVELOPER API</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5EFEB] mb-4">
            Built by developers, for developers.
          </h2>
          <p className="text-base text-[#D8C5B2] leading-relaxed mb-6">
            Build bespoke commands and share them with your team or publish to the Store using standard React, TypeScript, and Node.js.
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#EADDCF]">
              ✓ React Components
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#EADDCF]">
              ✓ TypeScript First
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#EADDCF]">
              ✓ Native Performance
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-3xl raycast-card p-6 font-mono text-xs text-neutral-300 shadow-2xl overflow-x-auto">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F5EFEB]/10 text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EADDCF]/80" />
              <span className="w-3 h-3 rounded-full bg-[#D8C5B2]/80" />
              <span className="w-3 h-3 rounded-full bg-[#BAA28B]/80" />
              <span className="ml-2 text-[#EADDCF]">src/search-issues.tsx</span>
            </div>
            <span className="text-[#BAA28B]">TypeScript React</span>
          </div>

          <pre className="leading-relaxed text-[#F5EFEB]">
            <code>
              {String.raw`import { List, ActionPanel, Action } from "@raycast/api";

export default function Command() {
  return (
    <List searchBarPlaceholder="Search studio issues...">
      <List.Item
        icon="🚀"
        title="Deploy Fluid Shaders to Edge"
        actions={
          <ActionPanel>
            <Action.CopyToClipboard content="https://raycast.com" />
          </ActionPanel>
        }
      />
    </List>
  );
}`}
            </code>
          </pre>
        </div>

      </div>
    </section>
  );
}
