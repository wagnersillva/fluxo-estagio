import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import HomePage from '../templates/homePage/HomePage';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage}/>
                {/* <Route path="/login" component={Login}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;