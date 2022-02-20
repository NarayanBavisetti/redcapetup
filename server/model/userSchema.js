const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    PAN :{
        type:Number,
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
    type:{
        type:String,
        required:true
    }
})

const User = mongoose.model("users",userSchema);
module.exports = User;