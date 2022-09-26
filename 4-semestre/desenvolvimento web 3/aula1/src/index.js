import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nome="Jonas Soares Laviani" nota={11}/>
  </React.StrictMode>
);
