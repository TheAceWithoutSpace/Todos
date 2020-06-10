import React,{Component}from 'react';
import axios from 'axios';

export default class Login extends Component{
    
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
        
        this.state={
            username:'',
            password:'',
        }
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault();
        const User={
            username:this.state.username,
            password:this.state.password
        }

        console.log(User);
        axios.post('http://localhost:3000/users/login',User)
            .then(res=>{if(res.data)
                {this.props.Auth(res.data)
                console.log(this.props)}
            })
            .catch(err=>console.log('loginerr'+err));
    }
    
    render(){
        return(
            <div>
            <h3>Loggin</h3>
            <form onSubmit={this.onsubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type='text' required
                    className="form-control" value={this.state.username}
                    onChange={this.onChangeUsername}/>
                </div>
                <div className="form-group">
                    <label>password:</label>
                    <input type='password' required
                    className="form-control" value={this.state.password}
                    onChange={this.onChangePassword}/>
                </div>
                <div>
                    <button type="submit"  className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        )
    }
}