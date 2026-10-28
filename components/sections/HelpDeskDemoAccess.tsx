import Button from '@/components/ui/Button';
import { helpdeskDemo } from '@/lib/helpdesk-demo';
import styles from './HelpDeskDemoAccess.module.css';

export default function HelpDeskDemoAccess({ compact = false }: { compact?: boolean }) {
  const Heading = compact ? 'h4' : 'h2';
  return (
    <section id="demo-access" className={styles.access} aria-labelledby="demo-access-title">
      <Heading id="demo-access-title">Try the live demo</Heading>
      <p>Sign in as a team lead to explore tickets, comments, assignments, and reports.</p>
      <dl>
        <div><dt>Email</dt><dd><code dir="ltr">{helpdeskDemo.email}</code></dd></div>
        <div><dt>Password</dt><dd><code dir="ltr">{helpdeskDemo.password}</code></dd></div>
      </dl>
      <p className={styles.note}>Shared demo workspace with sample data. Changes are visible to other visitors. The app may take about a minute to wake up.</p>
      {!compact ? <Button label="Open demo sign-in" href={helpdeskDemo.loginUrl} external /> : null}
    </section>
  );
}
