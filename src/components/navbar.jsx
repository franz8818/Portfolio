import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (sectionId) => {

    if (sectionId === 'proyects-section' || sectionId === 'contact-section') {
      if (location.pathname === '/cv') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        scrollToSection(sectionId);
      }
    } else {
      scrollToSection(sectionId);
    }
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Franz Seidel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" onClick={() => handleNavLinkClick('proyects-section')}>
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cv">CV</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/franz8818/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/franz8818" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li className="nav-item">
                <button type="button" className="contact-btn btn btn-light btn-sm" onClick={() => handleNavLinkClick('contact-section')}>
                  {/* button con onClick llama a la función scrollToSection con el ID correspondiente a la sección deseada. */}
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;