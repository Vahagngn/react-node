import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AuthContext } from "./context/AuthContext";
import { useAuth } from '../../ui/src/components/hooks/auth.hook';
import { useRoutes } from './components/routes';

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
  }}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Route>
              {routes}
            </Route>
          </header>
        </div>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;