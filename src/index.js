import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.PUBLIC_URL);
root.render(
  <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route exact path="/" component={App} />
              <Route path="/tourney" component={App2} />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>
);