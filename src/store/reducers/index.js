import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import productReducer from './productReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  product: productReducer
});
