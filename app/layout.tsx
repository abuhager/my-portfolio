import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const siteUrl = 'https://my-portfolio-five-azure-69.vercel.app';
const title = 'Adham Abu Hager | Full Stack Developer';
const description =
  'Full Stack Developer in Amman building web applications with TypeScript, Next.js, Node.js, MongoDB, and ASP.NET Core.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Adham Abu Hager Portfolio',
  authors: [{ name: 'Adham Abu Hager', url: 'https://github.com/abuhager' }],
  creator: 'Adham Abu Hager',
  category: 'technology',
  keywords: [
    'Adham Abu Hager',
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'Software Developer',
    'Web Developer',
    'TypeScript',
    'Next.js',
    'Node.js',
    'ASP.NET Core',
    'Amman',
    'Jordan',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Adham Abu Hager Portfolio',
    locale: 'en_US',
    type: 'profile',
    firstName: 'Adham',
    lastName: 'Abu Hager',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: 'only light',
  themeColor: '#f3f1ea',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
