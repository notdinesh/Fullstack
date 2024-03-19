import React from 'react';
import '../../assets/css/Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/">Login</a>
        <a href="/cg/user/home">Home</a>
        {/* <a href="/cg/signup">Sign Up</a> */}
        <a href="/cg/user/cart">Cart</a>
        <a href="/cg/user/item">Explore</a>
        <a href="/cg/user/Contact">Contact</a>
        <a href="#explore">Profile</a>
      </div>
    </div>
  );
}

export default Navbar;
