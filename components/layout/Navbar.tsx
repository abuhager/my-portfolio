'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About me',   href: '#hero'       },
  { label: 'Stack',      href: '#stack'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled,      setScrolled]      = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      role="banner"
      className={`
        sticky top-0 z-50 w-full
        bg-[#0d0d0f]/90 backdrop-blur-md
        border-b border-white/[0.07]
        transition-shadow duration-300
        ${scrolled ? 'shadow-[0_1px_0_rgba(0,229,255,0.07)]' : ''}
      `}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-300 mx-auto h-14 px-6 flex items-center justify-between"
      >
        

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              // ✅ لازم يكون في <li> هنا
              <li key={href}>
                <a
                  href={href}
                  className={`
                    text-[11px] uppercase tracking-widest font-medium
                    transition-colors duration-200
                    ${isActive ? 'text-[#00e5ff]' : 'text-[#8a8a8f] hover:text-white'}
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="block mx-auto mt-0.5 w-1 h-1 rounded-full bg-[#00e5ff]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:inline-flex items-center gap-2
            text-[11px] uppercase tracking-widest font-semibold
            border border-white/[0.07] text-[#e8e8ea]
            px-4 py-2 rounded-sm
            hover:border-[#00e5ff]/40 hover:text-[#00e5ff] hover:bg-[#00e5ff]/8
            transition-all duration-200
          "
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            {/* ✅ كان مكتوب e x1 .. هنا الخط الصحيح */}
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-[#8a8a8f] hover:text-white transition-colors duration-200"
        >
          <span
            className={`block h-px w-5 bg-current transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-out
          border-t border-white/[0.07]
          bg-[#0d0d0f]/95 backdrop-blur-md
          ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            // ✅ برضو هنا لازم <li>
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-[13px] uppercase tracking-widest font-medium text-[#8a8a8f] hover:text-[#00e5ff] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          {/* زر الـ Resume في الموبايل */}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                inline-block text-[11px] uppercase tracking-widest font-semibold
                border border-white/[0.07] text-[#e8e8ea]
                px-4 py-2 rounded-sm mt-1
                hover:border-[#00e5ff]/40 hover:text-[#00e5ff]
                transition-all duration-200
              "
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}