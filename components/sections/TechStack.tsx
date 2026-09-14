import SectionHeading from '@/components/ui/SectionHeading';
import type { SkillGroup } from '@/types';

export default function TechStack({ skillGroups }: { skillGroups: SkillGroup[] }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section skills-section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Technical capabilities"
          title="A practical stack across product layers."
          description="Every item below is supported by the CV, repositories, or the implementation inside Aoun and UniEvents."
          titleId="skills-title"
          inverse
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group__header">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <ul aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
