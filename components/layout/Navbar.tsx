'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#top');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash || '#top';
      if (hash !== '#main') setActive(hash);
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="page-shell site-nav">
        <a href="#top" className="brand" aria-label="Adham Abu Hager, home" aria-current={active === '#top' ? 'page' : undefined}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__copy">
            <strong>Adham Abu Hager</strong>
            <span>Full-Stack Developer</span>
          </span>
        </a>

        <ul className="desktop-nav">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-current={active === link.href ? 'page' : undefined}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a className="nav-cv" href="/resume.pdf" download="Adham_Abu_Hager_Full_Stack_Developer_CV.pdf">
          CV
          <Icon name="arrow-down" size={15} />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className={open ? 'menu-button menu-button--open' : 'menu-button'}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <span />
          <span />
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="mobile-nav">
          <div className="page-shell">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} aria-current={active === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>
                    {link.label}
                    <Icon name="arrow-up-right" size={18} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mobile-nav__cv"
              href="/resume.pdf"
              download="Adham_Abu_Hager_Full_Stack_Developer_CV.pdf"
              onClick={() => setOpen(false)}
            >
              Download CV
              <Icon name="arrow-down" size={18} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
