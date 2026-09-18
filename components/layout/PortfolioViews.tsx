'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import ExploreCards from '@/components/layout/ExploreCards';

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
const viewTitles: Record<View, string> = {
  top: 'hero-title',
  about: 'about-title',
  skills: 'skills-title',
  projects: 'projects-title',
  background: 'background-title',
  contact: 'contact-title',
};

function readView(previous: View): View {
  const hash = window.location.hash.slice(1).toLowerCase();
  if (hash === 'main') return previous; // Preserve the keyboard skip link.
  if (!hash) return 'top';
  return viewNames.includes(hash as View) ? (hash as View) : 'top';
}

export default function PortfolioViews({ home, about, skills, projects, background, contact }: PortfolioViewsProps) {
  const [active, setActive] = useState<View>('top');
  const activeRef = useRef<View>('top');

  useEffect(() => {
    function onNavigation(focusHeading: boolean) {
      const view = readView(activeRef.current);
      activeRef.current = view;
      setActive(view);
      window.scrollTo(0, 0);
      if (focusHeading) {
        window.requestAnimationFrame(() => {
          const heading = document.getElementById(viewTitles[view]);
          if (heading) {
            heading.setAttribute('tabindex', '-1');
            heading.focus({ preventScroll: true });
          }
        });
      }
    }

    onNavigation(false);
    const onHashChange = () => onNavigation(true);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const views: { id: View; content: ReactNode }[] = [
    { id: 'top', content: home },
    { id: 'about', content: about },
    { id: 'skills', content: skills },
    { id: 'projects', content: projects },
    { id: 'background', content: background },
    { id: 'contact', content: contact },
  ];

  return (
    <main id="main" tabIndex={-1} className="portfolio-stage" aria-label="Portfolio content">
      {views.map(({ id, content }) => (
        <div key={id} className="portfolio-view" hidden={active !== id}>
          {content}
          {id !== 'top' ? (
            <aside className="page-shell view-next" aria-label="Discover more of this portfolio">
              <div className="view-next__heading">
                <a href="#top" className="view-next__back">← Back to the cards</a>
                <div><span>KEEP EXPLORING</span><h2>What would you like to see next?</h2></div>
              </div>
              <ExploreCards compact exclude={id} />
            </aside>
          ) : null}
        </div>
      ))}
    </main>
  );
}
