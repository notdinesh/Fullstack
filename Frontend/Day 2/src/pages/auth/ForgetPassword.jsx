import React from 'react';
import '../../assets/css/Forgot.css'; // Assuming your CSS file is named ForgetPassword.css
import { useNavigate } from 'react-router-dom';


const ForgetPassword = () => {
  const history = useNavigate();
  const handleReset = () => {
    
    history('/project6/login'); // Assuming this is your Forgot Password page route
  };

  return (
    <div className="forget-password-container" style={{ background: '#f0f0f0' }}>
      <h2>Forget Password</h2>
      <div>Please enter your email address to reset your password:</div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="button-group">
      <button className="login-button" onClick={handleReset}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;