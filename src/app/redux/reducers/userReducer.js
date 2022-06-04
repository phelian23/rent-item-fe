import Constants from '../actions/constant';

const initialState = {
  user: {},
  isLoading: false,
  isSignIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isSignIn: true,
      };
    case Constants.SIGN_IN_FAILURE:
      return {
        ...state,
        user: {},
        isSignIn: false,
      };
    case Constants.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isSignIn: false,
      };
    case Constants.SIGN_UP_FAILURE:
      return {
        ...state,
        user: {},
        isSignIn: false,
      };
    case Constants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case Constants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        user: {},
      };
    case Constants.SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: {},
        isSignIn: false,
      };
    case Constants.SIGN_OUT_FAILURE:
      return {
        ...state,
        user: {},
        isSignIn: true,
      };
    default:
      return state;
  }
};
export default userReducer;
