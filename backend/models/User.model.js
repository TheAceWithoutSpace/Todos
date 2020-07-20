const mongoose = require("mongoose");
<<<<<<< HEAD

//user modle component
=======
const passportLocalMongoose=require('passport-local-mongoose');

>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
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
<<<<<<< HEAD
    Admin:{
        required:true,
        type:Boolean,
    }
},{
    timestamp:true,
});

=======
},{
    timestamp:true,
});
userSchema.plugin(passportLocalMongoose);
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
const User =mongoose.model('User',userSchema);
module.exports=User;