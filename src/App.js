import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Title from './components/Title'
import AboutEvent from './components/AboutEvent'
import Strips from './components/Strips'
import Images from './components/Images'
import Registration from './components/Registration'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <AboutEvent />
      <Strips />
      <Images />
      <Registration />
      <ContactUs />
    </>
  )
}

export default App
