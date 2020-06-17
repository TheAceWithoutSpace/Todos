import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import SubTodoBox from './SubTodoBox.component';
import axios from 'axios'
export default class MyTodos extends Component{
    constructor(props){
        super(props);
        this.deleteTodo=this.deleteTodo.bind(this);
    }
    deleteTodo(id){
        axios.delete('http://localhost:3000/SubTodos/deleteall/'+id)
                .then(axios.delete('http://localhost:3000/Todos/'+id)
                    .then(res=>console.log(res.data))
            )
            window.location=`/MyTodos`
            }
    render(){
        localStorage.setItem('TodoID',this.props.match.params.id)
        return(
            <div>
                <div>
                <Link className="btn btn-success" to="/createSubTodo">CreatenewSubTodo</Link>
                <Link className="btn btn-warning" to={`/EditTodo/${this.props.match.params.id}`}>edit Todo</Link> 
                <Link className="btn btn-danger" 
                onClick={()=>{this.deleteTodo(this.props.match.params.id) }}
                to={`/${this.props.match.params.id}`}>Delete Todo</Link>
                </div>
                <SubTodoBox TodoID={this.props.match.params.id}/>
            </div>
        )
    }
}