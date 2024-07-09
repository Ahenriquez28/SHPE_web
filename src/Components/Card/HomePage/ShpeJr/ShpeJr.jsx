import React from 'react';
import './ShpeJr.css';

const ShpeJr = () => {
    return (
        <div className="ShpeJr-card">
            <img src="ShpeJrImage.png" alt="SHPEJr-Image" className="ShpeJr-image" />
            <div className="ShpeJr-content">
                <h2>SHPE J<span style= {{ textTransform: 'lowercase'}}>r.</span></h2>
                <p>The future is always in the hands of the next generation! SHPE acknowledges this and created SHPE Jr to help students in K-12 schools be exposed to STEM-related careers and assist parents in the growth their student!</p>
            </div>
        </div>
    );
};

export default ShpeJr;
