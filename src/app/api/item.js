const BASE_URL = 'https://cryptic-anchorage-52984.herokuapp.com';

const getScooters = async () => {
    const response = await fetch(`${BASE_URL}/api/v1/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const scooters = await response.json();
    return scooters;
};

const addScooter = async (data) => {
    const response = await fetch(`${BASE_URL}/api/v1/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
};

const deleteScooter = async (id) => {
    const response = await fetch(`${BASE_URL}/api/v1/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
};

export { getScooters, addScooter, deleteScooter };
