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
          <div className="intro col-6">INTRO</div>
          <div className="retrato col-6">RETRATO</div>
        </div>
      </section>
    </>
  );
}

export default App;

