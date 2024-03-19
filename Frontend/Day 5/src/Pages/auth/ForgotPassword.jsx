import React from 'react';
import '../../assets/css/Login.css';

function ForgotPassword() {
  return (
    <div className="wrapper">
      <div className="align">
        <div className="grid">
          <h1 className='login-header'>Verify</h1>
          <form action="https://httpbin.org/post" method="POST" className="form login">
            <div className="form__field">
              <label htmlFor="forgot__email">
                <svg className="icon">
                  <use xlinkHref="#icon-user"></use>
                </svg>
                <span className="hidden">Email</span>
              </label>
              <input autoComplete="email" id="forgot__email" type="email" name="email" className="form__input" placeholder="Email" required />
            </div>
            {/* <div className="form__field">
              <label htmlFor="forgot__otp">
                <svg className="icon">
                  <use xlinkHref="#icon-lock"></use>
                </svg>
                <span className="hidden">OTP</span>
              </label>
              <input id="forgot__otp" type="text" name="otp" className="form__input" placeholder="OTP" required />
            </div> */}
            <div className="form__field">
              <input type="submit" value="Verify OTP" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
