"use client";

import React from "react";

interface FooterProps {
  onOpenCommand: () => void;
}

export default function Footer({ onOpenCommand }: FooterProps) {
  return (
    <footer className="border-t border-[#F5EFEB]/10 bg-[#070809] pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
                <path fill="#F5EFEB" fillRule="evenodd" d="M12 30.99V36L-.01 23.99l2.516-2.499zM17.01 36H12l12.011 12.01 2.506-2.505zm28.487-9.497L48 24 24 0l-2.503 2.503L30.98 12h-5.732l-6.62-6.614-2.506 2.503 4.122 4.122h-2.869v18.625H36V27.77l4.122 4.122 2.503-2.506L36 22.747v-5.732zM13.253 10.747l-2.503 2.506 2.686 2.686 2.503-2.506zm21.314 21.314-2.495 2.503 2.686 2.686 2.506-2.503zM7.878 16.121l-2.503 2.504L12 25.253v-5.012zM27.756 36h-5.009l6.628 6.625 2.503-2.503z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-base text-[#F5EFEB]">Raycast</span>
            </div>
            <p className="text-xs text-[#D8C5B2] max-w-sm leading-relaxed mb-4">
              An extendable launcher made for developers, creators, and teams who value speed, craftsmanship, and delight.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5EFEB]">
              <span className="w-2 h-2 rounded-full bg-[#F5EFEB] animate-pulse shadow-[0_0_6px_#F5EFEB]" />
              <span>All Systems Operational</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-[#BAA28B] uppercase tracking-wider block mb-3">Product</span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#store" className="hover:text-[#F5EFEB] transition-colors">Store</a></li>
              <li><a href="#pro" className="hover:text-[#F5EFEB] transition-colors">Pro Plans</a></li>
              <li><a href="#ai" className="hover:text-[#F5EFEB] transition-colors">Raycast AI</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">iOS App</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">Windows Beta</a></li>
              <li><a href="#pricing" className="hover:text-[#F5EFEB] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs text-[#BAA28B] uppercase tracking-wider block mb-3">Developers</span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#developer" className="hover:text-[#F5EFEB] transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">GitHub Repo</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">Extension Guidelines</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">Discord Community</a></li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs text-[#BAA28B] uppercase tracking-wider block mb-3">Company</span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#F5EFEB] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#F5EFEB]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#BAA28B]">
          <div>
            © {new Date().getFullYear()} Raycast Technologies Inc. Sabitplay Studio edition.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F5EFEB] transition-colors">Twitter</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F5EFEB] transition-colors">GitHub</a>
            <span>•</span>
            <a href="#" className="hover:text-[#F5EFEB] transition-colors">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
