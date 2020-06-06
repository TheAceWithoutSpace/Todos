import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import HomePage from "./components/Home.component";
import CreateTodo from "./components/createTodo.component";
import createSubTodo from "./components/createSubTodo.component";
import EditTodo from "./components/EditTodo.component";
import createUser from "./components/createUser.component";
import UserLogin from "./components/Login.component";
import MyTodos from './components/MyTodos.component';
import UserSpecs from './components/UserSpecs.component';

function App() {
  return(
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={HomePage}/>
      <Route path='edit/:id' component={EditTodo}/>
      <Route path='/createTodo' component={CreateTodo}/>
      <Route path='/createSubTodo'component={createSubTodo}/>
      <Route path="/SignUp" component={createUser}/>
      <Route path="/userlogin"component={UserLogin}/>
      <Route path="/myTodos" component={MyTodos}/>
      <Route path="/UserSpecs" component={UserSpecs}/>
    </Router>
  );
}

export default App;
