import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { useRoutes } from '../routes';
import '../global.css';
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from '../hooks/auth.hook';
import Navbar from "../navbar/navbar";

function RoutesPage() {
    const { token, login, logout, userId } = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default RoutesPage;