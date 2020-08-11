import React,{Component}from 'react';
import {Bar,Pie,HorizontalBar} from 'react-chartjs-2';

export default class chart extends Component{
 constructor(props){
     super(props)
     this.state={
        chartData:props.chartData,
     }
 }
 //definde static props
 static defaultProps={
    displayTitle:true,
    displayLegend:true,
    legendPosition:'chartArea',
    type:'Bar'

}
componentDidUpdate(prevProps,prevState){
    if (prevProps !== this.props){
    this.setState({chartData:this.props.chartData})
    }
}
render(){
    //print the Bar chart
    switch (this.props.type){
    case 'Bar':
        return(
        <div className='chart'>
        <Bar 
            data={this.state.chartData}
            options={{
            title:{
            display:this.props.displayTitle,
            text:this.props.title,
            fontSize:25
            },legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                }
           }}
        />
        </div>)
    case 'Pie':{
            //print pie chart
        return(
            <div className='chart'>
            <Pie 
            data={this.state.chartData}
            options={{
                title:{
                    display:this.props.displayTitle,
                    text:this.props.title,
                    fontSize:25
                },
                legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                }
            }}
            />
        </div>
        )
    }
    case 'HorizontalBar':{
        //prints horizontalBar
        return(
            <div className='chart'>
            <HorizontalBar
            data={this.state.chartData}
            options={{
                title:{
                    display:this.props.displayTitle,
                    text:this.props.title,
                    fontSize:25
                },
                legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                }
            }}
            />
        </div>            
        )

        }
        default:
        break
    }
}
}