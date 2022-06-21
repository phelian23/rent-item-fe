import {
  hitApiWithSignIn,
  hitApiWithSignUp,
  hitApiWithResetPassword,
  hitApiWithSignOut,
} from '../../api/auth';
import { clearSession } from '../../utils/sessions';
import Constants from './constant';

export const signUp = (data) => async (dispatch) => {
  const response = await hitApiWithSignUp(data);
  if (response.status.code === 200) {
    const userData = JSON.stringify(response.data);
    localStorage.setItem('userData', userData);
    dispatch({
      type: Constants.SIGN_UP_SUCCESS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: Constants.SIGN_UP_FAILURE,
      payload: response.data,
    });
  }
};

export const signIn = (data) => (dispatch) => {
  hitApiWithSignIn(data)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.headers.get('Authorization'));
        localStorage.setItem('session-status', true);
        dispatch({ type: Constants.SIGN_IN_SUCCESS, payload: response.data });
      }
    })
    .catch((error) => {
      dispatch({ type: Constants.SIGN_IN_FAILURE, payload: error });
    });
};

export const resetPassword = (data) => async (dispatch) => {
  const response = await hitApiWithResetPassword(data);
    dispatch({ type: Constants.RESET_PASSWORD_SUCCESS, payload: response });
};

export const signOut = () => async (dispatch) => {
  const response = await hitApiWithSignOut();
    dispatch({ type: Constants.SIGN_OUT_SUCCESS, payload: response });
    clearSession();
};
