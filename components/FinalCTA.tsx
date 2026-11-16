"use client";

import { motion } from "framer-motion";
import { cta } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-700/30 via-indigo-700/20 to-violet-700/30 px-8 py-16 text-center">
          <motion.div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-500/30 blur-[100px]" animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
          <h2 className="relative text-3xl font-semibold text-white sm:text-4xl">{cta.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-zinc-300">{cta.subtitle}</p>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-[#05060b] shadow-lg shadow-violet-900/30">
            {cta.button}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
