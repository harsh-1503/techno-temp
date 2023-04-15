import React from 'react'
import './Images.css'

const Images = (props) => {
  return (
      <div className='image_conatiner'>
        <div className='box one'>
          <img src={props.img1} alt={props.alt1} />
        </div>
        <div className='box two'>
          <img src={props.img2} alt={props.alt2} />
        </div>
        <div className='box three'>
          <img src={props.img3} alt={props.alt3} />
        </div>
      </div>
    
  )
}

export default Images
