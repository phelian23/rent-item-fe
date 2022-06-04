import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { addNewScooter } from '../redux/actions/items';

/* eslint-disable jsx-a11y/label-has-associated-control */

const AddScooter = () => {
  const [scooter, setScooter] = useState({
    name: '',
    price: '',
    description: '',
    photo: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setScooter({
      ...scooter,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      item: scooter,
    };
    dispatch(addNewScooter(itemData));
    setScooter({
      name: '',
      price: '',
      description: '',
      photo: '',
    });
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="auth-con">
      <div className="auth-form">
        <div className="auth-cont">
          <AiOutlineHome className="auth-icon d-lg-none" onClick={goHome} />
          <h1 className="auth-cont-h1">Add Scooter</h1>
          <form onSubmit={handleAddSubmit}>
            <div className="form-group my-3">
              <label htmlFor="exampleInputName">Name</label>
              <input
                name="name"
                type="text"
                className="form-input1"
                id="exampleInputName"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
              <label htmlFor="exampleInputImage">Image</label>
              <input
                name="photo"
                type="text"
                className="form-input1"
                id="exampleInputImage"
                placeholder="Enter Image"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
              <label htmlFor="exampleInputPrice">Price</label>
              <input
                name="price"
                type="text"
                className="form-input1"
                id="exampleInputPrice"
                placeholder="Enter Price"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
              <label htmlFor="exampleInputDescription">Description</label>
              <textarea
                name="description"
                className="form-input1 form-input2"
                id="exampleInputDescription"
                rows="3"
                placeholder="Enter Description"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn form-btn">
              Add Scooter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddScooter;
