import React from 'react';
import '../../assets/css/Login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="wrapper">
      <div className="align">
        <div className="grid">
          <h1 className='login-header'>LOGIN</h1>
          <form action="https://httpbin.org/post" method="POST" className="form login">
            <div className="form__field">
              <label htmlFor="login__username">
                <svg className="icon">
                  <use xlinkHref="#icon-user"></use>
                </svg>
                <span className="hidden">Username</span>
              </label>
              <input autoComplete="username" id="login__username" type="text" name="username" className="form__input" placeholder="Username" required />
            </div>
            <div className="form__field">
              <label htmlFor="login__password">
                <svg className="icon">
                  <use xlinkHref="#icon-lock"></use>
                </svg>
                <span className="hidden">Password</span>
              </label>
              <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
            </div>
            <div className="form__field_submit">
              <Link to="/cg/user/home"><input type="submit"/></Link>
            </div>
            <div className="form__field">
              <a href="/cg/forgot" className="forgot-password">Forgot Password?</a>
            </div>
          </form>
          <p className="text--center">
            Not a member? <a href="#">Sign up now</a>
            <svg className="icon">
              <use xlinkHref="#icon-arrow-right"></use>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
