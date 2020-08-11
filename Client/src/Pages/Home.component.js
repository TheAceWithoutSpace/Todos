import React,{Component}from 'react';
export default class Home extends Component{
        //Home page
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello</h1>
                    <p className="lead">welcome, to Todo's this site made for you to organize you'r tasks.</p>
                    <hr className="my-4"/>
                    <p>we believe that every task assembled from smaller tasks.</p>
                    <a className='btn btn-info' name="btn btn-primary btn-lg" href="/Login" role="button">To Login</a>
                </div>
            </div>
        )
    }
}