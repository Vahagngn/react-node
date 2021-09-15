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

    function toggleBar() {
        debugger
        const sidebar = document.getElementById("navbar");

        if (sidebar.className === "navbar") {
            sidebar.className += " responsive";
          } else {
            sidebar.className = "navbar";
        }

        if(sidebar.className === "responsive") {
           
           var hideSidebar = document.getElementById("navbar");
           document.onClick = (div) => {
               if(div.target.id !== "navbar") {
                hideSidebar.style.display = "none";
               }
           }
        }
    }

    const { token, name, last_name } = useAuth()

    if(!!token) {
        return (
                <div className = "navbar " id = "navbar"> 
                        <ul className = "navLinks">
                                      {/* Loged user Name */}
                            <div className = "menu">
                            <li onClick = {toggleBar}><NavLink to="/allmeetups"  activeclassname = "active"  >All Meetups</NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/newMeetup" activeclassname = "active"  >Create Meetup</NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/favorites" activeclassname = "active" >Favorite Meetups </NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/" activeclassname = "active" exact >Todos</NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/create" activeclassname = "active"  >Create Todos</NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/createpage" activeclassname = "active"  >Create Link</NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/links" activeclassname = "active"  >Links</NavLink></li>
                            <li onClick = {toggleBar}><NavLink to="/users/list" activeclassname = "active" >Users List</NavLink></li>
                            <li onClick = {toggleBar} style={{marginRight: '15rem'}} activeclassname = "active" ><NavLink to="/messages" >Messages</NavLink></li>
                          
                            </div>
                            <div className = "username-menu">
                            <li className = "userName" > 
                            <span className = "icon"><i className="small material-icons">account_circle </i> </span>
                            <span className = "name">{name} {last_name} </span>
                            </li>  
                            <li className="logout" style={{marginRight: '0'}}>
                            <a href="/routespage" onClick={logoutHandler}>Logout</a></li>
                            </div>
                            
                        </ul>
                   
                    <div className = "toggle" id = "toggle">
                            <span><i className="small material-icons" onClick = {toggleBar}>dehaze</i></span>
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