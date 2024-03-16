import React, { useState } from 'react';
import "../../assets/css/Header.css";

function Header() {
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleProfileVisibility = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <header>
      <nav>
        <ul>
          <div className='list'>
          <li><a href="/wishlist">Wishlist</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <a href="#" onClick={toggleProfileVisibility}>Profile</a>
            {profileVisible && (
              <div className="profile-box">
                {/* Profile picture */}
                <div className="profile-picture">
                  <img src="profile-picture.jpg" alt="Profile" />
                </div>
                {/* User info */}
                <div className="user-info">
                  <p>Name</p>
                  <p>Email</p>
                </div>
              </div>
            )}
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;