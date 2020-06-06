import React,{Component}from 'react';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);
        this.state={
            userId:'',
            Todotitle:'',
            Todosevingdate:new Date(),
            Description:'',
        }
    }
    onChangeuserID(Id){
        this.setState({
            userId:Id
        });
    }
    onChangeTodotitle(e){
        this.setState({
            Todotitle:e.target.value
        });
    }
    onChangeTodosevingdate(date){
        this.setState({
            Todosevingdate:date
        });
    }
    onChangeDescription(e){
        this.setState({
            Description:e.target.value
        });
    }

    onsubmit(e){
        e.preventDefault();

        const Todo={
            userId:this.state.userId,
            Todotitle:this.state.Todotitle,
            Todosevingdate:this.state.Todosevingdate,
            Description:this.state.Description
        }
        console.log(Todo);

        window.location='/';
    }

    render(){
        return(
            <div>
                <p>CreateTodos Component</p>
            </div>
        )
    }
}