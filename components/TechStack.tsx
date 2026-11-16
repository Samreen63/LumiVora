import { techStack } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function TechStack() {
  const items = [...techStack, ...techStack];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium text-violet-400">Tech stack</p>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Tools we love building with</h2>
        </FadeIn>
        <div className="marquee-paused relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max gap-4 py-2">
            {items.map((t, i) => (
              <div key={`${t}-${i}`} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400 grayscale transition duration-300 hover:scale-105 hover:text-white hover:grayscale-0">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
