"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { hero } from "@/lib/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          animate={reduce ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-violet-600/30 blur-[120px]"
        />
        <motion.div
          aria-hidden
          animate={reduce ? {} : { x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 top-40 h-96 w-96 rounded-full bg-indigo-600/25 blur-[130px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-violet-400 pulse-dot" />
            {hero.badge}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline[0]} <span className="text-shimmer">{hero.headline[1]}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg text-zinc-400">
            {hero.subheading}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href={hero.primaryCta.href} className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500 hover:scale-[1.03] active:scale-[0.98]">
              {hero.primaryCta.label}
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={hero.secondaryCta.href} className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]">
              {hero.secondaryCta.label}
            </a>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-6 text-sm text-zinc-500">{hero.trust}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-white"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
                <div className="text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="relative hidden lg:block">
          <motion.div animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 shadow-2xl shadow-violet-900/20">
            <div className="mb-3 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-green-400/70"/></div>
            <div className="space-y-3 rounded-xl bg-[#0b1020] p-5">
              <div className="h-3 w-40 rounded bg-violet-500/30" />
              <div className="grid grid-cols-3 gap-3">
                {[1,2,3].map(i => <div key={i} className="h-20 rounded-lg bg-white/5 border border-white/5" />)}
              </div>
              <div className="h-28 rounded-lg bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-white/5" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-lg bg-white/5" />
                <div className="h-16 rounded-lg bg-white/5" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-xs text-zinc-300 shadow-lg">
              <span className="text-violet-400 font-medium">MVP</span> launched in 4 weeks
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
