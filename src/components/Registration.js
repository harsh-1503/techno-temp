import React, { useState } from 'react'
import './Registration.css'
import img1 from '../images/bg2.jpg'
import img2 from '../images/bg3.jpg'

// import Axios from "axios"






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
      
    </>
  )
}

export default Registration
