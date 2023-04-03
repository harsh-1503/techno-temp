import React, { useState } from 'react'
import './Registration.css'
import img1 from '../images/qr1.jpeg'
import img2 from '../images/qr2.jpeg'
import img3 from '../images/form1-removebg-preview.png'
import wlug_logo from '../images/WLUG.png'
import * as API from '../API/registrationAPI';

function Registration() {
  const [img, setimg] = useState(img1)
  const [yes,setYes] = useState("no")
  const [formData,setFormData] = useState({
    "name": "",
    "email": "",
    "phoneno": "",
    "transactionId": "",
    "collegeName": "",
    "yearOfStudy": "",
    "course": "",
    "isDualBooted": "",
    "answer":yes
  })


  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(formData);
  };

  const handleSubmit  = (e) => {
    // e.preventDefault();
    API.getData(formData);
    
  }

  const handleQR = (e) => {
    // e.preventDefault();
    const course = document.getElementById('inputGroupSelect01')
    if (course.value === '3') {
      setimg(img1)
    } else {
      setimg(img2)
    }
    handleChange(e);
  }

  return (
    <>
      <div className='whole_form w-full mt-36 p-1 w-lg-50' id='register'>
        <div className='upperDiv'>
          {/* <h2 style={{ visibility: 'hidden' }}>Nothing</h2> */}
          <h2 className='text-center text-warning h1 font-semibold'>
            Registration Form
          </h2>
          {/* <img src={wlug_logo} alt='' style={{ height: '3.5rem' }} /> */}
        </div>

        <div className='lowerdiv'>
          <form
            className='form' onSubmit={handleSubmit} 
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phoneno}
                onChange={handleChange}
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
                value={formData.collegeName}
                onChange={handleChange}
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
                value={formData.yearOfStudy}
                onChange={handleChange}
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
                value={formData.course}
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
                value={formData.transactionId}
                onChange={handleChange}
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
                  value={yes}
                  onChange={(e)=> setYes("yes")}
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
