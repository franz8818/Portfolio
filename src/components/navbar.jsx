import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId) => {
    {/* La función scrollToSection toma sectionId como parámetro, que es el ID de la sección a la que deseamos desplazarnos suavemente. */}
    const section = document.getElementById(sectionId);
    {/* Aquí estamos utilizando document.getElementById para obtener el elemento en el DOM que tiene el id esperado y asignándolo a la variable esperada */}
    if (section) {
       {/* Este if verifica si se encontró un elemento con ese ID. Si es así, se procede con el siguiente paso */}
      section.scrollIntoView({ behavior: 'smooth' });
      {/* Hace que el navegador haga scroll suavemente hacia la sección identificada. */}
    }
  };

  
  const handleNavLinkClick = (sectionId) => {
    if (sectionId === 'proyects-section') {
      navigate('/');
    } else {
      scrollToSection(sectionId);
    }
  };

  const combinedClickHandler = (sectionId) => {
    // Llama a ambas funciones
    scrollToSection(sectionId);
    handleNavLinkClick(sectionId);
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
                <a className="nav-link" aria-current="page" href="#" onClick={() => combinedClickHandler('proyects-section')}>
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
                <button type="button" className="contact-btn btn btn-light btn-sm" onClick={() => scrollToSection('contact-section')}>
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