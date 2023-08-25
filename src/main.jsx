import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import { store } from '@/store';
const container = document.getElementById('root');
const root = window.__REACT_APP_ROOT__ || createRoot(container);

window.__REACT_APP_ROOT__ = root;

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
