import Badge from '@/components/ui/Badge';
import SectionLabel from '@/components/ui/SectionLabel';
import FadeIn from '@/components/ui/FadeIn';
import { SiteData } from '@/types';

type TechStackProps = Pick<SiteData, 'techStack'>;

const COLUMNS = [
  { key: 'backend',  label: 'Backend'         },
  { key: 'frontend', label: 'Frontend'         },
  { key: 'devops',   label: 'DevOps & Testing' },
] as const;

export default function TechStack({ techStack }: TechStackProps) {
  return (
    <FadeIn delay={100}>
      <section
        id="stack"
        aria-label="Tech Stack"
        className="max-w-300 mx-auto px-6 py-20 border-b border-[var(--border)]"
      >
        <SectionLabel text="What I Build With" />
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold tracking-tight text-white mb-10">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COLUMNS.map(({ key, label }) => (
            <div
              key={key}
              className="
                bg-[var(--surface)] border border-[var(--border)]
                rounded-sm p-5 flex flex-col gap-4
                hover:border-[var(--border-hover)]
                transition-colors duration-300
              "
            >
              <div className="flex items-center gap-2 pb-3 border-b border-[var(--border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)]" aria-hidden="true" />
                <h3 className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[var(--text-muted)]">
                  {label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack[key].map((item) => (
                  <Badge key={item} label={item} variant="chip" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}