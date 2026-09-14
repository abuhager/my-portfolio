import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import type { SiteData } from '@/types';

type AboutProps = Pick<SiteData, 'about' | 'principles'>;

export default function About({ about, principles }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-title" className="section about-section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="About"
          title="Full-stack range. Backend depth."
          description="I care about how a product behaves under real rules—not only how its screens look."
          titleId="about-title"
        />

        <div className="about-grid">
          <div className="about-copy">
            <p>{about}</p>
            <div className="about-focus">
              <div>
                <Icon name="code" size={20} />
                <span>Interfaces & APIs</span>
              </div>
              <div>
                <Icon name="layers" size={20} />
                <span>Architecture & data</span>
              </div>
            </div>
          </div>

          <ol className="principles">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
