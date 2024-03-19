import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
                <div className="profile-picture">
                    {/* Your profile picture component goes here */}
                    <img src="profile-picture.jpg" alt="Profile" />
                </div>
                <ul>
                    <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/feedbacks">Feedbacks</Link>
                    </li>
                </ul>
        </div>
    );
};

export default AdminSidebar;
