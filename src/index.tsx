import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PropertiesContextProvider } from './context/PropertiesContext';

ReactDOM.render(
  <React.StrictMode>
    <PropertiesContextProvider>
      <App />
    </PropertiesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
