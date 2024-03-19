import React from 'react';
import '../../assets/css/Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer>
        <div className="container">
          <ul>
            <li><a href="/cg/user/Privacy">Privacy Policy</a></li>
            <li><a href="/cg/user/Terms">Terms and Condition</a></li>
            <li><a href="/cg/user/FAQ">FAQs</a></li>
          </ul>
          <p>&copy; 2024 Craftify. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;
