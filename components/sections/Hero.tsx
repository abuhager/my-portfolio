import Button from '@/components/ui/Button';
import { SiteData } from '@/types';

type HeroProps = Pick<
  SiteData,
  'name' | 'role' | 'location' | 'headline' | 'introduction' | 'availability'
>;

export default function Hero({
  name,
  role,
  location,
  headline,
  introduction,
  availability,
}: HeroProps) {
  return (
    <section id="hero" aria-labelledby="hero-title" className="page-shell relative min-h-[calc(100svh-72px)] overflow-hidden py-20 sm:py-28">
      <div className="hero-glow" aria-hidden="true" />
      <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div className="relative z-10">
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
            <span className="inline-flex items-center gap-2 text-[var(--accent)]">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              {availability}
            </span>
            <span className="hidden h-4 w-px bg-[var(--line-strong)] sm:block" aria-hidden="true" />
            <span>{location}</span>
          </div>

          <p className="mb-4 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {role}
          </p>
          <h1 id="hero-title" className="max-w-4xl text-balance text-[clamp(3rem,7.6vw,6.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[var(--text)]">
            {headline}
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.8vw,1.17rem)] leading-8 text-[var(--muted)]">
            {introduction}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button label="Explore my work" href="#projects" />
            <Button label="Download CV" href="/resume.pdf" variant="secondary" download />
          </div>
          <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--faint)]">
            {name} · TypeScript / .NET
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:justify-self-end" aria-label="Development profile summary">
          <div className="code-card relative overflow-hidden rounded-[28px] border border-[var(--line-strong)] p-5 shadow-2xl shadow-black/30 sm:p-7">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--faint)]">profile.ts</span>
            </div>
            <div className="space-y-5 font-mono text-[12px] leading-6 sm:text-[13px]">
              <p><span className="text-[#b998ff]">const</span> <span className="text-[#8dd9ff]">developer</span> <span className="text-[var(--muted)]">= {'{'}</span></p>
              <div className="space-y-3 pl-4 sm:pl-6">
                <p><span className="text-[var(--muted)]">focus:</span> <span className="text-[#ffd18d]">&apos;Backend + Full-Stack&apos;</span>,</p>
                <p><span className="text-[var(--muted)]">ships:</span> <span className="text-[#ffd18d]">&apos;Web products&apos;</span>,</p>
                <p><span className="text-[var(--muted)]">caresAbout:</span> <span className="text-[var(--muted)]">[</span></p>
                <p className="pl-4 text-[#ffd18d]">&apos;security&apos;, &apos;quality&apos;,<br />&apos;clean architecture&apos;</p>
                <p><span className="text-[var(--muted)]">]</span>,</p>
                <p><span className="text-[var(--muted)]">featuredBuild:</span> <span className="text-[#ffd18d]">&apos;Aoun&apos;</span></p>
              </div>
              <p className="text-[var(--muted)]">{'}'};</p>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[var(--line)] bg-black/20 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--faint)]">Primary lane</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">Backend systems</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-black/20 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--faint)]">Also ships</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">Full-stack UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
