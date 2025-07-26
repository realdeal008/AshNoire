"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Optional: remove observer after triggering once
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    const cards = section?.querySelectorAll('.testimonial-card');

    if (section) observer.observe(section);
    if (cards) cards.forEach((card) => observer.observe(card));

    return () => {
      if (section) observer.unobserve(section);
      if (cards) cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Testimonials</span>
          <h2 className="testimonials-title">Client Experiences</h2>
          <p className="testimonials-description">
            Hear from luxury brands and discerning clients who&apos;ve experienced the AshNoire touch.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-bar"></div>
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                AshNoire transformed our brand launch into an unforgettable experience. Her ability to blend contemporary
                luxury with cultural authenticity is unmatched.
              </p>
            </div>
            <div className="testimonial-author">
              <Image
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Portrait of luxury skincare brand CEO"
                className="author-image"
                width={80}
                height={80}
                style={{ borderRadius: '50%' }}
              />
              <div>
                <h4 className="author-name">Danielle Carter</h4>
                <p className="author-title">CEO, Noir Luxe Beauty</p>
              </div>
            </div>
          </div>

         <div className="testimonial-card">
           <div className="testimonial-bar"></div>
             <div className="testimonial-content">
                 <div className="quote-mark">"</div>
                     <p className="testimonial-text">
                            The content AshNoire created for our luxury real estate listings elevated our entire portfolio. Her eye for refined details and sophisticated compositions is extraordinary.
                     </p>
                 </div>
                    <div className="testimonial-author">
                        <Image
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                          alt="Portrait of luxury real estate broker"
                          className="author-image"
                          width={80}
                          height={80}
                          style={{ borderRadius: '50%' }}
                        />
                        <div>
                            <h4 className="author-name">Marcus Johnson</h4>
                            <p className="author-title">Principal Broker, Elite Properties</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
