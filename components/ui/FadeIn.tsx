"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
