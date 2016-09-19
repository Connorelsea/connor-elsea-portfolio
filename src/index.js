import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'

ReactDOM.render(
  <Router>
    <div>
      <Match pattern="/" component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
