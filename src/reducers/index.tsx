import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoginReducer from './isLogin';

const allReducers = combineReducers({
  counter: counterReducer,
  isLOgin: isLoginReducer,
});

export default allReducers;
