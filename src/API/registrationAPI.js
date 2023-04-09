import axios from "axios";
import swal from "sweetalert2";
import './alerts.css'

// import { setGlobalState,useGlobalState } from "../components/Registration";
const API = axios.create({
  baseURL: "https://technobackend-production.up.railway.app/",
});
export const getData = async (formData) => {
  try {
    // console.log(formData);
    // setGlobalState(true);
    const res = await API.post("/getData", formData);
    // setGlobalState(false);
    console.log("res :");
    console.log(res);
    console.log(res.data.postdata.phone.toString().length);
    if (res.data.postdata.phone.toString().length !== 10) {
      swal.fire({
        title: "Invalid Phone Number",
        imageUrl:
          "https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png",
        // imageHeight: 200,
        // imageWidth: 200,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        animation: "true",
        customClass: {
          popup: "alert-box animated fadeInDown faster",
          confirmButton: "animated bounceIn faster",
          cancelButton: "animated bounceIn faster",
        },
      });
    } else if (res.status === 201) {
      // alert('You have successfully Registered. Check email for confirmation')
      swal
        .fire({
          title: "Registered Successfully!! Check email for confirmation.",
          // text: 'This action will reload the window',
          // icon: 'success',
          // showCancelButton: true,
          confirmButtonColor: "#3085d6",
          // cancelButtonColor: '#d33',
          confirmButtonText: "Continue",
          imageUrl:
            "https://res.cloudinary.com/dizrxbb27/image/upload/v1681066882/TechnoTweet/hurray_uptaef.png",
          imageHeight: 200,
          imageWidth: 300,
          // animation: 'true',
          customClass: {
            popup: "animated fadeInDown faster",
            confirmButton: "animated bounceIn faster",
            cancelButton: "animated bounceIn faster",
          },
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      return true;
    }
    console.log(res);
    return true;
  } catch (err) {
    console.log("err :");
    console.log(err);

    if (
      err.response.data.success === "false" &&
      err.response.data.message === "Email Already Registered"
    ) {
      swal.fire({
        title: "Email already registered!!! Try using different email.",
        imageUrl:
          "https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png",
        imageHeight: 200,
        imageWidth: 200,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        animation: "true",
        customClass: {
          popup: "animated fadeInDown faster",
          confirmButton: "animated bounceIn faster",
          cancelButton: "animated bounceIn faster",
        },
      });
      return false;
    } else if (
      err.response.data.success === "false" &&
      err.response.data.message === "Transaction id already used"
    ) {
      swal.fire({
        title: "Transaction ID already used. Try different one!!",
        imageUrl:
          "https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png",
        imageHeight: 200,
        imageWidth: 200,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        animation: "true",
        customClass: {
          popup: "animated fadeInDown faster",
          confirmButton: "animated bounceIn faster",
          cancelButton: "animated bounceIn faster",
        },
      });
      return false;
    } else if (
      err.response.data.success === "false" &&
      err.response.data.message === "Invalid mobile number"
    ) {
      swal.fire({
        title: "Invalid mobile number",
        imageUrl:
          "https://res.cloudinary.com/dizrxbb27/image/upload/v1680810676/TechnoTweet/oops_qrmge0.png",
        imageHeight: 300,
        imageWidth: 200,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        animation: "true",
        customClass: {
          popup: "animated fadeInDown faster",
          confirmButton: "animated bounceIn faster",
          cancelButton: "animated bounceIn faster",
        },
      });
      return false;
    }

    return false;
  }
};
