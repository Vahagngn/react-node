import { NavLink, useHistory } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../components/hooks/auth.hook';
import '../global.css';
import './navbar.css';



function Navbar() {
    const auth = useContext(AuthContext)
    const history = useHistory()



    const logoutHandler = () => {
        // event.preventDefault()
        auth.logout()
        // history.push('/routespage')
    }


    const { token, name, last_name } = useAuth()

    if(!!token) {
        return (
                <div className = "navbar " id = "navbar"> 
                  {/* Loged user Name */}
                <div className = "menu">
                    <ul className = "navLinks">
                            <li><NavLink to="/allmeetups"  activeclassname = "active"  >All Meetups</NavLink></li>
                            <li><NavLink to="/newMeetup" activeclassname = "active"  >Create Meetup</NavLink></li>
                            <li><NavLink to="/favorites" activeclassname = "active" >Favorite Meetups </NavLink></li>
                            <li><NavLink to="/" activeclassname = "active" exact >Todos</NavLink></li>
                            <li><NavLink to="/create" activeclassname = "active"  >Create Todos</NavLink></li>
                            <li><NavLink to="/createpage" activeclassname = "active"  >Create Link</NavLink></li>
                            <li><NavLink to="/links" activeclassname = "active"  >Links</NavLink></li>
                            <li><NavLink to="/users/list" activeclassname = "active" >Users List</NavLink></li>
                            <li  activeclassname = "active" ><NavLink to="/messages" >Messages</NavLink></li>
                    </ul>
                </div>
   
                <div className = "username-menu">
                    <ul className = "navLinks">
                        <li className = "userName" > 
                        <span className = "icon"><i className="small material-icons">account_circle </i> </span>
                        <span className = "name">{name} {last_name} </span>
                        </li>  
                        <li className="logout" style={{marginRight: '0'}}>
                        <a href="/routespage" onClick={logoutHandler}>Logout</a></li>
                    </ul>
                </div>
                <div className = "toggle" id = "toggle">
                    <span><i className="small material-icons" >dehaze</i></span>
                </div>
                </div>
        );
    }
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <ul className = "items">
                    <li  ><NavLink to="/routespage" activeClassName = "active" exact>Login</NavLink></li>
                    <li  ><NavLink to="/registration" activeClassName = "active" exact >Registration</NavLink></li>
                </ul>
            </div>
        </nav>
);
}

export default Navbar;