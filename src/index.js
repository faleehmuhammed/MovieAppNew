import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Moviecontext} from './Context/Moviecontext'

// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Moviecontext>
    <App />
    </Moviecontext>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
