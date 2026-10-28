'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './walkthrough.module.css';

const screens = [
  { id: 'dashboard', label: '01 / Dashboard', title: 'See what needs attention.', description: 'The Arabic dashboard brings ticket status, priority, and workload into one place so a support team can identify its next action.', src: '/projects/helpdesk-dashboard.webp', alt: 'HelpDesk Arabic dashboard with sample ticket status, priorities, and workload indicators' },
  { id: 'tickets', label: '02 / Tickets', title: 'Find and follow the work.', description: 'The ticket queue presents requests with their status, priority, and assignee, alongside search and filtering controls. This preview shows a captured sample queue.', src: '/projects/helpdesk-tickets.webp', alt: 'HelpDesk Arabic ticket queue with sample requests, statuses, priorities, and assignees' },
  { id: 'reports', label: '03 / Reports', title: 'Understand the support workload.', description: 'Reporting screens summarize ticket priorities, team activity, and SLA information to help administrators and team leads review their workspace.', src: '/projects/helpdesk-reports.webp', alt: 'HelpDesk Arabic reports with sample priority distribution, team workload, and SLA metrics' },
];

export default function HelpDeskWalkthrough() {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];
  return (
    <section aria-label="HelpDesk screenshot walkthrough">
      <div className={styles.controls} aria-label="Choose a screen">
        {screens.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={selected === index} aria-controls="preview-screen" onClick={() => setSelected(index)}>{item.label}</button>
        ))}
      </div>
      <div id="preview-screen" className={styles.screen}>
        <div aria-live="polite" aria-atomic="true" className={styles.caption}>
          <h2>{screen.title}</h2>
          <p>{screen.description}</p>
        </div>
        <a href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${screen.id} screenshot`}>
          <Image src={screen.src} alt={screen.alt} width={1440} height={1000} sizes="(max-width: 1100px) 100vw, 1100px" className={styles.image} />
        </a>
        <p className={styles.imageHint}>Select the image to view it at full size. Sample data only.</p>
      </div>
    </section>
  );
}
