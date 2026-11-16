"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-500"
    />
  );
}
