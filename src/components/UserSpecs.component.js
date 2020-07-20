import React,{Component}from 'react';
import Axios from 'axios';
import ChartOne from './chartOne.component';


export default class UserSpecs extends Component{
   constructor(props){
       super(props);
       this.state={
           Todos:[],
           SubTodos:[],
           chartData:{}
       }
}
UNSAFE_componentWillMount(){
    this.getData()
}
async getSubTodos(CurrentTodo){
    const SubTodosResponse= await Axios.get(`http://localhost:3000/SubTodos/${CurrentTodo._id}`)
    return(SubTodosResponse.data)
}
async getTodos(){
    const TodoResponse=await Axios.get(`http://localhost:3000/Todos/${localStorage.getItem("UserID")}`)
    return(TodoResponse.data)
}
async getData(){
    const TodosArray= await this.getTodos()
    let SubTodosArray=[];
    for(var i=0;i<TodosArray.length;i++)
    {
        const Temp=await (this.getSubTodos(TodosArray[i]));
        if(Temp[0])
        {
        SubTodosArray.push(await (this.getSubTodos(TodosArray[i])))
        }
    }
    this.setState({Todos:TodosArray,SubTodos:SubTodosArray })
    }
    render(){
        return(
            <div>
                <div className="container" style={{marginTop:50, position:'relative',width:600,height:550}}>
                    <ChartOne Todos={this.state.Todos} SubTodos={this.state.SubTodos}/>
                </div>
            </div>
        )
    }
}