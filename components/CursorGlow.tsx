"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(fine.matches && window.innerWidth >= 768);
    update();
    fine.addEventListener("change", update);
    window.addEventListener("resize", update);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => {
      fine.removeEventListener("change", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("mousemove", move);
    };
  }, [reduce]);

  if (!enabled) return null;
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[5] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.2 }}
      aria-hidden
    />
  );
}
