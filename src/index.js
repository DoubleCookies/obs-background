import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route exact path="/" component={App} />
              <Route path="/tourney" component={App2} />
          </Switch>
      </HashRouter>
  </React.StrictMode>
);