"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo-container">
            <span className="logo-text">
              <span className="text-red">ASH</span><span className="gold-gradient">NOIRE</span>
            </span>
          </div>

          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="mobile-menu-button-container">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            <a href="#home" className="mobile-link">Home</a>
            <a href="#about" className="mobile-link">About</a>
            <a href="#services" className="mobile-link">Services</a>
            <a href="#portfolio" className="mobile-link">Portfolio</a>
            <a href="#testimonials" className="mobile-link">Testimonials</a>
            <a href="#contact" className="mobile-link">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

