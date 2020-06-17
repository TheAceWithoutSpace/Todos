import React,{Component}from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';

const SubTodos = props=>(
    <tr style={{textDecoration:props.checked?"line-through":""}}>
        <td>
            <input type="checkbox" 
            defaultChecked={props.checked} 
            onClick={props.handelChange}/>
        </td>
        <td>{props.SubTodos.SubTodotitle}</td>
        <td>{props.SubTodos.SubTodoDescription}</td>
        <td>
            <Link className="btn btn-warning" to={`/EditSubTodos/${props.SubTodos._id}`}>edit</Link>  
            <Link className='btn btn-danger' onClick={()=>{props.deleteSubTodo(props.SubTodos._id)} }
             to={`/SubTodos/${props.SubTodos._id}`}>delete</Link>
        </td>
    </tr>
)


export default class SubTodoss extends Component{
    constructor(props){
        super(props);
        
        this.deleteSubTodo=this.deleteSubTodo.bind(this);
        this.handelChange=this.handelChange.bind(this)
        
        this.state={SubTodos:[],checked:false};
    }
    handelChange({target},checked)
    {
        if(target.checked){
            target.removeAttribute('checked');
            target.parentNode.style.textDecoration = "";
        }else{
            target.setAttribute('checked',true);
            target.parentNode.style.textDecoration = "line-through";
        }
        this.setState({checked:!this.state.checked})
    }
    componentDidMount(){
        axios.get(`http://localhost:3000/SubTodos/${this.props.TodoID}`)
        .then(res=>{this.setState({SubTodos:res.data})})
        .catch(err=>{console.log('Error'+err)})
    }
    deleteSubTodo(id){
        axios.delete('http://localhost:3000/SubTodos/'+id)
            .then(res=>console.log(res.data))
        this.setState({
            SubTodos:this.state.SubTodos.filter(el=>el._id!==id)
        })
    }
    SubTodosList(){
        return this.state.SubTodos.map(CurrentSubTodos=>{
            return<SubTodos SubTodos={CurrentSubTodos} 
            checked={this.state.checked}
            handelChange={this.handelChange} 
            deleteSubTodo={this.deleteSubTodo} 
            TodoID={this.props.TodoID}
            key={CurrentSubTodos._id}/>;
        })
    }
    render(){
        return(
            <div>
                <h3>Todo box</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Is done</th>
                            <th>SubTodotitle</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.SubTodosList()}
                    </tbody>
                </table>
            </div>
        )
    }
}