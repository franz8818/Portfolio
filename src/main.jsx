import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Techs from './components/techs.jsx'
import Proyects from './components/proyects.jsx'
// import Contact from './components/contact.jsx'
import './styles/styles.css'
import './styles/media.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
    <div className="container text-center">
      <App />
      <Techs />
      <Proyects />
      {/* <Contact /> */}
    </div>
  </React.StrictMode>,
);

