import React, { useState, useEffect } from 'react';

const slideStyles = {
  width: "67.7%", /*1000px*/
  height: "500px", 
  borderRadius: "0",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "35%",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "500px", 
  margin: "0 auto",
};

const dotsContainerStyles = {
  position: "absolute",
  bottom: "20px",
  left: "35%", // Changed left position to 50%
  transform: "translateX(-50%)", // Centering horizontally
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const dotStyle = {
  margin: "0 5px",
  cursor: "pointer",
  fontSize: "20px",
  color: "#fff",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatic slide change after 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Restart interval when currentIndex changes

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        ❱
      </div>
      <div style={slideStylesWithBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={dotStyle}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
