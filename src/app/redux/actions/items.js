import { getScooters, addScooter, deleteScooter } from '../../api/item';
import Constants from './constant';

export const getAllScooters = () => async (dispatch) => {
  const response = await getScooters();
    dispatch({ type: Constants.GET_ALL_SCOOTERS_SUCCESS, payload: response });
    localStorage.setItem('scooters', JSON.stringify(response));
};

export const addNewScooter = (data) => async (dispatch) => {
  const response = await addScooter(data);
    dispatch({ type: Constants.ADD_NEW_SCOOTER_SUCCESS, payload: response });
};

export const deleteScooterById = (id) => async (dispatch) => {
  const response = await deleteScooter(id);
    dispatch({ type: Constants.DELETE_SCOOTER_SUCCESS, payload: response });
};

export const displayScooter = (id) => ({
  type: Constants.DISPLAY_SCOOTER,
  payload: id,
});
