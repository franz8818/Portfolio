function navbar(){
return (
<>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid"> {/* Contenedor que se adapata al 100% del ancho */} 
    <a className="navbar-brand" href="#">Franz Seidel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CV</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/franz8818/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/franz8818"target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li className="nav-item">
        <button type="button" className="contact btn btn-light btn-sm">Contacto</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)

}

export default navbar