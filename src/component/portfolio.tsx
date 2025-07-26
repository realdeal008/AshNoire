"use client";

// PortfolioSection.tsx
import React from 'react';
import Image from 'next/image';

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      src: '/portfoliop.avif',
      title: 'LUXURY EDITORIAL',
      text: 'High-end fashion photography',
      category: 'content',
      alt: 'Luxury fashion editorial featuring Black model in gold and red color scheme',
      width: 400,
      height: 300,
    },
    {
      src: '/portphoto.avif',
      title: 'PREMIUM WEDDING',
      text: 'Elegant wedding event design',
      category: 'events',
      alt: 'Sophisticated wedding reception with gold accents and floral arrangements',
      width: 400,
      height: 300,
    },
    {
      src: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
      title: 'BRAND PACKAGING',
      text: 'Premium cosmetic line packaging',
      category: 'branding',
      alt: 'Luxury product packaging design with gold foil details',
      width: 400,
      height: 300,
    },
    {
      src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
      title: 'EXECUTIVE PORTRAITS',
      text: 'Corporate leadership photography',
      category: 'content',
      alt: 'Black entrepreneur portrait session with luxury office setting',
      width: 400,
      height: 300,
    },
    {
      src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      title: 'PRODUCT LAUNCH',
      text: 'Exclusive brand launch event',
      category: 'events',
      alt: 'Launch party with red and gold decor, modern Black art elements',
      width: 400,
      height: 300,
    },
    {
      src: '/photopor.avif',
      title: 'VISUAL IDENTITY',
      text: 'Comprehensive brand guidelines',
      category: 'branding',
      alt: 'Complete brand identity system for luxury app including color palette and typography',
      width: 400,
      height: 300,
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="portfolio-subtitle">Portfolio</span>
          <h2 className="portfolio-title">Signature Creations</h2>
          <p className="portfolio-description">
            A showcase of bespoke projects that blend cultural authenticity with refined luxury aesthetics.
          </p>
          <div className="portfolio-filters">
            <button className="filter-button active" data-filter="all">All</button>
            <button className="filter-button" data-filter="content">Content</button>
            <button className="filter-button" data-filter="events">Events</button>
            <button className="filter-button" data-filter="branding">Branding</button>
          </div>
        </div>

        <div className="gallery-grid">
          {portfolioItems.map((item, idx) => (
            <div
              className="portfolio-item group"
              key={idx}
              data-category={item.category}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="portfolio-image"
                width={item.width}
                height={item.height}
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-caption-title">{item.title}</h3>
                <p className="portfolio-caption-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <a href="#" className="view-portfolio-button">
            View Full Portfolio <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
