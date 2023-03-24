import React from 'react'
import './Registration.css'

import img1 from '../images/bg3.jpg'
function Registration() {
  return (
    <>
      <div className='registration'>
        <h1>Registration</h1>
      </div>
      <div className='form_container'>
        <div className='form'>
            <form>
                <div className='name'>
                    <label for="name">Name:
                        <input type="text" name='name' required/>
                    </label>
                </div>
                <div className='Email_Id'>
                    <label>Email Id:
                        <input type="text" required/>
                    </label>
                </div>
                <div className='College_name'>
                    <label>College Name:
                        <input type="text" required/>
                    </label>
                </div>
                <div className='year_of_study'>
                    <label>Year of Study:
                        <input type="text" required/>
                    </label>
                </div>
                <div className='payment_id'>
                    <label>Payment Id:
                        <input type="text" required/>
                    </label>
                </div>
                <div className='dual_booted'>
                        <p>DO you have a dual booted laptop:</p>
                     <input type="radio" id="html" name="dual_booted" value="YES"/>
                     <label for="html">YES</label><br/>
                     <input type="radio" id="css" name="dual_booted" value="NO"/>
                     <label for="css">NO</label><br/>
                </div>
                
            </form>
        </div>
        <div className='form_img'>
             <img src={img1} alt="form_img"/>
        </div>
      </div>
    </>
  )
}

export default Registration
