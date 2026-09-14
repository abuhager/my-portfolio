import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  label: string;
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  download?: boolean;
}

export default function Button({
  label,
  href,
  variant = 'primary',
  external = false,
  download = false,
}: ButtonProps) {
  const styles: Record<ButtonVariant, string> = {
    primary: 'border-[var(--accent)] bg-[var(--accent)] text-[#07110f] hover:bg-[#b8ff77] hover:border-[#b8ff77]',
    secondary: 'border-[var(--line-strong)] bg-white/[0.025] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
    text: 'border-transparent px-0 text-[var(--text)] hover:text-[var(--accent)]',
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 text-[13px] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${styles[variant]}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: true } : {})}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        {download ? '↓' : '↗'}
      </span>
    </Link>
  );
}
