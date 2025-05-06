const jwt=require('jsonwebtoken')
const userModel=require('../models/user_model')
const bycrypt=require('bcrypt');
const captainModel=require('../models/captain.model')
const BlacklistToken = require('../models/blacklistToken.model');

module.exports.authUser=async(req,res,next)=>{
 const token = req.cookies.token ||req.headers.authorization?.split(' ')[1];

 if(!token){
    return res.status(401).json({message:"unauthorized1"})
 }
 const isblacklist = await BlacklistToken.findOne({token : token})
 if(isblacklist){
    return res.status(401).json({message:"unauthorized"})
 }
 try{
  
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const user=await userModel.findById(decoded._id)
    req.user=user
    return next()

 }
 catch(err){
    return res.status(401).json({message:"unauthorized1"})
 }
}


module.exports.authCaptain=async(req,res,next)=>{
 const token = req.cookies.token ||req.headers.authorization?.split(' ')[1];

 if(!token){
    return res.status(401).json({message:"unauthorized 1"})
 }
 const isblacklist = await BlacklistToken.findOne({token : token})
 if(isblacklist){
   return res.status(401).json({message:"unauthorized2"})
 }
 try{
  
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const captain=await captainModel.findById(decoded.id)
    req.captain=captain
    return next()
 }
 catch(err){
    return res.status(401).json({message:"unauthorized3"})
 }
}