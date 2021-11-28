import React from 'react';
import ReactDOM from 'react-dom';

import Providers from 'Providers';
import App from './App';

import 'styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);
