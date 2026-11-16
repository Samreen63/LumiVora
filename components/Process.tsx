"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium text-violet-400">How we work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">A clear path from idea to launch</h2>
        </FadeIn>
        <div ref={ref} className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2" />
          <motion.div
            style={{ scaleY: reduce ? 1 : scaleY, originY: 0 }}
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-500 to-indigo-500 sm:left-1/2"
          />
          <div className="space-y-12">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 sm:gap-10 ${i % 2 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="hidden w-1/2 sm:block" />
                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-violet-400/40 bg-[#05060b] text-xs font-semibold text-violet-300 sm:left-1/2">
                  {p.step}
                </div>
                <div className="ml-10 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:ml-0 sm:w-1/2">
                  <h3 className="mb-2 text-lg font-medium text-white">{p.title}</h3>
                  <p className="text-sm text-zinc-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
