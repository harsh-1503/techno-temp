import './App.css'
import Parallax from './components/Parallax'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Parallax />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
