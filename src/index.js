import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarritoProvider } from './components/CarritoContext/CarritoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


