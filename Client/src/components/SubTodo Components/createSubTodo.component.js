import React,{Component}from 'react';

import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);
        this.onChangeSubTodotitle=this.onChangeSubTodotitle.bind(this);
        this.onChangeSubTodoDescription=this.onChangeSubTodoDescription.bind(this);
        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            TodoId:'',
            SubTodotitle:'',
            SubTodoDescription:'',
        }
    }
    onChangeSubTodotitle(e){
        this.setState({
            SubTodotitle:e.target.value
            
        });
    }
    onChangeSubTodoDescription(e){
        this.setState({
            SubTodoDescription:e.target.value
        });
    }
    //send the form data to the server
    onsubmit(e){
        e.preventDefault();
        const SubTodo={
            TodoID:localStorage.getItem('TodoID'),
            SubTodotitle:this.state.SubTodotitle,
            SubTodoDescription:this.state.SubTodoDescription
        }
        console.log(SubTodo);
        
        
        axios.post("http://localhost:3000/SubTodos/add",SubTodo)
            .then(res => console.log(res.data));
            
            window.location=`/SubTodos/${localStorage.getItem('TodoID')}`;
    }
    //subtodo form
    render(){
        return(
            <div className='text-center container'>
                <h3>Create New SubTodo</h3>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label>SubTodotitle:</label>
                        <input type='text' required
                        className="form-control" value={this.state.SubTodotitle}
                        onChange={this.onChangeSubTodotitle}/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type='text' required
                        className="form-control" value={this.state.SubTodoDescription}
                        onChange={this.onChangeSubTodoDescription}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create SubTodo" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}