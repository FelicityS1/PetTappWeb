import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addNewPet.css";

const AddNewPet = () => {
    const navigate = useNavigate();
    const [petData, setPetData] = useState({
        name: "",
        sex: "",
        birthday: "",
        weight: "",
        species: "",
        breed: "",
        info: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPetData({ ...petData, [name]: value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
        setPetData({ ...petData, image: URL.createObjectURL(e.target.files[0]) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Pet Data Submitted:", petData);
        
    };

    const handleReset = () => {
        setPetData({
        name: "",
        sex: "",
        birthday: "",
        weight: "",
        species: "",
        breed: "",
        info: "",
        image: null,
        });
    };

return (
        <div className="addpet-page">
        <h2 className="addpet-header">My Pets</h2>
        <form className="addpet-form" onSubmit={handleSubmit}>
            <button
                className="close-btn"
                onClick={() => navigate("/POMyPets")}
                type="button"
                aria-label="Close"
                >
                ✖
                </button>
            <div className="form-left">
            <div className="form-group">
                <label>Pet Name</label>
                <input type="text" name="name" value={petData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Sex</label>
                <input type="text" name="sex" value={petData.sex} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Birthday</label>
                <input type="date" name="birthday" value={petData.birthday} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Weight</label>
                <input type="text" name="weight" value={petData.weight} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Species</label>
                <input type="text" name="species" value={petData.species} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Breed</label>
                <input type="text" name="breed" value={petData.breed} onChange={handleChange} />
            </div>

            <div className="form-group full-width">
                <label>Additional Info. (Color/Marks etc.)</label>
                <input type="text" name="info" value={petData.info} onChange={handleChange} />
            </div>
            </div>

            <div className="form-right">
            <div className="image-upload">
                {petData.image ? (
                <img src={petData.image} alt="Pet Preview" className="preview-img" />
                ) : (
                <div className="plus-circle">+</div>
                )}
                <input type="file" id="file-upload" accept="image/*" onChange={handleImageChange} hidden />
                <label htmlFor="file-upload" className="upload-btn">Select Image</label>
            </div>

            <div className="action-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
            </div>
            </div>
        </form>
        </div>
    );
    };

export default AddNewPet;