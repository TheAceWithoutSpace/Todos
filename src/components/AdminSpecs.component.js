import React,{Component}from 'react';
import Axios from 'axios';
import Chart from './chart.component';

export default class AdminSpecs extends Component{
   constructor(props){
       super(props);
       this.state={
           chartData:{},
           users:[]
       }
}
componentDidUpdate(prevProps,prevState){
    if (prevProps !== this.props){
        this.getTodos()
    }
}
async getTodos(){
    let Todos=[];
        for(let i=0;i<this.props.users.length;i++)
        {
        Todos[i]=(await this.TodosDataCall(this.props.users[i]._id));
        }
        this.getChartData(Todos)
}
async TodosDataCall(ID){
    const TodoResponse=await Axios.get(`http://localhost:3000/Todos/${ID}`)
    return(TodoResponse.data)
}
 getChartData(Todos){
    let UsersbyTodos=[0,0,0,0,0,0,0,0,0,0,0]
    let flag=false;
    this.props.users.forEach(CurrentUser=>{
        for(let i=0;i<Todos.length;i++)
        {
            if(Todos[i].length!==0)
            {
                console.log('Hello')
                if(CurrentUser._id===Todos[i][0].userId)
                {
                    flag='true';
                    UsersbyTodos[Todos[i].length]+=1;
                }
            }
        }
        if(flag==='false')
        {
            UsersbyTodos[0]+=1;
        }
    })
    this.setState({
        chartData:{
            labels:[0,1,2,3,4,5,6,7,8,9,10],
            datasets:[{
             label:"users",
             backgroundColor:["rgba(255, 0, 70, 0.65)",
                              "rgba(200, 0, 70, 0.65)",
                              "rgba(0, 150, 120, 0.65)",
                              "rgba(25, 120, 70, 0.65)",
                              "rgba(155, 0, 140, 0.45)",
                              "rgba(25, 0, 90, 0.55)",
                              "rgba(0, 180, 00, 0.65)",
                              "rgba(255, 180, 70, 0.65)",
                              "rgba(255, 180, 00, 0.65)",
                              "rgba(255, 120, 70, 0.65)",
                              "rgba(255, 40, 80, 0.65)",
                              "rgba(255, 0, 255, 0.65)"],
             data:UsersbyTodos
            },
            ]
        }
    })
 }

    render(){
        return(
            <div>
                <div className="container" style={{marginTop:50, position:'relative',width:600,height:800}}>
                    <Chart type='Pie' title='Users By The Num Of Todos' chartData={this.state.chartData}/>
                </div>
            </div>
        )
    }
}