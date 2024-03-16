import "../../assets/css/Login.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    
    const history = useNavigate();

    const handleLogin = () => {
        // Perform login logic here
        // For demonstration, let's assume the login is successful
        // Redirect to the home page
        history('/project6/user/home');
    };
    return (
        <div className="login-container" style={{ background: '#f0f0f0' }}>
            <h2>Sign Up</h2>
            <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="text" name="text" />
            </div>
            <div className="input-group">
                <label htmlFor="mobileno">Mobile No:</label>
                <input type="number" id="number" name="number" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="button-group1">
                <button className="signin-button" onClick={handleLogin}>Sign In</button>
            </div>
        </div>
    )
}

export default Register
