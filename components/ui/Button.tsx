import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'action';

interface ButtonProps {
  label: string;
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  label,
  href,
  variant = 'primary',
  external = false,
  icon,
}: ButtonProps) {
  const base = `
    inline-flex items-center gap-2
    text-[11px] font-semibold uppercase tracking-[0.06em]
    rounded-sm transition-all duration-200 font-sans
  `;

  const styles: Record<ButtonVariant, string> = {
    primary: `
      bg-[var(--cyan)] text-black border border-[var(--cyan)]
      px-8 py-3
      hover:bg-[#33ecff] hover:shadow-[0_0_28px_rgba(0,229,255,0.3)]
      hover:-translate-y-px
    `,
    outline: `
      bg-transparent text-[#e8e8ea] border border-[var(--border)]
      px-8 py-3
      hover:border-[var(--border-hover)]
      hover:text-[var(--cyan)]
      hover:bg-[var(--cyan-dim)]
    `,
    action: `
      bg-transparent text-[var(--text-muted)] border border-[var(--border)]
      px-4 py-2
      hover:border-[var(--border-hover)]
      hover:text-[var(--cyan)]
      hover:bg-[var(--cyan-dim)]
    `,
  };

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]}`} {...externalProps}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {label}
    </Link>
  );
}