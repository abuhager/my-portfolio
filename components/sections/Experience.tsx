import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { TimelineItem } from '@/types';

export default function Experience({ timeline }: { timeline: TimelineItem[] }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-border">
      <div className="page-shell py-24 sm:py-32">
        <FadeIn>
          <SectionLabel number="04" text="Background" />
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <h2 id="experience-title" className="section-title lg:sticky lg:top-28">
                Experience, training, and foundations.
              </h2>
            </div>
            <ol className="border-t border-[var(--line)]">
              {timeline.map((item, index) => (
                <li key={item.id}>
                  <FadeIn delay={index * 70}>
                    <article className="grid gap-4 border-b border-[var(--line)] py-8 sm:grid-cols-[145px_1fr] sm:gap-7">
                      <div>
                        <span className="inline-flex rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--accent)]">
                          {item.kind}
                        </span>
                        <p className="mt-3 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-[var(--faint)]">{item.period}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">{item.title}</h3>
                        <p className="mt-1 text-sm font-medium text-[var(--accent)]">{item.organization}</p>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
                      </div>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
