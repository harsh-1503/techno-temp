import axios from "axios";
const API = axios.create({baseURL:"https://technobackend-production.up.railway.app/"})


export const getData = async(formData) => {
    try{
        console.log(formData);
        const res = await API.post('/getData', formData);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}