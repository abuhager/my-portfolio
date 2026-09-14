import { SiteData, SocialLink } from '@/types';

const icons: Record<SocialLink['icon'], string> = {
  mail: '↗',
  github: 'GH',
  linkedin: 'in',
  phone: '↗',
};

type FooterProps = Pick<SiteData, 'name'> & SiteData['contact'];

export default function Footer({ name, headline, tagline, links }: FooterProps) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[var(--surface)]">
      <div className="footer-glow" aria-hidden="true" />
      <div className="page-shell relative py-24 sm:py-32">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">05 — Contact</p>
        <h2 className="mt-7 max-w-4xl text-balance text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--text)]">{headline}</h2>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)]">{tagline}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {links.map((link) => (
            <a key={link.href} href={link.href} target={link.icon === 'github' || link.icon === 'linkedin' ? '_blank' : undefined} rel={link.icon === 'github' || link.icon === 'linkedin' ? 'noopener noreferrer' : undefined} className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-[var(--line-strong)] bg-black/10 px-5 text-[13px] font-medium text-[var(--text-soft)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
              <span className="grid min-w-5 place-items-center font-mono text-[10px] font-bold" aria-hidden="true">{icons[link.icon]}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="page-shell flex flex-col gap-3 py-6 text-[10px] uppercase tracking-[0.14em] text-[var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {name}</p>
          <p>Designed & built with Next.js and TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
