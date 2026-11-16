"use client";

import { FiLayers, FiZap, FiGlobe, FiPenTool, FiServer, FiTool } from "react-icons/fi";
import { services } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const icons: Record<string, any> = { Layers: FiLayers, Rocket: FiZap, Globe: FiGlobe, Palette: FiPenTool, Server: FiServer, Wrench: FiTool };

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium text-violet-400">Services</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to launch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">From idea to production, we handle design, development, and support for your product.</p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon] || FiLayers;
            return (
              <StaggerItem key={s.title}>
                <SpotlightCard className="h-full p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
