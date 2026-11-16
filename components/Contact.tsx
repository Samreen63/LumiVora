"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { site } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.projectType) e.projectType = "Select a project type";
    if (!form.message.trim()) e.message = "Please tell us about your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    console.log("Contact form submission:", form); // connect to Supabase later
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-3 text-sm font-medium text-violet-400">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s talk about your project</h2>
          <p className="mt-4 text-zinc-400">Tell us a bit about what you&apos;re building and we&apos;ll get back within 1-2 business days.</p>
          <div className="mt-8 space-y-3 text-sm text-zinc-300">
            <p>Email: <a href={`mailto:${site.email}`} className="text-violet-400 hover:underline">{site.email}</a></p>
            <p className="text-zinc-500">Serving startups and businesses worldwide.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }} className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <FiCheck className="h-7 w-7" />
                  </motion.div>
                  <h3 className="text-xl font-medium text-white">Message sent!</h3>
                  <p className="mt-2 text-sm text-zinc-400">We&apos;ll be in touch soon. (Form data logged to console for now.)</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block"><span className="mb-1.5 block text-sm text-zinc-300">Name</span><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30" />{errors.name && <span className="mt-1 block text-xs text-red-400">{errors.name}</span>}</label>
                    <label className="block"><span className="mb-1.5 block text-sm text-zinc-300">Email</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30" />{errors.email && <span className="mt-1 block text-xs text-red-400">{errors.email}</span>}</label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block"><span className="mb-1.5 block text-sm text-zinc-300">Project type</span><select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="w-full rounded-xl border border-white/10 bg-[#0b0d16] px-4 py-3 text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"><option value="">Select...</option><option>SaaS Development</option><option>MVP Development</option><option>Web App</option><option>UI/UX Design</option><option>Other</option></select>{errors.projectType && <span className="mt-1 block text-xs text-red-400">{errors.projectType}</span>}</label>
                    <label className="block"><span className="mb-1.5 block text-sm text-zinc-300">Budget range</span><select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-xl border border-white/10 bg-[#0b0d16] px-4 py-3 text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"><option value="">Select...</option><option>$3k - $5k</option><option>$5k - $10k</option><option>$10k - $25k</option><option>$25k+</option></select></label>
                  </div>
                  <label className="block"><span className="mb-1.5 block text-sm text-zinc-300">Message</span><textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30" />{errors.message && <span className="mt-1 block text-xs text-red-400">{errors.message}</span>}</label>
                  <button type="submit" className="w-full rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500 hover:scale-[1.01] active:scale-[0.99]">Send message</button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
