import { getToken } from '../utils/sessions';

const BASE_URL = 'https://cryptic-anchorage-52984.herokuapp.com';
const user = JSON.parse(localStorage.getItem('userData'));

const getFavourites = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/reserveds/${user.id}`, {
      method: 'GET',
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

const addFavourite = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/reserveds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export { getFavourites, addFavourite };
