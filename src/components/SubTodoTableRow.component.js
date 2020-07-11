import React from'react';
import Axios from 'axios';
import{Link} from 'react-router-dom';
import './style.css'

export default class SubTodoTableRow extends React.Component{

    state={
        cheacked:this.props.SubTodos.done
    }
    handeleChange=async()=>{
        let cheacked='';
        if(this.state.cheacked==='false')
        {
            this.setState({cheacked:'true'})
             cheacked=true;
        }else{
            this.setState({cheacked:'false'})
            cheacked=false;
        }     
            const SubTodo={
            done:cheacked,
            }
            Axios.post("http://localhost:3000/SubTodos/isdone/"+this.props.SubTodos._id,SubTodo)
            .then(res => console.log(res.data));
        
    } 
    async getSubTodos(CurrentTodo){
        const SubTodosResponse= await Axios.get(`http://localhost:3000/SubTodos/${CurrentTodo}`)
        return(SubTodosResponse.data)
    }
    async componentDidUpdate(){
        let SubTodoFamily=(await this.getSubTodos(this.props.TodoID));
            const Todo={done:(await this.CheckSubTodosFamily(SubTodoFamily))}
            await Axios.post("http://localhost:3000/Todos/isdone/"+localStorage.getItem('TodoID'),Todo)
                .then(res => console.log(res.data));
    }
    async CheckSubTodosFamily(SubTodoFamily){
        let flag=true;
        SubTodoFamily.forEach(CurrentFamilySubTodo => {
            if(CurrentFamilySubTodo._id!==this.props.SubTodos._id){
                if(CurrentFamilySubTodo.done==='false')
                {
                    flag=false
                }
            }else{
                if(CurrentFamilySubTodo.done==='true')
                {
                    flag=false
                }
            }
            })

            return flag    
    }
    render(){
    if(this.state.cheacked==='true')
    {return(
        <tr>
            <td>
            <input  type="checkbox" isdone={this.props.SubTodos.done}
            defaultChecked={this.props.checked} 
            onChange={this.handeleChange}
            checked
            value={this.props.SubTodos._id}/>
            </td>
            <td className='done'>{this.props.SubTodos.SubTodotitle}</td>
            <td className='done'>{this.props.SubTodos.SubTodoDescription}</td>
            <td>
            <Link className="btn btn-warning" to={`/EditSubTodos/${this.props.SubTodos._id}`}>edit</Link>  <s/>
            <Link className='btn btn-danger' onClick={()=>{this.props.deleteSubTodo(this.props.SubTodos._id)} }
             to={`/SubTodos/${this.props.SubTodos._id}`}>delete</Link>
            </td>
        </tr>
    )}else{
    return(
    <tr>
        <td>
            <input  type="checkbox" isdone={this.props.SubTodos.done}
            defaultChecked={this.props.checked} 
            onChange={this.handeleChange}
            checked={false}
            value={this.props.SubTodos._id}/>
        </td>
        <td>{this.props.SubTodos.SubTodotitle}</td>
        <td>{this.props.SubTodos.SubTodoDescription}</td>
        <td>
            <Link className="btn btn-warning" to={`/EditSubTodos/${this.props.SubTodos._id}`}>edit</Link>  <s/>
            <Link className='btn btn-danger' onClick={()=>{this.props.deleteSubTodo(this.props.SubTodos._id)} }
             to={`/SubTodos/${this.props.SubTodos._id}`}>delete</Link>
        </td>
    </tr>
    )}}
}
