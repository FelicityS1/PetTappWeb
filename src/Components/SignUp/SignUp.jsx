import React from 'react';
import './SignUp.css';
import MainLogo from '../../Assets/MainLogo.png';
import Google from '../../Assets/Google.png';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <img src={MainLogo} alt="logo" className="signup-logo" />
          <h2>Sign Up</h2>
        </div>

        <form className="signup-form">
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-field">
              <input type="password" placeholder="Password" required />
              <span className="toggle-icon">👁</span>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="password-field">
              <input type="password" placeholder="Confirm Password" required />
              <span className="toggle-icon">👁</span>
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" required />
            <span>
              I agree to the <a href="/terms">terms & policies</a>
            </span>
          </div>

          <button type="submit" className="btn-confirm">
            Confirm
          </button>
        </form>

        <div className="divider">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>

        <div className="social-login">
          <button className="googlebtn"> 
              <img src={Google} alt="Google Logo" className="googlelogo"/>
              Sign in with Google
          </button>
        </div>

        <p className="signin">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
