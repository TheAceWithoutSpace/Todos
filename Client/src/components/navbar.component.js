import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function logout()
{
localStorage.removeItem('UserID')
localStorage.removeItem('TodoID')
localStorage.removeItem('state')
window.location.href = '/';
}
function Loggedin (props){
    const isLoggedIn=localStorage.getItem('UserID')
    if(isLoggedIn)
    {
        if(props.Admin===true)
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
class Navbar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand">Todo's</Link>
                <div className="collpase navbar-collapse">  
                    <Loggedin Admin={this.props.Admin}/>
                </div>
            </nav>
        );
    }
}
const mapStateToProps=(state)=>{
        return {Admin:state.Admin};
    };

export default connect(mapStateToProps)(Navbar);