import React from 'react';
import { Link } from 'react-router-dom';
import './SponsorCard.css'; // Make sure this points to the correct location of your CSS file

const SponsorCard = () => {
    return (
        <div className="sponsor-card">
            <div className="sponsor-logo">
                <img src="shpeoldlogo.png" alt="SHPE Logo" />
            </div>
            <div className="sponsor-content">
                <h2><strong>Become a Sponsor!</strong></h2>
                <p>Become a Sponsor for SHPE to help us reach our mission of assisting the Hispanic community reach their full potential and achieve academic and professional achievements!</p>
                <Link to="/sponsors">
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    );
};

export default SponsorCard;
