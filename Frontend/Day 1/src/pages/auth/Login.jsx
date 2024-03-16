import React, { useState } from 'react';
import "../../assets/css/Login.css"; // Assuming your CSS file is named Login.css
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [role, setRole] = useState('User'); // State to hold selected role

  const handleRoleChange = (event) => {
    setRole(event.target.value); // Update selected role
  };

  const handleLogin = () => {
    // Perform login logic based on selected role (replace with your actual logic)
    if (role === 'User') {
      history('/project6/user/home');
    } else if (role === 'Admin') {
      history('/project6/admin/main');
    } else {
      console.error('Invalid role'); // Handle invalid role selection (optional)
    }
  };

  const handleForgotPassword = () => {
    history('/project6/forgot-password'); // Assuming this is your Forgot Password page route
  };

  const handleRegister = () => {
    history('/project6/register');
  };

  return (
    <div className="login-container" style={{ background: '#f0f0f0' }}>
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="role">Role:</label>
        <select id="role" name="role" value={role} onChange={handleRoleChange}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="button-group">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <button className="forgot-button" onClick={handleForgotPassword}>
          Forgot Password
        </button>
      </div>
      <div className="register-group">
        <p>
          New user? <a onClick={handleRegister}>Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
