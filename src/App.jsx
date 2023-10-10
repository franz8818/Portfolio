import { useState } from 'react'
import './styles/styles.css'
import portrait from './assets/portrait.jpg';


function App() {

  return (
    <>
      {/* seccion Hero */}
      <section className='hero align-items-stretch'> {/* ELEMENTOS SE VAN A ESTIRAR PARA LLENAR EL CONTENEDOR EN EL EJE PERPENDICULAR AL EJE PRINCIPAL */}
        <div className="hero-principal d-flex row py-5">
          <div className="col-7 py-5">
            <h5>Franz Seidel</h5>
            <h1>Desarrollador Frontend & Diseñador web </h1>
            <p>
              Over the past 5 years I have been working with big eCommerce companies around the world.
              Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS.
            </p>
          </div>
          <div className="col-4 py-5">
          <img className="portrait" src="src/assets/portrait.jpg" alt="foto de perfil" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App