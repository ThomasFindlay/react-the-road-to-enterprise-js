import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = window.__REACT_APP_ROOT__ || createRoot(container);

window.__REACT_APP_ROOT__ = root;

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
