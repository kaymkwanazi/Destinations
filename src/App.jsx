import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'
import { About } from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/gallery' element = {<Gallery />}></Route>      
      <Route path='/contact' element= {<Contact />}></Route>     

    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
