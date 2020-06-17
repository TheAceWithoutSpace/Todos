const router = require('express').Router();
let Todo = require('../models/Todo.model');

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
router.route("/:id").get((req,res)=>{
    Todo.find({userId:req.params.id})
        .then(Todo=>res.json(Todo))
        .catch(err=>res.status(400).json('Error'+err));
});
router.route('/edit/:id').get((req,res)=>{
    Todo.findById(req.params.id)
        .then((Todos)=>res.json(Todos))
        .catch(err=>res.status(400).json('Error:'+err));
});
router.route("/:id").delete((req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Todo deleted.'))
        .catch(err=>res.status(400).json('Error'+err));
});
router.route('/update/:id').post((req,res)=>{
    Todo.findById(req.params.id)
    .then(Todo=>{ 
        Todo.Todotitle=req.body.Todotitle;
        Todo.Todosevingdate=req.body.Todosevingdate;
        Todo.Description=req.body.Description;
    Todo.save()
        .then(()=>res.json('Todo Updated'))
        .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err => res.status(400).json('Error:'+err));
});
module.exports= router;
