const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{

    res.send('helloworld from server at router.js');

});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({message:req.body});
   // res.send('sending res onmy reg page');
});

module.exports=router;