import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Title from './components/Title'
import AboutEvent from './components/AboutEvent'
import Strips from './components/Strips'
import Registration from './components/Registration'

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Parallax />} />
        </Routes>
      </BrowserRouter> */}
      <Title />
      <AboutEvent />
      <Strips />
      <Registration />
    </>
  )
}

export default App
