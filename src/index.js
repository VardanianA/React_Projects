import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Routers from './Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routers />
  </React.StrictMode>
);

