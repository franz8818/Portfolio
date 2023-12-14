import React, { useEffect } from 'react'

function Sra() {
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
                            <h1>StarWars Rest API</h1>
                            <h5>Página web de consulta e interacción utilizando la API SWAPI</h5>
                            <h4>Mis funciones</h4>
                            <h6>Desarrollo del Back-End</h6>
                            <h6>Creación de tablas relacionales</h6>
                            <a
                                href="https://github.com/franz8818/StarWars-Rest-API"
                                target="_blank"
                                rel="noopener noreferrer" className="repo-link">
                                <i className="fab fa-github" style={{ color: 'var(--shadow-)', fontSize: '2em' }}></i>
                            </a>
                        </div>
                        <div className="intro-pic">
                            <img className="intro-img" src="StarWars Rest API/starwarsAPI-cover.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Rest API/people.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Rest API/postman.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Rest API/postman2.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Rest API/postman3.png" alt="StarWarsProyect" />
                            <img className="intro-img" src="StarWars Rest API/user.png" alt="StarWarsProyect" />
                        </div>
                    </div>
                    <div className="intro-text col-6">
                        <p className="info-text">
                            Mediante el lenguaje de programación Python utilice el framework Flask junto con Flask-SQLAlchemy para crear una API que maneja información sobre usuarios, favoritos, personas, planetas y vehículos de la saga StarWars. Con el objetivo de entender de que se trata el Back-End y el uso de un lenguaje diferente.
                            <br />
                            <br />
                            Las tablas en la base de datos representan información específica sobre personajes, planetas y vehículos, respectivamente. Se han definido varios endpoints para realizar operaciones CRUD (Create, Read, Update, Delete), 
                        	Uso de operaciones básicas como obtener todos los elementos, obtener uno por su ID, crear uno nuevo, modificar y eliminar.
                           <br />
                            <br />
                            Este código proporciona una API funcional y organizada para manejar información relacionada con el universo de Star Wars, puede ser implementado como un servicio web para proporcionar acceso y manipulación de datos a través de los endpoints definidos. 
                            <br />
                            <br />
                            Además, la integración con Flask, facilita la administración de los datos a través de una interfaz de administración web.                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Sra