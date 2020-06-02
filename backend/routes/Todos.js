const router=require('express').Router();
let Todo=require('../models/Todo.model');

router.route('/').get((req,res)=>{
    Todo.find()
        .then(Todo=>res.json(Todo))
        .catch(err=>res.status(400).json('Error:'+err));      
});

router.route('/add').post((req,res)=>{
    const userId=req.body.userId;
    const Todotitle = req.body.Todotitle;
    const Todosevingdate=Date.parse(req.body.Todosevingdate);
    const Description= req.body.Description;

    const NewTodo= new Todo({
        userId,Todotitle,Todosevingdate,Description
    });

    NewTodo.save()
        .then(()=>res.json('Todo added'))
        .catch(err=>res.status(400).json('Error'+err));
});
module.exports= router;
