const User = require('../model/userModel')
const catchAsyncErrors =require ('../middleware/catchAsyncErrors')

exports.register =catchAsyncErrors( async (req,res,next) =>{
   const {email} = req.body
   const userMail = await User.findOne({email: email})
   if(userMail){
    return next(new ErrorHandler("User already Exists",400))
   }
   
    const user= await User.create(req.body)
    res.status(201).json({success:true,user})
})