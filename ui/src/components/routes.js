import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
import Content from './content/content'
import Create from './create/create'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Content} exact />
                    <Route path="/create" component={Create} />
                    <Route path="/links" component={LinksPage} exact />
                    <Route path="/createpage" component={CreatePage} exact />
                    <Route path="/detail/:id" component={DetailPage} />
                    <Redirect to="/createpage" />
                </Switch>
            </div>
        )
    }

    return (
        <div>
            <Switch>
                <Route path="/routespage" component={AuthPage} exact />
                <Redirect to="/createpage" />
            </Switch>
        </div>
    )
}