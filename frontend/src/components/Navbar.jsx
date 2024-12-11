import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-container">
            <div className="logo">Elevate Academy</div>
            
            <nav className="nav-bar">
                <a className="nav-items active">Home</a>
                <a className="nav-items">Courses</a>
                <a className="nav-items">About</a>
                <a className="nav-items">Contact</a>
                <button className="get-started-btn">Get Started</button>
            </nav>
            
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>
            
            <nav className={`menu ${isMenuOpen ? 'show' : ''}`}>
                <a className="nav-items active">Home</a>
                <a className="nav-items">Courses</a>
                <a className="nav-items">About</a>
                <a className="nav-items">Contact</a>
                <button className="get-started-btn">Get Started</button>
            </nav>
        </div>
    );
}

export default Navbar;