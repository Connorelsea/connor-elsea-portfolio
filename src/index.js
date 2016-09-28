import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { BrowserRouter, Match } from "react-router"

ReactDOM.render(
  <BrowserRouter>
    <div>

      <div className="App__Info">
        <p>Contact me: </p>
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Email</a>
      </div>

      <Match pattern="/" component={App} />

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
