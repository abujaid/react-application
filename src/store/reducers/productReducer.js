import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from '../actions/types';

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
    case GET_PRODUCT: {
      return {
        ...state,
        products: state.products.filter(item => item._id === action.payload._id),
        isLoading: false
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    }
    default:
      return state;
  }
};

export default productReducer;
