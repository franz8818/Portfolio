import { useState } from 'react'
import './styles/styles.css'
import './styles/media.css'
import './styles/colors.css'
import './styles/common.css'
import portrait from './assets/portrait.jpg';

function App() {
  return (
    <>
      {/* seccion Hero */}
      <section className="hero">
        <div className="hero-principal row">
          <div className="intro col-8">
            <h3>Franz Seidel</h3>
            <h1>Desarrollador Frontend & Diseñador web</h1>
            <p className="info">
              Over the past 5 years I have been working with big eCommerce companies around the world.
              Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS.
            </p>
          </div>
          <div className="retrato col-4">
            <img className="perfil" src="src/assets/college.jpg" alt="foto de perfil" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

