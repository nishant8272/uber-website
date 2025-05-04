const mongoose =require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
        required:true,
        minlength:[3,"first name atlest have 3 character. "]
        },
        lastname:{
            type:String,
        required:false,
        minlength:[5,"last name atlest have 5 character. "]
        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:[3,"email must be have 3 characters. "]
    },
    password:{
        type:String,
        required:true,
        slect:false,
    },
    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id :this._id},process.env.JWT_SECRET,{expiresIn:"24h"})
    return token
}

userSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password)

}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}
const userModel= mongoose.model("user",userSchema)

module.exports=userModel