"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}
    >
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.25), transparent 40%)`,
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
