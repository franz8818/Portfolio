import { useState } from 'react'
import './styles/styles.css'
import portrait from './assets/portrait.jpg';


function App() {

  return (
    <>
      {/* seccion Hero */}
            <div className="col">
              <h5>Franz Seidel Sánchez </h5>
              <h1>Desarrollador Frontend & Diseñador web </h1>
              <p>
                Over the past 5 years I have been working with big eCommerce companies around the world.
                Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS.
              </p>
              <div className="col">
                  <img className="portrait col" src="src/assets/portrait.jpg" />
                  </div>
              </div>
    </>
  )
}

export default App