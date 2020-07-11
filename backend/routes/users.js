
const router = require('express').Router();
let User = require('../models/User.model');
const bcrypt = require('bcrypt');

const Login=false;
router.route('/').get((req,res)=>{
User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/login').post(async(req,res)=>{
    User.find({username:req.body.username})
        .then(user=>{
            if (user==null){
                res.status(400).json('Cant find user');
            }
            try{
               const match=checkUser(req.body.password,user[0].password)
                if(match)
                {
                    res.json(user)
                }else
                {
                    res.json('Not Allowed');
                }
            } catch{
                res.status(500).send()
            }
        })
});
router.route("/:id").delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=>res.json('User deleted.'))
        .catch(err=>res.status(400).json('Error'+err));
});
router.route('/add').post(async (req,res) => {
    
    try{  
        const username=req.body.username;
        const email=req.body.email;
        const password=await bcrypt.hash(req.body.password,10)

        const newUser=new User({
            username:username,
            email:email,
            password:password,
        });
        newUser.save()
            .then(user=>res.status(201).json(user._id))
            .catch(err=>res.status(400).json('Error:'+err));
    }
    catch{
        err=>res.status(500).json('Error'+err);
    }

});
router.route('logged_in').get((req,res)=>{
    then(()=>res.status(201).json('Login'));

});
async function checkUser(inputPassword,dbPassword){
    const match=await bcrypt.compare(inputPassword,dbPassword);
    return match;
}


module.exports=router;