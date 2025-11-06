import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
function App() {

  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
