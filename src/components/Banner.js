// src/components/Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import the CSS file for your banner component

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: require('../img/banner1.png'), alt: "Slider Image 1" },
    { src: require('../img/banner2.png'), alt: "Slider Image 2" },
    { src: require('../img/banner3.png'), alt: "Slider Image 3" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  return (
    <div className="banner">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
