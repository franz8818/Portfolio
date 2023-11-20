import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './components/navbar.jsx';
import Techs from './components/techs.jsx';
import Proyects from './components/proyects.jsx';
import Cv from './components/cv.jsx';
import Contact from './components/contact.jsx';
import './styles/styles.css';
import './styles/media.css';
import './styles/common.css';
import './styles/colors.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="container text-center">
            <App />
            <Proyects />
            <Techs />
           <Contact />
          </div>} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </>
    </Router>
  </React.StrictMode>,
);
