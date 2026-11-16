"use client";

import { FiCheck } from "react-icons/fi";
import { pricing } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium text-violet-400">Pricing</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent packages</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">Choose a starting point that fits your stage. All pricing is placeholder - contact us for a quote.</p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className={`relative h-full rounded-2xl border p-7 ${p.featured ? "border-violet-500/50 bg-violet-500/[0.07] shadow-lg shadow-violet-900/20" : "border-white/10 bg-white/[0.03]"}`}>
                {p.featured && <span className="absolute -top-3 left-6 rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">Most popular</span>}
                <h3 className="text-xl font-medium text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-5 text-2xl font-semibold text-white">{p.price}</div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                      <FiCheck className="mt-0.5 h-4 w-4 flex-none text-violet-400" />{f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-medium transition ${p.featured ? "bg-violet-600 text-white hover:bg-violet-500" : "border border-white/15 text-white hover:bg-white/5"}`}>
                  Get in touch
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
