import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import AboutMeCard from './components/AboutMeCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <AboutMeCard />
    <App />
    <Footer />

  </React.StrictMode>,
)
