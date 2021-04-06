import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import HomePage from '../templates/homePage/HomePage';
import Login from '../templates/login/Login';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={HomePage}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;