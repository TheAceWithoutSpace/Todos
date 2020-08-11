import React,{Component}from 'react';
import Login from '../components/User Component/Login.component';
import Signup from '../components/User Component/createUser.component';

export default class Login_Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            status:false,
        }
        
        this.Auth=this.Auth.bind(this);
        this.handelLog=this.handelLog.bind(this);
    }
    Auth(data){
        this.props.handleLogin(data);
        console.log(data);
        window.location=("/MyTodos");
    }
    handelLog(){
        this.setState(state=>({status:!state.status} ))
    }
    render(){
        return(
            <div className="container my-5" >
                    {this.state.status?
                    <div className ="col-sm-6 text-center mx-auto ">
                        <Login err={this.state.err} className="container" Auth={this.Auth}/>
                        <button className="btn btn-outline-info btn-block" onClick={this.handelLog}>SignUp</button>
                    </div>
                    :<div className ="col-sm-6 text-center mx-auto">
                        <Signup className="container" Auth={this.Auth}/>
                        <button className="btn btn-outline-info btn-block" onClick={this.handelLog}>Login</button>
                    </div>}
            </div>
        )
    }
}