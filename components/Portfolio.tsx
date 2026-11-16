"use client";

import Image from "next/image";
import { projects } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";

export function Portfolio() {
  return (
    <section id="work" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium text-violet-400">Work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">A few examples of products we have helped bring to life. (Placeholder case studies)</p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-medium text-white">{p.title}</h3>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 px-4">
                      {p.tags.map((t) => <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-zinc-200">{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-400">{t}</span>)}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
