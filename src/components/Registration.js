import React, { useState } from 'react'
import './Registration.css'
<<<<<<< HEAD
import img1 from '../images/bg2.jpg'
import img2 from '../images/bg3.jpg'

// import Axios from "axios"





=======
import img1 from '../images/form1-removebg-preview.png'
import wlug_logo from '../images/WLUG.png'
>>>>>>> d41006c6 (Added resources and styling)

function Registration() {

    // const [form, setform] = useState({})
    const [img, setimg] = useState(img1)

    const handleQR =()=>{
        const course = document.getElementById('inputGroupSelect01');
        if(course.value === "3"){
            setimg(img1)
        }else{
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
<<<<<<< HEAD
        <div className="whole container mt-5  p-5 w-lg-50 shadow-lg">    
            <h2 className="text-center text-warning h1 ">Registration Form</h2>
            <form  >

                <div className="form-group">
                <label for="exampleInputPassword1">Name:</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Harsh Karwa"
                    required
                />
                </div>
                <div className="form-group">
                <label for="exampleInputEmail1">Email ID</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    required
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share
                    your email with anyone else.</small>
                </div>
                <div className="form-group">
                <label for="collegeName">Phone No:</label>
                <input
                    type="number"
                    name="phoneno"
                    className="form-control"
                    id="collegeName"
                    aria-describedby="emailHelp"
                    required    
                />

                </div>
                
                <div className="form-group">
                <label for="collegeName">College Name:</label>
                <input
                    type="text"
                    name="collegeName"
                    className="form-control"
                    id="collegeName"
                    aria-describedby="emailHelp"
                    required
                    
                />

                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label
                    className="input-group-text"
                    for="iyearOfStudy"
                    >Year of Study</label>
                </div>
                <select className="custom-select" id="yearOfStudy" name='yearOfStudy' required>
                    <option selected>First Year</option>
                    <option value="1">Second Year</option>
                    <option value="2">Third Year</option>
                    <option value="3">Fourth Year</option>
                </select>
                </div>
                <div className="form-group">
                <label for="paymentID">Transaction ID:</label>
                <input
                    type="text"
                    name="transactionId"
                    className="form-control"
                    id="paymentID"
                    aria-describedby="emailHelp"
                    required
                />
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label
                    className="input-group-text"
                    for="inputGroupSelect01"
                    >Select Course</label>
                </div>

                <select className="custom-select" id="inputGroupSelect01" name='course' onChange={handleQR} required>
                    <option value="1">Frontend</option>
                    <option value="2">Backend</option>
                    <option value="3">Both</option>
                </select>
                </div>
                <h5 className='text-center font-weight-bold'>Scan this QR code to make the payment</h5>

                <img src={img} className="rounded mx-auto d-block" alt="..."/>
                <button
                type="submit"
                name="submit"
                className="btn"
                >Register</button>
          </form>  
        </div> 
        {/* <div className='form_img'>
             <img src={img1} alt="form_img"/>
        </div> */}
      
=======
      <div className='registration'>
        <h1 style={{ visibility: 'hidden' }}>Nothing</h1>
        <h1 className='font-semibold'>Registration</h1>
        <img src={wlug_logo} alt='' className='h-14 text-right' />
      </div>

      <div className='form_container'>
        <div className='form'>
          <form>
            <div className='name'>
              <label for='name'>
                Name:
                <input type='text' name='name' required />
              </label>
            </div>
            <div className='Email_Id'>
              <label>
                Email Id:
                <input type='text' required />
              </label>
            </div>
            <div className='College_name'>
              <label>
                College Name:
                <input type='text' required />
              </label>
            </div>
            <div className='year_of_study'>
              <label>
                Year of Study:
                <input type='text' required />
              </label>
            </div>
            <div className='payment_id'>
              <label>
                Payment Id:
                <input type='text' required />
              </label>
            </div>
            <div className='dual_booted'>
              <p>DO you have a dual booted laptop:</p>
              <input type='radio' id='html' name='dual_booted' value='YES' />
              <label for='html'>YES</label>
              <br />
              <input type='radio' id='css' name='dual_booted' value='NO' />
              <label for='css'>NO</label>
              <br />
            </div>
          </form>
        </div>
        <div className='form_img'>
          <img src={img1} alt='form_img' />
        </div>
      </div>
>>>>>>> d41006c6 (Added resources and styling)
    </>
  )
}

export default Registration
