import React,{Component}from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';

const Users =(props)=>
(
    <tr>
        <td>{props.user.username}</td>
        <td>{props.NumOfTodos}</td>
        <td>
            <Link className='btn btn-danger' onClick={()=>{props.DeleteUser(props.user._id)} }
             to={`/Admin`}>delete</Link>
        </td>
    </tr>
)

export default class AdminShowUser extends Component{
    constructor(props){
        super(props);
        this.DeleteUser=this.DeleteUser.bind(this);
        this.state={users:this.props.users,Todos:[]};
    }
    componentDidUpdate(prevProps,prevState){
        if (this.state.users !== this.props.users){
            this.getTodos();
        }
    }
    async getTodos(){
        let Todos=[];
            for(let i=0;i<this.props.users.length;i++)
            {
            Todos[i]=(await this.TodosDataCall(this.props.users[i]._id));
            }
        this.setState({users:this.props.users,Todos:Todos})
    }
    async TodosDataCall(ID){
        const TodoResponse=await axios.get(`http://localhost:3000/Todos/${ID}`)
        return(TodoResponse.data)
    }
     usersList(){
        return this.state.users.map((Currentusers)=>{
            let Todos;
            for(let i=0;i<this.state.Todos.length;i++)
            {
                if(this.state.Todos[i][0].userId===Currentusers._id)
                {
                Todos=this.state.Todos[i].length
                }
            }
            if(Currentusers._id!==localStorage.getItem('UserID'))
            {
                return<Users user={Currentusers} 
                DeleteUser={this.DeleteUser}
                NumOfTodos={Todos}
                key={Currentusers._id}/>;
            }else{
                return(
                <tr key={Currentusers._id}>
                    <td>admin {Currentusers.username}</td>
                    <td>{Todos}</td>
                    {/* <td>{this.getTodos(Currentusers._id)}</td> */}
                </tr>)
            }
        }
    )}
    
    DeleteUser(id){
        axios.get(`http://localhost:3000/Todos/${id}`)
        .then(res=>res.data.forEach(Todo => {
            axios.delete(`http://localhost:3000/SubTodos/deleteall/${Todo._id}`)
            .then(res=>{console.log(res)
                axios.delete(`http://localhost:3000/Todos/deleteall/${id}`)
                    .then(res=>console.log(res))
            })
            .catch(err=>{console.log('Error'+err)}) 
        }))
        axios.delete('http://localhost:3000/users/'+id)
            .then(res=>console.log(res.data))
        this.setState({
            users:this.state.users.filter(el=>el._id!==id)
        })
    }
   
    render(){
        let userID=localStorage.getItem('UserID')
        if(userID==='5eefc438666ffd2524a947a4')
        {
        return(
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>User</th>
                            <th>NumOfTodos</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
            )
        }else{
            return(<h1>Ha Ha nice try</h1>)
        }

    }
}