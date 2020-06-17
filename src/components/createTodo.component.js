import React,{Component}from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);
        this.onChangeTodotitle=this.onChangeTodotitle.bind(this);
        this.onChangeTodosevingdate=this.onChangeTodosevingdate.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            userId:'',
            Todotitle:'',
            Todosevingdate:new Date(),
            Description:'',
        }
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
            userId:localStorage.getItem('UserID'),
            Todotitle:this.state.Todotitle,
            Todosevingdate:this.state.Todosevingdate,
            Description:this.state.Description
        }
        console.log(Todo);
        
        
        axios.post("http://localhost:3000/Todos/add",Todo)
            .then(res => console.log(res.data));
            
        window.location=`/MyTodos`
    }

    render(){
        return(
            <div>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label>Todotitle:</label>
                        <input type='text' required
                        className="form-control" value={this.state.Todotitle}
                        onChange={this.onChangeTodotitle}/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type='text' required
                        className="form-control" value={this.state.Description}
                        onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>ServingDate:</label>
                        <div>
                            <DatePicker
                            required 
                            selected={this.state.Todosevingdate}
                            onChange={this.onChangeTodosevingdate}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo Log" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}