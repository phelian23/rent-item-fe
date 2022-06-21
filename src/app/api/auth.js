import { getToken } from '../utils/sessions';

const BASE_URL = 'https://cryptic-anchorage-52984.herokuapp.com';

const hitApiWithSignIn = (data) => {
    const response = fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
};

const hitApiWithSignUp = async (data) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
};

const hitApiWithResetPassword = async (data) => {
    const response = await fetch(`${BASE_URL}/users/resetpassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
};

const hitApiWithSignOut = async () => {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    });
    const json = await response.json();
    return json;
};

export {
  hitApiWithSignIn,
  hitApiWithSignUp,
  hitApiWithResetPassword,
  hitApiWithSignOut,
};
