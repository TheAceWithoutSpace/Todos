const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD
//vars
const MongoDbRoot="mongodb://localhost:27017/TodoApp";
const mongoconnectmsg="Mongodb database connection established succsesfully";
const port =3000;
const serverRunningMsg='Server is running on port:'+port;
const TodoRouter=require('./routes/Todos');
const SubTodosRouter=require('./routes/SubTodos');
const UsersRouter=require('./routes/users');

// connecting to local db 
mongoose.connect(MongoDbRoot, {useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log(mongoconnectmsg);
})

//TodoRoutes
 app.use('/Todos',TodoRouter);
  //SubTodosRoute
 app.use('/SubTodos',SubTodosRouter);
 //UsersRoute
 app.use('/users',UsersRouter);

app.listen(port,()=>console.log(serverRunningMsg));
=======


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
>>>>>>> 88f860f893279b24b233ebeb868bf1dd73d0b549
