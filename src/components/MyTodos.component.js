import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import TodoBox from './TodoBox.component';
export default class MyTodos extends Component{
    render(){
         const userID=localStorage.getItem('UserID');
        return(
            <div>
                <div>
                <Link className="btn btn-success" to="createTodo">CreatenewTodo</Link>
                <a href='MyTodos' className='btn btn-info'>Save Changes</a>
                </div>
                <TodoBox userID={userID}/>
            </div>
        )
    }
}