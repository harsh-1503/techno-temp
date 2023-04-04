import React from 'react'
import Images from './Images'
import Strips from './Strips'
import img1 from '../images/techno8-removebg-preview.png'
import img2 from '../images/techno6-removebg-preview.png'
import img3 from '../images/techno7-removebg-preview.png'
import img4 from '../images/techno9.png'
import img5 from '../images/techno2-removebg-preview.png'
import img6 from '../images/techno3-removebg-preview (1).png'

const ImagesMain = () => {
  return (
    <>
      <Images
        img1={img4}
        alt1=''
        img2={img5}
        alt2='Krafted from FlatIcons'
        img3={img6}
        alt3="idrixel from id rixels's Images"
      />
      <Strips />
      <Images
        img1={img1}
        alt1='FYSpace'
        img2={img2}
        alt2=''
        img3={img3}
        alt3=''
      />
    </>
  )
}

export default ImagesMain
