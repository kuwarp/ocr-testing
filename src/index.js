import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import './bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

reportWebVitals();
