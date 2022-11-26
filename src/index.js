import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BasicBg from './Components/BasicBg/BasicBg';
import { HashRouter, Route, Switch } from 'react-router-dom';
import EwfishSlideBg from './Components/EwfishSlideBg/EwfishSlideBg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route exact path="/" component={BasicBg} />
              <Route path="/tourney" component={EwfishSlideBg} />
          </Switch>
      </HashRouter>
  </React.StrictMode>
);