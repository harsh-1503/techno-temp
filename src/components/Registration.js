import React, { useState } from 'react'
import './Registration.css'
import img1 from '../images/qr1.jpeg'
import img2 from '../images/qr2.jpeg'
import img3 from '../images/form1-removebg-preview.png'
import wlug_logo from '../images/WLUG.png'

function Registration() {
  const [img, setimg] = useState(img1)

  const handleQR = () => {
    const course = document.getElementById('inputGroupSelect01')
    if (course.value === '3') {
      setimg(img1)
    } else {
      setimg(img2)
    }
  }

  return (
    <>
      <div className='w-full mt-36 p-1 w-lg-50' id='register'>
        <div className='upperDiv'>
          {/* <h2 style={{ visibility: 'hidden' }}>Nothing</h2> */}
          <h2 className='text-center text-warning h1 font-semibold'>
            Registration Form
          </h2>
          {/* <img src={wlug_logo} alt='' style={{ height: '3.5rem' }} /> */}
        </div>

        <div className='lowerdiv'>
          <form
            className='form w-1/2'
            method='POST'
            action='http://localhost:5000/getData'
          >
            <div className='input-flex form-group border-none flex my-4 input_container'>
              <label
                for='exampleInputPassword1'
                className='basis-1/5 text-xl'
              >
                Name:
              </label>
              <input
                type='text'
                name='name'
                className='form-control  h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
                id='exampleInputPassword1'
                autoComplete='off'
                required
              />
            </div>
            <div className='input-flex form-group border-none flex my-4 input_container'>
              <label for='exampleInputEmail1' className='basis-1/5 text-xl'>
                Email ID:
              </label>
              <input
                type='email'
                name='email'
                className='form-control   h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
                id='exampleInputEmail1'
                autoComplete='off'
                required
              />
            </div>

            <div className='input-flex form-group border-none flex  my-4 input_container'>
              <label for='collegeName' className='basis-1/5 text-xl'>
                Phone No:
              </label>
              <input
                type='number'
                name='phoneno'
                className='form-control   h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
                id='collegeName'
                aria-describedby='emailHelp'
                autoComplete='off'
                required
              />
            </div>

            <div className='input-flex form-group border-none flex my-4 input_container'>
              <label for='collegeName' className='basis-1/5 text-xl'>
                College Name:
              </label>
              <input
                type='text'
                name='collegeName'
                className='form-control  h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
                id='collegeName'
                aria-describedby='emailHelp'
                autoComplete='off'
                required
              />
            </div>
            <div className='input-flex input-group mb-3 my-4 input_container'>
              <label className='basis-1/5 text-xl' for='yearOfStudy'>
                Year of Study:
              </label>
              <select
                className="Select h-11 basis-4/5 rounded-lg bg-[#5fc1d9] "
                id='yearOfStudy'
                name='yearOfStudy'
                required
              >
                <option selected>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Fourth Year</option>
              </select>
            </div>

            <div className='input-flex input-group mb-3 my-4 input_container'>
              <label className='basis-1/5 text-xl' for='inputGroupSelect01'>
                Select Course:
              </label>
              <select
                className='Select h-11 basis-4/5 rounded-lg bg-[#5fc1d9] '
                id='inputGroupSelect01'
                name='course'
                onChange={handleQR}
                required
              >
                <option>Frontend</option>
                <option>Backend</option>
                <option selected>Both</option>
              </select>
            </div>
            <div className='input-flex form-group border-none flex my-4 input_container'>
              <label for='paymentID' className='basis-1/5 text-xl '>
                Transaction ID:
              </label>
              <input
                type='text'
                name='transactionId'
                className='form-control  h-11 basis-4/5 rounded-lg bg-[#5fc1d9]'
                id='paymentID'
                aria-describedby='emailHelp'
                required
              />
            </div>
            <div className='input-flex mb-10 mt-3'>
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
            <div className='btn_class'>
              <button
                type='submit'
                name='submit'
                className='register_btn text-center'
              >
                Register
              </button>
            </div>
          </form>
          <div className='img_qr'>
            <h5 className='text-center font-weight-bold my-4 text-xl'>
              Scan this QR code to make the payment
            </h5>

            <img src={img} className='rounded mx-auto w-1/4 mb-12' alt='...' />
            <div className='end_image'>
              {/* <h1>
                Let's <br /> Develop!
              </h1> */}
              <img src={img3} alt='' className='mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
