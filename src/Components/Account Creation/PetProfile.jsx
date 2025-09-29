import React, { useState } from 'react';
import './PetProfile.css';
import UserIcon from '../../Assets/UserIcon.png';

const PetProfile = () => {

    const [pets, setPets] = useState([{id:1}]);
    const addNewPet = (e) => {
        e.preventDefault();
        setPets([...pets, {id: pets.length + 1}]);
    };

    const removePet = (id) => {
        setPets(pets.filter((pet) => pet.id !== id));
    }
  return (
  <div className="petprofile-page">
        <div className="petprofile-container">
          <div className="petprofile-header">
            <h2>Complete Pet Profile</h2>
          </div>

         {pets.map((pet, index) => (
          <div key={pet.id} className="pet-card">
            <div className="pet-card-header">
              <h3>Pet #{index + 1}</h3>
              {pets.length > 1 && (
                <button
                  type="button"
                  className="remove-pet"
                  onClick={() => removePet(pet.id)}
                >
                  ×
                </button>
              )}
            </div>

            <form className="petprofile-form">
              <div className="petprofile-upload">
                <label htmlFor={`petprofilePic-${pet.id}`}>
                  <img
                    src={UserIcon}
                    alt="Upload Profile"
                    className="petprofile-pic"
                  />
                </label>
                <input
                  type="file"
                  id={`petprofilePic-${pet.id}`}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>
          
                    <div className="form-group">
                    
                      <label>Pet Name</label>
                      <input type="text" placeholder="" required />
                    </div>

                    <div className="form-group">
                      <label>Species</label>
                      <input type="text" placeholder="" required />
                    </div>

                    <div className="form-group">
                      <label>Breed</label>
                      <input type="text" placeholder="" required />
                    </div>
          
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input type="text" placeholder="" required />
                    </div>

                    <div className="form-group">
                      <label>Gender</label>
                      <input type="text" placeholder="" required />
                    </div>

                    <div className="form-group">
                      <label>Color or Identifying Marks</label>
                      <input type="text" placeholder="" required />
                    </div>
            </form>
          </div>
        ))}

                    <button onClick={addNewPet} className="btn-addPet">
                      Add Another Pet
                    </button>

                    <p className="next-page">
                    <a href="/PetProfile">Continue to Pet Profile Completion</a>
                  </p>

            </div>
            </div>   
            
            );    
          };
        

export default PetProfile