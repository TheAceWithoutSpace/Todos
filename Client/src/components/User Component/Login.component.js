import React,{Component}from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {isAdmin} from  '../../Actions'
class Login extends Component{
    
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
    // handeling the form fields
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
    // submiting the form
    onsubmit(e){
        e.preventDefault();
        const User={
            username:this.state.username,
            password:this.state.password
        }

        console.log(User);// checking if the user username and password is the sane as saved as in the db
        axios.post('http://localhost:3000/users/login',User)
            .then(res=>{
                if(res.data)
                {
                    this.props.isAdmin(res.data[0].Admin)
                    if(res.data[0].Admin===true)
                    {
                        console.log('admin')
                    }
                    this.props.Auth(res.data[0]._id)
                }
            })
            .catch(err=>alert("Wrong UserName or Password"))
        }
    // rendering the login form
    render(){ 

        return(
            <div>
            <h3>Login</h3>
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
                    <button type="submit" className="btn btn-outline-primary btn-block">Login</button>
                </div>
            </form>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
console.log(state);
    return {Admin:state.Admin};
};

export default connect(mapStateToProps,{isAdmin})(Login);