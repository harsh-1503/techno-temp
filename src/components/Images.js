import React from 'react'
import './Images.css'
import img1 from '../images/techno8-removebg-preview.png'
import img2 from '../images/techno6-removebg-preview.png'
import img3 from '../images/techno7-removebg-preview.png'

const Images = () => {
  return (
    <>
      <div className='image_conatiner'>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
      </div>
    </>
  )
}

export default Images
