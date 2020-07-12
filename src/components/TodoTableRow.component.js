import React from'react';
import Axios from 'axios';
import{Link} from 'react-router-dom';
import './style.css'

export default class TodoTableRow extends React.Component{

    state={
        cheacked:this.props.todo.done,
        Subtodos:0,
        SubTodosDone:0,
    }
    handeleChange=()=>{
        let cheacked='';
        if(this.state.cheacked==='false')
        {
            this.setState({cheacked:'true'})
             cheacked=true;
        }else{
            this.setState({cheacked:'false'})
            cheacked=false;
        }     
        const Todo={
            done:cheacked,
        }
        Axios.post("http://localhost:3000/Todos/isdone/"+this.props.todo._id,Todo)
            .then(res => console.log(res.data));
    } 
    async UNSAFE_componentWillMount(){
    const SubTodo=await this.getSubTodos(this.props.todo._id);
    let SubTodosdone=0;
    for(let i=0;i<SubTodo.length;i++)
    {
        if(SubTodo[i].done==='true')
        {
            SubTodosdone+=1
        }
    }
    this.setState({Subtodos:SubTodo.length,SubTodosDone:SubTodosdone})
    }
    async getSubTodos(CurrentTodo){
        const SubTodosResponse=await Axios.get(`http://localhost:3000/SubTodos/${CurrentTodo}`)
        return(SubTodosResponse.data)
    }
    render(){
    if(this.state.cheacked==='true')
    {
        return(
        <tr className={this.props.done}>
        <td>
        <input  type="checkbox" isdone={this.props.todo.done}
            onChange={this.handeleChange}
            checked
            value={this.props.todo._id}/>
        </td>
        <td className='done'>{this.props.todo.Todotitle}</td>
        <td className='done'>{this.props.todo.Description}</td>
        <td className='done'>{this.props.todo.Todosevingdate.substring(0,10)}</td>
        <td>{this.state.SubTodosDone}/{this.state.Subtodos}</td>
        <td> 
            <Link className='btn btn-info' to={`/SubTodos/${this.props.todo._id}`}>ShowMore</Link>
        </td>
    </tr>
    )}else{
    return(
        <tr className={this.props.done}>
        <td>
        <input  type="checkbox" isdone={this.props.todo.done}
            onChange={this.handeleChange}
            checked={false}
            value={this.props.todo._id}/>
        </td>
        <td>{this.props.todo.Todotitle}</td>
        <td>{this.props.todo.Description}</td>
        <td>{this.props.todo.Todosevingdate.substring(0,10)}</td>
        <td>{this.state.SubTodosDone}/{this.state.Subtodos}</td>
        <td> 
            <Link className='btn btn-info' to={`/SubTodos/${this.props.todo._id}`}>ShowMore</Link>
        </td>
    </tr>
    )}}
}
