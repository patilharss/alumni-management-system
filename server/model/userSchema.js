const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    first_name :{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    admissionyear:{
        type:Number,
        required:true

    },
    yearofgraduation:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    employed:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    companyLocation:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

})

const User =mongoose.model('alumni',userSchema);

module.exports=User;