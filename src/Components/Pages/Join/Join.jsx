import React from "react";
import './Join.css';

const Join = () => {
    return (
        <div className='join-container'>
            <header className='join-header'>
                <h1 className='join-main-title'>Join Us</h1>
                <p className='join-subtitle'>Society of Hispanic Professional Engineers</p>
                <p className='join-description'>
                    As the Society of Hispanic Professional Engineers (SHPE) chapter, our purpose is to empower Hispanic professionals in engineering and related fields through a supportive network for personal and professional growth. We are committed to promoting diversity, equity, and inclusion in the engineering industry to inspire and cultivate the next generation of Hispanic leaders in STEM fields.
                </p>
            </header>
            <div className='images-container'>
                <img src='gears.png' alt='Gears Image' className='gears-image' />
                <img src='collab.png' alt='Collab Image' className='collab-image' />
            </div>
            <div className='giant-card'>
                <div className='card-section orange'>
                    <h2 className='card-title'>Social Events</h2>
                    <p className='card-description'>
                        Join us for various social events that help build community and celebrate Latino culture.
                    </p>
                </div>
                <div className='card-section blue'>
                    <h2 className='card-title'>Professional Development</h2>
                    <p className='card-description'>
                        Engage in workshops, info sessions, and networking opportunities to find opportunities for you.
                    </p>
                </div>
                <div className='card-section orange'>
                    <h2 className='card-title'>Hands-on STEM Activity</h2>
                    <p className='card-description'>
                        Participate in exciting STEM projects and activities to build projects with your peers and learn of other STEM fields.
                    </p>
                </div>
            </div>
            <div className='involved'>
                <p className='lineA'>Join Our</p>
                <p className='lineB'>SHPE Familia</p>
            </div>
            <img src="group.png" alt="Group Image" className="group" />
            <div className='active'>Get Involved</div>
            <div className = 'groupMe'>GroupMe </div>
            <div className =' pin'>P.I.N</div>
            <div className = 'Instagram'>Instagram</div>

            <div className = 'groupme-button'>
                <a href = 'https://groupme.com/join_group/101447886/MigiCmFj' target = '_blank' rel='noopener noreferrer'>
                    <img src='groupme.png' alt='group button' className='groupme-link' />
                </a>
            <div />
            <div className = 'insta-button'>
                <a href = 'https://www.instagram.com/shpe.gastate/' target = '_blank' rel='noopener noreferrer'>
                    <img src = 'instagram.png' alt ='insta-button' className ='insta-link' />
                </a>
            </div>
            <div className = 'pin-button'>
                <a href = 'https://pin.gsu.edu/organization/shpe' target='_blank' rel='noopener noreferrer'>
                    <img src = 'shpelogo.png' alt ='pin-button' className='pin-link' />
                </a>
            </div>

            </div>
        </div>
    );
};

export default Join;
