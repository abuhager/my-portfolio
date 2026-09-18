import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import type { Project, SiteData } from '@/types';

type HeroProps = Pick<SiteData, 'name' | 'role' | 'location' | 'headline' | 'introduction'> & {
  featuredProject: Project;
};

export default function Hero({ name, role, location, headline, introduction, featuredProject }: HeroProps) {
  const cover = featuredProject.media?.[0];
  return (
    <section id="top" aria-labelledby="hero-title" className="hero">
      <div className="page-shell hero__grid">
        <div className="hero__copy">
          <div className="hero__identity">
            <strong>{name}</strong>
            <span>{role}</span>
            <span className="hero__location"><Icon name="location" size={15} />{location}</span>
          </div>
          <h1 id="hero-title">{headline}</h1>
          <p className="hero__intro">{introduction}</p>
          <div className="hero__actions" aria-label="Primary actions">
            <Button label="See my projects" href="#projects" />
            <Button label="Contact me" href="#contact" variant="secondary" />
            <Button label="Download CV" href="/resume.pdf" variant="text" download />
          </div>
          <div className="hero__socials" aria-label="Professional profiles">
            <a href="https://github.com/abuhager" target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} />GitHub</a>
            <a href="https://www.linkedin.com/in/adham-abuhager/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={18} />LinkedIn</a>
          </div>
          <div className="hero__signals" aria-label="Core development stack">
            <span>TypeScript + Node.js</span><span>Next.js + React</span><span>ASP.NET Core + SQL</span>
          </div>
        </div>
        <aside className="hero-feature" aria-label="Featured deployed project">
          <div className="hero-feature__eyebrow"><span aria-hidden="true" /> FEATURED DEPLOYED PROJECT</div>
          {cover ? <Image className="hero-feature__image" src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} sizes="(max-width: 860px) 100vw, 48vw" priority /> : null}
          <div className="hero-feature__footer">
            <div><span>01 / SELECTED WORK</span><strong>{featuredProject.title}</strong><p>{featuredProject.subtitle}</p></div>
            <a href="#projects" aria-label={`Explore ${featuredProject.title} and other projects`}><Icon name="arrow-up-right" size={20} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
