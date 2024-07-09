import React from 'react';
import './Shpetinas.css';

const Shpetinas = () => {
    return (
        <div className="Shpetinas-card">
            <img src="Shpetinass.png" alt="SHPE Tinas Image" className="Shpetinas-image" />
            <div className="Shpetinas-content">
                <h2>SHPE<span style= {{ textTransform: 'lowercase'}}>tinas</span></h2>
                <p>SHPEtinas is an initiative within SHPE that aims to have Latina representation at all levels of STEM. This is achieved through advocacy, networking events, and professional resources.</p>
            </div>
        </div>
    );
};

export default Shpetinas;
