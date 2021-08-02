import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import MainAppContainer from './containers/MainAppContainer';
//import './stylesheets/styles.css';

const RoutingApp = props => {
  return (
    <div className="router">
      <main>
        {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reacttraining.com/react-router/web/guides/quick-start
        */}
        <Switch>
          <Route path="/login" 
          component={Login} />
          <ProtectedRoute exact={true} path='/' component={MainAppContainer} />
          
          {/*<Route
            exact
            path="/"
            component={MainAppContainer}/>
          */}
            
                      {/* <Route
            exact
            path="/main"
            component={MainAppContainer}
          />

          <Route
            exact
            path="/create"
            component={CreateCharacter}
          /> */}
        </Switch>
      </main>
    </div>
  );
};

export default RoutingApp;
