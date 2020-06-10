import React,{Component}from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';

const Todos = props=>(
    <tr>
        <td>{props.todo.userId}</td>
        <td>{props.todo.Todotitle}</td>
        <td>{props.todo.Description}</td>
        <td>{props.todo.Todosevingdate.substring(0,10)}</td>
        <td>
            <Link to={`/EditTodo/${props.todo._id}`}>edit</Link>|<a href="/MyTodos" onClick={()=>{props.deleteTodo (props.todo._id) }}>delete</a>
        </td>
    </tr>
)

export default class SubTodos extends Component{
    constructor(props){
        super(props);

        this.deleteTodo=this.deleteTodo.bind(this);

        this.state={Todos:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:3000/Todos/')
        .then(res=>{this.setState({Todos:res.data})})
        .catch(err=>{console.log('Error'+err)})
    }
    deleteTodo(id){
        axios.delete('http://localhost:3000/Todos/'+id)
            .then(res=>console.log(res.data))
        this.setState({
            Todos:this.state.Todos.filter(el=>el._id!==id)
        })
    }
    TodosList(){
        return this.state.Todos.map(currentTodo=>{
            return<Todos todo={currentTodo} deleteTodo={this.deleteTodo} key={currentTodo._id}/>;
        })
    }
    render(){
        return(
            <div>
                <h3>Todo box</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>userId</th>
                            <th>Todotitle</th>
                            <th>Description</th>
                            <th>Todosevingdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.TodosList()}
                    </tbody>
                </table>
            </div>
        )
    }
}