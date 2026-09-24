"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import WhoAreWe from "@/app/components/WhoAreWe";
import OurTeam from "@/app/components/OurTeam";
import OurProjects from "@/app/components/OurProjects";
import QuoteSection from "@/app/components/QuoteSection";
import StudioFooter from "@/app/components/StudioFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#040405] text-[#F5EFEB] selection:bg-[#F5EFEB]/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <OurTeam />
      <OurProjects />
      <QuoteSection />
      <StudioFooter />
    </main>
  );
}
