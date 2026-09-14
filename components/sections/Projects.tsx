import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Project } from '@/types';

function ProjectMeta({ project, inverse = false }: { project: Project; inverse?: boolean }) {
  return (
    <div className={inverse ? 'project-meta project-meta--inverse' : 'project-meta'}>
      <span>Project {project.number}</span>
      <span>{project.status}</span>
    </div>
  );
}

function ProjectLinks({ project, inverse = false }: { project: Project; inverse?: boolean }) {
  return (
    <div className="project-links" aria-label={`${project.title} links`}>
      {project.links.map((link) => (
        <Button
          key={link.href}
          label={link.label}
          href={link.href}
          external
          variant={link.primary ? (inverse ? 'inverse' : 'primary') : inverse ? 'secondary' : 'text'}
        />
      ))}
    </div>
  );
}

function AounGallery({ project }: { project: Project }) {
  const [home, chat, requests] = project.media ?? [];

  if (!home) return null;

  return (
    <figure className="aoun-gallery">
      <div className="aoun-gallery__main">
        <div className="browser-bar browser-bar--dark" aria-hidden="true">
          <span />
          <span />
          <span />
          <b>Live product · Home</b>
        </div>
        <Image
          src={home.src}
          alt={home.alt}
          width={home.width}
          height={home.height}
          sizes="(max-width: 900px) 100vw, 65vw"
        />
      </div>
      <div className="aoun-gallery__secondary">
        {[chat, requests].filter(Boolean).map((item) => (
          <div className="aoun-gallery__shot" key={item.src}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 900px) 50vw, 22vw"
            />
            <span>{item.caption}</span>
          </div>
        ))}
      </div>
      <figcaption>
        Screens from the deployed Arabic interface and documented project flows.
      </figcaption>
    </figure>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured-project">
      <ProjectMeta project={project} inverse />

      <div className="featured-project__intro">
        <div>
          <p className="project-kicker">Featured full-stack build</p>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <p className="featured-project__summary">{project.summary}</p>
      </div>

      <AounGallery project={project} />

      <div className="featured-project__context">
        <div>
          <p className="detail-label">The problem</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="detail-label">My role</p>
          <p>{project.contribution}</p>
        </div>
      </div>

      <div className="featured-project__details">
        <div className="feature-list">
          <p className="detail-label">Product capabilities</p>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true">
                  <Icon name="check" size={15} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="technical-grid">
          {project.highlights.map((highlight, index) => (
            <div key={highlight.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h4>{highlight.title}</h4>
              <p>{highlight.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-project__footer">
        <div className="badge-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <Badge key={technology} label={technology} inverse />
          ))}
        </div>
        <ProjectLinks project={project} inverse />
      </div>
    </article>
  );
}

function ProjectFlow({ steps = [] }: { steps?: string[] }) {
  return (
    <div className="project-flow" aria-label="Verified UniEvents booking workflow">
      <div className="project-flow__heading">
        <Icon name="layers" size={21} />
        <span>Verified booking flow</span>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <p>Implemented in the ASP.NET Core MVC controllers on the main branch.</p>
    </div>
  );
}

function SecondaryProject({ project }: { project: Project }) {
  return (
    <article className="secondary-project">
      <ProjectMeta project={project} />

      <div className="secondary-project__grid">
        <div className="secondary-project__content">
          <p className="project-kicker">Backend-focused build</p>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="secondary-project__summary">{project.summary}</p>

          <div className="secondary-project__context">
            <div>
              <p className="detail-label">The problem</p>
              <p>{project.problem}</p>
            </div>
            <div>
              <p className="detail-label">My role</p>
              <p>{project.contribution}</p>
            </div>
          </div>

          <ul className="secondary-project__features">
            {project.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" size={15} />
                {feature}
              </li>
            ))}
          </ul>

          <div className="secondary-project__highlights">
            {project.highlights.map((highlight) => (
              <div key={highlight.title}>
                <h4>{highlight.title}</h4>
                <p>{highlight.detail}</p>
              </div>
            ))}
          </div>

          <div className="badge-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <Badge key={technology} label={technology} />
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>

        <ProjectFlow steps={project.flow} />
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [featured, secondary] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section projects-section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Real systems, explained through the decisions behind them."
          description="Two projects were selected because they show complete workflows and verified implementation depth across two different backend ecosystems."
          titleId="projects-title"
        />

        <div className="projects-stack">
          {featured ? <FeaturedProject project={featured} /> : null}
          {secondary ? <SecondaryProject project={secondary} /> : null}
        </div>
      </div>
    </section>
  );
}
