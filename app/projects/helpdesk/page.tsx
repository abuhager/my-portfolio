import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import HelpDeskWalkthrough from './walkthrough';
import styles from './walkthrough.module.css';

const title = 'HelpDesk SaaS live demo | Adham Abu Hager';
const description = 'Try HelpDesk with a shared demo account and sample tickets, or explore the dashboard, ticket queue, and reports in a screenshot walkthrough.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/projects/helpdesk' },
  openGraph: { title, description, url: '/projects/helpdesk', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function HelpDeskPreviewPage() {
  return (
    <main id="main" className={styles.page}>
      <Link className={styles.back} href="/#projects">← Back to projects</Link>
      <header className={styles.header}>
        <p className={styles.eyebrow}>LIVE DEMO / SCREENSHOT WALKTHROUGH</p>
        <h1>Inside HelpDesk SaaS.</h1>
        <p>A bilingual support workspace built with Angular and ASP.NET Core. Explore the dashboard, ticket queue, and reporting screens.</p>
        <p className={styles.notice}>Screenshot walkthrough with synthetic sample data. These screens illustrate the interface; they do not connect to a company workspace or run backend operations.</p>
      </header>
      <section className={styles.hosted} aria-labelledby="live-demo-title">
        <h2 id="live-demo-title">Try the live application</h2>
        <p>Choose the demo account on the HelpDesk sign-in page to explore the sample workspace. The app may take about a minute to wake up.</p>
        <Button label="Open HelpDesk demo" href="https://helpdesk-abuhager.onrender.com/login" external />
      </section>
      <HelpDeskWalkthrough />
      <section className={styles.contribution} aria-labelledby="contribution-title">
        <h2 id="contribution-title">What I built</h2>
        <p>The Angular interface and layered ASP.NET Core API, including company memberships, role-based access, ticket workflows, and persistence with Entity Framework Core and SQL Server.</p>
        <div className={styles.points}>
          <div><h3>Company boundaries</h3><p>Permissions follow the active company membership, keeping each workspace’s tickets and team operations separate.</p></div>
          <div><h3>Ticket lifecycle</h3><p>Priorities, assignment, comments, attachments, and audit history support the journey from reporting an issue to resolution.</p></div>
          <div><h3>Operational visibility</h3><p>Dashboards and reports bring workload, ticket status, and configurable SLA policies into view.</p></div>
        </div>
      </section>
    </main>
  );
}
