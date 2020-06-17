import React,{Component}from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';

const Todos = props=>(
    <tr style={{textDecoration:props.checked?"line-through":""}}>
        <td>
            <input type="checkbox" 
            defaultChecked={props.checked} 
            onClick={props.handelChange}/>
        </td>
        <td>{props.todo.Todotitle}</td>
        <td>{props.todo.Description}</td>
        <td>{props.todo.Todosevingdate.substring(0,10)}</td>
        <td> 
            <Link className='btn btn-info' to={`/SubTodos/${props.todo._id}`}>ShowMore</Link>
        </td>
    </tr>
)


export default class SubTodos extends Component{
    constructor(props){
        super(props);
        
        this.handelChange=this.handelChange.bind(this)
        
        this.state={Todos:[],checked:false};
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
        axios.get(`http://localhost:3000/Todos/${this.props.userID}`)
        .then(res=>{this.setState({Todos:res.data})})
        .catch(err=>{console.log('Error'+err)})
    }

    TodosList(){
        return this.state.Todos.map(currentTodo=>{
            return<Todos todo={currentTodo} 
            checked={this.state.checked}
            handelChange={this.handelChange} 
            deleteTodo={this.deleteTodo} 
            key={currentTodo._id}/>;
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
                            <th>Todotitle</th>
                            <th>Description</th>
                            <th>Todosevingdate</th>
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