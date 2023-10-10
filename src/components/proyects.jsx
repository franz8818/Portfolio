function proyects(){
    return (
    <>   
<div className="hero-body container">
<div className="row col g-3">
  <div className="col">
    <div className="card">
    <img className="img-proyects img-fluid" src="https://picsum.photos/200" alt="Where2Day" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
      <div className="card-body">
        <h3 className="card-title">Where2Do</h3>
        <p className="info-card"> HTML || CSS || JavaScript || Python || Shell || Mako</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="img-proyects img-fluid" src="https://picsum.photos/200" alt="StarWars blog" />
      <div className="card-body">
        <h3 className="card-title">Star Wars blog</h3>
        <p className="card-text">HTML || CSS || JavaScript || Python || Shell || Mako</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img className="img-proyects img-fluid" src="https://picsum.photos/200" alt="StarWars API Fetch" />
      <div className="card-body">
        <h3 className="card-title">Star Wars API Fetch</h3>
        <p className="card-text">HTML || CSS || JavaScript || Python || Shell || Mako</p>
      </div>
    </div>
  </div>

 {/* PROYECTOS EN PROCESO */}

  {/* <div className="col">
    <div className="card">
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">e-Shop</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Pokemon proyect</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">e-Shop</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
</div>
</div>
</>
)
}

export default proyects