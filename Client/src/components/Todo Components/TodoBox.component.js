import React,{Component}from 'react';
import TodoTableRow from './TodoTableRow.component'
import axios from 'axios';
import '../style.css'

export default class SubTodos extends Component{
    constructor(props){
        super(props);
        
        this.state={Todos:[],checked:false};
    }
    //getting all the todos for the current user
    componentDidMount(){
        axios.get(`http://localhost:3000/Todos/${this.props.userID}`)
        .then(res=>{this.setState({Todos:res.data})})
        .catch(err=>{console.log('Error'+err)})
    }
    // createing table for the todos for the current user
    TodosList(){
        return this.state.Todos.map( currentTodo=>{
            return<TodoTableRow todo={currentTodo}
            checked={this.state.checked}
            deleteTodo={this.deleteTodo} 
            key={currentTodo._id}/>;
        })
    }
    //table 
    render(){
        return(
            <div >
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Is done</th>
                            <th>Todotitle</th>
                            <th>Description</th>
                            <th>Date of Submission</th>
                            <th>SubTodos done vs un done</th>
                            <th>To See The SubTodos</th>
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