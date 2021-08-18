import { NavLink, useHistory } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../components/hooks/auth.hook';
import '../global.css';



function Navbar() {
    
    const auth = useContext(AuthContext)
    const history = useHistory()

    const logoutHandler = () => {
        // event.preventDefault()
        auth.logout()
        // history.push('/routespage')
    }

    const { token } = useAuth()
    
    if(!!token) {
        return (
                <nav className="blue darken-4 navbar">
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/" activeClassName="active" exact>Todos</NavLink></li>
                            <li><NavLink to="/create" activeClassName="active">Create</NavLink></li>
                            <li><NavLink to="/createpage" activeClassName="active" exact>Create user</NavLink></li>
                            <li><NavLink to="/links" activeClassName="active" exact>User List</NavLink></li>
                            <li><a href="/routespage" onClick={logoutHandler}>Logout</a></li>
                        </ul>
                    </div>
                </nav>
        );
    }
    return (
        <nav className="blue darken-4 navbar">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/routespage" activeClassName="active">Login</NavLink></li>
                </ul>
            </div>
        </nav>
);
}

export default Navbar;