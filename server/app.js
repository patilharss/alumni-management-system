const dotenv=require("dotenv")
const mongoose=require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require("./db/conn");

//middleware

const middleware=(req,res,next)=>{
    console.log('in middleware');
    next();
}


app.get('/',(req,res) =>{

    res.send('helloworld from server at port 3000');

});

app.get('/about',middleware,(req,res)=>{
    console.log('in abt page')
    res.send('About page')
});

app.get('/contact',(req,res)=>{
    console.log('in conatct page')
    res.send('Contact page')
});

app.get('/signin',(req,res)=>{
    console.log('in signin page');
    res.send('Signin/login page')
});

app.get('/signup',(req,res)=>{
    console.log('in reg page');
    res.send('Register page')
});


app.listen(3000,()=>{
    console.log('server is runing at port no 3000');
})
