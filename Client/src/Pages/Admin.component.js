import React,{Component}from 'react';
import axios from 'axios';
import AdminShowUser from'../components/Admin Components/AdminShowUser.component';
import AdminSpecs from '../components/Admin Components/AdminSpecs.component'

export default class Admin extends Component{
    constructor(props){
        super(props)
        this.state={
            Users:[],
        }
    }
    async UNSAFE_componentWillMount(){
        this.setState({Users:await this.getUsers()})
    }
    //get all the users
        async getUsers(){
            const ResUsers=await axios.get(`http://localhost:3000/Users/`)
            return(await ResUsers.data)
        }
            
        
     render(){
        return(
            <div>
                <AdminShowUser users={ this.state.Users}/>
                <AdminSpecs users={ this.state.Users}/>
            </div>
        )
    }
}