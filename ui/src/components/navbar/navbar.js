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

    function openBar() {
        const x = document.getElementById("navbar");
        if (x.className === "navbar") {
            x.className += " responsive";
          } else {
            x.className = "navbar";
          }

    }
    const { token, name, last_name } = useAuth()

    if(!!token) {
        return (
                <section className = "navbar" id = "navbar"> 
                    <div className = "navbar-wrapper" >
                        <ul className = "items">
                                      {/* Loged user Name */}
                            <div className = "menu">
                            <li ><NavLink to="/allmeetups"  activeClassName = "active"  >All Meetups</NavLink></li>
                            <li  ><NavLink to="/newMeetup" activeClassName = "active"  >Create Meetup</NavLink></li>
                            <li><NavLink to="/favorites" activeClassName = "active" >Favorite Meetups </NavLink></li>
                            <li><NavLink to="/" activeClassName = "active" exact >Todos</NavLink></li>
                            <li ><NavLink to="/create" activeClassName = "active"  >Create Todos</NavLink></li>
                            <li ><NavLink to="/createpage" activeClassName = "active"  >Create Link</NavLink></li>
                            <li ><NavLink to="/links" activeClassName = "active"  >Links</NavLink></li>
                            <li ><NavLink to="/users/list" activeClassName = "active" >Users List</NavLink></li>
                            <li style={{marginRight: '15rem'}} activeClassName = "active" ><NavLink to="/messages" >Messages</NavLink></li>
                          
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
                    </div>
                    <div className = "bars">
                            <span><i className="small material-icons" onClick = {openBar}>dehaze</i></span>
                        </div>
                     
                </section>
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