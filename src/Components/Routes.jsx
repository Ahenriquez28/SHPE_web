import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EBoard from './Pages/Eboard.jsx'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={EBoard} />
            </Switch>
        </Router>
    );
};

export default Routes;
