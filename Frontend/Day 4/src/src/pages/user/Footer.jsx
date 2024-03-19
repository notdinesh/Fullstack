import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import '../../assets/css/Footer.css'; // Import the CSS file

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer>
            <div className="footer-content">
                {/* Terms and Conditions and Privacy Policy links */}
                <div className="footer-links">
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a><br></br>
                </div>
                <div className="social-icons">
                    {/* Instagram Icon with link */}
                    <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                        <AiOutlineInstagram />
                    </a>
                    {/* Facebook Icon with link */}
                    <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                        <AiOutlineFacebook />
                    </a>
                </div>
                <p>© 2023-{currentYear} ccc.com. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
