import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
const a1 = App();
const a2 = App2();
console.log(process.env.PUBLIC_URL);
root.render(
  <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route exact path="/" element={a1} />
              <Route path="/tourney" element={a2} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);