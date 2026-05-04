import Navbar     from '@/components/layout/Navbar';
import Footer     from '@/components/layout/Footer';
import Hero       from '@/components/sections/Hero';
import TechStack  from '@/components/sections/TechStack';
import Projects   from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import { siteData } from '@/lib/data';

export default function Home() {
  return (
    <>
<Navbar />
      <main id="main">
        <Hero
          name={siteData.name}
          eyebrow={siteData.eyebrow}
          heroValue={siteData.heroValue}
        />
        <TechStack techStack={siteData.techStack} />
        <Projects  projects={siteData.projects}   />
        <Experience timeline={siteData.timeline}  />
      </main>
      <Footer
        name={siteData.name}
        tagline={siteData.contact.tagline}
        links={siteData.contact.links}
      />
    </>
  );
}