import React, { useState } from 'react'
import './AboutEvent.css'
import ycircle from '../images/yellowcircle.png'
import bcircle from '../images/bluecircle.png'

function AboutEvent() {
  const [hoveredf, setHoveredF] = useState(false)
  const [hoveredb, setHoveredB] = useState(false)
  return (
    <section id='experience'>
      <h1 className='font-semibold'>About The Event</h1>
      <h4
        className=' mb-10 font-medium text-[1.2rem]'
        style={{ color: 'rgb(64, 64, 64)' }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h4>

      <div className='experienced_container '>
        <div
          className='frontend_container pt-4 pb-12 shadow-xl'
          onMouseOver={() => setHoveredF(true)}
          onMouseOut={() => setHoveredF(false)}
        >
          <div className='frontend_heading'>
            <h3 className='font-semibold mb-4 sm:mb-1'>Frontend Development</h3>
          </div>
          <div className='stack'>
            <div className='circle-container'>
              <img src={hoveredf ? ycircle : bcircle} alt='circle' />
              <img src={hoveredf ? ycircle : bcircle} alt='circle' />
              <img src={hoveredf ? ycircle : bcircle} alt='circle' />
            </div>
            <div className='about'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, vitae provident magnam ut blanditiis deleniti
                fugiat vero culpa incidunt laborum Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, blanditiis. Quaerat odio
                temporibus optio numquam tenetur molestias, nostrum blanditiis
                modi!
              </p>
            </div>
          </div>
        </div>
        <div
          className='backend_container pt-4 pb-12 shadow-xl'
          onMouseOver={() => setHoveredB(true)}
          onMouseOut={() => setHoveredB(false)}
        >
          <div className='backend_heading'>
            <h3 className='font-semibold mb-4'>Backend Development</h3>
          </div>
          <div className='stack'>
            <div className='circle-container'>
              <img src={hoveredb ? ycircle : bcircle} alt='circle' />
              <img src={hoveredb ? ycircle : bcircle} alt='circle' />
              <img src={hoveredb ? ycircle : bcircle} alt='circle' />
            </div>
            <div className='about'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, vitae provident magnam ut blanditiis deleniti
                fugiat vero culpa incidunt laborum Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, blanditiis. Quaerat odio
                temporibus optio numquam tenetur molestias, nostrum blanditiis
                modi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent
