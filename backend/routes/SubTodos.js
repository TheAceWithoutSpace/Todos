const router=require('express').Router();
let SubTodos=require('../models/SubTodo.model');

router.route('/').get((req,res)=>{
    SubTodos.find()
        .then(SubTodos=>res.json(SubTodos))
        .catch(err=>res.status(400).json('Error:'+err));      
});
router.route('/add').post((req,res)=>{

const TodoId=req.body.TodoId;
const SubTodotitle=req.body.SubTodotitle;
const SubTodoDescription=req.body.SubTodoDescription;

const NewSubTodos=new SubTodo({
    TodoId,SubTodotitle,SubTodoDescription
})
NewSubTodos.save()
    .then(()=>res.json('SubTodo added'))
    .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/:id').get((req,res)=>{
    SubTodos.findById(req.params.id)
        .then(()=>res.json(SubTodos))
        .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/:id').delete((req,res)=>{
    SubTodos.findByIdAndDelete(req.params.id)
        .then(()=>res.json('SubTodo Deleted'))
        .catch(err=>res.status(400).json('Error:'+err));
});
router.route('/update/:id').post((req,res)=>{
    SubTodos.findById(req.params.id)
    .then(SubTodos=>{
        SubTodos.SubTodotitle=req.body.SubTodotitle;
        SubTodos.SubTodoDescription=req.body.SubTodoDescription;
    
        SubTodos.save()
            .then(()=>res.json('SubTodo updated'))
            .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err => res.status(400).json('Error:'+err));
})