import React from 'react';
import './PetOwner.css';
import UserIcon from '../../Assets/UserIcon.png';


const PetOwner = () => {
  return (
  <div className="petowner-page">
        <div className="petowner-container">
          <div className="petowner-header">
            <h2>Complete Pet Owner Prolife</h2>
          </div>

          <div className="profile-upload">
            <label htmlFor="profilePic">
                <img src={UserIcon} alt="Upload Profile" className="profile-pic" />
            </label>
            <input type="file" id="profilePic" accept="image/*" style={{display: 'none'}}/>
          </div>
          <form className="petowner-form">
                <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="" required />
                    </div>

                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="" required />
                    </div>
                </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="text" placeholder="" required />
                    </div>
          
                    <div className="form-group">
                      <label>Complete Home Address</label>
                      <input type="text" placeholder="" required />
                    </div>

            </form>
            <p className="next-page">
                    <a href="/PetProfile">Continue to Pet Profile Completion</a>
                  </p>
            </div>
            </div>   
            
            );    
          };
        

export default PetOwner; 