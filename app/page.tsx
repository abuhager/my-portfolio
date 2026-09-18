import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PortfolioViews from '@/components/layout/PortfolioViews';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';
import { siteData } from '@/lib/data';

const siteUrl = 'https://adhamabuhagerdev.site';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteData.name,
  url: siteUrl,
  jobTitle: siteData.role,
  email: 'mailto:abuhager360@gmail.com',
  telephone: '+962797283384',
  address: { '@type': 'PostalAddress', addressLocality: 'Amman', addressCountry: 'JO' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Al-Zaytoonah University of Jordan' },
  sameAs: ['https://github.com/abuhager','https://www.linkedin.com/in/adham-abuhager/'],
  knowsAbout: ['TypeScript','JavaScript','C#','React','Next.js','Node.js','Express.js','ASP.NET Core MVC','MongoDB','SQL Server','Software testing'],
};

export default function Home() {
  const featuredProject = siteData.projects[0];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <PortfolioViews
        home={<Hero name={siteData.name} role={siteData.role} location={siteData.location} headline={siteData.headline} introduction={siteData.introduction} featuredProject={featuredProject} />}
        about={<About about={siteData.about} principles={siteData.principles} />}
        skills={<TechStack skillGroups={siteData.skillGroups} />}
        projects={<Projects projects={siteData.projects} />}
        background={<Experience background={siteData.background} />}
        contact={<Footer name={siteData.name} role={siteData.role} location={siteData.location} {...siteData.contact} />}
      />
    </>
  );
}
