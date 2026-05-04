import { SocialLink } from '@/types';

interface FooterProps {
  name: string;
  tagline: string;
  links: SocialLink[];
}

// ── Icons ─────────────────────────────────────────────────
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
      aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839
        9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605
        -3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069
        -.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
        2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
        0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0
        .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504
        .337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1
        2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
        4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012
        2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22
        12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
      aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852
        -3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
        c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
        5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064
        0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
        0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771
        24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0
        22.222 0h.003z"/>
    </svg>
  );
}

const ICONS = {
  mail:     MailIcon,
  github:   GithubIcon,
  linkedin: LinkedinIcon,
};

export default function Footer({ name, tagline, links }: FooterProps) {
  return (
    <footer
      id="contact"
      aria-label="Contact and Footer"
      className="border-t border-[var(--border)] bg-[#0a0a0c]"
    >
      {/* ── Contact Section ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col gap-8">
        <div>
          <p className="
            text-[11px] uppercase tracking-[0.12em] font-medium
            text-[var(--cyan)] mb-3
          ">
            Contact
          </p>
          <h2 className="
            text-[clamp(1.6rem,3vw,2rem)]
            font-bold tracking-tight text-white mb-3
          ">
            Let&apos;s Talk
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] max-w-[480px] leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap gap-3">
          {links.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.icon}
                href={link.href}
                target={link.icon !== 'mail' ? '_blank' : undefined}
                rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="
                  inline-flex items-center gap-2.5
                  text-[13px] font-medium
                  border border-[var(--border)]
                  text-[var(--text-muted)]
                  px-4 py-2.5 rounded-sm
                  hover:border-[var(--border-hover)]
                  hover:text-[var(--cyan)]
                  hover:bg-[var(--cyan-dim)]
                  transition-all duration-200
                "
              >
                <Icon />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[var(--border)]">
        <div className="
          max-w-[1200px] mx-auto px-6 py-5
          flex flex-col sm:flex-row justify-between items-center gap-3
        ">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-faint)]">
            Built by {name} · 2026
          </p>
          <div className="flex items-center gap-2">
            {/* Status dot */}
            <span className="
              relative flex h-2 w-2
            ">
              <span className="
                animate-ping absolute inline-flex h-full w-full
                rounded-full bg-[var(--cyan)] opacity-40
              "/>
              <span className="
                relative inline-flex rounded-full h-2 w-2
                bg-[var(--cyan)]
              "/>
            </span>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-faint)]">
              Open to opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}