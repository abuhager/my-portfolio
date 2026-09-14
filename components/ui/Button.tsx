import Icon from '@/components/ui/Icon';

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'inverse';

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
  return (
    <a
      href={href}
      className={`button button--${variant}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download
        ? { download: 'Adham_Abu_Hager_Full_Stack_Developer_CV.pdf' }
        : {})}
    >
      <span>{label}</span>
      <Icon name={download ? 'arrow-down' : 'arrow-up-right'} size={17} />
    </a>
  );
}
