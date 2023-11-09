import { useState } from 'react'
import './styles/styles.css'
import portrait from './assets/portrait.jpg';


function App() {
  return (
    <>
      {/* seccion Hero */}
      <section className="hero text-center">
        <div className="hero-principal d-flex justify-content-center row py-2">
          <div className="col-12 col-md-6 py-1">
            <h5>Franz Seidel</h5>
            <h1>Desarrollador Frontend & Diseñador web</h1>
            <p className="mt-3">
              Over the past 5 years I have been working with big eCommerce companies around the world.
              Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS.
            </p>
          </div>
          <div className="col-12 col-md-6 py-5">
            <img className="portrait" src="src/assets/portrait.jpg" alt="foto de perfil" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

