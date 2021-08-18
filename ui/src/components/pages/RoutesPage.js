import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from '../routes';
import '../global.css';

function RoutesPage() {
    const routes = useRoutes()
    return (

            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>
        
    )
}

export default RoutesPage;