const BASE_URL = 'https://cryptic-anchorage-52984.herokuapp.com';

const getScooters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const scooters = await response.json();
    return scooters;
  } catch (error) {
    throw new Error(error);
  }
};

const addScooter = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/items`, {
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

const deleteScooter = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export { getScooters, addScooter, deleteScooter };
