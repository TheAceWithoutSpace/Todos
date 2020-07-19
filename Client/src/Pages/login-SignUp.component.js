import React,{Component}from 'react';
import Login from '../components/User Component/Login.component';
import Signup from '../components/User Component/createUser.component';

export default class Login_Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            status:false,
            mod:'Login',
            err:''
        }
        
        this.Auth=this.Auth.bind(this);
        this.handelLog=this.handelLog.bind(this);
        this.handelmod=this.handelmod.bind(this);
    }
    Auth(data){
        this.props.handleLogin(data);
        console.log(data);
        window.location='/MyTodos';
    }
    handelLog(){
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
        return(
            <div className="text-center container" >
                    {flag?
                    <div>
                        <Login err={this.state.err} className="container" Auth={this.Auth}/>
                        <button className="btn btn-outline-info btn-block" onClick={this.handelLog}>To SignUp</button>
                    </div>
                    :<div>
                        <Signup className="container" Auth={this.Auth}/>
                        <button className="btn btn-outline-info btn-block" onClick={this.handelLog}>To Login</button>
                    </div>}
            </div>
        )
    }
}