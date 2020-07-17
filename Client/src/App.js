import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import HomePage from "./components/Home.component";
import CreateTodo from "./components/createTodo.component";
import createSubTodo from "./components/createSubTodo.component";
import EditTodo from "./components/EditTodo.component";
import MyTodos from './components/MyTodos.component';
import UserSpecs from './components/UserSpecs.component';
import LoginSignup from './components/login-SignUp.component';
import SubTodos from'./components/SubTodos.component';
import EditSubtodo from'./components/EditSubTodo.component';
import AdminShowUser from './components/AdminShowUser.component';
import AdminSpecs from "./components/AdminSpecs.component";
import Admin from "./components/Admin.component";

export default class App extends Component{
  constructor(){
    super();
    this.state={
      loggedInStatus:"Not_Logged_in",
      user:{}
    };

    this.handleLogin=this.handleLogin.bind(this);
  }

  handleLogin(data){
    this.setState({
      loggedInStatus:'LoggedIn',
      user:data
      
    });
    localStorage.setItem('UserID',data);
  }
  render()
  {
    return(
      <div className='app'>
        <Router>
          <Navbar />
          <br/>
          <Route path="/" exact render={props=>(<HomePage {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)}/>
          <Route path='edit/:id' component={EditTodo}/>
          <Route path='/createTodo' exact render={props => (<CreateTodo{...props} user={this.state.user}/>)} />
          <Route path='/createSubTodo'component={createSubTodo}/>
          <Route path="/Login" exact render={props=>(<LoginSignup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)}/>
          <Route path="/myTodos" exact render={props=>(<MyTodos {...props} handleLogin={this.handleLogin} user={this.state.user} loggedInStatus={this.state.loggedInStatus}/>)}/>
          <Route path="/UserSpecs" component={UserSpecs}/>
          <Route path="/EditTodo/:id" component={EditTodo}/> 
          <Route path="/SubTodos/:id" component={SubTodos}/>
          <Route path="/EditSubTodos/:id" component={EditSubtodo}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/adminShowUser" component={AdminShowUser}/>
          <Route path="/AdminSpecs" component={AdminSpecs}/>
      </Router>
    </div>
  );
}
}
