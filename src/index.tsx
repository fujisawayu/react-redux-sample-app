import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 練習用にtoolkitを使わずにreduxからimportする。
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
