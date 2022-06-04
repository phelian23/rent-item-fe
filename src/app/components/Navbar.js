import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import NavItems from './NavItems';
import Signin from './Signin';
import ScooterList from './ScooterList';
import Signup from './SignUp';
import AddScooter from './AddScooter';
import DeleteScooter from './DeleteScooter';
import MyFavourites from './MyFavourites';
import ScooterDetails from './ScooterDetails';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

const NavBar = () => {
  const openNav = () => {
    document.querySelector('.main-navigation').classList.toggle('active');
  };

  return (
    <div className="p-0">
      <NavItems />
      <div className="main-navigation overlay">
        <div className="tab-container d-flex justify-content-between align-item-center p-3">
          <div className="menu-icon d-lg-none" onClick={openNav}>
            <AiOutlineMenu />
          </div>
          <div className="d-lg-none">
            <BiSearch />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ScooterList />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addscooter" element={<AddScooter />} />
          <Route path="/deletescooter" element={<DeleteScooter />} />
          <Route path="/myfavourites" element={<MyFavourites />} />
          <Route path="/scooter/:id" element={<ScooterDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavBar;
