import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

const title = 'Adham Abu Hager — Full-Stack Developer';
const description = 'Full-Stack Developer in Amman building secure web products with TypeScript, Node.js, React, Next.js, and ASP.NET Core.';

export const metadata: Metadata = {
  metadataBase: new URL('https://my-portfolio-five-azure-69.vercel.app'),
  title,
  description,
  authors: [{ name: 'Adham Abu Hager', url: 'https://github.com/abuhager' }],
  creator: 'Adham Abu Hager',
  keywords: ['Adham Abu Hager', 'Full-Stack Developer', 'Backend Developer', 'Node.js', 'Next.js', 'ASP.NET Core', 'Amman'],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Adham Abu Hager — Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07110f',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
