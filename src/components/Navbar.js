import React, { useState } from 'react'
import './Navbar.css'
import logo from '../images/WLUG.png'

const Nav = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Contact', link: '/contact' },
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='container shadow-md w-screen top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <a
          href='https://wcewlug.org/'
          target={'_blank'}
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'
        >
          <img src={logo} alt='' className='w-20 mr-5' />
          <span>Walchand Linux Users' Group</span>
        </a>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav
