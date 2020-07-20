const router=require('express').Router();
let SubTodos=require('../models/SubTodo.model');

<<<<<<< HEAD
//get all subtodos
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/').get((req,res)=>{
    SubTodos.find()
        .then(SubTodos=>res.json(SubTodos))
        .catch(err=>res.status(400).json('Error:'+err));      
});
<<<<<<< HEAD

//add new subtodo
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/add').post((req,res)=>{
    const TodoId=req.body.TodoID;
    const SubTodotitle=req.body.SubTodotitle;
    const SubTodoDescription=req.body.SubTodoDescription;
    const done= 'false';
    const NewSubTodos=new SubTodos({
    TodoId,SubTodotitle,SubTodoDescription,done
    });
    NewSubTodos.save()
        .then(()=>res.json('SubTodo added'))
        .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//get subtodos by id
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/edit/:id').get((req,res)=>{
    SubTodos.findById(req.params.id)
        .then((SubTodos)=>res.json(SubTodos))
        .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//get all subtodos by TodoId
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/:id').get((req,res)=>{
    SubTodos.find({TodoId:req.params.id})
        .then((SubTodos)=>res.json(SubTodos))
        .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//delet subtodo by id
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/:id').delete((req,res)=>{
    SubTodos.findByIdAndDelete(req.params.id)
        .then(()=>res.json('SubTodo Deleted'))
        .catch(err=>res.status(400).json('Error:'+err));
});
<<<<<<< HEAD
//delet all the subtodos
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/deleteall/:id').delete((req,res)=>{
    SubTodos.deleteMany({TodoID:req.param.id})
        .then(()=>res.json('SubTodo Deleted'))
        .catch(err=>res.status(400).json('Error:'+err));
})
<<<<<<< HEAD
//update subtodo
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
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
});
<<<<<<< HEAD
//toggle subtodo to done/undone
=======
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
router.route('/isdone/:id').post((req,res)=>{
    SubTodos.findById(req.params.id)
    .then(SubTodos=>{
        SubTodos.done=req.body.done
    SubTodos.save()
        .then(()=>res.json(SubTodos))
        .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err => res.status(400).json('Error:'+err));
});
module.exports=router;