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
            <div className="row justify-content-between">
                <div className="col-sm-10">
                <SubTodoBox  TodoID={this.props.match.params.id}/>
                </div>
                <div className='col-sm-2 align-self-center'>
                    <div className="row justify-content-center">
                    <Link className="btn btn-info w-100 col-sm-8" to="/createSubTodo">NewSubTodo</Link>
                    <Link className="btn btn-warning w-100 col-sm-8" to={`/EditTodo/${this.props.match.params.id}`}>Edit Todo</Link> 
                    <Link className="btn btn-danger w-100 col-sm-8" 
                    onClick={()=>{this.deleteTodo(this.props.match.params.id) }}
                    to={`/${this.props.match.params.id}`}>Delete Todo</Link>
                    <a href={'/SubTodos/'+this.props.match.params.id}className='btn btn-primary'>save changes</a> 
                    </div>
                </div>
            </div>
        )
    }
}