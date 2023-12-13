import React, { useEffect } from 'react'

function Swp() {
    useEffect(() => {
        // Al montar el componente, desplázate al principio
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="container swp">
                <div className="intro-proyect row">
                    <div className="intro-details col-6">
                        <div className="intro-name">
                            <h1>StarWars Blog</h1>
                            <h5>Página web de consulta e interacción utilizando la API SWAPI</h5>
                            <h4>Mis funciones</h4>
                            <h6>Desarrollo del <br /> Front-end/Back-End</h6>
                            <h6>Diseño de la página web</h6>
                            <h6>Diseño de funcionalidades</h6>
                            <a
                                href="https://github.com/franz8818/StarWars-Proyect"
                                target="_blank"
                                rel="noopener noreferrer" className="repo-link">
                                <i className="fab fa-github" style={{ color: 'var(--shadow-)', fontSize: '2em' }}></i>
                            </a>
                        </div>
                        <div className="intro-pic">
                            <img className="intro-img" src="StarWars Proyect/stwars-vista.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Proyect/stwars-fav2.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Proyect/stwars-cha.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Proyect/stwars-planet.png" alt="StarWarsProyect" />
                        </div>
                    </div>
                    <div className="intro-text col-6">
                        <p className="info-text">
                            Sitio web de información de la franquicia Star Wars con funcionalidades y la utilización de la API de SWAPI.
                            <br />
                            <br />
                            El sitio web lo desarrolo bajo el marco de desarrollo web NextJS y la biblioteca React. Utilicé lenguajes como JavaScript, HTML y CSS para crear el sitio.
                            <br />
                            <br />
                            La Swapi.dev. nos proporciona una gran cantidad de información sobre el universo de Star Wars, incluida información sobre personajes, planetas, vehículos y naves espaciales..
                            <br />
                            <br />
                            El usuario puede interactuar con los datos de la página, mediante el favoritos de navbar, puede agregar los personaje o/y planetas que desee.
                            <br />
                            <br />
                            En la página de inicio del sitio, los usuarios encontrarán una variedad de "tarjetas" que contienen información sobre personajes, planetas, vehículos y naves espaciales. Los usuarios pueden hacer clic en el botón "Más información" en cualquiera de estas tarjetas para acceder a información más detallada sobre el tema específico. En general, el sitio web ofrece una experiencia interactiva e informativa para los fanáticos de la franquicia Star Wars.
                            <br />
                            <br />
                            Para hacer que el sitio fuera más atractivo visualmente y rápido , implementé técnicas de diseño responsivo, con una interfaz visualmente atractiva y fácil de usar para los usuarios meidante las clases de Boostrap y componentes de React para una experiencia SPA.
                            <br />
                            <br />
                            En general, el sitio web es un proyecto desarrollado con tecnologías y herramientas modernas de desarrollo web que utilizan en el mercado laboral para ofrecer una experiencia rica y atractiva a los usuarios.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Swp