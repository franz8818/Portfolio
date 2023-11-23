import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function StarWarsRest() {
  return (
    <>
      <section className="StarWarsRest">
                <div className="intro-proyect row">
                    <div className="intro-pic col-6">
                        <h1>Where2Day</h1>
                        <h4>A social app to share experiences</h4>
                        <h5>Mis funciones</h5>
                        <h6>UX / UI </h6>
                        <h6>Diseño de la página web</h6>
                        <h6>Diseño de funcionalidades</h6>
                    </div>
                    <div className="intro col-6">
                        <p className="info-text">
                            Where2day" es una plataforma basada en web que permite a los usuarios compartir y descubrir nuevas experiencias en su área local. El sitio está construido utilizando React para el front-end, CSS para el estilo, GSAP para animaciones, Python para el backend y Flask para el marco web.
                            <br />
                            <br />
                            El objetivo principal de "Where2day" es inspirar a los usuarios a probar cosas nuevas y aprovechar al máximo sus días. Ya sea probar un nuevo restaurante, visitar una atracción local o probar una nueva actividad, "Where2day" ofrece un lugar para que los usuarios compartan sus experiencias y encuentren nuevas ideas sobre cosas que hacer.
                            <br />
                            <br />
                            Para utilizar el sitio, los usuarios pueden crear una cuenta y comenzar a publicar sobre sus experiencias. Cada publicación incluye una descripción de la experiencia, fotografías y una etiqueta de ubicación. Luego, otros usuarios pueden explorar estas publicaciones para encontrar nuevas ideas sobre cosas que hacer en su área.
                            <br />
                            <br />
                            Además de buscar publicaciones, los usuarios también pueden buscar experiencias o ubicaciones específicas utilizando la función de búsqueda del sitio. Esto hace que sea fácil encontrar exactamente lo que estás buscando, ya sea un tipo específico de actividad o una ubicación particular.
                            <br />
                            <br />
                            En general, "Where2day" es un gran recurso para cualquiera que busque probar cosas nuevas y aprovechar al máximo sus días. Con su contenido generado por el usuario y su función de búsqueda fácil de usar, es una excelente manera de descubrir nuevas experiencias y aprovechar al máximo su tiempo.
                        </p>
                    </div>
                </div>
            </section>
    </>
  )

}

export default StarWarsRest