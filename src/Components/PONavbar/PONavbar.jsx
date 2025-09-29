import React from "react"
import { NavLink } from "react-router-dom";
import './PONavbar.css'
import MainLogo from '../../Assets/MainLogo.png'
import UserIcon from '../../Assets/UserIcon.png'

const PONavbar = () => {
    return (
        <nav className="PONavbar">
            <div className="logo-container">
                <img src={MainLogo} alt="PetTapp Logo" className='MainLogo' />
                <span className="POlogo-text">PetTapp</span>
            </div>
            <ul className="POmenu-links">
                <li><NavLink to="/POHome" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home</NavLink></li>
                <li>Services</li>
                <li><NavLink to="/POMyPets" end className={({ isActive }) => (isActive ? "active" : "")}>
                My Pets</NavLink></li>
                <li>Appointments</li>
                <li>Messages</li>
            </ul>

            <div className="right-PONavbar">
                <div className="searchbar">
                    <input type="text" placeholder="Search services, items or pet care" className="search-input" />
                </div>
            

            <div className="pfp-user">
                <span className="welcome-text">Welcome, DeePee W. Ash!</span>
                <img src={UserIcon} alt="User Icon" className="user-icon"/>
            </div>
            </div>
        </nav>
    );
}

export default PONavbar;
