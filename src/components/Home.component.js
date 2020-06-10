import React,{Component}from 'react';
import Login from './Login.component';
import Signup from './createUser.component';
export default class Home extends Component{
    constructor(props){
        super(props);
        this.Auth=this.Auth.bind(this);
    }
    Auth(data){
        this.props.handleLogin(data);
        this.props.history.push('/myTodos');
    }
        
    render(){
        return(
            <div>
                <h1>Home Component</h1>
                <h3>status:{this.props.loggedInStatus}</h3>
                <Login Auth={this.Auth}/>
                <Signup Auth={this.Auth}/>
            </div>
        )
    }
}