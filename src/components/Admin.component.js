import React,{Component}from 'react';
import axios from 'axios';
import AdminShowUser from'./AdminShowUser.component';
import AdminSpecs from './AdminSpecs.component'

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
        async getUsers(){
            const ResUsers=await axios.get(`http://localhost:3000/Users/`)
            return(await ResUsers.data)
        }
        async getTodos(id){
            const TodoResponse=await axios.get('http://localhost:3000/Todos/'+id)
            return(await TodoResponse.data)
            
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