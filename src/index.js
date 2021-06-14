import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { PropertyProvider } from './context/context';

ReactDOM.render(
  <PropertyProvider>
    <Router>
      <App />
    </Router>
  </PropertyProvider>,
  document.getElementById('root')
);

reportWebVitals();
