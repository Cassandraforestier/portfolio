import './css/index.css';
import './i18n';

import App from './app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (!root) throw new Error('Failed to find the root element');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
