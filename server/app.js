const dotenv=require("dotenv")
const mongoose=require('mongoose');

var express=require('express');
var cookieParser=require('cookie-parser');



var app=express();
app.use(cookieParser());
dotenv.config({path:'./config.env'}); //dotenv

require("./db/conn"); // database connection

//const User =require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));//linking router files

// const PORT = process.env.PORT;
const port=3000;



// app.get('/about',(req,res)=>{
//     console.log('in abt page')
//     res.send('About page')
// });

// app.get('/contact',(req,res)=>{
//     console.log('in conatct page')
//     res.send('Contact page')
// });

app.get('/signin',(req,res)=>{
    console.log('in signin page');
    res.send('Signin/login page')
});

app.get('/signup',(req,res)=>{
    console.log('in reg page');
    res.send('Register page')
});

app.listen(port, (err) => {
    console.log(`server is runnig at port no`+ port);
})
