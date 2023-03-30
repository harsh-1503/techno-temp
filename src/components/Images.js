import React from 'react'
import { useState, useEffect } from 'react'
import './Images.css'
import img1 from '../images/techno8-removebg-preview.png'
import img2 from '../images/techno6-removebg-preview.png'
import img3 from '../images/techno7-removebg-preview.png'

const Images = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const e = `translateY(${scroll / 2}px)`
  const f = `translateX(${scroll * 3.75}px) translateY(${scroll * 0.75}px)`

  return (
    <>
      <div className='image_conatiner'>
        <div className='box one'>
          <img src={img1} alt='' />
        </div>
        <div className='box two'>
          <img src={img2} alt='' />
        </div>
        <div className='box three'>
          <img src={img3} alt='' />
        </div>
      </div>
    </>
  )
}

export default Images
