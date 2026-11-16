import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { site, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">{site.name}</div>
          <p className="mt-2 text-sm text-zinc-400">{site.tagline}</p>
          <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-zinc-400 hover:text-white">{site.email}</a>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium text-white">Quick links</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium text-white">Connect</h4>
          <div className="flex gap-3">
            <a href={site.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:-translate-y-1 hover:text-white hover:border-violet-500/50"><FaTwitter className="h-4 w-4" /></a>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:-translate-y-1 hover:text-white hover:border-violet-500/50"><FaLinkedinIn className="h-4 w-4" /></a>
            <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:-translate-y-1 hover:text-white hover:border-violet-500/50"><FaGithub className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6 text-center text-xs text-zinc-500">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
