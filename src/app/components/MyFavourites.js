import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavourites } from '../redux/actions/favourites';
import './myfavourites.css';

const MyFavourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const scooters = JSON.parse(localStorage.getItem('scooters'));

  /* eslint-disable arrow-body-style */
  const favouriteScooters = scooters.filter((scooter) => {
    return favourites.find((favourite) => favourite.item_id === scooter.id);
  });

  useEffect(() => {
    dispatch(getAllFavourites());
  }, [dispatch]);

  return (
    <div>
      <div className="text-center p-3 header-det">
        <h1>My Favourites</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {favouriteScooters.map((favourite) => (
          <div className="col" key={favourite.id}>
            <div className="card">
              <img src={favourite.photo} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{favourite.name}</h5>
                <p className="card-text">{favourite.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavourites;
