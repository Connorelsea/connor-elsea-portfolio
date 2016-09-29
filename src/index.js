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
        <a href="https://github.com/Connorelsea">Github</a>
        <a href="https://www.linkedin.com/in/elsea">LinkedIn</a>
        <a href="https://twitter.com/Connorelsea_">Twitter</a>
        <a href="mailto:connor@elsealabs.com">Email</a>
      </div>

      <Match pattern="/" component={App} />

    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
