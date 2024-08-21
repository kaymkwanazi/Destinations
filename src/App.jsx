import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      {/* <Route path='/services' element = {<Services />}></Route> */}
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
