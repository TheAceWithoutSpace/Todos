const router = require('express').Router();
let Todo = require('../models/Todo.model');
<<<<<<< HEAD
//get all todos
=======

>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/').get((req,res)=>{
    Todo.find()
        .then(Todo=>res.json(Todo))
        .catch(err=>res.status(400).json('Error:'+err));      
});
<<<<<<< HEAD
//add new todo
=======

>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/add').post((req,res)=>{
    const userId=req.body.userId;
    const Todotitle = req.body.Todotitle;
    const Todosevingdate=Date.parse(req.body.Todosevingdate);
    const Description= req.body.Description;
    const done='false';

    const NewTodo= new Todo({
        userId,Todotitle,Todosevingdate,Description,done
    });

    NewTodo.save()
        .then(()=>res.json('Todo added'))
        .catch(err=>res.status(400).json('Error'+err));
});
<<<<<<< HEAD
//get todo by userid
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route("/:id").get((req,res)=>{
    Todo.find({userId:req.params.id})
        .then(Todo=>res.json(Todo))
        .catch(err=>res.status(400).json('Error'+err));
});
<<<<<<< HEAD
//get todo by id
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/edit/:id').get((req,res)=>{
    Todo.findById(req.params.id)
        .then((Todos)=>res.json(Todos))
        .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//delete todo 
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route("/:id").delete((req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Todo deleted.'))
        .catch(err=>res.status(400).json('Error'+err));
});
<<<<<<< HEAD
//delete all todos by userId
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/deleteall/:id').delete((req,res)=>{
    Todo.deleteMany({userId:req.param.id})
        .then(()=>res.json('Todo Deleted'))
        .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//toggle todo to done/undone
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/isdone/:id').post((req,res)=>{
    Todo.findById(req.params.id)
    .then(Todo=>{
        Todo.done=req.body.done
        Todo.save()
        .then(()=>res.json(Todo))
        .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err => res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//update todo
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
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
