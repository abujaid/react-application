import axios from 'axios';
import { ADD_PRODUCT, GET_ERRORS } from '../actions/types';
export const addProduct = data => dispatch => {
  axios
    .post(`/api/products/create`, data)
    .then(result => {
      console.log(result);
      dispatch({ type: ADD_PRODUCT, payload: result.data });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
