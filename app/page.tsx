import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';
import { siteData } from '@/lib/data';

const siteUrl = 'https://my-portfolio-five-azure-69.vercel.app';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteData.name,
  url: siteUrl,
  jobTitle: siteData.role,
  email: 'mailto:abuhager360@gmail.com',
  telephone: '+962797283384',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amman',
    addressCountry: 'JO',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Al-Zaytoonah University of Jordan',
  },
  sameAs: [
    'https://github.com/abuhager',
    'https://www.linkedin.com/in/adham-abuhager/',
  ],
  knowsAbout: [
    'TypeScript',
    'JavaScript',
    'C#',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'ASP.NET Core MVC',
    'MongoDB',
    'SQL Server',
    'Software testing',
  ],
};

export default function Home() {
  const featuredProject = siteData.projects[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
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
          featuredProject={featuredProject}
        />
        <Projects projects={siteData.projects} />
        <About about={siteData.about} principles={siteData.principles} />
        <TechStack skillGroups={siteData.skillGroups} />
        <Experience background={siteData.background} />
      </main>
      <Footer
        name={siteData.name}
        role={siteData.role}
        location={siteData.location}
        {...siteData.contact}
      />
    </>
  );
}
