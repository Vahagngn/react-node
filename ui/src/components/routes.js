import { Switch, Route, Redirect } from 'react-router-dom'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
import Content from './Todos/Todos'
import Create from './create/Create'
import { RegistrationPage } from './pages/RegistrationPage'
import { Users } from './Users/Users'
import { Messages } from './Messages/Messages'
import { LinksPage } from './LinksPage/LinksPage'
import AllMeetupsPage from './meetups/AllMeetups'
import CreateMeetupPage from './meetups/CreateMeetup'
import FavoritesPage from './meetups/Favorites'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <div>
                <Switch>
                    <Route path="/users/list" component={Users} exact/>
                    <Route path="/" component={Content} exact />
                    <Route path="/create" component={Create} />
                    <Route path="/links" component={LinksPage} exact />
                    <Route path="/createpage" component={CreatePage} exact />
                    <Route path="/detail/:id" component={DetailPage} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/allmeetups" component={AllMeetupsPage} />
                    <Route path="/newMeetup" component={CreateMeetupPage} />
                    <Route path="/favorites" component={FavoritesPage} />
                    <Redirect to="/createpage" />
                </Switch>
            </div>
        )
    }

    return (
        <div>
            <Switch>
                <Route path="/routespage" component={AuthPage} exact />
                <Route path="/registration" component={RegistrationPage} />
                <Redirect to="/createpage" />
            </Switch>
        </div>
    )
}