import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import List from './components/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Card />
    <List />
    <App />
    <Footer />

  </React.StrictMode>,
)
