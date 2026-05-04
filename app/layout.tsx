import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adham Abu Hajar — Full-Stack Developer',
  description: 'Full-Stack Developer building scalable web platforms with Node.js, Next.js, and ASP.NET Core. Based in Amman, Jordan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={syne.variable}>
      <body className="text-[#e8e8ea] antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}