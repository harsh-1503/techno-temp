const express = require('express')
const cors = require("cors");
const app = express()
//put the connection string here
const monngodb_url="";

app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
  
mongoose.connect(monngodb_url).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
}); 
    
  
const empschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: Number,
        required: true,
    },
    transactionId:{
        type: String,
        required: true
    },
    isDualBooted:{
        type: String,
        required: true,
    },
    collegeName:{
        type: String,
        required: true,
    },
    yearOfStudy:{
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
    }
});
const user = new mongoose.model('user',empschema);

app.use(cors())



app.post('/getData',async(req,res)=>{
    
    try{
        let User = new user({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phoneno,
            transactionId: req.body.transactionId,
            collegeName: req.body.collegeName,
            yearOfStudy: req.body.yearOfStudy,
            course: req.body.course,
            isDualBooted: req.body.answer,
          });
           
          const postdata = await User.save();
          console.log(postdata);
          res.send(User);
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})

app.listen(5000,()=>{
    console.log("Listening to port 5000");
})