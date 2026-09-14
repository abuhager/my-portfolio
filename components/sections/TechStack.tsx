import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { SkillGroup } from '@/types';

export default function TechStack({ skillGroups }: { skillGroups: SkillGroup[] }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-border">
      <div className="page-shell py-24 sm:py-32">
        <FadeIn>
          <SectionLabel number="02" text="Capabilities" />
          <div className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
            <h2 id="skills-title" className="section-title">Tools I use to move from idea to production.</h2>
            <p className="max-w-xl text-base leading-7 text-[var(--muted)] lg:justify-self-end">
              A practical stack across interfaces, APIs, data, testing, and deployment—grounded in projects I have actually built.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 70}>
              <article className="skill-card h-full rounded-3xl border border-[var(--line)] p-6 sm:p-7">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <h3 className="text-[15px] font-semibold text-[var(--text)]">{group.title}</h3>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--faint)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-[var(--line)] bg-black/15 px-3 py-1.5 text-[12px] font-medium text-[var(--muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
