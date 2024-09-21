import React from 'react';
import ImageSlider from '../../ImageSlider'; // Import the ImageSlider component
import './Events.css';

// Define multiple sets of slides
const firstSetOfSlides = [
  { url: 'http://localhost:5173/sponsorhelp.png', title: 'August1' },
  { url: 'http://localhost:5173/instagram.png', title: 'August2' },
  { url: 'http://localhost:5173/interestform.png', title: 'August3' },
  // Add more slides as needed
]; 

const secondSetOfSlides = [
  { url: 'http://localhost:5173/shpelogo.png', title: 'September1' },
  { url: 'http://localhost:5173/instagram.png', title: 'September2' },
  { url: 'http://localhost:5173/linkedin.png', title: 'September3' },
  // Add more slides as needed
];

const thirdSetOfSlides = [
  { url: 'http://localhost:5173/shpelogo.png', title: 'October1' },
  { url: 'http://localhost:5173/instagram.png', title: 'October2' },
  { url: 'http://localhost:5173/NCR.png', title: 'October3' },
  // Add more slides as needed
];

const fourthSetOfSlides = [
  { url: 'http://localhost:5173/shpelogo.png', title: 'November1' },
  { url: 'http://localhost:5173/instagram.png', title: 'November2' },
  { url: 'http://localhost:5173/NCR.png', title: 'November3' },
  // Add more slides as needed
];

const fifthSetOfSlides = [
  { url: 'http://localhost:5173/shpelogo.png', title: 'December1' },
  { url: 'http://localhost:5173/instagram.png', title: 'December2' },
  { url: 'http://localhost:5173/NCR.png', title: 'December3' },
  // Add more slides as needed
];

const Events = () => {
  return (
    <div>
      <div className='Title'>GSU-SHPE Events</div>
      <div className='Sub-title'>
        We love seeing our members come by and have a good time. Thus, we bring you a collection of our events planned out this semester!
      </div>
      
      {/* First instance of ImageSlider */}
      <div className='Slider-container'>
        <h2>August Events</h2>
        <ImageSlider slides={firstSetOfSlides} />
      </div>

      {/* Second instance of ImageSlider */}
      <div className='Slider-container'>
        <h2>September Events</h2>
        <ImageSlider slides={secondSetOfSlides} />
      </div>
      
      {/* Third instance of ImageSlider */}
      <div className='Slider-container'>
        <h2>October Events</h2>
        <ImageSlider slides={thirdSetOfSlides} />
      </div>

      {/* Fourth instance of ImageSlider */}
      <div className='Slider-container'>
        <h2>November Events</h2>
        <ImageSlider slides={fourthSetOfSlides} />
      </div>

      {/* Fifth instance of ImageSlider */}
      <div className='Slider-container'>
        <h2>December Events</h2>
        <ImageSlider slides={fifthSetOfSlides} />
      </div>
    </div>
  );
};

export default Events;
