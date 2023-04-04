import React from 'react'
import { useState, useEffect } from 'react'
import img1 from '../images/techno1-removebg-preview.png'
import img2 from '../images/techno12.png'
import './Title.css'
import wlug from '../images/WLUG.png'

function Title() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const threshold = 720
  const factor = 1

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrollPosition)
  const translateY = scrollPosition > threshold ? 0 : scrollPosition

  return (
    <>
      <div className='logo-conatiner'>
        <img src={wlug} alt='' />
      </div>
      <div className='title_container h-screen'>
        <div
          className='img1'
          style={{ transform: `translateY(${translateY * factor}px)` }}
        >
          <img src={img1} alt='3D cloud Data Center by Impro Studio' />
        </div>

        <div
          className='title mx-2 font-semibold'
          style={{ transform: `translateY(-${translateY * factor}px)` }}
        >
          <p className='club_name1'>Walchand Linux Users' Group</p>

          <p className='presents'>Presents</p>
          <div
            className='techno_heading'
            style={{ fontFamily: "'Russo One', sans-serif" }}
          >
            TechnoTweet 2k23
          </div>
        </div>
        <div
          className='img2'
          style={{ transform: `translateY(${translateY * factor}px)` }}
        >
          <img src={img2} alt='' />
        </div>
      </div>
    </>
  )
}

export default Title
