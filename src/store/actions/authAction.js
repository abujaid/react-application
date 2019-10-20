import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../../utils/setAuthToken';

export const register = (userData, history) => {
  return dispatch => {
    axios
      .post(`api/users/register`, userData)
      .then(res => {
        history.push('/login');
      })
      .catch(err => {
        dispatch({ type: GET_ERRORS, payload: err.response.data });
        // console.log(err.response.data);
      });
  };
};

export const login = (userData, history) => dispatch => {
  axios
    .post(`api/users/login`, userData)
    .then(result => {
      const { token } = result.data;
      localStorage.setItem('jwtToken', token);
      const decoded = jwt_decode(token); // get user information
      dispatch(setCurrentUser(decoded));
      history.push('/dashboard');
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const setCurrentUser = function(decoded) {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = history => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
};
