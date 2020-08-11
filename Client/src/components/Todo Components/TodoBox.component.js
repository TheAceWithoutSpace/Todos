import React,{Component}from 'react';
import TodoTableRow from './TodoTableRow.component'
import axios from 'axios';
import '../style.css'
import {GetTodos} from '../../Actions'
import { connect } from 'react-redux';

class TodoBox extends Component{

    //getting all the todos for the current user
    componentDidMount(){
        axios.get(`http://localhost:3000/Todos/${this.props.userID}`)
        .then(res=>{this.props.GetTodos(res.data)})
        .catch(err=>{console.log('Error'+err)})
    }
    // createing table for the todos for the current user
    TodosList(){
        return this.props.Todos.map( currentTodo=>{
            return<TodoTableRow todo={currentTodo}
            deleteTodo={this.deleteTodo} 
            key={currentTodo._id}/>;
        })
    }
    //table 
    render(){
        console.log(this.props)
        return(
            <div >
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Is done</th>
                            <th>TodoTitle</th>
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
const mapStateToProps=(state)=>{
    return {Todos:state.Todos};
};
export default connect(mapStateToProps,{GetTodos})(TodoBox)