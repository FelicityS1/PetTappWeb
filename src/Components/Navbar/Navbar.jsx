import React from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "../../Assets/MainLogo.png";
import "./Navbar.css";

    const Navbar = () => {
    return (
        <nav>
        <div className="logo-container">
            <img src={MainLogo} alt="PetTapp Logo" className="MainLogo" />
            <span className="logo-text">PetTapp</span>
        </div>

        <ul className="menu-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>


        <div className="auth-btns">
            <NavLink to="/login" className="btn2">Login</NavLink>
            <NavLink to="/signup" className="btn1">Sign Up</NavLink>
        </div>
        </nav>
    );
    };

export default Navbar;
