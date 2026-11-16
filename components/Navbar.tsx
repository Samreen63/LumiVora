"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, site } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > last && y > 120) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden && !open ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-white/10 bg-[#05060b]/70 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">{site.name}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-sm text-zinc-300 transition hover:text-white">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500 hover:scale-[1.03] active:scale-[0.98]">
            Book a Call
          </a>
        </div>
        <button className="text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#05060b]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-zinc-200"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-violet-600 px-4 py-2 text-center text-sm font-medium text-white">
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
