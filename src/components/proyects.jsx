import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Proyects() {
  return (
    <>
      <section className="proyects">
        <div className="cards-proyects row container">
          <div className="col-12 col-md-4">
            <Link to="/proyectW2d" className="card-link">
              <div className="card">
                <img className="img-proyects" src="src/assets/landing-page-cover.png" alt="Where2Day" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title">Where2Day
                  </h3>
                  <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                  <img className="info-card" src="https://camo.githubusercontent.com/a1309b252e82434062012a8073fa9fc1416a96289b7ca11555577b9fbe1cf03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/starwarsProyect" className="card-link">
              <div className="card">
                <img className="img-proyects" src="src/assets/starwars-proyect-cover.png" alt="StarWars Proyect" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title ">StarWars Proyect</h3>
                  <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                  <img className="info-card" src="https://camo.githubusercontent.com/a1309b252e82434062012a8073fa9fc1416a96289b7ca11555577b9fbe1cf03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-4">
          <Link to="/starwarsRestApi" className="card-link">
            <div className="card">
              <img className="img-proyects" src="src/assets/starwarsAPI-cover.png" alt="StarWars Rest API" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
              <div className="card-body">
                <h3 className="card-title">StarWars Rest API</h3>
                <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                <img className="info-card" src="https://camo.githubusercontent.com/a1309b252e82434062012a8073fa9fc1416a96289b7ca11555577b9fbe1cf03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541" />
                <img className="info-card" src="https://camo.githubusercontent.com/a1309b252e82434062012a8073fa9fc1416a96289b7ca11555577b9fbe1cf03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541" />
                <img className="info-card" src="https://camo.githubusercontent.com/a1309b252e82434062012a8073fa9fc1416a96289b7ca11555577b9fbe1cf03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d2532334637444631433f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d303030303030266c6162656c436f6c6f723d25323346374446314326636f6c6f723d253233464643453541" />             
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Proyects