import Constants from '../actions/constant';

const initialState = {
  favourites: [],
  isLoading: false,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_FAVOURITES_SUCCESS:
      return {
        ...state,
        favourites: action.payload,
        isLoading: false,
      };
    case Constants.GET_FAVOURITES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case Constants.ADD_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
        isLoading: false,
      };

    case Constants.ADD_FAVOURITE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default favouriteReducer;
