import moongoose from "mongoose";

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
        minlength:5
    },
},{
    timestamp:true,
});
const User =mongoose.model('User',userSchema);
module.exports=User;