import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './components/navbar.jsx';
import Proyects from './components/proyects.jsx';
import Cv from './components/cv.jsx';
import W2d from './components/proyectW2d.jsx';
import StarWarsP from './components/starwarsProyect.jsx';
import StarWarsRest from './components/starwarsRestApi.jsx';
import Techs from './components/techs.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import './styles/styles.css';
import './styles/media.css';
import './styles/common.css';
import './styles/colors.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Resaltar posibles problemas en tu código */}
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="container text-center">
            <App />
            <div id="proyects-section"> {/* id asignado para el sroll smooth */}
            <Proyects />
            </div>
            <Techs />
            <div id="contact-section"> {/* id asignado para el sroll smooth */}
              <Contact />
            </div>
          </div>} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/proyectW2d" element={<W2d />} />
          <Route path="/starwarsProyect" element={<StarWarsP />} />
          <Route path="/starwarsRestApi" element={<StarWarsRest />} />
        </Routes>
        <Footer />
      </>
    </Router>
  </React.StrictMode>,
);
