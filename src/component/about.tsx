"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div
        className={`about-container ${visible ? 'fade-in-up' : 'fade-init'}`}
        ref={sectionRef}
      >
        <div className="about-content">
          <div className="about-image-wrapper">
            <Image
              src="/ashabout.png"
              alt="AshNoire working at an elegant event setup"
              className="about-image"
              loading="lazy"
              decoding="async"
              width={1170}
              height={780}
            />

            <div className="gradient-overlay"></div>

              <div className="about-text-overlay">
                <h1 className="about-headings">
                 <span className='about-ash'>Ashnoire </span> <span className="highlight">Events</span>
                </h1>
                <p className="about-subheading">
                   Where bold crimson meets shimmering metallics to create unforgettable moments
                </p>
            </div>

          </div>

          <div className="about-text">
            <h2 className="about-heading">
              <span className="about-heading-line" />
              The AshNoire Difference
            </h2>

            <p className="about-paragraph">
              With over five years in luxury content creation and event design, I bring a unique perspective that blends Black cultural richness with high-end aesthetics. My work celebrates sophistication while maintaining authenticity.
            </p>

            <p className="about-paragraph">
              Having worked with elite clients across various industries, I understand the nuances of creating memorable experiences that resonate with discerning audiences.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>
                  <span className="feature-title">Bespoke Approach:</span> Every project receives individualized attention and creative solutions tailored to your brand.
                </p>
              </div>

              <div className="about-feature">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>
                  <span className="feature-title">Cultural Insight:</span> Expertise in creating content that elevates Black excellence without compromising luxury appeal.
                </p>
              </div>

              <div className="about-feature">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>
                  <span className="feature-title">Premium Network:</span> Access to exclusive vendors and creatives who understand luxury market expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
