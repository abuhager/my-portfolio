type BadgeVariant = 'cyan' | 'chip';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export default function Badge({ label, variant = 'cyan' }: BadgeProps) {
  const styles: Record<BadgeVariant, string> = {
    // بطاقات المشاريع — خلفية cyan شفافة
    cyan: `
      text-[var(--cyan)] bg-[var(--cyan-dim)]
      border border-[rgba(0,229,255,0.2)]
    `,
    // Tech Stack chips — خلفية داكنة
    chip: `
      text-[var(--text-muted)] bg-[var(--surface-2)]
      border border-[var(--border)]
      hover:border-[var(--border-hover)]
      hover:text-[var(--cyan)]
      hover:bg-[var(--cyan-dim)]
      transition-colors duration-200
    `,
  };

  return (
    <span className={`
      inline-block text-[11px] font-medium tracking-wide
      px-2 py-0.5 rounded-sm font-sans whitespace-nowrap
      ${styles[variant]}
    `}>
      {label}
    </span>
  );
}