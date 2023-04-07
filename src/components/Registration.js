import React, { useState } from "react";
import "./Registration.css";
import img1 from "../images/149qr.png";
import img2 from "../images/179qr.png";
import img3 from "../images/form1-removebg-preview.png";
import hurrayImg from "../images/hurray.png";
// import oops from '../images/oops.png'
// import swal from 'sweetalert'
import * as API from "../API/registrationAPI";
// import Spinner from "react-bootstrap/Spinner";
import "../fonts/font.css";
import "./inputs.css";
// import { MDBSpinner } from "mdb-react-ui-kit";


function Registration() {
  const [img, setimg] = useState(img1);
  const [domain, setDomain] = useState("Frontend");
  const [loading, setloading] = useState(false);
  // const [hurray, sethurray] = useState(false)
  // const [oops, setoops] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    transactionId: "",
    collegeName: "",
    yearOfStudy: "First year",
    course: "Frontend",
    isDualBooted: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    const data = API.getData(formData);
    setloading(false)
    // sethurray(true)
  };

  const handleQR = (e) => {
    // e.preventDefault();
    const courseSelector = document.getElementById("inputGroupSelect01");
    if (courseSelector.value === "Frontend") {
      setimg(img1);
      setDomain("Frontend");
    } else if (courseSelector.value === "Backend") {
      setimg(img1);
      setDomain("Backend");
    } else if (courseSelector.value === "Both") {
      setimg(img2);
      setDomain("Both");
    }
    handleChange(e);
  };

  return (
    <>
      <div className="whole_form w-full mt-36 p-1 w-lg-50" id="register">
        <div className="upperLower">
          <div className="upperDiv">
            <h2 className="registration text-center text-warning h1 font-semibold m-4">
              Registration
            </h2>
          </div>

          <div className="lowerdiv">
            <div className="img_qr_one">
              <h5 className="text-center font-weight-bold my-4 mx-4">
                Scan this QR code to make the payment
              </h5>
              <h3 className="text-center font-weight-bold my-4 mx-4">
                {domain}
              </h3>
              <div className="register-imgs">
                <img
                  src={img}
                  className="QR rounded mx-auto w-1/4 sm:w-1/2 mb-12"
                  alt="..."
                />
                <div className="end_image">
                  <img src={img3} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
            {/* <form className='form' onSubmit={handleSubmit}>
              <div className='input-flex form-group border-none flex my-4 sm:my-1 input_container'>
                <label for='exampleInputPassword1' className='basis-1/3'>
                  Name:
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='form-control  h-11 basis-2/3 rounded-lg bg-[#44c8fc] '
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
                  className='form-control   h-11 basis-2/3 rounded-lg bg-[#44c8fc]'
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
                  className='form-control   h-11 basis-2/3 rounded-lg bg-[#44c8fc]'
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
                  className='form-control h-11 basis-2/3 rounded-lg bg-[#44c8fc]'
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
                  className='Select basis-2/3 p-2 lg:p-0 rounded-lg bg-[#44c8fc] '
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
                  className='Select basis-2/3 p-2 lg:p-0 rounded-lg bg-[#44c8fc] '
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
              <div className='input-flex form-group border-none flex input_container transaction mb-14'>
                <label for='paymentID' className='basis-1/3 '>
                  Transaction ID:
                </label>
                <input
                  type='text'
                  name='transactionId'
                  value={formData.transactionId}
                  onChange={handleChange}
                  className='form-control  h-11 basis-2/3 rounded-lg bg-[#44c8fc]'
                  id='paymentID'
                  aria-describedby='emailHelp'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='btn_class '>
                <button
                  type='submit'
                  name='submit'
                  className='register_btn text-center'
                >
                  Register
                </button>
              </div>
            </form> */}
            <form class="form" onSubmit={handleSubmit}>
              <div class="inputs">
                <label for="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="exampleInputPassword1"
                  autoComplete="off"
                  required
                  placeholder="Full Name"
                />
                <label for="exampleInputEmail1">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  autoComplete="off"
                  required
                  placeholder="abc@gmail.com"
                />
                <label for="collegeName">Phone No:</label>
                <input
                  type="tel"
                  name="phoneno"
                  value={formData.phoneno}
                  onChange={handleChange}
                  id="collegeName"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                  required
                  placeholder="9876543210"
                />
                <label for="collegeName">College Name</label>
                <input
                  type="text"
                  name="collegeName"
                  id="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  autoComplete="off"
                  required
                  placeholder="Walchand College of Engineering, Sangli"
                />
                <label for="yearOfStudy">Year of Study</label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                  placeholder="First Year"
                  className="Select"
                >
                  <option selected value="First Year">
                    First Year
                  </option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
                <label for="inputGroupSelect01">Select Course:</label>
                <select
                  id="inputGroupSelect01"
                  name="course"
                  value={formData.course}
                  onChange={handleQR}
                  className="Select"
                  required
                >
                  <option selected>Both</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </select>
                <label for="paymentID" className="basis-1/3 ">
                  Transaction ID
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  id="paymentID"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                  required
                />

                <button
                  type="submit"
                  style={{ color: "black", backgroundColor: "#ffc107",fontWeight:"bold"}}
                >
                  Register
                  {/* {loading && <div className="loading-spinner"></div>} */}
                </button>
                
                  
              
              </div>
            </form>
            <div className="img_qr_two">
              <h5 className="text-center font-weight-bold my-4 mx-4">
                Scan this QR code to make the payment
              </h5>
              <h3 className="text-center font-weight-bold my-4 mx-4">
                {domain}
              </h3>
              <div className="register-imgs">
                <img
                  src={img}
                  className="QR rounded mx-auto w-1/4 sm:w-1/2 mb-12"
                  alt="..."
                />
                <div className="end_image">
                  <img src={img3} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;

