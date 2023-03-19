//This is a demo page

import React from 'react'
import { Parallax } from 'react-parallax'
import bgone from '../images/bg5.webp'
import bgtwo from '../images/bg4.webp'
import bgthree from '../images/bg3.jpg'
import './parallax.css'

const ParallaxEffect = () => {
  return (
    <>
      <Parallax strength={1000} bgImage={bgone} bgImageAlt='the cat'>
        <div className='content'>
          <div className='text_content'>TEXT CONTENT</div>
        </div>
      </Parallax>
      <Parallax strength={1000} bgImage={bgtwo} bgImageAlt='the cat'>
        <div className='content'>
          <div className='text_content'>TEXT CONTENT</div>
        </div>
      </Parallax>
      <Parallax strength={1000} bgImage={bgthree} bgImageAlt='the cat'>
        <div className='content'>
          <div className='text_content'>TEXT CONTENT</div>
        </div>
      </Parallax>
      <div className='content'></div>
    </>
  )
}

export default ParallaxEffect
