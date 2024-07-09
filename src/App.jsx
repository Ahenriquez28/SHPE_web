import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ImageSlider from './Components/ImageSlider';
import Card from "./Components/Card/HomePage/JoinUsCard/Card";
import SponsorCard from "./Components/Card/HomePage/SponsorCard/SponsorCard";
import ShpeTinas from "./Components/Card/HomePage/ShpeTinasCard/Shpetinas";
import ShpeJr from "./Components/Card/HomePage/ShpeJr/ShpeJr";
import ShpeConvention from "./Components/Card/HomePage/ShpeConvention/ShpeConvention";
import Resume from "./Components/Card/HomePage/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Routes";

const App = () => {
    const slides = [
        { url: 'http://localhost:5173/Designer.png', title: 'Designer' },
        { url: 'http://localhost:5173/fair.png', title: 'Fair' },
    ];
/* homepage cards*/
    return (
        <div>
            <header className="header">
                <Navbar />
            </header>
            <div style={{ paddingTop: '19.7mm' }}>
                <ImageSlider slides={slides} />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <SponsorCard />
            </div>
            <div>
                <ShpeTinas />
            </div>
            <div>
                <ShpeJr />
            </div>
            <div>
                <ShpeConvention />
            </div>
            <div>
                <Resume />
            </div>
            <div>
                <Routes />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
