const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');
const authenticate=require('../middleware/authenticate');
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

    const {firstname ,lastname ,email ,phone ,yearofadmission ,yearofgrad ,department ,dateofbirth ,employed ,designation ,companyname ,companylocation ,about ,password ,cpassword }= req.body;
    //^^ got data from user form / req.body.*
    console.log(req.body);// print data in logs

    //data validation
    if(! firstname || ! lastname || ! email ||! phone ||! yearofadmission ||! yearofgrad ||! department ||! dateofbirth ||! employed ||! designation ||! companyname ||! companylocation ||! about ||! password ||! cpassword){
       //if any of the feilds are empty then-->
        return res.status(422).json({error:"pls fill all the required feilds"});
    }

    try{
            //checking if email and phone already exists in database or not

            //getting satatus of email and phone from data base
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

            const user=new User({firstname ,lastname ,email ,phone ,yearofadmission ,yearofgrad ,department ,dateofbirth ,employed ,designation ,companyname ,companylocation ,about ,password ,cpassword}); //cereate a new doc in database

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

        //console.log(userLoginIsMailPresentInDatabase);//log 

        //in email is in the database:
        if (userLoginIsMailPresentInDatabase){
        //in userLoginIsMailPresentInDatabase we get full json file matching with email and we get only password from it using userLoginIsMailPresentInDatabase.password
        const passswordMatch=await bcrypt.compare(password,userLoginIsMailPresentInDatabase.password) // comparing entered password while login with datbase stored password
        

        //token part: 

        //getting genrated token
        const token =await userLoginIsMailPresentInDatabase.generateAuthToken();
        console.log(token);

        //Storeing token in cookies
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000*12),
            httpOnly:true
        });

        



        //


        if (!passswordMatch){//if password doesnt match

            res.status(400).json({error:"user credential error"});

        }else{
            res.json({message:"logged in"});
        }

        }else{
            res.status(400).json({error:"user credential error"});

        }
    }catch(err){
        console.log(err);
    }



});


// abt us page
router.get('/about',authenticate,(req,res)=>{
    console.log('in abt page')
    res.send(req.rootUser);
});


//get user data for contact us and home page
router.get('/getdata',authenticate,(req,res)=>{
    console.log('got data');
    res.send(req.rootUser);
})

module.exports=router;