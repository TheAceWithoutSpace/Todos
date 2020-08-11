const mongoose = require("mongoose");

//user modle component
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
    Admin:{
        required:true,
        type:Boolean,
    }
},{
    timestamp:true,
});

const User =mongoose.model('User',userSchema);
module.exports=User;