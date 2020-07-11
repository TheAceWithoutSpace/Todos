import React,{Component}from 'react';
import axios from 'axios';
import TableRow from'./SubTodoTableRow.component';


export default class SubTodoss extends Component{
    constructor(props){
        super(props);
        this.deleteSubTodo=this.deleteSubTodo.bind(this);
        this.state={ 
            SubTodos:[],
            checked:'false'}
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
            return<TableRow SubTodos={CurrentSubTodos} 
            deleteSubTodo={this.deleteSubTodo} 
            TodoID={this.props.TodoID}
            isdone={this.state.checked}
            key={CurrentSubTodos._id}/>;
        })
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Is done</th>
                            <th>SubTodotitle</th>
                            <th>Description</th>
                            <th>Actions</th>
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