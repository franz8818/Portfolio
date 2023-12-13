import React, { useEffect } from 'react';
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
                <img className="img-proyects" src="Where2Day/landing-page-cover.png" alt="Where2Day" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title">Where2Day
                  <h5>Poryecto colaborativo </h5>
                  </h3>
                  <p className="card-text"> Comparte y descubre nuevas experiencias. </p>
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
                <img className="img-proyects" src="StarWars Proyect/stwars-vista.png" alt="StarWars Proyect" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title ">StarWars Blog</h3>
                  <p className="card-text">"Sitio web de Star Wars con infomarción de consulta y interacción con el usuario.</p>
                  <div className='shields'>
                    <img className="info-card" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff" />
                    <img className="info-card" src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3" />
                    <img className="info-card" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" />
                    <img className="info-card" src="https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=react" />
                    <img className="info-card" src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=Bootstrap" />
                    <img className="info-card" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" style={{ width: '75px', height: 'auto' }}/>
                    <img className="info-card" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="card-proyect col-12 col-lg-4">
            <Link to="/starwarsRestApi" className="card-link">
              <div className="card">
                <img className="img-proyects" src="StarWars Rest API/starwarsAPI-cover.png" alt="StarWars Rest API" /> {/* img-fluid -> ADAPTA LA IMAGEN AL RESPONSIVE  */}
                <div className="card-body">
                  <h3 className="card-title">StarWars Rest API</h3>
                  <p className="card-text">API REST conectada a una base de datos con endpoints GET POST PUT DELETE implementados basado en tablas relacionales.</p>
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