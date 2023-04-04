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
import ImagesMain from './components/ImagesMain'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Title />
      <AboutEvent />
      <ImagesMain />  
      <Registration />
      {/* <ContactUs /> */}
      <Footer />
    </>
  )
}

export default App
