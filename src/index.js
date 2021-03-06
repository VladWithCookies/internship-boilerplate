import React from 'react';
import ReactDOM from 'react-dom';
import { createClient, Provider } from 'urql';

import { API_URL } from './constants/api';
import reportWebVitals from './reportWebVitals';

const client = createClient({ url: API_URL });

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      Hello there!
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
