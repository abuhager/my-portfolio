import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { SiteData } from '@/types';

type AboutProps = Pick<SiteData, 'about' | 'focus'>;

export default function About({ about, focus }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-title" className="section-border">
      <div className="page-shell py-24 sm:py-32">
        <FadeIn>
          <SectionLabel number="01" text="About" />
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <h2 id="about-title" className="section-title max-w-md">
              Building the whole product gives me better engineering judgment.
            </h2>
            <div>
              <p className="max-w-3xl text-[clamp(1.1rem,2vw,1.45rem)] leading-[1.65] text-[var(--muted)]">
                {about}
              </p>
              <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
                {focus.map((item, index) => (
                  <div key={item.title} className="bg-[var(--surface)] p-6 sm:min-h-48">
                    <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                    <h3 className="mt-7 text-base font-semibold text-[var(--text)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
