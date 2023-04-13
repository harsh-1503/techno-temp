import React from 'react'
import './Sponsors.css'
import sponsorLogo from '../images/CodeCrafters.io full logo (Dark text).png'

const Sponsor = () => {
  return (
    <div className='sponsors'>
      <h1 className='backed'>Boosted by:</h1>
      <a href='https://codecrafters.io/' target='_blank' rel='noreferrer'>
        <img src={sponsorLogo} alt='...' />
      </a>
    </div>
  )
}

export default Sponsor
