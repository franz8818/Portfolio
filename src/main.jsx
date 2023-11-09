import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Study from './components/study.jsx'
import Proyects from './components/proyects.jsx'
// import Contact from './components/contact.jsx'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
      <Navbar />
    <div className="container">
      <App />
      <Proyects />
      <Study />
      {/* <Contact /> */}
    </div>
  </React.StrictMode>,
);

