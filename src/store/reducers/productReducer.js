import { ADD_PRODUCT, GET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  isLoading: true
};
const productReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        // products: action.payload
        products: [action.payload, ...state.products]
      };
    }
    default:
      return state;
  }
};

export default productReducer;
