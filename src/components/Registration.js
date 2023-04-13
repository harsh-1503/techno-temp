import React, { useState } from 'react'
import './Registration.css'
import img1 from '../images/149qr2.png'
import img2 from '../images/200qr2.png'
import img3 from '../images/form1-removebg-preview.png'
import axios from 'axios'
import swal from 'sweetalert2'
import '../API/alerts.css'
import '../fonts/font.css'
import './inputs.css'
import { ColorRing } from 'react-loader-spinner'
const API = axios.create({
  baseURL: 'https://technobackend-production.up.railway.app/',
})

function Registration() {
  const [img, setimg] = useState(img1)
  const [isLoading, setisLoading] = useState(false)
  const [domain, setDomain] = useState('Both')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    transactionId: '',
    collegeName: '',
    yearOfStudy: 'First year',
    course: 'Both',
    isDualBooted: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setisLoading(true)
    try {
      setisLoading(true)
      const res = await API.post('/getData', formData)
      setisLoading(false)

      console.log('res :')
      console.log(res)
      console.log(res.data.postdata.phone.toString().length)
      if (res.data.postdata.phone.toString().length !== 10) {
        swal.fire({
          title: 'Invalid Phone Number',
          imageUrl:
            'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
          imageHeight: 200,
          // imageWidth: 200,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          animation: 'true',
          customClass: {
            popup: 'animated fadeInDown faster',
            confirmButton: 'animated bounceIn faster',
            cancelButton: 'animated bounceIn faster',
          },
        })
      } else if (res.status === 201) {
        // alert('You have successfully Registered. Check email for confirmation')
        swal
          .fire({
            title: 'Registered Successfully!! Check email for confirmation.',
            imageHeight: 200,
            confirmButtonColor: '#3085d6',

            confirmButtonText: 'Continue',
            imageUrl:
              'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066882/TechnoTweet/hurray_uptaef.png',
            customClass: {
              popup: 'animated fadeInDown faster',
              confirmButton: 'animated bounceIn faster',
              cancelButton: 'animated bounceIn faster',
            },
          })
          .then((result) => {
            if (result.isConfirmed) {
              setFormData({
                name: '',
                email: '',
                phoneno: '',
                transactionId: '',
                collegeName: '',
                yearOfStudy: 'First year',
                course: 'Frontend',
                isDualBooted: '',
              })
            }
          })
        return true
      }
      console.log(res)
      return true
    } catch (err) {
      console.log('err :')
      console.log(err)
      setisLoading(false)
      if (
        err.response.data.success === 'false' &&
        err.response.data.message === 'Email Already Registered'
      ) {
        swal.fire({
          title: 'Email already registered!!! Try using different email.',
          imageUrl:
            'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
          imageHeight: 200,
          imageWidth: 200,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          animation: 'true',
          customClass: {
            popup: 'animated fadeInDown faster',
            confirmButton: 'animated bounceIn faster',
            cancelButton: 'animated bounceIn faster',
          },
        })
        return false
      } else if (
        err.response.data.success === 'false' &&
        err.response.data.message === 'Transaction id already used'
      ) {
        swal.fire({
          title: 'Transaction ID already used. Try different one!!',
          imageUrl:
            'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
          imageHeight: 200,
          imageWidth: 200,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          animation: 'true',
          customClass: {
            popup: 'animated fadeInDown faster',
            confirmButton: 'animated bounceIn faster',
            cancelButton: 'animated bounceIn faster',
          },
        })
        return false
      } else if (
        err.response.data.success === 'false' &&
        err.response.data.message === 'Invalid mobile number'
      ) {
        swal.fire({
          title: 'Invalid mobile number',
          imageUrl:
            'https://res.cloudinary.com/dizrxbb27/image/upload/v1680810676/TechnoTweet/oops_qrmge0.png',
          imageHeight: 300,
          imageWidth: 200,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          animation: 'true',
          customClass: {
            popup: 'animated fadeInDown faster',
            confirmButton: 'animated bounceIn faster',
            cancelButton: 'animated bounceIn faster',
          },
        })
        return false
      }

      return false
    }
    // const data =  API.getData(formData);
    // setisLoading(false);
    // sethurray(true)
  }

  const handleQR = (e) => {
    // e.preventDefault();
    const courseSelector = document.getElementById('inputGroupSelect01')
    if (courseSelector.value === 'Both') {
      setimg(img2)
      setDomain('Both')
    } else if (courseSelector.value === 'Frontend') {
      setimg(img1)
      setDomain('Frontend')
    } else if (courseSelector.value === 'Backend') {
      setimg(img1)
      setDomain('Backend')
    }
    handleChange(e)
  }

  return (
    <>
      <div className='whole_form w-full mt-36 p-1 w-lg-50' id='register'>
        <div className='upperLower'>
          <div className='upperDiv'>
            <h2 className='registration text-center text-warning h1 font-semibold m-4'>
              Registration
            </h2>
          </div>

          <div className='lowerdiv'>
            <div className='img_qr_one'>
              <h5 className='text-center font-weight-bold my-4 mx-4'>
                Scan this QR code to make the payment
              </h5>
              <h3 className='text-center font-weight-bold my-4 mx-4'>
                {domain}
              </h3>
              <div className='register-imgs'>
                <img
                  src={img}
                  className='QR rounded mx-auto w-1/4 sm:w-1/2 mb-12'
                  alt='...'
                />
                <div className='end_image'>
                  <img src={img3} alt='' className='mx-auto' />
                </div>
              </div>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='inputs'>
                <label htmlFor='exampleInputPassword1'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  id='exampleInputPassword1'
                  autoComplete='off'
                  required
                  placeholder='Full Name'
                />
                <label htmlFor='exampleInputEmail1'>Email ID</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  id='exampleInputEmail1'
                  autoComplete='off'
                  required
                  placeholder='Email'
                />
                <label htmlFor='collegeName'>Phone No</label>
                <input
                  type='tel'
                  name='phoneno'
                  value={formData.phoneno}
                  onChange={handleChange}
                  id='collegeName'
                  aria-describedby='emailHelp'
                  autoComplete='off'
                  required
                  placeholder='9876543210'
                />
                <label htmlFor='collegeName'>College Name</label>
                <input
                  type='text'
                  name='collegeName'
                  id='collegeName'
                  value={formData.collegeName}
                  onChange={handleChange}
                  aria-describedby='emailHelp'
                  autoComplete='off'
                  required
                  placeholder='Walchand College of Engineering, Sangli'
                />
                <label htmlFor='yearOfStudy'>Year of Study</label>
                <select
                  id='yearOfStudy'
                  name='yearOfStudy'
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                  placeholder='First Year'
                  className='Select'
                >
                  <option selected value='First Year'>
                    First Year
                  </option>
                  <option value='Second Year'>Second Year</option>
                  <option value='Third Year'>Third Year</option>
                  <option value='Fourth Year'>Fourth Year</option>
                </select>
                <label htmlFor='inputGroupSelect01'>Select Course </label>
                <select
                  id='inputGroupSelect01'
                  name='course'
                  value={formData.course}
                  onChange={handleQR}
                  className='Select'
                  required
                >
                  <option selected>Both</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </select>
                <label htmlFor='paymentID' className='basis-1/3 '>
                  Transaction ID
                </label>
                <input
                  type='text'
                  name='transactionId'
                  value={formData.transactionId}
                  onChange={handleChange}
                  id='paymentID'
                  aria-describedby='emailHelp'
                  autoComplete='off'
                  required
                />

                <button type='submit' className='reg_btn'>
                  <div>Register</div>
                  <div>
                    {isLoading && (
                      <ColorRing
                        visible={true}
                        height='40'
                        width='40'
                        ariaLabel='blocks-loading'
                        wrapperStyle={{}}
                        wrapperClass='blocks-wrapper'
                        colors={['#000000']}
                      />
                    )}
                  </div>
                </button>
              </div>
            </form>
            <div className='img_qr_two'>
              <h5 className='text-center font-weight-bold my-4 mx-4'>
                Scan this QR code to make the payment
              </h5>
              <h3 className='text-center font-weight-bold my-4 mx-4'>
                {domain}
              </h3>
              <div className='register-imgs'>
                <img
                  src={img}
                  className='QR rounded mx-auto w-1/4 sm:w-1/2 mb-12'
                  alt='...'
                />
                <div className='end_image'>
                  <img src={img3} alt='' className='mx-auto' />
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
