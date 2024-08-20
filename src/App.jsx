import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
