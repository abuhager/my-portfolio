import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ExploreCards from '@/components/layout/ExploreCards';
import type { Project, SiteData } from '@/types';

type HeroProps = Pick<SiteData, 'name' | 'role' | 'location' | 'headline' | 'introduction'> & {
  featuredProject: Project;
};

export default function Hero({ name, role, location, headline, introduction, featuredProject }: HeroProps) {
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
            <Button label="Explore my projects" href="#projects" />
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

        <aside className="explore-panel" aria-label="Choose what to explore">
          <div className="explore-panel__header">
            <span className="explore-panel__eyebrow"><span aria-hidden="true" className="explore-panel__spark" />THE PORTFOLIO / FIVE SHORT STORIES</span>
            <h2>Where would you like to start?</h2>
            <p>Pick a card to open that part of my work. No endless scrolling.</p>
          </div>
          <ExploreCards />
          <p className="explore-panel__footer">Featured build: <strong>{featuredProject.title}</strong> <span aria-hidden="true">✦</span> Tap any card to explore</p>
        </aside>
      </div>
    </section>
  );
}
