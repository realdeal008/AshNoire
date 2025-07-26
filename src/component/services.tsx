"use client";
import React, { useEffect, useRef } from 'react';

const ServicesSection: React.FC = () => {
  const serviceRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="services-tag">Services</span>
          <h2 className="services-title">Curated Excellence</h2>
          <p className="services-description">
            Offering specialized services that merge creative vision with flawless execution to bring your luxury brand aspirations to life.
          </p>
        </div>

        <div className="services-grid">
          {[
            {
              icon: 'fas fa-camera-retro',
              title: 'Luxury Content Creation',
              description: 'High-end visual storytelling for premium brands, featuring cinematic photography, elegant videography, and sophisticated styling.',
              points: [
                'Editorial photography',
                'Brand campaign visuals',
                'Art direction & styling',
              ],
              gradient: 'red-to-gold'
            },
            {
              icon: 'fas fa-calendar-star',
              title: 'Premium Event Design',
              description: 'Bespoke event experiences from intimate gatherings to grand celebrations, infused with luxury details and cultural richness.',
              points: [
                'Full conceptualization',
                'Vendor coordination',
                'Cultural event expertise',
              ],
              gradient: 'gold-to-gray'
            },
            {
              icon: 'fas fa-paint-brush',
              title: 'Brand Experience Design',
              description: 'Comprehensive brand packaging that communicates exclusivity and sophistication across all touchpoints.',
              points: [
                'Visual identity systems',
                'Luxury brand positioning',
                'Experiential activations',
              ],
              gradient: 'gray-to-red'
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`service-card`}
              ref={el => (serviceRefs.current[index] = el!)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`service-icon ${service.gradient}`}>
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <p>Interested in custom services?</p>
          <a href="#contact" className="services-cta">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;