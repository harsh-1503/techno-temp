import React, { useState } from 'react'
import './Registration.css'
import img1 from '../images/qr1.jpeg'
import img2 from '../images/qr2.jpeg'
import img3 from '../images/form1-removebg-preview.png'
import hurrayImg from '../images/hurray.png'
import oops from '../images/oops.png'
import * as API from '../API/registrationAPI'

function Registration() {
  const [img, setimg] = useState(img1)
  const [yes, setYes] = useState('no')
  const [hurray, sethurray] = useState(false)
  const [oops, setoops] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    transactionId: '',
    collegeName: '',
    yearOfStudy: 'First year',
    course: 'Frontend',
    isDualBooted: '',
    answer: yes,
  })

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = API.getData(formData)
    if (data) {
      sethurray(true)
    }
  }

  const handleQR = (e) => {
    // e.preventDefault();
    const courseSelector = document.getElementById('inputGroupSelect01')
    if (
      courseSelector.value === 'Backend' ||
      courseSelector.value === 'Frontend'
    ) {
      setimg(img1)
    } else if (courseSelector.value === 'Both') {
      setimg(img2)
    }
    handleChange(e)
  }

  return (
    <>
      <div className='whole_form w-full mt-36 p-1 w-lg-50' id='register'>
        <div className='upperLower'>
          <div className='upperDiv'>
            <h2 className='text-center text-warning h1 font-semibold m-4'>
              Registration Form
            </h2>
          </div>

          <div className='lowerdiv'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='input-flex form-group border-none flex my-4 sm:my-1 input_container'>
                <label for='exampleInputPassword1' className='basis-1/3'>
                  Name:
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='form-control  h-11 basis-2/3 rounded-lg bg-[#5fc1d9] '
                  id='exampleInputPassword1'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='input-flex form-group border-none flex my-4 sm:my-1 input_container'>
                <label for='exampleInputEmail1' className='basis-1/3'>
                  Email ID:
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='form-control   h-11 basis-2/3 rounded-lg bg-[#5fc1d9]'
                  id='exampleInputEmail1'
                  autoComplete='off'
                  required
                />
              </div>

              <div className='input-flex form-group border-none flex  my-4 input_container'>
                <label for='collegeName' className='basis-1/3'>
                  Phone No:
                </label>
                <input
                  type='number'
                  name='phoneno'
                  value={formData.phoneno}
                  onChange={handleChange}
                  className='form-control   h-11 basis-2/3 rounded-lg bg-[#5fc1d9]'
                  id='collegeName'
                  aria-describedby='emailHelp'
                  autoComplete='off'
                  required
                />
              </div>

              <div className='input-flex form-group border-none flex my-4 sm:my-1 input_container'>
                <label for='collegeName' className='basis-1/3'>
                  College Name:
                </label>
                <input
                  type='text'
                  name='collegeName'
                  className='form-control h-11 basis-2/3 rounded-lg bg-[#5fc1d9]'
                  id='collegeName'
                  value={formData.collegeName}
                  onChange={handleChange}
                  aria-describedby='emailHelp'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='input-flex input-group mb-3 my-4 sm:my-1  input_container'>
                <label className='basis-1/3' for='yearOfStudy'>
                  Year of Study:
                </label>
                <select
                  className='Select basis-2/3 p-2 lg:p-0 rounded-lg bg-[#5fc1d9] '
                  id='yearOfStudy'
                  name='yearOfStudy'
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                >
                  <option selected value='First Year'>
                    First Year
                  </option>
                  <option value='Second Year'>Second Year</option>
                  <option value='Third Year'>Third Year</option>
                  <option value='Fourth Year'>Fourth Year</option>
                </select>
              </div>

              <div className='input-flex input-group mb-3 my-4 sm:my-1 input_container'>
                <label className='basis-1/3' for='inputGroupSelect01'>
                  Select Course:
                </label>
                <select
                  className='Select basis-2/3 p-2 lg:p-0 rounded-lg bg-[#5fc1d9] '
                  id='inputGroupSelect01'
                  name='course'
                  value={formData.course}
                  onChange={handleQR}
                  required
                >
                  <option selected>Both</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </select>
              </div>
              <div className='input-flex form-group border-none flex input_container transaction '>
                <label for='paymentID' className='basis-1/3 '>
                  Transaction ID:
                </label>
                <input
                  type='text'
                  name='transactionId'
                  value={formData.transactionId}
                  onChange={handleChange}
                  className='form-control  h-11 basis-2/3 rounded-lg bg-[#5fc1d9]'
                  id='paymentID'
                  aria-describedby='emailHelp'
                  autoComplete='off'
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
                    value={yes}
                    onChange={(e) => setYes('yes')}
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
              <h5 className='text-center font-weight-bold my-4 mx-4'>
                Scan this QR code to make the payment
              </h5>
              <div className='register-imgs'>
                <img
                  src={img}
                  className='QR rounded mx-auto w-1/4 mb-12'
                  alt='...'
                />
                <div className='end_image'>
                  {hurray && <img src={hurrayImg} alt='' className='mx-auto' />}
                  {!hurray && <img src={img3} alt='' className='mx-auto' />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
