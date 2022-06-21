import { getFavourites, addFavourite } from '../../api/favourite';
import Constants from './constant';

export const getAllFavourites = () => async (dispatch) => {
    const response = await getFavourites();
    dispatch({
      type: Constants.GET_FAVOURITES_SUCCESS,
      payload: response,
    });
};

export const addToFavourites = (data) => async (dispatch) => {
  const response = await addFavourite(data);
    dispatch({ type: Constants.ADD_FAVOURITE_SUCCESS, payload: response });
};
