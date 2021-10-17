import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '../screens/Auth/login/login'
import { SingIn } from '../screens/Auth/singin/singin'
import { Home } from '../screens/home/home'

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={SingIn} />
                {/* <Route path="/home" component={Home} /> */}
            </Switch>
        </BrowserRouter>
    )
}
