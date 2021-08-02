import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//create browser router to serve child components/containers to users
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);