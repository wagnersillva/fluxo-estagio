import React from 'react';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import HomePage from '../templates/homePage/HomePage';
import Login from '../templates/login/Login';
import {isAuthenticated} from './isAuthenticated'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={props => 
            isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login', 
                state: {from: props.locaton}
            }} 
            />
        )
    }/>
)


function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <PrivateRoute exact path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;