import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Pre-booking</a></li>
      </ul>
      <div className="fa-solid fa-user"></div>
    </nav>
  );
};

export default Navbar;
