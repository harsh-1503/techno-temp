import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Title from './components/Title'
import AboutEvent from './components/AboutEvent'
import Strips from './components/Strips'
import Images from './components/Images'
import Registration from './components/Registration'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Title />
      <AboutEvent />
      <Strips />
      <Images />
      <Registration />
      {/* <ContactUs /> */}
      <Footer/>
    </>
  )
}

export default App
