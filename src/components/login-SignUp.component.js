import React,{Component}from 'react';
import Login from './Login.component';
import Signup from './createUser.component';

export default class Login_Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            status:false,
            mod:'SignUp'
        }
        
        this.Auth=this.Auth.bind(this);
        this.handelLogin=this.handelLogin.bind(this);
        this.handelmod=this.handelmod.bind(this);
    }
    Auth(data){
        this.props.handleLogin(data);
        this.props.history.push('/myTodos');
    }
    handelLogin(){
        this.setState(state=>({status:!state.status} ))
        this.handelmod()
    } 
    handelmod(){
        let mod=this.state.status;
        if (mod === false)
            this.setState({mod:'SignUp'});
        if (mod)
            this.setState({mod:'Login'});
    }  
    render(){
        const flag=this.state.status;
        const temp =this.state.mod
        return(
            <div>
                <h1>Login_Signup Component</h1>
                <h3>stat:{this.props.loggedInStatus}</h3>
                {flag?<Login Auth={this.Auth}/>:<Signup Auth={this.Auth}/>}
        <button className="btn btn-primary" onClick={this.handelLogin}>{temp}</button>
            </div>
        )
    }
}