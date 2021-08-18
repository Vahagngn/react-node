import Content from './components/content/content';
import Create from './components/create/create';
import Navbar from './components/navbar/navbar';
import RoutesPage from './components/pages/RoutesPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AuthContext } from "./context/AuthContext";
import { useAuth } from '../../ui/src/components/hooks/auth.hook';

function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
  }}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Route path="/" component={Content} exact />
            <Route path="/create" component={Create} />
            <Route path="/routespage" component={RoutesPage} />
          </header>
        </div>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;