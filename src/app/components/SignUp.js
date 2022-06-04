import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUp } from '../redux/actions/authentications';
import { validation } from './Validation';

/* eslint-disable jsx-a11y/label-has-associated-control */

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation(newUser);
    setErrors(errors);
    const userData = {
      user: newUser,
    };

    if (Object.keys(errors).length === 0) {
      dispatch(signUp(userData));
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    }
  };

  return (
    <div className="auth-con">
      <div className="auth-form">
        <div className="auth-cont">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input1"
                placeholder="Enter name"
                onChange={handleChange}
                value={newUser.name}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input1"
                placeholder="Enter email"
                onChange={handleChange}
                value={newUser.email}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-input1"
                placeholder="Password"
                onChange={handleChange}
                value={newUser.password}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                id="password2"
                className="form-input1"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={newUser.password2}
              />
              {errors.password2 && (
                <p className="text-danger">{errors.password2}</p>
              )}
            </div>
            <Button className="form-btn" type="submit">
              Sign Up
            </Button>
          </form>
          <p>Already have an account?</p>
          <Button className="form-btn" as={Link} to="/signin">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
