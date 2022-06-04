import { getScooters, addScooter, deleteScooter } from '../../api/item';
import Constants from './constant';

export const getAllScooters = () => async (dispatch) => {
  const response = await getScooters();
  try {
    dispatch({ type: Constants.GET_ALL_SCOOTERS_SUCCESS, payload: response });
    localStorage.setItem('scooters', JSON.stringify(response));
  } catch (error) {
    dispatch({ type: Constants.GET_ALL_SCOOTERS_FAILURE, payload: error });
  }
};

export const addNewScooter = (data) => async (dispatch) => {
  const response = await addScooter(data);
  try {
    dispatch({ type: Constants.ADD_NEW_SCOOTER_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: Constants.ADD_NEW_SCOOTER_FAILURE, payload: error });
  }
};

export const deleteScooterById = (id) => async (dispatch) => {
  const response = await deleteScooter(id);
  try {
    dispatch({ type: Constants.DELETE_SCOOTER_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: Constants.DELETE_SCOOTER_FAILURE, payload: error });
  }
};

export const displayScooter = (id) => ({
  type: Constants.DISPLAY_SCOOTER,
  payload: id,
});
