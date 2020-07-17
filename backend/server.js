const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb database connection established succsesfully");
})

 const TodoRouter=require('./routes/Todos');
 const SubTodosRouter=require('./routes/SubTodos');
 const UsersRouter=require('./routes/users');

 app.use('/Todos',TodoRouter);
 app.use('/SubTodos',SubTodosRouter);
 app.use('/users',UsersRouter);

app.listen(3000,()=>console.log(`Server is running on port:3000`));