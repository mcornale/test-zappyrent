import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PropertiesContextProvider } from './context/PropertiesContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <PropertiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PropertiesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
