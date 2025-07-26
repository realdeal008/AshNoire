"use client";

import { useEffect } from "react";

const ScriptLoader = () => {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
      };
      mobileMenuButton.addEventListener('click', toggleMobileMenu);
      return () => {
        mobileMenuButton.removeEventListener('click', toggleMobileMenu);
      };
    }
  }, []);

  useEffect(() => {
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const handleFilterClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement & { dataset: { filter?: string } };
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('border-red-700', 'text-red-700', 'bg-red-700', 'text-white', 'hover:bg-gray-100');
        btn.classList.add('border-gray-300', 'text-gray-700', 'hover:bg-gray-100');
      });

      target.classList.remove('border-gray-300', 'text-gray-700', 'hover:bg-gray-100');
      target.classList.add('border-red-700', 'text-red-700', 'hover:bg-red-700');

      if (!target.classList.contains('bg-red-700')) {
        target.classList.add('bg-red-700', 'text-white');
      }

      // Filter items
      const filter = target.dataset.filter;
      portfolioItems.forEach(item => {
        if (filter === 'all' || (item as HTMLElement).dataset.category === filter) {
          (item as HTMLElement).style.display = 'block';
        } else {
          (item as HTMLElement).style.display = 'none';
        }
      });
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', handleFilterClick);
    });

    return () => {
      filterButtons.forEach(button => {
        button.removeEventListener('click', handleFilterClick);
      });
    };
  }, []);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleAnchorClick = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  useEffect(() => {
    // Add animation on scroll (parallax effect)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero-image img') as HTMLElement | null;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScriptLoader;
