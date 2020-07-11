import React from'react';
import Axios from 'axios';
import{Link} from 'react-router-dom';
import './style.css'

export default class TodoTableRow extends React.Component{

    state={
        cheacked:this.props.todo.done
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
    render(){
    if(this.state.cheacked==='true')
    {return(
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
        <td> 
            <Link className='btn btn-info' to={`/SubTodos/${this.props.todo._id}`}>ShowMore</Link>
        </td>
    </tr>
    )}}
}
