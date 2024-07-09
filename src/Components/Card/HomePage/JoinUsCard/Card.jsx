import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Card.css'; // Make sure this import points to the location of your CSS file

export const Card = () => {
    return (
        <div className="card">
            <img src="shpelogo.png" alt="Card Image" />
            <div className="card-content">
                <h2><strong>Join the SHPE Famila!</strong></h2>
                <p>Make new friends and connections by joining SHPE! It's our mission not only to assemble our community, but to also bring professional opportunities directly to our members! </p>
                <Link to="/join"> 
                    <button><strong>Join Today</strong></button>
                </Link>
            </div>
        </div>
    );
};

export default Card;