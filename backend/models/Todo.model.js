const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema=new Schema({
    userId:{type:String,required:true},
    Todotitle:{type:String,required:true},
    Todosevingdate:{type:Date,required:true},
    Description:{type:String,required:true},
    done:{type:String,required:true},
},{timestamp:true,});

const Todo =mongoose.model('Todo',TodoSchema);
module.exports = Todo;