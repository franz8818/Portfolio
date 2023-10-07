function navbar(){
return (
<>
<nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Franz Seidel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex justify-content-center align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Acerca de mí</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Linkedin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">GitHub</a>
        </li>
        <li className="nav-item">
        <button type="button" className="contacto  btn btn-primary btn-sm">Contacto</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)

}

export default navbar