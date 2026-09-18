import type { CSSProperties } from 'react';

type SectionId = 'projects' | 'about' | 'skills' | 'background' | 'contact';

const destinations: {
  id: SectionId;
  number: string;
  title: string;
  description: string;
}[] = [
  { id: 'projects', number: '01', title: 'Projects', description: 'Aoun + UniEvents' },
  { id: 'about', number: '02', title: 'About', description: 'How I build' },
  { id: 'skills', number: '03', title: 'Skills', description: 'My tech stack' },
  { id: 'background', number: '04', title: 'Journey', description: 'Experience + study' },
  { id: 'contact', number: '05', title: 'Contact', description: 'Let’s connect' },
];

export default function ExploreCards({ active }: { active: SectionId | 'top' }) {
  return (
    <div className="explore-cards">
      {destinations.map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`explore-tile explore-tile--${item.id}${active === item.id ? ' explore-tile--active' : ''}`}
          style={{ '--tile-index': index } as CSSProperties}
          aria-current={active === item.id ? 'page' : undefined}
          aria-label={`${item.title}: ${item.description}`}
        >
          <span className="explore-tile__top"><span>{item.number}</span><span className="explore-tile__arrow" aria-hidden="true">↗</span></span>
          <span className="explore-tile__bottom"><strong>{item.title}</strong><span>{item.description}</span></span>
        </a>
      ))}
    </div>
  );
}
