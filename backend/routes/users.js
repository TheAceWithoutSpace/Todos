
const router = require('express').Router();
let User = require('../models/User.model');
const bcrypt = require('bcrypt');

<<<<<<< HEAD
//get all users
=======
const Login=false;
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/').get((req,res)=>{
User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//login
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/login').post((req,res)=>{
    User.find({username:req.body.username})
        .then(async user=>{
            if (user==null){
                res.status(400).json('Cant find user');
            }
            try{
               const match=await checkUser(req.body.password,user[0].password)
               console.log(match)
                if(match)
                {
                    res.json(user)
                }else
                {
                    res.status(404).send('Not Allowed');
                }
            } catch{
                res.status(500).send()
            }
        })
});
<<<<<<< HEAD
//delete user
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route("/:id").delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=>res.json('User deleted.'))
        .catch(err=>res.status(400).json('Error'+err));
});
<<<<<<< HEAD
//create new user
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/add').post(async (req,res) => {
    
    try{  
        const username=req.body.username;
        const email=req.body.email;
        const password=await bcrypt.hash(req.body.password,10)

        const newUser=new User({
            username:username,
            email:email,
            password:password,
<<<<<<< HEAD
            Admin:false
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
        });
        newUser.save()
            .then(user=>res.status(201).json(user._id))
            .catch(err=>res.status(400).json('Error:'+err));
    }
    catch{
        err=>res.status(500).json('Error'+err);
    }

});
<<<<<<< HEAD
//encript password
=======

>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
async function checkUser(inputPassword,dbPassword){
    const match=await bcrypt.compare(inputPassword,dbPassword);
    return match;
}


module.exports=router;