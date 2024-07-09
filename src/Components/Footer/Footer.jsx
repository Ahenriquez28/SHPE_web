import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://www.instagram.com/shpe.gastate/" target="_blank" rel="noopener noreferrer">
                    <img src="instagram.png" alt="Instagram" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/georgia-state-shpe-098541317/" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" className="icon" />
                </a>
                <a href="mailto:shpe.gastate@gmail.com">
                    <img src="gmail.png" alt="Gmail" className="icon" style={{width: '80px'}}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
