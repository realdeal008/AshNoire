"use client";

import React, { useEffect, useRef, useState } from 'react';

const logos = [
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/085a8e65-2861-4eaa-9984-ff764b8d2d68.png',
    alt: 'Logo of luxury fashion brand client',
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ada5573e-0474-4dca-8126-8b16a2c8f5d2.png',
    alt: 'Logo of high-end event company client',
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/428a98b8-9cf4-4b97-bc38-d082b853d009.png',
    alt: 'Logo of celebrity client',
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/205a32a3-69b3-403e-b1b6-ac2ce1ad72ac.png',
    alt: 'Logo of beauty brand client',
  },
  {
    src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b1440df-8511-4027-a7c7-244f7cd38bfc.png',
    alt: 'Logo of luxury travel client',
  },
];

const Brands: React.FC = () => {
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);
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
            <img
              key={index}
              ref={(el) => (logoRefs.current[index] = el)}
              data-index={index}
              src={logo.src}
              alt={logo.alt}
              className={`brand-logo ${
                visibleIndexes.includes(index) ? 'logo-visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
