import React, { useState } from 'react';
import "../../assets/css/Header.css";
import { CgProfile } from "react-icons/cg";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <nav>
        <ul>
          <div className='list'>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="profile" onClick={toggleDropdown}><CgProfile /></li>
          </div>
        </ul>
      </nav>
      {dropdownVisible && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="/account">Account</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
