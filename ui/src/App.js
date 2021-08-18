import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from '../../ui/src/components/hooks/auth.hook';
import { useRoutes } from './components/routes';
import { Loader } from './components/navbar/Loader';
import './App.css';

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

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