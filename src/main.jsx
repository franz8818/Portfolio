import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const MainContent = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location.state]);


  return (
    <div className="container text-center">
      <App />
      <div id="proyects-section">
        <Proyects />
      </div>
      <Techs />
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <React.StrictMode>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/proyectW2d" element={<W2d />} />
            <Route path="/starwarsProyect" element={<StarWarsP />} />
            <Route path="/starwarsRestApi" element={<StarWarsRest />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
