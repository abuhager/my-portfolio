import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { Project } from '@/types';

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="project-visual relative min-h-[360px] overflow-hidden rounded-[26px] border border-[var(--line)] sm:min-h-[470px]">
        <div className="absolute inset-x-0 top-0 z-10 flex h-12 items-center gap-1.5 border-b border-white/10 bg-[#0b1714]/90 px-5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
          <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          <span className="ml-3 font-mono text-[9px] uppercase tracking-widest text-white/40">Live product</span>
        </div>
        <div className="absolute inset-0 pt-12">
          <Image src={project.image} alt={project.imageAlt ?? ''} fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-top" priority />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#07110f] via-[#07110f]/85 to-transparent px-6 pb-6 pt-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">Product scope</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/75">Listings · requests · bookings · chat · handover · moderation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="architecture-grid flex min-h-[360px] items-center justify-center rounded-[26px] border border-[var(--line)] p-6 sm:min-h-[470px]">
      <div className="w-full max-w-sm space-y-3 font-mono text-[11px] uppercase tracking-[0.12em]">
        {['Razor Views', 'ASP.NET Core MVC', 'EF Core + Business Logic', 'SQL Server'].map((label, index) => (
          <div key={label}>
            <div className={`rounded-2xl border p-4 text-center ${index === 1 ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]' : 'border-[var(--line-strong)] bg-[var(--surface)] text-[var(--muted)]'}`}>
              {label}
            </div>
            {index < 3 && <div className="mx-auto h-5 w-px bg-[var(--line-strong)]" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 90}>
      <article className="grid gap-10 rounded-[34px] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
        <ProjectVisual project={project} />
        <div className="flex flex-col justify-center py-2 lg:py-5">
          <div className="mb-6 flex items-center justify-between gap-5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Project {project.number}</span>
            <span className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--faint)]">{project.status}</span>
          </div>
          <h3 className="text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-none tracking-[-0.05em] text-[var(--text)]">{project.title}</h3>
          <p className="mt-3 text-sm font-medium text-[var(--accent)]">{project.subtitle}</p>
          <p className="mt-6 text-base leading-7 text-[var(--muted)]">{project.summary}</p>

          <div className="mt-7 border-l border-[var(--accent)]/50 pl-5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--faint)]">My contribution</p>
            <p className="text-sm leading-6 text-[var(--text-soft)]">{project.contribution}</p>
          </div>

          <ul className="mt-7 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[13px] leading-6 text-[var(--muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <Badge key={technology} label={technology} />)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button key={link.href} label={link.label} href={link.href} variant={link.primary ? 'primary' : 'secondary'} external />
            ))}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-border">
      <div className="page-shell py-24 sm:py-32">
        <FadeIn>
          <SectionLabel number="03" text="Selected work" />
          <div className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
            <h2 id="projects-title" className="section-title">Products that show how I think and build.</h2>
            <p className="max-w-xl text-base leading-7 text-[var(--muted)] lg:justify-self-end">
              Two different ecosystems, both focused on real workflows—not isolated CRUD screens.
            </p>
          </div>
        </FadeIn>
        <div className="space-y-6">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
