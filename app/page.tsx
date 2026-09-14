import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import { siteData } from '@/lib/data';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adham Abu Hager',
  jobTitle: 'Full-Stack Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amman',
    addressCountry: 'Jordan',
  },
  email: 'mailto:abuhager360@gmail.com',
  url: 'https://my-portfolio-five-azure-69.vercel.app',
  sameAs: [
    'https://github.com/abuhager',
    'https://www.linkedin.com/in/adham-abuhager/',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Al-Zaytoonah University of Jordan',
  },
  knowsAbout: ['TypeScript', 'Node.js', 'Next.js', 'React', 'ASP.NET Core', 'MongoDB', 'SQL Server'],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero
          name={siteData.name}
          role={siteData.role}
          location={siteData.location}
          headline={siteData.headline}
          introduction={siteData.introduction}
          availability={siteData.availability}
        />
        <About about={siteData.about} focus={siteData.focus} />
        <TechStack skillGroups={siteData.skillGroups} />
        <Projects projects={siteData.projects} />
        <Experience timeline={siteData.timeline} />
      </main>
      <Footer name={siteData.name} {...siteData.contact} />
    </>
  );
}
