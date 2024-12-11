import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { label: 'Home', active: true },
        { label: 'Courses', active: false },
        { label: 'About', active: false },
        { label: 'Contact', active: false }
    ];

    return (
        <div className="nav-container">
            <div className="logo">Elevate Academy</div>
            
            {/* Desktop Navigation */}
            <nav className="nav-bar">
                {navLinks.map((link, index) => (
                    <a 
                        key={index} 
                        className={`nav-items ${link.active ? 'active' : ''}`}
                    >
                        {link.label}
                    </a>
                ))}
                <button className="get-started-btn">Get Started</button>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Mobile Navigation */}
            <nav className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                {navLinks.map((link, index) => (
                    <a 
                        key={index} 
                        className={`nav-items ${link.active ? 'active' : ''}`}
                    >
                        {link.label}
                    </a>
                ))}
                <button className="get-started-btn">Get Started</button>
            </nav>
        </div>
    );
}

export default Navbar;