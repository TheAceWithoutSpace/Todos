import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand">Todo's</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to='/userlogin' className='nav-link'>Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to ='/SignUp' className='nav-link'>Sign Up</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to ='/MyTodos' className='nav-link'>MyTodos</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to ='/UserSpecs' className='nav-link'>UserSpecs</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    
    
    
    }
}
