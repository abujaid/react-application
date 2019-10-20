import { ADD_PRODUCT } from '../actions/types';

const initialState = {
  products: []
};
const productReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        products: action.payload
      };
    }
    default:
      return state;
  }
};
