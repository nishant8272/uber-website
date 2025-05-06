const mongoose = require('mongoose');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname : {
      type : String,
      required : true,
      minlenght : [3,'firstname should be atleast 3 characters long'],
    },
    lastname : {
      type : String,
      minlenght : [3,'lastname should be atleast 3 characters long'],
    },
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password : {
    type : String,
    required : true,
    select : false,
  },
  socketId : {
    type : String,
  },
  status : {
    type : String,
    enum : ['active','inactive'],
    default : 'inactive',
  },
  vehicles : {
    color : {
      type : String,
      required : true,
      minlenght : [3,'color should be atleast 3 characters long'],
    },
    plate : {
      type : String,
      required : true,
      minlenght : [3,'plate should be atleast 3 characters long'],
    },
    capacity : {
      type : Number,
      required : true,
      min : [1,'capacity should be atleast 1'],
    },
    vehicleType : {
      type : String,
      enum : ['car','motorcyle','bus'],
      required : true,
    }
  },
  location :{
    lat :{
        type : Number,
    },
    lng :{
        type : Number,
    }
  }
})

captainSchema.methods.generateAuthToken = async function(){
  const token = jwt.sign({_id : this._id},process.env.JWT_SECRET,{expiresIn : '24h'});
  return token;
}

captainSchema.methods.comparePassword = async function(password){
  const isMatch = await bycrypt.compare(password,this.password);
  return isMatch;
}

captainSchema.methods.hashPassword = async function(password){
  return await bycrypt.hash(password,10);
}

const captainModel = mongoose.model('Captain',captainSchema);
module.exports = captainModel;