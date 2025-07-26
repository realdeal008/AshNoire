"use client";

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-left fade-in-left">
          <h1 className="hero-title">
            Crafting <span className="gold-gradient">Luxurious</span><br />Experiences
          </h1>
          <p className="hero-subtitle">
            Elevate your brand with bespoke content creation and unforgettable event design by AshNoire, where sophistication meets creativity.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-consultation">
              Book a Consultation <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#portfolio" className="btn-portfolio">
              View Portfolio <i className="fa-solid fa-images"></i>
            </a>
          </div>
        </div>

       <div className="hero-right fade-in-up">
          <div className="hero-image-wrapper">
            <div className="hero-image-circle">
              <Image
                src="/ashlogo.png"
                alt="Elegant portrait of AshNoire"
                className="hero-image"
                width={300}
                height={300}
              />
            </div>
            <div className="hero-badge">
              <span className="hero-badge-years">5+</span>
              <span className="hero-badge-text">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
