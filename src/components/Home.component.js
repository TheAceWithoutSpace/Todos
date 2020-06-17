import React,{Component}from 'react';
export default class Home extends Component{
        
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a name="btn btn-primary btn-lg" href="/Login" role="button">To Login</a>
                </div>
            </div>
        )
    }
}