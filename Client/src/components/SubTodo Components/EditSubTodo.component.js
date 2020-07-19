import React,{Component}from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class EditSubTodo extends Component{
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
    //getting the subtodo
    componentDidMount(){
        axios.get(`http://localhost:3000/SubTodos/edit/${this.props.match.params.id}`)
        .then(res=>{console.log(res.data)
            this.setState({
                SubTodotitle:res.data.SubTodotitle,
                SubTodoDescription:res.data.SubTodoDescription,
            })
        })
        .catch(err=>console.log('Error'+err))
    }
    //handling form
    onChangeSubTodotitle(e){
        this.setState({
            SubTodotitle:e.target.value
            
        });
    }
    //handling form 
    onChangeSubTodoDescription(e){
        this.setState({
            SubTodoDescription:e.target.value
        });
    }
    //updating the current subtodo withe the new inputs
    onsubmit(e){
        e.preventDefault();

        const SubTodo={
            SubTodotitle:this.state.SubTodotitle,
            SubTodoDescription:this.state.SubTodoDescription
        }
        console.log(SubTodo);

        console.log(this.props.match.params)
        axios.post('http://localhost:3000/SubTodos/update/'+this.props.match.params.id,SubTodo)
            .then(res=>console.log(res.data));
        window.location='/MyTodos';
    }   

    render(){
        return(
            <div className='text-center container'>
                <h3>SubTodotitle</h3>
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