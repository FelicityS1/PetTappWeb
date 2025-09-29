import React from 'react';
import './LogIn.css';
import MainLogo from '../../Assets/MainLogo.png';
import Google from '../../Assets/Google.png';

const LogIn = () => {
  return (
  <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <img src={MainLogo} alt="logo" className="login-logo" />
            <h2>Log In</h2>
          </div>
          <form className="login-form">
                    <div className="form-group">
                      <label>Username/Email</label>
                      <input type="text" placeholder="" required />
                    </div>
          
                    <div className="form-group">
                      <label>Password</label>
                      <div className="password-field">
                        <input type="password" placeholder="Password" required />
                        <span className="toggle-icon">👁</span>
                      </div>
                    </div>
          
                    <div className="save-login">
                      <input type="checkbox" required />
                      <span>
                        Remember <a href="/save">me</a>
                      </span>
                    </div>
              
                    <button type="submit" className="btn-confirm">
                      LogIn 
                    </button>
                    <p className="forgot-password">
                      <a href="forgot-password">Forgot Password?</a>
                    </p>
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
                    Don't have an account yet? <a href="/signup">Sign Up</a>
                  </p>
                </div>
              </div>
            
            );    
          };
        

export default LogIn; 
