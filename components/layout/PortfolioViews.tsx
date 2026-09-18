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
  if (hash === 'main') return previous;
  if (!hash) return 'top';
  return viewNames.includes(hash as View) ? (hash as View) : 'top';
}

export default function PortfolioViews({ home, about, skills, projects, background, contact }: PortfolioViewsProps) {
  const [active, setActive] = useState<View>('top');
  const [compact, setCompact] = useState(false);
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

    function onScroll() {
      // Separate thresholds avoid flickering when the deck itself changes height.
      setCompact((previous) => previous ? window.scrollY > 65 : window.scrollY > 155);
    }
    onNavigation(false);
    onScroll();
    const onHashChange = () => onNavigation(true);
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', onScroll);
    };
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
      <div className={compact ? 'portfolio-deck portfolio-deck--compact' : 'portfolio-deck'}>
        <nav className="page-shell" aria-label="Explore the portfolio">
          <div className="portfolio-deck__heading">
            <span>EXPLORE / 01—05</span>
            <a href="#top" aria-current={active === 'top' ? 'page' : undefined}>Overview <span aria-hidden="true">↗</span></a>
          </div>
          <ExploreCards active={active} />
        </nav>
      </div>

      <div className="portfolio-content" aria-live="off">
        {views.map(({ id, content }) => (
          <div key={id} className="portfolio-view" hidden={active !== id}>
            {content}
          </div>
        ))}
      </div>
    </main>
  );
}
