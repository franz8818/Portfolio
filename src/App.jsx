import { useState } from 'react'
import './styles/styles.css'


function App() {

  return (
    <>
      <div className="container">
        <div className="intro row">
          <div className="col-sm-8">
            <h5>Franz Seidel </h5>
            <h1>Desarrollador Frontend & Diseñador web </h1>
            <p>
              Over the past 5 years I have been working with big eCommerce companies around the world.
              Offering services around them, working solo, leading small eCommerce teams, maintaining eCommerce websites and developing SAAS.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <div id="portrait" className="portrait">
              <img src="assets/portrait.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App