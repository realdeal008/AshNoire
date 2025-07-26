"use client";

import React, { useEffect, useRef, useState } from 'react';

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation only once
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer-section ${isVisible ? 'fade-in' : ''}`}
    >
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            <span className="text-red-700">ASH</span>
            <span className="gold-gradient">NOIRE</span>
          </h3>
          <p>
            Elevating brands through luxurious content creation and unforgettable
            event experiences.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive insights and upcoming event announcements.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 KhardishTuff Tech. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
