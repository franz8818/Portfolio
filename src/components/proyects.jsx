import React from 'react';
import { Link } from 'react-router-dom';


function Proyects() {
  return (
    <>
      <section className="proyects">
        <div className="cards-proyects row">
          <h2 className='title'>Proyectos</h2>
          <div className="card-proyect col-12 col-lg-4">
            <Link to="/proyectW2d" className="card-link">
              <div className="card">
                <img className="img-proyects" src="src/assets/landing-page-cover.png" alt="Where2Day" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title">Where2Day
                  </h3>
                  <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                  <div className='shields'>
                    <img className="info-card" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff" />
                    <img className="info-card" src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3" />
                    <img className="info-card" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" />
                    <img className="info-card" src="https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=react" />
                    <img className="info-card" src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=Bootstrap" />
                    <img className="info-card" src="http://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff" />
                    <img className="info-card" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" style={{ width: '60px', height: 'auto' }} />
                    <img className="info-card" src="https://img.shields.io/badge/-Git-%23F05032?style=flat-square&logo=git&logoColor=%23ffffff" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="card-proyect col-12 col-lg-4">
            <Link to="/starwarsProyect" className="card-link">
              <div className="card">
                <img className="img-proyects" src="src/assets/starwars-proyect-cover.png" alt="StarWars Proyect" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title ">StarWars Proyect</h3>
                  <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                  <div className='shields'>
                    <img className="info-card" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff" />
                    <img className="info-card" src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3" />
                    <img className="info-card" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" />
                    <img className="info-card" src="https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=react" />
                    <img className="info-card" src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=Bootstrap" />
                    <img className="info-card" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="card-proyect col-12 col-lg-4">
            <Link to="/starwarsRestApi" className="card-link">
              <div className="card">
                <img className="img-proyects" src="src/assets/starwarsAPI-cover.png" alt="StarWars Rest API" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title">StarWars Rest API</h3>
                  <p className="card-text">"Where2day" is a web-based platform that allows users to share and discover new experiences in their local area.</p>
                  <div className='shields'>
                    <img className="info-card" src="http://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff" />
                    <img className="info-card" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" style={{ width: '60px', height: 'auto' }} />
                    <img className="info-card" src="https://img.shields.io/badge/Postman-F6BB43?style=flat-square&logo=Postman&logoColor=white" />
                    <img className="info-card" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" />
                  </div>
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