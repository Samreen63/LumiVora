"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium text-violet-400">Testimonials</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">What clients say</h2>
        </FadeIn>
        <div className="mx-auto max-w-3xl">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
              >
                <p className="text-lg text-zinc-200">“{testimonials[index].quote}”</p>
                <div className="mt-6">
                  <div className="font-medium text-white">{testimonials[index].name}</div>
                  <div className="text-sm text-zinc-500">{testimonials[index].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-violet-500" : "w-2.5 bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
