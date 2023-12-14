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
        marginTop: '5px'
    };

    const sectionStyles = {
        maxWidth: '700px',
    };

    return (
        <div className="container">
        <div className="info" style={{ padding: '10px', margin: "20px" }}>
            <section className="info-cv">
                <header className="d-flex justify-content-between"> 
                    <div className="perfil-cv" style={{  marginTop:"20px" }}>
                        <h1 style={{ fontWeight: '800', fontSize: '3.5em' }}>Franz Seidel Sánchez</h1>
                        <h2 style={{ fontSize: '1.8em', maxWidth: '400px', color: 'var(--shadow-)' }}>Desarrollador Frontend Diseñador web</h2>
                        <hr style={{ margin: '20px 0', height: '2px', backgroundColor: 'var(--shadow-)' }} />
                    </div>
                </header>
            </section>
            {/* Contenido principal */}
            <main className="d-flex justify-content-between">
                <section className="carrera" style={sectionStyles}>
                    <h3 style={{ fontWeight: '700' }}>Experiencia Profesional</h3>
                    <article>
                        <h5 style={{ fontWeight: '500', marginTop: "20px" }}>Asistente de Marketing Digital, - <a href="https://luzinmobiliaria.com/" target="_blank" rel="noopener noreferrer"><i>Luz Inmobiliaria</i></a></h5>
                        <h6><i>01/2022 – presente</i></h6>
                        <ul style={{ marginRight: "120px" }}>
                        <li>Encargado del proyecto 2023 de producción de contenido por medio de Drones y grabaciones en locaciones interiores.</li>
                        <li>Colabore con en el equipo de marketing en generar estrategias y tácticas en línea, como SEO, SEM, redes sociales, publicidad en línea y análisis web.</li>
                        <li>Crear, editar y gestionar el contenido en diversos canales, como blogs, redes sociales y sitios web.</li>
                        <li>Colabore con la organización y planeación de eventos y presencia en ferias comerciales para aumentar la visibilidad y la confianza de la marca.</li>
                        <li>Colabore con el diseño del e-mail marketing, planeamos un contenido persuasivo e informativo en las campañas.</li>
                        </ul>
                    </article>
                    <article>
                        <h5 style={{ fontWeight: '500' }}>Agente de ventas - <a href="https://luzinmobiliaria.com/" target="_blank" rel="noopener noreferrer"><i>Luz Inmobiliaria</i></a></h5>
                        <h6><i>02/2019 – 12/2021</i></h6>
                        <ul style={{ marginRight: "120px" }}>
                            <li>Desarrollo de estrategias de ventas: logre un crecimiento significativo en los arriendos y ventas de inmuebles de la empresa.</li>
                            <li>Fidelización de clientes: Por medio de una comunicación efectiva y regular con los clientes, logré resolver problemas e inquietudes, generando una lealtad perdurable durante años.</li>
                            <li>Negociación de precios de alquileres y ventas de inmuebles: Acuerdos mutuos sobre costos, plazos de entrega y otros términos.</li>
                        </ul>
                    </article>
                    <article>
                        <h5 style={{ fontWeight: '500' }}> Asistente de ventas y marketing - <i>Macht Bikes, tienda de artículos deportivos</i></h5>
                        <h6><i>06/2016 – 12/2018</i></h6>
                        <ul style={{ marginRight: "120px" }}>
                            <li>Posicione la tienda en internet mediante un e-commerce por medio de la plataforma Shopify.</li>
                            <li>Colabore para que la tienda dejare de ser solo física a entrar al comercio electrónico en plataformas como Mercado Libre, Linio o Bike Exchange.</li>
                            <li>Realice estrategias de SEO mediante palabras claves, contenidos, enlaces de otros sitios web y monitoreo de resultados.</li>
                            <li>Atención al cliente en tienda física. Desarrolle habilidades comunicativas y de persuasión.</li>
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
                <aside style={{ width: '370px', marginTop: "5px" }}>
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
        </div>
    );
}

export default Cv;
