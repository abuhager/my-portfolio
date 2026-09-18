import type { CSSProperties } from 'react';

type SectionId = 'projects' | 'about' | 'skills' | 'background' | 'contact';

export const destinations: {
  id: SectionId;
  number: string;
  title: string;
  description: string;
  eyebrow: string;
}[] = [
  { id: 'projects', number: '01', title: 'Selected work', description: 'Aoun + UniEvents', eyebrow: 'See real projects' },
  { id: 'about', number: '02', title: 'About me', description: 'How I think and build', eyebrow: 'Get to know me' },
  { id: 'skills', number: '03', title: 'Tech stack', description: 'Frontend, backend & data', eyebrow: 'What I use' },
  { id: 'background', number: '04', title: 'My journey', description: 'Experience & education', eyebrow: 'My background' },
  { id: 'contact', number: '05', title: 'Get in touch', description: 'Let’s build something', eyebrow: 'Say hello' },
];

type ExploreCardsProps = { compact?: boolean; exclude?: SectionId };

export default function ExploreCards({ compact = false, exclude }: ExploreCardsProps) {
  const cards = compact ? destinations.filter((item) => item.id !== exclude).slice(0, 2) : destinations;

  return (
    <div className={compact ? 'explore-cards explore-cards--compact' : 'explore-cards'}>
      {cards.map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`explore-tile explore-tile--${item.id}`}
          style={{ '--tile-index': index } as CSSProperties}
          aria-label={`${item.title}: ${item.description}`}
        >
          <span className="explore-tile__top"><span>{item.number} / {item.eyebrow}</span><span className="explore-tile__arrow" aria-hidden="true">↗</span></span>
          <span className="explore-tile__bottom"><strong>{item.title}</strong><span>{item.description}</span></span>
        </a>
      ))}
    </div>
  );
}
