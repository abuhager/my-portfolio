import SectionLabel from '@/components/ui/SectionLabel';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

// ── Architecture Diagram ──────────────────────────────────
function ArchDiagram({ nodes }: { nodes: Project['archNodes'] }) {
  return (
    <div className="
      w-full h-full min-h-[220px]
      border border-dashed border-[rgba(0,229,255,0.25)]
      bg-[#0a0a0c] rounded-sm
      flex flex-col items-center justify-center gap-3 p-6
    ">
      {nodes.map((row, rowIdx) => (
        <div key={rowIdx} className="flex flex-col items-center gap-3 w-full">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {row.map((node, nodeIdx) => (
              <div
                key={nodeIdx}
                className={`
                  px-3 py-1.5 rounded-sm text-[11px] font-medium tracking-wide
                  border transition-colors
                  ${node.accent
                    ? 'border-[var(--cyan)] text-[var(--cyan)] bg-[var(--cyan-dim)]'
                    : 'border-[var(--border)] text-[var(--text-muted)] bg-[var(--surface)]'}
                `}
              >
                {node.label}
              </div>
            ))}
          </div>
          {rowIdx < nodes.length - 1 && (
            <div className="text-[var(--cyan)] opacity-30 text-sm leading-none select-none">
              |
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Single Project Card ───────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 120}>
      <article
        aria-label={project.title}
        className="
          grid grid-cols-1 lg:grid-cols-2 gap-0
          border border-[var(--border)] rounded-sm
          hover:border-[var(--border-hover)]
          transition-colors duration-300
          overflow-hidden
        "
      >
        {/* ── Left: Content ── */}
        <div className="
          bg-[var(--surface)] p-8
          flex flex-col gap-6 justify-between
          border-b lg:border-b-0 lg:border-r border-[var(--border)]
        ">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.1em] font-medium text-[var(--cyan)]">
              {project.tag}
            </span>

            <h3 className="text-[1.4rem] font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h3>

            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--text-faint)]">
                Problem
              </p>
              <p className="text-[14px] leading-relaxed text-[var(--text-muted)]">
                {project.problem}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--text-faint)]">
                Role & Impact
              </p>
              <p className="text-[14px] leading-relaxed text-[var(--text-muted)]">
                {project.role}
              </p>
            </div>
          </div>

          {/* Bottom: Badges + Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <Badge key={badge} label={badge} variant="cyan" />
              ))}
            </div>

            {/* ── Buttons ── */}
            <div className="flex gap-3 flex-wrap">

              {/* Backend repo — دايمًا موجود */}
              <Button
  label={project.githubFrontendUrl ? 'Backend ↗' : 'View Source ↗'}
  href={project.githubUrl}
  variant="action"
  external
/>

              {/* Frontend repo — فقط لو موجود */}
              {project.githubFrontendUrl && (
                <Button
                  label="Frontend ↗"
                  href={project.githubFrontendUrl}
                  variant="action"
                  external
                />
              )}

              {/* Demo — primary لو موجود، greyed out لو لأ */}
              {project.demoUrl ? (
                <Button
                  label="Live Demo ↗"
                  href={project.demoUrl}
                  variant="primary"
                  external
                />
              ) : (
                <span className="
                  inline-flex items-center
                  text-[11px] font-semibold uppercase tracking-[0.06em]
                  border border-[var(--border)]
                  text-[var(--text-faint)]
                  px-4 py-2 rounded-sm
                  cursor-not-allowed select-none
                ">
                  Local Only
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Right: Architecture Diagram ── */}
        <div className="bg-[#0a0a0c] p-8 flex flex-col gap-4">
          <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--text-faint)]">
            Architecture
          </p>
          <ArchDiagram nodes={project.archNodes} />
        </div>
      </article>
    </FadeIn>
  );
}

// ── Main Section ─────────────────────────────────────────
export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="
        max-w-[1200px] mx-auto px-6
        py-20 border-b border-[var(--border)]
        flex flex-col gap-6
      "
    >
      <div>
        <SectionLabel text="Featured Work" />
        <h2 className="
          text-[clamp(1.6rem,3vw,2rem)]
          font-bold tracking-tight text-white
        ">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}