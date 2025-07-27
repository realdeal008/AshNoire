"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const logos = [
  {
    src: '/elegant.jpg',
    alt: 'Logo of luxury fashion brand client',
  },
  {
    src: '/luxury.png',
    alt: 'Logo of high-end event company client',
  },
  {
    src: '/celeb.jpg',
    alt: 'Logo of celebrity client',
  },
  {
    src: '/beauty.jpg',
    alt: 'Logo of beauty brand client',
  },
  {
    src: '/travel.jpg',
    alt: 'Logo of luxury travel client',
  },
];

const Brands: React.FC = () => {
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes(prev => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    logoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <section className="brands-section">
      <div className="brands-container">
        <h3 className="brands-title">TRUSTED BY PREMIUM BRANDS</h3>
        <div className="brands-logos">
          {logos.map((logo, index) => (
            <div
              key={index}
              ref={(el) => { logoRefs.current[index] = el ?? null; }}
              data-index={index}
              className={`brand-logo ${
                visibleIndexes.includes(index) ? 'logo-visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
