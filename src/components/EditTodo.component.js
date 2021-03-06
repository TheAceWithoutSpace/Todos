import React,{Component}from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class EditTodo extends Component{
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
    componentDidMount(){
        axios.get('http://localhost:3000/Todos/edit/'+this.props.match.params.id)
        .then(res=>{
            this.setState({
                Todotitle:res.data.Todotitle,
                Todosevingdate: new Date(res.data.Todosevingdate),
                Description:res.data.Description,
            })
        })
        .catch(err=>console.log('Error'+err))
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
            Todotitle:this.state.Todotitle,
            Todosevingdate:this.state.Todosevingdate,
            Description:this.state.Description
        }
        //console.log(Todo);

        console.log(this.props.match.params)
        axios.post('http://localhost:3000/Todos/update/'+this.props.match.params.id,Todo)
            .then(res=>console.log(res.data));
        window.location='/MyTodos';
    }   

    render(){
        return(
            <div>
                <h3>Edit Todo</h3>
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
                        <input type="submit" value="Edit Todo Log" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}