const mongoose=require("mongoose")
const bcrypt=require("bcryptjs");
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


//password hashing
userSchema.pre('save',async function(next){
    if(this.isModified('password')){          //checking if password is modified or not.,if modified then we hash the  pass and save it else it will hash every time before save() method
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
});
const User =mongoose.model('alumni',userSchema);

module.exports=User;

