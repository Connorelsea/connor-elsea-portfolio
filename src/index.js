import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { BrowserRouter, Match } from "react-router"

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Match pattern="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
