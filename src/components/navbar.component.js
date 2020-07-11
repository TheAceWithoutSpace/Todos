import React,{Component} from 'react';
import {Link} from 'react-router-dom';
function logout()
{
localStorage.removeItem('UserID')
window.location.href = '/';
}
function Loggedin (){
    const isLoggedIn=localStorage.getItem('UserID')
    if(isLoggedIn)
    {
        if(isLoggedIn==='5eefc438666ffd2524a947a4')
        {
            return(
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to ='/MyTodos' className='nav-link'>MyTodos</Link>
                </li>
                <li className="navbar-item">
                    <Link to ='/UserSpecs' className='nav-link'>UserSpecs</Link>
                </li>
                <li className='navbar-item'>
                    <Link to='/admin' className='nav-link'>AdminPage</Link>
                </li>
                <li className='navbar-item'>
                    <button onClick={logout} className='nav-link btn btn-dark'>Logout</button>
                </li>
            </ul>
            )
        }else{
        return(
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <Link to ='/MyTodos' className='nav-link'>MyTodos</Link>
            </li>
            <li className="navbar-item">
                <Link to ='/UserSpecs' className='nav-link'>UserSpecs</Link>
            </li>
            <li className='navbar-item'>
                <button onClick={logout} className='nav-link btn btn-dark'>Logout</button>
            </li>
        </ul>
        )}
    }else{
        return(
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item hidden">
                <Link to='/Login' className='nav-link'>Login</Link>
            </li>
        </ul>)
    }
}
export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand">Todo's</Link>
                <div className="collpase navbar-collapse">  
                    <Loggedin/>
                </div>
            </nav>
        );
    }
}
