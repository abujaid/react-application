import axios from 'axios';
import { ADD_PRODUCT, GET_ERRORS, GET_PRODUCTS, GET_PRODUCT } from '../actions/types';

// Add Product
export const addProduct = (data, history) => dispatch => {
  axios
    .post(`/api/products/create`, data)
    .then(result => {
      dispatch({ type: ADD_PRODUCT, payload: result.data });
      history.push('/admin/products');
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

// Get product
export const getProduct = () => dispatch => {
  axios
    .get(`/api/products`)
    .then(result => {
      dispatch({ type: GET_PRODUCTS, payload: result.data });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
// Get Product by id
export const getProductById = id => dispatch => {
  axios
    .get(`/api/products/${id}`)
    .then(result => {
      dispatch({ type: GET_PRODUCT, payload: result.data });
      // console.log(result);
    })
    .catch(err => console.log(err));
};
// Remove Product
export const removeProduct = id => dispatch => {
  axios
    .delete(`/api/products/${id}`)
    .then(result => {
      dispatch(getProduct());
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

// Upate product
export const updateProduct = id => dispatch => {};
