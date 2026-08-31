import Button from '@/components/ui/Button';
import SectionLabel from '@/components/ui/SectionLabel';
import FadeIn from '@/components/ui/FadeIn';
import { SiteData } from '@/types';

type HeroProps = Pick<SiteData, 'name' | 'eyebrow' | 'heroValue'>;

export default function Hero({ name, eyebrow, heroValue }: HeroProps) {
  return (
    <FadeIn delay={0}>
      <section
        id="hero"
        aria-label="Introduction"
        className="
          max-w-[1200px] mx-auto px-6
          pt-32 pb-20
          border-b border-[var(--border)]
          flex flex-col gap-6 items-start
        "
      >
        <SectionLabel text={eyebrow} />

        <h1 className="
          text-[clamp(2.8rem,7vw,5rem)]
          font-black leading-[1.05] tracking-[-0.03em]
          text-white
        ">
          {name}
        </h1>

        <p className="
          text-[clamp(1rem,2vw,1.2rem)]
          leading-relaxed
          text-[var(--text-muted)]
          max-w-[600px]
        ">
          {heroValue}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button label="View My Projects" href="#projects" variant="primary" />
          <Button label="Download Resume"  href="/resume.pdf" variant="outline" external />
        </div>
      </section>
    </FadeIn>
  );
}
