import Content from './components/content/content';
import Create from './components/create/create';
import Navbar from './components/navbar/navbar';
import RoutesPage from './components/pages/RoutesPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
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
  );
}

export default App;