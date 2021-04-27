const mongoose=require("mongoose")
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname:{
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
    yearofadmission:{
        type:Number,
        required:true

    },
    yearofgrad:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    dateofbirth:{
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
    companyname:{
        type:String,
        required:true
    },
    companylocation:{
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
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

})


//password hashing
userSchema.pre('save',async function(next){
    if(this.isModified('password')){          //checking if password is modified or not.,if modified then we hash the  pass and save it else it will hash every time before save() method
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
});


//genrating token


userSchema.methods.generateAuthToken= async function(){
    try{

        let genratedtoken = jwt.sign({_id:this._id},process.env.SECRATE_KEY); //token created

        this.tokens=this.tokens.concat({token:genratedtoken});//adding token to database
        await this.save();
        return genratedtoken;
    }catch(err){
  
        console.log(err);
    }

}


const User =mongoose.model('alumni',userSchema);

module.exports=User;

