"use client";

import About from "@/component/about";
import Brands from "@/component/brands";
import ContactSection from "@/component/contact";
import FooterSection from "@/component/footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/navbar";
import PortfolioSection from "@/component/portfolio";
import ServicesSection from "@/component/services";
import TestimonialsSection from "@/component/testimonial";


export default function Home() {
  return (
    < >
     <Navbar />
     <Hero />
     <Brands/>
     <About/>
     <ServicesSection/>
     <PortfolioSection/>
     <TestimonialsSection/>
     <ContactSection/>
     <FooterSection/>
    </>
  );
}
