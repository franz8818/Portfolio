import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Proyects from './components/proyects.jsx'
import Contact from './components/contact.jsx'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className="row"> 
    <App />
    <Proyects />
    <Contact />
    </div>
  </React.StrictMode>,
)

