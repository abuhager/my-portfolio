import SectionLabel from '@/components/ui/SectionLabel';
import FadeIn from '@/components/ui/FadeIn';
import { TimelineItem } from '@/types';

interface ExperienceProps {
  timeline: TimelineItem[];
}

function TimelineEntry({ item, index, isLast }: {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <FadeIn delay={index * 100}>
      <div className="relative flex gap-6">
        {/* ── Left: Line + Dot ── */}
        <div className="flex flex-col items-center">
          <div className="
            w-2 h-2 rounded-full mt-1.5 shrink-0
            bg-[var(--cyan)]
            shadow-[0_0_8px_rgba(0,229,255,0.4)]
          " />
          {!isLast && (
            <div className="
              w-px flex-1 mt-2
              bg-gradient-to-b from-[rgba(0,229,255,0.3)] to-transparent
            " />
          )}
        </div>

        {/* ── Right: Content ── */}
        <div className={`flex flex-col gap-1.5 ${!isLast ? 'pb-10' : ''}`}>
          <span className="
            text-[11px] uppercase tracking-[0.1em] font-medium
            text-[var(--cyan)]
          ">
            {item.year}
          </span>
          <h3 className="text-[1rem] font-semibold text-white leading-snug">
            {item.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-[var(--text-muted)] max-w-[560px]">
            {item.detail}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Experience({ timeline }: ExperienceProps) {
  return (
    <section
      id="experience"
      aria-label="Experience and Education"
      className="
        max-w-[1200px] mx-auto px-6
        py-20 border-b border-[var(--border)]
      "
    >
      <SectionLabel text="Background" />
      <h2 className="
        text-[clamp(1.6rem,3vw,2rem)]
        font-bold tracking-tight text-white mb-12
      ">
        Experience
      </h2>

      <div className="flex flex-col">
        {timeline.map((item, index) => (
          <TimelineEntry
            key={item.id}
            item={item}
            index={index}
            isLast={index === timeline.length - 1}
          />
        ))}
      </div>
    </section>
  );
}