"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/lib/animations";
import type { ReactNode } from "react";

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0.05,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren } } }}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
