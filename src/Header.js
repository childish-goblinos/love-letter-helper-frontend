import React from 'react';
import './Header.css';
//import { Navbar, NavItem } from 'react-bootstrap';
//import { Link } from "react-router-dom";

class Header extends React.Component
{
  render()
  {
    return (
      <header>
        <h1> Love Letter Helper</h1>
      </header>
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>Lonely Beast: The Love Letter Helper</Navbar.Brand>
      //   <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
      //   <NavItem><Link to="/AboutUs" className="nav-link">About Us</Link></NavItem>
      // </Navbar>
    )
  }
}

export default Header;
