import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4 className='sub-headings'>Elevate Academy</h4>
                    <p className='sub-para'>
                        Empowering learners of all ages to acquire essential skills 
                        for personal and professional growth.
                    </p>
                </div>
                
                <div className="footer-section">
                    <h4 className='sub-headings'>Quick Links</h4>
                    <ul className="footer-links-list">
                        <li><a href="#" className='footer-nav'>Courses</a></li>
                        <li><a href="#" className='footer-nav'>About Us</a></li>
                        <li><a href="#" className='footer-nav'>Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4 className='sub-headings'>Connect With Us</h4>
                    <div className="social-links">
                        <a href="#" className='footer-links'>
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="#" className='footer-links'>
                            <FaTwitter /> Twitter
                        </a>
                        <a href="#" className='footer-links'>
                            <FaFacebook /> Facebook
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="copyright">
                © 2024 Elevate Academy. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;