import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import type { Project, SiteData } from '@/types';

type HeroProps = Pick<
  SiteData,
  'name' | 'role' | 'location' | 'headline' | 'introduction'
> & {
  featuredProject: Project;
};

export default function Hero({
  name,
  role,
  location,
  headline,
  introduction,
  featuredProject,
}: HeroProps) {
  const featuredLink = featuredProject.links[0];

  return (
    <section id="top" aria-labelledby="hero-title" className="hero">
      <div className="page-shell hero__grid">
        <div className="hero__copy">
          <div className="hero__identity">
            <strong>{name}</strong>
            <span>{role}</span>
            <span className="hero__location">
              <Icon name="location" size={15} />
              {location}
            </span>
          </div>

          <h1 id="hero-title">{headline}</h1>
          <p className="hero__intro">{introduction}</p>

          <div className="hero__actions" aria-label="Primary actions">
            <Button label="Explore selected work" href="#projects" />
            <Button label="Contact me" href="#contact" variant="secondary" />
            <Button label="Download CV" href="/resume.pdf" variant="text" download />
          </div>

          <div className="hero__socials" aria-label="Professional profiles">
            <a href="https://github.com/abuhager" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adham-abuhager/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={18} />
              LinkedIn
            </a>
          </div>

          <div className="hero__signals" aria-label="Core development stack">
            <span>TypeScript + Node.js</span>
            <span>Next.js + React</span>
            <span>ASP.NET Core + SQL</span>
          </div>
        </div>

        <aside className="profile-card" aria-label="Development profile">
          <div className="profile-card__topline">
            <div aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>profile.ts</span>
          </div>

          <div className="profile-card__code" aria-label="Backend-leaning full-stack developer profile">
            <p>
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">developer</span> = {'{'}
            </p>
            <div>
              <p>
                <span className="code-property">focus:</span>{' '}
                <span className="code-string">&apos;backend + full-stack&apos;</span>,
              </p>
              <p>
                <span className="code-property">builds:</span>{' '}
                <span className="code-string">&apos;role-based products&apos;</span>,
              </p>
              <p>
                <span className="code-property">caresAbout:</span> [
              </p>
              <p className="code-string profile-card__array">
                &apos;security&apos;, &apos;quality&apos;,<br />
                &apos;clear architecture&apos;
              </p>
              <p>],</p>
              <p>
                <span className="code-property">featuredBuild:</span>{' '}
                <span className="code-string">&apos;{featuredProject.title}&apos;</span>
              </p>
            </div>
            <p>{'}'};</p>
          </div>

          <div className="profile-card__facts">
            <div>
              <span>Strongest lane</span>
              <strong>Backend systems</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>End-to-end web</strong>
            </div>
          </div>

          {featuredLink ? (
            <a
              className="profile-card__project"
              href={featuredLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'Open ' + featuredProject.title + ' live product'}
            >
              <span>
                <small>Featured deployed product</small>
                <strong>{featuredProject.title}</strong>
              </span>
              <Icon name="arrow-up-right" size={20} />
            </a>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
