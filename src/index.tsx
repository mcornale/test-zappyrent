import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PropertiesContextProvider } from './context/PropertiesContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import PropertyItem from './components/PropertyItems/PropertyItem/PropertyItem';

ReactDOM.render(
  <React.StrictMode>
    <PropertiesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route
              path=':propertyTitle'
              element={
                <Modal>
                  <PropertyItem />
                </Modal>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PropertiesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
