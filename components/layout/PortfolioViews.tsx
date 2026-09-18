'use client';

import { useEffect, useState, type ReactNode } from 'react';

type View = 'top' | 'about' | 'skills' | 'projects' | 'background' | 'contact';

type PortfolioViewsProps = {
  home: ReactNode;
  about: ReactNode;
  skills: ReactNode;
  projects: ReactNode;
  background: ReactNode;
  contact: ReactNode;
};

const viewNames: View[] = ['top', 'about', 'skills', 'projects', 'background', 'contact'];

function readView(previous: View): View {
  const hash = window.location.hash.slice(1).toLowerCase();
  // The accessibility skip link targets #main; it should not switch views.
  if (hash === 'main') return previous;
  if (!hash) return 'top';
  return viewNames.includes(hash as View) ? (hash as View) : 'top';
}

export default function PortfolioViews({ home, about, skills, projects, background, contact }: PortfolioViewsProps) {
  const [active, setActive] = useState<View>('top');

  useEffect(() => {
    function onNavigation() {
      setActive((previous) => readView(previous));
      // A hidden section can have a hash target; start the newly selected view at the top.
      window.scrollTo(0, 0);
    }

    onNavigation();
    window.addEventListener('hashchange', onNavigation);
    return () => window.removeEventListener('hashchange', onNavigation);
  }, []);

  const views: { id: View; content: ReactNode }[] = [
    { id: 'top', content: home },
    { id: 'about', content: about },
    { id: 'skills', content: skills },
    { id: 'projects', content: projects },
    { id: 'background', content: background },
  ];

  return (
    <>
      <main id="main" className="portfolio-stage" aria-label="Portfolio content">
        {views.map(({ id, content }) => (
          <div key={id} className="portfolio-view" hidden={active !== id}>
            {content}
          </div>
        ))}
      </main>
      <div className="portfolio-view" hidden={active !== 'contact'}>
        {contact}
      </div>
    </>
  );
}
