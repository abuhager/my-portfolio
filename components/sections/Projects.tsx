import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Project } from '@/types';

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="project-meta">
      <span>Project {project.number}</span>
      <span>{project.status}</span>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links" aria-label={project.title + ' links'}>
      {project.links.map((link) => (
        <Button
          key={link.href}
          label={link.label}
          href={link.href}
          external
          variant={link.primary ? 'primary' : 'text'}
        />
      ))}
    </div>
  );
}

function ProjectFlow({ steps = [] }: { steps?: string[] }) {
  return (
    <div className="project-flow project-flow--visual" aria-label="UniEvents booking workflow">
      <div className="project-flow__heading">
        <Icon name="layers" size={20} />
        <span>Booking lifecycle</span>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <p>Verified in the ASP.NET Core MVC controllers on the main branch.</p>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const cover = project.media?.[0];

  if (!cover) {
    return <ProjectFlow steps={project.flow} />;
  }

  return (
    <figure className="project-card__visual">
      <div className="browser-bar browser-bar--dark" aria-hidden="true">
        <span />
        <span />
        <span />
        <b>Deployed product · Aoun</b>
      </div>
      <div className="project-card__image">
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 900px) 100vw, 52vw"
        />
      </div>
      <figcaption>
        <span>Arabic product interface</span>
        <span>Live on Vercel</span>
      </figcaption>
    </figure>
  );
}

function ProjectDisclosure({ project }: { project: Project }) {
  return (
    <details className="project-disclosure">
      <summary>
        <span>
          <small>Technical case study</small>
          <strong>Problem, contribution, and engineering decisions</strong>
        </span>
        <span className="project-disclosure__toggle" aria-hidden="true">+</span>
      </summary>

      <div className="project-disclosure__body">
        <div className="project-disclosure__context">
          <div>
            <p className="detail-label">The problem</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="detail-label">My contribution</p>
            <p>{project.contribution}</p>
          </div>
        </div>

        <div className="project-disclosure__details">
          <div className="feature-list">
            <p className="detail-label">Product capabilities</p>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">
                    <Icon name="check" size={14} />
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
      </div>
    </details>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={featured ? 'project-card project-card--featured' : 'project-card'}>
      <ProjectMeta project={project} />

      <div className="project-card__main">
        <ProjectVisual project={project} />

        <div className="project-card__content">
          <p className="project-kicker">
            {featured ? 'Featured full-stack product' : 'ASP.NET Core product'}
          </p>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-card__summary">{project.summary}</p>

          <ul className="project-card__signals" aria-label={project.title + ' engineering highlights'}>
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight.title}>
                <Icon name="check" size={15} />
                <span>{highlight.title}</span>
              </li>
            ))}
          </ul>

          <div className="badge-list" aria-label={project.title + ' technologies'}>
            {project.technologies.map((technology) => (
              <Badge key={technology} label={technology} />
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>

      <ProjectDisclosure project={project} />
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section projects-section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Products that show how I think and build."
          description="Two complete workflows across different backend ecosystems. The overview stays quick to scan, with the technical depth available when useful."
          titleId="projects-title"
        />

        <div className="projects-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
