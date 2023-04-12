import React from 'react'
import './Sponsors.css'
import sponsorLogo from '../images/CodeCrafters.io full logo (Dark text).png'

const Sponsor = () => {
  return (
    
      <div className='sponsors'>
        <h1 className='backed'>Backed by:</h1>
        <img src={sponsorLogo} alt='...'/>
      </div>
    
  )
}

export default Sponsor
