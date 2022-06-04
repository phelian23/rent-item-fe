import { getToken } from '../utils/sessions';

const BASE_URL = 'https://cryptic-anchorage-52984.herokuapp.com';

const hitApiWithSignIn = (data) => {
  try {
    const response = fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const hitApiWithSignUp = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

const hitApiWithResetPassword = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/users/resetpassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

const hitApiWithSignOut = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  hitApiWithSignIn,
  hitApiWithSignUp,
  hitApiWithResetPassword,
  hitApiWithSignOut,
};
