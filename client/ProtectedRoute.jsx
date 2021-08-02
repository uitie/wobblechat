import React from  'react';
import { Redirect, Link } from 'react-router-dom';

const ProtectedRoute = (props) => {
  //component to be rendered by protected route
  const Component = props.component;
  //dummy authentication
  const isAuthenticated = true;

  //if user is authenticated, return component that is being passed down as prop, if not send user to login component
  return isAuthenticated ? ( <Component /> ) : ( <Redirect to={{pathname: '/login'}} /> );
    
}

export default ProtectedRoute;