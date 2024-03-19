import React, { useState } from 'react';
import "../../assets/css/ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here
        console.log('Submitted:', { email, oldPassword, newPassword });

        history('/');
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label htmlFor="old-password">Old Password:</label>
                    <input type="password" id="old-password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label htmlFor="new-password">New Password:</label>
                    <input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
