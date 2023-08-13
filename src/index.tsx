import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 動きを確認するためにtoolkitを使わずにreduxからimportする。
import { createStore } from 'redux';

// actions
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// reducer
const counterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// store
let store = createStore(counterReducer);

// 新しい状態を確認
store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(decrement());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
