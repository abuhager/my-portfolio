import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import HelpDeskWalkthrough from './walkthrough';
import styles from './walkthrough.module.css';

const title = 'HelpDesk SaaS walkthrough | Adham Abu Hager';
const description = 'Explore the HelpDesk dashboard, ticket queue, and reports through screenshots with sample data. No account required.';

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
        <p className={styles.eyebrow}>PROJECT WALKTHROUGH / NO ACCOUNT REQUIRED</p>
        <h1>Inside HelpDesk SaaS.</h1>
        <p>A bilingual support workspace built with Angular and ASP.NET Core. Explore the dashboard, ticket queue, and reporting screens.</p>
        <p className={styles.notice}>Screenshot walkthrough with synthetic sample data. These screens illustrate the interface; they do not connect to a company workspace or run backend operations.</p>
      </header>
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
      <section className={styles.hosted} aria-labelledby="hosted-title">
        <h2 id="hosted-title">Visit the hosted application</h2>
        <p>The hosted app requires sign-in or company registration. It runs on Render and may take about a minute to wake up after inactivity.</p>
        <Button label="Open app · sign-in required" href="https://helpdesk-abuhager.onrender.com" external />
      </section>
    </main>
  );
}
