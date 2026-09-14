import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import type { SiteData } from '@/types';

type FooterProps = Pick<SiteData, 'name' | 'role' | 'location'> & SiteData['contact'];

export default function Footer({
  name,
  role,
  location,
  headline,
  description,
  links,
}: FooterProps) {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="site-footer">
      <div className="page-shell">
        <div className="contact-panel">
          <div className="contact-panel__copy">
            <p className="contact-panel__eyebrow">Contact</p>
            <h2 id="contact-title">{headline}</h2>
            <p>{description}</p>
            <div className="contact-panel__actions">
              <Button
                label="Email me"
                href="mailto:abuhager360@gmail.com"
                variant="inverse"
              />
              <Button label="Download CV" href="/resume.pdf" variant="secondary" download />
            </div>
          </div>

          <address className="contact-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-links__icon">
                  <Icon name={link.icon} size={18} />
                </span>
                <span>{link.label}</span>
                <Icon name="arrow-up-right" size={16} />
              </a>
            ))}
          </address>
        </div>

        <div className="footer-bottom">
          <div>
            <strong>{name}</strong>
            <span>{role} · {location}</span>
          </div>
          <p>Designed and built with Next.js and TypeScript · © 2026</p>
        </div>
      </div>
    </footer>
  );
}
