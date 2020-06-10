import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import TodoBox from './TodoBox.component';
export default class MyTodos extends Component{
    render(){
        return(
            <div>
                <div>
                <p>MyTodos Component</p>
                <h3>status:{this.props.loggedInStatus}</h3>
                <Link to="createTodo">CreatenewTodo</Link>
                </div>
                <TodoBox/>
            </div>
        )
    }
}