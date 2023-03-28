import React, { useState } from 'react'
import './Registration.css'
import img1 from '../images/qr1.jpeg'
import img2 from '../images/qr2.jpeg'
import wlug_logo from '../images/WLUG.png'

// import Axios from "axios"

function Registration() {
  // const [form, setform] = useState({})
  const [img, setimg] = useState(img1)

  const handleQR = () => {
    const course = document.getElementById('inputGroupSelect01')
    if (course.value === '3') {
      setimg(img1)
    } else {
      setimg(img2)
    }
  }

  // const handleSubmit = async (e)=>{
  //     e.preventDefault();
  //     const response = await fetch('http://localhost:5001/getData',{
  //         method: 'POST',
  //         // body:JSON.stringify(),
  //         headers:{
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //     console.log(response);

  //     const data = await response.text();
  //     console.log(data);

  // }
  return (
    <>
      <div className='w-full mt-5 p-5 w-lg-50'>
        <div className='upperDiv'>
          <h2 style={{ visibility: 'hidden' }}>Nothing</h2>
          <h2 className='text-center text-warning h1 font-semibold'>
            Registration Form
          </h2>
          <img src={wlug_logo} alt='' style={{ height: '3.5rem' }} />
        </div>

        <form className='w-1/2 m-10'>
          <div className='form-group border-none flex my-4'>
            <label for='exampleInputPassword1' className='basis-1/5 text-xl'>
              Name:
            </label>
            <input
              type='text'
              name='name'
              className='form-control ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
              id='exampleInputPassword1'
              required
            />
          </div>
          <div className='form-group border-none flex my-4'>
            <label for='exampleInputEmail1' className='basis-1/5 text-xl'>
              Email ID:
            </label>
            <input
              type='email'
              name='email'
              className='form-control  ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
              id='exampleInputEmail1'
              required
            />
          </div>

          <div className='form-group border-none flex flex-row my-4'>
            <label for='collegeName' className='basis-1/5 text-xl'>
              Phone No:
            </label>
            <input
              type='number'
              name='phoneno'
              className='form-control  ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
              id='collegeName'
              aria-describedby='emailHelp'
              required
            />
          </div>

          <div className='form-group border-none flex my-4'>
            <label for='collegeName' className='basis-1/5 text-xl'>
              College Name:
            </label>
            <input
              type='text'
              name='collegeName'
              className='form-control  ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
              id='collegeName'
              aria-describedby='emailHelp'
              required
            />
          </div>
          <div className='input-group mb-3 my-4'>
            <label className='basis-1/5 text-xl' for='iyearOfStudy'>
              Year of Study:
            </label>
            <select
              className='custom-select ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
              id='yearOfStudy'
              name='yearOfStudy'
              required
            >
              <option selected>First Year</option>
              <option value='1'>Second Year</option>
              <option value='2'>Third Year</option>
              <option value='3'>Fourth Year</option>
            </select>
          </div>

          <div className='input-group mb-3 my-4'>
            <label className='basis-1/5 text-xl' for='inputGroupSelect01'>
              Select Course:
            </label>
            <select
              className='custom-select ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9] '
              id='inputGroupSelect01'
              name='course'
              onChange={handleQR}
              required
            >
              <option value='1'>Frontend</option>
              <option value='2'>Backend</option>
              <option value='3' selected>
                Both
              </option>
            </select>
          </div>
          <div className='form-group border-none flex my-4'>
            <label for='paymentID' className='basis-1/5 text-xl '>
              Transaction ID:
            </label>
            <input
              type='text'
              name='transactionId'
              className='form-control ml-3 h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
              id='paymentID'
              aria-describedby='emailHelp'
              required
            />
          </div>
          <div className='mb-10 mt-3'>
            <label for='dualBootedLaptop' className='text-xl mr-5'>
              Do you have dual booted laptop?
            </label>
            <label for='yes' className='text-xl mr-5'>
              <input
                type='radio'
                id='yes'
                name='answer'
                value='yes'
                className='mr-2'
              />
              Yes
            </label>
            <label for='no' className='text-xl'>
              <input
                type='radio'
                id='no'
                name='answer'
                value='no'
                className='mr-2'
              />
              No
            </label>
          </div>
          <h5 className='text-center font-weight-bold'>
            Scan this QR code to make the payment
          </h5>

          <img src={img} className='rounded mx-auto d-block' alt='...' />
          <button type='submit' name='submit' className='btn'>
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Registration
