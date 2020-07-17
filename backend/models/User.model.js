const mongoose = require("mongoose");
const passportLocalMongoose=require('passport-local-mongoose');

const Schema= mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
            },
    email:{
        type:String,
        required:true,
    },
    password:{
        required:true,
        type:String,
        minlength:2
    },
},{
    timestamp:true,
});
userSchema.plugin(passportLocalMongoose);
const User =mongoose.model('User',userSchema);
module.exports=User;