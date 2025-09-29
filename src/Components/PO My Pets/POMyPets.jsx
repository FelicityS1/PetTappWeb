import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './POMyPets.css';
import UserIcon from "../../Assets/UserIcon.png";

const POMyPets = () => {
  const [pets, setPets] = useState([
    { id: 1, name: "Mochi", species: "Beagle", age: "7", image: UserIcon },
    { id: 2, name: "Ming Ming", species: "Tabby", age: "3", image: UserIcon },
    { id: 3, name: "Placidusax", species: "Ancient Dragon", age: "1,500", image: UserIcon },
  ]);

  const navigate = useNavigate(); 

  const handleAddPet = () => {
    navigate("/AddNewPet"); 
  };

  return (
    <div className="mypets-page">
      <div className="mypets-container">
          <h2 className="mypets-header">My Pets</h2>

      <div className="mypets-list">
        {pets.map((pet) => (
          <div key={pet.id} className="mypet-card">
            <img src={pet.image} alt={pet.name} className="mypet-img" />
            <div className="mypet-info">
              <h3>{pet.name}</h3>
              <p>{pet.species} | {pet.age}</p>
            </div>
          </div>
        ))}

        <div className="mypet-card add-card" onClick={handleAddPet}>
          <span className="plus-icon">+</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default POMyPets;
