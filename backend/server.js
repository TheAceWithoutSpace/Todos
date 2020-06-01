const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Autoapp", {useNewUrlParser:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb database connection established succsesfully");
})

app.listen(5000,()=>{console.log(`Server is running on port:5000`);});