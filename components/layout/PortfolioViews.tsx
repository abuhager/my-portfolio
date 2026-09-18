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
  if (hash === 'main') return previous; // Leave the keyboard skip link alone.
  if (!hash) return 'top';
  return viewNames.includes(hash as View) ? (hash as View) : 'top';
}

export default function PortfolioViews({ home, about, skills, projects, background, contact }: PortfolioViewsProps) {
  const [active, setActive] = useState<View>('top');
  const activeRef = useRef<View>('top');

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    function resetScroll() {
      // Prevent smooth scrolling and native hash anchoring from putting the
      // heading behind the persistent cards when a new section is selected.
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        root.style.scrollBehavior = previousBehavior;
      });
    }

    function onNavigation(focusHeading: boolean) {
      if (window.location.hash.toLowerCase() === '#main') return;
      const view = readView(activeRef.current);
      activeRef.current = view;
      setActive(view);
      // The six navigation cards remain compact on Overview and every section.
      resetScroll();

      if (focusHeading) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            const heading = document.getElementById(viewTitles[view]);
            if (heading) {
              heading.setAttribute('tabindex', '-1');
              heading.focus({ preventScroll: true });
            }
          });
        });
      }
    }

    function onInternalLinkClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      const id = href.slice(1).toLowerCase();
      if (!viewNames.includes(id as View)) return;

      // Use history for shareable links/back-forward without allowing the browser
      // to scroll the old/hidden section underneath the sticky card deck.
      event.preventDefault();
      if (window.location.hash.toLowerCase() !== `#${id}`) {
        window.history.pushState(null, '', `#${id}`);
      }
      onNavigation(true);
    }

    onNavigation(false);
    const onHistoryNavigation = () => onNavigation(true);
    document.addEventListener('click', onInternalLinkClick);
    window.addEventListener('hashchange', onHistoryNavigation);
    window.addEventListener('popstate', onHistoryNavigation);
    return () => {
      document.removeEventListener('click', onInternalLinkClick);
      window.removeEventListener('hashchange', onHistoryNavigation);
      window.removeEventListener('popstate', onHistoryNavigation);
      window.history.scrollRestoration = previousRestoration;
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
      <div className="portfolio-deck portfolio-deck--compact">
        <nav className="page-shell" aria-label="Explore the portfolio">
          <div className="portfolio-deck__heading"><span>EXPLORE / 01—06</span></div>
          <ExploreCards active={active} />
        </nav>
      </div>
      <div className="portfolio-content" aria-live="off">
        {views.map(({ id, content }) => (
          <div key={id} className="portfolio-view" hidden={active !== id}>{content}</div>
        ))}
      </div>
    </main>
  );
}
