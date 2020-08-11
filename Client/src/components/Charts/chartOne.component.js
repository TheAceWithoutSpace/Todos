import React,{Component}from 'react';
import Chart from './chart.component';

export default class chartOne extends Component{
   constructor(props){
       super(props);
       this.state={
           Todos:this.props.Todos,
           SubTodos:this.props.SubTodos,
           chartData:{},
           chartDataDone:{},
           chartDataLeft:{}
       }     
       this.getChartData=this.getChartData.bind(this);
}
componentDidUpdate(prevProps,prevState){
    if (prevProps !== this.props){
        this.getChartData()
    }
}
getChartData(){
    let Tododata=[0,0,0,0,0,0,0,0,0,0,0,0]
    let subtododata=[0,0,0,0,0,0,0,0,0,0,0,0]
    let TodoDataDone=[0,0,0,0,0,0,0,0,0,0,0,0]
    let SubtodoDataDone=[0,0,0,0,0,0,0,0,0,0,0,0]
    let TodoDataLeft=[0,0,0,0,0,0,0,0,0,0,0,0]
    let SubtodoDataLeft=[0,0,0,0,0,0,0,0,0,0,0,0]
    this.props.Todos.forEach(currentTodo => {
        let num=(parseInt(currentTodo.Todosevingdate[5]+currentTodo.Todosevingdate[6]))-1;
        Tododata[num]+=1;
        this.props.SubTodos.forEach(currentSubTodos=>{
            if(currentTodo._id===currentSubTodos[0].TodoId)
            {
                currentSubTodos.forEach(currentSubTodo=>{
                    subtododata[num]+=1;
                    if(currentSubTodo.done==='true'){
                        SubtodoDataDone[num]+=1;
                    }else{
                    SubtodoDataLeft[num]+=1;
                    }
                })
            }

        })
        if(currentTodo.done==='true')
        {
        TodoDataDone[num]+=1;
        }
        else
        {
            TodoDataLeft[num]+=1;
        }
    });
    this.setState({
    chartDataLeft:{ //chart display todos and subtodos thet aren't done
        labels:["jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
         label:"Todos",
         backgroundColor:"rgba(220, 150, 40, 0.65)",
         data:TodoDataLeft
        },
        {
        label:"subTodos",
        backgroundColor:"rgba(50, 180, 20, 0.55)",
        data:SubtodoDataLeft
        },
        ]
    },
    chartDataDone:{ //chart display todos and subtodos that are done
        labels:["jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
         label:"Todos",
         backgroundColor:"rgba(80, 160, 12, 0.65)",
         data:TodoDataDone
        },
        {
        label:"subTodos",
        backgroundColor:"rgba(0, 140, 150, 0.55)",
        data:SubtodoDataDone
        },
        ]
    },
    chartData:{ //chart Todods vs SubTodos Thet added by mounth
        labels:["jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
         label:"Todos",
         backgroundColor:"rgba(125, 60, 125, 0.65)",
         data:Tododata
        },
        {
        label:"subTodos",
        backgroundColor:"rgba(155, 140, 255, 0.55)",
        data:subtododata
        },
        ]
    }
    })
}
    render(){
        return(
            <div>
                <Chart title='New Todos and SubTodos' chartData={this.state.chartData}/>
                <Chart title='Todos and SubTodos done' type='HorizontalBar' chartData={this.state.chartDataDone}/>
                <Chart title='Todos and SubTodos left' chartData={this.state.chartDataLeft}/>
            </div>
        )
    }
}