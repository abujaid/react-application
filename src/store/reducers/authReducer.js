import { SET_CURRENT_USER } from '../actions/types';
const initialState = {
  isAuthenticated: false,
  isloading: false,
  user: {}
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload
      };
    default:
      return state;
  }
};
export default authReducer;
