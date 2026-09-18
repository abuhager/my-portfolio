'use client';

import type { CSSProperties } from 'react';

type SectionId = 'projects' | 'about' | 'skills' | 'background' | 'contact';

const destinations: { id: SectionId; number: string; title: string; description: string }[] = [
  { id: 'projects', number: '01', title: 'Projects', description: 'Aoun & UniEvents' },
  { id: 'about', number: '02', title: 'About', description: 'The person behind the code' },
  { id: 'skills', number: '03', title: 'Skills', description: 'Frontend to backend' },
  { id: 'background', number: '04', title: 'Journey', description: 'Experience & education' },
  { id: 'contact', number: '05', title: 'Contact', description: 'Start a conversation' },
];

function TileIcon({ id }: { id: SectionId }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  switch (id) {
    case 'projects': return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" /></svg>;
    case 'about': return <svg {...common}><circle cx="12" cy="7.5" r="3.5" /><path d="M4.5 20c0-4 3-6.5 7.5-6.5s7.5 2.5 7.5 6.5" /></svg>;
    case 'skills': return <svg {...common}><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-14-4 18" /></svg>;
    case 'background': return <svg {...common}><path d="M4 20h16M5 17V7l7-4 7 4v10M9 20v-7h6v7M9 9h.01M15 9h.01" /></svg>;
    case 'contact': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  }
}

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
          onClick={() => {
            if (active === item.id) window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="explore-tile__top"><span className="explore-tile__number">{item.number} / 05</span><TileIcon id={item.id} /></span>
          <span className="explore-tile__bottom"><strong>{item.title}</strong><span>{item.description}</span></span>
        </a>
      ))}
    </div>
  );
}
