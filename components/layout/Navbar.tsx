import Icon from '@/components/ui/Icon';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Site" className="page-shell site-nav">
        <a href="#top" className="brand" aria-label="Adham Abu Hager, return to portfolio overview">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__copy">
            <strong>Adham Abu Hager</strong>
            <span>Full-Stack Developer</span>
          </span>
        </a>
        <a className="nav-cv" href="/resume.pdf" download="Adham_Abu_Hager_Full_Stack_Developer_CV.pdf">
          CV <Icon name="arrow-down" size={15} />
        </a>
      </nav>
    </header>
  );
}
