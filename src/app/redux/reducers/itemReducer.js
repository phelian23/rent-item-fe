import Constants from '../actions/constant';

const initialState = {
  scooters: [],
  isLoading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.ADD_NEW_SCOOTER_SUCCESS:
      return {
        ...state,
        scooters: [...state.scooters, action.payload],
      };
    case Constants.ADD_NEW_SCOOTER_FAILURE:
      return {
        ...state,
        scooters: [],
      };
    case Constants.GET_ALL_SCOOTERS_SUCCESS:
      return {
        ...state,
        scooters: action.payload,
      };
    case Constants.GET_ALL_SCOOTERS_FAILURE:
      return {
        ...state,
        scooters: [],
      };
    case Constants.DELETE_SCOOTER_SUCCESS:
      return {
        ...state,
        scooters: state.scooters.filter(
          (scooter) => scooter.id !== action.payload,
        ),
      };
    case Constants.DELETE_SCOOTER_FAILURE:
      return {
        ...state,
        scooters: [],
      };

    case Constants.DISPLAY_SCOOTER:
      return {
        ...state,
        scooters: state.scooters.map((scooter) => {
          if (scooter.id === action.payload) {
            return {
              ...scooter,
              display: true,
            };
          }
          return {
            ...scooter,
            display: false,
          };
        }),
      };

    default:
      return state;
  }
};
export default itemReducer;
