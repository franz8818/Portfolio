// HTML, CSS, JS -> TODO JUNTO :)

function Cv() {

    const contactoStyles = {
        fontSize: '3.8em',
        background: 'var(--bluer-)',
        color: 'white',
        padding: '10px 10px 10px',
        borderRadius: "20px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', /* Sombra con desplazamiento x=0, y=4px, desenfoque=8px y color RGBA */
        transition: 'boxShadow 0.3s ease', /* Efecto de transición suave en la sombra */
    };

    const iconStyles = {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'center',  // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        marginTop: '25px'
    };

    const sectionStyles = {
        maxWidth: '700px',
    };

    return (
        <div className="container" style={{ padding: '15px' }}>
            <section className="info-cv">
                <header className="d-flex justify-content-between">
                    <div className="perfil">
                        <h1 style={{ fontWeight: '800', fontSize: '3.5em' }}>Franz Seidel Sánchez</h1>
                        <h2 style={{ fontSize: '1.8em', maxWidth: '400px', color: 'var(--shadow-)' }}>Desarrollador Frontend Diseñador web</h2>
                        <hr style={{ margin: '20px 0', height: '2px', backgroundColor: 'var(--shadow-)' }} />
                    </div>
                    <div className="contacto" style={{ width: '380px'}}>
                        <div style={contactoStyles}>
                            <h2 style={{ fontSize: '0.4em', textAlign: 'center', margin: '0 auto' }}><i className="fa-regular fa-envelope" style={{ color: 'var(--white-)', marginRight: "5px" }}></i>franz8818@gmail.com</h2>
                            <h2 style={{ fontSize: '0.4em', marginTop: "5px", textAlign: 'center', margin: '0 auto' }}><i className="fa-solid fa-mobile-screen-button" style={{ color: 'var(--white-)', marginRight: "5px" }}></i>+57 316 270 2385</h2>
                            <div style={iconStyles}>
                                <a href="https://www.linkedin.com/in/franz8818/" target="_blank"><i className="fa-brands fa-linkedin" style={{ color: 'var(--white-)' }}></i></a>
                                <a href="https://github.com/franz8818" target="_blank"><i className="fa-brands fa-github" style={{ color: 'var(--white-)' }}></i></a>
                            </div>
                            <h4 style={{marginTop: "10px", textAlign: 'center', color: 'var(--white-)'}}> <i className="fa-solid fa-download" style={{ marginRight: "5px" }}></i>Descargar CV</h4>
                        </div>
                    </div>
                </header>
            </section>
            {/* Contenido principal */}
            <main className="d-flex justify-content-between">
                <section className="carrera" style={sectionStyles}>
                    <h3 style={{ fontWeight: '700' }}>Experiencia Profesional</h3>
                    <article>
                        <h5 style={{ fontWeight: '500', marginTop: "20px" }}>Emprendedor - <i>Macht Bikes, tienda de artículos deportivos</i></h5>
                        <ul style={{ marginRight: "120px" }}>
                            <li>Gestioné e-commerce de la marca por medio de la plataforma Shopify.</li>
                            <li>Experiencia en comercio electrónico con plataformas como Mercado Libre, Linio o Bike Exchange.</li>
                            <li>Realicé estrategias de SEO mediante palabras claves, contenidos, enlaces de otros sitios web y monitoreo de resultados.</li>
                        </ul>
                    </article>
                    <article>
                        <h5 style={{ fontWeight: '500' }}>Agente de ventas - <a href="https://luzinmobiliaria.com/" target="_blank" rel="noopener noreferrer"><i>Luz Inmobiliaria</i></a></h5>
                        <ul style={{ marginRight: "120px" }}>
                            <li>Desarrollo de estrategias de ventas: logré un crecimiento significativo en los arriendos y ventas de inmuebles de la empresa.</li>
                            <li>Fidelización de clientes: Por medio de una comunicación efectiva y regular con los clientes, logré resolver problemas e inquietudes, generando una lealtad perdurable durante años.</li>
                            <li>Negociación de precios de alquileres y ventas de inmuebles: Acuerdos mutuos sobre costos, plazos de entrega y otros términos.</li>
                        </ul>
                    </article>
                    <h3 style={{ fontWeight: '700', marginTop: "40px"}}>Proyectos</h3>
                <article>
                    <h5 style={{ fontWeight: '500', marginTop: "20px"}}>
                        <a href="https://github.com/Charlytoc/where2day" target="_blank" rel="noopener noreferrer">
                            Where2Day - <i>Red social con información de usuarios</i>
                        </a>
                    </h5>
                    <ul style={{ marginRight: "120px", marginBottom: "30px"}}>
                        <li>Landing page desarrollada con HTML, CSS y React bajo un efecto Parallax.</li>
                        <li>Creamos componentes de React para las funcionalidades de inicio de sesión y registro que se conectan con el back-end mediante Axios para solicitudes HTTPS con el fin de almacenar información del usuario.</li>
                        <li>El token JWT del usuario se almacena en Reacts-Redux Store hasta que la sesión expire o el usuario cierre la sesión.</li>
                        <li>Información de usuario mostrada de acuerdo con las llamadas de retorno de API de JWT basadas en el token asignado en React Store.</li>
                        <li>Desarrollo de acciones CRUD en la aplicación, lo que permite al usuario crear publicaciones, mostrárselas a otros usuarios, editar sus publicaciones, y eliminarlos, mediante métodos almacenados en objetos de Redux.</li>
                        <li>Diseñé los wireframes para los componentes las vistas de React. El proyecto se basó en una metodología Agile y Scrum que ayudó a cumplir con éxito los plazos de entrega.</li>
                    </ul>
                    </article>
                </section>
                {/* Contenido adicional, no pertenece directamente a */}
                <aside style={{ width: '370px', marginTop: "35px" }}>
                    <section className="conocimientos">
                        <h4 style={{ fontWeight: '600' }}>Tecnologías</h4>
                        <article>
                            <ul style={{ listStyleType: 'none', fontSize:"1.2em", marginTop: "35px", paddingLeft: "0" }}>
                                <li>HTML <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="90" max="100"> </progress> </li>
                                <li>CSS <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="80" max="100"> </progress> </li>
                                <li>JavaScript <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="60" max="100"> </progress> </li>
                                <li>React <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="70" max="100"> </progress> </li>
                                <li>Boostrap <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="80" max="100"> </progress> </li>
                                <li>Python <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="50" max="100"> </progress> </li>
                                <li>Git <br/> <progress style={{ width: '230px', height: '20px' }} min="0" value="80" max="100"> </progress> </li>
                            </ul>
                        </article>
                        <hr style={{ margin: '30px 0', height: '2px', backgroundColor: 'var(--shadow-)' }} />
                        <h4 style={{ fontWeight: '600', marginBottom: "20px" }}>Educación e Idiomas</h4>
                        <article>
                            <ul style={{ listStyleType: 'none', paddingLeft: "0", fontSize:"1.1em", }}>
                                <li><span style={{ fontStyle: 'italic' }}>Full Stack Developer</span> <br/> <span style={{ fontWeight: 'bold' }}>4Geeks Academy </span> <br/> <span style={{ fontStyle: 'italic' }}>07/2022 - 11/2022</span></li>
                                <br/>
                                <li><span style={{ fontStyle: 'italic' }}>Publicidad</span> <br/> <span style={{ fontWeight: 'bold' }}>Universidad <br/> Argentina de la Empresa </span> <span style={{ fontStyle: 'italic' }}> <br/> 01/2011 - 12/2015 </span></li>
                                <br/>
                                <li><span style={{ fontWeight: 'bold' }}>Español </span> - <span style={{ fontStyle: 'italic' }}>Nativo</span></li>
                                <li><span style={{ fontWeight: 'bold' }}>Inglés </span> - <span style={{ fontStyle: 'italic' }}>A1</span></li>
                            </ul>
                        </article>
                    </section>
                </aside>
            </main>
        </div >
    );
}

export default Cv;
