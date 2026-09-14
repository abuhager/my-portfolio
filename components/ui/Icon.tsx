type IconName =
  | 'arrow-up-right'
  | 'arrow-down'
  | 'chevron-down'
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'location'
  | 'check'
  | 'code'
  | 'layers';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 18, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': true,
    focusable: false,
  } as const;

  if (name === 'github') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.22c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.93 10.93 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M5.34 3.5A1.84 1.84 0 1 1 1.66 3.5a1.84 1.84 0 0 1 3.68 0ZM1.92 7h3.16v10.17H1.92V7Zm5.14 0h3.03v1.39h.04c.42-.8 1.45-1.64 2.99-1.64 3.2 0 3.79 2.1 3.79 4.84v5.58h-3.16v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.61v5.04H7.06V7Z" transform="translate(2.5 1.5)" />
      </svg>
    );
  }

  if (name === 'arrow-up-right') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'arrow-down') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4v15m-5-5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'chevron-down') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'mail') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'phone') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M8.1 3.7 10 7.8 7.8 9.4a13.6 13.6 0 0 0 6.8 6.8l1.6-2.2 4.1 1.9v3a2 2 0 0 1-2 2A15.2 15.2 0 0 1 3.1 5.7a2 2 0 0 1 2-2h3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'location') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === 'check') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === 'code') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
