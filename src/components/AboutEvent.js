import React, { useState } from 'react'
import './AboutEvent.css'
import ycircle from '../images/yellowcircle.png'
import bcircle from '../images/bluecircle.png'
import '../fonts/font.css'
function AboutEvent() {
  const [hoveredf, setHoveredF] = useState(false)
  const [hoveredb, setHoveredB] = useState(false)
  return (
    <section id='experience'>
      <h1 className='font-semibold' style={{ fontSize: '3rem' ,fontFamily:'Blackpast'}}>
        About The Event
      </h1>
      <p className=' mb-10 mx-10' style={{ color: 'rgb(64, 64, 64)' }}>
        Technotweet is an event on web development conducted by Walchand Linux
        Users' Group. Technotweet 2k23 is a two-day workshop focusing mainly on
        MERN stack development. The topics will vary from basics of React, node
        js, MongoDB, express, and a project which will be continued throughout
        the whole workshop. All the sessions will consist of a hands-on segment
        so, you'll get good practice in all the languages and codes. Also, the
        engaging competitions at the end of both days will make you grind
        through all the concepts learned. Technotweet 2k23 is designed to
        welcome participants with a range of experience levels, let they be an
        expert or a novice. We expect you to have a good grip on all the topics
        which will be covered, at the end of both days. Show your enthusiasm and
        excitement toward learning, and let's be open to exploring the world of
        development!
      </p>

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
              Frontend involves developing the parts of a website that the user sees and interacts with. Here at Technotweet, we will help you with the topics like Reactjs, APIs, Hooks, and a hands-on project. A well-designed and optimized frontend is essential for creating  a successful and effective website so, do attend and get ready to build good websites!
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
              The backend is the part that handles all the functionality of the website and everything about how things work on the server side. We will learn about the things like Nodejs, Express, and MongoDB in the event. And we aspire to make you hold a good grip on these concepts throughout the sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent
