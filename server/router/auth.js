const { response } = require('express');
const express = require('express');
const router = express.Router();

require('../db/conn');
const User=require("../model/userSchema");

router.get('/',(req,res) =>{

    res.send('helloworld from server at router.js');

});

////*******CODE USING PROMISES*******/

// router.post('/register',(req,res)=>{

//     const { first_name ,last_name ,email ,phone ,admissionyear ,yearofgraduation ,department ,DOB ,employed ,designation ,companyName ,companyLocation ,about ,password ,cpassword }= req.body;
//     //^^ got data from user req.body.*
//     console.log(req.body);
//     //data validation

//     if(! first_name || ! last_name || ! email ||! phone ||! admissionyear ||! yearofgraduation ||! department ||! DOB ||! employed ||! designation ||! companyName ||! companyLocation ||! about ||! password ||! cpassword){
//         return res.status(422).json({error:"pls fill all the required feilds"});
//     }

//     //checking if email already exists in database or not
//     User.findOne({email:email})
//         .then((userEmailAlreadyExists)=>{

//          //in email is already registered then give error
//             if(userEmailAlreadyExists){

//                 return res.status(422).json({error:"Email already exists"});
//         }
//         //if email is not in db then register it as a new user
//         //putting the data in database with req feilds that we want
//             const user=new User(req.body);
//             console.log(user);
//         //saving the ^^ created document in database
//             user.save().then(()=>{
//                 res.status(201).json({message:"*****data stored sucessfuly****"});
//             }).catch((err)=>res.status(500).json({error:'xxxxxxxx failed to store data xxxxxx'}));
//     }).catch(err=>{console.log(err);});
// });


///******ASYNC METHOD******/Registration part:-

router.post('/register',async (req,res)=>{

    const {first_name ,last_name ,email ,phone ,admissionyear ,yearofgraduation ,department ,DOB ,employed ,designation ,companyName ,companyLocation ,about ,password ,cpassword }= req.body;
    //^^ got data from user req.body.*
    console.log(req.body);
    //data validation

    if(! first_name || ! last_name || ! email ||! phone ||! admissionyear ||! yearofgraduation ||! department ||! DOB ||! employed ||! designation ||! companyName ||! companyLocation ||! about ||! password ||! cpassword){
        return res.status(422).json({error:"pls fill all the required feilds"});
    }

    try{
            //checking if email already exists in database or not
        const userEmailAlreadyExistsStatus= await User.findOne({email:email})
        const userPhoneAlreadyExistsStatus= await User.findOne({phone:phone})


        if(userEmailAlreadyExistsStatus && userPhoneAlreadyExistsStatus){

            return res.status(422).json({error:"Email and phone are already registered with an account"});
        }else if(userPhoneAlreadyExistsStatus){
            return res.status(422).json({error:"Phone no already exists"});
        }else if(userEmailAlreadyExistsStatus){
            return res.status(422).json({error:"Email already registered"});
        }else if(password != cpassword){
            return res.status(422).json({error:"please match the passwords"});
        }else{ //if every thing is correct then create the doc and save the data

            const user=new User({first_name ,last_name ,email ,phone ,admissionyear ,yearofgraduation ,department ,DOB ,employed ,designation ,companyName ,companyLocation ,about ,password ,cpassword}); //cereate a new doc in database

        //password hashing function is called in userSchema.js , called it before save() method

        await user.save(); //store data in that doc ^^^^^userRegisterStatus = True if data stored sucessfuly else false

        
        res.status(201).json({message:"*****data stored sucessfuly****"});
        }
        

        

    }catch(err){
        console.log(err);

    }

});

//Login route

router.post('/signin',async(req,res)=>{

    // console.log(req.body);
    // res.json({message:"fetched"});
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please fill data"})
        }
        //checking if mail is in database to log in
        const userLoginIsMailPresentInDatabase = await User.findOne({email:email});
        console.log(userLoginIsMailPresentInDatabase);

        if (userLoginIsMailPresentInDatabase){

            res.json({message:"user mail found in database"});

        }else{
            res.status(400).json({error:"Mail not found in database to log in "});
        }



    }catch(err){
        console.log(err);
    }



})
module.exports=router;