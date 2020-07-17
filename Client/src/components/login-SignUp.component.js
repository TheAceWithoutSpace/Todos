import React,{Component}from 'react';
import Login from './Login.component';
import Signup from './createUser.component';

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
        const temp =this.state.mod
        return(
            <div className="container border border-dark" style={{width:'35%',margin: '0% auto',padding:'12%',background:'rgb(246, 246, 246)'}}>
                <div className="row">
                    {flag?<Login err={this.state.err} className="container" Auth={this.Auth}/>:<Signup className="container" Auth={this.Auth}/>}
                    <button className="btn btn-outline-info btn-block" onClick={this.handelLog}>{temp}</button>
                </div>
            </div>
        )
    }
}