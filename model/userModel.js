
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Enter a name"]
    },
    email: {
        type:String,
        required:[true,"Please Enter a name"],
        unique:true
    },
    password: {
        type:String,
        required:[true,"Please Enter a password"],
        minLength:[4,"Password must be at least 4 characters"],
        select:false
    },
    phoneNumber: {
        type:Number,
        required:[true,"Please Enter a phone number"]
    },
    role: {
        type:String,
        default:"User"
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    resetPasswordToken: String,
    resetPasswordTime:Date,

});
userSchema.pre('save',async function(){
    if(!this.isModified){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
});

module.exports = mongoose.model('User', userSchema)

