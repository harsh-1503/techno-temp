import React from 'react'
import './AboutEvent.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function AboutEvent() {
  return (
    <section id='experience'>
      <h1 className='font-semibold'>About The Event</h1>
      <h4 className='mx-20 mb-10'>
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
        <div className='frontend_container pt-4 pb-8 shadow-xl'>
          <div className='frontend_heading'>
            <h3 className='font-semibold mb-4'>Frontend Development</h3>
          </div>
          <div className='frontend_stack'>
            <div className='frontend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>HTML</h4>
              </div>
            </div>
            <div className='frontend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>CSS</h4>
              </div>
            </div>
            <div className='frontend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>JavaScript</h4>
              </div>
            </div>
            <div className='frontend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>React JS</h4>
              </div>
            </div>
            <div className='frontend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>BootStrap</h4>
              </div>
            </div>
            <div className='frontend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>Tailwind</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='backend_container pt-4 pb-8'>
          <div className='backend_heading'>
            <h3 className='font-semibold mb-4'>Backend Development</h3>
          </div>
          <div className='backend_stack'>
            <div className='backend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>Node JS</h4>
              </div>
            </div>
            <div className='backend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>MongoDB</h4>
              </div>
            </div>
            <div className='backend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>MySQL</h4>
              </div>
            </div>
            <div className='backend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>PHP</h4>
              </div>
            </div>
            <div className='backend_stack_content'>
              <BsPatchCheckFill />
              <div className='iconless'>
                <h4 className='ml-2'>Python</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent
