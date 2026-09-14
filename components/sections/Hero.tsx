import Image from 'next/image';
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
  const cover = featuredProject.media?.[0];

  return (
    <section id="top" aria-labelledby="hero-title" className="hero">
      <div className="page-shell hero__grid">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span>{role}</span>
            <span className="hero__location">
              <Icon name="location" size={15} />
              {location}
            </span>
          </div>

          <h1 id="hero-title">{name}</h1>
          <p className="hero__headline">{headline}</p>
          <p className="hero__intro">{introduction}</p>

          <div className="hero__actions" aria-label="Primary actions">
            <Button label="View selected work" href="#projects" />
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
        </div>

        <div className="hero-proof">
          <div className="hero-proof__topline">
            <span>Featured build</span>
            <span>{featuredProject.status}</span>
          </div>

          {cover ? (
            <a
              href={featuredProject.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-proof__visual"
              aria-label={`Open the live ${featuredProject.title} product`}
            >
              <div className="browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <b>aoun-project-theta.vercel.app</b>
              </div>
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </a>
          ) : null}

          <div className="hero-proof__footer">
            <div>
              <span>Full-stack product</span>
              <strong>{featuredProject.title}</strong>
              <p>{featuredProject.subtitle}</p>
            </div>
            <a
              href={featuredProject.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${featuredProject.title} live product`}
            >
              <Icon name="arrow-up-right" size={21} />
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell hero__proof-strip" aria-label="Core development focus">
        <span>TypeScript & Node.js</span>
        <span>Next.js & React</span>
        <span>ASP.NET Core & SQL Server</span>
        <span>APIs, security & testing</span>
      </div>
    </section>
  );
}
