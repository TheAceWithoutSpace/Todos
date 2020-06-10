import React,{Component}from 'react';
import axios from 'axios';

export default class createUser extends Component{
    
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeemail=this.onChangeemail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
        
        this.state={
            username:'',
            email:'',
            password:'',
        }
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangeemail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault();
        const user={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        console.log(user);
        axios.post('http://localhost:3000/users/add',user)
            .then(res=>{
                console.log(res.data);
                if(res.data==='Created')
                {
                this.props.Auth(res.data);
                }
            })
            .catch(err=>console.log("signup err"+err));
         //window.location='/';
    }
    
    render(){
        return(
            <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onsubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type='text' required
                    className="form-control" value={this.state.username}
                    onChange={this.onChangeUsername}/>
                </div>
                <div className="form-group">
                    <label>email:</label>
                    <input type='email' required
                    className="form-control" value={this.state.email}
                    onChange={this.onChangeemail}/>
                </div>
                <div className="form-group">
                    <label>password:</label>
                    <input type='password' required
                    className="form-control" value={this.state.password}
                    onChange={this.onChangePassword}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">createUser</button>
                </div>
            </form>
        </div>
        )
    }
}