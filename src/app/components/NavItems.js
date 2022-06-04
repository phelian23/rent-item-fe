import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../redux/actions/authentications';

const NavItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionStatus = localStorage.getItem('session-status');

  const handleSignOut = () => {
    dispatch(signOut());
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="d-block fixed-lg-top"
      >
        <Container className="d-lg-flex sidebar" id="responsive-navbar-nav">
          <Navbar.Brand
            href="/"
            className="mr-auto mr-lg-3 ml-3 ml-lg-0 nav-logo-cont"
          >
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGIxlIopL2Rkz2W31izyQcASgFiW-bAHDEw&usqp=CAU"
              width="40px"
              height="40px"
              className="d-inline-block align-top"
            />
            {' '}
            Scooter
          </Navbar.Brand>
          {sessionStatus ? (
            <>
              <Nav className="mr-auto nav-cus-item">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/myfavourites">My Favourites</Nav.Link>
                <Nav.Link href="/addscooter">Add Scooter</Nav.Link>
                <Nav.Link href="/deletescooter">Delete Scooter</Nav.Link>
              </Nav>
              <Nav className="ml-auto signout">
                <Nav.Link href="#" onClick={() => handleSignOut()}>
                  Sign Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav>
              <Nav.Link href="/signin">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavItems;
