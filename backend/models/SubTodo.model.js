import moongoose from "mongoose";

const Schema= mongoose.Schema;

const SubTodoSchema=new Schema({
    TodoId:{type: String,required:true},
    SubTodotitle:{type:String,required:true},
    SubTodoDescription:{type:String,required:true},
});

const SubTodo =mongoose.model('SubTodo',SubTodoSchema);
module.exports=SubTodo;