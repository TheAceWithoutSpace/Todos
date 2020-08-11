import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {connect} from 'react-redux';
import {GetTodos,GetSubTodos} from  '../src/Actions/index'

import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import HomePage from "./Pages/Home.component";
import CreateTodo from "./components/Todo Components/createTodo.component";
import createSubTodo from "./components/SubTodo Components/createSubTodo.component";
import EditTodo from "./components/Todo Components/EditTodo.component";
import MyTodos from './Pages/MyTodos.component';
import UserSpecs from './Pages/UserSpecs.component';
import LoginSignup from './Pages/login-SignUp.component';
import SubTodos from'./components/SubTodo Components/SubTodos.component';
import EditSubtodo from'./components/SubTodo Components/EditSubTodo.component';
import AdminShowUser from './components/Admin Components/AdminShowUser.component';
import AdminSpecs from "./components/Admin Components/AdminSpecs.component";
import Admin from "./Pages/Admin.component";

 class App extends Component{
  constructor(){
    super();
    this.handleLogin=this.handleLogin.bind(this);
  }

  handleLogin(data){
    localStorage.setItem('UserID',data);
  }
  render()
  {
    return(
      <div className='app'>
        <Router>
          <Navbar />
          <br/>
          <Route path="/" exact render={props=>(<HomePage {...props} handleLogin={this.handleLogin}/>)}/>
          <Route path='edit/:id' component={EditTodo}/>
          <Route path='/createTodo' exact render={props => (<CreateTodo{...props}/>)} />
          <Route path='/createSubTodo'component={createSubTodo}/>
          <Route path="/Login" exact render={props=>(<LoginSignup {...props} handleLogin={this.handleLogin}/>)}/>
          <Route path="/myTodos" component={MyTodos}/>
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
const mapStateToProps=(state)=>{
      return {Todos:state.Todos,SubTodos:state.SubTodos};
  };

export default connect(mapStateToProps,{GetTodos,GetSubTodos})(App)