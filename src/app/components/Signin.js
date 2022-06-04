import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/actions/authentications';
import { validationLogin } from './Validation';

/* eslint-disable jsx-a11y/label-has-associated-control */

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user,
    };
    const errors = validationLogin(user);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(signIn(newUser));
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  return (
    <div className="auth-con">
      <div className="auth-form">
        <div className="auth-cont">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-3">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input1"
                placeholder="Enter email"
                onChange={handleChange}
                value={user.email}
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
                value={user.password}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>
            <Button type="submit" className="form-btn">Sign In</Button>
          </form>
          <p>Don&apos;t have an account?</p>
          <Button className="form-btn" as={Link} to="/signup">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
