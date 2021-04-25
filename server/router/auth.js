const express = require('express');
const router = express.Router();

require('../db/conn');
const User=require("../model/userSchema");

router.get('/',(req,res) =>{

    res.send('helloworld from server at router.js');

});

router.post('/register',(req,res)=>{

    const { first_name ,
        last_name ,
        email ,
        phone ,
        admissionyear ,
        yearofgraduation ,
        department ,
        DOB ,
        employed ,
        designation ,
        companyName ,
        companyLocation ,
        about ,
        password ,
        cpassword }= req.body;
    //^^ got data from user req.body.*
    console.log(req.body);
    //data validation

    if(! first_name ||
        ! last_name ||
        ! email ||
        ! phone ||
        ! admissionyear ||
        ! yearofgraduation ||
        ! department ||
        ! DOB ||
        ! employed ||
        ! designation ||
        ! companyName ||
        ! companyLocation ||
        ! about ||
        ! password ||
        ! cpassword){
        return res.status(422).json({error:"pls fill all the required feilds"});
    }

    //checking if email already exists in database or not
    User.findOne({email:email})
        .then((userEmailAlreadyExists)=>{

         //in email is already registered then give error
            if(userEmailAlreadyExists){

                return res.status(422).json({error:"Email already exists"});
        }
        //if email is not in db then register it as a new user
        //putting the data in database with req feilds that we want
            const user=new User(req.body);
            console.log(user);
        //saving the ^^ created document in database
            user.save().then(()=>{
                res.status(201).json({message:"data stored sucessfuly"});
            }).catch((err)=>res.status(500).json({error:'failed to store data'}));


    }).catch(err=>{console.log(err);});



});

module.exports=router;