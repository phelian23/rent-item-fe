import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteScooterById, getAllScooters } from '../redux/actions/items';

const DeleteScooter = () => {
  const dispatch = useDispatch();
  const scooters = useSelector((state) => state.items.scooters);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllScooters());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteScooterById(id));
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div>
      <div className="text-center p-3 header-det">
        <h1>Scooter List</h1>
      </div>
      <div className="list-wrapper">
        <ul className="d-flex list-con">
          {scooters.map((scooter) => (
            <li className="list-group-item col-md-4" key={scooter.id}>
              <div className="scoot-card">
                <img
                  className="card-img-top"
                  src={scooter.photo}
                  alt="Card cap"
                />
                <div className="card-body d-flex justify-content-between mt-4">
                  <h5 className="card-title">{scooter.name}</h5>
                  <p className="card-text">{scooter.price}</p>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => handleDelete(scooter.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteScooter;
