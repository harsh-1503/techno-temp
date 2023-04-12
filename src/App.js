import './App.css'
import React from 'react'
import Title from './components/Title'
import AboutEvent from './components/AboutEvent'
import Registration from './components/Registration'
import Footer from './components/Footer'
import ImagesMain from './components/ImagesMain'
import Sponsor from './components/Sponsor'

function App() {
  return (
    <>
      <Title />
      <AboutEvent />
      <ImagesMain />
      <Registration />
      <Sponsor/>
      <Footer />
    </>
  )
}

export default App
