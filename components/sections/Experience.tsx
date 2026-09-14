import SectionHeading from '@/components/ui/SectionHeading';
import type { BackgroundItem } from '@/types';

const categories: BackgroundItem['category'][] = ['Experience', 'Training', 'Education'];

export default function Experience({ background }: { background: BackgroundItem[] }) {
  return (
    <section id="background" aria-labelledby="background-title" className="section background-section">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Experience & education"
          title="The path behind the projects."
          description="Trainee experience, structured technical training, and a Computer Science degree—kept clearly separated."
          titleId="background-title"
        />

        <div className="background-grid">
          {categories.map((category) => (
            <section className="background-group" aria-labelledby={`${category.toLowerCase()}-title`} key={category}>
              <h3 id={`${category.toLowerCase()}-title`}>{category}</h3>
              <div className="background-group__items">
                {background
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <article key={item.id}>
                      <p className="background-item__period">{item.period}</p>
                      <h4>{item.title}</h4>
                      <p className="background-item__organization">{item.organization}</p>
                      <p className="background-item__detail">{item.detail}</p>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
