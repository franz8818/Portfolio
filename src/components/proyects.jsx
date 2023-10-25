function proyects() {
  return (
    <>
      <section className="proyects">
        <div className="container">
          <div className="row proyects-container">
            <h2>Proyectos</h2>
            <div className="col-12 col-md-8 col-lg-4">
              <div className="card">
                <img className="img-proyects" src="src/assets/landing-page-cover.png" alt="Where2Day" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title">Where2Do</h3>
                  <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                  <img className="info-card" src="https://camo.githubusercontent.com/a1309b252e82434062012a8073fa9fc1416a96289b7ca11555577b9fbe1cf03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-4">
              <div className="card">
                <img className="img-proyects img-fluid" src="https://picsum.photos/200" alt="StarWars blog" />
                <div className="card-body">
                  <h3 className="card-title">Star Wars blog</h3>
                  <p className="card-text">HTML || CSS || JavaScript || Python || Shell || Mako</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-4">
              <div className="card">
                <img className="img-proyects img-fluid" src="https://picsum.photos/200" alt="StarWars API Fetch" />
                <div className="card-body">
                  <h3 className="card-title">Star Wars API Fetch</h3>
                  <p className="card-text">HTML || CSS || JavaScript || Python || Shell || Mako</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default proyects