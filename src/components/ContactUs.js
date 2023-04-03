import React from 'react'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import discord from '../images/discord.png'
import instagram from '../images/instagram.png'
import './ContactUs.css'

function ContactUs() {
  return (
    <>
      <div className='main_div flex flex-column mx-auto gap-y-8'>
        <h1
          className='mx-auto text-5xl'
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          CONTACT US
        </h1>
        <a
          href='wcewlug.org'
          className='mx-auto text-4xl wlug'
          style={{ fontFamily: "'Russo One', sans-serif" }}
        >
          WALCHAND LINUX USERS' GROUP
        </a>
        <div className='flex mx-auto'>
          <a
            href='https://www.linkedin.com/company/wlug-club/mycompany/'
            target={'_blank'}
          rel='noreferrer'>
            <img src={linkedin} alt='' className=' mx-3 contact_img' />
          </a>
          <a href='https://www.instagram.com/wcewlug/' target={'_blank'}rel='noreferrer'>
            <img src={instagram} alt='' className='mx-3 contact_img' />
          </a>
          <a href='https://discord.gg/4ZhVjdTS' target={'_blank'}rel='noreferrer'>
            <img src={discord} alt='' className='mx-3 contact_img' />
          </a>
          <a href='https://twitter.com/wcewlug' target={'_blank'}rel='noreferrer'>
            <img src={twitter} alt='' className='mx-3 contact_img' />
          </a>
        </div>
      </div>
      
    </>
  )
}

export default ContactUs
