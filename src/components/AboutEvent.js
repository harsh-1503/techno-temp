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
      <h1 className='font-bold about-heading' style={{ fontSize: '2rem' }}>
        About The Event
      </h1>
      <p className=' mb-10 mx-10' style={{ color: 'rgb(64, 64, 64)' }}>
        Technotweet 2k23 is a two-day web development workshop hosted by
        Walchand Linux Users' Group, with a primary focus on the MERN stack. The
        topics will vary from basics of React, Node.js, MongoDB, Express.js, and
        a project which will be continued throughout the whole workshop. Our
        engaging sessions will give you ample practice in real-life development,
        and our exciting competitions at the end of each day will put your newly
        acquired knowledge to the test. Whether you're a seasoned expert or a
        novice just starting out, Technotweet 2k23 is the perfect opportunity to
        hone your skills and gain a comprehensive understanding of web
        development. By the end of the workshop, you'll have a firm grasp of all
        the topics covered, and be equipped to take your development skills to
        the next level. So don't miss out on this incredible opportunity to
        explore the world of development. Show your enthusiasm and excitement
        for learning, and join us for Technotweet 2k23!
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
                Frontend involves developing the parts of a website that the
                user sees and interacts with. Here at Technotweet 2k23, we will
                help you with the topics like React.js, APIs, Hooks, etc along
                with a hands-on project. A well-designed and optimized frontend
                is essential for creating a successful and effective website.
                So, do attend and get ready to build amazing websites that are
                both visually stunning and highly functional!
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
                Backend is the powerhouse of any website, responsible for
                handling all the functionality and server-side operations. At
                Technotweet 2k23, we'll teach you everything you need to know
                about backend development, including Nodejs, Express, MongoDB,
                and more. And we aspire to make you hold a good grip on these
                concepts throughout the sessions. So, do participate and get
                ready for building the backbone of powerful applications!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent
