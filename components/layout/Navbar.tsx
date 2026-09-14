'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Background', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#07110f]/85 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="page-shell flex h-[72px] items-center justify-between">
        <a href="#hero" aria-label="Adham Abu Hager, home" className="group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] font-mono text-[11px] font-bold text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]">AH</span>
          <span className="hidden text-[12px] font-semibold text-[var(--text)] sm:block">Adham Abu Hager</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:abuhager360@gmail.com" className="hidden rounded-full border border-[var(--line-strong)] px-4 py-2 text-[11px] font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] md:block">
          Let&apos;s talk
        </a>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--text)] md:hidden">
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="font-mono text-base">{open ? '×' : '≡'}</span>
        </button>
      </nav>

      <div id="mobile-navigation" className={`overflow-hidden border-t border-[var(--line)] bg-[#07110f] transition-[max-height,opacity] duration-300 md:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="page-shell flex flex-col py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block border-b border-[var(--line)] py-4 text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)]">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
